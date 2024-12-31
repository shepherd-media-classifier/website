import { ANT, ArweaveSigner } from '@ar.io/sdk/node'
import { readFileSync } from 'fs'

const jwk = JSON.parse(readFileSync('../wallet.json', 'utf-8'))
const signer = new ArweaveSigner(jwk)
const ant = ANT.init({
	processId: 'HQ0wrYT4akdBPIzIJeENqKGjluJYv0js9DknHm8lSxc',
	signer,
})

console.debug(await ant.getRecords())

const manifestId = 'euuhMx1dh-3fAOVpPOodSiSbYExmpbBn9Yu6ix7wol0'

console.debug(await ant.setRecord(
	{
		transactionId: manifestId,
		ttlSeconds: 3600,
		undername: '@',
	}, {
	tags: [
		{ name: 'App-Name', value: 'not-permaweb-deploy' },
		{ name: 'GIT-HASH', value: process.env.NOTHING_SET! },
	]
}
))