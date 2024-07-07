importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"d105f66b67fd0281acd95b74091105fc","url":"assignment.html"},{"revision":"4df5f248084a5c2fa3dcd99949179111","url":"feedback.html"},{"revision":"2fed3c0ad470391ca7008af8ffa0fed3","url":"images/clamping.png"},{"revision":"301f550673913219d68b54aa5e1170ac","url":"images/CS1.png"},{"revision":"982bb2ebb0625e5895520a713b4695ac","url":"images/CS2.png"},{"revision":"f6f6e419670bf28286a202931a4fdf91","url":"images/CS3.png"},{"revision":"f239e0a0bf6ca6c8328c1f64c837e728","url":"images/CSNN_1.png"},{"revision":"c3265fb8d77ba9c616f852a01aee0ea3","url":"images/CSNN_2.png"},{"revision":"891de5ba6a0298020130309b1225903a","url":"images/CSNN_3.png"},{"revision":"e7b6504340d67ba09f37ce08e0d30f84","url":"images/CSNN_4.png"},{"revision":"22c73359f30f5f837aa7072a2f530520","url":"images/CSNN0.jpg"},{"revision":"358058c354eb4c8a501055a42ea2a567","url":"images/CSNN1.jpg"},{"revision":"9e628ab40f5e0efc95f072bf501d3853","url":"images/CSNN2.jpg"},{"revision":"e925233d9e2ce47431dbf4138f333b23","url":"images/CSNN4.jpg"},{"revision":"baf1d7eb81cd28dd88dcaf233d2eb96d","url":"images/descriptors.jpg"},{"revision":"e28976691a653e549136f44f4c6cf8f8","url":"images/descriptors2.jpg"},{"revision":"e4dcb635be26b02a7bb630ec7f55592e","url":"images/descriptors3.jpg"},{"revision":"58c7a0be0a138021a5129e27f0ef6210","url":"images/eqnA1.jpg"},{"revision":"f9b30034c3b029301b05970d0d0233de","url":"images/eqnA2.jpg"},{"revision":"0387f575ee3d0714fbc3e0f737ae4855","url":"images/eqnA3.jpg"},{"revision":"2569616c5842a4887cc1aef4732187c7","url":"images/figA2.jpg"},{"revision":"0d24c341fccf0b4542c171fc97493d89","url":"index.html"},{"revision":"d9b37f44782dcb232427a7eb442b855c","url":"observations.html"},{"revision":"f212010717fc99b82bc61f78ccdc37b9","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"68a6c5bfa114619ca68a1ed67fc71cc5","url":"procedure.html"},{"revision":"eb01dd35d9832f64fecc6f5a0cdebbfb","url":"references.html"},{"revision":"c9b8ec88d8307fdee98311850d2b8871","url":"simulation.html"},{"revision":"b047bb95dd0a06ef2f9485eafe057a88","url":"simulation/applet/eqn1.jpg"},{"revision":"aef1a9dfe7258c2beab1b78ad67ba93b","url":"simulation/applet/eqn2.jpg"},{"revision":"724c4e46bc2c27208735ba0b3298d97a","url":"simulation/applet/Equation-ann-energy.jpg"},{"revision":"5c496b00a5de940599b237eef4409a50","url":"simulation/applet/Equation-ann-stateUpdate.jpg"},{"revision":"96e31015d400046d99f8b039d422b328","url":"simulation/applet/index.html"},{"revision":"e27130ccf33942f3d6f8c2123c682686","url":"simulation/csnn.html"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"8247c89eac9563b68cd29bbe72064c2e","url":"simulation/exp.css"},{"revision":"ece8677efebd0d07b61def3421661414","url":"simulation/exp.html"},{"revision":"52f68d439ba500f6bab6602d22cc6943","url":"simulation/exp.js"},{"revision":"d659c525be3e6c2960c770b943378873","url":"simulation/help.css"},{"revision":"0d4047f19db3025f5a43cdd5edce0815","url":"simulation/help.html"},{"revision":"2fed3c0ad470391ca7008af8ffa0fed3","url":"simulation/images/clamping.png"},{"revision":"301f550673913219d68b54aa5e1170ac","url":"simulation/images/CS1.png"},{"revision":"982bb2ebb0625e5895520a713b4695ac","url":"simulation/images/CS2.png"},{"revision":"f6f6e419670bf28286a202931a4fdf91","url":"simulation/images/CS3.png"},{"revision":"f239e0a0bf6ca6c8328c1f64c837e728","url":"simulation/images/CSNN_1.png"},{"revision":"c3265fb8d77ba9c616f852a01aee0ea3","url":"simulation/images/CSNN_2.png"},{"revision":"891de5ba6a0298020130309b1225903a","url":"simulation/images/CSNN_3.png"},{"revision":"e7b6504340d67ba09f37ce08e0d30f84","url":"simulation/images/CSNN_4.png"},{"revision":"22c73359f30f5f837aa7072a2f530520","url":"simulation/images/CSNN0.jpg"},{"revision":"358058c354eb4c8a501055a42ea2a567","url":"simulation/images/CSNN1.jpg"},{"revision":"9e628ab40f5e0efc95f072bf501d3853","url":"simulation/images/CSNN2.jpg"},{"revision":"e925233d9e2ce47431dbf4138f333b23","url":"simulation/images/CSNN4.jpg"},{"revision":"baf1d7eb81cd28dd88dcaf233d2eb96d","url":"simulation/images/descriptors.jpg"},{"revision":"e28976691a653e549136f44f4c6cf8f8","url":"simulation/images/descriptors2.jpg"},{"revision":"e4dcb635be26b02a7bb630ec7f55592e","url":"simulation/images/descriptors3.jpg"},{"revision":"58c7a0be0a138021a5129e27f0ef6210","url":"simulation/images/eqnA1.jpg"},{"revision":"f9b30034c3b029301b05970d0d0233de","url":"simulation/images/eqnA2.jpg"},{"revision":"0387f575ee3d0714fbc3e0f737ae4855","url":"simulation/images/eqnA3.jpg"},{"revision":"2569616c5842a4887cc1aef4732187c7","url":"simulation/images/figA2.jpg"},{"revision":"9e185dd5574c8e5ffb5dc607e43aea3c","url":"simulation/index.html"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"f0cc1a49361a991df013c7c2ddb2641c","url":"simulation/js/utils.js"},{"revision":"c042c7cda6a548822e116e66d5ca0a54","url":"simulation/pdp2.css"},{"revision":"1f2df2d9ada16ad51dc995df9719eea2","url":"simulation/pdp2.html"},{"revision":"90fe07e8fe447b4e4450a8bbd6c338ba","url":"simulation/pdp2.js"},{"revision":"372639b7e08359b71e7426cbd7dd257f","url":"theory.html"},{"revision":"368ccf353661776e490184f6a727b5dc","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );