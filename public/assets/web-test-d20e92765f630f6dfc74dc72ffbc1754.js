define("web-test/adapters/question",["exports","ember-data"],function(e,t){"use strict";e.default=t.default.RESTAdapter.extend({namespace:"api",headers:{"content-type":"application/json",Accept:"application/json"},ajax:function(e,t,a){return t="POST",this._super(e,t,a)}})}),define("web-test/app",["exports","ember","ember/resolver","ember/load-initializers","web-test/config/environment"],function(e,t,a,n,r){"use strict";var d;t.default.MODEL_FACTORY_INJECTIONS=!0,d=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:a.default}),n.default(d,r.default.modulePrefix),e.default=d}),define("web-test/controllers/array",["exports","ember"],function(e,t){"use strict";e.default=t.default.Controller}),define("web-test/controllers/object",["exports","ember"],function(e,t){"use strict";e.default=t.default.Controller}),define("web-test/controllers/page1",["exports","ember"],function(e,t){"use strict";e.default=t.default.Controller.extend({ans1:"",actions:{nextPage:function(){this.get("model").save(),this.transitionTo("page2")}}})}),define("web-test/initializers/export-application-global",["exports","ember","web-test/config/environment"],function(e,t,a){"use strict";function n(){var e=arguments[1]||arguments[0];if(!1!==a.default.exportApplicationGlobal){var n;if("undefined"!=typeof window)n=window;else if("undefined"!=typeof global)n=global;else{if("undefined"==typeof self)return;n=self}var r,d=a.default.exportApplicationGlobal;r="string"==typeof d?d:t.default.String.classify(a.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("web-test/instance-initializers/app-version",["exports","web-test/config/environment","ember"],function(e,t,a){"use strict";var n=a.default.String.classify,r=!1;e.default={name:"App Version",initialize:function(e){if(!r){var d=n(e.toString());a.default.libraries.register(d,t.default.APP.version),r=!0}}}}),define("web-test/models/question",["exports","ember-data"],function(e,t){"use strict";e.default=t.default.Model.extend({question1:t.default.attr("string")})}),define("web-test/router",["exports","ember","web-test/config/environment"],function(e,t,a){"use strict";var n=t.default.Router.extend({location:a.default.locationType});n.map(function(){this.route("page1"),this.route("page2")}),e.default=n}),define("web-test/routes/page1",["exports","ember"],function(e,t){"use strict";e.default=t.default.Route.extend({model:function(){return this.store.createRecord("question")}})}),define("web-test/routes/page2",["exports","ember"],function(e,t){"use strict";e.default=t.default.Route.extend({})}),define("web-test/serializers/question",["exports","ember-data"],function(e,t){"use strict";e.default=t.default.RESTSerializer.extend({primaryKey:"_id"})}),define("web-test/templates/application",["exports"],function(e){"use strict";e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"web-test/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),n},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("web-test/templates/page1",["exports"],function(e){"use strict";e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:26,column:0}},moduleName:"web-test/templates/page1.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","row");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","small-10 columns");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("ol"),d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("li"),l=e.createTextNode("Name any two JavaScript functions, which are used to convert non-numeric values into numbers?");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n\n      ");e.appendChild(r,d);var d=e.createElement("li"),l=e.createTextNode("Describe “===” operator?");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n\n      ");e.appendChild(r,d);var d=e.createElement("li"),l=e.createTextNode("What is typeof []?");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n\n      ");e.appendChild(r,d);var d=e.createElement("li"),l=e.createTextNode("What is 2+true?");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n\n      ");e.appendChild(r,d);var d=e.createElement("li"),l=e.createTextNode("What is +’Hey’?");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","small-2 columns");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("button");e.setAttribute(r,"class","right");var d=e.createTextNode(" Next ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[0]),r=e.childAt(n,[1,1]),d=e.childAt(n,[3,1]),l=new Array(6);return l[0]=e.createMorphAt(r,3,3),l[1]=e.createMorphAt(r,7,7),l[2]=e.createMorphAt(r,11,11),l[3]=e.createMorphAt(r,15,15),l[4]=e.createMorphAt(r,19,19),l[5]=e.createElementMorph(d),l},statements:[["inline","textarea",[],["value",["subexpr","@mut",[["get","model.question1",["loc",[null,[5,23],[5,38]]]]],[],[]]],["loc",[null,[5,6],[5,40]]]],["content","textarea",["loc",[null,[8,6],[8,19]]]],["content","textarea",["loc",[null,[11,6],[11,19]]]],["content","textarea",["loc",[null,[14,6],[14,18]]]],["content","textarea",["loc",[null,[17,6],[17,18]]]],["element","action",["nextPage"],[],["loc",[null,[22,12],[22,33]]]]],locals:[],templates:[]}}())}),define("web-test/templates/page2",["exports"],function(e){"use strict";e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:31,column:0}},moduleName:"web-test/templates/page2.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","row");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","small-10 columns");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("ol"),d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("li"),l=e.createTextNode("What will be the output of null ===undefined?");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n\n      ");e.appendChild(r,d);var d=e.createElement("li"),l=e.createTextNode("Consider following two snippets. What will be the result and why?");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n      Snippet#1:");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n      function test() {");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n      c = 20;");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n      var d = 100;");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n      }");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n      test();");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n      console.log(c);");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n      console.log(d);");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n      ");e.appendChild(d,l);var l=e.createComment("");e.appendChild(d,l);var l=e.createTextNode("\n      Snippet#2:");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n      expression();");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n      var expression = function() {");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n        console.log('Will this work?');");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n      };");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n\n\n\n    ");e.appendChild(n,r);var r=e.createElement("button"),d=e.createTextNode(" Next ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[0,1,1]),r=new Array(3);return r[0]=e.createMorphAt(n,3,3),r[1]=e.createMorphAt(e.childAt(n,[5]),20,20),r[2]=e.createMorphAt(n,7,7),r},statements:[["content","textarea",["loc",[null,[5,6],[5,18]]]],["content","textarea",["loc",[null,[16,6],[16,19]]]],["content","textarea",["loc",[null,[22,6],[22,19]]]]],locals:[],templates:[]}}())}),define("web-test/config/environment",["ember"],function(e){try{var t="web-test/config/environment",a=e.default.$('meta[name="'+t+'"]').attr("content");return{default:JSON.parse(unescape(a))}}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests?require("web-test/tests/test-helper"):require("web-test/app").default.create({name:"web-test",version:"0.0.0+ed544fec"});