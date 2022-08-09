(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{817:function(e,t,n){"use strict";n.r(t);var r=n(1),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"router-wip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#router-wip"}},[e._v("#")]),e._v(" Router - WIP")]),e._v(" "),n("p",[e._v("The router is the component of the "),n("em",[e._v("new")]),e._v(" p2p layer\nresponsible for establishing connection with peers,\nand for routing messages from reactors to peers and vice-versa.")]),e._v(" "),n("h2",{attrs:{id:"dialing-peers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dialing-peers"}},[e._v("#")]),e._v(" Dialing peers")]),e._v(" "),n("p",[e._v("The router maintains a persistent routine "),n("code",[e._v("dialPeers()")]),e._v(" consuming\n"),n("RouterLink",{attrs:{to:"/spec/p2p/v0.35/peer_manager.html#dialnext-transition"}},[e._v("candidate peers to dial")]),e._v("\nproduced by the peer manager.")],1),e._v(" "),n("p",[e._v("The consumed candidate peers (addresses) are provided for dialing routines,\nretrieved from a pool with "),n("code",[e._v("numConcurrentDials()")]),e._v(" threads.\nThe default number of threads in the pool is set to 32 times the number of\navailable CPUs.")]),e._v(" "),n("blockquote",[n("p",[e._v("The 32 factor was introduced in "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/8827",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8827"),n("OutboundLink")],1),e._v(",\nwith the goal of speeding up the establishment of outbound connections.")])]),e._v(" "),n("p",[e._v("The router thus dials a peer whenever there are: (i) a candidate peer to be\nconsumed and (ii) a dialing routine is available in the pool.\nGiven the size of the thread pool, the router is in practice is expected to\ndial in parallel all candidate peers produced by the peer manager.")]),e._v(" "),n("blockquote",[n("p",[e._v("There was a random-interval sleep between starting subsequent dialing\nroutines. This behavior was removed by "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/8839",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8839"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("p",[e._v("The dialing routine selected to dial to a peer runs by the "),n("code",[e._v("connectPeer()")]),e._v("\nmethod, which:")]),e._v(" "),n("ol",[n("li",[e._v("Calls "),n("code",[e._v("dialPeer()")]),e._v(" to establish a connection with the remote peer\n"),n("ol",[n("li",[e._v("In case of errors, invokes the "),n("code",[e._v("DialFailed")]),e._v(" transition of the peer manager")])])]),e._v(" "),n("li",[e._v("Calls "),n("code",[e._v("handshakePeer()")]),e._v(" with the established connection and the expected remote node ID\n"),n("ol",[n("li",[e._v("In case of errors, invokes the "),n("code",[e._v("DialFailed")]),e._v(" transition of the peer manager")])])]),e._v(" "),n("li",[e._v("Reports the established outbound connection through the "),n("code",[e._v("Dialed")]),e._v(" transition of the peer manager\n"),n("ol",[n("li",[e._v("In the transition fails, the established connection was refused")])])]),e._v(" "),n("li",[e._v("Spawns a "),n("code",[e._v("routePeer()")]),e._v(" routine for the peer")])]),e._v(" "),n("blockquote",[n("p",[e._v("Step 3. above acquires a mutex, preventing concurrent calls from different threads.\nThe reason is not clear, as all peer manager transitions are also protected by a mutex.")]),e._v(" "),n("p",[e._v("Step 3i. above also notifies the peer manager's next peer to dial routine.\nThis should trigger the peer manager to produce another candidate peer.\nTODO: check when this was introduced, as it breaks modularity.")])]),e._v(" "),n("p",[e._v("In case of any of the above errors, the connection with the remote peer is\n"),n("strong",[e._v("closed")]),e._v(" and the dialing routines returns.")]),e._v(" "),n("h2",{attrs:{id:"accepting-peers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#accepting-peers"}},[e._v("#")]),e._v(" Accepting peers")]),e._v(" "),n("p",[e._v("The router maintains a persistent routine "),n("code",[e._v("acceptPeers()")]),e._v(" consuming connections\naccepted by each of the configured transports.")]),e._v(" "),n("p",[e._v("Each accepted connection is handled by a different "),n("code",[e._v("openConnection()")]),e._v(" routine,\nspawned for this purpose, that operate as follows.\nThere is no limit for the number of concurrent routines accepting peer's connections.")]),e._v(" "),n("ol",[n("li",[e._v("Calls "),n("code",[e._v("filterPeersIP()")]),e._v(" with the peer address\n"),n("ol",[n("li",[e._v("If the peer IP is rejected, the method returns")])])]),e._v(" "),n("li",[e._v("Calls "),n("code",[e._v("handshakePeer()")]),e._v(" with the accepted connection to retrieve the remote node ID\n"),n("ol",[n("li",[e._v("If the handshake fails, the method returns")])])]),e._v(" "),n("li",[e._v("Calls "),n("code",[e._v("filterPeersID()")]),e._v(" with the peer ID (learned from the handshake)\n"),n("ol",[n("li",[e._v("If the peer ID is rejected, the method returns")])])]),e._v(" "),n("li",[e._v("Reports the established incoming connection through the "),n("code",[e._v("Accepted")]),e._v(" transition of the peer manager\n"),n("ol",[n("li",[e._v("In the transition fails, the accepted connection was refused and the method returns")])])]),e._v(" "),n("li",[e._v("Switches to the "),n("code",[e._v("routePeer()")]),e._v(" routine for the accepted peer")])]),e._v(" "),n("blockquote",[n("p",[e._v("Step 4. above acquires a mutex, preventing concurrent calls from different threads.\nThe reason is not clear, as all peer manager transitions are also protected by a mutex.")])]),e._v(" "),n("p",[e._v("In case of any of the above errors, the connection with the remote peer is\n"),n("strong",[e._v("closed")]),e._v(".")]),e._v(" "),n("blockquote",[n("p",[e._v("TODO: Step 2. above has a limitation, commented in the source code, referring\nto absence of an ack/nack in the handshake, which may case further\nconnections to be rejected.")])]),e._v(" "),n("blockquote",[n("p",[e._v("TODO: there is a "),n("code",[e._v("connTracker")]),e._v(" in the router that rate limits addresses that\ntry to establish connections to often. This procedure should be documented.")])]),e._v(" "),n("h2",{attrs:{id:"evicting-peers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#evicting-peers"}},[e._v("#")]),e._v(" Evicting peers")]),e._v(" "),n("p",[e._v("The router maintains a persistent routine "),n("code",[e._v("evictPeers()")]),e._v(" consuming\n"),n("RouterLink",{attrs:{to:"/spec/p2p/v0.35/peer_manager.html#evictnext-transition"}},[e._v("peers to evict")]),e._v("\nproduced by the peer manager.")],1),e._v(" "),n("p",[e._v("The eviction of a peer is performed by closing the send queue associated to the peer.\nThis queue maintains outbound messages destined to the peer, consumed by the\npeer's send routine.\nWhen the peer's send queue is closed, the peer's send routine is interrupted\nwith no errors.")]),e._v(" "),n("p",[e._v("When the "),n("a",{attrs:{href:"#routing-messages"}},[e._v("routing messages")]),e._v(" routine notices that the peer's\nsend routine was interrupted, it forces the interruption of peer's receive routine.\nWhen both send and receive routines are interrupted, the router considers the\npeer as disconnected, and its eviction has been done.")]),e._v(" "),n("h2",{attrs:{id:"routing-messages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#routing-messages"}},[e._v("#")]),e._v(" Routing messages")]),e._v(" "),n("p",[e._v("When the router successfully establishes a connection with a peer, because it\ndialed the peer or accepted a connection from the peer, it starts routing\nmessages from and to the peer.")]),e._v(" "),n("p",[e._v("This role is implemented by the "),n("code",[e._v("routePeer()")]),e._v(" routine.\nInitially, the router notifies the peer manager that the peer is\n"),n("RouterLink",{attrs:{to:"/spec/p2p/v0.35/peer_manager.html#ready-transition"}},[n("code",[e._v("Ready")])]),e._v(".\nThis notification includes the list of channels IDs supported by the peer,\ninformation obtained during the handshake process.")],1),e._v(" "),n("p",[e._v("Then, the peer's send and receive routines are spawned.\nThe send routine receives the peer ID, the established connection, and a new\nsend queue associated with the peer.\nThe peer's send queue is fed with messages produced by reactors and destined to\nthe peer, which are sent to the peer through the established connection.\nThe receive routine receives the peer ID and the established connection.\nMessages received through the established connections are forwarded to the\nappropriate reactors, using message queues associated to each channel ID.")]),e._v(" "),n("p",[e._v("From this point, the routing routine will monitor the peer's send and receive routines.\nWhen one of them returns, due to errors or because it was interrupted, the\nrouter forces the interruption of the other.\nTo force the interruption of the send routine, the router closes the peer's\nsend queue. To force the interruption of the receive routine, the router closes\nthe connection established with the peer.")]),e._v(" "),n("p",[e._v("Finally, when both peer's send and receive routine return, the router notifies\nthe peer manager that the peer is "),n("RouterLink",{attrs:{to:"/spec/p2p/v0.35/peer_manager.html#disconnected-transition"}},[n("code",[e._v("Disconnected")])]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);