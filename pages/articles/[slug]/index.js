import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";
import { getById } from "../../../libs/fetcher/usePost";
import {
  actionNotif,
  actionPosts,
  useAuth,
  useComments,
  useUser,
} from "../../api";
import parse from "html-react-parser";

const ArticleDetail = () => {
  const { slug } = useRouter().query;
  const router = useRouter();
  const { auth, loggedOut, mutateAuth, loadingAuth } = useAuth();
  const { data: post, mutate: mutateById } = useSWR(
    `${process.env.api_url}/posts/${slug}?user_id=${auth?.data?.id}`,
    getById
  );
  const { data: user } = useUser({
    id: auth?.data?.id,
    token: auth?.data?.token,
  });
  const { comments, mutateComment } = useComments(post?.id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!loadingAuth && loggedOut) router.replace("/");
  }, [auth, loadingAuth]);

  // console.log(post, 'dataaaaaa')

  const submitComments = (data) => {
    let formData = {
      user_id: auth?.data?.id,
      post_id: post?.id,
      text: data?.text,
    };

    mutateComment(actionPosts.addComment(formData, auth?.data?.token, reset));
    if (auth?.data?.id != post?.user_id) {
      actionNotif.pushNotif({
        from: auth?.data?.id,
        user_id: post?.user_id,
        post_id: post?.id,
        type: "comment",
        message: "sent you a comment",
      });

      const users = post?.user_id;
      actionNotif.pusherPushUsers({
        users: [users],
        title: "JustNews",
        body: `@${
          user?.username || "anonymous"
        } send you a comment in your post`,
        link: `${process.env.origin}/articles/${post?.slug}`,
      });
    }
  };

  return (
    <>
      <Navigation />
      <section className="px-5 mt-5 article-detail-head">
        <div className="px-5 mt-5 d-flex justify-content-between">
          <div className="d-flex" onClick={() => router.back()}>
            <img src="/icons/back.svg" alt="back" />
            <p className="ms-3 pt-3">Back</p>
          </div>
          <p className="pt-3">Article Viewer</p>
          <p></p>
        </div>
      </section>

      {post && (
        <>
          <section className="px-5 mt-5">
            <Row className="align-items-center">
              <Col xs={12} md={6} className="mt-3">
                <img
                  className="article-cover"
                  src={`${process.env.img_url}${post?.cover} `}
                  alt=""
                />
              </Col>
              <Col xs={12} md={6} className="mt-3">
                <h3>{post?.title}</h3>
                <p className="mt-5 mb-0">{post?.author} - Author</p>
                <small className="text-muted mt-0">
                  {moment(`${post?.publish_at} `, "YYYYMMDD").format(
                    "dddd, MMM Do YYYY"
                  )}
                </small>
                <div className="d-flex mt-3">
                  <div className="d-flex justify-content-start align-items-center">
                    <img src="/icons/likes.svg" alt="likes" />
                    <p className="mx-3 pt-3">{post?.like}</p>
                  </div>
                  <img
                    width="24px"
                    src="/icons/Bookmark-white.svg"
                    alt="save"
                  />
                </div>
                <Button variant="dark" className="w-100 py-4 radius mt-3">
                  Share Article Link
                </Button>
              </Col>
            </Row>
          </section>

          <section className="px-5 mt-3 article-text">
            {parse(post?.text)}
            {/* <ReactMarkdown children={post?.text} /> */}
          </section>
        </>
      )}

      <section className="px-5 mt-5 comment">
        <h6>Comments</h6>
        <Row>
          <Col xs={12} md={10}>
            <div className="d-flex align-items-center w-100 mt-3 form-add-comment">
              <div>
                <img
                  width="55px"
                  height="55px"
                  src={
                    user?.photo
                      ? `${process.env.img_url}${user?.photo}`
                      : "/images/profile-photo.png"
                  }
                  alt=""
                  className="rounded-2"
                />
              </div>
              <div className="mx-3 w-100">
                <p className="p-0">You</p>
                <div className="d-flex justify-content-start align-items-center w-100">
                  <Form
                    className="p-0 w-100"
                    onSubmit={handleSubmit(submitComments)}
                  >
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        placeholder="Insert a comment"
                        as="textarea"
                        rows={1}
                        className="comment-form"
                        {...register("text")}
                      />
                    </Form.Group>
                  </Form>
                  <p className="mx-3" onClick={handleSubmit(submitComments)}>
                    Submit
                  </p>
                </div>
              </div>
            </div>
            {comments &&
              comments?.map((item) => {
                return (
                  <>
                    <div className="d-flex align-items-center w-100 mt-3">
                      <div>
                        <img
                          width="55px"
                          height="55px"
                          src={
                            item?.photo
                              ? `${process.env.img_url}${item?.photo}`
                              : "/images/profile-photo.png"
                          }
                          alt=""
                          className="rounded-2"
                        />
                      </div>
                      <div className="mx-3 w-100">
                        <p className="p-0">
                          {item?.user_id === user?.id
                            ? "You"
                            : item?.username || item?.phone}{" "}
                          - {moment(item?.created_at).fromNow()}
                        </p>
                        <p>{item?.text}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            <p className="text-muted mt-4 mb-5">No comment left</p>
          </Col>
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default ArticleDetail;
