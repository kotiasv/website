// Lanyard Types for WebSocket messages and Presence. Presence is not accurate.

export type lanyardWS = {
  op: 1,
  d: {
    heartbeat_interval: number
  }
} | {
  op: 0,
  d: LanyardPresence,
  t: "INIT_STATE" | "PRESENCE_UPDATE"
}

export type LanyardPresence = {
  active_on_discord_desktop: boolean
  active_on_discord_mobile: boolean
  active_on_discord_web: boolean
  activities: LanyardActivity[]
  discord_status: "online" | "dnd" | "idle" | "offline"
  discord_user: LanyardUser
  kv: Record<string, string>
} & LanyardSpotify

export type LanyardActivity = {
  application_id: string
  assets: unknown
  buttons?: string[]
  created_at: number
  details: string
  id: string
  name: string
  session_id: string
  state: string
  timestamps: {
    start: string
    end?: string
  }
  type: number
}

export type LanyardUser = {
  avatar: string
  avatar_decoration_data: unknown
  bot: boolean
  clan: unknown
  discriminator: string
  display_name: string
  global_name: string
  id: string
  public_flags: number
  username: string
}

export type LanyardSpotify = {
  listening_to_spotify: false
  spotify: null
} | {
  listening_to_spotify: true
  spotify: {
    track_id: string
    timestamps: {
      start: number
      end: number
    }
    song: string
    artist: string
    album_art_url: string
    album: string
  }
}