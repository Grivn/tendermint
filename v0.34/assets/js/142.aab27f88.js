(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{741:function(g,I,C){"use strict";C.r(I);var c=C(1),o=Object(c.a)({},(function(){var g=this,I=g.$createElement,C=g._self._c||I;return C("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[C("h1",{attrs:{id:"tendermint-v3-markdown-pseudocode"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-v3-markdown-pseudocode"}},[g._v("#")]),g._v(" Tendermint v3 Markdown pseudocode")]),g._v(" "),C("p",[g._v("This is a single-threaded implementation of ABCI++,\nwith an optimization for the ProcessProposal phase.\nNamely, processing of the header and the block data is separated into two different functions.")]),g._v(" "),C("h3",{attrs:{id:"initialization"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#initialization"}},[g._v("#")]),g._v(" Initialization")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aF9wIOKGkCAwCnJvdW5kX3Ag4oaQIDAKc3RlcF9wIGlzIG9uZSBvZiB7cHJvcG9zZSwgcHJldm90ZSwgcHJlY29tbWl0fQpkZWNpc2lvbl9wIOKGkCBWZWN0b3IoKQpsb2NrZWRWYWx1ZV9wIOKGkCBuaWwKdmFsaWRWYWx1ZV9wIOKGkCBuaWwKdmFsaWRSb3VuZF9wIOKGkCAtMQo="}}),g._v(" "),C("h3",{attrs:{id:"startround-round"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#startround-round"}},[g._v("#")]),g._v(" StartRound(round)")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuY3Rpb24gc3RhcnRSb3VuZChyb3VuZCkgewogICAgcm91bmRfcCDihpAgcm91bmQKICAgIHN0ZXBfcCDihpAgcHJvcG9zZQogICAgaWYgcHJvcG9zZXIoaF9wLCByb3VuZF9wKSA9IHAgewogICAgICAgIGlmIHZhbGlkVmFsdWVfcCAhPSBuaWwgewogICAgICAgICAgICBwcm9wb3NhbCDihpAgdmFsaWRWYWx1ZV9wCiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgdHhkYXRhIOKGkCBtZW1wb29sLkdldEJsb2NrKCkKICAgICAgICAgICAgLy8gZ2V0VW5wcmVwYXJlZEJsb2NrUHJvcG9zYWwgZmlsbHMgaW4gaGVhZGVyCiAgICAgICAgICAgIHVucHJlcGFyZWRQcm9wb3NhbCDihpAgZ2V0VW5wcmVwYXJlZEJsb2NrUHJvcG9zYWwodHhkYXRhKQogICAgICAgICAgICBwcm9wb3NhbCDihpAgQUJDSS5QcmVwYXJlUHJvcG9zYWwodW5wcmVwYXJlZFByb3Bvc2FsKQogICAgICAgIH0KICAgICAgICBicm9hZGNhc3Qg4p+oUFJPUE9TQUwsIGhfcCwgcm91bmRfcCwgcHJvcG9zYWwsIHZhbGlkUm91bmRfcOKfqQogICAgfSBlbHNlIHsKICAgICAgICBzY2hlZHVsZSBPblRpbWVvdXRQcm9wb3NlKGhfcCxyb3VuZF9wKSB0byBiZSBleGVjdXRlZCBhZnRlciB0aW1lb3V0UHJvcG9zZShyb3VuZF9wKQogICAgfQp9Cg=="}}),g._v(" "),C("h3",{attrs:{id:"receiveproposal"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#receiveproposal"}},[g._v("#")]),g._v(" ReceiveProposal")]),g._v(" "),C("p",[g._v("In the case where the local node is not locked on any round, the following is ran:")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByb3VuZF9wLCB2X2hlYWRlciwg4oiSMSkgZnJvbSBwcm9wb3NlcihoX3AsIHJvdW5kX3ApIHdoaWxlIHN0ZXBfcCA9IHByb3Bvc2UgZG8gewogICAgcHJldm90ZV9uaWwg4oaQIGZhbHNlCiAgICAvLyB2YWxpZCBpcyBUZW5kZXJtaW50cyB2YWxpZGF0aW9uLCBBQkNJLlZlcmlmeUhlYWRlciBpcyB0aGUgYXBwbGljYXRpb25zCiAgICBpZiB2YWxpZCh2X2hlYWRlcikg4oinIEFCQ0kuVmVyaWZ5SGVhZGVyKGhfcCwgdl9oZWFkZXIpIOKIpyAobG9ja2VkUm91bmRfcCA9IOKIkjEg4oioIGxvY2tlZFZhbHVlX3AgPSBpZCh2X2hlYWRlcikpIHsKICAgICAgICB3YWl0IHRvIHJlY2VpdmUgcHJvcG9zYWwgdiBjb3JyZXNwb25kaW5nIHRvIHZfaGVhZGVyCiAgICAgICAgLy8gV2Ugc3BsaXQgdXAgdGhlIGFwcCdzIGhlYWRlciB2ZXJpZmljYXRpb24gZnJvbSB0aGUgcmVtYWluZGVyIG9mIGl0cyBwcm9jZXNzaW5nIG9mIHRoZSBwcm9wb3NhbAogICAgICAgIGlmIEFCQ0kuUHJvY2Vzc1Byb3Bvc2FsKGhfcCwgdikuYWNjZXB0IHsKICAgICAgICAgICAgYnJvYWRjYXN0IOKfqFBSRVZPVEUsIGhfcCwgcm91bmRfcCwgaWQodinin6kgCiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgcHJldm90ZV9uaWwg4oaQIHRydWUKICAgICAgICAgICAgLy8gSW5jbHVkZSBhbnkgc2xhc2hpbmcgZXZpZGVuY2UgdGhhdCBtYXkgYmUgc2VudCBpbiB0aGUgcHJvY2VzcyBwcm9wb3NhbCByZXNwb25zZQogICAgICAgICAgICBmb3IgZXZpZGVuY2UgaW4gQUJDSS5Qcm9jZXNzUHJvcG9zYWwoaF9wLCB2KS5ldmlkZW5jZV9saXN0IHsKICAgICAgICAgICAgICAgIGJyb2FkY2FzdCDin6hFVklERU5DRSwgZXZpZGVuY2Xin6kgCiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9IGVsc2UgewogICAgICAgIHByZXZvdGVfbmlsIOKGkCB0cnVlCiAgICB9CiAgICBpZiBwcmV2b3RlX25pbCB7CiAgICAgICAgYnJvYWRjYXN0IOKfqFBSRVZPVEUsIGhfcCwgcm91bmRfcCwgbmls4p+pIAogICAgfQogICAgc3RlcF9wIOKGkCBwcmV2b3RlCn0K"}}),g._v(" "),C("p",[g._v("In the case where the node is locked on a round, the following is ran:")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByb3VuZF9wLCB2X2hlYWRlciwgdnLin6kKICBmcm9tIHByb3Bvc2VyKGhfcCwgcm91bmRfcCkKICBBTkQgMmYgKyAxIOKfqFBSRVZPVEUsIGhfcCwgdnIsIGlkKHZfaGVhZGVyKeKfqSAKICB3aGlsZSBzdGVwX3AgPSBwcm9wb3NlIOKIpyAodnIg4omlIDAg4oinIHZyICZsdDsgcm91bmRfcCkgZG8gewogICAgcHJldm90ZV9uaWwg4oaQIGZhbHNlCiAgICBpZiB2YWxpZCh2KSDiiKcgQUJDSS5WZXJpZnlIZWFkZXIoaF9wLCB2LmhlYWRlcikg4oinIChsb2NrZWRSb3VuZF9wIOKJpCB2ciDiiKggbG9ja2VkVmFsdWVfcCA9IHYpIHsKICAgICAgICB3YWl0IHRvIHJlY2VpdmUgcHJvcG9zYWwgdiBjb3JyZXNwb25kaW5nIHRvIHZfaGVhZGVyCiAgICAgICAgLy8gV2Ugc3BsaXQgdXAgdGhlIGFwcCdzIGhlYWRlciB2ZXJpZmljYXRpb24gZnJvbSB0aGUgcmVtYWluZGVyIG9mIGl0cyBwcm9jZXNzaW5nIG9mIHRoZSBwcm9wb3NhbAogICAgICAgIGlmIEFCQ0kuUHJvY2Vzc1Byb3Bvc2FsKGhfcCwgdikuYWNjZXB0IHsKICAgICAgICAgICAgYnJvYWRjYXN0IOKfqFBSRVZPVEUsIGhfcCwgcm91bmRfcCwgaWQodinin6kKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBwcmV2b3RlX25pbCDihpAgdHJ1ZQogICAgICAgICAgICAvLyBJbmNsdWRlIGFueSBzbGFzaGluZyBldmlkZW5jZSB0aGF0IG1heSBiZSBzZW50IGluIHRoZSBwcm9jZXNzIHByb3Bvc2FsIHJlc3BvbnNlCiAgICAgICAgICAgIGZvciBldmlkZW5jZSBpbiBBQkNJLlByb2Nlc3NQcm9wb3NhbChoX3AsIHYpLmV2aWRlbmNlX2xpc3QgewogICAgICAgICAgICAgICAgYnJvYWRjYXN0IOKfqEVWSURFTkNFLCBldmlkZW5jZeKfqSAKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0gZWxzZSB7CiAgICAgICAgcHJldm90ZV9uaWwg4oaQIHRydWUKICAgIH0KICAgIGlmIHByZXZvdGVfbmlsIHsKICAgICAgICBicm9hZGNhc3Qg4p+oUFJFVk9URSwgaF9wLCByb3VuZF9wLCBuaWzin6kKICAgIH0KICAgIHN0ZXBfcCDihpAgcHJldm90ZQp9Cg=="}}),g._v(" "),C("h3",{attrs:{id:"prevote-timeout"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#prevote-timeout"}},[g._v("#")]),g._v(" Prevote timeout")]),g._v(" "),C("p",[g._v("Upon receiving 2f + 1 prevotes, setup a timeout.")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiAyZiArIDEg4p+oUFJFVk9URSwgaF9wLCB2ciwgLTHin6kgCiAgd2l0aCBzdGVwX3AgPSBwcmV2b3RlIGZvciB0aGUgZmlyc3QgdGltZSwgZG8gewogICAgc2NoZWR1bGUgT25UaW1lb3V0UHJldm90ZShoX3AsIHJvdW5kX3ApIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIHRpbWVvdXRQcmV2b3RlKHJvdW5kX3ApCn0K"}}),g._v(" "),C("p",[g._v("with OnTimeoutPrevote defined as:")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuY3Rpb24gT25UaW1lb3V0UHJldm90ZShoZWlnaHQsIHJvdW5kKSB7CiAgICBpZiAoaGVpZ2h0ID0gaF9wICZhbXA7JmFtcDsgcm91bmQgPSByb3VuZF9wICZhbXA7JmFtcDsgc3RlcF9wID0gcHJldm90ZSkgewogICAgICAgIHByZWNvbW1pdF9leHRlbnNpb24g4oaQIEFCQ0kuRXh0ZW5kVm90ZShoX3AsIHJvdW5kX3AsIG5pbCkKICAgICAgICBicm9hZGNhc3Qg4p+oUFJFQ09NTUlULCBoX3AsIHJvdW5kX3AsIG5pbCwgcHJlY29tbWl0X2V4dGVuc2lvbuKfqQogICAgICAgIHN0ZXBfcCDihpAgcHJlY29tbWl0CiAgICB9Cn0K"}}),g._v(" "),C("h3",{attrs:{id:"receiving-enough-prevotes-to-precommit"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#receiving-enough-prevotes-to-precommit"}},[g._v("#")]),g._v(" Receiving enough prevotes to precommit")]),g._v(" "),C("p",[g._v("The following code is ran upon receiving 2f + 1 prevotes for the same block")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByb3VuZF9wLCB2LCAq4p+pCiAgZnJvbSBwcm9wb3NlcihoX3AsIHJvdW5kX3ApCiAgQU5EIDJmICsgMSDin6hQUkVWT1RFLCBoX3AsIHZyLCBpZCh2KeKfqSAKICB3aGlsZSB2YWxpZCh2KSDiiKcgc3RlcF9wICZndDs9IHByZXZvdGUgZm9yIHRoZSBmaXJzdCB0aW1lIGRvIHsKICAgIGlmIChzdGVwX3AgPSBwcmV2b3RlKSB7CiAgICAgICAgbG9ja2VkVmFsdWVfcCDihpAgdgogICAgICAgIGxvY2tlZFJvdW5kX3Ag4oaQIHJvdW5kX3AKICAgICAgICBwcmVjb21taXRfZXh0ZW5zaW9uIOKGkCBBQkNJLkV4dGVuZFZvdGUoaF9wLCByb3VuZF9wLCBpZCh2KSkKICAgICAgICBicm9hZGNhc3Qg4p+oUFJFQ09NTUlULCBoX3AsIHJvdW5kX3AsIGlkKHYpLCBwcmVjb21taXRfZXh0ZW5zaW9u4p+pCiAgICAgICAgc3RlcF9wIOKGkCBwcmVjb21taXQKICAgIH0KICAgIHZhbGlkVmFsdWVfcCDihpAgdgogICAgdmFsaWRSb3VuZF9wIOKGkCByb3VuZF9wCn0K"}}),g._v(" "),C("p",[g._v("And upon receiving 2f + 1 prevotes for nil:")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiAyZiArIDEg4p+oUFJFVk9URSwgaF9wLCByb3VuZF9wLCBuaWzin6kgCiAgd2hpbGUgc3RlcF9wID0gcHJldm90ZSBkbyB7CiAgICBwcmVjb21taXRfZXh0ZW5zaW9uIOKGkCBBQkNJLkV4dGVuZFZvdGUoaF9wLCByb3VuZF9wLCBuaWwpCiAgICBicm9hZGNhc3Qg4p+oUFJFQ09NTUlULCBoX3AsIHJvdW5kX3AsIG5pbCwgcHJlY29tbWl0X2V4dGVuc2lvbuKfqQogICAgc3RlcF9wIOKGkCBwcmVjb21taXQKfQo="}}),g._v(" "),C("h3",{attrs:{id:"upon-receiving-a-precommit"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#upon-receiving-a-precommit"}},[g._v("#")]),g._v(" Upon receiving a precommit")]),g._v(" "),C("p",[g._v("Upon receiving a precommit "),C("code",[g._v("precommit")]),g._v(", we ensure that "),C("code",[g._v("ABCI.VerifyVoteExtension(precommit.precommit_extension) = true")]),g._v("\nbefore accepting the precommit. This is akin to how we check the signature on precommits normally, hence its not wrapped\nin the syntax of methods from the paper.")]),g._v(" "),C("h3",{attrs:{id:"precommit-timeout"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#precommit-timeout"}},[g._v("#")]),g._v(" Precommit timeout")]),g._v(" "),C("p",[g._v("Upon receiving 2f + 1 precommits, setup a timeout.")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiAyZiArIDEg4p+oUFJFQ09NTUlULCBoX3AsIHZyLCAq4p+pIGZvciB0aGUgZmlyc3QgdGltZSwgZG8gewogICAgc2NoZWR1bGUgT25UaW1lb3V0UHJlY29tbWl0KGhfcCwgcm91bmRfcCkgdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgdGltZW91dFByZWNvbW1pdChyb3VuZF9wKQp9Cg=="}}),g._v(" "),C("p",[g._v("with OnTimeoutPrecommit defined as:")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuY3Rpb24gT25UaW1lb3V0UHJlY29tbWl0KGhlaWdodCwgcm91bmQpIHsKICAgIGlmIChoZWlnaHQgPSBoX3AgJmFtcDsmYW1wOyByb3VuZCA9IHJvdW5kX3ApIHsKICAgICAgICBTdGFydFJvdW5kKHJvdW5kX3AgKyAxKQogICAgfQp9Cg=="}}),g._v(" "),C("h3",{attrs:{id:"upon-receiving-2f-1-precommits"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#upon-receiving-2f-1-precommits"}},[g._v("#")]),g._v(" Upon Receiving 2f + 1 precommits")]),g._v(" "),C("p",[g._v("The following code is ran upon receiving 2f + 1 precommits for the same block")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByLCB2LCAq4p+pCiAgZnJvbSBwcm9wb3NlcihoX3AsIHIpCiAgQU5EIDJmICsgMSDin6ggUFJFQ09NTUlULCBoX3AsIHIsIGlkKHYp4p+pIAogIHdoaWxlIGRlY2lzaW9uX3BbaF9wXSA9IG5pbCBkbyB7CiAgICBpZiAodmFsaWQodikpIHsKICAgICAgICBkZWNpc2lvbl9wW2hfcF0g4oaQIHYKICAgICAgICBoX3Ag4oaQIGhfcCArIDEKICAgICAgICByZXNldCBsb2NrZWRSb3VuZF9wLCBsb2NrZWRWYWx1ZV9wLHZhbGlkUm91bmRfcCBhbmQgdmFsaWRWYWx1ZV9wIHRvIGluaXRpYWwgdmFsdWVzCiAgICAgICAgQUJDSS5GaW5hbGl6ZUJsb2NrKGlkKHYpKQogICAgICAgIFN0YXJ0Um91bmQoMCkKIH0KfQo="}}),g._v(" "),C("p",[g._v("If we don't see 2f + 1 precommits for the same block, we wait until we get 2f + 1 precommits, and the timeout occurs.")])],1)}),[],!1,null,null,null);I.default=o.exports}}]);