export default function SectionTitle({title,subtitle}:{title:string,subtitle?:string}){
 return(
 <div className="section pt-10">
    <h3 className="text-2xl font-bold text-center">{title}
        </h3>{subtitle&&<p className="text-gray-400 text-center">
            {subtitle}</p>}
</div>);
}
