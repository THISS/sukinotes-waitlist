export function ExampleCard({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md max-w-md">
      <img
        src={imageSrc}
        alt="Example message"
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>
  )
}
