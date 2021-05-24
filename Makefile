localnet:
	solana-test-validator -r

t0:
	./node_modules/.bin/ts-node t0__test.ts

t1:
	./node_modules/.bin/ts-node t1__get_public_from_private.ts