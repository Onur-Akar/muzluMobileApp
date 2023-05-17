export const environment = {
    base_path: 'https://localhost/rest/v1/api',

    // Authorization Requests //
    login: '/login',
    register: '/register',


    // Event Requests //
    affiliate_events: '/event/list/affiliate',
    affiliate_event: '/event/get/affiliate',
    user_events: '/event/list/users',
    user_event: '/event/get',
    my_events: '/event/myEvents',
    invite_event: '/event/invite',
    response_invite: '/event/invite/response/',
    create_event: '/event/create',
    close_event: '/event/close',
    event_photo: '/event/uploadPhoto',

    // HashTag Requests //
    trend_daily: '/trend/daily',

    // Mood Requests //
    all_mood: '/mood/get/muzlu',
    user_mood: '/mood/get/user',
    active_mood: '/mood/get/actives',

    // Page Requests //
    get_pages: '/page/list',
    page_follow: '/page/follow',
    get_page: '/page/get',
    create_page: '/page/create',
    update_page: '/page/update',
    cover_photo: '/page/update/coverPhoto',
    profile_photo: '/page/update/profilePhoto',
    page_feed: '/page/feed',
    post_for_page: '/page/post/create',
    page_post_like: '/page/post/like',
    page_post_comment: 'page/post/comment/',
    page_post_share: '/page/post/share',
    page_post: '/page/post/get',
    load_comments_page: '/page/post/get/comments',

    // Post Requests //
    get_feed: '/post/get/feed',
    get_post: '/post/get/feed',
    create_post: '/post/create',
    delete_post: '/post/delete',
    like_post: '/post/like',
    comment_like: '/post/comment/like',
    comment_post_create: '/post/comment/create',
    comment_post_delete: '/post/comment/delete',
    post_share: '/post/share',
    post_with_details: '/post/get',
    load_comments: '/post/get/comments',
    post_likes: '/post/get/likes',

    // Search Requests //
    search_user: '/search/user',

    // Shop Requests //
    get_products: '/shop/list',
    get_product: '/shop/get',
    buy_product: '/shop/buy',
    target_product: '/shop/target',

    // Task Requests //
    get_tasks: '/task/list',
    get_task: '/task/get',
    join_task: '/task/join',
    complete_task_code: '/task/complete',
    complete_task_upload: '/task/complete/file',
    complete_task_survey: '/task/complete/survey',
    completed_task: '/task/get/completed',
    task_for_user: '/task/get/continuing',

    // User Requests //
    from_username: '/user/getFromUsername',
    from_userid: '/user/getFromUserId',
    profile_update: '/user/update/profile',
    profile_details_update: '/user/update/profileDetails',
    change_password: '/user/update/password',
    follow_unfollow: '/api/user/follow',
    user_feed: '/user/get/feed',
    change_cover_photo: '/user/update/coverPhoto',
    change_profile_photo: '/user/update/profilePhoto',
    get_followers: '/user/list/followers',
    get_follows: '/user/list/follows',
    follow_requests: '/user/list/requests',
    response_request: '/user/post/requestResponse',
    get_notifications: '/user/get/notifications',
    muz_transactions: '/user/get/muzTransactions',
    muz_count: '/user/get/muzCount',
    read_notification: '/user/post/notificationRead'
}
