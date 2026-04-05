export default function SectionTitle({title,subtitle}:{title:string,subtitle?:string}){
 return(
 <div className="section pt-10">
    <h3 className="text-2xl font-bold text-center text-white">
      {title}
      <span className="block w-16 h-1 bg-brand-primary mx-auto mt-2 rounded-full"></span>
    </h3>
    {subtitle && <p className="text-gray-400 text-center mt-3">{subtitle}</p>}
</div>);
}
