"use client";
import { useState, useRef, useCallback, useEffect, Component } from "react";
import React from "react";
var MF="'JetBrains Mono',monospace",BF="'Montserrat',sans-serif",DF="'Anton',sans-serif";
var BC="#818CF8",BC2="#6366F1",BC3="#5558E8";

class ErrorBoundary extends Component{
  constructor(props){super(props);this.state={hasError:false,error:null};}
  static getDerivedStateFromError(error){return{hasError:true,error:error};}
  componentDidCatch(error,info){console.error("Lucid crash:",error,info);}
  render(){
    if(this.state.hasError){
      return React.createElement("div",{style:{minHeight:"100vh",background:"#08080C",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16,fontFamily:"'Montserrat',sans-serif"}},
        React.createElement("div",{style:{fontSize:40}},"⚠️"),
        React.createElement("h2",{style:{fontSize:18,fontWeight:700}},"Something went wrong"),
        React.createElement("p",{style:{fontSize:13,color:"rgba(255,255,255,0.6)",maxWidth:400,textAlign:"center"}},String(this.state.error||"")),
        React.createElement("button",{onClick:function(){window.location.reload();},style:{padding:"10px 24px",borderRadius:10,background:"linear-gradient(135deg,#818CF8,#6366F1)",border:"none",color:"#fff",fontSize:13,fontWeight:700,cursor:"pointer"}},"Reload App")
      );
    }
    return this.props.children;
  }
}

function Ic({name,size,color}){var s=size||20,c=color||"currentColor";var P={
squaresFour:<><path d="M4 4h6.5v6.5H4zM13.5 4H20v6.5h-6.5zM4 13.5h6.5V20H4zM13.5 13.5H20V20h-6.5z" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round"/></>,
shieldWarning:<><path d="M12 2L3 6.5v5c0 5.25 3.85 10.15 9 11.5 5.15-1.35 9-6.25 9-11.5v-5L12 2z" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round"/><path d="M12 9v4M12 16v.5" stroke={c} strokeWidth="2" strokeLinecap="round"/></>,
warning:<><path d="M12 2.5L1.5 21h21L12 2.5z" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round"/><path d="M12 10v4M12 17.5v.5" stroke={c} strokeWidth="2" strokeLinecap="round"/></>,
info:<><circle cx="12" cy="12" r="10" stroke={c} strokeWidth="1.5" fill="none"/><path d="M12 11v5M12 8v.5" stroke={c} strokeWidth="2" strokeLinecap="round"/></>,
checkCircle:<><circle cx="12" cy="12" r="10" stroke={c} strokeWidth="1.5" fill="none"/><path d="M8 12l3 3 5-5" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></>,
magnifyingGlass:<><circle cx="11" cy="11" r="7" stroke={c} strokeWidth="1.5" fill="none"/><path d="M16.5 16.5L21 21" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></>,
wrench:<><path d="M14.7 6.3a5 5 0 00-6.36 6.36l-4.95 4.95a1.5 1.5 0 002.12 2.12l4.95-4.95a5 5 0 006.36-6.36L14.7 10.5l-1.2-1.2 2.12-2.12z" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round"/></>,
download:<><path d="M12 3v12M7 11l5 5 5-5M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
envelope:<><rect x="2" y="4" width="20" height="16" rx="2" stroke={c} strokeWidth="1.5" fill="none"/><path d="M22 5L12 13 2 5" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
caretDown:<><path d="M6 9l6 6 6-6" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
x:<><path d="M18 6L6 18M6 6l12 12" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></>,
chatDots:<><path d="M21 12a9 9 0 01-9 9 9.1 9.1 0 01-4.68-1.31L3 21l1.31-4.32A9 9 0 1121 12z" stroke={c} strokeWidth="1.5" fill="none"/><circle cx="8.5" cy="12" r="1" fill={c}/><circle cx="12" cy="12" r="1" fill={c}/><circle cx="15.5" cy="12" r="1" fill={c}/></>,
target:<><circle cx="12" cy="12" r="10" stroke={c} strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="6" stroke={c} strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="2" fill={c}/></>,
clock:<><circle cx="12" cy="12" r="10" stroke={c} strokeWidth="1.5" fill="none"/><path d="M12 6v6l4 2" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></>,
books:<><path d="M4 4h4v16H4zM10 4h4v16h-4zM16 7l4-1v15l-4 1z" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round"/></>,
globe:<><circle cx="12" cy="12" r="10" stroke={c} strokeWidth="1.5" fill="none"/><ellipse cx="12" cy="12" rx="4" ry="10" stroke={c} strokeWidth="1.5" fill="none"/><path d="M2 12h20" stroke={c} strokeWidth="1.5"/></>,
gauge:<><path d="M12 22a10 10 0 110-20 10 10 0 010 20z" stroke={c} strokeWidth="1.5" fill="none"/><path d="M12 6v2M18 12h-2M6 12h2" stroke={c} strokeWidth="1.5" strokeLinecap="round"/><path d="M12 12l3.5-3.5" stroke={c} strokeWidth="2" strokeLinecap="round"/></>,
};return <svg width={s} height={s} viewBox="0 0 24 24" style={{flexShrink:0}}>{P[name]||null}</svg>;}

var TAXONOMY=[
  {id:"transparency",name:"Transparency & Explainability",weight:15,sources:["Google PAIR","Microsoft HAX","IBM Carbon for AI","Apple HIG","PatternFly AI"],signals:["AI labels/badges","Explainability popovers","Source citations","AI disclosure icons"]},
  {id:"trust",name:"Trust & Calibration",weight:12,sources:["Google PAIR","Microsoft HAX","NNGroup"],signals:["Confidence indicators","Accuracy disclaimers","Verification prompts"]},
  {id:"control",name:"User Control & Agency",weight:15,sources:["All Tier 1","SAP Fiori AI","Slack AI"],signals:["Accept/Edit/Dismiss","Undo for AI","Stop generating"]},
  {id:"errors",name:"Error Handling & Graceful Failure",weight:12,sources:["Microsoft HAX","Google PAIR","IBM Design for AI","PatternFly"],signals:["Error states","Manual fallbacks","Partial results"]},
  {id:"feedback",name:"Feedback Loops",weight:8,sources:["IBM Design for AI","Google PAIR","Microsoft HAX"],signals:["Thumbs up/down","Correction mechanisms"]},
  {id:"privacy",name:"Privacy & Data Governance",weight:10,sources:["OECD AI Principles","EU AI Act","NIST AI RMF"],signals:["Data disclosure","Opt-in/opt-out"]},
  {id:"fairness",name:"Fairness & Bias Mitigation",weight:8,sources:["OECD AI Principles","EU AI Act","Stanford HAI"],signals:["Bias disclosure","Inclusive patterns"]},
  {id:"mental_models",name:"Mental Models & Expectation Setting",weight:10,sources:["Google PAIR","NNGroup","Apple HIG"],signals:["Capability framing","Limitation disclosures"]},
  {id:"oversight",name:"Human Oversight & Augmentation",weight:5,sources:["Stanford HAI","IBM Design for AI","OECD AI Principles"],signals:["Human-in-the-loop","Approval workflows"]},
  {id:"progressive",name:"Progressive Disclosure",weight:5,sources:["Apple HIG","Microsoft HAX","IBM Carbon"],signals:["Layered complexity","Contextual activation"]},
];
var SEV={critical:{bg:"#FF2D55",a:"rgba(255,45,85,0.08)",bdr:"rgba(255,45,85,0.3)",txt:"#FF2D55"},warning:{bg:"#FF9F0A",a:"rgba(255,159,10,0.08)",bdr:"rgba(255,159,10,0.3)",txt:"#FF9F0A"},info:{bg:"#64D2FF",a:"rgba(100,210,255,0.08)",bdr:"rgba(100,210,255,0.3)",txt:"#64D2FF"},passed:{bg:"#34C759",a:"rgba(52,199,89,0.08)",bdr:"rgba(52,199,89,0.3)",txt:"#34C759"}};

/* tc = text color helpers for WCAG compliance:
   tc1 = primary (0.9, 14.5:1) · tc2 = body (0.75, 10.9:1) · tc3 = secondary (0.6, 7:1) · tc4 = label minimum (0.55, 6:1) */
