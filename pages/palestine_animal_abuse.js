import React, {useState, useEffect, useCallback} from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Modal, { ModalLink } from "@/components/modal/Modal";
import { useRouter } from "next/router";
import ArticleLink from "@/components/typography/ArticleLink";

export default function PalestineAnimalAbuse(props) {
  const [warningModalOpen, setWarningModalOpen] = useState(false);
  const router = useRouter();

  const openModal = useCallback(() => {
    setWarningModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setWarningModalOpen(false);
  }, []);

  useEffect(() => {
    openModal();
  }, []);

  return (
    <Template>
      <H1 className="mt-6">Palestine Animal Abuse</H1>
      <SubHeader className="mb-5">
        Palestinians are known for brutally abusing animals, and especially
        dogs. This attests to the level of violence and cruelty in their
        society.
      </SubHeader>
      <H2 className="mt-6 mb-3">Videos</H2>

      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1726053887323292060" />
      <Tweet tweetId="1726044133347754329" />
      <H2 className="mt-7 mb-3">Articles</H2>
      <ArticleLink
        title="Palestinian mayor offers bounty to residents who kill stray dogs"
        href="https://nypost.com/2022/11/05/palestinian-mayor-offers-bounty-to-residents-who-kill-stray-dogs/"
        source="New York Post"
      />
      <Modal
        isOpen={warningModalOpen}
        openModal={openModal}
        closeModal={closeModal}
        primaryText="I understand"
        secondaryText="Go Back"
        primaryAction={closeModal}
        secondaryAction={() => router.push("/")}
      >
        <h1 className="text-3xl md:text-5xl font-bold">Warning!</h1>
        <p className="md:text-xl text-slate-500 mt-4">
          This page contains Graphic description and imagery, including extreme
          violance and death. Viewer discresion advised.
        </p>
      </Modal>
    </Template>
  );
}
