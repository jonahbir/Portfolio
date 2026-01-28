export default function ReviewsSection() {
    const reviews = [
      {
        text: `"Yonas  has such impressive problem solving ability. He is one of the exceptional students I encountered in my entire career."`,
        author: "- Mr. Megersa Amenu",
      },
      {
        text: `"I have learned a lot from his insightful speeches. He is more than just a friend."`,
        author: "- Abdi Takele. Close Friend",
      },
      {
        text: `"I believe in Yonas's Leadership and acadamic skills. He will achieve great things! endeed he will!"`,
        author: "- Mrs. Meti Taye, School director ",
      },
      {
        text: `"He is a great Dreamer. I see courage inside him. I hope he will achieve his goals and show his real personality to the world"`,
        author: "- Mrs. Firaol Soboka, Friend ",
      },
    ];
  
    return (
      <section id="reviews" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-3xl font-bold text-teal-400 mb-8 text-center">
            Reviews
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {reviews.map((r) => (
              <div
                key={r.author}
                className="min-w-[260px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 transition-all duration-300"
              >
                <p className="mb-3">{r.text}</p>
                <div className="font-bold">{r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }