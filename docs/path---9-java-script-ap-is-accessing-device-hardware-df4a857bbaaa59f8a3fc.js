webpackJsonp([0x601b9bbbc51c],{411:function(n,a){n.exports={data:{markdownRemark:{html:'<p><strong>My <a href="http://www.webondevices.com/arduino-nodejs-rc-car-driven-with-html5-gamepad-api">RC car</a> and my <a href="http://www.webondevices.com/the-arduino-plant-with-javascript-voice-recognition/">desk plant</a> both have an Arduino microcontroller onboard and I used a Node.js server to interface with them through the USB port. This is a great way to build prototypes and toys for yourself but sometimes you want your demos to work on regular phones or laptops in the browser without extra hardware or software. This is why it’s worth exploring all the available, native HTML5 and JavaScript APIs that allow us to access hardware components and sensors in our devices.</strong></p>\n<p><img src="http://www.webondevices.com/posts/JavaScript.jpg" alt="JavaScript device sensor apis"></p>\n<h3 id="phone-calls-and-text-messages"><a href="#phone-calls-and-text-messages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Phone Calls and Text Messages</h3>\n<p>The most important features of our mobile devices are obviously making phone calls and sending text messages. It is actually possible with pure HTML to start a call and compose a text message by simply adding a special href value where normally regular URLs go. Pure HTML magic!</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tel:+44703567387625<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Call number!\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sms:+44703567387625?body=Hello%20there!<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Compose SMS!\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3 id="geolocation-api"><a href="#geolocation-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Geolocation API</h3>\n<p>The geolocation API gives you information about the location of the user. There are multiple ways for the browser to get this data and some are more accurate than others (GPS vs. GSM or Wi-Fi). The <code>navigator.geolocation</code> object is what we use to retrieve the global latitude and longitude position.</p>\n<p>Browser support of the Geolocation API is greate. Even IE9 handles it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Check support</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span>success<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">success</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Latitude: \'</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Longitude: \'</span> <span class="token operator">+</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="device-orientation-and-device-motion-api"><a href="#device-orientation-and-device-motion-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Device Orientation and Device Motion API</h3>\n<p>The Device Orientation API accesses the built in gyroscope and compass of your device and can tell you the rotation angle of it in three dimension.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>DeviceOrientationEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'deviceorientation\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>eventData<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// gamma is the left-to-right tilt in degrees</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventData<span class="token punctuation">.</span>gamma<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// beta is the front-to-back tilt in degrees</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventData<span class="token punctuation">.</span>beta<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// alpha is the compass direction the device is facing in degrees</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventData<span class="token punctuation">.</span>alpha<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Device Motion API on the other hand uses the accelerometer to tell when the device moves or rotates into any direction. Keep in mind that it only detects acceleration and not the speed.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>DeviceMotionEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'devicemotion\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>eventData<span class="token punctuation">)</span> <span class="token punctuation">{</span>   \n        <span class="token comment">// Acceleration</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventData<span class="token punctuation">.</span>acceleration<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventData<span class="token punctuation">.</span>acceleration<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventData<span class="token punctuation">.</span>acceleration<span class="token punctuation">.</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n        <span class="token comment">// Acceleration including gravity</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventData<span class="token punctuation">.</span>accelerationIncludingGravity<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventData<span class="token punctuation">.</span>accelerationIncludingGravity<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventData<span class="token punctuation">.</span>accelerationIncludingGravity<span class="token punctuation">.</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Rotation rate</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventData<span class="token punctuation">.</span>rotationRate<span class="token punctuation">.</span>alpha<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventData<span class="token punctuation">.</span>rotationRate<span class="token punctuation">.</span>beta<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventData<span class="token punctuation">.</span>rotationRate<span class="token punctuation">.</span>gamma<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Browser support on both of these APIs are very good. There are no problems in iOS and Android at all and even IE for Windows Phone started supporting it from version 11.</p>\n<h3 id="vibration-api"><a href="#vibration-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vibration API</h3>\n<p>The built in vibration motor of your device can be used to give subtle notifications to the user. It also offers a great way to give haptic feedback when a button or other element is tapped on the website. Although browser support is not as good as of the previous APIs but it can very easily be introduced as a progressive enhancement. This simply means that it will work on modern browsers but won’t break anything on the ones not supporting it. Android, Chrome, Firefox and Opera all support this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> vibrate <span class="token operator">=</span> navigator<span class="token punctuation">.</span>vibrate <span class="token operator">||</span> navigator<span class="token punctuation">.</span>mozVibrate<span class="token punctuation">;</span>\n\n<span class="token comment">// vibrate for 1 second</span>\n<span class="token function">vibrate</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// vibrate for 1 second, then pause for half, then vibrate for another 1 second</span>\n<span class="token function">vibrate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3 id="battery-manager-api"><a href="#battery-manager-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Battery Manager API</h3>\n<p>There are many ways to use the battery status information on a web app. We can prevent complex, cpu heavy animations and calculations from running or large assets from downloading when the battery is low on power. This API worked both on my laptop and my Android phone in Chrome and it should also work in Firefox and Opera too.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> battery <span class="token operator">=</span> navigator<span class="token punctuation">.</span>battery <span class="token operator">||</span> navigator<span class="token punctuation">.</span>webkitBattery <span class="token operator">||</span> navigator<span class="token punctuation">.</span>mozBattery<span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">logBattery</span><span class="token punctuation">(</span>battery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>battery<span class="token punctuation">.</span>level<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>battery<span class="token punctuation">.</span>charging<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dischargingTime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    battery<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'chargingchange\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Battery chargingchange event: \'</span> <span class="token operator">+</span> battery<span class="token punctuation">.</span>charging<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>getBattery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    navigator<span class="token punctuation">.</span><span class="token function">getBattery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>logBattery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>battery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">logBattery</span><span class="token punctuation">(</span>battery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="device-light-api"><a href="#device-light-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Device Light API</h3>\n<p>This API uses the built in light level sensor of your device and returns the readings in lux units. Unfortunately, accessing this sensor is only supported in Firefox but it’s worth mentioning in case you are setting up a kiosk or tech demo where browser support doesn’t matter.</p>\n<p>In the future, when CSS4 support increases, we might also start using the <a href="http://dev.w3.org/csswg/mediaqueries4/#light-level">CSS4 light-level media query</a> to change CSS styling when light conditions change. Very exciting!</p>\n<p>In the mean time here’s a simple way to get this information with the JavaScript API:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">\'ondevicelight\'</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"devicelight"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//light level is returned in lux units</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">" lux"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">\'onlightlevel\'</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"lightlevel"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//light value can be dim, normal or bright</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="proximity-events-api"><a href="#proximity-events-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Proximity Events API</h3>\n<p>The proximity sensor can usually be found on the front of your device and it uses its measurements to tell when you put your phone against your ear or when you reach towards it. It’s an accurate little sensor so it can tell the distance of any object held in front of the phone.</p>\n<p>Similarly to the Device Light API this one is only support in Firefox.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">\'ondeviceproximity\'</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Fired when object is in the detection zone</span>\n    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'deviceproximity\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Object distance in centimeters </span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">" centimeters"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"deviceproximity not supported"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">\'ondeviceproximity\'</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// Fired when object is in the detection zone</span>\n    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'userproximity\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>near <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Object is near"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Object is far"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"userproximity not supported"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',timeToRead:5,excerpt:"My  RC car  and my  desk plant  both have an Arduino microcontroller onboard and I used a Node.js server to interface with them through the…",frontmatter:{title:"9 JavaScript APIs accessing Device Hardware",cover:"http://www.webondevices.com/posts/JavaScript.jpg",date:"08/07/2015",category:"moar",tags:["javascript"]},fields:{slug:"/9-java-script-ap-is-accessing-device-hardware"}}},pathContext:{slug:"/9-java-script-ap-is-accessing-device-hardware"}}}});
//# sourceMappingURL=path---9-java-script-ap-is-accessing-device-hardware-df4a857bbaaa59f8a3fc.js.map