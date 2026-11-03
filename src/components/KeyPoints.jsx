   import { placeholderPoints } from "../data/pages";

   /** Each item: a large key point with smaller supporting text beneath it. */
   export default function KeyPoints({ points = placeholderPoints() }) {
     return (
       <ul className="space-y-8">
         {points.map((p, i) => (
           <li key={i} className="border-l-4 border-wax pl-5">
             <p className="font-display text-3xl font-semibold leading-snug md:text-4xl">{p.point}</p>
             <p className="mt-2 text-xl leading-relaxed opacity-80 md:text-2xl">{p.sub}</p>
           </li>
         ))}
       </ul>
     );
   }