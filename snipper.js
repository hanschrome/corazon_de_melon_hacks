t.prototype.request = function(o, e, i, a, r) {
                        var u = this;
                        "/" === e.charAt(0) && (e = e.substring(1)), e = e.replace(/#.+/, "");
                        var g = r && "" !== r.toString() ? "?" + r.toString() : "";
                        this.logger.debug(o + " " + e + g);
                        var m = this.config.apiUrl + e,
                            _ = this.getApiHeaders(o, m, a, r);
                        return new Promise(function(y, U) {
                            u.http.request(o, m, {
                                headers: _,
                                body: a,
                                params: r,
                                observe: "response",
                                responseType: "text"
                            }).toPromise().then(function(L) {
                                var un = L.body;
                                if (L.headers.has("X-HTTP-Redirect")) {
                                    var Mn = L.headers.get("X-HTTP-Redirect");
                                    i(decodeURIComponent(Mn))
                                } else y(un)
                            }).catch(function(L) {
                                var un = L._body;
                                u.logger.error(un), U(un)
                            })
                        })
                    }, t.prototype.getApiHeaders = function(o, e, i, a) {
                        var r = this.keysService.keys.publicKey,
                            u = Date.now().toString(),
                            g = e;
                        void 0 !== a && "" !== a.toString() && (g += "?" + a.toString());
                        var m = [r, o, g],
                            _ = new oc;
                        void 0 !== i && (_ = _.append("Content-Type", "application/json"), m.push(i)), m.push(u);
                        var y = m.join("+"),
                            U = Ro.HmacSHA1(y, this.keysService.keys.privateKey).toString();
                        return _.append("X-Beemoov-Application", r).append("X-Beemoov-Signature", U).append("X-Beemoov-Timestamp", u.toString()).append("X-AmourSucre-Season", this.seasonService.season$.value).append("X-Amoursucre-Platform", this.takeOverService.onTakeOver ? "takeover-3.0" : "web-3.0")
                    }, t.\u0275fac = function(e) {
                        return new(e || t)(n.LFG(Hu), n.LFG(ju), n.LFG(ne), n.LFG(tf), n.LFG(L0), n.LFG(et))
                    }, t.\u0275prov = n.Yz7({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                }();
{
                            key: "requestData",
                            value: function(i, a, r, u, g, m) {
                                var _ = this;
                                return this.http.request(a, r, {
                                    headers: u,
                                    body: g,
                                    params: m,
                                    observe: "response",
                                    responseType: "json"
                                }).pipe((0, _t.U)(function(y) {
                                    return _.parseResponse(i, y, !1)
                                }), yi(function(y) {
                                    if (y instanceof Ju) throw y;
                                    if (y instanceof Gu) {
                                        var U;
                                        try {
                                            U = _.parseResponse(i, y, !0)
                                        } catch (Mn) {
                                            throw Mn
                                        }
                                        throw U
                                    }
                                    _.logger.error(y);
                                    var L = new Wo;
                                    L.message = "Something terrible happened with the request.";
                                    var un = new Ju;
                                    throw un.error = L, _.streamDispatcher.dispatch("error", un.error), un
                                }))
                            }
                        }, 





-


setInterval(function() {let elements = $('#pages > story > page-sheet-container > div > story-moment > div:nth-child(1) > moment-place > move');
let randomIndex = Math.floor(Math.random() * elements.length);
elements[randomIndex].click();
}, 1000);