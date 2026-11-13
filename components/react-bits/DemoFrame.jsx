import './demo.css';
export default function DemoFrame({title,eyebrow='REACT BITS',children,footer=''}){
  return <main className="demo-frame"><header className="demo-header"><span>{eyebrow}</span><h1>{title}</h1></header><section className="demo-content">{children}</section><footer className="demo-footer">{footer}</footer></main>;
}
