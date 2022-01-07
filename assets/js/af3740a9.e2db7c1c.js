"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[756],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=u(a),k=r,h=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return a?n.createElement(h,o(o({ref:e},m),{},{components:a})):n.createElement(h,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2584:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={},p="Binary Document Format",u={unversionedId:"how-it-works/binary-format",id:"how-it-works/binary-format",isDocsHomePage:!1,title:"Binary Document Format",description:"The binary format of an automerge document compresses the changes into a compact column-oriented representation.",source:"@site/docs/how-it-works/binary-format.md",sourceDirName:"how-it-works",slug:"/how-it-works/binary-format",permalink:"/docs/how-it-works/binary-format",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/how-it-works/binary-format.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How Automerge works",permalink:"/docs/how-it-works/backend"},next:{title:"Sync Protocol",permalink:"/docs/how-it-works/sync"}},m=[{value:"Format",id:"format",children:[],level:2},{value:"Chunk format",id:"chunk-format",children:[],level:2},{value:"Change information",id:"change-information",children:[],level:2},{value:"Change bytes",id:"change-bytes",children:[],level:2},{value:"Operations information",id:"operations-information",children:[],level:2},{value:"Operations bytes",id:"operations-bytes",children:[],level:2},{value:"Order of operations",id:"order-of-operations",children:[],level:2},{value:"Encodings",id:"encodings",children:[{value:"uLEB",id:"uleb",children:[],level:3},{value:"RLE",id:"rle",children:[],level:3},{value:"Delta",id:"delta",children:[],level:3},{value:"Boolean",id:"boolean",children:[],level:3}],level:2},{value:"Columns",id:"columns",children:[{value:"Change columns",id:"change-columns",children:[],level:3},{value:"Operations columns",id:"operations-columns",children:[],level:3}],level:2}],d={toc:m};function s(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"binary-document-format"},"Binary Document Format"),(0,l.kt)("p",null,"The binary format of an automerge document compresses the changes into a compact column-oriented representation.\nThis makes the format very suitable for storing durably due to its compact size."),(0,l.kt)("h2",{id:"format"},"Format"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Byte Length"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Magic Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Just some magic bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checksum"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"First 4 bytes of the SHA256 of the encoded chunk")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Block Type"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"A marker byte to distinguish the bytes as a document")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Chunk length"),(0,l.kt)("td",{parentName:"tr",align:null},"Variable (uLEB)"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of the following chunk bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#chunk-format"},"Chunk")),(0,l.kt)("td",{parentName:"tr",align:null},"Variable"),(0,l.kt)("td",{parentName:"tr",align:null},"The actual bytes for the chunk")))),(0,l.kt)("h2",{id:"chunk-format"},"Chunk format"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Byte Length"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Actors length"),(0,l.kt)("td",{parentName:"tr",align:null},"Variable (uLEB)"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of following actors")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Actors"),(0,l.kt)("td",{parentName:"tr",align:null},"Variable"),(0,l.kt)("td",{parentName:"tr",align:null},"The actor IDs in sorted order")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heads length"),(0,l.kt)("td",{parentName:"tr",align:null},"Variable (uLEB)"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of following heads hashes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heads"),(0,l.kt)("td",{parentName:"tr",align:null},"32 ","*"," number"),(0,l.kt)("td",{parentName:"tr",align:null},"The head hashes of the hash graph in sorted order")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#change-information"},"Change Info")),(0,l.kt)("td",{parentName:"tr",align:null},"Variable"),(0,l.kt)("td",{parentName:"tr",align:null},"The change columns information")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#operations-information"},"Operations Info")),(0,l.kt)("td",{parentName:"tr",align:null},"Variable"),(0,l.kt)("td",{parentName:"tr",align:null},"The operations columns information")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#change-bytes"},"Change bytes")),(0,l.kt)("td",{parentName:"tr",align:null},"Variable"),(0,l.kt)("td",{parentName:"tr",align:null},"The actual bytes for the changes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#operations-bytes"},"Operations bytes")),(0,l.kt)("td",{parentName:"tr",align:null},"Variable"),(0,l.kt)("td",{parentName:"tr",align:null},"The actual bytes for the operations")))),(0,l.kt)("h2",{id:"change-information"},"Change information"),(0,l.kt)("p",null,"Changes are encoded in causal order (a topological sort of the hash graph)."),(0,l.kt)("p",null,"The change information contains the column ids that are present in the encoding.\nEmpty columns (those with no data) are not included."),(0,l.kt)("p",null,"For each included column the following is encoded:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Byte Length"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Column ID"),(0,l.kt)("td",{parentName:"tr",align:null},"Variable (uLEB)"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the column this data represents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data length"),(0,l.kt)("td",{parentName:"tr",align:null},"Variable (uLEB)"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of the data in this column")))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#change-columns"},"Change columns")," for the columns that may be included here."),(0,l.kt)("h2",{id:"change-bytes"},"Change bytes"),(0,l.kt)("p",null,"For each change we encode its information in the following columns (note the absence of operations which are encoded separately):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Column"),(0,l.kt)("th",{parentName:"tr",align:null},"Type of Data"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Actor"),(0,l.kt)("td",{parentName:"tr",align:null},"Position of the actor in the sorted actors list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Seq"),(0,l.kt)("td",{parentName:"tr",align:null},"Value of the sequence counter for this change")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max Op"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum sequence number of the operations in this change")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"The timestamp this change was produced at")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Message"),(0,l.kt)("td",{parentName:"tr",align:null},"The message this change came with")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Deps num"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of dependencies this change has")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Deps index"),(0,l.kt)("td",{parentName:"tr",align:null},"The indices of the dependencies, as they appear in the document")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extra len"),(0,l.kt)("td",{parentName:"tr",align:null},"Length of the extra bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extra raw"),(0,l.kt)("td",{parentName:"tr",align:null},"The raw extra bytes")))),(0,l.kt)("h2",{id:"operations-information"},"Operations information"),(0,l.kt)("p",null,"Operations are extracted from changes and grouped by the object that they manipulate.\nObjects are then sorted by their IDs to make them appear in causal order too."),(0,l.kt)("p",null,"The operations informatino contains the column ids that are present in the encoding.\nEmpty columns (those with no data) are not included."),(0,l.kt)("p",null,"For each included column the following is encoded:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Byte Length"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Column ID"),(0,l.kt)("td",{parentName:"tr",align:null},"Variable (uLEB)"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the column this data represents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data length"),(0,l.kt)("td",{parentName:"tr",align:null},"Variable (uLEB)"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of the data in this column")))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#operations-columns"},"Operations columns")," for the columns that may be included here."),(0,l.kt)("h2",{id:"operations-bytes"},"Operations bytes"),(0,l.kt)("p",null,"For each expanded operation we encode its information in the following columns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Column"),(0,l.kt)("th",{parentName:"tr",align:null},"Type of Data"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpID Actor"),(0,l.kt)("td",{parentName:"tr",align:null},"Position of the actor part of the OpID in the sorted actor list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpID Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The counter part of this OpID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Insert"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether this operation is an insert or not")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Action"),(0,l.kt)("td",{parentName:"tr",align:null},"Action type that this operation performs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object ID actor"),(0,l.kt)("td",{parentName:"tr",align:null},"The actor part of the object this operation manipulates")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object ID counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The counter part of the object this operation manipulates")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key actor"),(0,l.kt)("td",{parentName:"tr",align:null},"The actor part of this key (if a sequence index)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The counter part of this key (if a sequence index)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key string"),(0,l.kt)("td",{parentName:"tr",align:null},"The string part of this key (if a map key)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value ref counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The counter part of the OpID this cursor refers to (cursor only)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value ref actor"),(0,l.kt)("td",{parentName:"tr",align:null},"The actor part of the OpID this cursor refers to (cursor only)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value length"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of the encoded raw value in bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value raw"),(0,l.kt)("td",{parentName:"tr",align:null},"The actual value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Successors number"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of successors in this operation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Successor actor"),(0,l.kt)("td",{parentName:"tr",align:null},"The actor part of the successor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Successor counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The counter part of the successor")))),(0,l.kt)("h2",{id:"order-of-operations"},"Order of operations"),(0,l.kt)("p",null,"In a change, operations appear in the order in which they were generated by the application.\nIn a whole document, operations must appear in a specific order, as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"First sort by objectId, such that any operations for the same object are consecutive in the file.\nThe null objectId (i.e. the root object) is sorted before all non-null objectIds.\nNon-null objectIds are sorted by Lamport timestamp ordering."),(0,l.kt)("li",{parentName:"ul"},"Next, if the object is a map, sort the operations within that object lexicographically by key,\nso that all operations for the same key are consecutive. This sort order should be based on the\nUTF-8 byte sequence of the key. NOTE: the JavaScript implementation currently does not do this\nsorting correctly, since it sorts by JavaScript string comparison, which differs from UTF-8\nlexicographic ordering for characters beyond the basic multilingual plane."),(0,l.kt)("li",{parentName:"ul"},"If the object is a list or text, sort the operations within that object by the position at which\nthey occur in the sequence, so that all operations that relate to the same list element are\nconsecutive. Tombstones are treated just like any other list element. To determine the list element\nthat an operation relates to, the following rule applies: for insertions (operations where the\ninsert column is true), the opId is the list element ID; for updates or deletes (where insert is\nfalse), the key (keyCtr and keyActor columns, known as elemId in the JSON representation) is the\nlist element ID."),(0,l.kt)("li",{parentName:"ul"},"Among the operations for the same key (for maps) or the same list element (for lists/text), sort\nthe operations by their opId, using Lamport timestamp ordering. For list elements, note that the\noperation that inserted the operation will always have an opId that is lower than the opId of any\noperations that updates or deletes that list element, and therefore the insertion operation will\nalways be the first operation for a given list element.")),(0,l.kt)("h2",{id:"encodings"},"Encodings"),(0,l.kt)("h3",{id:"uleb"},"uLEB"),(0,l.kt)("p",null,"uLEB is an unsigned ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/LEB128"},"little endian base 128")," value.\nThis is a variable length encoding to keep things compact when values are small."),(0,l.kt)("h3",{id:"rle"},"RLE"),(0,l.kt)("p",null,"Run length encoding of raw values."),(0,l.kt)("h3",{id:"delta"},"Delta"),(0,l.kt)("p",null,"Deltas between values are rle encoded."),(0,l.kt)("h3",{id:"boolean"},"Boolean"),(0,l.kt)("p",null,"Encodes the count of the same value with counts alternating false and true."),(0,l.kt)("h2",{id:"columns"},"Columns"),(0,l.kt)("h3",{id:"change-columns"},"Change columns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Encoding"),(0,l.kt)("th",{parentName:"tr",align:null},"ID"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Actor"),(0,l.kt)("td",{parentName:"tr",align:null},"uLEB RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Seq"),(0,l.kt)("td",{parentName:"tr",align:null},"Delta"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max Op"),(0,l.kt)("td",{parentName:"tr",align:null},"Delta"),(0,l.kt)("td",{parentName:"tr",align:null},"19")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Delta"),(0,l.kt)("td",{parentName:"tr",align:null},"35")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Message"),(0,l.kt)("td",{parentName:"tr",align:null},"String RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"53")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Deps num"),(0,l.kt)("td",{parentName:"tr",align:null},"uLEB RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Deps index"),(0,l.kt)("td",{parentName:"tr",align:null},"Delta"),(0,l.kt)("td",{parentName:"tr",align:null},"67")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extra len"),(0,l.kt)("td",{parentName:"tr",align:null},"uLEB RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"86")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extra raw"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"87")))),(0,l.kt)("h3",{id:"operations-columns"},"Operations columns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Encoding"),(0,l.kt)("th",{parentName:"tr",align:null},"ID"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpID Actor"),(0,l.kt)("td",{parentName:"tr",align:null},"uLEB RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"33")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpID Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"Delta"),(0,l.kt)("td",{parentName:"tr",align:null},"35")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Insert"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"52")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Action"),(0,l.kt)("td",{parentName:"tr",align:null},"uLEB RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"66")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object ID actor"),(0,l.kt)("td",{parentName:"tr",align:null},"uLEB RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object ID counter"),(0,l.kt)("td",{parentName:"tr",align:null},"uLEB RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key actor"),(0,l.kt)("td",{parentName:"tr",align:null},"uLEB RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"17")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key counter"),(0,l.kt)("td",{parentName:"tr",align:null},"Delta"),(0,l.kt)("td",{parentName:"tr",align:null},"19")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key string"),(0,l.kt)("td",{parentName:"tr",align:null},"String RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"21")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value ref counter"),(0,l.kt)("td",{parentName:"tr",align:null},"uLEB RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"98")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value ref actor"),(0,l.kt)("td",{parentName:"tr",align:null},"uLEB RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"97")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value length"),(0,l.kt)("td",{parentName:"tr",align:null},"uLEB RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"86")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value raw"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"87")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Successors number"),(0,l.kt)("td",{parentName:"tr",align:null},"uLEB RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"128")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Successor actor"),(0,l.kt)("td",{parentName:"tr",align:null},"uLEB RLE"),(0,l.kt)("td",{parentName:"tr",align:null},"129")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Successor counter"),(0,l.kt)("td",{parentName:"tr",align:null},"Delta"),(0,l.kt)("td",{parentName:"tr",align:null},"131")))))}s.isMDXComponent=!0}}]);