var tc1="rgba(255,255,255,0.9)",tc2="rgba(255,255,255,0.75)",tc3="rgba(255,255,255,0.6)",tc4="rgba(255,255,255,0.55)";

function buildSysPrompt(princ,ctx){
  var cats=TAXONOMY.map(function(t){return t.id+"("+t.weight+"%):"+t.name;}).join(", ");
  return "You are Lucid, an AI UX auditor. Categories: "+cats+"\n\nRULES: Only AI design issues (never typos/colors/accessibility). Cite sources. Rate each category 0-100. Keep ALL text fields SHORT — 1-2 sentences max per field. fixSteps max 4 steps.\n\nReturn ONLY valid JSON (no markdown, no fences, no commentary):\n{\"categoryScores\":{\"transparency\":<0-100>,\"trust\":<0-100>,\"control\":<0-100>,\"errors\":<0-100>,\"feedback\":<0-100>,\"privacy\":<0-100>,\"fairness\":<0-100>,\"mental_models\":<0-100>,\"oversight\":<0-100>,\"progressive\":<0-100>},\"issues\":[{\"id\":<n>,\"title\":\"<short>\",\"severity\":\"critical|warning|info\",\"confidence\":<60-97>,\"categoryId\":\"<id>\",\"sources\":[\"<source>\"],\"element\":\"<UI element>\",\"principle\":\"<1 sentence>\",\"analysis\":\"<1-2 sentences>\",\"remediation\":\"<3 short steps>\",\"problem\":\"<1-2 sentences>\",\"rootCause\":\"<1-2 sentences>\",\"impact\":\"<1-2 sentences>\",\"fixSteps\":\"<4 numbered steps>\",\"impactRadius\":\"<3-5 words>\",\"timeToRemediate\":\"<estimate>\",\"industryExamples\":\"<2 refs>\"}]}\n\nExactly 5 issues. Be concise."+(princ.length?" Focus:"+princ.join(","):"")+(ctx?"\nContext:"+ctx:"");
}
function computeScore(cs){var tw=0,ws=0;TAXONOMY.forEach(function(t){var s=Number(cs[t.id]);if(!isNaN(s)){ws+=s*t.weight;tw+=t.weight;}});return tw>0?Math.round(ws/tw):50;}
var FBS={transparency:30,trust:25,control:35,errors:20,feedback:15,privacy:40,fairness:50,mental_models:30,oversight:45,progressive:35};
var FBI=[
  {id:1,title:"No AI Presence Disclosure",severity:"critical",confidence:94,categoryId:"transparency",sources:["IBM Carbon for AI","PatternFly AI","Google PAIR Guidebook","Apple HIG"],element:"AI-generated content areas and AI-powered features",principle:"Users must understand when AI is involved and how it reached its output",analysis:"No indicators of AI involvement. Users cannot distinguish AI from human content, violating IBM Carbon's transparency mandate.",remediation:"1. Add AI labels at every AI content entry point\n2. Use consistent sparkle iconography\n3. Implement explainability layers",problem:"The interface displays AI-generated content without any visual or textual indicators. Users interact with AI outputs believing they are deterministic system responses. This is a foundational violation — without knowing AI is involved, no other AI design principle can function correctly.",rootCause:"The interface relies solely on visual icons (sparkles) without accompanying text labels or explainability mechanisms. There are no AI badges, disclosure text, or information icons that would help users understand the AI's role.",impact:"Users may not realize they're interacting with AI, leading to inappropriate trust calibration and unclear expectations. Without transparency about AI involvement, users cannot make informed decisions about whether to use the feature or how to interpret its suggestions.",fixSteps:"1. Add 'AI-Powered' or 'AI Suggestions' label next to the button text\n2. Include an information icon that triggers an explainability popover\n3. In the popover, explain what the AI analyzes and how it generates improvements\n4. Add a confidence indicator showing how certain the AI is\n5. Reference IBM Carbon AI Label component for implementation\n6. Test with users: can they identify which content is AI-generated?",impactRadius:"All AI content areas",timeToRemediate:"2-3 hrs",industryExamples:"IBM Carbon: AI Label. Atlassian: AI footer."},
  {id:2,title:"No User Override Controls",severity:"critical",confidence:91,categoryId:"control",sources:["Microsoft HAX","SAP Fiori AI","Slack AI Principles"],element:"Primary action buttons and AI output areas",principle:"Users must retain meaningful control — override, undo, customize AI actions",analysis:"AI outputs presented as final with no override or undo mechanisms. Violates HAX and SAP user control principles.",remediation:"1. Add Accept/Edit/Dismiss on AI outputs\n2. Include Stop Generating control\n3. Provide manual alternative path",problem:"AI-driven actions are presented as final decisions with no visible mechanisms to reject, modify, or undo them. The interface lacks Accept/Edit/Dismiss controls that are standard across major design systems.",rootCause:"The design prioritizes speed over user agency. AI outputs are rendered directly without an intermediate review state. There is no versioning system to compare AI suggestions against the original.",impact:"Power users abandon tools that remove autonomy. Users who receive incorrect AI suggestions cannot easily revert, leading to frustration and eroded confidence in the entire product.",fixSteps:"1. Add Accept/Edit/Dismiss controls on each AI output (ref: SAP Fiori versioning)\n2. Include a 'Stop Generating' button during processing\n3. Provide an Undo mechanism for all AI-applied changes\n4. Add manual alternatives for every AI-automated feature\n5. Remember user corrections to improve future suggestions",impactRadius:"All AI suggestion surfaces",timeToRemediate:"3-4 hrs",industryExamples:"SAP Fiori: versioning. Notion AI: Accept/Discard."},
  {id:3,title:"Missing Trust Calibration",severity:"critical",confidence:88,categoryId:"trust",sources:["Google PAIR Guidebook","Microsoft HAX Toolkit","NNGroup"],element:"AI output display areas and recommendation panels",principle:"Design should calibrate user trust with confidence signals",analysis:"No confidence signals on AI outputs. Users see all results as equally reliable, violating PAIR's trust calibration principle.",remediation:"1. Add confidence indicators (High/Medium/Low)\n2. Include verification prompts on low-confidence\n3. Use visual weight for certainty",problem:"All AI outputs are presented with identical visual weight regardless of actual confidence. A highly certain recommendation looks the same as a speculative guess. Users have no basis for deciding which outputs to trust.",rootCause:"The interface presents AI as an oracle rather than a probabilistic system. No confidence scores, uncertainty indicators, or verification prompts are built into the output display.",impact:"Users either over-trust AI outputs or develop global distrust. Without calibration signals, users cannot develop accurate mental models of when the AI is reliable versus when it needs verification.",fixSteps:"1. Add confidence indicators next to each AI output (High/Medium/Low or percentage)\n2. Include 'Verify this result' prompts below 80% confidence\n3. Use visual weight to distinguish certainty — bold for high, muted for low\n4. Reference Microsoft HAX guideline on supporting efficient correction\n5. Show the basis for AI decisions where possible",impactRadius:"All AI outputs",timeToRemediate:"2 hrs",industryExamples:"Grammarly: confidence bars. Copilot: dims uncertain."},
  {id:4,title:"No Graceful Degradation",severity:"warning",confidence:83,categoryId:"errors",sources:["PatternFly AI","Google PAIR","Microsoft HAX Toolkit"],element:"AI-dependent feature sections and automated workflows",principle:"AI failures must be communicated with clear recovery paths",analysis:"No error states or fallbacks for AI failures. Contradicts HAX and PAIR failure-planning principles.",remediation:"1. Design error states for each AI feature\n2. Provide manual workflow fallbacks\n3. Cache last successful results",problem:"The interface has no visible handling for AI failures. When the AI service is unavailable, users encounter broken or empty states with no guidance on what happened or what to do next.",rootCause:"The design was built assuming 100% AI reliability without planning for degraded states. No timeout handlers, retry mechanisms, or cached fallback content exist.",impact:"When AI fails, users are left stuck with no way to complete their task. This creates a single point of failure. Users lose work in progress and may not know whether to wait or try again.",fixSteps:"1. Design explicit error states for each AI feature (ref: PatternFly)\n2. Provide manual workflow alternatives\n3. Show partial results with 'Still processing' indicators\n4. Cache the last successful AI results as fallback\n5. Add retry with exponential backoff and clear messaging",impactRadius:"All AI-dependent sections",timeToRemediate:"3 hrs",industryExamples:"Google Translate: fallback. Siri: web search."},
  {id:5,title:"No Feedback Mechanism",severity:"warning",confidence:79,categoryId:"feedback",sources:["IBM Design for AI","Google PAIR Guidebook","Microsoft HAX"],element:"Adjacent to all AI-generated responses and suggestions",principle:"Users should be able to provide feedback to improve AI over time",analysis:"No way for users to rate AI quality. PAIR identifies feedback as essential infrastructure.",remediation:"1. Add thumbs up/down on AI outputs\n2. Include 'What was wrong?' follow-up\n3. Show improvement indicators",problem:"Users have no mechanism to signal whether AI outputs were helpful, incorrect, or irrelevant. The feedback loop is entirely absent, meaning the AI cannot learn from user interactions.",rootCause:"Feedback was deprioritized as optional rather than essential infrastructure. No thumbs up/down buttons, correction mechanisms, or rating interfaces exist.",impact:"Without feedback, AI quality stagnates or degrades. Users who encounter repeated bad suggestions lose trust. The product team has no signal about which AI features need improvement.",fixSteps:"1. Add lightweight thumbs up/down on each AI output\n2. Include 'What was wrong?' follow-up with common categories\n3. Show 'Updated based on your feedback' confirmations\n4. Aggregate feedback for the product team dashboard\n5. Reference PAIR Chapter 5 — Feedback & Control",impactRadius:"All AI output surfaces",timeToRemediate:"1.5 hrs",industryExamples:"ChatGPT: thumbs up/down. YouTube: signals."},
  {id:6,title:"Unclear AI Mental Model",severity:"warning",confidence:76,categoryId:"mental_models",sources:["Google PAIR Guidebook","Apple HIG","NNGroup"],element:"AI feature entry points, onboarding, and help sections",principle:"Users need accurate mental models of AI capabilities and limitations",analysis:"No guidance on AI capabilities vs limitations. NNGroup research shows users consistently mismodel AI.",remediation:"1. Add capability framing at entry points\n2. Include limitation disclosures\n3. Show good vs poor use case examples",problem:"No guidance on what the AI can reliably do versus where it struggles. Users discover capabilities through trial and error, leading to persistent misconceptions about reliability.",rootCause:"The design assumes users intuitively understand AI. No onboarding for AI features, no capability framing at entry points, and no contextual help explaining limitations.",impact:"Users attempt tasks the AI cannot handle (frustration) or avoid tasks it handles well (missing value). Misaligned expectations are the top driver of AI feature abandonment per NNGroup research.",fixSteps:"1. Add capability framing at entry points ('Best for X, may struggle with Y')\n2. Include limitation disclosures in contextual tooltips\n3. Provide examples of good vs poor use cases during onboarding\n4. Show 'Tips for better results' near input fields\n5. Reference PAIR Chapter 3 — Mental Models",impactRadius:"AI onboarding and help",timeToRemediate:"2 hrs",industryExamples:"Apple HIG: expectation-setting. ChatGPT: limitations."},
  {id:7,title:"AI Content Not Distinct",severity:"info",confidence:72,categoryId:"transparency",sources:["IBM Carbon for AI","Atlassian","Google Material Design"],element:"Areas where AI and static/human content coexist",principle:"AI-generated content should be visually distinguishable",analysis:"AI content is visually identical to non-AI content. Carbon guidance: AI styling must be meaningful, never decorative.",remediation:"1. Add consistent AI indicators (sparkle, background)\n2. Reference IBM Carbon light-inspired effects\n3. Test: Can users identify AI content?",problem:"AI-generated content uses the same visual styling as non-AI content. Users scrolling through cannot identify which sections were generated by AI and which are human-authored or static.",rootCause:"The design pursued seamless integration past the point of distinguishability. Users cannot apply differentiated levels of trust to different content sources.",impact:"Users apply uniform trust levels to everything. AI content may get more trust than warranted, or all content gets less trust. IBM Carbon research shows users want subtle, not distracting, indicators.",fixSteps:"1. Add consistent AI indicators (sparkle icons, subtle tints, thin borders)\n2. Reference IBM Carbon light-inspired effects for AI elements\n3. Ensure AI styling signifies actual AI — never decorative\n4. Test with 5 users: can they identify AI content?\n5. Maintain visual hierarchy — indicators should inform, not distract",impactRadius:"Mixed content areas",timeToRemediate:"1.5 hrs",industryExamples:"IBM Carbon: light effects. Notion: purple accent."},
  {id:8,title:"No Progressive Disclosure",severity:"info",confidence:68,categoryId:"progressive",sources:["Apple HIG","Microsoft HAX Toolkit","IBM Carbon for AI"],element:"AI feature settings, configuration, and advanced options",principle:"AI features should be introduced progressively, adapting to expertise",analysis:"All AI features at same complexity level. Violates Apple's progressive disclosure for ML features.",remediation:"1. Default to simple AI outputs\n2. Add expandable detail layers\n3. Offer power user toggles",problem:"Every AI feature shows the same complexity regardless of expertise. New users see the same interface as power users. No simplified views, guided modes, or expert toggles exist.",rootCause:"Designed with a single user persona. No progressive disclosure patterns, no expandable detail layers, no user preference detection.",impact:"Novices feel overwhelmed by advanced options. Experts feel constrained by lack of controls. Both segments are underserved. Progressive disclosure is critical for AI where the complexity gap is large.",fixSteps:"1. Default to simple, approachable AI outputs\n2. Add 'Show more detail' expandable sections\n3. Offer power user toggles in settings\n4. Detect usage patterns to gradually reveal complexity\n5. Reference Apple HIG progressive disclosure for ML",impactRadius:"All AI feature surfaces",timeToRemediate:"1 hr",industryExamples:"Apple: progressive Siri. PAIR: layered complexity."},
];

