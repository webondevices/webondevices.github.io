webpackJsonp([0xa5e8aa854f21],{437:function(a,n){a.exports={data:{markdownRemark:{html:'<p><strong>This JavaScript barcode scanner application is not something closely related to electronics and hardware, the kind of stuff we normally do here on Web on Devices, but I felt I needed to publish a little bit of help on this as I receive a lot of emails asking for the source code through the youtube video I uploaded last year:</strong></p>\n<p><a class="youtube-video" href="https://www.youtube.com/embed/uA4JJCqSdZ0" target="_blank">Click to see Youtube video</a></p>\n<p>The code works surprisingly well and it scans pretty quickly but it doesn’t work with all types of barcodes. It has been tested with <strong>EAN-13</strong> type barcodes. These can be generated at <a href="http://www.barcode-generator.org/">www.barcode-generator.org/</a>.</p>\n<p>Here’s a little info from WikiPedia: <em>An EAN-13 barcode (originally European Article Number, but now renamed International Article Number even though the abbreviation EAN has been retained) is a 13 digit (12 data and 1 check) barcoding standard. The EAN-13 barcodes are used worldwide for marking products often sold at retail point of sale</em>.</p>\n<h3 id="download-the-source-code"><a href="#download-the-source-code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Download the source code</h3>\n<p><a href="http://www.webondevices.com/barcode.zip">www.webondevices.com/barcode.zip</a></p>\n<h3 id="settings"><a href="#settings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Settings</h3>\n<p>The script can be initialised with the following code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>barcode<span class="token punctuation">.</span>config<span class="token punctuation">.</span>start <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>\nbarcode<span class="token punctuation">.</span>config<span class="token punctuation">.</span>end <span class="token operator">=</span> <span class="token number">0.9</span><span class="token punctuation">;</span>\nbarcode<span class="token punctuation">.</span>config<span class="token punctuation">.</span>video <span class="token operator">=</span> <span class="token string">\'#barcodevideo\'</span><span class="token punctuation">;</span>\nbarcode<span class="token punctuation">.</span>config<span class="token punctuation">.</span>canvas <span class="token operator">=</span> <span class="token string">\'#barcodecanvas\'</span><span class="token punctuation">;</span>\nbarcode<span class="token punctuation">.</span>config<span class="token punctuation">.</span>canvasg <span class="token operator">=</span> <span class="token string">\'#barcodecanvasg\'</span><span class="token punctuation">;</span>\nbarcode<span class="token punctuation">.</span><span class="token function">setHandler</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>barcode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>barcode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nbarcode<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The threshold and quality acceptance settings can be changed with these properties:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>barcode<span class="token punctuation">.</span>config<span class="token punctuation">.</span>threshold<span class="token punctuation">:</span> <span class="token number">160</span><span class="token punctuation">;</span>\nbarcode<span class="token punctuation">.</span>config<span class="token punctuation">.</span>quality<span class="token punctuation">:</span> <span class="token number">0.45</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Please note that the demo won’t run on a local environment. Upload to a web server or try MAMP/WAMP.</p>\n<h3 id="browser-support"><a href="#browser-support" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Browser Support</h3>\n<p>Another thing to keep in mind is that this example relies on the Stream API and the getUserMedia method. This native JavaScript feature allows the browser to access and stream video and sound from the camera and microphone of the device to an HTML Audio or Video element and modify process the data.</p>\n<p>This is currently not supported in Internet Explorer, Safari, iOS and Opera. Have look at the <a href="http://caniuse.com/#feat=stream">support matrix</a> on caniuse.com.</p>\n<p>I hope this little guide helps!</p>',timeToRead:2,excerpt:"This JavaScript barcode scanner application is not something closely related to electronics and hardware, the kind of stuff we normally do…",frontmatter:{title:"JavaScript Barcode Scanner",cover:"http://www.webondevices.com/posts/barcode.jpg",date:"02/12/2015",category:"moar",tags:["javascript"]},fields:{slug:"/java-script-barcode-scanner"}}},pathContext:{slug:"/java-script-barcode-scanner"}}}});
//# sourceMappingURL=path---javascript-barcode-scanner-aaeedee632d0132580d7.js.map