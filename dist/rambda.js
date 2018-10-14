'use strict';Object.defineProperty(exports,'__esModule',{value:!0});function add(x,y){if(y===void 0){return c=>add(x,c);}return x+y;}function addIndex(d){return function(e,...rest){let g=0;const newFn=(...args)=>e.apply(null,[...args,g++]);return d.apply(null,[newFn,...rest]);};}function adjust(h,j,k){if(j===void 0){return(l,m)=>adjust(h,l,m);}else if(k===void 0){return n=>adjust(h,j,n);}const q=k.concat();return q.map((r,s)=>{if(s===j){return h(k[j]);}return r;});}function filterObject(t,u){const v={};for(const w in u){if(t(u[w],w)){v[w]=u[w];}}return v;}function filter(z,A){if(arguments.length===1){return B=>filter(z,B);}if(A===void 0){return[];}if(!Array.isArray(A)){return filterObject(z,A);}let C=-1,D=0;const E=A.length,G=[];while(++C<E){const H=A[C];if(z(H)){G[D++]=H;}}return G;}function all(I,J){if(arguments.length===1){return K=>all(I,K);}return filter(I,J).length===J.length;}function any(L,M){if(arguments.length===1){return N=>any(L,N);}let O=0;while(O<M.length){if(L(M[O],O)){return!0;}O++;}return!1;}function allPass(P,x){if(arguments.length===1){return Q=>allPass(P,Q);}return!any(R=>!R(x),P);}function always(x){return()=>x;}function anyPass(S,x){if(arguments.length===1){return U=>anyPass(S,U);}return any(V=>V(x))(S);}function append(x,W){if(arguments.length===1){return X=>append(x,X);}if(typeof W==='string'){return`${W}${x}`;}const Y=W.concat();Y.push(x);return Y;}function curry(f,a=[]){return(...p)=>(o=>o.length>=f.length?f(...o):curry(f,o))([...a,...p]);}function assoc(Z,a1,b1){return Object.assign({},b1,{[Z]:a1});}var c1=curry(assoc);function both(x,y){if(arguments.length===1){return d1=>both(x,d1);}return e1=>x(e1)&&y(e1);}function complement(fn){return g1=>!fn(g1);}function compose(...fns){return(...args)=>{const h1=fns.slice();if(h1.length>0){const fn=h1.pop();let j1=fn(...args);while(h1.length>0){j1=h1.pop()(j1);}return j1;}return void 0;};}function concat(x,y){if(arguments.length===1){return k1=>concat(x,k1);}return typeof x==='string'?`${x}${y}`:[...x,...y];}function type(a){const l1=typeof a;if(a===null){return'Null';}else if(a===void 0){return'Undefined';}else if(l1==='boolean'){return'Boolean';}else if(l1==='number'){return'Number';}else if(l1==='string'){return'String';}else if(Array.isArray(a)){return'Array';}else if(a instanceof RegExp){return'RegExp';}const m1=a.toString();if(m1.startsWith('async')){return'Async';}else if(m1==='[object Promise]'){return'Promise';}else if(m1.includes('function')||m1.includes('=>')){return'Function';}return'Object';}function equals(a,b){if(arguments.length===1){return n1=>equals(a,n1);}if(a===b){return!0;}const o1=type(a);if(o1!==type(b)){return!1;}if(o1==='Array'){const p1=Array.from(a),q1=Array.from(b);if(p1.toString()!==q1.toString()){return!1;}let r1=!0;p1.forEach((s1,t1)=>{if(r1){if(s1!==q1[t1]&&!equals(s1,q1[t1])){r1=!1;}}});return r1;}if(o1==='Object'){const u1=Object.keys(a);if(u1.length!==Object.keys(b).length){return!1;}let v1=!0;u1.forEach(w1=>{if(v1){const x1=a[w1],y1=b[w1];if(x1!==y1&&!equals(x1,y1)){v1=!1;}}});return v1;}return!1;}function contains(x,z1){if(arguments.length===1){return A1=>contains(x,A1);}let B1=-1,C1=!1;while(++B1<z1.length&&!C1){if(equals(z1[B1],x)){C1=!0;}}return C1;}var dec=x=>x-1;function defaultTo(D1,E1){if(arguments.length===1){return F1=>defaultTo(D1,F1);}return E1===void 0||E1===null||Number.isNaN(E1)===!0?D1:E1;}function dissoc(G1,H1){if(arguments.length===1){return I1=>dissoc(G1,I1);}if(H1===null||H1===void 0){return{};}const J1={};for(const p in H1){J1[p]=H1[p];}delete J1[G1];return J1;}function divide(x,y){if(arguments.length===1){return K1=>divide(x,K1);}return x/y;}function drop(L1,x){if(arguments.length===1){return M1=>drop(L1,M1);}return x.slice(L1);}function dropLast(N1,x){if(arguments.length===1){return O1=>dropLast(N1,O1);}return x.slice(0,-N1);}function either(x,y){if(arguments.length===1){return P1=>either(x,P1);}return Q1=>x(Q1)||y(Q1);}function baseSlice(R1,S1,T1){let U1=-1,V1=R1.length;T1=T1>V1?V1:T1;if(T1<0){T1+=V1;}V1=S1>T1?0:T1-S1>>>0;S1>>>=0;const W1=Array(V1);while(++U1<V1){W1[U1]=R1[U1+S1];}return W1;}function takeLast(X1,x){if(arguments.length===1)return Y1=>takeLast(X1,Y1);const Z1=x.length;let a2=X1>Z1?Z1:X1;if(typeof x==='string'){return x.slice(Z1-a2);}a2=Z1-a2;return baseSlice(x,a2,Z1);}function endsWith(b2,c2){if(arguments.length===1){return d2=>endsWith(b2,d2);}return equals(b2,takeLast(b2.length,c2));}function F(){return!1;}function find(fn,f2){if(arguments.length===1){return g2=>find(fn,g2);}return f2.find(fn);}function findIndex(fn,i2){if(arguments.length===1){return j2=>findIndex(fn,j2);}const k2=i2.length;let l2=-1;while(++l2<k2){if(fn(i2[l2])){return l2;}}return-1;}function flatten(m2,n2){n2=n2===void 0?[]:n2;for(let i=0;i<m2.length;i++){if(Array.isArray(m2[i])){flatten(m2[i],n2);}else{n2.push(m2[i]);}}return n2;}function flipExport(fn){return(...input)=>{if(input.length===1){return p2=>fn(p2,input[0]);}else if(input.length===2){return fn(input[1],input[0]);}return void 0;};}function flip(fn,...input){return flipExport(fn);}function mapObject(fn,s2){const t2={};for(const u2 in s2){t2[u2]=fn(s2[u2],u2);}return t2;}function map(fn,w2){if(arguments.length===1){return x2=>map(fn,x2);}if(w2===void 0){return[];}if(!Array.isArray(w2)){return mapObject(fn,w2);}let y2=-1;const z2=w2.length,A2=Array(z2);while(++y2<z2){A2[y2]=fn(w2[y2]);}return A2;}function forEach(fn,C2){if(arguments.length===1){return D2=>forEach(fn,D2);}map(fn,C2);return C2;}function groupBy(fn,F2){if(arguments.length===1){return G2=>groupBy(fn,G2);}const H2={};for(let i=0;i<F2.length;i++){const I2=F2[i],J2=fn(I2);if(!H2[J2]){H2[J2]=[];}H2[J2].push(I2);}return H2;}function has(K2,L2){if(arguments.length===1){return M2=>has(K2,M2);}return L2[K2]!==void 0;}function head(a){if(typeof a==='string'){return a[0]||'';}return a[0];}function identity(x){return x;}function ifElse(N2,O2,P2){if(O2===void 0){return(Q2,R2)=>ifElse(N2,Q2,R2);}else if(P2===void 0){return S2=>ifElse(N2,O2,S2);}return T2=>{const U2=typeof N2==='boolean'?N2:N2(T2);if(U2===!0){return O2(T2);}return P2(T2);};}var inc=x=>x+1;function includes(x,y){if(arguments.length===1){return V2=>includes(x,V2);}return y.includes(x);}function indexBy(fn,X2){if(arguments.length===1){return Y2=>indexBy(fn,Y2);}const Z2={};for(let i=0;i<X2.length;i++){const a3=X2[i];Z2[fn(a3)]=a3;}return Z2;}function indexOf(x,b3){if(arguments.length===1){return c3=>indexOf(x,c3);}let d3=-1;const e3=b3.length;while(++d3<e3){if(b3[d3]===x){return d3;}}return-1;}function init(a){if(typeof a==='string'){return a.slice(0,-1);}return a.length?baseSlice(a,0,-1):[];}function is(f3,x){if(arguments.length===1){return g3=>is(f3,g3);}return x!=null&&x.constructor===f3||x instanceof f3;}function isNil(x){return x===void 0||x===null;}function join(h3,i3){if(arguments.length===1){return j3=>join(h3,j3);}return i3.join(h3);}function keys(x){return Object.keys(x);}function last(a){if(typeof a==='string'){return a[a.length-1]||'';}return a[a.length-1];}function lastIndexOf(x,k3){if(arguments.length===1){return l3=>lastIndexOf(x,l3);}let m3=-1;k3.map((n3,o3)=>{if(equals(n3,x)){m3=o3;}});return m3;}function length(x){return x.length;}function match(p3,x){if(arguments.length===1){return q3=>match(p3,q3);}const r3=x.match(p3);return r3===null?[]:r3;}function merge(s3,t3){if(arguments.length===1){return u3=>merge(s3,u3);}return Object.assign({},s3||{},t3||{});}function max(x,y){if(arguments.length===1){return v3=>max(x,v3);}return y>x?y:x;}function maxBy(fn,x,y){if(arguments.length===2){return x3=>maxBy(fn,x,x3);}else if(arguments.length===1){return(y3,z3)=>maxBy(fn,y3,z3);}return fn(y)>fn(x)?y:x;}function min(x,y){if(arguments.length===1){return A3=>min(x,A3);}return y<x?y:x;}function minBy(fn,x,y){return fn(y)<fn(x)?y:x;}var C3=curry(minBy);function modulo(x,y){if(arguments.length===1)return D3=>modulo(x,D3);return x%y;}function multiply(x,y){if(arguments.length===1)return E3=>multiply(x,E3);return x*y;}function none(fn,G3){if(arguments.length===1)return H3=>none(fn,H3);return G3.filter(fn).length===0;}function not(x){return!x;}function nth(I3,J3){if(arguments.length===1)return K3=>nth(I3,K3);const L3=I3<0?J3.length+I3:I3;return Object.prototype.toString.call(J3)==='[object String]'?J3.charAt(L3):J3[L3];}function omit(M3,N3){if(arguments.length===1){return O3=>omit(M3,O3);}if(N3===null||N3===void 0){return void 0;}const P3=typeof M3==='string'?M3=M3.split(','):M3,Q3={};for(const R3 in N3){if(!P3.includes(R3)){Q3[R3]=N3[R3];}}return Q3;}function partialCurry(fn,T3={}){return U3=>{if(type(fn)==='Async'||type(fn)==='Promise'){return new Promise((V3,W3)=>{fn(merge(U3,T3)).then(V3).catch(W3);});}return fn(merge(U3,T3));};}function path(X3,Y3){if(arguments.length===1){return Z3=>path(X3,Z3);}if(Y3===null||Y3===void 0){return void 0;}let a4=Y3,b4=0;const c4=typeof X3==='string'?X3.split('.'):X3;while(b4<c4.length){if(a4===null||a4===void 0){return void 0;}a4=a4[c4[b4]];b4++;}return a4;}function pathOr(d4,e4,f4){return defaultTo(d4,path(e4,f4));}var g4=curry(pathOr);function pick(h4,i4){if(arguments.length===1){return j4=>pick(h4,j4);}if(i4===null||i4===void 0){return void 0;}const k4=typeof h4==='string'?h4.split(','):h4,l4={};let m4=0;while(m4<k4.length){if(k4[m4]in i4){l4[k4[m4]]=i4[k4[m4]];}m4++;}return l4;}function pickAll(n4,o4){if(arguments.length===1){return p4=>pickAll(n4,p4);}if(o4===null||o4===void 0){return void 0;}const q4=typeof n4==='string'?n4.split(','):n4,r4={};let s4=0;while(s4<q4.length){if(q4[s4]in o4){r4[q4[s4]]=o4[q4[s4]];}else{r4[q4[s4]]=void 0;}s4++;}return r4;}function pipe(...fns){return compose(...fns.reverse());}function pluck(t4,u4){if(arguments.length===1)return v4=>pluck(t4,v4);const w4=[];map(x4=>{if(!(x4[t4]===void 0)){w4.push(x4[t4]);}},u4);return w4;}function prepend(x,y4){if(arguments.length===1)return z4=>prepend(x,z4);if(typeof y4==='string'){return`${x}${y4}`;}const A4=y4.concat();A4.unshift(x);return A4;}function prop(B4,C4){if(arguments.length===1)return D4=>prop(B4,D4);return C4[B4];}function propEq(E4,x,F4){if(x===void 0){return(G4,H4)=>propEq(E4,G4,H4);}else if(F4===void 0){return I4=>propEq(E4,x,I4);}return F4[E4]===x;}function range(J4,K4){if(arguments.length===1)return L4=>range(J4,L4);const M4=[];for(let i=J4;i<K4;i++){M4.push(i);}return M4;}function reduce(fn,O4,P4){if(O4===void 0){return(Q4,R4)=>reduce(fn,Q4,R4);}else if(P4===void 0){return S4=>reduce(fn,O4,S4);}return P4.reduce(fn,O4);}function reject(fn,U4){if(arguments.length===1)return V4=>reject(fn,V4);return filter(x=>!fn(x),U4);}function repeat(x,W4){if(arguments.length===1){return X4=>repeat(x,X4);}const Y4=Array(W4);return Y4.fill(x);}function replace(Z4,a5,b5){if(a5===void 0){return(c5,d5)=>replace(Z4,c5,d5);}else if(b5===void 0){return e5=>replace(Z4,a5,e5);}return b5.replace(Z4,a5);}function reverse(f5){const g5=f5.concat();return g5.reverse();}function sort(fn,i5){if(arguments.length===1)return j5=>sort(fn,j5);const k5=i5.concat();return k5.sort(fn);}function sortBy(fn,m5){if(arguments.length===1){return n5=>sortBy(fn,n5);}const o5=m5.concat();return o5.sort((a,b)=>{const p5=fn(a),q5=fn(b);return p5<q5?-1:p5>q5?1:0;});}function split(r5,s5){if(arguments.length===1)return t5=>split(r5,t5);return s5.split(r5);}function splitEvery(u5,x){if(arguments.length===1)return v5=>splitEvery(u5,v5);const w5=u5>1?u5:1,x5=[];let y5=0;while(y5<x.length){x5.push(x.slice(y5,y5+=w5));}return x5;}function startsWith(x,y){if(arguments.length===1)return z5=>startsWith(x,z5);return y.startsWith(x);}function subtract(x,y){if(arguments.length===1)return A5=>subtract(x,A5);return x-y;}function T(){return!0;}function tail(B5){return drop(1,B5);}function take(C5,x){if(arguments.length===1)return D5=>take(C5,D5);if(typeof x==='string'){return x.slice(0,C5);}return baseSlice(x,0,C5);}function tap(fn,x){if(arguments.length===1)return F5=>tap(fn,F5);fn(x);return x;}function test(G5,H5){if(arguments.length===1)return I5=>test(G5,I5);return H5.search(G5)!==-1;}function times(fn,K5){if(arguments.length===1)return L5=>times(fn,L5);return map(fn,range(0,K5));}function toLower(x){return x.toLowerCase();}function toString(x){return x.toString();}function toUpper(x){return x.toUpperCase();}function trim(M5){return M5.trim();}function uniq(N5){let O5=-1;const P5=[];while(++O5<N5.length){const Q5=N5[O5];if(!contains(Q5,P5)){P5.push(Q5);}}return P5;}function uniqWith(fn,S5){if(arguments.length===1)return T5=>uniqWith(fn,T5);let U5=-1;const V5=S5.length,W5=[];while(++U5<S5.length){const X5=S5[U5],Y5=any(Z5=>fn(X5,Z5),W5);if(!Y5){W5.push(X5);}}return W5;}function update(a6,b6,c6){if(b6===void 0){return(d6,e6)=>update(a6,d6,e6);}else if(c6===void 0){return f6=>update(a6,b6,f6);}const g6=c6.concat();return g6.fill(b6,a6,a6+1);}function values(h6){const i6=[];for(const j6 in h6){i6.push(h6[j6]);}return i6;}function without(k6,l6){return reduce((m6,n6)=>!contains(n6,k6)?m6.concat(n6):m6,[],l6);}function zip(x,y){if(arguments.length===1)return o6=>zip(x,o6);return addIndex(reduce)((p6,q6,r6)=>y[r6]?p6.concat([[q6,y[r6]]]):p6,[],x);}function zipObj(x,y){if(arguments.length===1)return s6=>zipObj(x,s6);return x.reduce((t6,u6,i)=>{t6[u6]=y[i];return t6;},{});}exports.add=add;exports.addIndex=addIndex;exports.adjust=adjust;exports.all=all;exports.allPass=allPass;exports.always=always;exports.any=any;exports.anyPass=anyPass;exports.append=append;exports.assoc=c1;exports.both=both;exports.complement=complement;exports.compose=compose;exports.concat=concat;exports.contains=contains;exports.curry=curry;exports.dec=dec;exports.defaultTo=defaultTo;exports.dissoc=dissoc;exports.divide=divide;exports.drop=drop;exports.dropLast=dropLast;exports.either=either;exports.endsWith=endsWith;exports.equals=equals;exports.F=F;exports.filter=filter;exports.find=find;exports.findIndex=findIndex;exports.flatten=flatten;exports.flip=flip;exports.forEach=forEach;exports.groupBy=groupBy;exports.has=has;exports.head=head;exports.identity=identity;exports.ifElse=ifElse;exports.inc=inc;exports.includes=includes;exports.indexBy=indexBy;exports.indexOf=indexOf;exports.init=init;exports.is=is;exports.isNil=isNil;exports.join=join;exports.keys=keys;exports.last=last;exports.lastIndexOf=lastIndexOf;exports.length=length;exports.map=map;exports.match=match;exports.merge=merge;exports.max=max;exports.maxBy=maxBy;exports.min=min;exports.minBy=C3;exports.modulo=modulo;exports.multiply=multiply;exports.none=none;exports.not=not;exports.nth=nth;exports.omit=omit;exports.partialCurry=partialCurry;exports.path=path;exports.pathOr=g4;exports.pick=pick;exports.pickAll=pickAll;exports.pipe=pipe;exports.pluck=pluck;exports.prepend=prepend;exports.prop=prop;exports.propEq=propEq;exports.range=range;exports.reduce=reduce;exports.reject=reject;exports.repeat=repeat;exports.replace=replace;exports.reverse=reverse;exports.sort=sort;exports.sortBy=sortBy;exports.split=split;exports.splitEvery=splitEvery;exports.startsWith=startsWith;exports.subtract=subtract;exports.T=T;exports.tail=tail;exports.take=take;exports.takeLast=takeLast;exports.tap=tap;exports.test=test;exports.times=times;exports.toLower=toLower;exports.toString=toString;exports.toUpper=toUpper;exports.trim=trim;exports.type=type;exports.uniq=uniq;exports.uniqWith=uniqWith;exports.update=update;exports.values=values;exports.without=without;exports.zip=zip;exports.zipObj=zipObj;