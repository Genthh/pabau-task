import gql from "graphql-tag";

export const GET_SPACE_MISSON = gql`
  query GetSpaceMission($limit: Int!) {
    launchesPast(limit: $limit) {
      mission_name
      launch_site {
        site_name_long
      }
      id
      details
      launch_success
      launch_year
      rocket {
        rocket_name
      }
      ships {
        image
      }
    }
  }
`;

export const GET_SPACE_LAUNCH = gql`
  query GetSpaceLaunch($id: ID!) {
    launch(id: $id) {
      mission_name
      id
      is_tentative
      launch_date_local
      launch_date_unix
      launch_date_utc
      details
      launch_site {
        site_id
        site_name
        site_name_long
      }
      launch_success
      launch_year
      ships {
        image
      }
      links {
        article_link
        flickr_images
        mission_patch
        mission_patch_small
        presskit
        reddit_campaign
        reddit_launch
        reddit_recovery
        reddit_media
        video_link
        wikipedia
      }
      mission_id
      static_fire_date_unix
      static_fire_date_utc
      telemetry {
        flight_club
      }
      tentative_max_precision
      upcoming
    }
  }
`;
