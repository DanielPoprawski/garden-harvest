export default function Card({ icon, text }) {
      return (
            <div className="bg-green-800 p-4 flex items-center justify-center flex-col w-[200px] h-[200px] shadow-lg text-white font-bold">
                  <div className="mb-2 text-[48px]">{icon}</div>
                  <div className="text-lg">{text}</div>
            </div>
      );
}