function Fmt({text}){if(!text||typeof text!=="string")return null;return <div>{text.split("\n").map(function(l,i){var t=l.trim();if(t.match(/^\d+\.\s/))return <div key={i} style={{display:"flex",gap:8,marginBottom:4}}><span style={{color:BC,fontFamily:MF,fontSize:11,fontWeight:700,flexShrink:0}}>{t.match(/^\d+/)[0]}.</span><span style={{fontSize:12,color:tc3,lineHeight:1.5,fontFamily:BF}}>{t.replace(/^\d+\.\s*/,"")}</span></div>;if(t==="")return <div key={i} style={{height:4}}/>;return <div key={i} style={{fontSize:12,color:tc3,lineHeight:1.5,fontFamily:BF,marginBottom:3}}>{t}</div>;})}</div>;}

function ScoreRing({score,size}){var s=size||140,r=s/2-8,circ=2*Math.PI*r,fill=circ*(score/100);var cl=score>=70?"#34C759":score>=45?"#FF9F0A":"#FF2D55";var glow=score>=70?"rgba(52,199,89,0.3)":score>=45?"rgba(255,159,10,0.3)":"rgba(255,45,85,0.3)";return(
<div style={{position:"relative",width:s,height:s}}>
<svg width={s} height={s} viewBox={"0 0 "+s+" "+s}><circle cx={s/2} cy={s/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6"/><circle cx={s/2} cy={s/2} r={r} fill="none" stroke={cl} strokeWidth="6" strokeDasharray={fill+" "+circ} strokeLinecap="round" transform={"rotate(-90 "+s/2+" "+s/2+")"} style={{filter:"drop-shadow(0 0 8px "+glow+")",transition:"stroke-dasharray 1.2s ease"}}/></svg>
<div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:s*0.3,fontWeight:900,fontFamily:DF,color:cl,lineHeight:1}}>{score}</span><span style={{fontSize:10,fontFamily:BF,fontWeight:600,color:tc4,marginTop:2}}>/ 100</span></div></div>);}

