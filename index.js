function add(a,b){if(b===void 0){return c=>add(a,c);}return a+b;}function adjust(d,e,f){if(e===void 0){return(g,h)=>adjust(d,g,h);}else if(f===void 0){return j=>adjust(d,e,j);}return f.map((k,l)=>{if(l===e){return d(f[e]);}return k;});}function any(m,n){if(n===void 0){return o=>any(m,o);}let p=0;while(p<n.length){if(m(n[p])){return!0;}p++;}return!1;}function append(q,r){if(r===void 0){return s=>append(q,s);}const t=r;t.push(q);return t;}function isFunction(u){return typeof u==="function";}function compose(){const v=arguments;let w=v.length;while(w--){if(!isFunction(v[w])){throw new TypeError();}}return function(){let x=arguments,y=v.length;while(y--){x=[v[y].apply(this,x)];}return x[0];};}function contains(z,A){if(A===void 0){return B=>contains(z,B);}let C=-1,D=!1;while(++C<A.length&&!D){if(equals(A[C],z)){D=!0;}}return D;}function filter(E,F){if(F===void 0){return G=>filter(E,G);}let H=-1,I=0;const J=F.length,K=[];while(++H<J){const L=F[H];if(E(L)){K[I++]=L;}}return K;}function find(M,N){if(N===void 0){return O=>find(M,O);}return N.find(M);}function findIndex(P,Q){if(Q===void 0){return R=>findIndex(P,R);}const S=Q.length;let T=-1;while(++T<S){if(P(Q[T])){return T;}}return-1;}function flatten(U,V){V=V===void 0?[]:V;for(let i=0;i<U.length;i++){if(Array.isArray(U[i])){flatten(U[i],V);}else{V.push(U[i]);}}return V;}function drop(W,a){if(a===void 0){return X=>drop(W,X);}return a.slice(W);}function dropLast(Y,a){if(a===void 0){return Z=>dropLast(Y,Z);}return a.slice(0,-Y);}function equals(a,b){if(b===void 0){return a1=>equals(a,a1);}else if(a===b){return a!==0||1/a===1/b;}const b1=type(a);if(b1!==type(b)){return!1;}if(b1==="Array"){const c1=a,d1=b;return c1.sort().toString()===d1.sort().toString();}if(b1==="Object"){const e1=Object.keys(a);if(e1.length===Object.keys(b).length){if(e1.length===0){return!0;}let f1=!0;e1.map(g1=>{if(f1){const h1=type(a[g1]),i1=type(b[g1]);if(h1===i1){if(h1==="Object"){if(Object.keys(a[g1]).length===Object.keys(b[g1]).length){if(Object.keys(a[g1]).length!==0){if(!equals(a[g1],b[g1])){f1=!1;}}}else{f1=!1;}}else if(!equals(a[g1],b[g1])){f1=!1;}}else{f1=!1;}}});return f1;}}return!1;}function head(a){if(typeof a==="string"){return a[0]||"";}return a[0];}function indexOf(j1,k1){if(k1===void 0){return l1=>indexOf(j1,l1);}let m1=-1;const n1=k1.length;while(++m1<n1){if(k1[m1]===j1){return m1;}}return-1;}function baseSlice(o1,p1,q1){let r1=-1,s1=o1.length;q1=q1>s1?s1:q1;if(q1<0){q1+=s1;}s1=p1>q1?0:q1-p1>>>0;p1>>>=0;const t1=Array(s1);while(++r1<s1){t1[r1]=o1[r1+p1];}return t1;}function init(a){if(typeof a==="string"){return a.slice(0,-1);}return a.length?baseSlice(a,0,-1):[];}function join(u1,v1){if(v1===void 0){return w1=>join(u1,w1);}return v1.join(u1);}function map(fn,y1){if(y1===void 0){return z1=>map(fn,z1);}let A1=-1;const B1=y1.length,C1=Array(B1);while(++A1<B1){C1[A1]=fn(y1[A1]);}return C1;}function last(a){if(typeof a==="string"){return a[a.length-1]||"";}return a[a.length-1];}function length(D1){return D1.length;}function match(E1,F1){if(F1===void 0){return G1=>match(E1,G1);}const H1=F1.match(E1);return H1===null?[]:H1;}function merge(I1,J1){if(J1===void 0){return K1=>merge(I1,K1);}return Object.assign({},I1,J1);}function omit(L1,M1){if(M1===void 0){return N1=>omit(L1,N1);}const O1={};for(key in M1){if(!L1.includes(key)){O1[key]=M1[key];}}return O1;}function path(P1,Q1){if(Q1===void 0){return R1=>path(P1,R1);}let S1=Q1,T1=0;while(T1<P1.length){if(S1===null){return void 0;}S1=S1[P1[T1]];T1++;}return S1;}function pick(U1,V1){if(V1===void 0){return W1=>pick(U1,W1);}const X1={};let Y1=0;while(Y1<U1.length){if(U1[Y1]in V1){X1[U1[Y1]]=V1[U1[Y1]];}Y1++;}return X1;}function prepend(Z1,a2){if(a2===void 0){return b2=>prepend(Z1,b2);}const c2=a2;c2.unshift(Z1);return c2;}function prop(d2,e2){if(e2===void 0){return f2=>prop(d2,f2);}return e2[d2];}function propEq(g2,h2,i2){if(h2===void 0){return(j2,k2)=>propEq(g2,j2,k2);}else if(i2===void 0){return l2=>propEq(g2,h2,l2);}return i2[g2]===h2;}function range(m2,n2){const o2=[];for(let i=m2;i<n2;i++){o2.push(i);}return o2;}function repeat(a,p2){if(p2===void 0){return q2=>repeat(a,q2);}const r2=Array(p2);return r2.fill(a);}function replace(s2,t2,u2){if(t2===void 0){return(v2,w2)=>replace(s2,v2,w2);}else if(u2===void 0){return x2=>replace(s2,t2,x2);}return u2.replace(s2,t2);}function subtract(a,b){if(b===void 0){return y2=>subtract(a,y2);}return a-b;}function sort(fn,A2){if(A2===void 0){return B2=>sort(fn,B2);}const C2=Array.from(A2);return C2.sort(fn);}function sortBy(fn,E2){if(E2===void 0){return F2=>sortBy(fn,F2);}const G2=Array.from(E2);return G2.sort((a,b)=>{const H2=fn(a),I2=fn(b);return H2<I2?-1:H2>I2?1:0;});}function split(J2,K2){if(K2===void 0){return L2=>split(J2,L2);}return K2.split(J2);}function splitEvery(M2,a){if(a===void 0){return N2=>splitEvery(M2,N2);}M2=M2>1?M2:1;const O2=[];let P2=0;while(P2<a.length){O2.push(a.slice(P2,P2+=M2));}return O2;}function tail(Q2){return drop(1,Q2);}function take(R2,a){if(a===void 0){return S2=>take(R2,S2);}else if(typeof a==="string"){return a.slice(0,R2);}return baseSlice(a,0,R2);}function takeLast(T2,a){if(a===void 0){return U2=>takeLast(T2,U2);}const V2=a.length;T2=T2>V2?V2:T2;if(typeof a==="string"){return a.slice(V2-T2);}T2=V2-T2;return baseSlice(a,T2,V2);}function toLower(W2){return W2.toLowerCase();}function toUpper(X2){return X2.toUpperCase();}function test(Y2,Z2){if(Z2===void 0){return a3=>test(Y2,a3);}return Z2.search(Y2)===-1?!1:!0;}function trim(b3){return b3.trim();}function type(a){if(a===null){return"Null";}else if(Array.isArray(a)){return"Array";}else if(typeof a==="boolean"){return"Boolean";}else if(typeof a==="number"){return"Number";}else if(typeof a==="string"){return"String";}else if(a===void 0){return"Undefined";}else if(a instanceof RegExp){return"RegExp";}const c3=a.toString();if(c3.startsWith("async")){return"Async";}else if(c3.includes("function")||c3.includes("=>")){return"Function";}return"Object";}function values(d3){const e3=[];for(key in d3){e3.push(d3[key]);}return e3;}function uniq(f3){let g3=-1;const h3=[];while(++g3<f3.length){const i3=f3[g3];if(!contains(i3,h3)){h3.push(i3);}}return h3;}function update(j3,k3,l3){if(k3===void 0){return(m3,n3)=>update(j3,m3,n3);}else if(l3===void 0){return o3=>update(j3,k3,o3);}const p3=Array.from(l3);return p3.fill(k3,j3,j3+1);}module.exports.add=add;module.exports.adjust=adjust;module.exports.any=any;module.exports.append=append;module.exports.compose=compose;module.exports.contains=contains;module.exports.drop=drop;module.exports.dropLast=dropLast;module.exports.equals=equals;module.exports.filter=filter;module.exports.find=find;module.exports.findIndex=findIndex;module.exports.flatten=flatten;module.exports.head=head;module.exports.indexOf=indexOf;module.exports.init=init;module.exports.join=join;module.exports.last=last;module.exports.length=length;module.exports.map=map;module.exports.match=match;module.exports.merge=merge;module.exports.omit=omit;module.exports.path=path;module.exports.pick=pick;module.exports.prepend=prepend;module.exports.prop=prop;module.exports.propEq=propEq;module.exports.range=range;module.exports.repeat=repeat;module.exports.replace=replace;module.exports.sort=sort;module.exports.sortBy=sortBy;module.exports.split=split;module.exports.splitEvery=splitEvery;module.exports.subtract=subtract;module.exports.tail=tail;module.exports.take=take;module.exports.takeLast=takeLast;module.exports.test=test;module.exports.toLower=toLower;module.exports.toUpper=toUpper;module.exports.trim=trim;module.exports.type=type;module.exports.uniq=uniq;module.exports.update=update;module.exports.values=values;