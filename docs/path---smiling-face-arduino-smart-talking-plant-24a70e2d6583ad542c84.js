webpackJsonp([90017403267144],{445:function(n,s){n.exports={data:{markdownRemark:{html:'<p>The final project in the <a href="#subscription">JavaScript Electronics book</a> for complete beginners is a <strong>Smart Talking Plant</strong> sensor system built from scratch. The plant features temperature, light and soil moisture sensors and is able to <strong>talk</strong> and complain about its living conditions.</p>\n<p>The project also covers data logging and building a front-end app that displays measurements on charts in real-time. Here\'s a quick intro:</p>\n<p><a href="https://www.youtube.com/watch?v=HFMu35VD07c">www.youtube.com/watch?v=HFMu35VD07c</a></p>\n<h3 id="adding-a-face-to-the-plant"><a href="#adding-a-face-to-the-plant" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding a face to the plant</h3>\n<p><strong>Today we are going to extend this project and add an 8x8 LED display to the plant to display different faces on it. He will display a sad face when some sensor measurements are above or below the predifined tresholds and a happy face when all is good.</strong></p>\n<p>Here\'s how the LED face looked like on <a href="http://www.webondevices.com/the-arduino-plant-with-javascript-voice-recognition">George, the talking plant</a>:</p>\n<p><a class="youtube-video" href="https://www.youtube.com/embed/YGVS78MR5kY" target="_blank">Click to see Youtube video</a></p>\n<p>The source code of the Smart Talking Plant project with the circuit diagrams from the book can be downloaded from Github for free. This is going to be the basis of this project:\n(Smart Talking Plant on Github)[https://github.com/webondevices/js-electronics-book/tree/master/12-smart-plant-speak]</p>\n<p>And this is the code of the finished version, complete with the 8x8 LED face:\n(With 8x8 LED face on Github)[https://github.com/webondevices/js-electronics-book/tree/master/13-smart-plant-face] </p>\n<h3 id="working-with-the-max7219-led-matrix"><a href="#working-with-the-max7219-led-matrix" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Working with the MAX7219 LED matrix</h3>\n<p>For this project we will work with this very common LED module that already has the MAX7219 controller chip onboard: </p>\n<p><img src="http://www.webondevices.com/posts/2018/led-8x8.jpg" alt="LED Face"></p>\n<p>To connect this to your Arduino, follow the below circuit diagram:</p>\n<p><img src="http://www.webondevices.com/posts/2018/schematic-2.png" alt="circuit diagram"></p>\n<h3 id="giving-the-plant-more-emotions"><a href="#giving-the-plant-more-emotions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giving the plant more emotions</h3>\n<p>Line 34 in the original smart-plant.js file is where all the measurements are received in the sensor event listener callback functions:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">thermometer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'data\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    sensorData<span class="token punctuation">.</span>celsius <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">C</span><span class="token punctuation">;</span>\n    server<span class="token punctuation">.</span><span class="token function">updateData</span><span class="token punctuation">(</span>sensorData<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    speak<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>sensorData<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nlightSensor<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'data\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>        \n    sensorData<span class="token punctuation">.</span>light <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>\n    server<span class="token punctuation">.</span><span class="token function">updateData</span><span class="token punctuation">(</span>sensorData<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    speak<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>sensorData<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmoistureSensor<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'data\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    sensorData<span class="token punctuation">.</span>moisture <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1024</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>\n    server<span class="token punctuation">.</span><span class="token function">updateData</span><span class="token punctuation">(</span>sensorData<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    speak<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>sensorData<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>For each sensor, this is where we handle the incoming data:</p>\n<ul>\n<li>update the sensorData object</li>\n<li>update the server with the new measurements</li>\n<li>pass the data to the speak module to speak after interpreting the values</li>\n</ul>\n<p>Th easiest way to add the LED face logic to the existing code is to add it to the existing speak module. This makes perfect sense as the data is already passed in and the <code class="language-text">if .. else</code> logic has already been worked out to tell when the plant is happy and not so happy.</p>\n<p><img src="http://www.webondevices.com/posts/george.jpg" alt="George the talking plant"></p>\n<p>What we can do here is simply save the desired emotion inside each of the conditions in a variable called <code class="language-text">emotion</code> like so:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">    <span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> emotion <span class="token operator">=</span> <span class="token string">\'neutral\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> currentHour <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token keyword">if</span> <span class="token punctuation">(</span>sensorData<span class="token punctuation">.</span>celsius <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        message <span class="token operator">+=</span> <span class="token string">\'I\\\'m freezing! It\\\'s \'</span> <span class="token operator">+</span> sensorData<span class="token punctuation">.</span>celsius <span class="token operator">+</span> <span class="token string">\'degrees in here. Turn on the heating or put me out in the sun.\'</span><span class="token punctuation">;</span>\n        emotion <span class="token operator">=</span> <span class="token string">\'sad\'</span><span class="token punctuation">;</span>\n    \n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sensorData<span class="token punctuation">.</span>celsius <span class="token operator">></span> <span class="token number">25</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        message <span class="token operator">+=</span> <span class="token string">\'I\\\'m hot! It\\\'s \'</span> <span class="token operator">+</span> sensorData<span class="token punctuation">.</span>celsius <span class="token operator">+</span> <span class="token string">\'degrees in here. Open the window or move me away from the sun.\'</span><span class="token punctuation">;</span>\n        emotion <span class="token operator">=</span> <span class="token string">\'sad\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>sensorData<span class="token punctuation">.</span>light <span class="token operator">&lt;</span> <span class="token number">25</span> <span class="token operator">&amp;&amp;</span> currentHour <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token operator">&amp;&amp;</span> currentHour <span class="token operator">></span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        message <span class="token operator">+=</span> <span class="token string">\'It\\\'s too dark in here. Switch the lights on!\'</span><span class="token punctuation">;</span>\n        emotion <span class="token operator">=</span> <span class="token string">\'sad\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> \n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>sensorData<span class="token punctuation">.</span>moisture <span class="token operator">&lt;</span> <span class="token number">35</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        message <span class="token operator">+=</span> <span class="token string">\'Water me please! My soil is dry.\'</span><span class="token punctuation">;</span>\n        emotion <span class="token operator">=</span> <span class="token string">\'sad\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>message <span class="token operator">===</span> <span class="token string">\'\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        message <span class="token operator">+=</span> <span class="token string">\'I\\\'m happy right now! Everything is fine.\'</span><span class="token punctuation">;</span>\n        emotion <span class="token operator">=</span> <span class="token string">\'happy\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> lastSpoken<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> interval <span class="token operator">*</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        say<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        face<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span>faces<span class="token punctuation">[</span>emotion<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        lastSpoken <span class="token operator">=</span> now<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Notice the addition of the emotion variable that will eventually hold "happy", "sad" or "neutral". This is then passed into the yet to exist <code class="language-text">face.display()</code> function.</p>\n<p>Let\'s write this face module first and then we will see what it is that we passed into it to display, something like a face definition for the LED module.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> five <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'johnny-five\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> matrix <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">display</span> <span class="token punctuation">(</span><span class="token parameter">face</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Initialise matrix if not yet done</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        matrix <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">five<span class="token punctuation">.</span>Led<span class="token punctuation">.</span>Matrix</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            pins<span class="token operator">:</span> <span class="token punctuation">{</span>\n                data<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n                clock<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n                cs<span class="token operator">:</span> <span class="token number">4</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        matrix<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// Draw the received pixel definition array on the matrix</span>\n    matrix<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>face<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nexports<span class="token punctuation">.</span>display <span class="token operator">=</span> display<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The exported display method that we called from the speak module expects an array of 0s and 1s to be able to tell which LED to light up or not. If we wanted to draw a cross on the board, then this is what we would do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> cross <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string">"00011000"</span><span class="token punctuation">,</span>\n    <span class="token string">"00011000"</span><span class="token punctuation">,</span>\n    <span class="token string">"00011000"</span><span class="token punctuation">,</span>\n    <span class="token string">"11111111"</span><span class="token punctuation">,</span>\n    <span class="token string">"11111111"</span><span class="token punctuation">,</span>\n    <span class="token string">"00011000"</span><span class="token punctuation">,</span>\n    <span class="token string">"00011000"</span><span class="token punctuation">,</span>\n    <span class="token string">"00011000"</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nmatrix<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>cross<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>It now makes a lot more sense to create an additional module to hold our different facial expressions that we can easily load later:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    happy<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"00000000"</span><span class="token punctuation">,</span>\n        <span class="token string">"01100110"</span><span class="token punctuation">,</span>\n        <span class="token string">"01100110"</span><span class="token punctuation">,</span>\n        <span class="token string">"00000000"</span><span class="token punctuation">,</span>\n        <span class="token string">"11000011"</span><span class="token punctuation">,</span>\n        <span class="token string">"01000010"</span><span class="token punctuation">,</span>\n        <span class="token string">"01000010"</span><span class="token punctuation">,</span>\n        <span class="token string">"00111100"</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    sad<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"00000000"</span><span class="token punctuation">,</span>\n        <span class="token string">"01100110"</span><span class="token punctuation">,</span>\n        <span class="token string">"01100110"</span><span class="token punctuation">,</span>\n        <span class="token string">"00000000"</span><span class="token punctuation">,</span>\n        <span class="token string">"00000000"</span><span class="token punctuation">,</span>\n        <span class="token string">"00111100"</span><span class="token punctuation">,</span>\n        <span class="token string">"01000010"</span><span class="token punctuation">,</span>\n        <span class="token string">"00000000"</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    neutral<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"00000000"</span><span class="token punctuation">,</span>\n        <span class="token string">"01100110"</span><span class="token punctuation">,</span>\n        <span class="token string">"01100110"</span><span class="token punctuation">,</span>\n        <span class="token string">"00000000"</span><span class="token punctuation">,</span>\n        <span class="token string">"00000000"</span><span class="token punctuation">,</span>\n        <span class="token string">"00111100"</span><span class="token punctuation">,</span>\n        <span class="token string">"00000000"</span><span class="token punctuation">,</span>\n        <span class="token string">"00000000"</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Save this as face-definitions.js. Let\'s now load these two new modules in the speak.js file and see how all this comes together:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> faces <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./face-definitions\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> face <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./face\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The below line hopefully makes a lot more sense now:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">face<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span>faces<span class="token punctuation">[</span>emotion<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The <code class="language-text">emotion</code> holds the setting of either "happy", "sad" or "neutral" and in the <code class="language-text">faces[emotion]</code> expression it is used as a property key to load the correct array definition for the matrix display.</p>\n<p>Passing this definition to <code class="language-text">face.display()</code> will internally call <code class="language-text">matrix.draw()</code> and display a sad face if the plant has any issues or a happy face is everything is fine.</p>\n<p><img src="http://www.webondevices.com/posts/george-hero.jpg" alt="George the talking plant"></p>\n<p>Again, feel free to browse the finished code on Github if you just want to see this working as soon as possible:\n<Github></p>',timeToRead:5,excerpt:"The final project in the  JavaScript Electronics book  for complete beginners is a  Smart Talking Plant  sensor system built from scratch…",frontmatter:{title:"Giving a smiling face to the Arduino Smart Talking Plant",cover:"http://www.webondevices.com/posts/george.jpg",date:"25/04/2018",category:"moar",tags:["javascript","arduino","project"]},fields:{slug:"/giving-a-smiling-face-to-the-arduino-smart-talking-plant"}}},pathContext:{slug:"/giving-a-smiling-face-to-the-arduino-smart-talking-plant"}}}});
//# sourceMappingURL=path---smiling-face-arduino-smart-talking-plant-24a70e2d6583ad542c84.js.map