function FindingCard({issue,resolved,onToggle}){
  var[exp,setExp]=useState(false);var c=SEV[resolved?"passed":issue.severity]||SEV.info;var cat=TAXONOMY.find(function(t){return t.id===issue.categoryId;});
  var sevIcon={critical:"shieldWarning",warning:"warning",info:"info",passed:"checkCircle"};
  return(
    <div style={{borderRadius:14,border:"1px solid "+(resolved?"rgba(52,199,89,0.15)":"rgba(255,255,255,0.06)"),background:resolved?"rgba(52,199,89,0.02)":"rgba(255,255,255,0.018)",overflow:"hidden",transition:"all 0.3s",opacity:resolved?0.65:1}}>
      <div style={{display:"flex",alignItems:"center",padding:"14px 20px",gap:14}}>
        <div style={{width:34,height:34,borderRadius:9,background:c.a,border:"1px solid "+c.bdr,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Ic name={sevIcon[resolved?"passed":issue.severity]} size={17} color={c.txt}/></div>
        <div style={{flex:1,minWidth:0}}>
          {cat&&<div style={{fontSize:10,fontWeight:600,color:tc4,fontFamily:BF,letterSpacing:0.5,marginBottom:2,textTransform:"uppercase"}}>{cat.name}</div>}
          <h3 style={{fontSize:14,fontWeight:700,color:tc1,lineHeight:1.3,fontFamily:BF,textDecoration:resolved?"line-through":"none"}}>{issue.title}</h3>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
          <button onClick={function(e){e.stopPropagation();onToggle(issue.id);}} style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",fontSize:11,fontWeight:600,fontFamily:BF,background:resolved?"rgba(52,199,89,0.1)":"transparent",border:"1px solid "+(resolved?"rgba(52,199,89,0.35)":"rgba(255,255,255,0.12)"),color:resolved?"#34C759":tc4,display:"flex",alignItems:"center",gap:5,transition:"all 0.2s"}}>{resolved&&<Ic name="checkCircle" size={12} color="#34C759"/>}<span>Resolved</span></button>
          <button onClick={function(){setExp(function(p){return!p;});}} style={{width:34,height:34,borderRadius:8,cursor:"pointer",background:exp?"rgba(255,255,255,0.06)":"transparent",border:"1px solid rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"}}><div style={{transition:"transform 0.3s",transform:exp?"rotate(180deg)":"rotate(0deg)"}}><Ic name="caretDown" size={15} color={tc4}/></div></button>
        </div>
      </div>
      <div style={{padding:"0 20px 14px",display:"flex",gap:20}}>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:5}}><Ic name="magnifyingGlass" size={13} color={BC}/><span style={{fontSize:10,fontWeight:700,color:tc4,fontFamily:BF,letterSpacing:0.5,textTransform:"uppercase"}}>Analysis</span></div>
          <p style={{fontSize:12,color:tc3,lineHeight:1.6,fontFamily:BF,margin:0}}>{issue.analysis}</p>
        </div>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:5}}><Ic name="wrench" size={13} color={BC}/><span style={{fontSize:10,fontWeight:700,color:tc4,fontFamily:BF,letterSpacing:0.5,textTransform:"uppercase"}}>Fix</span></div>
          <div style={{background:"rgba(0,0,0,0.2)",borderRadius:8,padding:"8px 12px",border:"1px solid rgba(255,255,255,0.04)"}}><Fmt text={issue.remediation}/></div>
        </div>
      </div>
      {exp&&<div style={{padding:"0 20px 18px",borderTop:"1px solid rgba(255,255,255,0.04)",paddingTop:14,animation:"fadeIn 0.3s"}}>
        {issue.element&&<div style={{padding:"10px 14px",borderRadius:8,background:c.a,border:"1px solid "+c.bdr+"40",marginBottom:10}}><div style={{display:"flex",alignItems:"center",gap:5,marginBottom:3}}><span style={{fontSize:12}}>📍</span><span style={{fontFamily:BF,fontSize:9,fontWeight:700,color:tc4,letterSpacing:0.5,textTransform:"uppercase"}}>UI Element</span></div><div style={{fontSize:12,color:c.txt,fontFamily:BF,lineHeight:1.5}}>{issue.element}</div></div>}
        {issue.sources&&issue.sources.length>0&&<div style={{padding:"10px 14px",borderRadius:8,background:"rgba(129,140,248,0.04)",border:"1px solid rgba(129,140,248,0.12)",marginBottom:10}}><div style={{display:"flex",alignItems:"center",gap:5,marginBottom:3}}><Ic name="books" size={12} color={BC}/><span style={{fontFamily:BF,fontSize:9,fontWeight:700,color:tc4,letterSpacing:0.5,textTransform:"uppercase"}}>Source Citations</span></div><div style={{fontSize:11,color:BC,fontFamily:BF}}>{Array.isArray(issue.sources)?issue.sources.join(" · "):String(issue.sources||"")}</div></div>}
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}><div style={{flex:1,height:4,borderRadius:2,background:"rgba(255,255,255,0.06)"}}><div style={{width:issue.confidence+"%",height:"100%",borderRadius:2,background:issue.confidence>=85?"#34C759":issue.confidence>=70?"#FF9F0A":"#FF2D55",transition:"width 0.8s"}}/></div><span style={{fontFamily:MF,fontSize:11,fontWeight:700,color:issue.confidence>=85?"#34C759":issue.confidence>=70?"#FF9F0A":"#FF2D55"}}>{issue.confidence}%</span></div>
        {issue.principle&&<div style={{marginBottom:14}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}><span style={{fontSize:12}}>📐</span><span style={{fontFamily:BF,fontSize:9,fontWeight:700,color:"#FF2D55",letterSpacing:0.5,textTransform:"uppercase"}}>Principle Violated</span></div><div style={{fontSize:13,color:tc2,fontFamily:BF,lineHeight:1.6}}>{issue.principle}</div></div>}
        {issue.problem&&<div style={{marginBottom:14}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}><Ic name="magnifyingGlass" size={13} color="#FF2D55"/><span style={{fontFamily:BF,fontSize:9,fontWeight:700,color:"#FF2D55",letterSpacing:0.5,textTransform:"uppercase"}}>What is the Problem?</span></div><div style={{fontSize:13,color:tc3,fontFamily:BF,lineHeight:1.7}}>{issue.problem}</div></div>}
        {issue.rootCause&&<div style={{marginBottom:14}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}><span style={{fontSize:12}}>💡</span><span style={{fontFamily:BF,fontSize:9,fontWeight:700,color:"#FF9F0A",letterSpacing:0.5,textTransform:"uppercase"}}>Why Did This Occur?</span></div><div style={{fontSize:13,color:tc3,fontFamily:BF,lineHeight:1.7}}>{issue.rootCause}</div></div>}
        {issue.impact&&<div style={{marginBottom:14}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}><span style={{fontSize:12}}>⚡</span><span style={{fontFamily:BF,fontSize:9,fontWeight:700,color:"#FF2D55",letterSpacing:0.5,textTransform:"uppercase"}}>Impact on Experience</span></div><div style={{fontSize:13,color:tc3,fontFamily:BF,lineHeight:1.7}}>{issue.impact}</div></div>}
        {issue.fixSteps&&<div style={{marginBottom:14}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}><Ic name="wrench" size={13} color={BC}/><span style={{fontFamily:BF,fontSize:9,fontWeight:700,color:BC,letterSpacing:0.5,textTransform:"uppercase"}}>How to Fix It</span></div><div style={{background:"rgba(0,0,0,0.2)",borderRadius:8,padding:"10px 14px",border:"1px solid rgba(255,255,255,0.04)"}}><Fmt text={issue.fixSteps}/></div></div>}
        <div style={{display:"flex",gap:10,marginBottom:10}}>
          <div style={{flex:1,padding:"10px 12px",borderRadius:8,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)"}}><div style={{display:"flex",alignItems:"center",gap:5,marginBottom:3}}><Ic name="target" size={11} color={tc4}/><span style={{fontFamily:BF,fontSize:9,fontWeight:700,color:tc4,letterSpacing:0.5,textTransform:"uppercase"}}>Impact Radius</span></div><div style={{fontSize:12,fontWeight:600,color:tc1,fontFamily:BF}}>{issue.impactRadius}</div></div>
          <div style={{flex:1,padding:"10px 12px",borderRadius:8,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)"}}><div style={{display:"flex",alignItems:"center",gap:5,marginBottom:3}}><Ic name="clock" size={11} color={tc4}/><span style={{fontFamily:BF,fontSize:9,fontWeight:700,color:tc4,letterSpacing:0.5,textTransform:"uppercase"}}>Time to Remediate</span></div><div style={{fontSize:12,fontWeight:600,color:tc1,fontFamily:BF}}>{issue.timeToRemediate}</div></div>
        </div>
        <div style={{padding:"10px 12px",borderRadius:8,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.04)"}}><div style={{display:"flex",alignItems:"center",gap:5,marginBottom:3}}><Ic name="globe" size={11} color={tc4}/><span style={{fontFamily:BF,fontSize:9,fontWeight:700,color:tc4,letterSpacing:0.5,textTransform:"uppercase"}}>Industry Examples</span></div><div style={{fontSize:11,color:tc3,fontFamily:BF}}>{issue.industryExamples}</div></div>
      </div>}
    </div>);
}

