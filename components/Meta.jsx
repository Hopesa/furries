import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>{title}Furs.id | Indonesia Furs</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Furs.id | Indonesia Furs",
  keyword:
    ".",
};

export default Meta;
