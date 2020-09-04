let nock = require('nock');

module.exports.hash = "690ecdb1b5a57d5389d6d9893184386b";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .post('/keys/beginBackupthenbeginSelectiveRestore/create')
  .query(true)
  .reply(401, "", [ 'content-type',
  'application/json; charset=utf-8',
  'x-ms-server-latency',
  '1',
  'x-content-type-options',
  'nosniff',
  'www-authenticate',
  'Bearer authorization="https://login.windows-ppe.net/01ea9a65-813e-4238-8204-bf7328d63fc6", resource="https://managedhsm-int.azure-int.net"',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '0',
  'x-ms-request-id',
  '6f025072-ee3c-11ea-b181-0242ac120006',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'content-security-policy',
  'default-src \'self\'',
  'cache-control',
  'no-cache' ]);

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .post('/keys/beginBackupthenbeginSelectiveRestore/create', {"kty":"RSA"})
  .query(true)
  .reply(200, {"attributes":{"created":1599226697,"enabled":true,"exportable":false,"recoverableDays":7,"recoveryLevel":"CustomizedRecoverable+Purgeable","updated":1599226697},"key":{"e":"AQAB","key_ops":["wrapKey","decrypt","encrypt","unwrapKey","sign","verify"],"kid":"https://eastus2.keyvault_name.managedhsm-int.azure-int.net/keys/beginBackupthenbeginSelectiveRestore/7ff5835071980e2f8bdb2a9303962da2","kty":"RSA-HSM","n":"qCgXoJM6FiJTFZkUhHjBNoZSs28cur7ReNJer9U3WdxX9hs8VHTCjZM853swj2x5YjkznL7bjQhK5fEP-3nN9jwqs0f6VMQrObtM1qXmdbX0yx-xBp4A5g9qxENznf7iZe_dGDT3naoaTZUNEcyW3x1loQ1HnXQLyJ5kSDl5Gg_m58l7z9otw2IaKohBAMgdV9rlUTTcc9i6LRuUF24-bQt9_pdLDvE9VpX60Gs-y1xTWPRa4nPgDhkmPMSK5EDalk3PZiRdtDo5BeZpuLGRa8V5SpqbGziziDwca0KnuJxc-mSOK0OtEuLiZULPSRwMGWc4BmdtKYT9iIsu7r2N8w"}}, [ 'content-type',
  'application/json; charset=utf-8',
  'x-content-type-options',
  'nosniff',
  'content-length',
  '755',
  'x-ms-request-id',
  '6f025072-ee3c-11ea-b181-0242ac120006',
  'x-ms-keyvault-region',
  'EASTUS',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'content-security-policy',
  'default-src \'self\'',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '682',
  'cache-control',
  'no-cache',
  'x-frame-options',
  'SAMEORIGIN' ]);

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .post('/backup')
  .query(true)
  .reply(401, "", [ 'content-type',
  'application/json; charset=utf-8',
  'x-ms-server-latency',
  '1',
  'x-content-type-options',
  'nosniff',
  'www-authenticate',
  'Bearer authorization="https://login.windows-ppe.net/01ea9a65-813e-4238-8204-bf7328d63fc6", resource="https://managedhsm-int.azure-int.net"',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '0',
  'x-ms-request-id',
  '3afdb3e2-ee38-11ea-8011-0242ac120004',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'content-security-policy',
  'default-src \'self\'',
  'cache-control',
  'no-cache' ]);

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .post('/backup', {"storageResourceUri":"https://chrissprim.blob.core.windows.net/backup","token":"?sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2022-07-14T05:56:52Z&st=2020-09-03T21:56:52Z&spr=https,http&sig=Rzts1hBG%2BgqTCTZo%2BX%2FZgJWJ5Ao16ueN%2F1BB4Dg8%2FLo%3D"})
  .query(true)
  .reply(202, {"status":"InProgress","statusDetails":null,"error":{"code":null,"message":null,"innererror":null},"startTime":1599226710,"endTime":null,"jobId":"9c1ab31ae44c4cf09ac1b5bfe88b5e4f","azureStorageBlobContainerUri":null}, [ 'server',
  'Kestrel',
  'date',
  'Fri, 04 Sep 2020 13:38:29 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'azure-asyncoperation',
  'https://eastus2.keyvault_name.managedhsm-int.azure-int.net/backup/9c1ab31ae44c4cf09ac1b5bfe88b5e4f/pending',
  'x-ms-keyvault-region',
  'EASTUS',
  'retry-after',
  '10',
  'x-ms-request-id',
  '3afdb3e2-ee38-11ea-8011-0242ac120004',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '969',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .get('/backup/9c1ab31ae44c4cf09ac1b5bfe88b5e4f/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"9c1ab31ae44c4cf09ac1b5bfe88b5e4f","startTime":1599226710,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200903-1-42b8eab8-develop',
  'date',
  'Fri, 04 Sep 2020 13:38:30 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '3afdb3e2-ee38-11ea-8011-0242ac120004',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '619',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .get('/backup/9c1ab31ae44c4cf09ac1b5bfe88b5e4f/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"9c1ab31ae44c4cf09ac1b5bfe88b5e4f","startTime":1599226710,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200903-1-42b8eab8-develop',
  'date',
  'Fri, 04 Sep 2020 13:38:31 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '3afdb3e2-ee38-11ea-8011-0242ac120004',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '537',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .get('/backup/9c1ab31ae44c4cf09ac1b5bfe88b5e4f/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"9c1ab31ae44c4cf09ac1b5bfe88b5e4f","startTime":1599226710,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200903-1-42b8eab8-develop',
  'date',
  'Fri, 04 Sep 2020 13:38:34 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '3afdb3e2-ee38-11ea-8011-0242ac120004',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '606',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .get('/backup/9c1ab31ae44c4cf09ac1b5bfe88b5e4f/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"9c1ab31ae44c4cf09ac1b5bfe88b5e4f","startTime":1599226710,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200903-1-42b8eab8-develop',
  'date',
  'Fri, 04 Sep 2020 13:38:36 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '3afdb3e2-ee38-11ea-8011-0242ac120004',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '528',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .get('/backup/9c1ab31ae44c4cf09ac1b5bfe88b5e4f/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"9c1ab31ae44c4cf09ac1b5bfe88b5e4f","startTime":1599226710,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200903-1-42b8eab8-develop',
  'date',
  'Fri, 04 Sep 2020 13:38:39 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '3afdb3e2-ee38-11ea-8011-0242ac120004',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '538',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .get('/backup/9c1ab31ae44c4cf09ac1b5bfe88b5e4f/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":"https://chrissprim.blob.core.windows.net/backup/mhsm-keyvault_name-2020090413383071","endTime":1599226722,"error":null,"jobId":"9c1ab31ae44c4cf09ac1b5bfe88b5e4f","startTime":1599226710,"status":"Succeeded","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200903-1-42b8eab8-develop',
  'date',
  'Fri, 04 Sep 2020 13:38:42 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '3afdb3e2-ee38-11ea-8011-0242ac120004',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '257',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '526',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .put('/keys/beginBackupthenbeginSelectiveRestore/restore', {"sasTokenParameters":{"storageResourceUri":"https://chrissprim.blob.core.windows.net/backup","token":"?sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2022-07-14T05:56:52Z&st=2020-09-03T21:56:52Z&spr=https,http&sig=Rzts1hBG%2BgqTCTZo%2BX%2FZgJWJ5Ao16ueN%2F1BB4Dg8%2FLo%3D"},"folder":"https://chrissprim.blob.core.windows.net/backup"})
  .query(true)
  .reply(202, {"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"ae2bf388a4dd471885cd2b247ed5e0f9","startTime":1599226723,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'date',
  'Fri, 04 Sep 2020 13:38:42 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'azure-asyncoperation',
  'https://eastus2.keyvault_name.managedhsm-int.azure-int.net/restore/ae2bf388a4dd471885cd2b247ed5e0f9/pending',
  'x-ms-keyvault-region',
  'EASTUS',
  'retry-after',
  '10',
  'x-ms-request-id',
  '3afdb3e2-ee38-11ea-8011-0242ac120004',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '749',
  'content-length',
  '180',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .delete('/keys/beginBackupthenbeginSelectiveRestore')
  .query(true)
  .reply(200, {"attributes":{"created":1599226697,"enabled":true,"exportable":false,"recoverableDays":7,"recoveryLevel":"CustomizedRecoverable+Purgeable","updated":1599226697},"deletedDate":1599226724,"key":{"e":"AQAB","key_ops":["wrapKey","verify","sign","unwrapKey","decrypt","encrypt"],"kid":"https://eastus2.keyvault_name.managedhsm-int.azure-int.net/keys/beginBackupthenbeginSelectiveRestore/7ff5835071980e2f8bdb2a9303962da2","kty":"RSA-HSM","n":"qCgXoJM6FiJTFZkUhHjBNoZSs28cur7ReNJer9U3WdxX9hs8VHTCjZM853swj2x5YjkznL7bjQhK5fEP-3nN9jwqs0f6VMQrObtM1qXmdbX0yx-xBp4A5g9qxENznf7iZe_dGDT3naoaTZUNEcyW3x1loQ1HnXQLyJ5kSDl5Gg_m58l7z9otw2IaKohBAMgdV9rlUTTcc9i6LRuUF24-bQt9_pdLDvE9VpX60Gs-y1xTWPRa4nPgDhkmPMSK5EDalk3PZiRdtDo5BeZpuLGRa8V5SpqbGziziDwca0KnuJxc-mSOK0OtEuLiZULPSRwMGWc4BmdtKYT9iIsu7r2N8w"},"recoveryId":"https://eastus2.keyvault_name.managedhsm-int.azure-int.net/deletedkeys/beginBackupthenbeginSelectiveRestore","scheduledPurgeDate":1599831524}, [ 'content-type',
  'application/json; charset=utf-8',
  'x-content-type-options',
  'nosniff',
  'content-length',
  '932',
  'x-ms-request-id',
  '6f025072-ee3c-11ea-b181-0242ac120006',
  'x-ms-keyvault-region',
  'EASTUS',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'content-security-policy',
  'default-src \'self\'',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '833',
  'cache-control',
  'no-cache',
  'x-frame-options',
  'SAMEORIGIN' ]);

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .get('/deletedkeys/beginBackupthenbeginSelectiveRestore')
  .query(true)
  .reply(200, {"attributes":{"created":1599226697,"enabled":true,"exportable":false,"recoverableDays":7,"recoveryLevel":"CustomizedRecoverable+Purgeable","updated":1599226697},"deletedDate":1599226723,"key":{"e":"AQAB","key_ops":["encrypt","decrypt","unwrapKey","sign","verify","wrapKey"],"kid":"https://eastus2.keyvault_name.managedhsm-int.azure-int.net/keys/beginBackupthenbeginSelectiveRestore/7ff5835071980e2f8bdb2a9303962da2","kty":"RSA-HSM","n":"qCgXoJM6FiJTFZkUhHjBNoZSs28cur7ReNJer9U3WdxX9hs8VHTCjZM853swj2x5YjkznL7bjQhK5fEP-3nN9jwqs0f6VMQrObtM1qXmdbX0yx-xBp4A5g9qxENznf7iZe_dGDT3naoaTZUNEcyW3x1loQ1HnXQLyJ5kSDl5Gg_m58l7z9otw2IaKohBAMgdV9rlUTTcc9i6LRuUF24-bQt9_pdLDvE9VpX60Gs-y1xTWPRa4nPgDhkmPMSK5EDalk3PZiRdtDo5BeZpuLGRa8V5SpqbGziziDwca0KnuJxc-mSOK0OtEuLiZULPSRwMGWc4BmdtKYT9iIsu7r2N8w"},"recoveryId":"https://eastus2.keyvault_name.managedhsm-int.azure-int.net/deletedkeys/beginBackupthenbeginSelectiveRestore","scheduledPurgeDate":1599831523}, [ 'x-frame-options',
  'SAMEORIGIN',
  'x-ms-request-id',
  '6f025072-ee3c-11ea-b181-0242ac120006',
  'content-type',
  'application/json; charset=utf-8',
  'x-ms-keyvault-region',
  'EASTUS',
  'content-length',
  '932',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'content-security-policy',
  'default-src \'self\'',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-build-version',
  '1.0.20200903-1-42b8eab8-develop',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '171' ]);

nock('https://eastus2.keyvault_name.managedhsm-int.azure-int.net:443', {"encodedQueryParams":true})
  .delete('/deletedkeys/beginBackupthenbeginSelectiveRestore')
  .query(true)
  .reply(204, "", [ 'content-type',
  'application/json; charset=utf-8',
  'x-content-type-options',
  'nosniff',
  'content-length',
  '0',
  'x-ms-request-id',
  '6f025072-ee3c-11ea-b181-0242ac120006',
  'x-ms-keyvault-region',
  'EASTUS',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'content-security-policy',
  'default-src \'self\'',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '655',
  'cache-control',
  'no-cache',
  'x-frame-options',
  'SAMEORIGIN' ]);