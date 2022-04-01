import { ethers } from 'node_modules/ethers/lib'

import { Config } from '../Config'
import { Intent } from './Intent'
import { Signature } from './Signature'
import { SignedIntent } from './SignedIntent'

export class Wallet {
  private key: string

  config: Config
  address: string
  signer: string

  constructor(key: string, config?: Config) {
    this.key = key

    if (config == null) {
      this.config = Config.getGlobal()
      if (this.config == null)
        throw Error('A valid configuration must be provided or set as global')
    } else {
      this.config = config
    }

    this.signer = ethers.utils.computeAddress(key)
    this.address = ethers.utils.getCreate2Address(
      this.config.marmoFactory,
      ethers.utils.arrayify(ethers.utils.hexZeroPad(this.signer, 64)) as Buffer,
      ethers.utils.keccak256(this.config.initCode)
    )
  }

  sign(intent: Intent): SignedIntent {
    const id = intent.id(this)
    const signingKey = new ethers.utils.SigningKey(this.key)
    const sig = signingKey.signDigest(id)
    return new SignedIntent(intent, new Signature(sig.v, sig.r, sig.s), this)
  }
}
