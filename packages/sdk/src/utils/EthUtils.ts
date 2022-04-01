import { ethers } from 'ethers'

export function toHexStringZeroPadded(value: string, lenght: number): string {
    let source: string = value;
    source = source.replace("0x", '');
    if (source.length < lenght) {
        const diff = lenght - source.length;
        source = '0'.repeat(diff) + source;
    }
    return "0x" + source;
}

export function generateAddress2(from: Uint8Array, salt: Uint8Array, initHash: Uint8Array) {

    const address = ethers.utils.keccak256(ethers.utils.concat([
      Buffer.from('ff', 'hex'),
      from,
      salt,
      initHash
    ]))

    return address.slice(-20)
  }
