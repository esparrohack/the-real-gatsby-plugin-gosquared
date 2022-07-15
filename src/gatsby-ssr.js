import React from "react";

const buildSnippet = (pluginOptions) => {
  return `!function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(arguments)};d=s.createElement(q);d.src='//d1l6p2sc9645hc.cloudfront.net/gosquared.js';q=s.getElementsByTagName(q)[0];q.parentNode.insertBefore(d,q)}(window,document,'script','_gs');
      _gs('${pluginOptions.token}');
      ${pluginOptions.anonymizeIP && "_gs('set', 'anonymizeIP', true)"}
      ${pluginOptions.trackLocal && "_gs('set', 'trackLocal', true)"}
    `;
};

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === "production") {
    setHeadComponents([
      <script
        key="plugin-gosquared"
        dangerouslySetInnerHTML={{ __html: buildSnippet(pluginOptions) }}
      />,
    ]);
  }
};
