// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";

export interface CommunityAggregates {
  id: number;
  community_id: CommunityId;
  subscribers: /* integer */ number;
  posts: /* integer */ number;
  comments: /* integer */ number;
  published: string;
  users_active_day: /* integer */ number;
  users_active_week: /* integer */ number;
  users_active_month: /* integer */ number;
  users_active_half_year: /* integer */ number;
  hot_rank: number;
}
