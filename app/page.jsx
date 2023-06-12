import Feed from "@components/Feed";

const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover and Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            AI-Powered Prompts
          </span>
        </h1>

        <p className="desc">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo nec diam blandit, sed ultricies nisl tincidunt. Sed euismod
          justo nec diam blandit, sed ultricies nisl tincidunt. Sed euismod
          justo nec diam blandit, sed ultricies nisl tincidunt. Sed euismod
          justo nec diam blandit, sed ultricies nisl tincidunt. Sed euismod
          justo
        </p>

        <Feed />
      </section>
    </div>
  );
};

export default Home;
