import poster1 from '../assets/poster1.jpg';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/poster3.jpg';
import poster4 from '../assets/poster4.jpg';
import poster5 from '../assets/poster5.jpg';
import poster6 from '../assets/poster6.jpg';


export default function Posters() {
  const posters = [poster1, poster2, poster3, poster4, poster5, poster6];

  return (
    <section className="flex overflow-x-auto gap-3 py-3">
      {posters.map((p, i) => (
        <img key={i} src={p}
          alt='{poster- $ {i}}'
          className="min-w-[300px] h-100 object-cover rounded-lg shadow" />
      ))}
    </section>
  );
}