function AiChat({open,onClose,onSend,msgs,typing}){var[v,setV]=useState("");var r=useRef(null);useEffect(function(){if(r.current)r.current.scrollTop=r.current.scrollHeight;},[msgs,typing]);if(!open)return null;return(
<div style={{position:"fixed",bottom:80,right:24,width:400,maxHeight:500,borderRadius:20,background:"rgba(12,12,18,0.96)",border:"1px solid rgba(255,255,255,0.08)",boxShadow:"0 24px 80px rgba(0,0,0,0.6)",zIndex:999,display:"flex",flexDirection:"column",overflow:"hidden",animation:"chatIn 0.25s",backdropFilter:"blur(24px)"}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid rgba(255,255,255,0.06)"}}><div style={{display:"flex",alignItems:"center",gap:8}}><Ic name="chatDots" size={16} color={BC}/><span style={{fontSize:13,fontWeight:700,color:tc1,fontFamily:BF}}>Lucid AI</span></div><button onClick={onClose} style={{background:"rgba(255,255,255,0.06)",border:"none",color:tc4,width:28,height:28,borderRadius:8,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><Ic name="x" size={14} color={tc4}/></button></div>
<div ref={r} style={{flex:1,overflowY:"auto",padding:"12px 14px",minHeight:180}}>
{msgs.length===0&&<div style={{textAlign:"center",padding:"36px 16px"}}><div style={{fontSize:24,marginBottom:10}}>✨</div><div style={{fontSize:13,fontWeight:600,color:tc4,fontFamily:BF}}>Ask about your audit</div></div>}
{msgs.map(function(m,i){return <div key={i} style={{marginBottom:10,display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}><div style={{maxWidth:"85%",padding:"9px 13px",borderRadius:m.role==="user"?"12px 12px 3px 12px":"12px 12px 12px 3px",background:m.role==="user"?"rgba(129,140,248,0.1)":"rgba(255,255,255,0.03)",border:"1px solid "+(m.role==="user"?"rgba(129,140,248,0.2)":"rgba(255,255,255,0.06)")}}><div style={{fontSize:12,color:tc2,lineHeight:1.6,fontFamily:BF}}>{m.content}</div></div></div>;})}
{typing&&<div style={{display:"flex",alignItems:"center",gap:5,padding:"6px"}}><span style={{fontFamily:BF,fontSize:10,color:tc4}}>Thinking</span>{[0,1,2].map(function(i){return <div key={i} style={{width:4,height:4,borderRadius:"50%",background:"rgba(129,140,248,0.5)",animation:"bounce 1.4s infinite "+(i*0.15)+"s"}}/>;})}</div>}
</div>
<div style={{display:"flex",gap:8,padding:"10px 14px",borderTop:"1px solid rgba(255,255,255,0.06)"}}>
<input value={v} onChange={function(e){setV(e.target.value);}} onKeyDown={function(e){if(e.key==="Enter"&&v.trim()){onSend(v);setV("");}}} placeholder="Ask anything…" style={{flex:1,padding:"10px 12px",borderRadius:10,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",color:"#fff",fontSize:12,fontFamily:BF,outline:"none"}}/>
<button onClick={function(){if(v.trim()){onSend(v);setV("");}}} style={{padding:"10px 18px",borderRadius:10,background:"linear-gradient(135deg,"+BC+","+BC2+")",border:"none",color:"#fff",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:MF}}>↑</button>
</div></div>);}

function ScanOverlay({progress,phase}){return(
<div style={{position:"fixed",inset:0,zIndex:9999,background:"rgba(8,8,12,0.94)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:30,backdropFilter:"blur(24px)"}}>
<ScoreRing score={Math.round(progress)} size={160}/>
<div style={{textAlign:"center"}}><div style={{fontSize:17,fontWeight:600,color:tc1,marginBottom:6,fontFamily:BF}}>{phase}</div><div style={{fontFamily:BF,fontSize:10,fontWeight:600,color:tc4,letterSpacing:2,textTransform:"uppercase"}}>Claude · 30 Sources · 10 Categories</div></div></div>);}

function downloadScreenshot(){window.print();}
function shareReport(issues,score){var s=encodeURIComponent("Lucid AI Design Audit — Score: "+score+"/100");var b=encodeURIComponent("AI Design Audit Results\nScore: "+score+"/100\n\nFindings:\n"+issues.map(function(i){return"["+i.severity.toUpperCase()+"] "+i.title+" — "+i.analysis;}).join("\n\n")+"\n\nGenerated by Lucid AI Design Audit Platform");window.open("mailto:?subject="+s+"&body="+b);}

function AppInner(){
var[scr,setScr]=useState("upload");var[img,setImg]=useState(null);var[prev,setPrev]=useState(null);var[prm,setPrm]=useState("");var[princ,setPrinc]=useState([]);var[consent,setConsent]=useState(null);var[prog,setProg]=useState(0);var[phase,setPhase]=useState("");var[issues,setIssues]=useState([]);var[score,setScore]=useState(0);var[catScores,setCatScores]=useState({});var[solved,setSolved]=useState(new Set());var[filter,setFilter]=useState("all");var[msgs,setMsgs]=useState([]);var[typing,setTyping]=useState(false);var[chatOpen,setChatOpen]=useState(false);var[dragOver,setDragOver]=useState(false);var[cmod,setCmod]=useState(false);var[usedAI,setUsedAI]=useState(false);var[apiError,setApiError]=useState(null);var[compressed,setCompressed]=useState(null);var fileRef=useRef(null);
function compressImage(dataUrl,maxW,quality){return new Promise(function(resolve){var img=new Image();img.onload=function(){var w=img.width,h=img.height;if(w>maxW){h=Math.round(h*(maxW/w));w=maxW;}var c=document.createElement("canvas");c.width=w;c.height=h;var ctx=c.getContext("2d");ctx.drawImage(img,0,0,w,h);resolve(c.toDataURL("image/jpeg",quality));};img.src=dataUrl;});}
var handleFile=useCallback(function(f){if(!f||!f.type.startsWith("image/"))return;setImg(f);var r=new FileReader();r.onload=function(e){setPrev(e.target.result);compressImage(e.target.result,800,0.6).then(function(c){setCompressed(c);});};r.readAsDataURL(f);},[]);
function togPrinc(p){setPrinc(function(pr){return pr.includes(p)?pr.filter(function(x){return x!==p;}):pr.concat([p]);});}
function togSolved(id){setSolved(function(p){var n=new Set(p);if(n.has(id))n.delete(id);else n.add(id);return n;});}
function norm(raw){return(raw||[]).map(function(iss,i){return{id:iss.id||(i+1),title:iss.title||"Untitled Issue",severity:["critical","warning","info"].includes(iss.severity)?iss.severity:"info",confidence:Math.min(97,Math.max(60,iss.confidence||75)),categoryId:iss.categoryId||"transparency",sources:Array.isArray(iss.sources)?iss.sources:(iss.sources?[String(iss.sources)]:[]),element:iss.element||"",principle:iss.principle||"",analysis:iss.analysis||"",remediation:iss.remediation||"",problem:iss.problem||"",rootCause:iss.rootCause||"",impact:iss.impact||"",fixSteps:iss.fixSteps||"",impactRadius:iss.impactRadius||"",timeToRemediate:iss.timeToRemediate||"",industryExamples:iss.industryExamples||""};});}
function recoverJSON(raw){
  // 1. Try direct parse
  try{return JSON.parse(raw);}catch(e){}
  // 2. Try closing truncated JSON by brute-force bracket closing
  var attempts=[raw];
  // Strip trailing partial key/value patterns
  var stripped=raw.replace(/,\s*"[^"]*"?\s*:?\s*"?[^"{}[\]]*$/,"");
  if(stripped!==raw)attempts.push(stripped);
  var stripped2=raw.replace(/,\s*\{[^{}]*$/,"");
  if(stripped2!==raw)attempts.push(stripped2);
  for(var a=0;a<attempts.length;a++){
    var s=attempts[a];
    var ob=0,ab=0;
    for(var i=0;i<s.length;i++){var ch=s[i];if(ch==="{")ob++;else if(ch==="}")ob--;else if(ch==="[")ab++;else if(ch==="]")ab--;}
    var close="";while(ab>0){close+="]";ab--;}while(ob>0){close+="}";ob--;}
    try{return JSON.parse(s+close);}catch(e2){}
  }
  // 3. Extract parts manually
  try{
    var csRe=/"categoryScores"\s*:\s*\{[^}]+\}/;
    var csM=raw.match(csRe);
    if(!csM)return null;
    var cs=JSON.parse("{"+csM[0]+"}").categoryScores;
    // Find complete issue objects between "id": markers
    var issues=[];
    var issueRe=/\{"id":\d+,"title":"[^"]+","severity":"(?:critical|warning|info)","confidence":\d+[^]*?"industryExamples":"[^"]*"\}/g;
    var m;while((m=issueRe.exec(raw))!==null){try{issues.push(JSON.parse(m[0]));}catch(e3){}}
    if(issues.length===0){
      // Fallback: find each complete {...} after "issues":[
      var afterIssues=raw.split('"issues"')[1]||"";
      var depth=0,start=-1;
      for(var j=0;j<afterIssues.length;j++){
        if(afterIssues[j]==="{"){if(depth===0)start=j;depth++;}
        if(afterIssues[j]==="}"){depth--;if(depth===0&&start>=0){try{issues.push(JSON.parse(afterIssues.substring(start,j+1)));}catch(e4){}start=-1;}}
      }
    }
    if(issues.length>0)return{categoryScores:cs,issues:issues};
  }catch(e5){}
  return null;
}
async function readSSE(response){
  try{
    if(!response.body||!response.body.getReader){
      var fallback=await response.text();
      try{var fb=JSON.parse(fallback);return(fb.content||[]).map(function(c){return c.text||"";}).join("");}catch(e){return fallback;}
    }
    var reader=response.body.getReader();var decoder=new TextDecoder();var text="";var buf="";var rawChunks="";
    while(true){
      var result=await reader.read();
      if(result.done)break;
      var chunk=decoder.decode(result.value,{stream:true});
      buf+=chunk;rawChunks+=chunk;
      var lines=buf.split("\n");buf=lines.pop()||"";
      for(var i=0;i<lines.length;i++){
        var line=lines[i].trim();
        if(!line.startsWith("data: "))continue;
        var json=line.slice(6);if(json==="[DONE]")continue;
        try{var ev=JSON.parse(json);if(ev.type==="content_block_delta"&&ev.delta&&ev.delta.text){text+=ev.delta.text;}}catch(e){}
      }
    }
    if(!text&&rawChunks){try{var raw=JSON.parse(rawChunks);return(raw.content||[]).map(function(c){return c.text||"";}).join("");}catch(e){}}
    return text;
  }catch(err){
    console.error("readSSE error:",err);
    return "";
  }
}
async function runAudit(){if(!img)return;if(consent===null){setCmod(true);return;}setScr("scanning");setProg(0);setApiError(null);setUsedAI(false);
var phases=["Ingesting screenshot…","Parsing UI primitives…","Scanning taxonomy…","Evaluating 30 sources…","Cross-referencing principles…","Computing scores…","Generating report…"];
var pp=92/phases.length,cp=0;
for(var pi=0;pi<phases.length;pi++){setPhase(phases[pi]);var target=cp+pp;await new Promise(function(resolve){var iv=setInterval(function(){setProg(function(p){if(p>=target){clearInterval(iv);resolve();return target;}return p+0.6;});},50);});cp=target;}
var errMsg=null;
var didSucceed=false;
try{
  setPhase("Sending to Claude API…");
  var sendImg=compressed||prev;
  var b64=sendImg.split(",")[1];
  var mtype=sendImg.startsWith("data:image/jpeg")?"image/jpeg":(img.type||"image/png");
  var reqBody={model:"claude-sonnet-4-20250514",max_tokens:8192,system:buildSysPrompt(princ,prm),messages:[{role:"user",content:[{type:"image",source:{type:"base64",media_type:mtype,data:b64}},{type:"text",text:"Audit this UI. Return ONLY valid JSON, nothing else."}]}]};
  var resp=await fetch("/api/audit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(reqBody)});
  if(!resp.ok){var errBody=await resp.text().catch(function(){return"";});errMsg="API returned "+resp.status+": "+(errBody.substring(0,300));throw new Error(errMsg);}
  setPhase("Streaming AI response…");
  var txt=await readSSE(resp);
  if(!txt||txt.length<20){errMsg="API returned empty response (length: "+(txt?txt.length:0)+")";throw new Error(errMsg);}
  var clean=txt.replace(/```json/g,"").replace(/```/g,"").trim();
  var parsed=recoverJSON(clean);
  if(!parsed){errMsg="JSON parse failed even after recovery.\nRaw (first 300 chars): "+clean.substring(0,300);throw new Error(errMsg);}
  if(!parsed.categoryScores||!parsed.issues||!parsed.issues.length){errMsg="Response missing categoryScores or issues";throw new Error(errMsg);}
  setCatScores(parsed.categoryScores);
  setScore(computeScore(parsed.categoryScores));
  setIssues(norm(parsed.issues));
  setUsedAI(true);
  didSucceed=true;
}catch(e){
  console.error("Lucid audit error:",e);
  var finalErr=errMsg||e.message||"Unknown error";
  setApiError(finalErr);
  setCatScores(FBS);setScore(computeScore(FBS));setIssues(norm(FBI));setUsedAI(false);
}
setProg(100);setPhase(didSucceed?"AI audit complete!":"Complete (demo data)");await new Promise(function(r){setTimeout(r,500);});setScr("results");}
async function chatSend(m){setMsgs(function(p){return p.concat([{role:"user",content:m}]);});setTyping(true);try{var iSum=issues.map(function(i){return"["+i.severity+"] "+i.title;}).join("\n");var apiMsgs=msgs.concat([{role:"user",content:m}]).map(function(x){return{role:x.role,content:x.content};});var resp=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:"You are Lucid, AI Design auditor.\nFound:\n"+iSum+"\nScore:"+score+"/100\nCite sources. Concise.",messages:apiMsgs})});if(!resp.ok)throw new Error();var t=await readSSE(resp);if(!t||t.length<5)throw new Error();setMsgs(function(p){return p.concat([{role:"assistant",content:t}]);});}catch(err){setMsgs(function(p){return p.concat([{role:"assistant",content:"Score: "+score+"/100 with "+issues.length+" findings."}]);});}setTyping(false);}
var filtered=issues.filter(function(i){if(filter==="all")return true;if(filter==="passed")return solved.has(i.id);return i.severity===filter&&!solved.has(i.id);});
var counts={all:issues.length,critical:0,warning:0,info:0,passed:0};issues.forEach(function(i){if(solved.has(i.id))counts.passed++;else if(counts[i.severity]!==undefined)counts[i.severity]++;});

if(scr==="upload"){return(
<div style={{minHeight:"100vh",background:"#08080C",color:"#fff",fontFamily:BF}}>
{cmod&&<div style={{position:"fixed",inset:0,zIndex:9999,background:"rgba(8,8,12,0.9)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(20px)"}}><div style={{width:460,padding:32,borderRadius:20,background:"rgba(20,20,28,0.98)",border:"1px solid rgba(255,255,255,0.08)"}}><div style={{fontFamily:BF,fontSize:10,fontWeight:700,color:tc4,letterSpacing:2,marginBottom:12,textTransform:"uppercase"}}>Data Consent</div><h3 style={{fontSize:20,fontWeight:700,marginBottom:14,fontFamily:BF,color:tc1}}>Can our AI learn from your screenshot?</h3><p style={{fontSize:13,color:tc3,marginBottom:24,fontFamily:BF}}>Anonymized data.</p><div style={{display:"flex",gap:10}}><button onClick={function(){setConsent(true);setCmod(false);}} style={{flex:1,padding:13,borderRadius:10,background:"linear-gradient(135deg,"+BC+","+BC2+")",border:"none",color:"#fff",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:BF}}>Yes</button><button onClick={function(){setConsent(false);setCmod(false);}} style={{flex:1,padding:13,borderRadius:10,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",color:tc1,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:BF}}>No</button></div></div></div>}
<div style={{position:"fixed",inset:0,background:"radial-gradient(ellipse at 20% 50%,rgba(129,140,248,0.04),transparent 50%),radial-gradient(ellipse at 80% 20%,rgba(99,102,241,0.04),transparent 50%)",pointerEvents:"none"}}/>
<nav style={{display:"flex",alignItems:"center",padding:"18px 40px",position:"relative",zIndex:10}}><div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:34,height:34,borderRadius:9,background:"linear-gradient(135deg,"+BC+","+BC2+")",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:900,color:"#fff",fontFamily:DF}}>L</div><span style={{fontSize:18,fontWeight:900,fontFamily:DF,letterSpacing:1,color:tc1}}>LUCID</span><span style={{fontSize:9,fontWeight:700,padding:"3px 7px",borderRadius:5,background:"rgba(129,140,248,0.12)",color:BC,fontFamily:BF}}>MVP</span></div></nav>
<div style={{maxWidth:880,margin:"0 auto",padding:"24px 40px 0",textAlign:"center",position:"relative",zIndex:10}}>
<div style={{fontFamily:BF,fontSize:10,fontWeight:700,color:BC,letterSpacing:3,marginBottom:16,textTransform:"uppercase"}}>AI Design Audit Platform</div>
<h1 style={{fontSize:52,fontWeight:900,lineHeight:1.05,marginBottom:14,fontFamily:DF,textTransform:"uppercase",background:"linear-gradient(135deg,#fff,rgba(255,255,255,0.7))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>AUDIT YOUR AI UX<br/>AGAINST 30 LIVING SOURCES</h1>
<p style={{fontSize:14,color:tc3,lineHeight:1.65,maxWidth:540,margin:"0 auto 32px",fontFamily:BF}}>Upload your UI. Claude audits it against a 10-category taxonomy from PAIR, HAX, Carbon for AI, Apple HIG, NNGroup, and more.</p>
</div>
<div style={{maxWidth:880,margin:"0 auto",padding:"0 40px 60px",position:"relative",zIndex:10}}>
<div onDragOver={function(e){e.preventDefault();setDragOver(true);}} onDragLeave={function(){setDragOver(false);}} onDrop={function(e){e.preventDefault();setDragOver(false);handleFile(e.dataTransfer.files[0]);}} onClick={function(){if(!prev&&fileRef.current)fileRef.current.click();}} style={{borderRadius:16,overflow:"hidden",border:"2px dashed "+(dragOver?BC:prev?"transparent":"rgba(255,255,255,0.08)"),background:dragOver?"rgba(129,140,248,0.04)":prev?"rgba(0,0,0,0.12)":"rgba(255,255,255,0.012)",cursor:prev?"default":"pointer",textAlign:"center",transition:"all 0.3s"}}>
<input ref={fileRef} type="file" accept="image/*" style={{display:"none"}} onChange={function(e){handleFile(e.target.files[0]);}}/>
{prev?<img src={prev} alt="" style={{width:"100%",maxHeight:360,objectFit:"contain",display:"block"}}/>:<div style={{padding:"44px 36px"}}><div style={{fontSize:40,marginBottom:12,animation:"float 3s ease-in-out infinite"}}>🖼</div><div style={{fontSize:15,fontWeight:600,marginBottom:6,fontFamily:BF,color:tc2}}>Drop your UI screenshot here</div><div style={{fontSize:12,color:tc4,fontFamily:BF}}>PNG, JPG, WEBP</div></div>}
</div>
{prev&&<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 14px",borderRadius:"0 0 12px 12px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderTop:"none",marginBottom:20}}><div style={{display:"flex",alignItems:"center",gap:8}}><Ic name="checkCircle" size={14} color="#34C759"/><span style={{fontSize:10,color:"#34C759",fontWeight:700,fontFamily:BF,textTransform:"uppercase"}}>Uploaded</span><span style={{fontSize:10,color:tc4,fontFamily:BF}}>{img&&img.name}</span></div><div style={{display:"flex",gap:6}}><button onClick={function(){if(fileRef.current)fileRef.current.click();}} style={{padding:"4px 10px",borderRadius:6,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",color:tc4,fontSize:9,fontWeight:700,cursor:"pointer",fontFamily:BF,textTransform:"uppercase"}}>Replace</button><button onClick={function(){setImg(null);setPrev(null);setCompressed(null);}} style={{padding:"4px 10px",borderRadius:6,background:"rgba(255,45,85,0.06)",border:"1px solid rgba(255,45,85,0.2)",color:"#FF2D55",fontSize:9,fontWeight:700,cursor:"pointer",fontFamily:BF,textTransform:"uppercase"}}>Remove</button></div></div>}
{!prev&&<div style={{marginBottom:20}}/>}
<div style={{marginBottom:20}}><div style={{fontFamily:BF,fontSize:10,fontWeight:700,color:tc4,letterSpacing:1.5,marginBottom:10,textTransform:"uppercase"}}>Focus Categories</div><div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{TAXONOMY.map(function(t){return <button key={t.id} onClick={function(){togPrinc(t.name);}} style={{padding:"6px 12px",borderRadius:16,fontSize:10,cursor:"pointer",fontFamily:BF,fontWeight:600,background:princ.includes(t.name)?"rgba(129,140,248,0.1)":"rgba(255,255,255,0.02)",border:"1px solid "+(princ.includes(t.name)?"rgba(129,140,248,0.3)":"rgba(255,255,255,0.06)"),color:princ.includes(t.name)?BC:tc4}}>{t.name}</button>;})}</div></div>
<div style={{marginBottom:20}}><div style={{fontFamily:BF,fontSize:10,fontWeight:700,color:tc4,letterSpacing:1.5,marginBottom:10,textTransform:"uppercase"}}>Context</div><textarea value={prm} onChange={function(e){setPrm(e.target.value);}} rows={2} placeholder="Describe the AI features…" style={{width:"100%",padding:"12px 16px",borderRadius:10,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.07)",color:tc1,fontSize:12,fontFamily:BF,lineHeight:1.6,resize:"vertical",outline:"none"}}/></div>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderRadius:10,background:"rgba(255,255,255,0.012)",border:"1px solid rgba(255,255,255,0.05)",marginBottom:20}}><div><div style={{fontSize:12,fontWeight:600,marginBottom:2,fontFamily:BF,color:tc2}}>Allow AI to learn?</div><div style={{fontSize:10,color:tc4,fontFamily:BF}}>Anonymized.</div></div><div style={{display:"flex",gap:6}}>{[true,false].map(function(val){return <button key={String(val)} onClick={function(){setConsent(val);}} style={{padding:"6px 16px",borderRadius:7,cursor:"pointer",fontSize:11,fontWeight:600,fontFamily:BF,background:consent===val?(val?"rgba(52,199,89,0.1)":"rgba(255,45,85,0.1)"):"rgba(255,255,255,0.02)",border:"1px solid "+(consent===val?(val?"rgba(52,199,89,0.3)":"rgba(255,45,85,0.3)"):"rgba(255,255,255,0.07)"),color:consent===val?(val?"#34C759":"#FF2D55"):tc4}}>{val?"Yes":"No"}</button>;})}</div></div>
<button onClick={runAudit} disabled={!img} style={{width:"100%",padding:15,borderRadius:12,border:"none",cursor:img?"pointer":"not-allowed",background:img?"linear-gradient(135deg,"+BC+","+BC2+","+BC3+")":"rgba(255,255,255,0.04)",color:img?"#fff":"rgba(255,255,255,0.5)",fontSize:13,fontWeight:700,fontFamily:BF,letterSpacing:1,textTransform:"uppercase",boxShadow:img?"0 6px 32px rgba(129,140,248,0.25)":"none"}}>{img?"Run AI Design Audit →":"Upload a Screenshot to Begin"}</button>
</div></div>);}

if(scr==="scanning")return <div style={{minHeight:"100vh",background:"#08080C"}}><ScanOverlay progress={prog} phase={phase}/></div>;

return(
<div style={{minHeight:"100vh",background:"#08080C",color:"#fff",fontFamily:BF}}>
<div style={{position:"sticky",top:0,zIndex:100,background:"rgba(8,8,12,0.4)",backdropFilter:"blur(24px) saturate(180%)",WebkitBackdropFilter:"blur(24px) saturate(180%)",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
<div style={{maxWidth:1100,margin:"0 auto",padding:"12px 28px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<div style={{display:"flex",alignItems:"center",gap:4}}>
{[{key:"all",label:"All",icon:"squaresFour",color:"#3B82F6"},{key:"critical",label:"Critical",icon:"shieldWarning",color:"#FF2D55"},{key:"warning",label:"Warning",icon:"warning",color:"#FF9F0A"},{key:"info",label:"Info",icon:"info",color:"#64D2FF"},{key:"passed",label:"Passed",icon:"checkCircle",color:"#34C759"}].map(function(f){var ia=filter===f.key;return(
<button key={f.key} onClick={function(){setFilter(f.key);}} style={{display:"flex",alignItems:"center",gap:6,padding:"7px 14px",borderRadius:8,cursor:"pointer",fontSize:12,fontWeight:ia?700:500,fontFamily:BF,background:ia?"rgba(255,255,255,0.08)":"transparent",border:"none",color:ia?tc1:tc4,transition:"all 0.2s"}}>
<Ic name={f.icon} size={15} color={ia?f.color:tc4}/>
{f.label}
{counts[f.key]>0&&<span style={{fontSize:10,fontFamily:MF,color:ia?f.color:tc4,fontWeight:700}}>{counts[f.key]}</span>}
</button>);})}
</div>
<div style={{display:"flex",alignItems:"center",gap:8}}>
<button onClick={downloadScreenshot} title="Download as PDF" style={{width:34,height:34,borderRadius:8,cursor:"pointer",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center"}}><Ic name="download" size={15} color={tc4}/></button>
<button onClick={function(){shareReport(issues,score);}} title="Share via email" style={{width:34,height:34,borderRadius:8,cursor:"pointer",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center"}}><Ic name="envelope" size={15} color={tc4}/></button>
<button onClick={function(){setScr("upload");setIssues([]);setImg(null);setPrev(null);setCompressed(null);setMsgs([]);setSolved(new Set());setConsent(null);setChatOpen(false);setCatScores({});setFilter("all");setUsedAI(false);setApiError(null);}} style={{display:"flex",alignItems:"center",gap:5,padding:"7px 16px",borderRadius:8,cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:BF,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",color:tc1}}>+ New Audit</button>
</div></div></div>
<div style={{maxWidth:1100,margin:"0 auto",padding:"28px 28px 0"}}>
<div style={{display:"flex",alignItems:"center",gap:28,padding:"24px 28px",borderRadius:16,background:"rgba(255,255,255,0.015)",border:"1px solid rgba(255,255,255,0.06)",marginBottom:24}}>
<ScoreRing score={score} size={110}/>
<div style={{flex:1}}>
<h2 style={{fontSize:24,fontWeight:900,fontFamily:DF,textTransform:"uppercase",letterSpacing:1,marginBottom:6,color:tc1}}>AUDIT COMPLETE</h2>
<div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
<span style={{display:"inline-flex",alignItems:"center",gap:4,padding:"3px 10px",borderRadius:6,fontSize:10,fontWeight:700,fontFamily:BF,background:usedAI?"rgba(52,199,89,0.1)":"rgba(255,159,10,0.1)",border:"1px solid "+(usedAI?"rgba(52,199,89,0.3)":"rgba(255,159,10,0.3)"),color:usedAI?"#34C759":"#FF9F0A"}}>{usedAI?"✓ AI-Powered Audit":"⚠ Demo Data — API call failed"}</span>
</div>
<div style={{fontSize:12,color:tc3,marginBottom:12,fontFamily:BF}}>Scored against 10 weighted categories from 30 actively-maintained sources</div>
<div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
{TAXONOMY.map(function(t){var s=Number(catScores[t.id])||0;var cl=s>=70?"#34C759":s>=45?"#FF9F0A":"#FF2D55";return(
<div key={t.id} style={{display:"flex",alignItems:"center",gap:5,padding:"4px 10px",borderRadius:6,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)"}}>
<span style={{fontFamily:MF,fontSize:10,fontWeight:700,color:cl}}>{s}</span>
<span style={{fontSize:9,color:tc4,fontFamily:BF}}>{t.name.split("&")[0].split("Handling")[0].trim()}</span>
</div>);})}
</div></div>
<div style={{display:"flex",gap:8}}>
{[["critical",counts.critical],["warning",counts.warning],["info",counts.info]].map(function(pair){var k=pair[0],v=pair[1];return(
<div key={k} style={{textAlign:"center",padding:"10px 14px",borderRadius:10,background:SEV[k].a,border:"1px solid "+SEV[k].bdr,minWidth:52}}>
<div style={{fontSize:18,fontWeight:900,color:SEV[k].txt,fontFamily:DF}}>{v||0}</div>
<div style={{fontSize:8,fontWeight:700,color:SEV[k].txt,fontFamily:BF,letterSpacing:0.5,textTransform:"uppercase"}}>{k}</div>
</div>);})}
</div></div></div>
<div style={{maxWidth:1100,margin:"0 auto",padding:"0 28px 100px",display:"flex",flexDirection:"column",gap:12}}>
{apiError&&<div style={{padding:"14px 18px",borderRadius:10,background:"rgba(255,159,10,0.06)",border:"1px solid rgba(255,159,10,0.2)",marginBottom:4}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}><Ic name="warning" size={16} color="#FF9F0A"/><span style={{fontSize:12,fontWeight:700,color:"#FF9F0A",fontFamily:BF}}>API Error — Showing demo data instead</span></div><div style={{fontSize:11,color:tc3,fontFamily:MF,lineHeight:1.6,wordBreak:"break-all",whiteSpace:"pre-wrap"}}>{apiError}</div><div style={{fontSize:11,color:tc4,fontFamily:BF,marginTop:8}}>The results below are generic demo findings, not specific to your screenshot. The Claude API call failed — this is expected when running inside the Claude.ai artifact sandbox. To get real AI-powered audits, deploy this app to a hosted environment with API access.</div></div>}
{filtered.length===0&&<div style={{textAlign:"center",padding:"50px 20px"}}><Ic name="checkCircle" size={40} color="rgba(255,255,255,0.12)"/><div style={{fontSize:14,fontWeight:600,color:tc4,marginTop:12,fontFamily:BF}}>{filter==="passed"?"No resolved findings yet":"No "+filter+" findings"}</div></div>}
{filtered.map(function(issue){return <FindingCard key={issue.id} issue={issue} resolved={solved.has(issue.id)} onToggle={togSolved}/>;})}
</div>
<button onClick={function(){setChatOpen(function(p){return!p;});}} style={{position:"fixed",bottom:24,right:24,width:50,height:50,borderRadius:"50%",background:chatOpen?"rgba(129,140,248,0.15)":"linear-gradient(135deg,"+BC+","+BC2+")",border:chatOpen?"1px solid rgba(129,140,248,0.3)":"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:chatOpen?"none":"0 4px 20px rgba(129,140,248,0.25)",zIndex:1000,transition:"all 0.3s"}}><Ic name="chatDots" size={22} color={chatOpen?BC:"#fff"}/></button>
<AiChat open={chatOpen} onClose={function(){setChatOpen(false);}} onSend={chatSend} msgs={msgs} typing={typing}/>
</div>);}

export default function App(){return <ErrorBoundary><AppInner/></ErrorBoundary>;}

