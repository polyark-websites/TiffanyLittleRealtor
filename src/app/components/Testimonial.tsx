export default function Testimonial({ text, name }: { text: string, name: string }) {
  return (
    <div className="border border-2 border-primary-light rounded p-3 pl-5 pr-5">
        <p className="italic pb-2">"{text}"</p>
        <p className="flex justify-end font-[600]">- {name}</p>
    </div>
  )
}
