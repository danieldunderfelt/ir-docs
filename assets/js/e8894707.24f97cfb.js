"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,k=u["".concat(c,".").concat(s)]||u[s]||m[s]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:999,title:"API"},o="API",l={unversionedId:"react-native-mlkit/face-detection/api",id:"react-native-mlkit/face-detection/api",title:"API",description:"Hooks",source:"@site/docs/react-native-mlkit/face-detection/api.md",sourceDirName:"react-native-mlkit/face-detection",slug:"/react-native-mlkit/face-detection/api",permalink:"/react-native-mlkit/face-detection/api",draft:!1,tags:[],version:"current",sidebarPosition:999,frontMatter:{sidebar_position:999,title:"API"},sidebar:"React Native MLKit",previous:{title:"FAQ / Troubleshooting",permalink:"/react-native-mlkit/face-detection/faq-troubleshooting"},next:{title:"Image Labeling",permalink:"/category/image-labeling"}},c={},p=[{value:"Hooks",id:"hooks",level:2},{value:"<code>useFacesInPhoto</code>",id:"usefacesinphoto",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Return Type",id:"return-type",level:4},{value:"Usage",id:"usage",level:4},{value:"<code>useFaceDetector</code>",id:"usefacedetector",level:3},{value:"Return Type",id:"return-type-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"Context",id:"context",level:2},{value:"<code>ReactMLKitFaceDetectionContextValue</code>",id:"reactmlkitfacedetectioncontextvalue",level:3},{value:"<code>ReactMLKitFaceDetectionContext</code>",id:"reactmlkitfacedetectioncontext",level:3},{value:"<code>RNMLKitFaceDetectionContextProvider</code>",id:"rnmlkitfacedetectioncontextprovider",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api"},"API"),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All of these hooks must be called inside an ",(0,r.kt)("inlineCode",{parentName:"p"},"RNMLKitFaceDetectionContextProvider"),".")),(0,r.kt)("h3",{id:"usefacesinphoto"},(0,r.kt)("inlineCode",{parentName:"h3"},"useFacesInPhoto")),(0,r.kt)("p",null,"Custom hook for detecting faces in a photo using ML Kit."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"imageUri?"),": string - The local URI of the image to detect faces in.")),(0,r.kt)("h4",{id:"return-type"},"Return Type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"UseFaceDetectorReturnType"),": Object"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clearFaces"),": Function - Clears the detected faces."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error"),": string | undefined - Any potential errors during detection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status"),": FaceDetectionState - Status of the face detection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"faces"),": RNMLKitFace[] - Array of detected faces.")))),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFacesInPhoto } from \"@infinitered/react-native-mlkit-face-detection\";\n\nfunction FaceDetectionComponent() {\n  const { faces, error, status } = useFacesInPhoto('local_uri_of_your_image_uri');\n// ... rest of your component\n}\n")),(0,r.kt)("h3",{id:"usefacedetector"},(0,r.kt)("inlineCode",{parentName:"h3"},"useFaceDetector")),(0,r.kt)("p",null,"Hook used to directly access the faceDetector instance provided by the context."),(0,r.kt)("h4",{id:"return-type-1"},"Return Type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"faceDetector"),": RNMLKitFaceDetector - Instance of the face detector.")),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useFaceDetector } from "@infinitered/react-native-mlkit-face-detection";\n\nconst faceDetector = useFaceDetector();\n// ... rest of your usage\n')),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("h3",{id:"reactmlkitfacedetectioncontextvalue"},(0,r.kt)("inlineCode",{parentName:"h3"},"ReactMLKitFaceDetectionContextValue")),(0,r.kt)("p",null,"Represents the context value for ML Kit Face Detection in React."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"faceDetector")),(0,r.kt)("td",{parentName:"tr",align:null},"Instance of the RNMLKitFaceDetector."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RNMLKitFaceDetector")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"reactmlkitfacedetectioncontext"},(0,r.kt)("inlineCode",{parentName:"h3"},"ReactMLKitFaceDetectionContext")),(0,r.kt)("p",null,"The context for ML Kit Face Detection in React."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"faceDetector")),(0,r.kt)("td",{parentName:"tr",align:null},"Default instance of the RNMLKitFaceDetector."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RNMLKitFaceDetector")),(0,r.kt)("td",{parentName:"tr",align:null},"New instance of ",(0,r.kt)("inlineCode",{parentName:"td"},"RNMLKitFaceDetector"))))),(0,r.kt)("h3",{id:"rnmlkitfacedetectioncontextprovider"},(0,r.kt)("inlineCode",{parentName:"h3"},"RNMLKitFaceDetectionContextProvider")),(0,r.kt)("p",null,"A provider component for the ML Kit Face Detection context."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},"Options for the face detector."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RNMLKitFaceDetectorOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deferInitialization")),(0,r.kt)("td",{parentName:"tr",align:null},"Defer the initialization of the face detector."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"children")),(0,r.kt)("td",{parentName:"tr",align:null},"Children components."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RNMLKitFaceDetectionContextProvider } from 'path-to-context';\n\nfunction App() {\n  return (\n    <RNMLKitFaceDetectionContextProvider options={yourOptions}>\n      {/* Your components */}\n    </RNMLKitFaceDetectionContextProvider>\n  );\n}\n")))}m.isMDXComponent=!0}}]);