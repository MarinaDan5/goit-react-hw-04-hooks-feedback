(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),s=c(7),r=c.n(s),i=(c(13),c(8)),o=c(2),l=c(3),u=c(5),d=c(4),b=c(0),j=function(t){var e=t.title,c=t.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:e}),c]})},h=function(t){var e=t.good,c=t.neutral,n=t.bad,a=t.total,s=t.positiveFeedback;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{className:"statistic-item ",children:["Good: ",e]}),Object(b.jsxs)("p",{className:"statistic-item",children:["Neutral: ",c]}),Object(b.jsxs)("p",{className:"statistic-item",children:["Bad: ",n]}),Object(b.jsxs)("p",{className:"statistic-item",children:["Total: ",a]}),Object(b.jsxs)("p",{className:"statistic-item",children:["Positive feedback: ",s,"%"]})]})},O=function(t){var e=t.message;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("p",{className:"statistic-title",children:e})})},m=(c(15),function(t){Object(u.a)(c,t);var e=Object(d.a)(c);function c(){return Object(o.a)(this,c),e.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var t=this.props,e=t.options,c=t.handleIncrement;return Object(b.jsx)(b.Fragment,{children:e.map((function(t){return Object(b.jsx)("button",{className:"clickButton",type:"button",value:t,onClick:function(){return c(t)},children:t},t)}))})}}]),c}(n.Component)),f=m,p=function(t){Object(u.a)(c,t);var e=Object(d.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.handleIncrement=function(e){t.setState((function(t){return Object(i.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return e+t}),0)},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback(),c=100*t.state.good/e;return Math.round(c)},t}return Object(l.a)(c,[{key:"render",value:function(){var t=Object.keys(this.state),e=this.state,c=e.good,n=e.neutral,a=e.bad;return Object(b.jsxs)("div",{children:[Object(b.jsx)(j,{title:"Please leave feedback",children:Object(b.jsx)(f,{options:t,handleIncrement:this.handleIncrement})}),Object(b.jsx)(j,{title:"Statistics",children:this.countTotalFeedback()>0?Object(b.jsx)(h,{good:c,neutral:n,bad:a,total:this.countTotalFeedback(),positiveFeedback:this.countPositiveFeedbackPercentage()}):Object(b.jsx)(O,{message:"No feedback given"})})]})}}]),c}(n.Component),v=p;r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d504de33.chunk.js.map