"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[62233],{56205:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-94e93852",path:"/devices/E1812.html",title:"IKEA E1812 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA E1812 control via MQTT",description:"Integrate your IKEA E1812 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-11-09T17:45:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Binding",slug:"binding",children:[]},{level:3,title:"Troubleshooting: no battery level",slug:"troubleshooting-no-battery-level",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E1812.md",git:{updatedTime:16564281e5}}},10277:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var a=i(66252);const n=(0,a.uE)('<h1 id="ikea-e1812" tabindex="-1"><a class="header-anchor" href="#ikea-e1812" aria-hidden="true">#</a> IKEA E1812</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E1812</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>TRADFRI shortcut button</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/E1812.jpg" alt="IKEA E1812"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the remote to Zigbee2MQTT by holding it close to the coordinator and pressing the inside button, next to the CR2032 battery, 4 times. The red light on the (front of the) remote will now flash a few times.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3>',6),o=(0,a.Uk)("The "),s=(0,a.Uk)("binding"),r=(0,a.Uk)(" functionallity of this remote varies per firmware version:"),d=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("below 2.3.75: suppports binding to groups only. It can only be bound to 1 group at a time. By default this remote is bound to the default bind group which you first have to unbind it from. This can be done by sending to "),(0,a._)("code",null,"zigbee2mqtt/bridge/request/device/unbind"),(0,a.Uk)(" payload "),(0,a._)("code",null,'{"from": "DEVICE_FRIENDLY_NAME", "to": "default_bind_group"}'),(0,a.Uk)(". Wake up the device right before sending the commands by pressing a button on it.")]),(0,a._)("li",null,"2.3.75 and greater: supports binding to devices only")],-1),l=(0,a._)("h3",{id:"troubleshooting-no-battery-level",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#troubleshooting-no-battery-level","aria-hidden":"true"},"#"),(0,a.Uk)(" Troubleshooting: no battery level")],-1),u=(0,a.Uk)("It may help to remove the battery for a few seconds and after that reconfigure it via "),c=(0,a.Uk)("Configure"),h=(0,a.Uk)(". Right before executing the Configure make sure to wake up the device by pressing a button on it."),p=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),b=(0,a.Uk)("This device supports OTA updates, for more information see "),g=(0,a.Uk)("OTA updates"),m=(0,a.Uk)("."),v=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),f=(0,a.Uk)("How to use device type specific configuration"),y=(0,a.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_move_up</code>, <code>brightness_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),k={},_=(0,i(83744).Z)(k,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[o,(0,a.Wm)(i,{to:"/guide/usage/binding.html"},{default:(0,a.w5)((()=>[s])),_:1}),r]),d,l,(0,a._)("p",null,[u,(0,a.Wm)(i,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgeconfigure"},{default:(0,a.w5)((()=>[c])),_:1}),h]),p,(0,a._)("p",null,[b,(0,a.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[g])),_:1}),m]),v,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[f])),_:1})])]),y],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);