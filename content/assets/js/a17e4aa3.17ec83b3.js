"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2779],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1990:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={sidebar_position:1},l="JSON JQ Transform Task",p={unversionedId:"reference-docs/system-tasks/json-jq-transform-task",id:"reference-docs/system-tasks/json-jq-transform-task",isDocsHomePage:!1,title:"JSON JQ Transform Task",description:"`json",source:"@site/docs/reference-docs/system-tasks/json-jq-transform-task.md",sourceDirName:"reference-docs/system-tasks",slug:"/reference-docs/system-tasks/json-jq-transform-task",permalink:"/content/docs/reference-docs/system-tasks/json-jq-transform-task",editUrl:"https://github.com/orkes-io/docs/edit/main/docs/reference-docs/system-tasks/json-jq-transform-task.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"referenceDocsSideBar",previous:{title:"Inline Task",permalink:"/content/docs/reference-docs/system-tasks/inline-task"},next:{title:"Kafka Publish Task",permalink:"/content/docs/reference-docs/system-tasks/kafka-publish-task"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Use Cases",id:"use-cases",children:[]},{value:"Configuration",id:"configuration",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"json-jq-transform-task"},"JSON JQ Transform Task"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"type" : "JSON_JQ_TRANSFORM_TASK"\n')),(0,s.kt)("h3",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"JSON_JQ_TRANSFORM_TASK is a System task that allows processing of JSON data that is supplied to the task, by using the\npopular JQ processing tool\u2019s query expression language."),(0,s.kt)("p",null,"Check the ",(0,s.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/manual/v1.5/"},"JQ Manual"),", and the\n",(0,s.kt)("a",{parentName:"p",href:"https://jqplay.org/"},"JQ Playground")," for more information on JQ"),(0,s.kt)("h3",{id:"use-cases"},"Use Cases"),(0,s.kt)("p",null,"JSON is a popular format of choice for data-interchange. It is widely used in web and server applications, document\nstorage, API I/O etc. It\u2019s also used within Conductor to define workflow and task definitions and passing data and state\nbetween tasks and workflows. This makes a tool like JQ a natural fit for processing task related data. Some common\nusages within Conductor includes, working with HTTP task, JOIN tasks or standalone tasks that try to transform data from\nthe output of one task to the input of another."),(0,s.kt)("h3",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Here is an example of a ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"em"},"JSON_JQ_TRANSFORM"))," task. The ",(0,s.kt)("inlineCode",{parentName:"p"},"inputParameters")," attribute is expected to have a value object\nthat has the following"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"A list of key value pair objects denoted key1/value1, key2/value2 in the example below. Note the key1/value1 are\narbitrary names used in this example.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"A key with the name ",(0,s.kt)("inlineCode",{parentName:"p"},"queryExpression"),", whose value is a JQ expression. The expression will operate on the value of\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"inputParameters")," attribute. In the example below, the ",(0,s.kt)("inlineCode",{parentName:"p"},"inputParameters")," has 2 inner objects named by attributes\n",(0,s.kt)("inlineCode",{parentName:"p"},"key1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"key2"),", each of which has an object that is named ",(0,s.kt)("inlineCode",{parentName:"p"},"value1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"value2"),". They have an associated array of\nstrings as values, ",(0,s.kt)("inlineCode",{parentName:"p"},'"a", "b"')," and ",(0,s.kt)("inlineCode",{parentName:"p"},'"c", "d"'),". The expression ",(0,s.kt)("inlineCode",{parentName:"p"},"key3: (.key1.value1 + .key2.value2)")," concat's the 2\nstring arrays into a single array against an attribute named ",(0,s.kt)("inlineCode",{parentName:"p"},"key3")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "jq_example_task",\n  "taskReferenceName": "my_jq_example_task",\n  "type": "JSON_JQ_TRANSFORM",\n  "inputParameters": {\n    "key1": {\n      "value1": [\n        "a",\n        "b"\n      ]\n    },\n    "key2": {\n      "value2": [\n        "c",\n        "d"\n      ]\n    },\n    "queryExpression": "{ key3: (.key1.value1 + .key2.value2) }"\n  }\n}\n')),(0,s.kt)("p",null,"The execution of this example task above will provide the following output. The ",(0,s.kt)("inlineCode",{parentName:"p"},"resultList")," attribute stores the full\nlist of the ",(0,s.kt)("inlineCode",{parentName:"p"},"queryExpression")," result. The ",(0,s.kt)("inlineCode",{parentName:"p"},"result")," attribute stores the first element of the resultList. An\noptional ",(0,s.kt)("inlineCode",{parentName:"p"},"error"),"\nattribute along with a string message will be returned if there was an error processing the query expression."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "result": {\n    "key3": [\n      "a",\n      "b",\n      "c",\n      "d"\n    ]\n  },\n  "resultList": [\n    {\n      "key3": [\n        "a",\n        "b",\n        "c",\n        "d"\n      ]\n    }\n  ]\n}\n')),(0,s.kt)("h4",{id:"input-configuration"},"Input Configuration"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"name"),(0,s.kt)("td",{parentName:"tr",align:null},"Task Name. A unique name that is descriptive of the task function")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"taskReferenceName"),(0,s.kt)("td",{parentName:"tr",align:null},"Task Reference Name. A unique reference to this task. There can be multiple references of a task within the same workflow definition")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"type"),(0,s.kt)("td",{parentName:"tr",align:null},"Task Type. In this case, JSON_JQ_TRANSFORM")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"inputParameters"),(0,s.kt)("td",{parentName:"tr",align:null},"The input parameters that will be supplied to this task. The parameters will be a JSON object of atleast 2 attributes, one of which will be called queryExpression. The others are user named attributes. These attributes will be accessible by the JQ query processor")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"inputParameters/user-defined-key(s)"),(0,s.kt)("td",{parentName:"tr",align:null},"User defined key(s) along with values.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"inputParameters/queryExpression"),(0,s.kt)("td",{parentName:"tr",align:null},"A JQ query expression")))),(0,s.kt)("h4",{id:"output-configuration"},"Output Configuration"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"result"),(0,s.kt)("td",{parentName:"tr",align:null},"The first results returned by the JQ expression")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"resultList"),(0,s.kt)("td",{parentName:"tr",align:null},"A List of results returned by the JQ expression")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"error"),(0,s.kt)("td",{parentName:"tr",align:null},"An optional error message, indicating that the JQ query failed processing")))))}m.isMDXComponent=!0}}]);