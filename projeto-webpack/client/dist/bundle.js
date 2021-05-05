(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='dist',b(b.s=11)})([function(a,b,c){'use strict';c.d(b,'a',function(){return e});var d=c(1);let e=class{constructor(a=d.g('data'),b=d.g('quantidade'),c=d.g('valor')){Object.assign(this,{_quantidade:b,_valor:c}),this._data=new Date(a.getTime()),Object.freeze(this)}get volume(){return this._quantidade*this._valor}get data(){return new Date(this._data.getTime())}get quantidade(){return this._quantidade}get valor(){return this._valor}equals(a){return JSON.stringify(this)==JSON.stringify(a)}}},function(a,b,c){'use strict';var d=c(13);c.d(b,'a',function(){return d.a});var e=c(6),f=c(14);c.d(b,'f',function(){return f.a});var g=c(2);c.d(b,'e',function(){return g.b});var h=c(8),i=c(5),j=c(15);c.d(b,'d',function(){return j.a});var k=c(16);c.d(b,'c',function(){return k.a});var l=c(17);c.d(b,'g',function(){return l.a});var m=c(18);c.d(b,'b',function(){return m.a})},function(a,b,c){'use strict';function d(a){return a instanceof f||Object.getPrototypeOf(a)instanceof f}c.d(b,'a',function(){return e}),b.b=function(a){return d(a)?a.message:(console.log(a),'N\xE3o foi poss\xEDvel realizar a opera\xE7\xE3o.')};let e=class extends Error{constructor(a=''){super(a),this.name=this.constructor.name}};const f=e},function(a,b,c){'use strict';c.d(b,'a',function(){return d});let d=class{constructor(a){this._elemento=document.querySelector(a)}update(a){this._elemento.innerHTML=this.template(a)}template(){throw new Error('Voc\xEA precisa implementar o m\xE9todo template')}}},function(a,b,c){'use strict';var d=c(0);c.d(b,'a',function(){return d.a});var e=c(7),f=c(19);c.d(b,'b',function(){return f.a});var g=c(20);c.d(b,'c',function(){return g.a})},function(a,b,c){'use strict';c.d(b,'a',function(){return d});let d=class a{static create(b,c,d){return new Proxy(b,{get(b,e){return a._ehFuncao(b[e])&&c.includes(e)?function(){console.log(`"${e}" disparou a armadilha`),b[e].apply(b,arguments),d(b)}:b[e]},set(a,b,e){const f=Reflect.set(a,b,e);return c.includes(b)&&d(a),f}})}static _ehFuncao(a){return typeof a==typeof Function}}},function(a,b,c){'use strict';c.d(b,'a',function(){return e});const d=['negociacoes'];let f=null,g=null,e=class a{constructor(){throw new Error('N\xE3o \xE9 poss\xEDvel criar inst\xE2ncias dessa classe')}static getConnection(){return new Promise((b,c)=>{if(f)return b(f);const d=indexedDB.open('jscangaceiro',2);d.onupgradeneeded=(b)=>{a._createStores(b.target.result)},d.onsuccess=(a)=>{f=a.target.result,g=f.close.bind(f),f.close=()=>{throw new Error('Voc\xEA n\xE3o pode fechar diretamente a conex\xE3o')},b(a.target.result)},d.onerror=(a)=>{console.log(a.target.error),c(a.target.error.name)}})}static _createStores(a){d.forEach((b)=>{a.objectStoreNames.contains(b)&&a.deleteObjectStore(b),a.createObjectStore(b,{autoIncrement:!0})})}static closeConnection(){f&&g()}}},function(a,b,c){'use strict';c.d(b,'a',function(){return e});var d=c(0);let e=class{constructor(a){this._connection=a,this._store='negociacoes'}adiciona(a){return new Promise((b,c)=>{const d=this._connection.transaction([this._store],'readwrite').objectStore(this._store).add(a);d.onsuccess=()=>b(),d.onerror=(a)=>{console.log(a.target.error),c('N\xE3o foi poss\xEDvel salvar a negocia\xE7\xE3o')}})}listaTodos(){return new Promise((a,b)=>{const c=[],e=this._connection.transaction([this._store],'readwrite').objectStore(this._store).openCursor();e.onsuccess=(b)=>{const e=b.target.result;if(e){const a=new d.a(e.value._data,e.value._quantidade,e.value._valor);c.push(a),e.continue()}else a(c)},e.onerror=(a)=>{console.log(a.target.error),b('N\xE3o foi poss\xEDvel listar nas negocia\xE7\xF5es')}})}apagaTodos(){return new Promise((a,b)=>{const c=this._connection.transaction([this._store],'readwrite').objectStore(this._store).clear();c.onsuccess=()=>a(),c.onerror=(a)=>{console.log(a.target.error),b('N\xE3o foi poss\xEDvel apagar as negocia\xE7\xF5es')}})}}},function(a,b,c){'use strict';c.d(b,'a',function(){return d});let d=class{_handleErrors(a){if(!a.ok)throw new Error(a.statusText);return a}get(a){return fetch(a).then((a)=>this._handleErrors(a)).then((a)=>a.json())}}},function(a,b,c){'use strict';c.d(b,'a',function(){return e});var d=c(10);let e=class{constructor(){throw new Error('Esta classe n\xE3o pode ser instanciada')}static paraTexto(a){return`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`}static paraData(a){if(!/\d{2}\/\d{2}\/\d{4}/.test(a))throw new d.a;return new Date(...a.split('/').reverse().map((a,b)=>a-b%2))}}},function(a,b,c){'use strict';c.d(b,'a',function(){return e});var d=c(2);let e=class extends d.a{constructor(){super('A data deve estar no formato dd/mm/aaaa')}}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(12),e=c(4),f=c(25),g=c.n(f),h=c(26),i=c.n(h),j=c(27),k=c.n(j);const l=new d.a,m=new e.a(new Date(),1,200),n=new Headers;n.set('Content-Type','application/json');const o=JSON.stringify(m);fetch('http://localhost:3000/negociacoes',{method:'POST',headers:n,body:o}).then(()=>console.log('Dado enviado com sucesso'))},function(a,b,c){'use strict';function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}function e(a,b,c,d,e){var f={};return Object.keys(d).forEach(function(a){f[a]=d[a]}),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,('value'in f||f.initializer)&&(f.writable=!0),f=c.slice().reverse().reduce(function(c,d){return d(a,b,c)||c},f),e&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(e):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(a,b,f),f=null),f}c.d(b,'a',function(){return q});var f,g,h,i,j,k,l,m,n=c(4),o=c(21),p=c(1);let q=(f=p.c('#data','#quantidade','#valor'),g=p.b('submit','.form'),h=p.d(),i=p.b('click','#botao-importa'),j=p.d(),k=p.b('click','#botao-apaga'),f(l=(m=class{constructor(a,b,c){Object.assign(this,{_inputData:a,_inputQuantidade:b,_inputValor:c}),this._negociacoes=new p.a(new n.c(),new o.d('#negociacoes'),'adiciona','esvazia'),this._mensagem=new p.a(new o.b(),new o.c('#mensagemView'),'texto'),this._service=new n.b,this._init()}_init(){var a=this;return d(function*(){try{const b=yield p.f(),c=yield b.listaTodos();c.forEach(function(b){return a._negociacoes.adiciona(b)})}catch(b){a._mensagem.texto=p.e(b)}})()}adiciona(){var a=this;return d(function*(){try{const b=a._criaNegociacao(),c=yield p.f();yield c.adiciona(b),a._negociacoes.adiciona(b),a._mensagem.texto='Negocia\xE7\xE3o adicionada com sucesso',a._limpaFormulario()}catch(b){a._mensagem.texto=p.e(b)}})()}_limpaFormulario(){this._inputData.value='',this._inputQuantidade.value=1,this._inputValor.value=0,this._inputData.focus()}_criaNegociacao(){return new n.a(o.a.paraData(this._inputData.value),parseInt(this._inputQuantidade.value),parseFloat(this._inputValor.value))}importaNegociacoes(){var a=this;return d(function*(){try{const b=yield a._service.obtemNegociacoesDoPeriodo();console.log(b),b.filter(function(b){return!a._negociacoes.paraArray().some(function(a){return b.equals(a)})}).forEach(function(b){return a._negociacoes.adiciona(b)}),a._mensagem.texto='Negocia\xE7\xF5es do per\xEDodo importadas com sucesso'}catch(b){a._mensagem.texto=p.e(b)}})()}apaga(){var a=this;return d(function*(){try{const b=yield p.f();yield b.apagaTodos(),a._negociacoes.esvazia(),a._mensagem.texto='Negocia\xE7\xF5es apagadas com sucesso'}catch(b){a._mensagem.texto=p.e(b)}})()}},e(m.prototype,'adiciona',[g,h],Object.getOwnPropertyDescriptor(m.prototype,'adiciona'),m.prototype),e(m.prototype,'importaNegociacoes',[i,j],Object.getOwnPropertyDescriptor(m.prototype,'importaNegociacoes'),m.prototype),e(m.prototype,'apaga',[k],Object.getOwnPropertyDescriptor(m.prototype,'apaga'),m.prototype),m))||l)},function(a,b,c){'use strict';c.d(b,'a',function(){return e});var d=c(5);let e=class{constructor(a,b,...c){const e=d.a.create(a,c,(a)=>{b.update(a)});return b.update(a),e}}},function(a,b,c){'use strict';function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}c.d(b,'a',function(){return g});var e=c(6),f=c(7);let g=(()=>{var a=d(function*(){let a=yield e.a.getConnection();return new f.a(a)});return function(){return a.apply(this,arguments)}})()},function(a,b){'use strict';b.a=function(a=500){return function(b,c,d){const e=d.value;let f=0;return d.value=function(...b){event&&event.preventDefault(),clearInterval(f),f=setTimeout(()=>e.apply(this,b),a)},d}}},function(a,b){'use strict';function c(a,b){document.querySelector(b.selector).addEventListener(b.event,(c)=>{b.prevent&&c.preventDefault(),a[b.propertyKey](c)})}b.a=function(...a){const b=a.map((a)=>document.querySelector(a));return function(a){const d=a,e=function(){const a=new d(...b);Object.getOwnPropertyNames(d.prototype).forEach((b)=>{Reflect.hasMetadata('bindEvent',a,b)&&c(a,Reflect.getMetadata('bindEvent',a,b))})};return e.prototype=d.prototype,e}}},function(a,b){'use strict';b.a=function(a){throw new Error(`${a} é um parâmetro obrigatório`)}},function(a,b,c){'use strict';b.a=function(a=d.g('event'),b=d.g('selector'),c=!0){return function(d,e,f){return Reflect.defineMetadata('bindEvent',{event:a,selector:b,prevent:c,propertyKey:e},Object.getPrototypeOf(d),e),f}};var d=c(1)},function(a,b,c){'use strict';function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}c.d(b,'a',function(){return h});var e=c(8),f=c(0),g=c(2);let h=class{constructor(){this._http=new e.a}obtemNegociacoesDaSemana(){return this._http.get('http://localhost:3000/negociacoes/semana').then((a)=>a.map((a)=>new f.a(new Date(a.data),a.quantidade,a.valor)),()=>{throw new g.a('N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es da semana')})}obtemNegociacoesDaSemanaAnterior(){return this._http.get('http://localhost:3000/negociacoes/anterior').then((a)=>a.map((a)=>new f.a(new Date(a.data),a.quantidade,a.valor)),()=>{throw new g.a('N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es da semana anterior')})}obtemNegociacoesDaSemanaRetrasada(){return this._http.get('http://localhost:3000/negociacoes/retrasada').then((a)=>a.map((a)=>new f.a(new Date(a.data),a.quantidade,a.valor)),()=>{throw new g.a('N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es da semana retrasada')})}obtemNegociacoesDoPeriodo(){var a=this;return d(function*(){try{let b=yield Promise.all([a.obtemNegociacoesDaSemana(),a.obtemNegociacoesDaSemanaAnterior(),a.obtemNegociacoesDaSemanaRetrasada()]);return b.reduce(function(a,b){return a.concat(b)},[]).sort(function(c,a){return a.data.getTime()-c.data.getTime()})}catch(a){throw console.log(a),new g.a('N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es do per\xEDodo')}})()}}},function(a,b,c){'use strict';c.d(b,'a',function(){return d});let d=class{constructor(){this._negociacoes=[],Object.freeze(this)}adiciona(a){this._negociacoes.push(a)}paraArray(){return[].concat(this._negociacoes)}get volumeTotal(){return this._negociacoes.reduce((a,b)=>a+b.volume,0)}esvazia(){this._negociacoes.length=0}}},function(a,b,c){'use strict';var d=c(22);c.d(b,'c',function(){return d.a});var e=c(23);c.d(b,'d',function(){return e.a});var f=c(3),g=c(24);c.d(b,'b',function(){return g.a});var h=c(10),i=c(9);c.d(b,'a',function(){return i.a})},function(a,b,c){'use strict';c.d(b,'a',function(){return e});var d=c(3);let e=class extends d.a{template(a){return a.texto?`<p class="alert alert-info">${a.texto}</p>`:`<p></p>`}}},function(a,b,c){'use strict';c.d(b,'a',function(){return f});var d=c(3),e=c(9);let f=class extends d.a{template(a){return`
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${a.paraArray().map((a)=>`
                    <tr>
                        <td>${e.a.paraTexto(a.data)}</td>
                        <td>${a.quantidade}</td>
                        <td>${a.valor}</td>
                        <td>${a.volume}</td>
                    </tr>                        
                `).join('')}
            </tbody>
            
            <tfoot>
                <tr>
                    <td colspan="2"></td>
                    <td><b>VOLUME TOTAL</b></td>
                    <td>${a.volumeTotal}</td>                                
                </tr>
            </tfoot>
            
        </table>               
        `}}},function(a,b,c){'use strict';c.d(b,'a',function(){return d});let d=class{constructor(a=''){this._texto=a}get texto(){return this._texto}set texto(a){this._texto=a}}},function(){},function(){},function(){}]);