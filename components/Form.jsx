import Link from "next/dist/client/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share your prompt with the world! and let the world see your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        method="post"
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex  flex-col gap-7 glassmorphism"
      >
        <label className="font-satoshi font-semibold text-base text-gray-700">
          <span>Your AI Prompt</span>

          <textarea
            value={post.prompt}
            onChange={(event) =>
              setPost({ ...post, prompt: event.target.value })
            }
            placeholder={"Write your prompt here..."}
            required={true}
            className={"form_textarea"}
          />
        </label>
        <label className="font-satoshi font-semibold text-base text-gray-700">
          <span>
            Tag {` `}
            <span className={"font-normal"}>
              (#product, #webdevelopment, #idea)
            </span>
          </span>

          <input
            value={post.tag}
            onChange={(event) => setPost({ ...post, tag: event.target.value })}
            placeholder={"#tag"}
            required={true}
            className={"form_input"}
          />
        </label>

        <div className={"flex-end mx-3 mb-5 gap-4"}>
          <Link href={"/"} className={"text-gray-500 text-sm"}>
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className={
              "px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            }
          >
            {submitting ? `${type}....` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
