export function SubscriptionAdvantages() {
  return (
    <div>
      <h2 className="text-[30px] font-semibold mb-4 text-center">
        Myluck-abonnementet er
      </h2>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="bg-[url('/subscription/1.jpg')] bg-cover flex flex-col justify-between w-full aspect-square bg-gray-50 rounded-3xl p-4 text-white">
          <div className="self-start text-[20px] font-semibold">
            200+ unike treningsøkter
          </div>
          <div className="self-end text-[20px] font-semibold text-right">
            hjemme og treningssenter
          </div>
        </div>

        <div className="bg-[url('/subscription/2.jpg')] bg-cover p-4 bg-gray-50 w-full aspect-square rounded-3xl">
          <p className="text-[20px] font-semibold">
            Mila som en coach i lommen din
          </p>
        </div>

        <div className="bg-[url('/subscription/3.jpg')] bg-cover flex justify-center items-center p-4 bg-gray-50 w-full aspect-square rounded-3xl">
          <p className="text-[20px] text-center font-semibold text-white">
            Skreddersydd kostholdsplan basert på dine mål.
          </p>
        </div>

        <div className="bg-[url('/subscription/4.png')] bg-cover p-4 bg-gray-50 w-full aspect-square rounded-3xl">
          <p className="font-semibold">200+ av Mila sine egene oppskrifter</p>
        </div>

        <div className="bg-[url('/subscription/5.png')] bg-cover p-4 bg-gray-50 w-full aspect-square rounded-3xl">
          <p className="font-semibold">
            Direktesendinger og spørsmålsrunder med Mila
          </p>
        </div>

        <div className="bg-[url('/subscription/6.jpg')] bg-cover flex justify-center items-center p-4 bg-gray-50 w-full aspect-square rounded-3xl">
          <p className="font-semibold text-center text-white">
            Tilgang til Transformasjons- Marathons
          </p>
        </div>
      </div>
    </div>
  )
}
