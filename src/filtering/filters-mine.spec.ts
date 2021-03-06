import { PullRequest } from "../storage/loaded-state";
import { NOTHING_MUTED } from "../storage/mute-configuration";
import { Filter, filterPredicate } from "./filters";

const DUMMY_PR: PullRequest = {
  author: {
    login: "fwouts",
    avatarUrl: "http://url"
  },
  repoOwner: "zenclabs",
  repoName: "prmonitor",
  pullRequestNumber: 1,
  title: "Dummy PR",
  updatedAt: "5 May 2019",
  htmlUrl: "https://github.com/zenclabs/prmonitor/pull/1",
  nodeId: "fake",
  requestedReviewers: [],
  reviews: [],
  comments: []
};

describe("filters (reviewed)", () => {
  it("is true for the user's own PRs", () => {
    expect(
      filterPredicate("fwouts", NOTHING_MUTED, Filter.MINE)({
        ...DUMMY_PR,
        requestedReviewers: ["fwouts"]
      })
    ).toBe(true);
  });
  it("is false for other PRs", () => {
    expect(
      filterPredicate("kevin", NOTHING_MUTED, Filter.MINE)({
        ...DUMMY_PR,
        requestedReviewers: ["fwouts"]
      })
    ).toBe(false);
  });
});
