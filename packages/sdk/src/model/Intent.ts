import { Wallet } from '../model/Wallet'
import { IntentAction } from '../model/IntentAction'
import { BigNumber } from 'bignumber.js'
import { IntentDependency } from './IntentDependency'
import { Config } from '../Config'
import { Dependency } from './Dependency'
const Web3 = require('web3')
import { ethers } from 'ethers'

export class Intent {
  dependencies: Dependency[]
  action: IntentAction
  salt: string
  maxGasPrice: BigNumber
  maxGasLimit: BigNumber
  expiration: BigNumber

  constructor(
    dependencies: Array<Dependency>,
    action: IntentAction,
    salt: string,
    maxGasPrice: BigNumber,
    maxGasLimit: BigNumber,
    expiration: BigNumber
  ) {
    this.dependencies = []
    this.action = action
    this.salt = salt
    this.maxGasPrice = maxGasPrice
    this.maxGasLimit = maxGasLimit
    this.expiration = expiration

    dependencies.forEach((d) => this.add_dependency(d))
  }

  add_dependency(dependency: Dependency) {
    if (dependency) {
      this.dependencies.push(
        new IntentDependency(dependency.address, dependency.id)
      )
    }
  }

  id(wallet: Wallet): string {
    return (
      '0x' +
      ethers.utils.solidityKeccak256(
        ['address', 'address', 'bytes32'],
        [
          wallet.address,
          wallet.config.implementation,
          ethers.utils.solidityKeccak256(
            ['bytes'],
            [this.build_implementation_call(wallet.config)]
          ),
        ]
      )
    )
  }

  build_implementation_call(config: Config): string {
    const abi = new ethers.utils.AbiCoder()
    return abi.encode(
      [
        'bytes',
        'address',
        'uint256',
        'bytes',
        'uint256',
        'uint256',
        'uint256',
        'bytes32',
      ],
      [
        this.build_dependency_call(config),
        this.action.to,
        this.action.value.toFixed(),
        this.action.data,
        this.maxGasLimit.toFixed(),
        this.maxGasPrice.toFixed(),
        this.expiration.toFixed(),
        ethers.utils.hexZeroPad(this.salt, 64),
      ]
    )
  }

  build_dependency_call(config: Config): string {
    const depsCount = this.dependencies.length

    if (depsCount === 0) {
      // No dependencies
      return '0x'
    } else if (depsCount === 1) {
      // Single dependency, call wallet directly
      const call = new Web3().eth.abi.encodeFunctionCall(
        {
          name: 'relayedAt',
          type: 'function',
          inputs: [
            {
              type: 'bytes32',
              name: '_id',
            },
          ],
        },
        [this.dependencies[0].id]
      )

      return (
        '0x' +
        this.dependencies[0].address.replace('0x', '') +
        call.replace('0x', '')
      )
    } else {
      // Multiple dependencies, using DepsUtils contract
      const call = new Web3().eth.abi.encodeFunctionCall(
        {
          name: 'multipleDeps',
          type: 'function',
          inputs: [
            {
              type: 'address[]',
              name: '_wallets',
            },
            {
              type: 'bytes32[]',
              name: '_ids',
            },
          ],
        },
        [
          this.dependencies.map((d) => d.address),
          this.dependencies.map((d) => d.id),
        ]
      )

      return '0x' + config.depsUtils.replace('0x', '') + call.replace('0x', '')
    }
  }
}
