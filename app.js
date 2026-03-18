( () => {
    var e = {
        1361: (e, t, o) => {
            "use strict";
            o.r(t),
            o.d(t, {
                changePassword: () => f,
                checkDeviceRequest: () => A,
                confirmForgotPassword: () => h,
                fetchBalance: () => v,
                fetchLinkDevices: () => S,
                fetchProfile: () => E,
                fetchSubscriptions: () => T,
                fetchUserCollege: () => C,
                forgotPasswordOtp: () => p,
                getAgentBalance: () => d,
                isDeviceLinked: () => D,
                landingRedirect: () => P,
                logout: () => w,
                resendOtp: () => l,
                setAccessToken: () => _,
                socialLogin: () => m,
                submitLogin: () => i,
                submitMobileLogin: () => c,
                submitRegister: () => u,
                updateAddress: () => y,
                updateCompleteProfile: () => b,
                updateProfile: () => I,
                updateStoreProfile: () => k,
                userLocation: () => x,
                verifyOtpAndLogin: () => r,
                verifyOtpToken: () => g
            });
            var a = o(80660)
              , n = o(71271)
              , s = o(63345);
            function i(e, t) {
                let o = new s.ClientJS
                  , n = {
                    username: t.username,
                    password: t.password
                };
                const i = new Promise((function(t, s) {
                    return a.axiosInstance.post("/login", n, {
                        headers: {
                            fingerprint: o.getFingerprint()
                        }
                    }).then((o => {
                        const n = o.data.data.token
                          , s = o.data.data.token;
                        a.axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + n,
                        e.dispatch("setAccessToken", {
                            token: n,
                            refresh_token: s
                        }),
                        t(o)
                    }
                    )).catch((e => {
                        s(e)
                    }
                    ))
                }
                ));
                return i
            }
            function c(e, t) {
                let o = new s.ClientJS;
                console.log(t, "data");
                const n = "" == t.is_register ? "v3/mobile-login" : "v3/register"
                  , i = new Promise((function(s, i) {
                    return a.axiosInstance.post(n, t, {
                        headers: {
                            fingerprint: o.getFingerprint(),
                            os: o.getOS(),
                            version: o.getOSVersion()
                        }
                    }).then((t => {
                        const o = t.data.data.token;
                        o && (a.axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + o,
                        e.dispatch("setAccessToken", {
                            token: o,
                            refresh_token: o
                        })),
                        s(t.data.data)
                    }
                    )).catch((e => {
                        i(e)
                    }
                    ))
                }
                ));
                return i
            }
            function r(e, t) {
                let o = new s.ClientJS;
                return new Promise((function(n, s) {
                    return a.axiosInstance.post("v3/verify-otp-and-login", t, {
                        headers: {
                            fingerprint: o.getFingerprint()
                        }
                    }).then((t => {
                        const o = t.data.data.token;
                        o && (a.axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + o,
                        e.dispatch("setAccessToken", {
                            token: o,
                            refresh_token: o
                        })),
                        n(t.data.data)
                    }
                    )).catch((e => {
                        s(e)
                    }
                    ))
                }
                ))
            }
            function m(e, t) {
                const o = t.access_token
                  , n = t.refresh_token;
                a.axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + o,
                e.dispatch("setAccessToken", {
                    token: o,
                    refresh_token: n
                })
            }
            function u(e, t) {
                const o = new Promise((function(e, o) {
                    return a.axiosInstance.post("/register", t).then((t => {
                        e(t)
                    }
                    )).catch((e => {
                        o(e.response)
                    }
                    ))
                }
                ));
                return o
            }
            function d({commit: e, state: t}, o) {
                const n = new Promise((function(n, s) {
                    return a.axiosInstance.get("/agent/get-balance", o).then((o => {
                        if (t.currentUser) {
                            const a = t.currentUser;
                            a.agent_balance = o?.data?.data ?? 0,
                            e("setCurrentUser", a),
                            n(o)
                        }
                    }
                    )).catch((e => {
                        s(e.response)
                    }
                    ))
                }
                ));
                return n
            }
            function l(e, t) {
                const o = new Promise((function(e, o) {
                    return a.axiosInstance.post("/reset-otp", t).then((t => {
                        e(t)
                    }
                    )).catch((e => {
                        o(e.response)
                    }
                    ))
                }
                ));
                return o
            }
            function p(e, t) {
                const o = new Promise((function(e, o) {
                    return a.axiosInstance.post("/forgot-password", t).then((t => {
                        e(t)
                    }
                    )).catch((e => {
                        o(e.response)
                    }
                    ))
                }
                ));
                return o
            }
            function h(e, t) {
                const o = new Promise((function(e, o) {
                    return a.axiosInstance.post("/reset-forgot-password", t).then((t => {
                        e(t)
                    }
                    )).catch((e => {
                        o(e.response)
                    }
                    ))
                }
                ));
                return o
            }
            function g(e, t) {
                const o = new Promise((function(o, n) {
                    return a.axiosInstance.post("/verify-otp-and-change-password", t).then((t => {
                        const n = t.data.data.token
                          , s = t.data.token;
                        a.axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + n,
                        a.axiosInstance.defaults.headers["Authorization"] = "Bearer " + n,
                        e.dispatch("setAccessToken", {
                            token: n,
                            refresh_token: s
                        }),
                        o(t)
                    }
                    )).catch((e => {
                        n(e)
                    }
                    ))
                }
                ));
                return o
            }
            function _(e, t) {
                n.A.set("access_token", t.token),
                n.A.set("refresh_token", t.refresh_token)
            }
            async function E({commit: e, state: t}) {
                var o = n.A.getItem("access_token");
                if (o) {
                    const o = t.currentUser;
                    return o ? {
                        status: 200,
                        data: {
                            data: o
                        }
                    } : a.axiosInstance.get("/profile-v2").then((t => {
                        var o = t.data.data;
                        return o.linked_devices = [],
                        e("setCurrentUser", o),
                        t
                    }
                    ))
                }
            }
            async function S({commit: e, state: t}) {
                return a.axiosInstance.get("/linked-devices/fetch").then((o => {
                    if (t.currentUser) {
                        const a = t.currentUser;
                        a.linked_devices = o?.data?.data ?? [],
                        e("setCurrentUser", a)
                    }
                    return o
                }
                ))
            }
            async function v({commit: e, state: t}) {
                return a.axiosInstance.get("/get-balance").then((o => {
                    if (t.currentUser) {
                        const a = t.currentUser;
                        return a.balance = o?.data?.data ?? 0,
                        a.account_balance = o?.data?.data ?? 0,
                        e("setCurrentUser", a),
                        o
                    }
                }
                ))
            }
            async function C({commit: e, state: t}) {
                return a.axiosInstance.get("/my-college").then((o => {
                    if (t.currentUser) {
                        const a = t.currentUser;
                        return a.college = o?.data?.data ?? {},
                        e("setCurrentUser", a),
                        console.log(t.currentUser, "current user"),
                        o
                    }
                }
                ))
            }
            async function T({commit: e, state: t}) {
                return a.axiosInstance.get("/subscribed-package-data-v2").then((o => {
                    if (t.currentUser && o?.data?.data) {
                        const a = {
                            ...t.currentUser,
                            ...o.data.data
                        };
                        e("setCurrentUser", a)
                    }
                    return o
                }
                ))
            }
            async function I({commit: e, state: t}, o) {
                return new Promise(( (t, n) => {
                    a.axiosInstance.post("/update-profile", o).then((o => {
                        o = o.data.data,
                        t(o),
                        e("setCurrentUser", o)
                    }
                    )).catch((e => {
                        n(e)
                    }
                    ))
                }
                ))
            }
            async function f({commit: e, state: t}, o) {
                return new Promise(( (e, t) => {
                    a.axiosInstance.post("/change-password", o).then((t => {
                        t = t.data.data,
                        e(t)
                    }
                    ))
                }
                ))
            }
            async function P({commit: e, state: t}, o) {
                return new Promise(( (e, t) => {
                    a.axiosInstance.get("/landing-page").then((t => {
                        t = t.data.data,
                        e(t)
                    }
                    )).catch((e => {
                        t(e)
                    }
                    ))
                }
                ))
            }
            function w(e) {
                a.axiosInstance.post("/logout").then(( () => {
                    n.A.remove("access_token"),
                    n.A.remove("refresh_token"),
                    n.A.remove("fingerprint"),
                    n.A.remove("course_selection_skipped"),
                    n.A.remove("ag_device_fingerprint"),
                    n.A.remove("ambition-guru-health-checkup-skipped")
                }
                )).finally(( () => {
                    window.location.reload("/"),
                    e.commit("setCurrentUser", null)
                }
                ))
            }
            function A(e) {
                a.axiosInstance.post("device-request/check-device-request").then((t => {
                    e.commit("setDeviceRequestedStatus", t.data.data)
                }
                )).catch((e => {}
                ))
            }
            async function y({commit: e, state: t}, o) {
                return new Promise(( (t, n) => {
                    a.axiosInstance.post("/update-address", o).then((o => {
                        o = o.data.data,
                        t(o),
                        e("setCurrentUser", o)
                    }
                    )).catch((e => {
                        n(e)
                    }
                    ))
                }
                ))
            }
            async function b({commit: e, state: t}, o) {
                return new Promise(( (t, n) => {
                    a.axiosInstance.post("/complete-profile", o).then((o => {
                        o = o.data.data,
                        t(o),
                        e("setCurrentUser", o)
                    }
                    )).catch((e => {
                        n(e)
                    }
                    ))
                }
                ))
            }
            async function k({commit: e, state: t}, o) {
                return new Promise(( (e, t) => {
                    a.axiosInstance.post("/update-agent-store", o).then((t => {
                        t = t.data.data,
                        e(t)
                    }
                    )).catch((e => {
                        t(e)
                    }
                    ))
                }
                ))
            }
            async function x({commit: e, state: t}, o) {
                return new Promise(( (e, t) => {
                    a.axiosInstance.get("/user-location", o).then((t => {
                        t = t.data.data,
                        e(t)
                    }
                    )).catch((e => {
                        t(e)
                    }
                    ))
                }
                ))
            }
            async function D({commit: e, state: t}) {
                return new Promise(( (t, o) => {
                    a.axiosInstance.get("/is-device-linked").then((o => {
                        o = o.data.data,
                        t(o),
                        e("setCurrentUser", o)
                    }
                    )).catch((e => {
                        o(e)
                    }
                    ))
                }
                ))
            }
        }
        ,
        4331: () => {}
        ,
        22778: (e, t, o) => {
            "use strict";
            o.r(t),
            o.d(t, {
                currentUser: () => n,
                mobileLinkedDevices: () => r,
                modelData: () => a,
                userTotalDeviceLimit: () => s,
                userWebDeviceLimit: () => i,
                webLinkedDevices: () => c
            });
            o(50310),
            o(5962),
            o(92802);
            function a(e) {
                return e.modelData
            }
            function n(e) {
                return e.currentUser
            }
            function s(e) {
                const t = Object.values(e.currentUser.device_limit);
                return t.reduce(( (e, t) => parseInt(e) + parseInt(t)), 0)
            }
            function i(e) {
                return parseInt(e.currentUser.device_limit.web)
            }
            function c(e) {
                return e.currentUser.linked_devices.filter((e => "web" === e.device_type))
            }
            function r(e) {
                return e.currentUser.linked_devices.filter((e => "mobile" === e.device_type))
            }
        }
        ,
        23453: (e, t, o) => {
            "use strict";
            o.d(t, {
                A: () => c
            });
            var a = o(80660);
            const n = {
                loading: !0,
                resources: [],
                resourceCategories: [],
                activeResourceCategory: null,
                currentResources: null
            }
              , s = {
                fetchResources({commit: e}, t) {
                    return new Promise(( (t, o) => {
                        e("SET_LOADING", !0),
                        a.axiosInstance.post("/resources/get-all").then((o => {
                            o = o.data.data.data,
                            e("SET_RESOURCES", o),
                            t(o)
                        }
                        )).catch((t => {
                            e("SET_LOADING", !1),
                            console.log(t)
                        }
                        ))
                    }
                    ))
                },
                fetchPodcast({commit: e}, t) {
                    return new Promise(( (t, o) => {
                        e("SET_LOADING", !0),
                        a.axiosInstance.post("/resources/get-all/podcast").then((e => {
                            e = e.data.data.data,
                            t(e)
                        }
                        )).catch((t => {
                            e("SET_LOADING", !1),
                            console.log(t)
                        }
                        ))
                    }
                    ))
                },
                fetchResourceCategories({commit: e}, t) {
                    return new Promise(( (t, o) => {
                        e("SET_LOADING", !0),
                        a.axiosInstance.post("resources/get-all-categories").then((o => {
                            o = o.data.data,
                            e("SET_RESOURCE_CATEGORIES", o),
                            t(o)
                        }
                        )).catch((t => {
                            e("SET_LOADING", !1),
                            console.log(t)
                        }
                        ))
                    }
                    ))
                },
                fetchResourcesFromCategory({commit: e}, t) {
                    return new Promise(( (o, n) => {
                        e("SET_LOADING", !0),
                        a.axiosInstance.get(`/resources/resources-from-categories/${t}`).then((t => {
                            t = t.data.data,
                            e("SET_CURRENT_RESOURCES", t),
                            o(t)
                        }
                        )).catch((t => {
                            e("SET_LOADING", !1),
                            console.log(t)
                        }
                        ))
                    }
                    ))
                }
            }
              , i = {
                SET_LOADING(e, t) {
                    e.loading = t
                },
                SET_RESOURCES(e, t) {
                    e.resources = t,
                    e.loading = !1
                },
                SET_CURRENT_RESOURCE(e, t) {
                    e.currentResource = t,
                    e.loading = !1
                },
                SET_RESOURCE_CATEGORIES(e, t) {
                    e.resourceCategories = t,
                    e.loading = !1
                },
                SET_ACTIVE_RESOURCE_CATEGORY(e, t) {
                    e.activeResourceCategory = t,
                    e.loading = !1
                },
                SET_CURRENT_RESOURCES(e, t) {
                    e.currentResources = t,
                    e.loading = !1
                }
            }
              , c = {
                namespaced: !0,
                state: n,
                actions: s,
                mutations: i
            }
        }
        ,
        32965: (e, t, o) => {
            "use strict";
            o.r(t),
            o.d(t, {
                default: () => c,
                laravelEcho: () => i
            });
            var a = o(1573)
              , n = o(3209)
              , s = o(71271);
            window.Pusher = o(29768);
            const i = new n.Ay({
                broadcaster: "pusher",
                key: "app-key",
                wsHost: "wss.ambition.guru",
                wsPort: "443",
                wssPort: "443",
                forceTLS: !0,
                encrypted: !0,
                enableLogging: !0,
                enabledTransports: ["ws", "wss"],
                auth: {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + s.A.getItem("access_token")
                    }
                },
                authEndpoint: "https://api.ambition.guru/broadcasting/auth"
            });
            i.connector.options.retryDelay = 5e3,
            i.connector.options.maxRetries = 10;
            const c = (0,
            a.zj)(( ({app: e}) => {
                e.config.globalProperties.$soketi = i
            }
            ))
        }
        ,
        38670: (e, t, o) => {
            "use strict";
            o.r(t),
            o.d(t, {
                default: () => u
            });
            var a = o(1573)
              , n = o(23537);
            const s = {
                failed: "Action failed",
                success: "Action was successful",
                app: {
                    title: "Ambition Guru"
                },
                label: {
                    agent: {
                        dashboard: "Dashboard",
                        terms: "Terms & Condition",
                        privacy: "Privacy Policy",
                        sell: "Courses",
                        account: "Transaction",
                        profit: "Profit Earned",
                        profile: "Profile",
                        student: "Student",
                        student_history: "Student History",
                        discount: "Discount Status",
                        resources: "Resources",
                        activity: "Activity Log"
                    },
                    currency: "Rs",
                    withdraw: "Withdraw",
                    mobile_number: "Mobile Number",
                    proceed: "Proceed",
                    have_a_token: "Already Have a token?",
                    go_to_home: "Go to Home?",
                    token: "Token",
                    resend: "Resend",
                    reset_password: "Reset Password",
                    forgot_password: "Forgot Password ?",
                    login: "Login",
                    username: "Mobile Number",
                    password: "Password",
                    dashboard: "Dashboard",
                    report_card: "Report Card",
                    for_you: "For You",
                    videos: "Videos",
                    audios: "Audios",
                    study: "Study",
                    feed: " Feed",
                    test: "Test",
                    notes: "Notes",
                    resources: "Resources",
                    gurus: "Gurus",
                    ask: "Ask",
                    forum: "Forum",
                    free_videos: "Free Videos",
                    live_class: "Live Class",
                    today_live_class: "Today's Live Class",
                    recorded_live_class: "Recorded Live class",
                    video_lectures: "Videos",
                    saved_contents: "Saved Contents",
                    refer_earn: "Refer and Earn",
                    browse_course: "Browse Course",
                    ag_agent: "Be Our AG Store",
                    ebook: "E-Book",
                    search: "Search",
                    profile: "Profile",
                    my_courses: "My Courses",
                    linked_devices: "Linked Devices",
                    activity_log: "Activity Log",
                    events: "Events",
                    logout: "Logout",
                    notifications: "Notification",
                    new: "New",
                    history: "History",
                    mark_all_read: "Mark all as Read",
                    support: "Support",
                    blog: "Blog",
                    privacy_policy: "Privacy Policy",
                    terms_condition: "Terms & Condition",
                    view_details: "View Details",
                    unit: "Unit",
                    report: "Report",
                    questions: "Questions",
                    question: "Question",
                    suggested_notes_for_you: "Suggested Notes For You",
                    suggested_videos_for_you: "Suggested Videos For You",
                    suggested_practice_for_you: "Suggested Practice For You",
                    syllabus_contents: "Lesson",
                    test_yourself: "Test Yourself",
                    upcomming_mock_tests: "Upcoming Mock Tests",
                    missed_mock_tests: "Missed Mock Tests",
                    mock_test: "Mock Test",
                    quick_practice: "Quick Practice",
                    chapter_wise_test: "Chapter Wise Test",
                    incorrect_attempt: "Incorrect Attempt",
                    incorrect_attempt_desc: "Based on your wrong attempted questions",
                    chapter_wise_test_desc: "Practice from subject, unit or chapter of your choice",
                    quick_practice_label: "Based on your previous studies.",
                    test_me: "Test Me",
                    test_me_label: "Know yourself in completed chapters",
                    challenge_questions: "Hard Questions",
                    hard_questions_label: "Are you up to challenge yourself ?",
                    top_questions: "Top Questions",
                    top_questions_label: "Let's take you to next level",
                    custom: "Custom",
                    custom_label: "Practice from subject ,unit or chapter of your choice",
                    start: "Start",
                    continue_reading: "Continue Reading",
                    daily_quiz: "Daily Quiz",
                    see_all_chat: "See All Chat",
                    search_by_mobile_number: "Search by mobile number",
                    free_contents: "Free Contents",
                    ratings: "Ratings",
                    like: "Like",
                    comment: "Comment",
                    add_comment: "Add Comment",
                    share: "Share",
                    save: "Save",
                    saved: "Saved",
                    practice: "Practice",
                    settings: "Settings",
                    discussions: "Discussions",
                    comment: "Comment",
                    text_size: "Text Size",
                    background_color: "Background Color",
                    font_family: "Font Family",
                    click_here_to_minimize: "Click Here To Minimize",
                    click_here_to_expand: "Click Here To Expand",
                    title: "Title",
                    enter_title: "Enter Title",
                    enter_comment: "Enter Comment",
                    cancel: "Cancel",
                    submit: "Submit",
                    submitting: "Submitting",
                    general_instructions: "General Instructions",
                    practice_instructions: "<ol>\n                  <li>Students should have a stable internet connection.</li>\n                  <li>\n                    Students can continue the same practice until the practice\n                    is submitted.\n                  </li>\n                  <li>\n\n                    Students should submit the exam within the provided time\n                    duration.\n                  </li>\n                  <li>\n                    During the practice/exam students can choose answers\n                    multiple times.\n                  </li>\n                  <li>\n                    Your performance is calculated depending on factors like\n                    total time taken, attempted questions and so on.\n                  </li>\n                </ol>",
                    all_discussion: "All Discussion",
                    popular_discussion: "Popular Discussion",
                    popular_this_week: "Trending",
                    my_participation: "My Participation",
                    reply: "Reply",
                    view_content: "View Content",
                    live_session: "Live Session",
                    more_live_classes: "More Live Classes",
                    all: "All",
                    free_courses: "Free Courses",
                    paid_courses: "Paid Courses",
                    continue_course: "Continue Course",
                    have_a_promo_code: "Have a promo code?",
                    buy_now: "Buy Now",
                    continue_free: "Continue Free",
                    offers: "Offers",
                    my_invites: "My Invites",
                    account: "Account",
                    your_referal_stat: "Your Customer Referral Stat",
                    client_referred: "Client Referred",
                    ambition_point_earned: "Ambition Point Earned",
                    basic_info: "Basic Info",
                    change_password: "Change Password",
                    edit_profile: "Edit Profile",
                    my_wallet: "My Wallet",
                    renew: "Renew",
                    switch: "Switch",
                    my_linked_devices: "Device Limit",
                    web_device_limit: "Web Device Limit",
                    mobile_device_limit: "Mobile device Limit",
                    device_request: "Device Request",
                    ag_store: "Be AG Store",
                    alumni: "Alumni"
                },
                all: {
                    users: "Users",
                    roles: "Roles",
                    permissions: "Permissions",
                    role: "Role",
                    permission: "Permission",
                    email: "Email",
                    name: "Name",
                    password: "Password",
                    confirm_password: "Confirm Password",
                    organizations: "Organizations",
                    select_organization: "Select Organization",
                    location: "Location",
                    branches: "Branches"
                },
                validation: {
                    required: "Required"
                },
                button: {
                    back: "Back"
                }
            }
              , i = {
                failed: "Action failed",
                success: "Action was successful",
                app: {
                    title: "Ambition Guru"
                },
                label: {
                    activity_log: "गतिविधि लग",
                    add_comment: "टिप्पणी थप्नुहोस्",
                    all_discussion: "सबै छलफल",
                    ask: "सोध्नुहोस",
                    background_color: "पृष्ठभूमि रंग",
                    browse_course: "पाठ्यक्रम ब्राउज",
                    cancel: "रद्द गर्नुहोस्",
                    click_here_to_expand: "विस्तार गर्न यहाँ क्लिक गर्नुहोस्",
                    click_here_to_minimize: "न्यूनीकरण गर्न यहाँ क्लिक गर्नुहोस्",
                    comment: "टिप्पणी",
                    continue_reading: "पढ्न जारी राख्नुहोस्",
                    currency: "रु",
                    custom: "अनुकूलन",
                    custom_label: "आफ्नो रोजाइको विषय, एकाइ वा अध्यायबाट अभ्यास गर्नुहोस्",
                    daily_quiz: "दैनिक प्रश्नोत्तरी",
                    dashboard: "घर",
                    discussions: "छलफलहरू",
                    enter_comment: "टिप्पणी प्रविष्ट गर्नुहोस्",
                    enter_title: "शीर्षक प्रविष्ट गर्नुहोस्",
                    font_family: "फन्ट परिवार",
                    for_you: "तपाई को लागि",
                    forgot_password: "Forgot Password ?",
                    forum: "फोरम",
                    free_contents: "नि: शुल्क सामग्री",
                    free_videos: "नि: शुल्क भिडियोहरू",
                    general_instructions: "सामान्य निर्देशनहरू",
                    go_to_home: "Go to Home?",
                    gurus: "गुरु ",
                    challenge_questions: "कठिन प्रश्नहरू",
                    hard_questions_label: "के तपाई आफैलाई चुनौती दिन तयार हुनुहुन्छ?",
                    have_a_token: "Already Have a token?",
                    history: "इतिहास",
                    linked_devices: "लिङ्क गरिएका उपकरणहरू",
                    live_class: "प्रत्यक्ष कक्षा",
                    login: "Login",
                    logout: "बाहिर निस्किनुहोस",
                    mark_all_read: "सबैलाई पढेको रूपमा चिन्ह लगाउनुहोस्",
                    missed_mock_tests: "मिस टेस्टहरू",
                    mobile_number: "Mobile Number",
                    my_courses: "मेरो पाठ्यक्रमहरू",
                    my_participation: "मेरो सहभागिता",
                    new: "नयाँ",
                    notes: "नोट",
                    audios: "अडियो",
                    notifications: "सूचना",
                    password: "Password",
                    popular_discussion: "लोकप्रिय चर्चा",
                    popular_this_week: "यो हप्ता लोकप्रिय",
                    practice: "अभ्यास",
                    practice_instructions: "\n        <ol>\n                  <li>विद्यार्थीहरूसँग स्थिर इन्टरनेट जडान हुनुपर्छ।</li>\n                  <li>\n                    विद्यार्थीहरूले अभ्यास नभएसम्म एउटै अभ्यास जारी राख्न सक्छन्\n                    पेश गरिन्छ।\n                  </li>\n                  <li>\n                   विद्यार्थीले तोकिएको समयभित्र परीक्षा दिनुपर्छ।\n                  </li>\n                  <li>\n                   अभ्यास/परीक्षाको बखत विद्यार्थीहरूले उत्तरहरू धेरै पटक छनौट गर्न सक्छन्\n                    \n                  </li>\n                  <li>\n                    तपाईंको  कुल समय , प्रयास प्रश्नहरू र यति कार्यसम्पादन जस्ता कारकहरूको आधारमा गणना गरिन्छ\n                   \n                  </li>\n                </ol>",
                    proceed: "Proceed",
                    profile: "प्रोफाइल",
                    question: "प्रश्न",
                    questions: "प्रश्नहरू",
                    quick_practice: "द्रुत अभ्यास",
                    quick_practice_label: "तपाईको अघिल्लो अध्ययनको आधारमा",
                    ratings: "मूल्याङ्कन",
                    recorded_live_class: "रेकर्ड गरिएको कक्षा",
                    refer_earn: "सन्दर्भ गर्नुहोस् र कमाउनुहोस्",
                    reply: "जवाफ दिनुहोस",
                    report: "रिपोर्ट",
                    report_card: "रिपोर्ट कार्ड ",
                    resend: "Resend",
                    reset_password: "Reset Password",
                    resources: "स्रोत",
                    save: "बचत गर्नुहोस्",
                    saved: "बचत",
                    saved_contents: "सुरक्षित सामग्री",
                    search: "खोज्नुहोस",
                    search_by_mobile_number: "मोबाइल नम्बर खोज्नुहोस्",
                    see_all_chat: "सबै कुराकानी हेर्नुहोस्",
                    settings: "सेटिङहरू",
                    share: "साझेदारी",
                    start: "सुरु",
                    submit: "पेश गर्नुहोस्",
                    submitting: "पेश गर्दै",
                    suggested_notes_for_you: "तपाईका लागि सुझाव गरिएका टिप्पणीहरू",
                    suggested_practice_for_you: "तपाईंका लागि सुझाव गरिएका टेस्टहरू",
                    suggested_videos_for_you: "तपाईंका लागि सुझाव गरिएका भिडियोहरू",
                    syllabus_contents: "पाठ्यक्रम सामग्री",
                    test: "परीक्षण",
                    test_me: "मलाई परीक्षण गर्नुहोस्",
                    test_me_label: "पूरा अध्यायहरूमा आफैलाई चिन्नुहोस् कडा प्रश्नहरू",
                    test_yourself: "आफैलाई परीक्षण गर्नुहोस्",
                    text_size: "पाठ आकार",
                    title: "शीर्षक",
                    token: "Token",
                    top_questions: "शीर्ष प्रश्नहरू",
                    top_questions_label: "तपाईलाई अर्को स्तरमा लैजाऔं",
                    unit: "युनिट",
                    upcomming_mock_tests: "आगामी टेस्टहरू",
                    username: "Mobile Number",
                    video_lectures: "भिडियो व्याख्यान",
                    videos: "भिडियो",
                    view_content: "सामग्री हेर्नुहोस्",
                    view_details: "विवरण हेर्नुहोस्",
                    widthdraw: "पैसा झिक्नुहोस",
                    live_session: "प्रत्यक्ष सत्र",
                    more_live_classes: "थप लाइभ कक्षाहरू",
                    all: "सबै",
                    free_courses: "नि:शुल्क पाठ्यक्रमहरू",
                    paid_courses: "सशुल्क पाठ्यक्रमहरू",
                    continue_course: "पाठ्यक्रम जारी राख्नुहोस्",
                    have_a_promo_code: "प्रोमो कोड छ?",
                    buy_now: "अहिले खरिद गर",
                    continue_free: "नि: शुल्क जारी राख्नुहोस्",
                    offers: "प्रस्तावहरू",
                    my_invites: "मेरो निमन्त्रणा",
                    account: "खाता",
                    your_referal_stat: "तपाईंको ग्राहक रेफरल तथ्याङ्क",
                    client_referred: "ग्राहक सन्दर्भ",
                    ambition_point_earned: "एम्बिशन पोइन्ट कमाइ",
                    basic_info: "आधारभूत जानकारी",
                    change_password: "पासवर्ड परिवर्तन गर्नुहोस्",
                    edit_profile: "प्रोफाइल सम्पादन गर",
                    renew: "नवीकरण गर्नुहोस्",
                    switch: "परिवर्तन गर्नुहोस",
                    my_linked_devices: "मेरा यन्त्रहरू",
                    web_device_limit: "वेब यन्त्र सीमा",
                    mobile_device_limit: "मोबाइल उपकरण सीमा",
                    device_request: "उपकरण अनुरोध"
                },
                all: {
                    users: "Users",
                    roles: "Roles",
                    permissions: "Permissions",
                    role: "Role",
                    permission: "Permission",
                    email: "Email",
                    name: "Name",
                    password: "Password",
                    confirm_password: "Confirm Password",
                    organizations: "Organizations",
                    select_organization: "Select Organization",
                    location: "Location",
                    branches: "Branches"
                },
                validation: {
                    required: "Required"
                },
                button: {
                    back: "Back"
                }
            }
              , c = {
                "en-US": s,
                np: i
            };
            var r = o(71271)
              , m = r.A.getItem("ambition_lang");
            const u = (0,
            a.zj)(( ({app: e}) => {
                const t = (0,
                n.hU)({
                    locale: "en-US",
                    messages: c
                });
                e.use(t)
            }
            ))
        }
        ,
        42634: () => {}
        ,
        49566: (e, t, o) => {
            "use strict";
            o.r(t),
            o.d(t, {
                default: () => s
            });
            var a = o(1573)
              , n = o(68875);
            const s = (0,
            a.zj)(( ({app: e}) => {
                const t = (0,
                n.Zf)();
                e.use(t)
            }
            ))
        }
        ,
        50629: (e, t, o) => {
            var a = {
                "./Account/common/Transactions": [46104, 9, 4121, 996, 6104],
                "./Account/common/Transactions.vue": [46104, 9, 4121, 996, 6104],
                "./Channel/ChannelCheckout": [5554, 9, 4121, 996, 5554],
                "./Channel/ChannelCheckout.vue": [5554, 9, 4121, 996, 5554],
                "./Channel/ChannelContent": [1049, 9, 4121, 996, 1049],
                "./Channel/ChannelContent.vue": [1049, 9, 4121, 996, 1049],
                "./Channel/ChannelContentDetail": [8650, 9, 4121, 996, 8650],
                "./Channel/ChannelContentDetail.vue": [8650, 9, 4121, 996, 8650],
                "./Channel/ChannelDetail": [6470, 9, 4121, 996, 6470],
                "./Channel/ChannelDetail.vue": [6470, 9, 4121, 996, 6470],
                "./Channel/ChannelDiscussion/ChannelCommentItem": [62869, 9, 4121, 996],
                "./Channel/ChannelDiscussion/ChannelCommentItem.vue": [62869, 9, 4121, 996],
                "./Channel/ChannelDiscussion/CommentForm": [75327, 9, 4121, 996],
                "./Channel/ChannelDiscussion/CommentForm.vue": [75327, 9, 4121, 996],
                "./Channel/ChannelDiscussion/DiscussionList": [91901, 9, 4121, 996],
                "./Channel/ChannelDiscussion/DiscussionList.vue": [91901, 9, 4121, 996],
                "./Channel/ChannelPaymentSuccess": [49487, 9, 4121, 996, 9487],
                "./Channel/ChannelPaymentSuccess.vue": [49487, 9, 4121, 996, 9487],
                "./Channel/common/ChannelCard": [45466, 9, 4121, 996],
                "./Channel/common/ChannelCard.vue": [45466, 9, 4121, 996],
                "./Channel/common/ChannelContent": [91759, 9, 4121, 996],
                "./Channel/common/ChannelContent.vue": [91759, 9, 4121, 996],
                "./Channel/common/ChannelContentActions": [65548, 9, 4121, 996],
                "./Channel/common/ChannelContentActions.vue": [65548, 9, 4121, 996],
                "./Channel/common/ChannelContentCard": [35137, 9, 4121, 996],
                "./Channel/common/ChannelContentCard.vue": [35137, 9, 4121, 996],
                "./Channel/common/ChannelContentPreview": [71646, 9, 4121, 996],
                "./Channel/common/ChannelContentPreview.vue": [71646, 9, 4121, 996],
                "./Channel/common/ChannelContentReport": [21870, 9, 4121, 996],
                "./Channel/common/ChannelContentReport.vue": [21870, 9, 4121, 996],
                "./Channel/common/ChannelFollowCard": [32693, 9, 4121, 996],
                "./Channel/common/ChannelFollowCard.vue": [32693, 9, 4121, 996],
                "./Channel/common/ChannelList": [79092, 9, 4121, 996],
                "./Channel/common/ChannelList.vue": [79092, 9, 4121, 996],
                "./Channel/common/ChannelSubscriptionPlan": [38882, 9, 4121, 996],
                "./Channel/common/ChannelSubscriptionPlan.vue": [38882, 9, 4121, 996],
                "./Channel/common/SwiperContent": [69496, 9, 4121, 996],
                "./Channel/common/SwiperContent.vue": [69496, 9, 4121, 996],
                "./Dpp/DPPAssessment": [17125, 9, 4121, 996],
                "./Dpp/DPPAssessment.vue": [17125, 9, 4121, 996],
                "./Dpp/DPPAssessmentItem": [73575, 9, 4121, 996],
                "./Dpp/DPPAssessmentItem.vue": [73575, 9, 4121, 996],
                "./Dpp/HomeworkInfo": [76437, 9, 4121, 996],
                "./Dpp/HomeworkInfo.vue": [76437, 9, 4121, 996],
                "./Error404": [91216, 9, 4121, 1216],
                "./Error404.vue": [91216, 9, 4121, 1216],
                "./Example": [89999, 9, 9999],
                "./Example.vue": [89999, 9, 9999],
                "./Index": [12935, 9, 4121, 2935],
                "./Index.vue": [12935, 9, 4121, 2935],
                "./LinkedDevices/DeviceLinked": [92780, 9, 4121, 996, 2780],
                "./LinkedDevices/DeviceLinked.vue": [92780, 9, 4121, 996, 2780],
                "./LinkedDevices/LinkDevice": [67644, 9, 4121, 996, 7644],
                "./LinkedDevices/LinkDevice.vue": [67644, 9, 4121, 996, 7644],
                "./Points/Points": [68793, 9, 8793],
                "./Points/Points.vue": [68793, 9, 8793],
                "./Refer/InvitesEmptyState": [36427, 9, 4121, 996],
                "./Refer/InvitesEmptyState.vue": [36427, 9, 4121, 996],
                "./Refer/OffersEmptyState": [4850, 9, 996, 4850],
                "./Refer/OffersEmptyState.vue": [4850, 9, 996, 4850],
                "./Refer/Refer": [48552, 9, 4121, 996, 8552],
                "./Refer/Refer.vue": [48552, 9, 4121, 996, 8552],
                "./Refer/ReferAndEarn": [29247, 9, 4121, 996, 9247],
                "./Refer/ReferAndEarn.vue": [29247, 9, 4121, 996, 9247],
                "./Refer/common/MyInvites": [66207, 9, 4121, 996],
                "./Refer/common/MyInvites.vue": [66207, 9, 4121, 996],
                "./Refer/common/Offers": [92094, 9, 4121, 996],
                "./Refer/common/Offers.vue": [92094, 9, 4121, 996],
                "./Refer/common/ReferInviteModal": [52931, 9, 4121, 996],
                "./Refer/common/ReferInviteModal.vue": [52931, 9, 4121, 996],
                "./Refer/common/ReferalHistory": [39863, 9, 4121, 996],
                "./Refer/common/ReferalHistory.vue": [39863, 9, 4121, 996],
                "./Refer/common/ReferralInvite": [16819, 9, 4121, 996],
                "./Refer/common/ReferralInvite.vue": [16819, 9, 4121, 996],
                "./agent/Index": [85e3, 9, 4121, 996, 5e3],
                "./agent/Index.vue": [85e3, 9, 4121, 996, 5e3],
                "./agent/OldBack": [37183, 9, 4121, 996, 7183],
                "./agent/OldBack.vue": [37183, 9, 4121, 996, 7183],
                "./agent/account/Index": [45767, 9, 4121, 996, 5767],
                "./agent/account/Index.vue": [45767, 9, 4121, 996, 5767],
                "./agent/account/common/Topup": [76281, 9, 4121, 996],
                "./agent/account/common/Topup.vue": [76281, 9, 4121, 996],
                "./agent/common/AgentTransaction": [86781, 9, 4121, 996],
                "./agent/common/AgentTransaction.vue": [86781, 9, 4121, 996],
                "./agent/common/BecomeAnAgent": [63579, 9, 4121, 996, 3579],
                "./agent/common/BecomeAnAgent.vue": [63579, 9, 4121, 996, 3579],
                "./agent/common/Customers": [61601, 9, 4121, 996],
                "./agent/common/Customers.vue": [61601, 9, 4121, 996],
                "./agent/common/CustomersHistory": [27325, 9, 4121, 996],
                "./agent/common/CustomersHistory.vue": [27325, 9, 4121, 996],
                "./agent/common/DynamicInformation": [70124, 9, 4121, 996],
                "./agent/common/DynamicInformation.vue": [70124, 9, 4121, 996],
                "./agent/common/PackageItem": [33361, 9, 4121, 996],
                "./agent/common/PackageItem.vue": [33361, 9, 4121, 996],
                "./agent/common/StatCard": [80412, 9, 4121, 996],
                "./agent/common/StatCard.vue": [80412, 9, 4121, 996],
                "./agent/common/TrialStudents": [89423, 9, 4121, 996],
                "./agent/common/TrialStudents.vue": [89423, 9, 4121, 996],
                "./agent/common/WithdrawCard": [76686, 9, 4121, 996],
                "./agent/common/WithdrawCard.vue": [76686, 9, 4121, 996],
                "./agent/discount/Index": [29013, 9, 4121, 996, 9013],
                "./agent/discount/Index.vue": [29013, 9, 4121, 996, 9013],
                "./agent/discount/common/DiscountItem": [7635, 9, 4121, 996],
                "./agent/discount/common/DiscountItem.vue": [7635, 9, 4121, 996],
                "./agent/history/Index": [92088, 9, 4121, 996, 2088],
                "./agent/history/Index.vue": [92088, 9, 4121, 996, 2088],
                "./agent/profile/Index": [69330, 9, 4121, 996],
                "./agent/profile/Index.vue": [69330, 9, 4121, 996],
                "./agent/profit/Index": [57420, 9, 4121, 996, 7420],
                "./agent/profit/Index.vue": [57420, 9, 4121, 996, 7420],
                "./agent/profit/ProfitTransaction": [26604, 9, 4121, 996],
                "./agent/profit/ProfitTransaction.vue": [26604, 9, 4121, 996],
                "./agent/resources/Index": [71765, 9, 4121, 996, 1765],
                "./agent/resources/Index.vue": [71765, 9, 4121, 996, 1765],
                "./agent/sell/Category": [65492, 9, 4121, 996, 5492],
                "./agent/sell/Category.vue": [65492, 9, 4121, 996, 5492],
                "./agent/sell/Index": [50234, 9, 4121, 996, 234],
                "./agent/sell/Index.vue": [50234, 9, 4121, 996, 234],
                "./agent/sell/common/PackageBuyForm": [80324, 9, 4121, 996],
                "./agent/sell/common/PackageBuyForm.vue": [80324, 9, 4121, 996],
                "./agent/student/History": [60230, 9, 4121, 996, 230],
                "./agent/student/History.vue": [60230, 9, 4121, 996, 230],
                "./agent/student/Index": [29627, 9, 4121, 996, 9627],
                "./agent/student/Index.vue": [29627, 9, 4121, 996, 9627],
                "./audios/AudioDetail": [91840, 9, 4121, 996, 1840],
                "./audios/AudioDetail.vue": [91840, 9, 4121, 996, 1840],
                "./audios/Index": [53456, 9, 4121, 996, 3456],
                "./audios/Index.vue": [53456, 9, 4121, 996, 3456],
                "./audios/common/AudioItem": [12224, 9, 4121, 996, 2224],
                "./audios/common/AudioItem.vue": [12224, 9, 4121, 996, 2224],
                "./audios/common/AudioMiniPlayer": [8807, 9, 4121, 996],
                "./audios/common/AudioMiniPlayer.vue": [8807, 9, 4121, 996],
                "./audios/common/AudioPlaylist": [69064, 9, 4121, 996],
                "./audios/common/AudioPlaylist.vue": [69064, 9, 4121, 996],
                "./audios/common/AudiosPlayer": [26685, 9, 4121, 996],
                "./audios/common/AudiosPlayer.vue": [26685, 9, 4121, 996],
                "./audios/common/CategoriesAudio": [81309, 9, 4121, 996],
                "./audios/common/CategoriesAudio.vue": [81309, 9, 4121, 996],
                "./audios/common/CategoriesAudioSlider": [10937, 9, 4121, 996],
                "./audios/common/CategoriesAudioSlider.vue": [10937, 9, 4121, 996],
                "./audios/common/EnableInterActiveContent": [14255, 9, 4121, 996],
                "./audios/common/EnableInterActiveContent.vue": [14255, 9, 4121, 996],
                "./audios/common/FeaturedAudio": [65034, 9, 4121, 996],
                "./audios/common/FeaturedAudio.vue": [65034, 9, 4121, 996],
                "./audios/common/FeaturedAudioSlider": [91411, 9, 4121, 996],
                "./audios/common/FeaturedAudioSlider.vue": [91411, 9, 4121, 996],
                "./audios/common/RelatedAudios": [41517, 9, 4121, 1517],
                "./audios/common/RelatedAudios.vue": [41517, 9, 4121, 1517],
                "./audios/common/TopAudios": [36253, 9, 4121, 996, 6253],
                "./audios/common/TopAudios.vue": [36253, 9, 4121, 996, 6253],
                "./audios/common/TopAudiosSlider": [42747, 9, 4121, 996],
                "./audios/common/TopAudiosSlider.vue": [42747, 9, 4121, 996],
                "./audios/layout": [85450, 9, 4121, 996, 5450],
                "./audios/layout.vue": [85450, 9, 4121, 996, 5450],
                "./audiosV1/Index": [67269, 9, 4121, 996, 7269],
                "./audiosV1/Index.vue": [67269, 9, 4121, 996, 7269],
                "./audiosV1/common/AudioCard": [45127, 9, 4121, 996],
                "./audiosV1/common/AudioCard.vue": [45127, 9, 4121, 996],
                "./audiosV1/common/AudioInfiniteList": [65835, 9, 4121, 996],
                "./audiosV1/common/AudioInfiniteList.vue": [65835, 9, 4121, 996],
                "./audiosV1/common/AudioListSlider": [22264, 9, 4121, 996],
                "./audiosV1/common/AudioListSlider.vue": [22264, 9, 4121, 996],
                "./audiosV1/common/SimpleAudioList": [76569, 9, 4121, 996],
                "./audiosV1/common/SimpleAudioList.vue": [76569, 9, 4121, 996],
                "./audiosV1/globalAudio/GlobalAudioModal": [72748, 9, 4121, 996],
                "./audiosV1/globalAudio/GlobalAudioModal.vue": [72748, 9, 4121, 996],
                "./auth/BuyCourse": [21944, 9, 4121, 996, 1944],
                "./auth/BuyCourse.vue": [21944, 9, 4121, 996, 1944],
                "./auth/CourseClosed": [39203, 9, 4121, 996, 9203],
                "./auth/CourseClosed.vue": [39203, 9, 4121, 996, 9203],
                "./auth/Dashboard": [956, 9, 4121, 996, 956],
                "./auth/Dashboard.vue": [956, 9, 4121, 996, 956],
                "./auth/ForgotPassword": [60333, 9, 4121, 996, 333],
                "./auth/ForgotPassword.vue": [60333, 9, 4121, 996, 333],
                "./auth/LoginMobile": [92338, 9, 4121, 996],
                "./auth/LoginMobile.vue": [92338, 9, 4121, 996],
                "./auth/PopularCourse": [7179, 9, 4121, 996, 7179],
                "./auth/PopularCourse.vue": [7179, 9, 4121, 996, 7179],
                "./auth/RegisterMobile": [10963, 9, 4121, 996, 963],
                "./auth/RegisterMobile.vue": [10963, 9, 4121, 996, 963],
                "./auth/SelectCourse": [41610, 9, 4121, 996, 1610],
                "./auth/SelectCourse.vue": [41610, 9, 4121, 996, 1610],
                "./auth/SelectPackage": [24583, 9, 4121, 996, 4583],
                "./auth/SelectPackage.vue": [24583, 9, 4121, 996, 4583],
                "./auth/SocialLogin": [7069, 9, 4121, 996, 7069],
                "./auth/SocialLogin.vue": [7069, 9, 4121, 996, 7069],
                "./auth/VerifyMobileNumber": [38965, 9, 4121, 996, 8965],
                "./auth/VerifyMobileNumber.vue": [38965, 9, 4121, 996, 8965],
                "./auth/VerifyMobileNumberOld": [49197, 9, 4121, 9197],
                "./auth/VerifyMobileNumberOld.vue": [49197, 9, 4121, 9197],
                "./auth/common/AuthBg": [46606, 9, 996],
                "./auth/common/AuthBg.vue": [46606, 9, 996],
                "./auth/common/AuthSlider": [75263, 9, 4121, 996],
                "./auth/common/AuthSlider.vue": [75263, 9, 4121, 996],
                "./auth/common/CourseCategory": [76520, 9, 4121, 996],
                "./auth/common/CourseCategory.vue": [76520, 9, 4121, 996],
                "./auth/common/CourseCategoryItem": [37036, 9, 4121, 996],
                "./auth/common/CourseCategoryItem.vue": [37036, 9, 4121, 996],
                "./auth/login": [51770, 9, 4121, 996, 1770],
                "./auth/login.vue": [51770, 9, 4121, 996, 1770],
                "./auth/login1": [17764, 9, 4121, 996, 7764],
                "./auth/login1.vue": [17764, 9, 4121, 996, 7764],
                "./auth/loginData": [64756, 9, 4121, 996],
                "./auth/loginData.js": [64756, 9, 4121, 996],
                "./auth/register": [37076, 9, 4121, 996, 7076],
                "./auth/register.vue": [37076, 9, 4121, 996, 7076],
                "./auth/reset_password_otp": [53728, 9, 3728],
                "./auth/reset_password_otp.vue": [53728, 9, 3728],
                "./auth/token_verify_page": [22159, 9, 4121, 996, 2159],
                "./auth/token_verify_page.vue": [22159, 9, 4121, 996, 2159],
                "./browse/Browse": [65546, 9, 4121, 996, 5546],
                "./browse/Browse.vue": [65546, 9, 4121, 996, 5546],
                "./browse/BrowseCategory": [12045, 9, 4121, 996, 2045],
                "./browse/BrowseCategory.vue": [12045, 9, 4121, 996, 2045],
                "./browse/Common/Category": [73034, 9, 653],
                "./browse/Common/Category.vue": [73034, 9, 653],
                "./browse/Common/FeaturedBanner": [82082, 9, 4121, 2082],
                "./browse/Common/FeaturedBanner.vue": [82082, 9, 4121, 2082],
                "./browse/Common/ProductList": [21482, 9, 4121, 996, 1482],
                "./browse/Common/ProductList.vue": [21482, 9, 4121, 996, 1482],
                "./browse/Common/RecentlyAdded": [4992, 9, 4121, 4992],
                "./browse/Common/RecentlyAdded.vue": [4992, 9, 4121, 4992],
                "./chat/Index": [10589, 9, 4121, 996, 589],
                "./chat/Index.vue": [10589, 9, 4121, 996, 589],
                "./chat/common/ActiveConversationItem": [31821, 9, 4121, 996],
                "./chat/common/ActiveConversationItem.vue": [31821, 9, 4121, 996],
                "./chat/common/ActiveConversationList": [33547, 9, 4121, 996, 3547],
                "./chat/common/ActiveConversationList.vue": [33547, 9, 4121, 996, 3547],
                "./chat/common/ConversationItem": [90628, 9, 4121, 996],
                "./chat/common/ConversationItem.vue": [90628, 9, 4121, 996],
                "./chat/common/ConversationList": [62282, 9, 4121, 996, 2282],
                "./chat/common/ConversationList.vue": [62282, 9, 4121, 996, 2282],
                "./chat/common/message/MessageItem": [29036, 9, 4121, 996],
                "./chat/common/message/MessageItem.vue": [29036, 9, 4121, 996],
                "./chat/common/message/MessageList": [54012, 9, 4121, 996],
                "./chat/common/message/MessageList.vue": [54012, 9, 4121, 996],
                "./chat/common/message/message_item/ContentPreview": [28585, 9, 4121, 996],
                "./chat/common/message/message_item/ContentPreview.vue": [28585, 9, 4121, 996],
                "./chat/common/message/message_item/MessageItemPreview": [574, 9, 4121, 996],
                "./chat/common/message/message_item/MessageItemPreview.vue": [574, 9, 4121, 996],
                "./chat/common/message/message_item/common/ContentsPreview": [12867, 9, 4121, 996],
                "./chat/common/message/message_item/common/ContentsPreview.vue": [12867, 9, 4121, 996],
                "./chat/common/message/message_item/common/ImagePreview": [75459, 9, 4121, 996],
                "./chat/common/message/message_item/common/ImagePreview.vue": [75459, 9, 4121, 996],
                "./chat/common/message/message_item/common/MeetingPreview": [56050, 9, 4121, 996],
                "./chat/common/message/message_item/common/MeetingPreview.vue": [56050, 9, 4121, 996],
                "./chat/common/message/message_item/common/MockTestPreview": [71878, 9, 4121, 996],
                "./chat/common/message/message_item/common/MockTestPreview.vue": [71878, 9, 4121, 996],
                "./chat/common/message/message_item/common/PracticePreview": [49161, 9, 4121, 996],
                "./chat/common/message/message_item/common/PracticePreview.vue": [49161, 9, 4121, 996],
                "./chat/common/message/message_item/common/QuestionPreview": [98444, 9, 4121, 996],
                "./chat/common/message/message_item/common/QuestionPreview.vue": [98444, 9, 4121, 996],
                "./chat/main_common/ActiveChat": [12976, 9, 4121, 996],
                "./chat/main_common/ActiveChat.vue": [12976, 9, 4121, 996],
                "./chat/main_common/ChatForm": [11844, 9, 4121, 996],
                "./chat/main_common/ChatForm.vue": [11844, 9, 4121, 996],
                "./chat/main_common/ChatHeads": [53393, 9, 4121, 996],
                "./chat/main_common/ChatHeads.vue": [53393, 9, 4121, 996],
                "./chat/main_common/ChatItem": [36242, 9, 4121, 996],
                "./chat/main_common/ChatItem.vue": [36242, 9, 4121, 996],
                "./chat/main_common/ChatList": [5328, 9, 4121, 996],
                "./chat/main_common/ChatList.vue": [5328, 9, 4121, 996],
                "./chat/main_common/ConversationImage": [80190, 9, 4121, 996],
                "./chat/main_common/ConversationImage.vue": [80190, 9, 4121, 996],
                "./chat/main_common/MessageBody": [21404, 9, 1404],
                "./chat/main_common/MessageBody.vue": [21404, 9, 1404],
                "./chat/main_common/Report": [16441, 9, 4121, 996],
                "./chat/main_common/Report.vue": [16441, 9, 4121, 996],
                "./chat/main_common/SearchItem": [10206, 9, 4121, 996],
                "./chat/main_common/SearchItem.vue": [10206, 9, 4121, 996],
                "./chat/main_common/UserInfo": [97890, 9, 4121, 996],
                "./chat/main_common/UserInfo.vue": [97890, 9, 4121, 996],
                "./chatV1/Index": [11843, 9, 4121, 996, 1843],
                "./chatV1/Index.vue": [11843, 9, 4121, 996, 1843],
                "./chatV1/common/ActiveChat": [39463, 9, 4121, 996],
                "./chatV1/common/ActiveChat.vue": [39463, 9, 4121, 996],
                "./chatV1/common/ChatHead": [31994, 9, 4121, 996],
                "./chatV1/common/ChatHead.vue": [31994, 9, 4121, 996],
                "./chatV1/common/ChatItem": [12649, 9, 4121, 996],
                "./chatV1/common/ChatItem.vue": [12649, 9, 4121, 996],
                "./chatV1/common/ChatList": [25443, 9, 4121, 996],
                "./chatV1/common/ChatList.vue": [25443, 9, 4121, 996],
                "./chatV1/common/ChatSearch": [66547, 9, 4121, 996],
                "./chatV1/common/ChatSearch.vue": [66547, 9, 4121, 996],
                "./chatV1/common/GuruList": [87522, 9, 4121, 996],
                "./chatV1/common/GuruList.vue": [87522, 9, 4121, 996],
                "./chatV1/common/MessageItem": [67370, 9, 4121, 996],
                "./chatV1/common/MessageItem.vue": [67370, 9, 4121, 996],
                "./chatV1/common/activeChat/ChatForm": [66688, 9, 4121, 996],
                "./chatV1/common/activeChat/ChatForm.vue": [66688, 9, 4121, 996],
                "./chatV1/common/activeChat/ChatVoiceRecord": [28449, 9, 4121, 996],
                "./chatV1/common/activeChat/ChatVoiceRecord.vue": [28449, 9, 4121, 996],
                "./chatV1/common/activeChat/RightInfo": [16896, 9, 4121, 996],
                "./chatV1/common/activeChat/RightInfo.vue": [16896, 9, 4121, 996],
                "./chatV1/common/activeChat/activeChatHead": [95319, 9, 4121, 996],
                "./chatV1/common/activeChat/activeChatHead.vue": [95319, 9, 4121, 996],
                "./chatV1/common/chatSearch/ChatSearchItem": [74802, 9, 4121, 996],
                "./chatV1/common/chatSearch/ChatSearchItem.vue": [74802, 9, 4121, 996],
                "./chatV1/common/messageItem/MessageContent": [20580, 9, 4121, 996],
                "./chatV1/common/messageItem/MessageContent.vue": [20580, 9, 4121, 996],
                "./chatV1/common/messageItem/MessageImagePreview": [49873, 9, 4121, 996],
                "./chatV1/common/messageItem/MessageImagePreview.vue": [49873, 9, 4121, 996],
                "./chatV1/common/messageItem/MessagePackageShare": [95690, 9, 4121, 996, 5690],
                "./chatV1/common/messageItem/MessagePackageShare.vue": [95690, 9, 4121, 996, 5690],
                "./chatV1/common/messageItem/MessagePdfPreview": [29839, 9, 4121, 996],
                "./chatV1/common/messageItem/MessagePdfPreview.vue": [29839, 9, 4121, 996],
                "./chatV1/common/messageItem/ReplyMessage": [16258, 9, 4121, 996],
                "./chatV1/common/messageItem/ReplyMessage.vue": [16258, 9, 4121, 996],
                "./checkout/Cart": [57668, 9, 4121, 996, 7668],
                "./checkout/Cart.vue": [57668, 9, 4121, 996, 7668],
                "./checkout/Cart/CartItem": [94206, 9, 4121, 996],
                "./checkout/Cart/CartItem.vue": [94206, 9, 4121, 996],
                "./checkout/Cart/CartItemV1": [99680, 9, 4121, 996],
                "./checkout/Cart/CartItemV1.vue": [99680, 9, 4121, 996],
                "./checkout/Checkout": [58844, 9, 4121, 996, 8844],
                "./checkout/Checkout.vue": [58844, 9, 4121, 996, 8844],
                "./checkout/CheckoutOld": [19075, 9, 4121, 996, 9075],
                "./checkout/CheckoutOld.vue": [19075, 9, 4121, 996, 9075],
                "./checkout/PackageInternationalPaymentSuccess": [10898, 9, 4121, 898],
                "./checkout/PackageInternationalPaymentSuccess.vue": [10898, 9, 4121, 898],
                "./checkout/PaymentFailure": [48045, 9, 4121, 996, 8045],
                "./checkout/PaymentFailure.vue": [48045, 9, 4121, 996, 8045],
                "./checkout/PaymentSuccess": [52211, 9, 4121, 996, 2211],
                "./checkout/PaymentSuccess.vue": [52211, 9, 4121, 996, 2211],
                "./checkout/common/ComboItem": [68964, 9, 4121, 996],
                "./checkout/common/ComboItem.vue": [68964, 9, 4121, 996],
                "./checkout/common/PaymentHelpInfo": [8021, 9, 4121, 8021],
                "./checkout/common/PaymentHelpInfo.vue": [8021, 9, 4121, 8021],
                "./common/ProductBuyNowItem": [26785, 9, 4121, 996],
                "./common/ProductBuyNowItem.vue": [26785, 9, 4121, 996],
                "./common/ProductBuyNowItemOld": [42028, 9, 4121, 996, 2028],
                "./common/ProductBuyNowItemOld.vue": [42028, 9, 4121, 996, 2028],
                "./common/ReviewItem": [21504, 9, 4121, 996],
                "./common/ReviewItem.vue": [21504, 9, 4121, 996],
                "./common/ReviewStats": [21168, 9, 4121, 1168],
                "./common/ReviewStats.vue": [21168, 9, 4121, 1168],
                "./common/basic/Price": [90900, 9, 996],
                "./common/basic/Price.vue": [90900, 9, 996],
                "./common/basic/Rating": [87661, 9, 996],
                "./common/basic/Rating.vue": [87661, 9, 996],
                "./common/basic/Wishlist": [50186, 9, 996],
                "./common/basic/Wishlist.vue": [50186, 9, 996],
                "./common/productItem": [24633, 9, 4121, 996],
                "./common/productItem.vue": [24633, 9, 4121, 996],
                "./components/CollegeRequestForm": [54767, 9, 4121, 996],
                "./components/CollegeRequestForm.vue": [54767, 9, 4121, 996],
                "./components/ComingSoon": [63966, 9, 3966],
                "./components/ComingSoon.vue": [63966, 9, 3966],
                "./components/CommingSoon": [42160, 9, 996],
                "./components/CommingSoon.vue": [42160, 9, 996],
                "./components/CompleteYourProfile": [65432, 9, 4121, 996],
                "./components/CompleteYourProfile.vue": [65432, 9, 4121, 996],
                "./components/ContentSlider": [67063, 9, 4121, 996],
                "./components/ContentSlider.vue": [67063, 9, 4121, 996],
                "./components/ContentSlider/ContentSliderNote": [73747, 9, 4121, 996],
                "./components/ContentSlider/ContentSliderNote.vue": [73747, 9, 4121, 996],
                "./components/ContentSlider/ContentSliderVideo": [7556, 9, 4121, 996],
                "./components/ContentSlider/ContentSliderVideo.vue": [7556, 9, 4121, 996],
                "./components/CropperDialog": [76362, 9, 4121, 6362],
                "./components/CropperDialog.vue": [76362, 9, 4121, 6362],
                "./components/CustomAudioPlayer": [63488, 9, 4121, 996],
                "./components/CustomAudioPlayer.vue": [63488, 9, 4121, 996],
                "./components/Draw": [68001, 9, 996, 8001],
                "./components/Draw.vue": [68001, 9, 996, 8001],
                "./components/DrawingTest": [48684, 9, 4121, 996, 8684],
                "./components/DrawingTest.vue": [48684, 9, 4121, 996, 8684],
                "./components/DynamicPageMessage": [54724, 9, 4121, 996],
                "./components/DynamicPageMessage.vue": [54724, 9, 4121, 996],
                "./components/Empty": [78712, 9, 4121, 996],
                "./components/Empty.vue": [78712, 9, 4121, 996],
                "./components/EventsBanner": [25403, 9, 4121, 996],
                "./components/EventsBanner.vue": [25403, 9, 4121, 996],
                "./components/FileUploader": [1961, 9, 4121, 1961],
                "./components/FileUploader.vue": [1961, 9, 4121, 1961],
                "./components/GallerySlider": [77703, 9, 4121, 996],
                "./components/GallerySlider.vue": [77703, 9, 4121, 996],
                "./components/ResourceSlider": [91742, 9, 4121, 996],
                "./components/ResourceSlider.vue": [91742, 9, 4121, 996],
                "./components/Shareable": [7032, 9, 4121, 996],
                "./components/Shareable.vue": [7032, 9, 4121, 996],
                "./components/TableContent/TableContentItem": [77513, 9, 4121, 996],
                "./components/TableContent/TableContentItem.vue": [77513, 9, 4121, 996],
                "./components/TableContent/TableContentList": [6017, 9, 4121, 996],
                "./components/TableContent/TableContentList.vue": [6017, 9, 4121, 996],
                "./components/VideoCard": [85053, 9, 4121, 5053],
                "./components/VideoCard.vue": [85053, 9, 4121, 5053],
                "./components/VideoCompleteBar": [36872, 9, 996],
                "./components/VideoCompleteBar.vue": [36872, 9, 996],
                "./components/VideoImage": [68768, 9, 4121, 996],
                "./components/VideoImage.vue": [68768, 9, 4121, 996],
                "./components/animations/Check": [48696, 9, 996],
                "./components/animations/Check.vue": [48696, 9, 996],
                "./components/form/AddButton": [4277, 9, 4277],
                "./components/form/AddButton.vue": [4277, 9, 4277],
                "./components/form/CountrySelect": [87732, 9, 4121, 7732],
                "./components/form/CountrySelect.vue": [87732, 9, 4121, 7732],
                "./components/form/CountryWithFlag": [742, 9, 4121, 996],
                "./components/form/CountryWithFlag.vue": [742, 9, 4121, 996],
                "./components/form/DragDropFile": [92917, 9, 2917],
                "./components/form/DragDropFile.vue": [92917, 9, 2917],
                "./components/form/Editor": [81414, 9, 4121, 1414],
                "./components/form/Editor.vue": [81414, 9, 4121, 1414],
                "./components/form/VoiceRecording": [82680, 9, 4121, 996],
                "./components/form/VoiceRecording.vue": [82680, 9, 4121, 996],
                "./components/linkedDevices/MyDeviceStats": [50908, 9, 4121, 996],
                "./components/linkedDevices/MyDeviceStats.vue": [50908, 9, 4121, 996],
                "./components/linkedDevices/MyDevices": [68534, 9, 4121, 996],
                "./components/linkedDevices/MyDevices.vue": [68534, 9, 4121, 996],
                "./components/linkedDevices/RequestForDevice": [66090, 9, 4121, 996],
                "./components/linkedDevices/RequestForDevice.vue": [66090, 9, 4121, 996],
                "./components/pages/CirclePieChart": [56103, 9, 4121, 6103],
                "./components/pages/CirclePieChart.vue": [56103, 9, 4121, 6103],
                "./components/pages/Confirm": [8789, 9, 4121, 996],
                "./components/pages/Confirm.vue": [8789, 9, 4121, 996],
                "./components/pages/ContentLinearProgress": [77178, 9, 4121, 996],
                "./components/pages/ContentLinearProgress.vue": [77178, 9, 4121, 996],
                "./components/pages/CourseContentPieChart": [46574, 9, 4121, 996],
                "./components/pages/CourseContentPieChart.vue": [46574, 9, 4121, 996],
                "./components/pages/CustomTable": [72480, 9, 4121, 996],
                "./components/pages/CustomTable.vue": [72480, 9, 4121, 996],
                "./components/pages/PageBanner": [57948, 9, 4121, 996],
                "./components/pages/PageBanner.vue": [57948, 9, 4121, 996],
                "./components/pages/PageTitle": [18535, 9, 4121, 996],
                "./components/pages/PageTitle.vue": [18535, 9, 4121, 996],
                "./components/pages/PaymentChannelVideoTutorial": [54590, 9, 4121, 996],
                "./components/pages/PaymentChannelVideoTutorial.vue": [54590, 9, 4121, 996],
                "./components/pages/PaymentChannels": [19890, 9, 4121, 996],
                "./components/pages/PaymentChannels.vue": [19890, 9, 4121, 996],
                "./components/pages/PromoIntroVideo": [378, 9, 4121, 996],
                "./components/pages/PromoIntroVideo.vue": [378, 9, 4121, 996],
                "./components/pages/SemiMeter": [90384, 9, 4121, 996],
                "./components/pages/SemiMeter.vue": [90384, 9, 4121, 996],
                "./components/pages/VideoPlayer": [66059, 9, 4121, 996],
                "./components/pages/VideoPlayer.vue": [66059, 9, 4121, 996],
                "./components/shareable/ShareMessage": [26011, 9, 4121, 996],
                "./components/shareable/ShareMessage.vue": [26011, 9, 4121, 996],
                "./componentsV1/audio/Actions": [60268, 9, 4121, 996],
                "./componentsV1/audio/Actions.vue": [60268, 9, 4121, 996],
                "./componentsV1/audio/AudioListSlider": [59928, 9, 4121, 996, 9928],
                "./componentsV1/audio/AudioListSlider.vue": [59928, 9, 4121, 996, 9928],
                "./componentsV1/audio/FeaturedAudios": [8782, 9, 4121, 996],
                "./componentsV1/audio/FeaturedAudios.vue": [8782, 9, 4121, 996],
                "./componentsV1/audio/GlobalAudio": [47309, 9, 4121, 996],
                "./componentsV1/audio/GlobalAudio.vue": [47309, 9, 4121, 996],
                "./componentsV1/audio/LargeGlobalAudio": [12019, 9, 4121, 996],
                "./componentsV1/audio/LargeGlobalAudio.vue": [12019, 9, 4121, 996],
                "./componentsV1/common/AgBuyPremiumPackage": [86631, 9, 4121, 996],
                "./componentsV1/common/AgBuyPremiumPackage.vue": [86631, 9, 4121, 996],
                "./componentsV1/common/AgContainer": [24092, 9, 996],
                "./componentsV1/common/AgContainer.vue": [24092, 9, 996],
                "./componentsV1/common/AgContentTag": [34899, 9, 996],
                "./componentsV1/common/AgContentTag.vue": [34899, 9, 996],
                "./componentsV1/common/AgImage": [34582, 9, 4121, 996],
                "./componentsV1/common/AgImage.vue": [34582, 9, 4121, 996],
                "./componentsV1/common/AgLabelProgress": [74088, 9, 996],
                "./componentsV1/common/AgLabelProgress.vue": [74088, 9, 996],
                "./componentsV1/common/AgLinearProgress": [93314, 9, 996],
                "./componentsV1/common/AgLinearProgress.vue": [93314, 9, 996],
                "./componentsV1/common/AgMultiCalendar": [97501, 9, 4121, 996],
                "./componentsV1/common/AgMultiCalendar.vue": [97501, 9, 4121, 996],
                "./componentsV1/common/AgNepaliCalendar/AgNepaliCalendar": [71724, 9, 4121, 996],
                "./componentsV1/common/AgNepaliCalendar/AgNepaliCalendar.vue": [71724, 9, 4121, 996],
                "./componentsV1/common/AgNepaliCalendar/constants": [76801, 9, 996],
                "./componentsV1/common/AgNepaliCalendar/constants.js": [76801, 9, 996],
                "./componentsV1/common/AgRoundedBox": [36087, 9, 996],
                "./componentsV1/common/AgRoundedBox.vue": [36087, 9, 996],
                "./componentsV1/common/AgSwiperChips": [25436, 9, 4121, 996],
                "./componentsV1/common/AgSwiperChips.vue": [25436, 9, 4121, 996],
                "./componentsV1/common/AgTab": [22191, 9, 4121, 2191],
                "./componentsV1/common/AgTab.vue": [22191, 9, 4121, 2191],
                "./componentsV1/course/GlobalVideo": [81253, 9, 4121, 996],
                "./componentsV1/course/GlobalVideo.vue": [81253, 9, 4121, 996],
                "./componentsV1/course/SubjectCard": [97716, 9, 4121, 996],
                "./componentsV1/course/SubjectCard.vue": [97716, 9, 4121, 996],
                "./componentsV1/course/SyallubusStructure/SectionList": [93446, 9, 4121, 996],
                "./componentsV1/course/SyallubusStructure/SectionList.vue": [93446, 9, 4121, 996],
                "./componentsV1/course/SyallubusStructure/SectionProgress": [55407, 9, 996, 5407],
                "./componentsV1/course/SyallubusStructure/SectionProgress.vue": [55407, 9, 996, 5407],
                "./componentsV1/course/SyallubusStructure/SectionVideoCard": [38553, 9, 4121, 996],
                "./componentsV1/course/SyallubusStructure/SectionVideoCard.vue": [38553, 9, 4121, 996],
                "./componentsV1/course/SyallubusStructure/Sections": [50972, 9, 4121, 996],
                "./componentsV1/course/SyallubusStructure/Sections.vue": [50972, 9, 4121, 996],
                "./componentsV1/course/SyallubusStructure/SyllabusStructure": [73490, 9, 4121, 996, 3490],
                "./componentsV1/course/SyallubusStructure/SyllabusStructure.vue": [73490, 9, 4121, 996, 3490],
                "./componentsV1/course/VideoCard": [54714, 9, 4121, 996],
                "./componentsV1/course/VideoCard.vue": [54714, 9, 4121, 996],
                "./componentsV1/discussion/CommentForm": [45942, 9, 4121, 996],
                "./componentsV1/discussion/CommentForm.vue": [45942, 9, 4121, 996],
                "./componentsV1/discussion/CommentItem": [62990, 9, 4121, 996],
                "./componentsV1/discussion/CommentItem.vue": [62990, 9, 4121, 996],
                "./componentsV1/feed/FeedCard": [6206, 9, 4121, 996],
                "./componentsV1/feed/FeedCard.vue": [6206, 9, 4121, 996],
                "./componentsV1/feed/FeedList": [23438, 9, 4121, 996],
                "./componentsV1/feed/FeedList.vue": [23438, 9, 4121, 996],
                "./componentsV1/liveClass/LiveClassCard": [47757, 9, 4121, 996],
                "./componentsV1/liveClass/LiveClassCard.vue": [47757, 9, 4121, 996],
                "./componentsV1/test/DppCard": [16048, 9, 4121, 996],
                "./componentsV1/test/DppCard.vue": [16048, 9, 4121, 996],
                "./componentsV1/test/LiveTestCard": [64401, 9, 4121, 996],
                "./componentsV1/test/LiveTestCard.vue": [64401, 9, 4121, 996],
                "./course/BuyCourseGuard": [21171, 9, 4121, 1171],
                "./course/BuyCourseGuard.vue": [21171, 9, 4121, 1171],
                "./course/ContentDetail": [88530, 9, 4121, 996, 8530],
                "./course/ContentDetail.vue": [88530, 9, 4121, 996, 8530],
                "./course/ContentDetail/AttachmentView": [3181, 9, 4121, 996],
                "./course/ContentDetail/AttachmentView.vue": [3181, 9, 4121, 996],
                "./course/ContentDetail/AudioPlayer": [27447, 9, 4121, 996],
                "./course/ContentDetail/AudioPlayer.vue": [27447, 9, 4121, 996],
                "./course/ContentDetail/ContentActions": [84545, 9, 4121, 996],
                "./course/ContentDetail/ContentActions.vue": [84545, 9, 4121, 996],
                "./course/ContentDetail/ContentDiscussion": [21712, 9, 4121, 996],
                "./course/ContentDetail/ContentDiscussion.vue": [21712, 9, 4121, 996],
                "./course/ContentDetail/ContentInfos": [3675, 9, 4121, 996],
                "./course/ContentDetail/ContentInfos.vue": [3675, 9, 4121, 996],
                "./course/ContentDetail/ContentNav": [41199, 9, 4121, 996],
                "./course/ContentDetail/ContentNav.vue": [41199, 9, 4121, 996],
                "./course/ContentDetail/ContentNavigation": [41701, 9, 4121, 996],
                "./course/ContentDetail/ContentNavigation.vue": [41701, 9, 4121, 996],
                "./course/ContentDetail/ContentReviews": [86798, 9, 4121, 996],
                "./course/ContentDetail/ContentReviews.vue": [86798, 9, 4121, 996],
                "./course/ContentDetail/LikeDislike": [58951, 9, 4121, 996],
                "./course/ContentDetail/LikeDislike.vue": [58951, 9, 4121, 996],
                "./course/ContentDetail/NoteView": [71571, 9, 4121, 996],
                "./course/ContentDetail/NoteView.vue": [71571, 9, 4121, 996],
                "./course/ContentDetail/PdfView": [8290, 9, 8290],
                "./course/ContentDetail/PdfView.vue": [8290, 9, 8290],
                "./course/ContentDetail/PictureVideoView": [56233, 9, 4121, 996, 6233],
                "./course/ContentDetail/PictureVideoView.vue": [56233, 9, 4121, 996, 6233],
                "./course/ContentDetail/Rating": [7447, 9, 4121, 996],
                "./course/ContentDetail/Rating.vue": [7447, 9, 4121, 996],
                "./course/ContentDetail/TableContentsTree": [21891, 9, 4121, 996],
                "./course/ContentDetail/TableContentsTree.vue": [21891, 9, 4121, 996],
                "./course/ContentDetail/VideoView": [48539, 9, 4121, 996],
                "./course/ContentDetail/VideoView.vue": [48539, 9, 4121, 996],
                "./course/ContentDetail/common/ContentPractice": [43270, 9, 4121, 996],
                "./course/ContentDetail/common/ContentPractice.vue": [43270, 9, 4121, 996],
                "./course/ContentDetail/common/ContentPractice/AnswerItem": [98828, 9, 4121, 996],
                "./course/ContentDetail/common/ContentPractice/AnswerItem.vue": [98828, 9, 4121, 996],
                "./course/ContentRecordDetail": [51388, 9, 996, 1388],
                "./course/ContentRecordDetail.vue": [51388, 9, 996, 1388],
                "./course/CourseDetail": [63823, 9, 4121, 996, 3823],
                "./course/CourseDetail.vue": [63823, 9, 4121, 996, 3823],
                "./course/CourseDetail/CourseBanner": [84285, 9, 4121, 996, 4285],
                "./course/CourseDetail/CourseBanner.vue": [84285, 9, 4121, 996, 4285],
                "./course/CourseDetail/CourseStats": [76098, 9, 4121, 996, 6098],
                "./course/CourseDetail/CourseStats.vue": [76098, 9, 4121, 996, 6098],
                "./course/CourseDetail/MyspaceMessage": [67121, 9, 4121, 996],
                "./course/CourseDetail/MyspaceMessage.vue": [67121, 9, 4121, 996],
                "./course/CourseDetail/MyspaceMessage/Text": [14875, 9, 996],
                "./course/CourseDetail/MyspaceMessage/Text.vue": [14875, 9, 996],
                "./course/CourseDetail/MyspaceMessage/Video": [5433, 9, 4121, 996],
                "./course/CourseDetail/MyspaceMessage/Video.vue": [5433, 9, 4121, 996],
                "./course/CourseDetail/Notice": [98713, 9, 996, 8713],
                "./course/CourseDetail/Notice.vue": [98713, 9, 996, 8713],
                "./course/CourseDetail/PracticeList": [16907, 9, 996],
                "./course/CourseDetail/PracticeList.vue": [16907, 9, 996],
                "./course/CourseDetail/SuggestedContent": [51159, 9, 4121, 996],
                "./course/CourseDetail/SuggestedContent.vue": [51159, 9, 4121, 996],
                "./course/CourseDetailNew": [32371, 9, 4121, 996, 2371],
                "./course/CourseDetailNew.vue": [32371, 9, 4121, 996, 2371],
                "./course/Dashboard/ContinueLearning": [90046, 9, 4121, 996],
                "./course/Dashboard/ContinueLearning.vue": [90046, 9, 4121, 996],
                "./course/Dashboard/RecentAsk": [46851, 9, 4121, 996],
                "./course/Dashboard/RecentAsk.vue": [46851, 9, 4121, 996],
                "./course/Dashboard/RecentAskChat": [47009, 9, 4121, 996],
                "./course/Dashboard/RecentAskChat.vue": [47009, 9, 4121, 996],
                "./course/Dashboard/Recommended": [38822, 9, 4121, 996],
                "./course/Dashboard/Recommended.vue": [38822, 9, 4121, 996],
                "./course/PreviewContentDetail": [32318, 9, 4121, 996, 9937],
                "./course/PreviewContentDetail.vue": [32318, 9, 4121, 996, 9937],
                "./course/SectionDetail": [98687, 9, 4121, 996, 8687],
                "./course/SectionDetail.vue": [98687, 9, 4121, 996, 8687],
                "./course/Subject/SubjectDetails": [96428, 9, 4121, 996, 6428],
                "./course/Subject/SubjectDetails.vue": [96428, 9, 4121, 996, 6428],
                "./course/TestAnalysis/Components/PracticeDialog": [68458, 9, 4121, 996],
                "./course/TestAnalysis/Components/PracticeDialog.vue": [68458, 9, 4121, 996],
                "./course/TestAnalysis/Components/TourSlide": [23159, 9, 4121, 996, 3159],
                "./course/TestAnalysis/Components/TourSlide.vue": [23159, 9, 4121, 996, 3159],
                "./course/TestAnalysis/TestAnalysis": [3034, 9, 4121, 996, 3034],
                "./course/TestAnalysis/TestAnalysis.vue": [3034, 9, 4121, 996, 3034],
                "./course/Welcome/Index": [57182, 9, 4121, 996, 7182],
                "./course/Welcome/Index.vue": [57182, 9, 4121, 996, 7182],
                "./course/common/GiftPackage": [68721, 9, 4121, 996],
                "./course/common/GiftPackage.vue": [68721, 9, 4121, 996],
                "./course/common/MissedLiveClass": [6862, 9, 4121, 996],
                "./course/common/MissedLiveClass.vue": [6862, 9, 4121, 996],
                "./course/common/MissesMockTest": [15957, 9, 4121, 996],
                "./course/common/MissesMockTest.vue": [15957, 9, 4121, 996],
                "./course/common/PremiumBuy": [39197, 9, 4121, 996],
                "./course/common/PremiumBuy.vue": [39197, 9, 4121, 996],
                "./course/common/PremiumBuyMultiple": [99970, 9, 4121, 996],
                "./course/common/PremiumBuyMultiple.vue": [99970, 9, 4121, 996],
                "./course/common/PremiumBuyNowPackage": [21294, 9, 4121, 996, 1294],
                "./course/common/PremiumBuyNowPackage.vue": [21294, 9, 4121, 996, 1294],
                "./course/common/RenewPackageMessage": [94496, 9, 4121, 4496],
                "./course/common/RenewPackageMessage.vue": [94496, 9, 4121, 4496],
                "./course/common/ScholarshipList": [14480, 9, 4121, 996],
                "./course/common/ScholarshipList.vue": [14480, 9, 4121, 996],
                "./course/common/ScholarshipNotice": [30505, 9, 4121, 996],
                "./course/common/ScholarshipNotice.vue": [30505, 9, 4121, 996],
                "./course/content/Backup": [4724, 9, 4121, 996, 4724],
                "./course/content/Backup.vue": [4724, 9, 4121, 996, 4724],
                "./course/content/ContentPlaylist": [34372, 9, 4121, 996],
                "./course/content/ContentPlaylist.vue": [34372, 9, 4121, 996],
                "./course/content/ContentPlaylistNew": [71894, 9, 4121, 996, 1894],
                "./course/content/ContentPlaylistNew.vue": [71894, 9, 4121, 996, 1894],
                "./course/content/SectionPlaylist": [9357, 9, 4121, 996, 9357],
                "./course/content/SectionPlaylist.vue": [9357, 9, 4121, 996, 9357],
                "./course/content/common/PlaylistItem": [15298, 9, 4121, 996],
                "./course/content/common/PlaylistItem.vue": [15298, 9, 4121, 996],
                "./courseV1/CourseDetail": [22228, 9, 4121, 996, 2228],
                "./courseV1/CourseDetail.vue": [22228, 9, 4121, 996, 2228],
                "./courseV1/DynamicLayout": [94380, 9, 4121, 996],
                "./courseV1/DynamicLayout.vue": [94380, 9, 4121, 996],
                "./courseV1/GlobalContent/GlobalContentModal": [95992, 9, 4121, 996],
                "./courseV1/GlobalContent/GlobalContentModal.vue": [95992, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions": [65185, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions.vue": [65185, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentAsk": [45965, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentAsk.vue": [45965, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentBookmark": [65013, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentBookmark.vue": [65013, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentComment": [22892, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentComment.vue": [22892, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentLike": [20119, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentLike.vue": [20119, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentPractice": [91168, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentPractice.vue": [91168, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentSettings": [72829, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentSettings.vue": [72829, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentShare": [60486, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentActions/ContentShare.vue": [60486, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentPreview": [21515, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentPreview.vue": [21515, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentReview": [63822, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalContentReview.vue": [63822, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalDiscussionList": [61389, 9, 4121, 996],
                "./courseV1/GlobalContent/common/GlobalDiscussionList.vue": [61389, 9, 4121, 996],
                "./courseV1/GlobalContent/common/NotePreview": [81349, 9, 4121, 996],
                "./courseV1/GlobalContent/common/NotePreview.vue": [81349, 9, 4121, 996],
                "./courseV1/GlobalContent/common/PdfPreview": [70323, 9, 4121, 996],
                "./courseV1/GlobalContent/common/PdfPreview.vue": [70323, 9, 4121, 996],
                "./courseV1/GlobalContent/common/PremiumMessage": [56346, 9, 4121, 996],
                "./courseV1/GlobalContent/common/PremiumMessage.vue": [56346, 9, 4121, 996],
                "./courseV1/GlobalContent/common/VideoPreview": [96760, 9, 4121, 996],
                "./courseV1/GlobalContent/common/VideoPreview.vue": [96760, 9, 4121, 996],
                "./courseV1/common/CourseCalendar": [74602, 9, 4121, 996],
                "./courseV1/common/CourseCalendar.vue": [74602, 9, 4121, 996],
                "./courseV1/common/CustomerRank": [25853, 9, 4121, 996],
                "./courseV1/common/CustomerRank.vue": [25853, 9, 4121, 996],
                "./courseV1/common/DynamicTitle": [56049, 9, 996],
                "./courseV1/common/DynamicTitle.vue": [56049, 9, 996],
                "./courseV1/common/GlobalPremiumBuyMultiple": [55493, 9, 4121, 996, 5493],
                "./courseV1/common/GlobalPremiumBuyMultiple.vue": [55493, 9, 4121, 996, 5493],
                "./courseV1/common/GlobalPremiumBuyNowPackage": [89302, 9, 4121, 996],
                "./courseV1/common/GlobalPremiumBuyNowPackage.vue": [89302, 9, 4121, 996],
                "./courseV1/common/GuidedTopicSuggestions": [39522, 9, 4121, 996],
                "./courseV1/common/GuidedTopicSuggestions.vue": [39522, 9, 4121, 996],
                "./courseV1/common/LiveClassMockTextSlider": [99938, 9, 4121, 996],
                "./courseV1/common/LiveClassMockTextSlider.vue": [99938, 9, 4121, 996],
                "./courseV1/common/NewContentList": [95206, 9, 4121, 996],
                "./courseV1/common/NewContentList.vue": [95206, 9, 4121, 996],
                "./courseV1/common/Podcast": [58993, 9, 4121, 8993],
                "./courseV1/common/Podcast.vue": [58993, 9, 4121, 8993],
                "./courseV1/common/SubjectCardList": [52006, 9, 4121, 996],
                "./courseV1/common/SubjectCardList.vue": [52006, 9, 4121, 996],
                "./courseV1/common/SwiperDynamicLayout": [96939, 9, 4121, 996],
                "./courseV1/common/SwiperDynamicLayout.vue": [96939, 9, 4121, 996],
                "./courseV1/common/TestProgress": [38971, 9, 4121, 996],
                "./courseV1/common/TestProgress.vue": [38971, 9, 4121, 996],
                "./courseV1/common/courseCalendar/dppList": [57227, 9, 4121, 996],
                "./courseV1/common/courseCalendar/dppList.vue": [57227, 9, 4121, 996],
                "./dashboard/Dashboard": [96560, 9, 4121, 996, 6560],
                "./dashboard/Dashboard.vue": [96560, 9, 4121, 996, 6560],
                "./dashboard/common/CourseProgress": [34676, 9, 4121, 996],
                "./dashboard/common/CourseProgress.vue": [34676, 9, 4121, 996],
                "./dashboard/common/CourseProgress/ContentProgress": [80160, 9, 996],
                "./dashboard/common/CourseProgress/ContentProgress.vue": [80160, 9, 996],
                "./dashboard/common/CourseProgress/CourseMeter": [46178, 9, 4121, 996],
                "./dashboard/common/CourseProgress/CourseMeter.vue": [46178, 9, 4121, 996],
                "./dashboard/common/CourseProgress/ShortDetails": [10871, 9, 4121, 996],
                "./dashboard/common/CourseProgress/ShortDetails.vue": [10871, 9, 4121, 996],
                "./dashboard/common/TestCards": [44626, 9, 4121, 996],
                "./dashboard/common/TestCards.vue": [44626, 9, 4121, 996],
                "./discussion/Discussion": [25463, 9, 4121, 996, 5463],
                "./discussion/Discussion.vue": [25463, 9, 4121, 996, 5463],
                "./discussion/DiscussionDetail": [57641, 9, 4121, 996, 7641],
                "./discussion/DiscussionDetail.vue": [57641, 9, 4121, 996, 7641],
                "./discussion/common/AddForm": [94970, 9, 4121, 996],
                "./discussion/common/AddForm.vue": [94970, 9, 4121, 996],
                "./discussion/common/CommentItem": [6256, 9, 4121, 996],
                "./discussion/common/CommentItem.vue": [6256, 9, 4121, 996],
                "./discussion/common/CommentList": [80222, 9, 4121, 996],
                "./discussion/common/CommentList.vue": [80222, 9, 4121, 996],
                "./discussion/common/DiscussionItem": [7180, 9, 4121, 996],
                "./discussion/common/DiscussionItem.vue": [7180, 9, 4121, 996],
                "./discussion/common/FilterList": [81220, 9, 4121, 996],
                "./discussion/common/FilterList.vue": [81220, 9, 4121, 996],
                "./discussion/common/ItemsCommon/ActionFooter": [75328, 9, 4121, 996],
                "./discussion/common/ItemsCommon/ActionFooter.vue": [75328, 9, 4121, 996],
                "./discussion/common/ItemsCommon/Actions": [790, 9, 4121, 996],
                "./discussion/common/ItemsCommon/Actions.vue": [790, 9, 4121, 996],
                "./discussion/common/ItemsCommon/UserInfo": [319, 9, 4121, 996],
                "./discussion/common/ItemsCommon/UserInfo.vue": [319, 9, 4121, 996],
                "./discussion/common/ReplyItem": [99017, 9, 4121, 996],
                "./discussion/common/ReplyItem.vue": [99017, 9, 4121, 996],
                "./discussionV1/Discussion": [16756, 9, 4121, 996, 6756],
                "./discussionV1/Discussion.vue": [16756, 9, 4121, 996, 6756],
                "./discussionV1/DiscussionDetail": [46702, 9, 4121, 996, 6702],
                "./discussionV1/DiscussionDetail.vue": [46702, 9, 4121, 996, 6702],
                "./discussionV1/common/AddDiscussionHead": [99651, 9, 996],
                "./discussionV1/common/AddDiscussionHead.vue": [99651, 9, 996],
                "./discussionV1/common/AddFilters": [93297, 9, 4121, 996],
                "./discussionV1/common/AddFilters.vue": [93297, 9, 4121, 996],
                "./discussionV1/common/AddForm": [96989, 9, 4121, 996],
                "./discussionV1/common/AddForm.vue": [96989, 9, 4121, 996],
                "./discussionV1/common/CommentItem": [26759, 9, 4121, 996],
                "./discussionV1/common/CommentItem.vue": [26759, 9, 4121, 996],
                "./discussionV1/common/CommentList": [80093, 9, 4121, 996],
                "./discussionV1/common/CommentList.vue": [80093, 9, 4121, 996],
                "./discussionV1/common/CreateDiscussion": [91605, 9, 4121, 996, 3986],
                "./discussionV1/common/CreateDiscussion.vue": [91605, 9, 4121, 996, 3986],
                "./discussionV1/common/DiscussionImageLayout": [66021, 9, 4121, 996],
                "./discussionV1/common/DiscussionImageLayout.vue": [66021, 9, 4121, 996],
                "./discussionV1/common/DiscussionItem": [85641, 9, 4121, 996],
                "./discussionV1/common/DiscussionItem.vue": [85641, 9, 4121, 996],
                "./discussionV1/common/ItemsCommon/ActionFooter": [48273, 9, 4121, 996, 8273],
                "./discussionV1/common/ItemsCommon/ActionFooter.vue": [48273, 9, 4121, 996, 8273],
                "./discussionV1/common/ItemsCommon/Actions": [82041, 9, 4121, 2041],
                "./discussionV1/common/ItemsCommon/Actions.vue": [82041, 9, 4121, 2041],
                "./discussionV1/common/ItemsCommon/UserInfo": [70310, 9, 4121, 996, 310],
                "./discussionV1/common/ItemsCommon/UserInfo.vue": [70310, 9, 4121, 996, 310],
                "./discussionV1/common/ReplyItem": [43774, 9, 4121, 996],
                "./discussionV1/common/ReplyItem.vue": [43774, 9, 4121, 996],
                "./discussionV1/common/SuggestedDiscussions": [32126, 9, 4121, 2126],
                "./discussionV1/common/SuggestedDiscussions.vue": [32126, 9, 4121, 2126],
                "./discussionV1/common/SuggestedQuestionAnswer": [52676, 9, 996],
                "./discussionV1/common/SuggestedQuestionAnswer.vue": [52676, 9, 996],
                "./discussionV1/newcommon/AIAnalysisPage": [6542, 9, 4121, 6542],
                "./discussionV1/newcommon/AIAnalysisPage.vue": [6542, 9, 4121, 6542],
                "./discussionV1/newcommon/CreateDiscussion": [20985, 9, 4121, 996],
                "./discussionV1/newcommon/CreateDiscussion.vue": [20985, 9, 4121, 996],
                "./discussionV1/newcommon/CreateDiscussionPage": [25845, 9, 4121, 996, 5845],
                "./discussionV1/newcommon/CreateDiscussionPage.vue": [25845, 9, 4121, 996, 5845],
                "./ebook": [46090, 9, 4121, 996, 6090],
                "./ebook/": [46090, 9, 4121, 996, 6090],
                "./ebook/EbookCheckout": [27804, 9, 4121, 996, 7804],
                "./ebook/EbookCheckout.vue": [27804, 9, 4121, 996, 7804],
                "./ebook/EbookDetail": [64110, 9, 4121, 996, 4110],
                "./ebook/EbookDetail.vue": [64110, 9, 4121, 996, 4110],
                "./ebook/EbookLayout": [56966, 9, 4121, 996, 6966],
                "./ebook/EbookLayout.vue": [56966, 9, 4121, 996, 6966],
                "./ebook/EbookRead": [36236, 9, 4121, 996, 6236],
                "./ebook/EbookRead.vue": [36236, 9, 4121, 996, 6236],
                "./ebook/EbookViewMore": [51077, 9, 4121, 996, 1077],
                "./ebook/EbookViewMore.vue": [51077, 9, 4121, 996, 1077],
                "./ebook/FailureSuccessPage": [49790, 9, 4121, 996, 9790],
                "./ebook/FailureSuccessPage.vue": [49790, 9, 4121, 996, 9790],
                "./ebook/InternationalFailureSuccessPage": [11812, 9, 4121, 996, 1812],
                "./ebook/InternationalFailureSuccessPage.vue": [11812, 9, 4121, 996, 1812],
                "./ebook/InternationalPaymentRedirectionPage": [14499, 9, 4121, 4499],
                "./ebook/InternationalPaymentRedirectionPage.vue": [14499, 9, 4121, 4499],
                "./ebook/InternationalPaymentSuccessPage": [39370, 9, 4121, 9370],
                "./ebook/InternationalPaymentSuccessPage.vue": [39370, 9, 4121, 9370],
                "./ebook/MyCart": [78797, 9, 4121, 996, 8797],
                "./ebook/MyCart.vue": [78797, 9, 4121, 996, 8797],
                "./ebook/OrderHistory": [33090, 9, 4121, 996, 3090],
                "./ebook/OrderHistory.vue": [33090, 9, 4121, 996, 3090],
                "./ebook/PaymentSuccessPage": [44334, 9, 4121, 996, 4334],
                "./ebook/PaymentSuccessPage.vue": [44334, 9, 4121, 996, 4334],
                "./ebook/common/AddLocation": [29741, 9, 4121, 996],
                "./ebook/common/AddLocation.vue": [29741, 9, 4121, 996],
                "./ebook/common/CartHead": [77693, 9, 4121, 996],
                "./ebook/common/CartHead.vue": [77693, 9, 4121, 996],
                "./ebook/common/EbookAddBalance": [24181, 9, 4121, 996, 4181],
                "./ebook/common/EbookAddBalance.vue": [24181, 9, 4121, 996, 4181],
                "./ebook/common/EbookContent": [49076, 9, 4121, 996],
                "./ebook/common/EbookContent.vue": [49076, 9, 4121, 996],
                "./ebook/common/EbookItem": [64277, 9, 4121, 996],
                "./ebook/common/EbookItem.vue": [64277, 9, 4121, 996],
                "./ebook/common/EbookPlayer": [12505, 9, 4121, 996],
                "./ebook/common/EbookPlayer.vue": [12505, 9, 4121, 996],
                "./ebook/common/EbookRating": [45834, 9, 4121, 996, 3453],
                "./ebook/common/EbookRating.vue": [45834, 9, 4121, 996, 3453],
                "./ebook/common/PaymentSuccessful": [77596, 9, 4121, 996, 7596],
                "./ebook/common/PaymentSuccessful.vue": [77596, 9, 4121, 996, 7596],
                "./ebook/common/PremiumAccess": [41525, 9, 4121, 996],
                "./ebook/common/PremiumAccess.vue": [41525, 9, 4121, 996],
                "./ebook/index": [46090, 9, 4121, 996, 6090],
                "./ebook/index.vue": [46090, 9, 4121, 996, 6090],
                "./feed/Index": [25799, 9, 4121, 996, 5799],
                "./feed/Index.vue": [25799, 9, 4121, 996, 5799],
                "./feed/common/FeedCard": [46824, 9, 4121, 996],
                "./feed/common/FeedCard.vue": [46824, 9, 4121, 996],
                "./foryou/Index": [55509, 9, 4121, 996, 5509],
                "./foryou/Index.vue": [55509, 9, 4121, 996, 5509],
                "./foryou/common/SuggestedPractice": [24205, 9, 4121, 996],
                "./foryou/common/SuggestedPractice.vue": [24205, 9, 4121, 996],
                "./gurus/GuruDetail": [99888, 9, 4121, 996, 9888],
                "./gurus/GuruDetail.vue": [99888, 9, 4121, 996, 9888],
                "./gurus/Index": [23795, 9, 4121, 996, 3795],
                "./gurus/Index.vue": [23795, 9, 4121, 996, 3795],
                "./history/Index": [22185, 9, 4121, 996, 2185],
                "./history/Index.vue": [22185, 9, 4121, 996, 2185],
                "./ielts/IeltsPractice": [12223, 9, 4121, 996],
                "./ielts/IeltsPractice.vue": [12223, 9, 4121, 996],
                "./ielts/Listening": [89787, 9, 4121, 996, 9787],
                "./ielts/Listening.vue": [89787, 9, 4121, 996, 9787],
                "./ielts/ListeningNew/Listening": [50812, 9, 4121, 996],
                "./ielts/ListeningNew/Listening.vue": [50812, 9, 4121, 996],
                "./ielts/ListeningNew/common/ListeningPopup": [34100, 9, 4121, 996],
                "./ielts/ListeningNew/common/ListeningPopup.vue": [34100, 9, 4121, 996],
                "./ielts/Reading": [24379, 9, 4121, 996, 4379],
                "./ielts/Reading.vue": [24379, 9, 4121, 996, 4379],
                "./ielts/ReadingNew/Reading": [34287, 9, 4121, 996],
                "./ielts/ReadingNew/Reading.vue": [34287, 9, 4121, 996],
                "./ielts/ReadingNew/common/ReadingPopup": [42961, 9, 4121, 996],
                "./ielts/ReadingNew/common/ReadingPopup.vue": [42961, 9, 4121, 996],
                "./ielts/Speaking/Speaking": [40026, 9, 4121, 996],
                "./ielts/Speaking/Speaking.vue": [40026, 9, 4121, 996],
                "./ielts/Speaking/common/MicTesting": [38191, 9, 4121, 996],
                "./ielts/Speaking/common/MicTesting.vue": [38191, 9, 4121, 996],
                "./ielts/Speaking/common/SpeakingPopup": [96325, 9, 4121, 996],
                "./ielts/Speaking/common/SpeakingPopup.vue": [96325, 9, 4121, 996],
                "./ielts/Speaking/common/speakingPopup/PartEndPreview": [49022, 9, 4121, 996],
                "./ielts/Speaking/common/speakingPopup/PartEndPreview.vue": [49022, 9, 4121, 996],
                "./ielts/Speaking/common/speakingPopup/QuestionRecordAnswer": [33043, 9, 4121, 996],
                "./ielts/Speaking/common/speakingPopup/QuestionRecordAnswer.vue": [33043, 9, 4121, 996],
                "./ielts/Speaking/common/speakingPopup/QuestionSubContextDisplay": [76474, 9, 996],
                "./ielts/Speaking/common/speakingPopup/QuestionSubContextDisplay.vue": [76474, 9, 996],
                "./ielts/Speaking/common/speakingPopup/SpeakingPlayer": [39147, 9, 4121, 996],
                "./ielts/Speaking/common/speakingPopup/SpeakingPlayer.vue": [39147, 9, 4121, 996],
                "./ielts/Writing/Writing": [1280, 9, 4121, 996],
                "./ielts/Writing/Writing.vue": [1280, 9, 4121, 996],
                "./ielts/Writing/common/AnswerUploadWriting": [82611, 9, 4121, 996],
                "./ielts/Writing/common/AnswerUploadWriting.vue": [82611, 9, 4121, 996],
                "./ielts/Writing/common/WritingPopup": [97540, 9, 4121, 996],
                "./ielts/Writing/common/WritingPopup.vue": [97540, 9, 4121, 996],
                "./ielts/common/IeltsIntroduction": [44655, 9, 4121, 996],
                "./ielts/common/IeltsIntroduction.vue": [44655, 9, 4121, 996],
                "./ielts/common/IeltsResult": [35418, 9, 4121, 996],
                "./ielts/common/IeltsResult.vue": [35418, 9, 4121, 996],
                "./ielts/common/IeltsTopBar": [53445, 9, 4121, 996],
                "./ielts/common/IeltsTopBar.vue": [53445, 9, 4121, 996],
                "./ielts/common/QuestionBody": [5839, 9, 996],
                "./ielts/common/QuestionBody.vue": [5839, 9, 996],
                "./ielts/common/QuestionSubContext": [17824, 9, 4121, 996],
                "./ielts/common/QuestionSubContext.vue": [17824, 9, 4121, 996],
                "./ielts/common/RoadMap": [13999, 9, 4121, 996],
                "./ielts/common/RoadMap.vue": [13999, 9, 4121, 996],
                "./ielts/common/SmartAudioPlayer": [5702, 9, 4121, 996],
                "./ielts/common/SmartAudioPlayer.vue": [5702, 9, 4121, 996],
                "./ielts/common/SolutionItem": [46155, 9, 4121, 996],
                "./ielts/common/SolutionItem.vue": [46155, 9, 4121, 996],
                "./ielts/common/Solutions": [51574, 9, 4121, 996],
                "./ielts/common/Solutions.vue": [51574, 9, 4121, 996],
                "./ielts/common/TestAutoEnded": [92167, 9, 4121, 996],
                "./ielts/common/TestAutoEnded.vue": [92167, 9, 4121, 996],
                "./ielts/common/TestEnded": [57924, 9, 4121, 996],
                "./ielts/common/TestEnded.vue": [57924, 9, 4121, 996],
                "./ielts/common/TestItem": [62468, 9, 4121, 2468],
                "./ielts/common/TestItem.vue": [62468, 9, 4121, 2468],
                "./ielts/common/TheRoadMap": [64134, 9, 4121, 996],
                "./ielts/common/TheRoadMap.vue": [64134, 9, 4121, 996],
                "./ielts/common/questionSubContext/DragDrop": [99236, 9, 4121, 996],
                "./ielts/common/questionSubContext/DragDrop.vue": [99236, 9, 4121, 996],
                "./ielts/common/questionSubContext/SubContextItem": [6412, 9, 4121, 996],
                "./ielts/common/questionSubContext/SubContextItem.vue": [6412, 9, 4121, 996],
                "./ielts/common/questionSubContext/SubContextWriting": [66861, 9, 4121, 996],
                "./ielts/common/questionSubContext/SubContextWriting.vue": [66861, 9, 4121, 996],
                "./ielts/common/questionSubContext/SyncCheckboxSubContext": [94566, 9, 4121, 996],
                "./ielts/common/questionSubContext/SyncCheckboxSubContext.vue": [94566, 9, 4121, 996],
                "./ielts/common/questionSubContext/SyncInputSubContext": [81588, 9, 4121, 996],
                "./ielts/common/questionSubContext/SyncInputSubContext.vue": [81588, 9, 4121, 996],
                "./ielts/common/questionSubContext/TableSubContext": [41976, 9, 996],
                "./ielts/common/questionSubContext/TableSubContext.vue": [41976, 9, 996],
                "./ielts/common/questionSubContext/TheTableView": [55480, 9, 4121, 996],
                "./ielts/common/questionSubContext/TheTableView.vue": [55480, 9, 4121, 996],
                "./ielts/common/questionSubContext/common/Dropdown": [78702, 9, 4121, 8702],
                "./ielts/common/questionSubContext/common/Dropdown.vue": [78702, 9, 4121, 8702],
                "./ielts/common/questionSubContext/common/Input": [41282, 9, 996],
                "./ielts/common/questionSubContext/common/Input.vue": [41282, 9, 996],
                "./ielts/common/questionSubContext/common/template-parser": [91824, 9, 996],
                "./ielts/common/questionSubContext/common/template-parser.js": [91824, 9, 996],
                "./layouts/Auth": [77053, 9, 4121, 7053],
                "./layouts/Auth.vue": [77053, 9, 4121, 7053],
                "./layouts/HeaderItems": [12899, 9, 4121, 996],
                "./layouts/HeaderItems.vue": [12899, 9, 4121, 996],
                "./layouts/HeaderItems/DarkMode": [23090, 9, 4121, 996],
                "./layouts/HeaderItems/DarkMode.vue": [23090, 9, 4121, 996],
                "./layouts/HeaderItems/GlobalSearch": [64656, 9, 4121, 996, 4656],
                "./layouts/HeaderItems/GlobalSearch.vue": [64656, 9, 4121, 996, 4656],
                "./layouts/HeaderItems/HeaderSearch": [43632, 9, 4121, 996],
                "./layouts/HeaderItems/HeaderSearch.vue": [43632, 9, 4121, 996],
                "./layouts/HeaderItems/NavCart": [9732, 9, 4121, 996, 9732],
                "./layouts/HeaderItems/NavCart.vue": [9732, 9, 4121, 996, 9732],
                "./layouts/HeaderItems/NavChat": [33068, 9, 4121, 996, 3068],
                "./layouts/HeaderItems/NavChat.vue": [33068, 9, 4121, 996, 3068],
                "./layouts/HeaderItems/NavLang": [95125, 9, 4121, 996],
                "./layouts/HeaderItems/NavLang.vue": [95125, 9, 4121, 996],
                "./layouts/HeaderItems/NavWallet": [83056, 9, 4121, 996],
                "./layouts/HeaderItems/NavWallet.vue": [83056, 9, 4121, 996],
                "./layouts/HeaderItems/Notification": [14524, 9, 4121, 996],
                "./layouts/HeaderItems/Notification.vue": [14524, 9, 4121, 996],
                "./layouts/HeaderItems/PackageDropdown": [20992, 9, 4121, 996],
                "./layouts/HeaderItems/PackageDropdown.vue": [20992, 9, 4121, 996],
                "./layouts/HeaderItems/PackageDropdownNew": [61510, 9, 4121, 996],
                "./layouts/HeaderItems/PackageDropdownNew.vue": [61510, 9, 4121, 996],
                "./layouts/HeaderItems/PackageLinkNav": [88999, 9, 4121, 996],
                "./layouts/HeaderItems/PackageLinkNav.vue": [88999, 9, 4121, 996],
                "./layouts/HeaderItems/UserMenu": [83866, 9, 4121, 996],
                "./layouts/HeaderItems/UserMenu.vue": [83866, 9, 4121, 996],
                "./layouts/HeaderItems/agent/AgentBalance": [31239, 9, 4121, 996],
                "./layouts/HeaderItems/agent/AgentBalance.vue": [31239, 9, 4121, 996],
                "./layouts/HeaderItems/agent/InviteStudents": [25383, 9, 4121, 996],
                "./layouts/HeaderItems/agent/InviteStudents.vue": [25383, 9, 4121, 996],
                "./layouts/HeaderItems/notification/NotificationItem": [69201, 9, 4121, 996],
                "./layouts/HeaderItems/notification/NotificationItem.vue": [69201, 9, 4121, 996],
                "./layouts/HeaderItems/notification/common/NotifyCommon": [96806, 9, 4121, 996],
                "./layouts/HeaderItems/notification/common/NotifyCommon.vue": [96806, 9, 4121, 996],
                "./layouts/HeaderItems/notification/common/NotifyDiscussion": [39916, 9, 4121, 9916],
                "./layouts/HeaderItems/notification/common/NotifyDiscussion.vue": [39916, 9, 4121, 9916],
                "./layouts/HeaderItems/notification/common/NotifyPractice": [59988, 9, 4121, 996, 9988],
                "./layouts/HeaderItems/notification/common/NotifyPractice.vue": [59988, 9, 4121, 996, 9988],
                "./layouts/Main": [3125, 9, 4121, 996, 3125],
                "./layouts/Main.vue": [3125, 9, 4121, 996, 3125],
                "./layouts/MainBackup": [60124, 9, 4121, 996, 124],
                "./layouts/MainBackup.vue": [60124, 9, 4121, 996, 124],
                "./layouts/Others/DailyQuizFABIcon": [92217, 9, 4121, 996],
                "./layouts/Others/DailyQuizFABIcon.vue": [92217, 9, 4121, 996],
                "./layouts/common/IntroVideo": [23496, 9, 4121, 996],
                "./layouts/common/IntroVideo.vue": [23496, 9, 4121, 996],
                "./meeting/Index": [41220, 9, 4121, 996],
                "./meeting/Index.vue": [41220, 9, 4121, 996],
                "./meeting/JitsiJoin": [94067, 9, 4121, 996, 4067],
                "./meeting/JitsiJoin.vue": [94067, 9, 4121, 996, 4067],
                "./meeting/LiveRecordedVideos": [71867, 9, 4121, 996],
                "./meeting/LiveRecordedVideos.vue": [71867, 9, 4121, 996],
                "./meeting/MeetingDetail": [62208, 9, 4121, 996, 2208],
                "./meeting/MeetingDetail.vue": [62208, 9, 4121, 996, 2208],
                "./meeting/MeetingDetailNew": [40038, 9, 4121, 996, 38],
                "./meeting/MeetingDetailNew.vue": [40038, 9, 4121, 996, 38],
                "./meeting/MeetingPremium": [62778, 9, 4121, 996, 2778],
                "./meeting/MeetingPremium.vue": [62778, 9, 4121, 996, 2778],
                "./meeting/ZoomClientView": [10396, 9, 4121, 396],
                "./meeting/ZoomClientView.vue": [10396, 9, 4121, 396],
                "./meeting/common/LiveBlink": [11519, 9, 996],
                "./meeting/common/LiveBlink.vue": [11519, 9, 996],
                "./meeting/common/LiveClassNotice": [83601, 9, 4121, 996],
                "./meeting/common/LiveClassNotice.vue": [83601, 9, 4121, 996],
                "./meeting/common/LiveIcon": [88560, 9, 996],
                "./meeting/common/LiveIcon.vue": [88560, 9, 996],
                "./meeting/common/MeetingItem": [81281, 9, 4121, 996],
                "./meeting/common/MeetingItem.vue": [81281, 9, 4121, 996],
                "./meeting/common/MeetingJoinTemplate": [93188, 9, 4121, 996],
                "./meeting/common/MeetingJoinTemplate.vue": [93188, 9, 4121, 996],
                "./meeting/common/MeetingRating": [60592, 9, 4121, 996],
                "./meeting/common/MeetingRating.vue": [60592, 9, 4121, 996],
                "./meeting/common/MeetingVideoItem": [63887, 9, 4121, 996],
                "./meeting/common/MeetingVideoItem.vue": [63887, 9, 4121, 996],
                "./meeting/common/NoLiveClass": [53064, 9, 4121, 996],
                "./meeting/common/NoLiveClass.vue": [53064, 9, 4121, 996],
                "./meeting/common/YoutubeLive": [62987, 9, 4121, 996, 2987],
                "./meeting/common/YoutubeLive.vue": [62987, 9, 4121, 996, 2987],
                "./meeting/common/youtubeLive/CommentList": [54136, 9, 4121, 996],
                "./meeting/common/youtubeLive/CommentList.vue": [54136, 9, 4121, 996],
                "./mockExam/Exam": [68605, 9, 4121, 996, 8605],
                "./mockExam/Exam.vue": [68605, 9, 4121, 996, 8605],
                "./mockExam/ExamLists": [24681, 9, 4121, 996],
                "./mockExam/ExamLists.vue": [24681, 9, 4121, 996],
                "./mockExam/KoreanPractice/KoreanPractice": [81134, 9, 4121, 996],
                "./mockExam/KoreanPractice/KoreanPractice.vue": [81134, 9, 4121, 996],
                "./mockExam/MockExam": [74017, 9, 4121, 996, 4017],
                "./mockExam/MockExam.vue": [74017, 9, 4121, 996, 4017],
                "./mockExam/Result": [9179, 9, 4121, 996, 4417],
                "./mockExam/Result.vue": [9179, 9, 4121, 996, 4417],
                "./mockExam/ResultNew": [66284, 9, 4121, 996],
                "./mockExam/ResultNew.vue": [66284, 9, 4121, 996],
                "./mockExam/VideoExplanation": [23073, 9, 4121, 996, 3073],
                "./mockExam/VideoExplanation.vue": [23073, 9, 4121, 996, 3073],
                "./mockExam/common/DailyQuiz": [38638, 9, 4121, 996],
                "./mockExam/common/DailyQuiz.vue": [38638, 9, 4121, 996],
                "./mockExam/common/ExamInfo": [56531, 9, 4121, 996],
                "./mockExam/common/ExamInfo.vue": [56531, 9, 4121, 996],
                "./mockExam/common/ExamInfo/Banner": [91457, 9, 4121, 996],
                "./mockExam/common/ExamInfo/Banner.vue": [91457, 9, 4121, 996],
                "./mockExam/common/ExamInfo/MarkingScheme": [46976, 9, 4121, 996],
                "./mockExam/common/ExamInfo/MarkingScheme.vue": [46976, 9, 4121, 996],
                "./mockExam/common/ExamInfo/Overview": [3887, 9, 4121, 996],
                "./mockExam/common/ExamInfo/Overview.vue": [3887, 9, 4121, 996],
                "./mockExam/common/ExamInfo/Reward": [17576, 9, 996],
                "./mockExam/common/ExamInfo/Reward.vue": [17576, 9, 996],
                "./mockExam/common/ExamInfo/RewardItem": [84724, 9, 996],
                "./mockExam/common/ExamInfo/RewardItem.vue": [84724, 9, 996],
                "./mockExam/common/ExamInfo/TermsInfo": [39965, 9, 9965],
                "./mockExam/common/ExamInfo/TermsInfo.vue": [39965, 9, 9965],
                "./mockExam/common/FeaturedItem": [1014, 9, 4121, 996, 1014],
                "./mockExam/common/FeaturedItem.vue": [1014, 9, 4121, 996, 1014],
                "./mockExam/common/MockExamItem": [52690, 9, 4121, 996],
                "./mockExam/common/MockExamItem.vue": [52690, 9, 4121, 996],
                "./mockExam/common/MockExamItem/Actions": [2412, 9, 4121, 996],
                "./mockExam/common/MockExamItem/Actions.vue": [2412, 9, 4121, 996],
                "./mockExam/common/MockExamItem/ExamImage": [83174, 9, 4121, 996],
                "./mockExam/common/MockExamItem/ExamImage.vue": [83174, 9, 4121, 996],
                "./mockExam/common/ModelSetInfo": [44945, 9, 4121, 996],
                "./mockExam/common/ModelSetInfo.vue": [44945, 9, 4121, 996],
                "./mockExam/common/OfflineMockExamItem": [89417, 9, 4121, 996, 9417],
                "./mockExam/common/OfflineMockExamItem.vue": [89417, 9, 4121, 996, 9417],
                "./mockExam/common/PaymentForm": [18069, 9, 4121, 996],
                "./mockExam/common/PaymentForm.vue": [18069, 9, 4121, 996],
                "./mockExam/common/QuestionStat": [99736, 9, 4121, 996],
                "./mockExam/common/QuestionStat.vue": [99736, 9, 4121, 996],
                "./mockExam/common/UpcommingContainer": [18978, 9, 996],
                "./mockExam/common/UpcommingContainer.vue": [18978, 9, 996],
                "./mockExam/common/UpcommingDialog": [24493, 9, 4121, 996],
                "./mockExam/common/UpcommingDialog.vue": [24493, 9, 4121, 996],
                "./mockExam/common/UpcommingItem": [26383, 9, 4121, 996],
                "./mockExam/common/UpcommingItem.vue": [26383, 9, 4121, 996],
                "./mockExam/common/result/CompareResult": [90297, 9, 4121, 996],
                "./mockExam/common/result/CompareResult.vue": [90297, 9, 4121, 996],
                "./mockExam/common/result/Overview": [2801, 9, 4121, 996, 2801],
                "./mockExam/common/result/Overview.vue": [2801, 9, 4121, 996, 2801],
                "./mockExam/common/result/PracticeHistoryList": [72888, 9, 4121, 996],
                "./mockExam/common/result/PracticeHistoryList.vue": [72888, 9, 4121, 996],
                "./mockExam/common/result/Rank": [8302, 9, 4121, 996],
                "./mockExam/common/result/Rank.vue": [8302, 9, 4121, 996],
                "./mockExam/common/result/SubjectItem": [969, 9, 4121, 996],
                "./mockExam/common/result/SubjectItem.vue": [969, 9, 4121, 996],
                "./mockExam/common/result/SubjectProgress": [6317, 9, 4121, 996],
                "./mockExam/common/result/SubjectProgress.vue": [6317, 9, 4121, 996],
                "./mockExam/common/result/UnitProgress": [93733, 9, 4121, 996],
                "./mockExam/common/result/UnitProgress.vue": [93733, 9, 4121, 996],
                "./mockExam/mockPractice/Practice": [79957, 9, 4121, 996],
                "./mockExam/mockPractice/Practice.vue": [79957, 9, 4121, 996],
                "./mockExam/mockPractice/PracticeCheck": [19960, 9, 4121, 996, 9960],
                "./mockExam/mockPractice/PracticeCheck.vue": [19960, 9, 4121, 996, 9960],
                "./mockExam/mockPractice/common/AnswerItem": [52033, 9, 4121, 996],
                "./mockExam/mockPractice/common/AnswerItem.vue": [52033, 9, 4121, 996],
                "./mockExam/mockPractice/common/AnswerUpload": [54924, 9, 4121, 996],
                "./mockExam/mockPractice/common/AnswerUpload.vue": [54924, 9, 4121, 996],
                "./mockExam/mockPractice/common/Confirm": [25756, 9, 4121, 996, 5756],
                "./mockExam/mockPractice/common/Confirm.vue": [25756, 9, 4121, 996, 5756],
                "./mockExam/mockPractice/common/CustomAudioPlayer": [93047, 9, 4121, 996, 3047],
                "./mockExam/mockPractice/common/CustomAudioPlayer.vue": [93047, 9, 4121, 996, 3047],
                "./mockExam/mockPractice/common/EntranceMode": [24545, 9, 4121, 996],
                "./mockExam/mockPractice/common/EntranceMode.vue": [24545, 9, 4121, 996],
                "./mockExam/mockPractice/common/ExamMode": [94043, 9, 4121, 996],
                "./mockExam/mockPractice/common/ExamMode.vue": [94043, 9, 4121, 996],
                "./mockExam/mockPractice/common/ExamSettings": [37113, 9, 4121, 996],
                "./mockExam/mockPractice/common/ExamSettings.vue": [37113, 9, 4121, 996],
                "./mockExam/mockPractice/common/Explanation": [10576, 9, 4121, 996],
                "./mockExam/mockPractice/common/Explanation.vue": [10576, 9, 4121, 996],
                "./mockExam/mockPractice/common/FooterNavigation": [65326, 9, 4121, 996],
                "./mockExam/mockPractice/common/FooterNavigation.vue": [65326, 9, 4121, 996],
                "./mockExam/mockPractice/common/NormalMode": [1965, 9, 4121, 996],
                "./mockExam/mockPractice/common/NormalMode.vue": [1965, 9, 4121, 996],
                "./mockExam/mockPractice/common/PreviewImages": [72246, 9, 4121, 996],
                "./mockExam/mockPractice/common/PreviewImages.vue": [72246, 9, 4121, 996],
                "./mockExam/mockPractice/common/QuestionContext": [2910, 9, 4121, 996],
                "./mockExam/mockPractice/common/QuestionContext.vue": [2910, 9, 4121, 996],
                "./mockExam/mockPractice/common/QuestionDisplay": [63498, 9, 4121, 996],
                "./mockExam/mockPractice/common/QuestionDisplay.vue": [63498, 9, 4121, 996],
                "./mockExam/mockPractice/common/QuestionRoadMap": [75476, 9, 4121, 996],
                "./mockExam/mockPractice/common/QuestionRoadMap.vue": [75476, 9, 4121, 996],
                "./mockExam/mockPractice/common/QuestionTile": [70235, 9, 4121, 996],
                "./mockExam/mockPractice/common/QuestionTile.vue": [70235, 9, 4121, 996],
                "./mockExam/mockPractice/common/Result": [52796, 9, 4121, 996],
                "./mockExam/mockPractice/common/Result.vue": [52796, 9, 4121, 996],
                "./mockExam/mockPractice/common/TopBar": [66186, 9, 4121, 996],
                "./mockExam/mockPractice/common/TopBar.vue": [66186, 9, 4121, 996],
                "./myspace/MySpace": [94300, 9, 4300],
                "./myspace/MySpace.vue": [94300, 9, 4300],
                "./myspace/common/CourseItem": [26938, 9, 4121, 996],
                "./myspace/common/CourseItem.vue": [26938, 9, 4121, 996],
                "./myspace/common/ReportCardItem": [94535, 9, 4121, 996],
                "./myspace/common/ReportCardItem.vue": [94535, 9, 4121, 996],
                "./myspace/common/SectionProgressCard": [36854, 9, 4121, 996],
                "./myspace/common/SectionProgressCard.vue": [36854, 9, 4121, 996],
                "./myspace/common/SectionProgressItem": [12071, 9, 4121, 996, 2071],
                "./myspace/common/SectionProgressItem.vue": [12071, 9, 4121, 996, 2071],
                "./payment/Failed": [93262, 9, 4121, 3262],
                "./payment/Failed.vue": [93262, 9, 4121, 3262],
                "./payment/FreeTrial": [6099, 9, 4121, 996, 6099],
                "./payment/FreeTrial.vue": [6099, 9, 4121, 996, 6099],
                "./payment/Success": [15487, 9, 4121, 996, 5487],
                "./payment/Success.vue": [15487, 9, 4121, 996, 5487],
                "./payment/common/Withdraw": [82078, 9, 4121, 996],
                "./payment/common/Withdraw.vue": [82078, 9, 4121, 996],
                "./playlist": [488, 9, 4121, 996, 488],
                "./playlist/": [488, 9, 4121, 996, 488],
                "./playlist/MainLayout": [89313, 9, 4121, 996, 9313],
                "./playlist/MainLayout.vue": [89313, 9, 4121, 996, 9313],
                "./playlist/categoriesContent": [39477, 9, 4121, 996, 9477],
                "./playlist/categoriesContent.vue": [39477, 9, 4121, 996, 9477],
                "./playlist/common/Comment/ActionFooter": [89514, 9, 4121, 996],
                "./playlist/common/Comment/ActionFooter.vue": [89514, 9, 4121, 996],
                "./playlist/common/Comment/AddComment": [95294, 9, 4121, 996],
                "./playlist/common/Comment/AddComment.vue": [95294, 9, 4121, 996],
                "./playlist/common/Comment/Comment": [41192, 9, 4121, 996],
                "./playlist/common/Comment/Comment.vue": [41192, 9, 4121, 996],
                "./playlist/common/Comment/CommentItem": [60284, 9, 4121, 996],
                "./playlist/common/Comment/CommentItem.vue": [60284, 9, 4121, 996],
                "./playlist/common/Comment/CommentItems": [47635, 9, 4121, 996],
                "./playlist/common/Comment/CommentItems.vue": [47635, 9, 4121, 996],
                "./playlist/common/Comment/CommentList": [81205, 9, 4121, 996],
                "./playlist/common/Comment/CommentList.vue": [81205, 9, 4121, 996],
                "./playlist/common/Comment/ReplyItem": [84239, 9, 4121, 996],
                "./playlist/common/Comment/ReplyItem.vue": [84239, 9, 4121, 996],
                "./playlist/common/Discussion": [47733, 9, 4121, 996],
                "./playlist/common/Discussion.vue": [47733, 9, 4121, 996],
                "./playlist/common/PlaylistStructure": [22306, 9, 4121, 996, 2306],
                "./playlist/common/PlaylistStructure.vue": [22306, 9, 4121, 996, 2306],
                "./playlist/common/Report": [507, 9, 4121, 996],
                "./playlist/common/Report.vue": [507, 9, 4121, 996],
                "./playlist/common/structure/PlaylistStructureItem": [70476, 9, 4121, 996],
                "./playlist/common/structure/PlaylistStructureItem.vue": [70476, 9, 4121, 996],
                "./playlist/common/structure/StructureContent": [36256, 9, 4121, 996],
                "./playlist/common/structure/StructureContent.vue": [36256, 9, 4121, 996],
                "./playlist/content": [81464, 9, 4121, 996, 1464],
                "./playlist/content.vue": [81464, 9, 4121, 996, 1464],
                "./playlist/content/Audio": [97010, 9, 996],
                "./playlist/content/Audio.vue": [97010, 9, 996],
                "./playlist/content/ContentAction": [19982, 9, 4121, 996],
                "./playlist/content/ContentAction.vue": [19982, 9, 4121, 996],
                "./playlist/content/DisplayRating": [57223, 9, 4121, 996],
                "./playlist/content/DisplayRating.vue": [57223, 9, 4121, 996],
                "./playlist/content/Note": [25282, 9, 4121, 996],
                "./playlist/content/Note.vue": [25282, 9, 4121, 996],
                "./playlist/content/Video": [17438, 9, 4121, 996],
                "./playlist/content/Video.vue": [17438, 9, 4121, 996],
                "./playlist/content/interactive/ContentQuestion": [35164, 9, 4121, 996],
                "./playlist/content/interactive/ContentQuestion.vue": [35164, 9, 4121, 996],
                "./playlist/content/interactive/InteractiveContent": [42517, 9, 4121, 996],
                "./playlist/content/interactive/InteractiveContent.vue": [42517, 9, 4121, 996],
                "./playlist/index": [488, 9, 4121, 996, 488],
                "./playlist/index.vue": [488, 9, 4121, 996, 488],
                "./playlist/layout": [88661, 9, 4121, 996],
                "./playlist/layout.vue": [88661, 9, 4121, 996],
                "./playlist/more": [65678, 9, 4121, 996, 5678],
                "./playlist/more.vue": [65678, 9, 4121, 996, 5678],
                "./practice/Assessment": [85485, 9, 4121, 996],
                "./practice/Assessment.vue": [85485, 9, 4121, 996],
                "./practice/ModelSet": [88116, 9, 4121, 996],
                "./practice/ModelSet.vue": [88116, 9, 4121, 996],
                "./practice/Practice.Backup": [64382, 9, 4121, 996, 4382],
                "./practice/Practice.Backup.vue": [64382, 9, 4121, 996, 4382],
                "./practice/PracticeNew/KoreanPractice/KoreanPractice": [50002, 9, 4121, 996],
                "./practice/PracticeNew/KoreanPractice/KoreanPractice.vue": [50002, 9, 4121, 996],
                "./practice/PracticeNew/Practice": [64084, 9, 4121, 996],
                "./practice/PracticeNew/Practice.vue": [64084, 9, 4121, 996],
                "./practice/PracticeNew/PracticeCheck": [15980, 9, 4121, 996, 5980],
                "./practice/PracticeNew/PracticeCheck.vue": [15980, 9, 4121, 996, 5980],
                "./practice/PracticeNew/common/CustomAudioPlayer": [71605, 9, 4121, 996, 1605],
                "./practice/PracticeNew/common/CustomAudioPlayer.vue": [71605, 9, 4121, 996, 1605],
                "./practice/PracticeSelect": [86206, 9, 4121, 996],
                "./practice/PracticeSelect.vue": [86206, 9, 4121, 996],
                "./practice/PracticeSelectNew": [15496, 9, 4121, 996],
                "./practice/PracticeSelectNew.vue": [15496, 9, 4121, 996],
                "./practice/common/AnswerItem": [96553, 9, 4121, 996],
                "./practice/common/AnswerItem.vue": [96553, 9, 4121, 996],
                "./practice/common/AssessmentItem": [84771, 9, 4121, 996],
                "./practice/common/AssessmentItem.vue": [84771, 9, 4121, 996],
                "./practice/common/CustomSyllabusList": [48358, 9, 4121, 996],
                "./practice/common/CustomSyllabusList.vue": [48358, 9, 4121, 996],
                "./practice/common/CustomSyllabusListItem": [1293, 9, 4121, 996],
                "./practice/common/CustomSyllabusListItem.vue": [1293, 9, 4121, 996],
                "./practice/common/EditorLatexRenderer": [38362, 9, 4121, 996],
                "./practice/common/EditorLatexRenderer.vue": [38362, 9, 4121, 996],
                "./practice/common/Explanation": [64449, 9, 4121, 996],
                "./practice/common/Explanation.vue": [64449, 9, 4121, 996],
                "./practice/common/LeftInfos": [46048, 9, 4121, 996],
                "./practice/common/LeftInfos.vue": [46048, 9, 4121, 996],
                "./practice/common/ModelSetItem": [27821, 9, 4121, 996],
                "./practice/common/ModelSetItem.vue": [27821, 9, 4121, 996],
                "./practice/common/PracticeLoading": [93544, 9, 4121, 996],
                "./practice/common/PracticeLoading.vue": [93544, 9, 4121, 996],
                "./practice/common/QuestionDisplay": [18869, 9, 4121, 996],
                "./practice/common/QuestionDisplay.vue": [18869, 9, 4121, 996],
                "./practice/common/QuestionList": [560, 9, 996],
                "./practice/common/QuestionList.vue": [560, 9, 996],
                "./practice/common/ReportQuestion": [40832, 9, 4121, 996],
                "./practice/common/ReportQuestion.vue": [40832, 9, 4121, 996],
                "./practice/common/Result": [92169, 9, 4121, 996, 2169],
                "./practice/common/Result.vue": [92169, 9, 4121, 996, 2169],
                "./practice/common/ResultNew": [26613, 9, 4121, 996],
                "./practice/common/ResultNew.vue": [26613, 9, 4121, 996],
                "./practice/common/TheTextEditor": [29676, 9, 4121, 996],
                "./practice/common/TheTextEditor.vue": [29676, 9, 4121, 996],
                "./practice/modelSet/IeltsSpeakingBooking": [34332, 9, 4121, 996],
                "./practice/modelSet/IeltsSpeakingBooking.vue": [34332, 9, 4121, 996],
                "./practice/modelSet/IeltsSpeakingList": [96803, 9, 4121, 996],
                "./practice/modelSet/IeltsSpeakingList.vue": [96803, 9, 4121, 996],
                "./practice/modelSet/common/BookingTimeSlots": [97359, 9, 4121, 996],
                "./practice/modelSet/common/BookingTimeSlots.vue": [97359, 9, 4121, 996],
                "./practice/modelSet/common/CallBookingCard": [71278, 9, 4121, 996],
                "./practice/modelSet/common/CallBookingCard.vue": [71278, 9, 4121, 996],
                "./products/ProductDetail": [16731, 9, 4121, 996, 6731],
                "./products/ProductDetail.vue": [16731, 9, 4121, 996, 6731],
                "./products/ProductDetail/CourseDetail": [60567, 9, 996],
                "./products/ProductDetail/CourseDetail.vue": [60567, 9, 996],
                "./products/ProductDetail/InfoBanner": [91393, 9, 4121, 996, 1393],
                "./products/ProductDetail/InfoBanner.vue": [91393, 9, 4121, 996, 1393],
                "./products/ProductDetail/TableContentsTree": [40603, 9, 4121, 996],
                "./products/ProductDetail/TableContentsTree.vue": [40603, 9, 4121, 996],
                "./products/ProductDetailV1": [65221, 9, 4121, 996, 5221],
                "./products/ProductDetailV1.vue": [65221, 9, 4121, 996, 5221],
                "./products/ProductDetailV1/CourseGurus": [52577, 9, 4121, 996],
                "./products/ProductDetailV1/CourseGurus.vue": [52577, 9, 4121, 996],
                "./products/ProductDetailV1/CustomSyllabus": [1698, 9, 4121, 996],
                "./products/ProductDetailV1/CustomSyllabus.vue": [1698, 9, 4121, 996],
                "./products/ProductDetailV1/CustomSyllabusRow": [17712, 9, 4121, 996],
                "./products/ProductDetailV1/CustomSyllabusRow.vue": [17712, 9, 4121, 996],
                "./products/ProductDetailV1/CustomSyllabusTree": [30325, 9, 4121, 996],
                "./products/ProductDetailV1/CustomSyllabusTree.vue": [30325, 9, 4121, 996],
                "./products/ProductDetailV1/FreeVideos": [14403, 9, 4121, 996],
                "./products/ProductDetailV1/FreeVideos.vue": [14403, 9, 4121, 996],
                "./products/ProductDetailV1/TableItem": [8590, 9, 4121, 996],
                "./products/ProductDetailV1/TableItem.vue": [8590, 9, 4121, 996],
                "./products/ProductDetailV1/TableList": [13554, 9, 4121, 996],
                "./products/ProductDetailV1/TableList.vue": [13554, 9, 4121, 996],
                "./products/ProductListing": [74157, 9, 4121, 996, 4157],
                "./products/ProductListing.vue": [74157, 9, 4121, 996, 4157],
                "./profile/Alumni/Alumni": [87152, 9, 4121, 996, 7152],
                "./profile/Alumni/Alumni.vue": [87152, 9, 4121, 996, 7152],
                "./profile/Alumni/AlumniDetail": [2046, 9, 4121, 996, 2046],
                "./profile/Alumni/AlumniDetail.vue": [2046, 9, 4121, 996, 2046],
                "./profile/Alumni/AlumniListing": [37825, 9, 4121, 996, 7825],
                "./profile/Alumni/AlumniListing.vue": [37825, 9, 4121, 996, 7825],
                "./profile/Events": [7050, 9, 4121, 996, 7050],
                "./profile/Events.vue": [7050, 9, 4121, 996, 7050],
                "./profile/MyCourses": [76150, 9, 4121, 996, 6150],
                "./profile/MyCourses.vue": [76150, 9, 4121, 996, 6150],
                "./profile/PrivacyPolicy": [42206, 9, 996, 2206],
                "./profile/PrivacyPolicy.vue": [42206, 9, 996, 2206],
                "./profile/Profile": [99613, 9, 4121, 996, 9613],
                "./profile/Profile.vue": [99613, 9, 4121, 996, 9613],
                "./profile/Support": [99411, 9, 4121, 996, 9411],
                "./profile/Support.vue": [99411, 9, 4121, 996, 9411],
                "./profile/TermsCondition": [3452, 9, 996, 3452],
                "./profile/TermsCondition.vue": [3452, 9, 996, 3452],
                "./profile/blog": [62997, 9, 4121, 996, 2997],
                "./profile/blog.vue": [62997, 9, 4121, 996, 2997],
                "./profile/blog/BlogContent": [72668, 9, 996],
                "./profile/blog/BlogContent.vue": [72668, 9, 996],
                "./profile/blog/{id}": [98102, 9, 4121, 996, 8102],
                "./profile/blog/{id}.vue": [98102, 9, 4121, 996, 8102],
                "./profile/common/AlumniItem": [22135, 9, 996],
                "./profile/common/AlumniItem.vue": [22135, 9, 996],
                "./profile/common/AlumniListItem": [30521, 9, 4121, 996],
                "./profile/common/AlumniListItem.vue": [30521, 9, 4121, 996],
                "./profile/common/ChangePassword": [5144, 9, 4121, 996],
                "./profile/common/ChangePassword.vue": [5144, 9, 4121, 996],
                "./profile/common/IdCard": [85991, 9, 4121, 5991],
                "./profile/common/IdCard.vue": [85991, 9, 4121, 5991],
                "./profile/common/MyCoursesList": [17209, 9, 4121, 996],
                "./profile/common/MyCoursesList.vue": [17209, 9, 4121, 996],
                "./profile/common/MyWallet": [5571, 9, 4121, 996],
                "./profile/common/MyWallet.vue": [5571, 9, 4121, 996],
                "./profile/common/PayementMethod": [85375, 9, 4121, 996],
                "./profile/common/PayementMethod.vue": [85375, 9, 4121, 996],
                "./profile/common/PrivacyCondition": [72553, 9, 996],
                "./profile/common/PrivacyCondition.vue": [72553, 9, 996],
                "./profile/common/ProfileEdit": [90277, 9, 4121, 996],
                "./profile/common/ProfileEdit.vue": [90277, 9, 4121, 996],
                "./profile/common/ProfileSettings": [32139, 9, 4121, 2139],
                "./profile/common/ProfileSettings.vue": [32139, 9, 4121, 2139],
                "./profile/common/TransactionNew": [80943, 9, 4121, 996],
                "./profile/common/TransactionNew.vue": [80943, 9, 4121, 996],
                "./profile/support/faq": [4858, 9, 4121, 996, 4858],
                "./profile/support/faq.vue": [4858, 9, 4121, 996, 4858],
                "./profile/support/internet": [31435, 9, 4121, 996, 1435],
                "./profile/support/internet.vue": [31435, 9, 4121, 996, 1435],
                "./profile/support/isp": [76488, 9, 4121, 996, 6488],
                "./profile/support/isp.vue": [76488, 9, 4121, 996, 6488],
                "./publicPages/EventRegister": [70207, 9, 4121, 207],
                "./publicPages/EventRegister.vue": [70207, 9, 4121, 207],
                "./reportCard/Index": [41087, 9, 4121, 996, 1087],
                "./reportCard/Index.vue": [41087, 9, 4121, 996, 1087],
                "./reportCard/common/ReportCardItem": [65153, 9, 4121, 996],
                "./reportCard/common/ReportCardItem.vue": [65153, 9, 4121, 996],
                "./resources/Index": [16188, 9, 4121, 996, 6188],
                "./resources/Index.vue": [16188, 9, 4121, 996, 6188],
                "./resources/ResourcesItem": [63689, 9, 4121, 996],
                "./resources/ResourcesItem.vue": [63689, 9, 4121, 996],
                "./rooms/Index": [74245, 9, 4121, 996, 4245],
                "./rooms/Index.vue": [74245, 9, 4121, 996, 4245],
                "./rooms/JitsiAudioJoin": [66445, 9, 4121, 996, 6445],
                "./rooms/JitsiAudioJoin.vue": [66445, 9, 4121, 996, 6445],
                "./rooms/NoiseSuppressor": [55057, 7, 5057],
                "./rooms/NoiseSuppressor.js": [55057, 7, 5057],
                "./rooms/PublicMobileJoinRoom": [69084, 9, 9084],
                "./rooms/PublicMobileJoinRoom.vue": [69084, 9, 9084],
                "./rooms/RoomJoin": [37849, 9, 4121, 996],
                "./rooms/RoomJoin.vue": [37849, 9, 4121, 996],
                "./rooms/RoomJoinMobile": [24161, 9, 4121, 996, 4161],
                "./rooms/RoomJoinMobile.vue": [24161, 9, 4121, 996, 4161],
                "./rooms/Sample": [13205, 9, 4121, 996, 3205],
                "./rooms/Sample.vue": [13205, 9, 4121, 996, 3205],
                "./rooms/common/ActivityPreview": [69920, 9, 4121, 996],
                "./rooms/common/ActivityPreview.vue": [69920, 9, 4121, 996],
                "./rooms/common/AudioSelect": [64931, 9, 4121, 996],
                "./rooms/common/AudioSelect.vue": [64931, 9, 4121, 996],
                "./rooms/common/LocalParticipantItem": [61583, 9, 4121, 996],
                "./rooms/common/LocalParticipantItem.vue": [61583, 9, 4121, 996],
                "./rooms/common/ParticipantItem": [96500, 9, 4121, 996],
                "./rooms/common/ParticipantItem.vue": [96500, 9, 4121, 996],
                "./rooms/common/RoomActivities": [44560, 9, 4121, 996],
                "./rooms/common/RoomActivities.vue": [44560, 9, 4121, 996],
                "./rooms/common/RoomActivityAdd": [38047, 9, 4121, 996],
                "./rooms/common/RoomActivityAdd.vue": [38047, 9, 4121, 996],
                "./rooms/common/common/AudioVisual": [2708, 9, 996],
                "./rooms/common/common/AudioVisual.vue": [2708, 9, 996],
                "./rooms/common/common/AudioVisual1": [28629, 9, 8629],
                "./rooms/common/common/AudioVisual1.vue": [28629, 9, 8629],
                "./rooms/common/common/QuestionPreview": [95271, 9, 4121, 996],
                "./rooms/common/common/QuestionPreview.vue": [95271, 9, 4121, 996],
                "./saved/SavedContents": [66401, 9, 4121, 996],
                "./saved/SavedContents.vue": [66401, 9, 4121, 996],
                "./saved/common/ContentItem": [35249, 9, 4121, 996, 5249],
                "./saved/common/ContentItem.vue": [35249, 9, 4121, 996, 5249],
                "./saved/common/QuestionItem": [51236, 9, 4121, 996],
                "./saved/common/QuestionItem.vue": [51236, 9, 4121, 996],
                "./search/QuestionDetail": [44767, 9, 4121, 996, 4767],
                "./search/QuestionDetail.vue": [44767, 9, 4121, 996, 4767],
                "./search/Search": [23797, 9, 4121, 996, 3797],
                "./search/Search.vue": [23797, 9, 4121, 996, 3797],
                "./search/common/AudioSearch": [39601, 9, 4121, 996],
                "./search/common/AudioSearch.vue": [39601, 9, 4121, 996],
                "./search/common/GuruSearch": [2317, 9, 4121, 996],
                "./search/common/GuruSearch.vue": [2317, 9, 4121, 996],
                "./search/common/GuruSearchItem": [48384, 9, 4121, 996],
                "./search/common/GuruSearchItem.vue": [48384, 9, 4121, 996],
                "./search/common/NoteSearch": [68483, 9, 4121, 996],
                "./search/common/NoteSearch.vue": [68483, 9, 4121, 996],
                "./search/common/PackageSearch": [60816, 9, 4121, 996],
                "./search/common/PackageSearch.vue": [60816, 9, 4121, 996],
                "./search/common/QuestionSearch": [88500, 9, 4121, 996],
                "./search/common/QuestionSearch.vue": [88500, 9, 4121, 996],
                "./search/common/ResourceSearch": [64895, 9, 4121, 996],
                "./search/common/ResourceSearch.vue": [64895, 9, 4121, 996],
                "./search/common/SearchItem": [9937, 9, 4121, 996, 2318],
                "./search/common/SearchItem.vue": [9937, 9, 4121, 996, 2318],
                "./search/common/TestSearch": [13829, 9, 4121, 996],
                "./search/common/TestSearch.vue": [13829, 9, 4121, 996],
                "./search/common/VideoSearch": [95855, 9, 4121, 996],
                "./search/common/VideoSearch.vue": [95855, 9, 4121, 996],
                "./study/StudyIndex": [6554, 9, 4121, 996, 6554],
                "./study/StudyIndex.vue": [6554, 9, 4121, 996, 6554],
                "./study/StudyLayout": [62095, 9, 4121, 996, 2095],
                "./study/StudyLayout.vue": [62095, 9, 4121, 996, 2095],
                "./study/StudySection": [37527, 9, 4121, 996, 7527],
                "./study/StudySection.vue": [37527, 9, 4121, 996, 7527],
                "./study/common/LinearProgressLayout": [10971, 9, 996, 971],
                "./study/common/LinearProgressLayout.vue": [10971, 9, 996, 971],
                "./study/common/SectionStatLabelValue": [54676, 9, 996],
                "./study/common/SectionStatLabelValue.vue": [54676, 9, 996],
                "./study/common/SectionStats": [11459, 9, 4121, 996],
                "./study/common/SectionStats.vue": [11459, 9, 4121, 996],
                "./study/index/Home": [80193, 9, 4121, 996],
                "./study/index/Home.vue": [80193, 9, 4121, 996],
                "./tests/Index": [27271, 9, 996, 9652],
                "./tests/Index.vue": [27271, 9, 996, 9652],
                "./tests/common/LiveMockTestCounterCard": [58195, 9, 996],
                "./tests/common/LiveMockTestCounterCard.vue": [58195, 9, 996]
            };
            function n(e) {
                if (!o.o(a, e))
                    return Promise.resolve().then(( () => {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND",
                        t
                    }
                    ));
                var t = a[e]
                  , n = t[0];
                return Promise.all(t.slice(2).map(o.e)).then(( () => o.t(n, 16 | t[1])))
            }
            n.keys = () => Object.keys(a),
            n.id = 50629,
            e.exports = n
        }
        ,
        51560: (e, t, o) => {
            "use strict";
            o.d(t, {
                A: () => S
            });
            var a = {};
            o.r(a),
            o.d(a, {
                SET_DWLD_PLUGIN_DETECTED: () => m,
                decreaseMockTestCredit: () => p,
                increaseMockTestCredit: () => h,
                setCurrentUser: () => d,
                setDeviceRequestedStatus: () => _,
                setMessage: () => g,
                setOtpPage: () => u,
                setPassword: () => c,
                setToken: () => r,
                setUsername: () => i,
                updateUser: () => l
            });
            var n = o(90155)
              , s = o(22778);
            const i = (e, t) => {
                e.modelData.username = t
            }
              , c = (e, t) => {
                e.modelData.password = t
            }
              , r = (e, t) => {
                e.modelData.token = t
            }
              , m = (e, t) => {
                e.isDownloadPluginDetected = t
            }
              , u = (e, t) => {
                e.otpPage = t
            }
              , d = (e, t) => {
                e.currentUser = t
            }
              , l = (e, t) => {
                e.currentUser[t.key] = t.value
            }
              , p = (e, t) => {
                e.currentUser.mock_test_quota_left = e.currentUser.mock_test_quota_left - 1
            }
              , h = (e, t) => {
                e.currentUser.mock_test_quota_left = e.currentUser.mock_test_quota_left + 1
            }
              , g = (e, t) => {
                e.message = t
            }
              , _ = (e, t) => {
                e.deviceRequestedStatus = t
            }
            ;
            var E = o(1361);
            const S = {
                namespaced: !0,
                state: n.A,
                getters: s,
                mutations: a,
                actions: E
            }
        }
        ,
        64871: (e, t, o) => {
            "use strict";
            o.r(t);
            o(20989)
        }
        ,
        73031: (e, t, o) => {
            "use strict";
            o.d(t, {
                A: () => d
            });
            o(50310),
            o(90095);
            var a = o(80660)
              , n = o(82303)
              , s = o(90155)
              , i = o(71271);
            const c = () => ({
                pagination: {
                    current_page: 1,
                    total: 1
                },
                logo: "",
                idCard: null,
                countries: [],
                browse_type: 1,
                notification: [],
                show_otp_page: !1,
                show_intro_video: !1,
                resume_video: !1,
                history: [],
                show_module: [],
                showSidebar: !0,
                showTrialBanner: !1,
                showShareDialog: !1,
                miniState: !0,
                showHeader: !0,
                agentMode: !1,
                events: [],
                currentRoute: "",
                show_module_icons: [],
                tab: "all"
            })
              , r = {
                resume_video: e => e.resume_video
            }
              , m = {
                saveFcmToken({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        a.axiosInstance.post("linked-devices/setup-fcm", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                getIdCard({state: e}, t) {
                    return new Promise((function(e, o) {
                        a.axiosInstance.get("/get-id/" + t.id).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchCountries({commit: e, state: t}, o) {
                    return new Promise(( (n, s) => {
                        t.countries.length > 0 ? n({
                            data: t.countries
                        }) : a.axiosInstance.get(`get-countries?search=${o.search || ""}`).then((t => {
                            e("setCountries", t.data.data),
                            n(t)
                        }
                        )).catch((e => {
                            s(e)
                        }
                        ))
                    }
                    ))
                },
                searchProducts({commit: e, state: t}, o) {
                    if (t.countries.length <= 0)
                        return new Promise(( (e, t) => {
                            a.axiosInstance.get("/global-search/search?q=" + o.query + "&type=" + o.type + "&fetch_type=" + o.fetch_type + "&page=" + o.page).then((t => {
                                var o = t.data;
                                e(o)
                            }
                            )).catch((e => {
                                t(e)
                            }
                            ))
                        }
                        ))
                },
                getAllProducts({commit: e, state: t}, o) {
                    if (t.countries.length <= 0)
                        return new Promise(( (e, t) => {
                            a.axiosInstance.get("/global-search/search?q=" + o.query + "&type=" + o.type).then((t => {
                                var o = t.data;
                                e(o)
                            }
                            )).catch((e => {
                                t(e)
                            }
                            ))
                        }
                        ))
                },
                searchSuggestion({commit: e, state: t}, o) {
                    if (t.countries.length <= 0)
                        return new Promise(( (e, t) => {
                            a.axiosInstance.get("/global-search/suggestion?q=" + o.query).then((t => {
                                var o = t.data;
                                e(o)
                            }
                            )).catch((e => {
                                t(e)
                            }
                            ))
                        }
                        ))
                },
                fetchNotification({commit: e, state: t}, o) {
                    return e("setNotification", []),
                    new Promise(( (t, n) => {
                        a.axiosInstance.get("/notifications/fetch?page=" + o.page + "&type=" + o.type).then((o => {
                            var a = o.data;
                            e("setNotification", a.data),
                            t(a)
                        }
                        )).catch((e => {
                            n(e)
                        }
                        ))
                    }
                    ))
                },
                markSeenNotification({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        a.axiosInstance.post("/notifications/mark-read", {
                            ids: o
                        }).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                markAllSeenNotification({commit: e, state: t}, o) {
                    return e("setNotification", []),
                    new Promise(( (e, t) => {
                        a.axiosInstance.get("/notifications/mark-all-read").then((t => {
                            e(res)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                decodeImage({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        fetch(t).then((e => e.blob())).then((t => {
                            var o = new File([t],"File name",{
                                type: "image/png"
                            });
                            e(o)
                        }
                        )).catch((e => {
                            o(red)
                        }
                        ))
                    }
                    ))
                },
                skipIntroVideo({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        a.axiosInstance.post("/skip-intro-video", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                checkVideoSkipped({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        a.axiosInstance.post("/check-video-skipped", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                toggleDarkMode({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        a.axiosInstance.get("/toggle-dark-mode?dark=" + t.value).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchWebsiteInfo({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        var a = null;
                        t.keys.forEach(( (e, o) => {
                            a = "keys[" + o + "]=" + e,
                            o != t.keys.length - 1 && (a += "&")
                        }
                        )),
                        n.A.get("https://api.ambition.guru/api/fetch-website-data?" + a).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                updateTab({commit: e}, t) {
                    e("SET_TAB", t)
                },
                updateCustomerExtras({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        a.axiosInstance.post("/user-activity/update/extras", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                updateCustomerSetting({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        a.axiosInstance.post("/setting", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                storeUserActivity({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        const s = n.A.create(a.axiosInstance.defaults);
                        s.defaults.baseURL = "https://logger.ambition.guru/api/web/customer",
                        s.post("/user-activity/store", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchActivity({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        a.axiosInstance.get("/my-activity?page=" + o.page).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchMyspaceMessage({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        a.axiosInstance.get("/my-space/suggested-message").then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                storeLogs({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        const a = i.A.getItem("access_token");
                        let s = i.A.getItem("ag_device_fingerprint");
                        if (s)
                            s = i.A.getItem("ag_device_fingerprint");
                        else {
                            var c = new Clients;
                            i.A.set("ag_device_fingerprint", c.getFingerprint()),
                            s = i.A.getItem("ag_device_fingerprint")
                        }
                        n.A.post("https://logger.ambition.guru/api/gprs/customer/customer-activity/store", o, {
                            headers: {
                                "X-Requested-With": "XMLHttpRequest",
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "*",
                                Authorization: "Bearer " + a,
                                fingerprint: s
                            }
                        }).then((e => {
                            console.log(e)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                fetchModuleInfo({commit: e, state: t}, o) {
                    return new Promise(( (t, o) => {
                        a.axiosInstance.get("https://api.ambition.guru/api/module-information-web").then((o => {
                            var a = o.data.data
                              , n = ["dashboard", "browse-courses", "course", "support", "syllabus"];
                            e("setShowModule", a.concat(n)),
                            t(a)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                storeCustomerActivity({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        const s = n.A.create(a.axiosInstance.defaults);
                        s.defaults.baseURL = "https://logger.ambition.guru/api/web/customer",
                        s.post("customer-activity/store", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchCustomerActivity({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        a.axiosInstance.post(`customer-activity/list?page=${o.current_page}`, o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchEvents({commit: e, state: t}, o) {
                    return new Promise(( (t, o) => {
                        a.axiosInstance.post("get-recent-events", {
                            category_slug: "physical-exam"
                        }).then((o => {
                            e("setEvents", o?.data?.data?.data ?? []),
                            t(o)
                        }
                        ))
                    }
                    ))
                },
                getDynamicLayout({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        a.axiosInstance.get(`layout/get-by-package-v2?page=${o}`).then((t => {
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchModuleInfoIcons({commit: e, state: t}, o) {
                    return new Promise(( (t, n) => {
                        a.axiosInstance.get(`https://api.ambition.guru/api/module-information-mobile/by-key?${o}`).then((a => {
                            var n = a.data.data;
                            console.log(o, "payload---"),
                            e("setShowModuleIcons", n),
                            t(n)
                        }
                        )).catch((e => {
                            n(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , u = {
                setCountries(e, t) {
                    e.countries = t
                },
                SET_TAB(e, t) {
                    e.tab = t
                },
                SET_AGENT_MODE(e, t) {
                    e.agentMode = t
                },
                setShowSidebar(e, t) {
                    e.showSidebar = t
                },
                setMiniState(e, t) {
                    e.miniState = t
                },
                setShowHeader(e, t) {
                    e.showHeader = t
                },
                setIdCard(e, t) {
                    e.idCard = t
                },
                setShowModule(e, t) {
                    e.show_module = t
                },
                setShareDialog(e, t) {
                    e.showShareDialog = t
                },
                setUserVideoQuestion(e, t) {
                    s.A.currentUser.settings["video_question"] = t
                },
                setUserVideoQuestionCount(e, t) {
                    s.A.currentUser.settings.video_question_count = s.A.currentUser.settings.video_question_count + 1
                },
                setResumeVideo(e, t) {
                    e.resume_video = t
                },
                setLogo(e, t) {
                    e.logo = t
                },
                showIntroVideo(e, t) {
                    e.show_intro_video = t
                },
                showOtpPage(e, t) {
                    e.show_otp_page = t
                },
                setCurrentPage(e, t) {
                    e.pagination.current_page = t
                },
                setTotalPage(e, t) {
                    e.pagination.total = t
                },
                resetPagination(e, t) {
                    e.pagination = {
                        current_page: 1,
                        total: 1
                    }
                },
                setBrowseType(e, t) {
                    e.browse_type = t
                },
                setNotification(e, t) {
                    e.notification = t
                },
                setEvents(e, t) {
                    e.events = t
                },
                setcurrentRoute(e, t) {
                    e.currentRoute = t
                },
                setShowModuleIcons(e, t) {
                    e.show_module_icons = t
                }
            }
              , d = {
                namespaced: !0,
                state: c,
                getters: r,
                actions: m,
                mutations: u
            }
        }
        ,
        76364: () => {}
        ,
        77618: (e, t, o) => {
            "use strict";
            o.d(t, {
                A: () => c
            });
            o(50310),
            o(5962);
            var a = o(80660);
            const n = {
                loading: !0,
                discussion: [],
                discussion_detail: {},
                discussion_comment_add_track: {},
                showDiscussionAddForm: !1,
                formTitle: "Add New Discussion",
                discussionMode: "add",
                discussionType: "discussion",
                discussion_from: "discussion",
                section_discussions: [],
                discussion_temp_id: null,
                dynamic_key: 0,
                filter: {
                    search: ""
                },
                form: {
                    id: "",
                    title: "",
                    category: "",
                    description: "",
                    file: [],
                    media_id: [],
                    content_id: "",
                    is_question: !1,
                    demo_images: []
                },
                currentDiscussionId: null,
                currentHoverDiscussionId: null
            }
              , s = {
                fetchDiscussion({commit: e}, t) {
                    return new Promise(( (o, n) => {
                        e("SET_DISCUSSION", []),
                        a.axiosInstance.post("/discussion/get", t).then((t => {
                            console.log("inside", t),
                            t = t.data.data.data,
                            e("SET_DISCUSSION", t),
                            o(t)
                        }
                        )).catch((e => {
                            n(e)
                        }
                        ))
                    }
                    ))
                },
                fetchContentDiscussion({commit: e}, t) {
                    return console.log(t),
                    new Promise(( (o, n) => {
                        a.axiosInstance.post("/discussion/content/get", t).then((t => {
                            t = t.data.data,
                            e("SET_DISCUSSION", t),
                            e("CHANGE_DYNAMIC_KEY"),
                            o(t)
                        }
                        )).catch((e => {
                            n(e)
                        }
                        ))
                    }
                    ))
                },
                fetchContentDiscussionById({commit: e}, t) {
                    return new Promise(( (o, n) => {
                        a.axiosInstance.get("/discussion/" + t.id).then((t => {
                            t = t.data.data,
                            e("SET_DISCUSSION_DETAIL", t),
                            e("CHANGE_DYNAMIC_KEY"),
                            o(t)
                        }
                        )).catch((e => {
                            n(e)
                        }
                        ))
                    }
                    ))
                },
                storeContentReply({commit: e, state: t}, o) {
                    var n = new FormData;
                    n.append("content_id", t.form.content_id),
                    n.append("title", t.form.title),
                    n.append("description", t.form.description);
                    for (let e = 0; e < t.form.file.length; e++)
                        n.append("attachments[" + e + "]", t.form.file[e]);
                    return new Promise(( (e, t) => {
                        a.axiosInstance.post("/discussion/content/store-reply", n).then((t => {
                            t = t.data.data,
                            console.log("stored comment", t),
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                editDiscussion({commit: e, state: t}, o) {
                    return new Promise(( (e, o) => {
                        var n = new FormData;
                        n.append("title", t.form.title),
                        n.append("description", t.form.description),
                        n.append("id", t.form.id);
                        for (let e = 0; e < t.form.file.length; e++)
                            n.append("attachments[" + e + "]", t.form.file[e]);
                        for (let e = 0; e < t.form.media_id.length; e++)
                            n.append("media_id[" + e + "]", t.form.media_id[e]);
                        a.axiosInstance.post("/discussion/update", n).then((t => {
                            t = t.data.data,
                            console.log(t),
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                removeDiscussion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        a.axiosInstance.post("/discussion/delete", o).then((t => {
                            e(t)
                        }
                        ))
                    }
                    )).catch((e => {
                        reject(e)
                    }
                    ))
                },
                replyDiscussion({commit: e, state: t}, o) {
                    return new Promise(( (e, o) => {
                        var n = new FormData;
                        n.append("id", t.form.id),
                        n.append("title", t.form.title),
                        n.append("description", t.form.description);
                        for (let e = 0; e < t.form.file.length; e++)
                            n.append("attachments[" + e + "]", t.form.file[e]);
                        a.axiosInstance.post("/discussion/reply", n).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                likeDiscussion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        a.axiosInstance.post("/discussion/like", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchSectionDiscussion({commit: e, state: t}, o) {
                    return new Promise(( (t, n) => {
                        a.axiosInstance.post("/discussion/section/get", o).then((o => {
                            o = o.data.data,
                            e("SET_SECTION_DISCUSSIONS", o),
                            t(o)
                        }
                        )).catch((e => {
                            n(e)
                        }
                        ))
                    }
                    ))
                },
                fetchDiscussionComments({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        a.axiosInstance.post("/discussion/detail/" + o.id, o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , i = {
                SET_DISCUSSION(e, t) {
                    e.discussion = t
                },
                CHANGE_DYNAMIC_KEY(e, t) {
                    e.dynamic_key = e.dynamic_key + 1
                },
                SET_DISCUSSION_DETAIL(e, t) {
                    e.discussion_detail = t
                },
                SET_DISCUSSION_TEMP_ID(e, t) {
                    e.discussion_temp_id = t
                },
                SET_DISCUSSION_COMMENT_TRACK(e, t) {
                    e.discussion_comment_add_track = t
                },
                EDIT_HOME_COMMENT_COUNT(e, t) {
                    if (e.discussion.length > 0) {
                        var o = _.findIndex(e.discussion, {
                            id: e.discussion_temp_id
                        });
                        console.log(o),
                        o > -1 && (e.discussion[o].comments_count = e.discussion[o].comments_count + 1)
                    }
                },
                SET_DISCUSSION_ADD_FORM(e, t) {
                    e.showDiscussionAddForm = t
                },
                SET_DISCUSSION_MODE(e, t) {
                    e.discussionMode = t
                },
                SET_DISCUSSION_FROM(e, t) {
                    e.discussion_from = t
                },
                SET_FORM_TITLE(e, t) {
                    e.formTitle = t
                },
                SET_FORM(e, t) {
                    "file" == t.key || "media_id" == t.key || "demo_images" == t.key || "media_id" == t.key ? (e.form[t.key].push(t.value),
                    console.log("comment form ", e.form[t.key])) : e.form[t.key] = t.value
                },
                REMOVE_FORM(e, t) {
                    e.form[t.key].splice(t.index, 1)
                },
                SET_FILTER(e, t) {
                    e.filter[t.filter] = t.value
                },
                RESET_FORM(e, t) {
                    e.form = {
                        id: "",
                        title: "",
                        category: "",
                        description: "",
                        file: [],
                        media_id: [],
                        content_id: "",
                        is_question: !1,
                        demo_images: []
                    }
                },
                SET_SECTION_DISCUSSIONS(e, t) {
                    e.section_discussions = t,
                    e.loading = !1
                },
                SET_CURRENT_DISCUSSION_ID(e, t) {
                    e.currentDiscussionId = t,
                    e.loading = !1
                },
                SET_CURRENT_HOVER_DISCUSSION_ID(e, t) {
                    e.currentHoverDiscussionId = t
                }
            }
              , c = {
                namespaced: !0,
                state: n,
                actions: s,
                mutations: i
            }
        }
        ,
        78162: (e, t, o) => {
            "use strict";
            o(50310),
            o(5962),
            o(6724);
            var a = o(29104)
              , n = o(36501)
              , s = o(38734)
              , i = o(61758);
            function c(e, t, o, a, n, s) {
                const c = (0,
                i.g2)("router-view");
                return (0,
                i.uX)(),
                (0,
                i.Wv)(c)
            }
            const r = (0,
            i.pM)({
                name: "App"
            });
            var m = o(12807);
            const u = (0,
            m.A)(r, [["render", c]])
              , d = u;
            var l = o(84976)
              , p = o(1573)
              , h = o(60455)
              , g = (o(32203),
            o(51457))
              , _ = o(71271)
              , E = (o(63345),
            o(80660),
            o(51560));
            class S extends g.wM {
                handle(e, t, {from: o, to: a}) {
                    let n = E.A.state.currentUser;
                    n && 0 != n.total_subscription ? e() : t({
                        name: "BuyCourseGuard"
                    }),
                    isAuthenticated() ? e() : t("/login")
                }
            }
            const v = S;
            class C extends g.wM {
                logPromiseOutcomes() {
                    return !1
                }
                handle(e, t, {from: o, to: a}) {
                    (0,
                    l.A)().dispatch("auth/fetchProfile").then((o => {
                        console.log("fetch auth", o),
                        200 == o?.status ? t({
                            name: "MySpace"
                        }) : e()
                    }
                    )).catch((t => {
                        console.log("fetch auth err", t),
                        e()
                    }
                    ))
                }
            }
            class T extends g.wM {
                handle(e, t, {from: o, to: a}) {
                    _.A.getItem("ag_device_fingerprint");
                    (0,
                    l.A)().dispatch("auth/fetchProfile").then((o => {
                        200 == o.status ? e() : t({
                            name: "login"
                        })
                    }
                    )).catch(( () => {
                        t({
                            name: "login"
                        })
                    }
                    ))
                }
            }
            class I extends g.wM {
                handle(e, t, {from: o, to: a}) {
                    (0,
                    l.A)().dispatch("auth/fetchProfile").then((o => {
                        var n = o.data.data;
                        0 == n.total_subscription ? t({
                            name: "BuyCourse",
                            query: {
                                route: a.name
                            }
                        }) : e()
                    }
                    )).catch(( () => {
                        t({
                            name: "login"
                        }),
                        console.log("reject")
                    }
                    ))
                }
            }
            class f extends g.wM {
                handle(e, t, {from: o, to: a}) {
                    (0,
                    l.A)().dispatch("auth/fetchSubscriptions").then((o => {
                        var n = o.data.data;
                        console.log(n, "response course closed"),
                        "Closed" == n.s_package_status ? t({
                            name: "CourseClosed",
                            query: {
                                route: a.name,
                                id: a.params.id
                            }
                        }) : e()
                    }
                    )).catch(( () => {
                        t({
                            name: "login"
                        }),
                        console.log("reject")
                    }
                    ))
                }
            }
            class P extends g.wM {
                handle(e, t, {from: o, to: a}) {
                    (0,
                    l.A)().dispatch("auth/fetchProfile").then((o => {
                        var n = o.data.data;
                        0 == n.total_subscription ? (console.log(a.name),
                        t({
                            name: "Dashboard"
                        })) : e()
                    }
                    )).catch(( () => {
                        t({
                            name: "login"
                        }),
                        console.log("reject")
                    }
                    ))
                }
            }
            const w = {
                guest: C,
                auth: T,
                enrollCourse: v,
                buyCourse: I,
                courseClosedBuy: f,
                dashboard: P
            };
            g.$7.usingResolver((e => () => o(50629)(`./${e}`))).withGuards(w),
            g.qh.redirect("/", "/login"),
            g.qh.view("/mobile-room-join/:uuid", "rooms/PublicMobileJoinRoom").name("PublicMobileJoinRoom"),
            g.qh.view("/events/register/:slug", "publicPages/EventRegister").name("PublicEventRegister"),
            g.qh.view("/cybersource/:status", "ebook/InternationalPaymentRedirectionPage").name("InternationalPaymentRedirectionPage"),
            g.qh.view("/", "layouts/Auth").guard("guest").children(( () => {
                g.qh.view("/", "auth/LoginMobile").name("login"),
                g.qh.view("/login", "auth/LoginMobile").name("login"),
                g.qh.view("/register", "auth/RegisterMobile").name("register"),
                g.qh.view("/forgot-password", "auth/ForgotPassword").name("ForgotPassword"),
                g.qh.view("/token/verify/:mobile", "auth/token_verify_page").name("tokenVerify"),
                g.qh.view("/social-login-success", "auth/SocialLogin").name("socialLogin")
            }
            )),
            g.qh.view("/", "layouts/Main").guard("auth").children(( () => {
                g.qh.view("link-device", "LinkedDevices/LinkDevice").name("LinkDevice"),
                g.qh.view("verify-mobile-number", "auth/VerifyMobileNumber").name("VerifyMobileNumber"),
                g.qh.view("/dashboard", "auth/Dashboard").name("Dashboard"),
                g.qh.view("/choose-course", "auth/SelectCourse").name("SelectCourse"),
                g.qh.view("/choose-course/:course_category_slug", "auth/SelectPackage").name("SelectPackage"),
                g.qh.view("/product-by-slug/:slug", "products/ProductDetailV1").name("ProductDetailHome"),
                g.qh.view("/product/:slug/:package_id", "products/ProductDetailV1").name("ProductDetail")
            }
            )),
            g.qh.view("/", "layouts/Main").children(( () => {
                g.qh.view("/ebook", "ebook/index").name("Ebook"),
                g.qh.view("/ebook/:id", "ebook/EbookDetail").name("EbookDetail"),
                g.qh.view("/ebook/checkout", "ebook/EbookCheckout").name("EbookCheckout"),
                g.qh.view("/ebook/order", "ebook/OrderHistory").name("OrderHistory"),
                g.qh.view("/ebook/cart", "ebook/MyCart").name("MyCart"),
                g.qh.view("/ebook", "ebook/EbookLayout").children(( () => {
                    g.qh.view("/:id/read/:cid", "ebook/EbookRead").name("EbookRead"),
                    g.qh.view("/success/:name", "ebook/PaymentSuccessPage").name("PaymentSuccessPage"),
                    g.qh.view("/failure", "ebook/FailureSuccessPage").name("FailureSuccessPage"),
                    g.qh.view("/international-success", "ebook/InternationalPaymentSuccessPage").name("InternationalPaymentSuccessPage")
                }
                )),
                g.qh.view("/package/international-success", "checkout/PackageInternationalPaymentSuccess").name("PackageInternationalPaymentSuccess"),
                g.qh.view("/ebook-view-more", "ebook/EbookViewMore").name("EbookViewMore"),
                g.qh.view("/browse", "browse/Browse").name("Browse"),
                g.qh.view("/browse/:id", "browse/BrowseCategory").name("BrowseCategory"),
                g.qh.view("/audios", "audiosV1/Index").name("Audio"),
                g.qh.view("/audios/:id", "audiosV1/AudioDetail").name("AudioDetail"),
                g.qh.view("/buy-course", "auth/BuyCourse").name("BuyCourse"),
                g.qh.view("/course-closed", "auth/CourseClosed").name("CourseClosed"),
                g.qh.view("/podcast", "courseV1/common/Podcast").name("Podcast"),
                g.qh.view("/channel/:slug", "Channel/ChannelDetail").name("ChannelDetail"),
                g.qh.view("/channel/:slug/:type", "Channel/ChannelContent").name("ChannelContent"),
                g.qh.view("/channel/:slug/content-by-slug/:content_slug", "Channel/ChannelContentDetail").name("ChannelContentDetail"),
                g.qh.view("/channel/content-by-slug/:content_slug", "Channel/ChannelContentDetail").name("ChannelContentDetailSaved"),
                g.qh.view("/channel/checkout", "Channel/ChannelCheckout").name("ChannelCheckout"),
                g.qh.view("/channel-success/:name", "Channel/ChannelPaymentSuccess").name("PaymentSuccessChannel"),
                g.qh.view("/chat", "chatV1/Index").name("Chat"),
                g.qh.view("/events", "profile/Events").name("Events"),
                g.qh.view("/support", "profile/Support").name("Support"),
                g.qh.view("/blog", "profile/blog").name("blog"),
                g.qh.view("/alumni", "profile/Alumni/AlumniListing").name("AlumniListing"),
                g.qh.view("/alumni/{id}", "profile/Alumni/AlumniDetail").name("AlumniDetail"),
                g.qh.view("/device-linked", "LinkedDevices/DeviceLinked").name("DeviceLinked"),
                g.qh.view("/profile", "profile/Profile").name("Profile"),
                g.qh.view("/privacy", "profile/PrivacyPolicy").name("Privacy"),
                g.qh.view("/condition", "profile/TermsCondition").name("Condition"),
                g.qh.view("/support/internet", "profile/support/internet").name("internet"),
                g.qh.view("/support/isp", "profile/support/isp").name("isp"),
                g.qh.view("/support/faq", "profile/support/faq").name("faq"),
                g.qh.view("/blog/{id}", "profile/blog/{id}").name("blogdetails"),
                g.qh.view("history", "history/Index").name("History"),
                g.qh.view("/checkout", "checkout/Checkout").name("Checkout")
            }
            )),
            g.qh.view("/", "layouts/Main").guard("auth", "dashboard").children(( () => {
                g.qh.view("/course", "courseV1/CourseDetail").name("CourseDashboard"),
                g.qh.view("", "myspace/MySpace").name("BlankPage").guard("auth", "enrollCourse"),
                g.qh.view("/my-space", "myspace/MySpace").name("MySpace").guard("auth", "enrollCourse"),
                g.qh.view("/my-courses", "profile/MyCourses").name("MyCourses").guard("auth")
            }
            )),
            g.qh.view("/", "layouts/Main").guard("auth", "buyCourse").guard("auth", "courseClosedBuy").children(( () => {
                g.qh.view("/cart", "checkout/Cart").name("Cart"),
                g.qh.view("/success/:name", "checkout/PaymentSuccess").name("PaymentSuccess"),
                g.qh.view("/failure", "checkout/PaymentFailure").name("PaymentFailure"),
                g.qh.view("/practice/:practice_id", "practice/PracticeNew/PracticeCheck").name("Practice"),
                g.qh.view("/korean", "practice/KoreanPractice/Practice").name("Korean"),
                g.qh.view("/korean/result", "practice/KoreanPractice/common/Result.vue").name("Result"),
                g.qh.view("/korean/result/result-detail", "practice/KoreanPractice/common/ResultDetail.vue").name("ResultDetail"),
                g.qh.view("/search", "search/Search").name("Search"),
                g.qh.view("/search/:id", "search/QuestionDetail").name("QuestionDetail"),
                g.qh.view("/products", "products/ProductListing").name("ProductListing"),
                g.qh.view("/agent", "agent/Index").name("Agent"),
                g.qh.view("/agent/sell", "agent/sell/Index").name("AgentSell"),
                g.qh.view("/agent/sell/:id", "agent/sell/Category").name("AgentCategory"),
                g.qh.view("/agent/account", "agent/account/Index").name("AgentAccount"),
                g.qh.view("/agent/profit", "agent/profit/Index").name("AgentProfit"),
                g.qh.view("/agent/profile", "agent/profile/Index").name("AgentProfile"),
                g.qh.view("/agent/students", "agent/student/Index").name("AgentStudent"),
                g.qh.view("/agent/discount", "agent/discount/Index").name("AgentDiscount"),
                g.qh.view("/agent/students-history", "agent/student/History").name("AgentStudentHistory"),
                g.qh.view("/agent/resources", "agent/resources/Index").name("AgentResources"),
                g.qh.view("/agent/history", "agent/history/Index").name("AgentHistory"),
                g.qh.view("/store", "agent/common/BecomeAnAgent").name("BecomeAgent"),
                g.qh.view("/webinars", "meeting/Index").name("Webinars"),
                g.qh.view("/webinars/join/:id", "meeting/JitsiJoin").name("JitsiJoin"),
                g.qh.view("/webinars/zoom/join/:id", "meeting/ZoomClientView").name("ZoomClientView"),
                g.qh.view("/webinars/premium/:id", "meeting/MeetingPremium").name("MeetingPremium"),
                g.qh.view("/webinar-videos/:type", "meeting/LiveRecordedVideos").name("LiveRecordedVideos"),
                g.qh.view("/webinars/:webinars_id", "meeting/MeetingDetailNew").name("WebinarsDetail"),
                g.qh.view("/discussion", "discussionV1/Discussion").name("Discussion").guard("auth", "enrollCourse"),
                g.qh.view("/discussion/create", "discussionV1/newcommon/CreateDiscussionPage").name("CreateDiscussion").guard("auth", "enrollCourse"),
                g.qh.view("/discussion/edit/:slug", "discussionV1/newcommon/CreateDiscussionPage").name("EditDiscussion").guard("auth", "enrollCourse"),
                g.qh.view("/discussion/ai-analysis", "discussionV1/newcommon/AIAnalysisPage").name("AIAnalysis").guard("auth", "enrollCourse"),
                g.qh.view("/discussion/ai-extracted/:slug", "discussionV1/newcommon/AIExtractedDataPage").name("AIExtractedData").guard("auth", "enrollCourse"),
                g.qh.view("/discussion/:slug", "discussionV1/DiscussionDetail").name("DiscussionDetail").guard("auth", "enrollCourse"),
                g.qh.view("report-card", "reportCard/Index").name("ReportCard"),
                g.qh.view("gurus", "gurus/Index").name("Gurus"),
                g.qh.view("gurus/:id", "gurus/GuruDetail").name("GuruDetail"),
                g.qh.view("resources", "resources/Index").name("resources"),
                g.qh.view("for-you", "foryou/Index").name("ForYou"),
                g.qh.view("news-feed", "feed/Index").name("feed"),
                g.qh.view("/playlist", "playlist/MainLayout").children(( () => {
                    g.qh.view("/", "playlist/index").name("PlaylistHome"),
                    g.qh.view("/:id", "playlist/content").name("PlaylistContent"),
                    g.qh.view("/more/:id", "playlist/more").name("PlaylistMore"),
                    g.qh.view("/categories/:id", "playlist/categoriesContent").name("PlaylistCategoriesContent")
                }
                )).name("Playlist"),
                g.qh.view("/study", "study/StudyLayout").children(( () => {
                    g.qh.view("/:type", "study/StudyIndex").name("Study"),
                    g.qh.view("/section/:id", "study/StudySection").name("StudySection")
                }
                )),
                g.qh.view("/content/playlist/:type", "course/content/ContentPlaylistNew").name("ContentPlaylist"),
                g.qh.view("/content/playlist/:type/section/:id", "course/content/SectionPlaylist").name("SectionPlaylist"),
                g.qh.view("/course/:id/:course/:course_id", "course/CourseDetailNew").name("CourseDetail"),
                g.qh.view("/content/:course_id/:slug/:content_id", "course/ContentDetail").name("ContentDetail"),
                g.qh.view("/preview-content/:course_id/:slug/:content_id", "course/PreviewContentDetail").name("PreviewContentDetail"),
                g.qh.view("/course/:id/:course/:course_id/section/:section_id", "course/SectionDetail").name("SectionDetail"),
                g.qh.view("/course/:id/:course/:course_id/section/:section_id/content/:content_id", "course/ContentRecordDetail").name("ContentRecordDetail"),
                g.qh.view("/course/subject", "course/Subject/SubjectDetails").name("SubjectDetails"),
                g.qh.view("/course/buy-info", "course/BuyCourseGuard").name("BuyCourseGuard"),
                g.qh.view("/assessment", "practice/Assessment.vue").name("Assessment").guard("auth", "enrollCourse"),
                g.qh.view("/test", "tests/Index.vue").name("Test"),
                g.qh.view("/mock-exam", "mockExam/MockExam.vue").name("mockExam"),
                g.qh.view("/mock-exam/result/:exam_id", "mockExam/Result.vue").name("ExamResult"),
                g.qh.view("/exam/:exam_id", "mockExam/mockPractice/PracticeCheck.vue").name("Exam"),
                g.qh.view("/exam/:exam_id/video-explanation", "mockExam/VideoExplanation.vue").name("VideoExplanation"),
                g.qh.view("/payment/success", "payment/Success").name("Success"),
                g.qh.view("/payment/failed", "payment/Failed").name("Failed"),
                g.qh.view("/subscription/success", "payment/FreeTrial").name("SubscriptionSuccess"),
                g.qh.view("refer-and-earn", "Refer/ReferAndEarn").name("ReferAndEarn"),
                g.qh.view("saved", "saved/SavedContents").name("SavedContents").guard("auth", "enrollCourse"),
                g.qh.view("/course/welcome-screen", "course/Welcome/Index").name("WelcomeScreen")
            }
            )),
            g.qh.view("/", "layouts/Main").guard("auth", "dashboard").children(( () => {
                g.qh.view("/course/test-analysis", "course/TestAnalysis/TestAnalysis").name("TestAnalysis")
            }
            )),
            g.qh.view("/:catchAll(.*)*", "Error404"),
            g.qh.view("*", "Error404");
            const A = g.$7.routes()
              , y = (0,
            p.wE)((function() {
                const e = h.LA
                  , t = (0,
                h.aE)({
                    scrollBehavior: () => ({
                        left: 0,
                        top: 0
                    }),
                    routes: A,
                    history: e("/")
                });
                return t
            }
            ));
            async function b(e, t) {
                const a = e(d);
                a.use(n.A, t);
                const i = "function" === typeof l.A ? await (0,
                l.A)({}) : l.A
                  , {storeKey: c} = await Promise.resolve().then(o.bind(o, 84976))
                  , r = (0,
                s.IG)("function" === typeof y ? await y({
                    store: i
                }) : y);
                return i.$router = r,
                {
                    app: a,
                    store: i,
                    storeKey: c,
                    router: r
                }
            }
            var k = o(20989)
              , x = o(36153)
              , D = o(24729);
            const R = {
                config: {
                    notify: {
                        position: "top-right",
                        icon: "info"
                    }
                },
                plugins: {
                    Notify: k.A,
                    Loading: x.A,
                    Dialog: D.A
                }
            };
            var O = o(29012);
            (0,
            O.k)("/service-worker.js", {
                ready() {},
                registered() {},
                cached() {},
                updatefound() {
                    console.log("New content is downloading.")
                },
                updated() {
                    window.location.reload(!0)
                },
                offline() {},
                error() {}
            });
            const N = "/";
            async function L({app: e, router: t, store: o, storeKey: a}, n) {
                let s = !1;
                const i = e => {
                    try {
                        return t.resolve(e).href
                    } catch (e) {}
                    return Object(e) === e ? null : e
                }
                  , c = e => {
                    if (s = !0,
                    "string" === typeof e && /^https?:\/\//.test(e))
                        return void (window.location.href = e);
                    const t = i(e);
                    null !== t && (window.location.href = t)
                }
                  , r = window.location.href.replace(window.location.origin, "");
                for (let a = 0; !1 === s && a < n.length; a++)
                    try {
                        await n[a]({
                            app: e,
                            router: t,
                            store: o,
                            ssrContext: null,
                            redirect: c,
                            urlPath: r,
                            publicPath: N
                        })
                    } catch (e) {
                        return e && e.url ? void c(e.url) : void console.error("[Quasar] boot error:", e)
                    }
                !0 !== s && (e.use(t),
                e.use(o, a),
                e.mount("#q-app"))
            }
            b(a.Ef, R).then((e => {
                const [t,a] = void 0 !== Promise.allSettled ? ["allSettled", e => e.map((e => {
                    if ("rejected" !== e.status)
                        return e.value.default;
                    console.error("[Quasar] boot error:", e.reason)
                }
                ))] : ["all", e => e.map((e => e.default))];
                return Promise[t]([Promise.resolve().then(o.bind(o, 38670)), Promise.resolve().then(o.bind(o, 80660)), Promise.resolve().then(o.bind(o, 64871)), Promise.resolve().then(o.t.bind(o, 76364, 23)), Promise.resolve().then(o.bind(o, 32965)), Promise.resolve().then(o.bind(o, 49566))]).then((t => {
                    const o = a(t).filter((e => "function" === typeof e));
                    L(e, o)
                }
                ))
            }
            ))
        }
        ,
        79794: (e, t, o) => {
            "use strict";
            o.d(t, {
                V: () => a
            });
            const a = () => {
                const e = (e, t=100) => e && e.length > t ? e.substring(0, t) + "..." : e
                  , t = e => {
                    let t = e.split(" ")
                      , o = "";
                    for (let e = 0; e < t.length; e++)
                        t[e].length > 0 && "" !== t[e] && (o += t[e][0]);
                    return o
                }
                  , o = e => e > 999 && e < 1e6 ? (e / 1e3).toFixed(1) + "K" : e > 1e6 ? (e / 1e6).toFixed(1) + "M" : e < 900 ? e : void 0
                  , a = e => e ? (e = e.replace(/^\s+|\s+$/g, ""),
                e = e.toLowerCase(),
                e = e.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-"),
                e.toLowerCase()) : e
                  , n = e => e && e.match(/[a-z]+/gi).map((function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                }
                )).join("")
                  , s = e => e ? e.replace(/style=".*?"/g, "") : e
                  , i = e => e ? e.replace(/(<([^>]+)>)/gi, "") : e;
                return {
                    strLimit: e,
                    strInitials: t,
                    numToStrFormatter: o,
                    toKebabCase: a,
                    toPascalCase: n,
                    removeStyleAttributes: s,
                    stripTags: i
                }
            }
        }
        ,
        80660: (e, t, o) => {
            "use strict";
            o.r(t),
            o.d(t, {
                axiosInstance: () => h,
                default: () => _,
                silenceAxiosInstance: () => g
            });
            var a = o(1573)
              , n = o(82303)
              , s = o(54760)
              , i = o.n(s)
              , c = o(71271)
              , r = o(20989)
              , m = o(63345)
              , u = o(82662);
            o(43436);
            const d = c.A.getItem("access_token");
            let l = c.A.getItem("ag_device_fingerprint");
            if (l)
                l = c.A.getItem("ag_device_fingerprint");
            else {
                var p = new m.ClientJS;
                c.A.set("ag_device_fingerprint", p.getFingerprint()),
                l = c.A.getItem("ag_device_fingerprint")
            }
            const h = n.A.create({
                paramsSerializer: e => i().stringify(e, {
                    arrayFormat: "repeat"
                }),
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Bearer " + d,
                    fingerprint: l
                },
                baseURL: "https://api.ambition.guru/api/web/customer"
            })
              , g = n.A.create({
                paramsSerializer: e => i().stringify(e, {
                    arrayFormat: "repeat"
                }),
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Bearer " + d,
                    fingerprint: l
                },
                baseURL: "https://api.ambition.guru/api/web/customer"
            })
              , _ = (0,
            a.zj)(( ({app: e, router: t, store: o}) => {
                h.interceptors.response.use((function(e) {
                    return e
                }
                ), (function(e) {
                    return e.response && 404 === e.response.status ? r.A.create({
                        message: "Resource not found",
                        timeout: 3e3,
                        color: "negative"
                    }) : e.response && 200 === e.response.status ? o.commit("validationErrors/setErrors", null) : e.response && 422 === e.response.status ? o.commit("validationErrors/setErrors", e.response.data.errors) : e.response && 555 === e.response.status ? r.A.create({
                        message: e.response.data.message,
                        timeout: 3e3,
                        color: "negative"
                    }) : e.response && 401 === e.response.status ? ("Unauthenticated." === e.response.data.message && r.A.create({
                        message: e.response.data.message,
                        timeout: 3e3,
                        color: "negative"
                    }),
                    c.A.remove("access_token"),
                    c.A.remove("refresh_token"),
                    c.A.remove("fingerprint"),
                    c.A.remove("course_selection_skipped"),
                    c.A.remove("ag_device_fingerprint"),
                    c.A.remove("ambition-guru-health-checkup-skipped"),
                    o.commit("auth/setUsername", null),
                    window.location.href = "/login") : e.response && 400 === e.response.status ? r.A.create({
                        message: e.response.data.message,
                        timeout: 3e3,
                        color: "negative"
                    }) : e.response && 429 === e.response.status ? e.response.data.message && o.commit("validationErrors/setErrors", {
                        mobile: [e.response.data.message]
                    }) : e.response && 4001 === e.response.status ? r.A.create({
                        message: e.response.data.message,
                        timeout: 3e3,
                        color: "negative"
                    }) : e.response && 500 === e.response.status || (e.response && e.response?.data?.data?.description && 403 === e.response.status ? r.A.create({
                        message: e.response?.data?.data?.description,
                        timeout: 3e3,
                        color: "negative"
                    }) : (e.response && e.response?.data?.message && 403 === e.response.status || console.log(e),
                    r.A.create({
                        message: e.response?.data?.message,
                        timeout: 3e3,
                        color: "negative"
                    }))),
                    Promise.reject(e)
                }
                )),
                e.config.globalProperties.$axios = n.A,
                e.config.globalProperties.$axiosInstance = h;
                const a = new u.A;
                e.config.globalProperties.$bus = a,
                e.provide("bus", a)
            }
            ))
        }
        ,
        84976: (e, t, o) => {
            "use strict";
            o.d(t, {
                A: () => Do
            });
            var a = {};
            o.r(a),
            o.d(a, {
                errors: () => lt
            });
            var n = {};
            o.r(n),
            o.d(n, {
                setErrors: () => pt
            });
            var s = o(1573)
              , i = o(36980)
              , c = o(51560)
              , r = o(73031)
              , m = o(80660);
            const u = {
                products: [],
                categories: []
            }
              , d = {
                fetchProducts({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/get-products", t).then((t => {
                            console.log(t.data.data),
                            e("SET_PRODUCTS", t.data.data)
                        }
                        ))
                    }
                    ))
                },
                fetchCategories({commit: e}, t) {
                    return new Promise(( (t, o) => {
                        m.axiosInstance.get("/get-categories").then((t => {
                            console.log(t.data.data),
                            e("SET_CATEGORIES", t.data.data)
                        }
                        ))
                    }
                    ))
                }
            }
              , l = {
                SET_PRODUCTS(e, t) {
                    e.products = t
                },
                SET_CATEGORIES(e, t) {
                    e.categories = t
                }
            }
              , p = {
                namespaced: !0,
                state: u,
                actions: d,
                mutations: l
            }
              , h = {
                playlist_structure: [],
                content: {},
                tree: [],
                media_content: {}
            }
              , g = {
                fetchPackageStructure({commit: e, state: t}, o) {
                    if (0 == t.playlist_structure.length)
                        return new Promise(( (t, a) => {
                            m.axiosInstance.post("/package/structure", o).then((o => {
                                o = o.data.data,
                                t(o),
                                e("SET_PLAYLIST_STRUCTURE", o)
                            }
                            ))
                        }
                        ))
                },
                fetchPlaylistCategories({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get("/playlists").then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchContentDetail({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get("/get-content-by-slug/" + t.id + "?suggested=" + t.suggested).then((t => {
                            t = t.data.data,
                            o(t),
                            e("SET_CONTENT", t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchContentMediaDetail({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get("get-content-media-by-slug/" + t.id + "?suggested=0" + t.suggested).then((t => {
                            t = t.data.data,
                            o(t),
                            e("SET_MEDIA_CONTENT", t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , E = {
                SET_PLAYLIST_STRUCTURE(e, t) {
                    e.playlist_structure = t
                },
                SET_CONTENT(e, t) {
                    e.content = t
                },
                SET_TREE(e, t) {
                    e.tree = t
                },
                SET_MEDIA_CONTENT(e, t) {
                    e.media_content = t
                }
            }
              , S = {
                namespaced: !0,
                state: h,
                actions: g,
                mutations: E
            }
              , v = {
                path: "agent"
            }
              , C = {
                agentBuyHistory({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`/buy-for-others-history?page=${t.current_page}`, t).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                agentCheckoutTopup({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("agent/new-checkout-topup", t).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchPackages({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`/agent/packages/all?page_limit=15&query=${t.query}&category_id=${t.category_id}&page=${t.page}`).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchResources({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`/agent/resources?page=${t.page}`).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                buyFreeTrial({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/agent/package/set-trial", t).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                checkUserExists({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/agent/account/check-user", t).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchDashboardStats({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("agent/dashboard-counts", t).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                purchasePackage({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/agent/package/purchase", t).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                getTrialStudents({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`/agent/trial-student?page=${t.current_page}`, t).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                getTransactions({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`/agent/account/my-transactions?page=${t.current_page}`, t).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                getProfitEarned({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        let a = "/agent/account/profit-report";
                        t.current_page && (a += `?page=${t.current_page}`),
                        t.from && t.to && (a += `&from=${t?.from}&to=${t?.to}`),
                        m.axiosInstance.get(a, t).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                getStudents({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`/agent/students?page=${t.current_page}`, t).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                getStudentsHistory({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`/agent/students-history?page=${t.current_page}`, t).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchProfileDetail({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("get-store-detail", t).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                getDiscountAssign({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/agent/discount/assign", t).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                getDiscountAssignList({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("/agent/discount/list", t).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , T = {}
              , I = {
                namespaced: !0,
                state: v,
                actions: C,
                mutations: T
            };
            var f = o(82303);
            const P = {
                cart: [],
                promoCodeData: null
            }
              , w = {
                fetchCart({commit: e}, t) {
                    return new Promise(( (t, o) => {
                        m.axiosInstance.get("/get-cart").then((o => {
                            e("SET_CART", o.data.data),
                            t(o.data.data)
                        }
                        ))
                    }
                    ))
                },
                addToCart({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/store-cart", t).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                updateCart({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/update-duration", t).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                removeCart({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("/remove-cart/" + t.id).then((t => {
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                createCheckoutCart({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        const a = f.A.create(m.axiosInstance.defaults);
                        a.defaults.baseURL = "https://api.ambition.guru/api/gprs/customer",
                        a.post("/new-checkout-cart-v2", t).then((t => {
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                validatePromoCode({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/promo-code/validate", t).then((t => {
                            console.log("RES ::::", t),
                            e("SET_PROM0_CODE_DATA", t.data.data?.promoCodeData),
                            o(t)
                        }
                        )).catch((e => {
                            console.error("Validate Promo code error :::::", e),
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                validateCustomerFriend({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("checkout/check-customer-friend", t).then((t => {
                            console.log("RES ::::", t),
                            e(t)
                        }
                        )).catch((e => {
                            console.error("Validate Customer code error :::::", e),
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                validateAndApplyPromoCode({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/promo-code/validate-and-apply", t).then((t => {
                            console.log("RES ::::", t),
                            t.data?.data?.status && e("SET_CART", t.data?.data?.cartData),
                            e("SET_PROM0_CODE_DATA", t.data.data?.promoCodeData),
                            o(t)
                        }
                        )).catch((e => {
                            console.error("Validate and Apply Promo code error :::::", e),
                            a(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , A = {
                SET_CART(e, t) {
                    e.cart = t
                },
                SET_PROM0_CODE_DATA(e, t) {
                    e.promoCodeData = t
                }
            }
              , y = {
                namespaced: !0,
                state: P,
                actions: w,
                mutations: A
            }
              , b = {
                courseStructure: []
            }
              , k = {
                fetchCourseStructure({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/course-structure", t).then((t => {
                            t = t.data.data,
                            o(t),
                            e("SET_COURSE_STRUCTURE", t),
                            console.log("course structure", b.courseStructure)
                        }
                        ))
                    }
                    ))
                }
            }
              , x = {
                SET_COURSE_STRUCTURE(e, t) {
                    e.courseStructure = t
                }
            }
              , D = {}
              , R = {
                namespaced: !0,
                state: b,
                actions: k,
                mutations: x,
                getters: D
            }
              , O = {
                channels: []
            }
              , N = {
                fetchPaymentChannels({commit: e}, t={}) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get("/get-payment-channels", {
                            params: t
                        }).then((t => {
                            e("SET_CHANNELS", t.data.data)
                        }
                        ))
                    }
                    ))
                },
                fetchRelatedPackage({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/package/get-combo-packages", t).then((t => {
                            e(t.data)
                        }
                        ))
                    }
                    ))
                },
                subscribeFreeTrial({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/subscribe-free-trail", t).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                enrollPackage({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/enroll-package-for-free", t).then((t => {
                            let o = t.data.data;
                            e(o)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                enrollPaidPackageForFree({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/enroll-package-for-free", t).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchFonepayQrCode({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("https://api.ambition.guru/api/fetch-website-data?keys[0]=payment_qr", t).then((t => {
                            e(t.data.data[0].setting_image.path)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchFonepayQrCodeAgent({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("https://api.ambition.guru/api/fetch-website-data?keys[0]=agent_payment_qr", t).then((t => {
                            e(t.data.data[0].setting_image.path)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchFonepayQrInfo({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("https://api.ambition.guru/api/fetch-website-data?keys[0]=fonepay_qr_info", t).then((t => {
                            e(t.data.data[0])
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchBankDetail({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("https://api.ambition.guru/api/fetch-website-data?keys[0]=bank_deposit", t).then((t => {
                            e(t.data.data[0].setting_image.path)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                getPaymentOptions({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("credentials/fetch-all", t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchPayWithWallet({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("payment/pay-with-wallet", t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , L = {
                SET_CHANNELS(e, t) {
                    e.channels = t
                }
            }
              , M = {
                namespaced: !0,
                state: O,
                actions: N,
                mutations: L
            };
            o(50310),
            o(5962),
            o(32203),
            o(90095);
            var V = o(43436)
              , U = o.n(V)
              , q = o(79794)
              , G = o(71271);
            const {toKebabCase: F} = (0,
            q.V)()
              , B = {
                loading: !0,
                package_table: [],
                packages: [],
                customer_package_ids: [],
                package_detail: {},
                popular: [],
                free_contents: [],
                reviews: [],
                course_structure: [],
                minimal_course_structure: [],
                current_section_detail: null,
                section_detail: {},
                current_section_structure: {},
                discussions: [],
                marking_schemes: [],
                current_video: null,
                video_model: !1,
                content_data: null,
                current_section: null,
                units_data: {},
                welcomeData: null,
                welcomeExtendedData: null,
                dynamicHealthCheckupMessage: null,
                dynamicHealthCheckupData: null,
                browsePackages: [],
                inviteModal: !1,
                scholarshipShowModal: !1,
                categories: [],
                packagesData: [],
                currentPackageCategory: null,
                tabStudy: "syllabus",
                packagesv2: []
            }
              , H = {
                fetchPackageStructure({commit: e, state: t}, o) {
                    if (0 == t.course_structure.length)
                        return new Promise(( (t, a) => {
                            m.axiosInstance.post("/package/structure", o).then((o => {
                                o = o.data.data,
                                t(o),
                                e("SET_COURSE_STRUCTURE", o)
                            }
                            ))
                        }
                        ))
                },
                fetchMinimalPackageStructure({commit: e, state: t}, o) {
                    if (0 == t.course_structure.length)
                        return new Promise(( (t, a) => {
                            m.axiosInstance.post("/package/minimal-structure", o).then((o => {
                                o = o.data.data,
                                t(o),
                                e("SET_MINIMAL_COURSE_STRUCTURE", o)
                            }
                            ))
                        }
                        ))
                },
                fetchCourseStructure({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/course-structure", t).then((t => {
                            t = t.data.data,
                            o(t),
                            e("SET_COURSE_STRUCTURE", t)
                        }
                        ))
                    }
                    ))
                },
                fetchCustomerPackage({commit: e, state: t}, o) {
                    return new Promise(( (t, o) => {
                        m.axiosInstance.get("/package/customer-package").then((o => {
                            if (o = o.data.data,
                            t(o),
                            e("SET_PACKAGE", o),
                            o.length > 0) {
                                var a = [];
                                o.forEach((e => {
                                    a.push(e.package_id)
                                }
                                )),
                                e("SET_CUSTOMER_PACKAGE_IDS", a)
                            }
                        }
                        ))
                    }
                    ))
                },
                fetchCustomerPackageV2({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.get("/package/customer-package-v2?page=" + o.current_page, o).then((o => {
                            if (t(o),
                            e("SET_PACKAGE_V2", o),
                            o.length > 0) {
                                var a = [];
                                o.forEach((e => {
                                    a.push(e.package_id)
                                }
                                )),
                                e("SET_CUSTOMER_PACKAGE_IDS", a)
                            }
                        }
                        ))
                    }
                    ))
                },
                fetchPackageById({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("/package/get-package/" + t.id).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchPackageDetail({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get("/package/detail/" + t.id).then((t => {
                            t = t.data.data,
                            e("SET_PACKAGE_DETAIL", t),
                            t.video && e("SET_CURRENT_VIDEO", t.video.path),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                fetchCustomerPackageDetail({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get("/package/customer-package/detail/" + t.id).then((t => {
                            t = t.data.data,
                            o(t),
                            e("SET_PACKAGE_DETAIL", t)
                        }
                        ))
                    }
                    ))
                },
                fetchPopularPackages({commit: e}, t) {
                    var o = "/package/popular";
                    return new Promise(( (t, a) => {
                        m.axiosInstance.get(o).then((o => {
                            o = o.data.data,
                            e("SET_POPULAR_PACKAGE", o),
                            t(o)
                        }
                        ))
                    }
                    ))
                },
                fetchPackageByType({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/package/package-by-type", t).then((t => {
                            let a = t.data.data;
                            e("SET_POPULAR_PACKAGE", a),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                fetchCategoriesPackage({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("/get-category-all-package/" + t.category + "?page=" + t.page + "&page_limit=" + t.page_limit, t).then((t => {
                            let o = t.data;
                            e(o)
                        }
                        ))
                    }
                    ))
                },
                fetchPackageProgress({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("package/package-progress-summary", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                switchCourse({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("set-current-package", t).then((t => {
                            t = t.data.data,
                            G.A.remove("ambition-guru-health-checkup-skipped"),
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchPackageReviews({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("package/reviews-ratings", t).then((t => {
                            t = t.data.data,
                            o(t),
                            e("SET_REVIEWS", t)
                        }
                        ))
                    }
                    ))
                },
                fetchPackageGurus({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("get-package-gurus/" + t.id).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchPackageRoutines({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/routines/meeting-list", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchCategories({commit: e}, t) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get("get-categories").then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchCategoriesChild({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("get-category-child/" + t.id).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchPackageSectionDetail({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("package/section-detail", t).then((t => {
                            t = t.data.data,
                            o(t),
                            e("SET_SECTION_DETAIL", t)
                        }
                        ))
                    }
                    ))
                },
                fetchCurrentSectionStructure({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/package/section-detail", t).then((t => {
                            t = t.data.data,
                            e("SET_CURRENT_SECTION_STRUCTURE", t),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                fetchMarkingScheme({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/subject-wise-progress", t).then((t => {
                            t = t.data.data,
                            e("SET_MARKING_SCHEME", t),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                openPromoVideoModal({commit: e, state: t}) {
                    e("SET_VIDEO_CONTENT", t.package_detail?.video?.path),
                    e("SET_CONTENT_DATA", null),
                    e("SET_VIDEO_MODAL", !0)
                },
                setContentVideoOnModal({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get(`/content/detail/${t}`).then((t => {
                            t = t.data.data,
                            e("SET_CONTENT_DATA", t),
                            e("SET_VIDEO_CONTENT", t?.video?.path),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                openVideoContentModal({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get(`/content/detail/${t}`).then((t => {
                            t = t.data.data,
                            e("SET_CONTENT_DATA", t),
                            e("SET_VIDEO_CONTENT", t?.video?.path),
                            e("SET_VIDEO_MODAL", !0),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                fetchCurrentSectionData({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("package/section-only-detail", t).then((t => {
                            t = t.data.data,
                            e("SET_CURRENT_SECTION", t),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                fetchContentByUnitsData({state: e, commit: t}, o) {
                    return new Promise(( (e, a) => {
                        console.log("payload", o.id),
                        m.axiosInstance.get(`get-content-by-unit/${o.id}`).then((o => {
                            o = o.data.data,
                            t("SET_UNIT_DATA", o),
                            e(o)
                        }
                        ))
                    }
                    ))
                },
                fetchPackagesByType({state: e, commit: t}, o) {
                    let a = o
                      , n = [];
                    switch (a) {
                    case "all":
                        n = e.popular,
                        t("SET_BROWSE_PACKAGES", n);
                        break;
                    case "free_courses":
                        n = e.popular.filter((e => e.is_free)),
                        t("SET_BROWSE_PACKAGES", n);
                        break;
                    case "my_courses":
                        n = e.popular.filter((e => e.is_subscribed)),
                        t("SET_BROWSE_PACKAGES", n);
                        break;
                    case "paid_courses":
                        n = e.popular.filter((e => !e.is_free)),
                        t("SET_BROWSE_PACKAGES", n);
                        break;
                    default:
                        n = e.popular,
                        t("SET_BROWSE_PACKAGES", n);
                        break
                    }
                }
            }
              , Q = {
                SET_LOADING(e, t) {
                    e.loading = t
                },
                SET_STRUCTURE_COMPELTE(e, t) {
                    e.course_structure.length > 0 && e.course_structure.forEach((e => {
                        e.children.forEach((e => {
                            e.children.forEach((e => {
                                e.contents.forEach((e => {
                                    e.id != t.content_id || (e.is_completed = 1)
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    ))
                },
                SET_PACKAGE(e, t) {
                    e.packages = t,
                    e.loading = !1
                },
                SET_PACKAGE_V2(e, t) {
                    e.packagesv2 = t,
                    e.loading = !1
                },
                SET_REVIEWS(e, t) {
                    e.reviews = t
                },
                SET_CUSTOMER_PACKAGE_IDS(e, t) {
                    e.customer_package_ids = t
                },
                SET_PACKAGE_DETAIL(e, t) {
                    e.package_detail = t,
                    e.loading = !1
                },
                SET_FREE_CONTENTS(e, t) {
                    e.free_contents = t
                },
                PUSH_FREE_CONTENTS(e, t) {
                    e.free_contents.push(t)
                },
                SET_POPULAR_PACKAGE(e, t) {
                    e.popular = t
                },
                SET_COURSE_STRUCTURE(e, t) {
                    e.course_structure = t,
                    e.loading = !1
                },
                SET_MINIMAL_COURSE_STRUCTURE(e, t) {
                    e.minial_course_structure = t,
                    e.loading = !1
                },
                SET_SECTION_DETAIL(e, t) {
                    e.section_detail = t,
                    e.loading = !1
                },
                SET_CURRENT_SECTION_STRUCTURE(e, t) {
                    e.current_section_structure = t,
                    e.loading = !1
                },
                SET_MARKING_SCHEME(e, t) {
                    e.marking_schemes = t,
                    e.loading = !1
                },
                SET_VIDEO_CONTENT(e, t) {
                    e.current_video = t,
                    e.loading = !1
                },
                SET_VIDEO_MODAL(e, t) {
                    e.video_model = t
                },
                SET_CONTENT_DATA(e, t) {
                    e.content_data = t
                },
                SET_CURRENT_SECTION(e, t) {
                    e.current_section = t
                },
                SET_UNIT_DATA(e, t) {
                    e.units_data[F(t?.name)] = t
                },
                SET_WELCOME_DATA(e, t) {
                    e.welcomeData = t
                },
                SET_BROWSE_PACKAGES(e, t) {
                    e.browsePackages = t
                },
                SET_CURRENT_VIDEO(e, t) {
                    e.current_video = t
                },
                SET_WELCOME_EXTENDED_DATA(e, t) {
                    e.welcomeExtendedData = t
                },
                SET_DYNAMIC_HEALTH_CHECKUP_MESSAGE(e, t) {
                    e.dynamicHealthCheckupMessage = t
                },
                SET_DYNAMIC_HEALTH_CHECKUP_DATA(e, t) {
                    e.dynamicHealthCheckupData = t
                },
                SET_INVITE_MODAL(e, t) {
                    e.inviteModal = t
                },
                SET_SCHOLARSHIP_MODAL(e, t) {
                    e.scholarshipShowModal = t
                },
                SET_CATEGORIES(e, t) {
                    e.categories = t
                },
                SET_PACKAGES_DATA(e, t) {
                    e.packagesData = t,
                    e.loading = !1
                },
                SET_CURRENT_PACKAGE_CATEGORY(e, t) {
                    e.currentPackageCategory = t
                },
                SET_TAB(e, t) {
                    e.tabStudy = t
                }
            }
              , W = {
                contentTypes: e => e.section_detail.contents,
                currentSectionData: e => t => e.course_structure.find((e => e.id === +t)),
                freeVideoContents: e => {
                    if (e.free_contents.length) {
                        let t = e.free_contents.filter((e => "VIDEOS" === e.content_type));
                        return U().unionBy(t, "id")
                    }
                }
                ,
                getPackageByType: e => t => "all" === t ? e.popular : "free_courses" === t ? e.popular.filter((e => {
                    if (Object.keys(e?.pricing).length)
                        return console.log(0 === e?.pricing[0].price),
                        0 === e?.pricing[0].price
                }
                )) : "my_courses" === t ? e.popular.filter((e => e.is_subscribed)) : "paid_courses" === t ? e.popular.filter((e => {
                    if (Object.keys(e?.pricing).length)
                        return 0 !== e?.pricing[0].price
                }
                )) : void 0,
                getWelcomeData: e => e.welcomeData
            }
              , $ = {
                namespaced: !0,
                state: B,
                actions: H,
                mutations: Q,
                getters: W
            };
            o(6724);
            var K = o(38734);
            const j = {
                audio_player: null,
                audio_current_time: 0,
                audio_playback: 1,
                show_audio_player: !1,
                player: {},
                content_detail: {},
                saved_contents: [],
                video_picture_data: {},
                video_height: 0,
                show_video_picture: !1,
                playlist: [],
                showDiscussion: !1,
                showRatings: !1,
                discussion: [],
                reviews: [],
                user_specific_reviews: null,
                table_contents: [],
                nav_contents: [],
                report_type: [],
                viewed_data: {},
                is_content_complete: !1,
                fullscreen: !1,
                showQuestionForm: !1,
                questions: [],
                reportLabels: [],
                showContentReport: !1,
                report: [],
                qindex: 0,
                bg: "bg-1",
                size: "size-small",
                family: "sans",
                section_content: null,
                pagination: {
                    current_page: 1,
                    last_page: 1
                },
                childName: "",
                showEmpty: !1,
                contentNameList: [],
                currentSyllabusId: null
            }
              , Y = {
                fetchContentDetail({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get("/get-content-detail/" + t.id + "?suggested=" + t.suggested).then((t => {
                            t = t.data.data,
                            e("SET_CONTENT_DETAIL", t),
                            e("SET_CONTENT_QUESTION", t.videoQuestion),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchContentQuestion({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("questions-by-content/" + t.id).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchFreeContentDetail({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get("/content/detail/" + t.id).then((t => {
                            t = t.data.data,
                            e("SET_CONTENT_DETAIL", t),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchPreviewContent({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("/content/detail/" + t.id).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    )).catch((e => {
                        reject(e)
                    }
                    ))
                },
                submitRating({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/report/rating/store", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchReportType({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get("/report/get-type", t).then((t => {
                            t = t.data.data,
                            e("SET_REPORT_TYPE", t)
                        }
                        ))
                    }
                    ))
                },
                fetchContentRating({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/report/rating/fetch", t).then((t => {
                            t = t.data.data,
                            e("SET_USER_SPECIFIC_REVIEWS", t),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                saveContentViews({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/content/view-content", t).then((t => {
                            t = t.data.data,
                            e("SET_VIEWED_DATA", t),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                bookmarkContent({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/content/save", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                saveContentComplete({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        const a = f.A.create(m.axiosInstance.defaults);
                        a.defaults.baseURL = "https://logger.ambition.guru/api/web/customer",
                        a.post("/content/save-content-duration", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchContentReviews({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/report/content-rating/fetch", t).then((t => {
                            t = t.data.data,
                            e("SET_CONTENT_REVIEWS", t),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                likeContent({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/report/like", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                dislikeContent({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/report/dislike", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchLikeStatus({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/report/get-like-status", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchSectionWiseProgress({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/subject-wise-progress-v2", t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchPackageSubjectsList({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/package-subjects-list", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchSavedData({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/content/get-saved-data?page=" + t.page, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchSavedContentData({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/content/get-saved-data", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchContinueContent({commit: e}, t) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get("/content/continue").then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchSectionContinueContent({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("/content/section-continue?section_id=" + t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchSuggestedContent({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/my-space/suggested-" + t.type, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                submitQuestion({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                attemptContentQuestion({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("/practice/attempt", o).then((a => {
                            a = a.data.data,
                            e("SET_ATTEMPTED_QUESTION", {
                                data: a,
                                id: o.question_id
                            }),
                            t(a)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                getContentPlaylist({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("get-package-contents?page=" + o.page, o).then((o => {
                            o = o.data.data,
                            e("SET_CONTENT_PLAYLIST", o.data),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                getSubjectPlaylist({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("get-contents-by-section", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                getFreeContents({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("get-free-contents", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                saveContentDuration({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        const a = f.A.create(m.axiosInstance.defaults);
                        a.defaults.baseURL = "https://logger.ambition.guru/api/web/customer",
                        a.post("user-activity/store", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchShareLink({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("content/get-shareable-v2-link", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchImageByUnitId({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        f.A.get("https://api.ambition.guru/api/parse-section-image/" + o.id).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchRecentVideos({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/recent-videos", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                reportContent({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("content-report/store", o).then((o => {
                            o = o.data.data,
                            e("SHOW_REPORTED_DATA", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchSuggestion({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.get("content-report/suggestions", o).then((o => {
                            o = o.data.data,
                            e("REPORT_LABELS", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchContinueContentList({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("/content/continue-list?content_type=" + t.content_type).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchContent({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`/get-contents-by-custom-syllabus/${t.syllabus_id}`, t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                }
            }
              , X = {
                SET_CONTENT_DETAIL(e, t) {
                    e.content_detail = t
                },
                SET_PLAYER(e, t) {
                    e.player = t
                },
                SET_AUDIO_PLAYER(e, t) {
                    e.audio_player = t
                },
                SET_AUDIO_PLAYBACK(e, t) {
                    e.audio_playback = t
                },
                SET_AUDIO_CURRENT_TIME(e, t) {
                    e.audio_current_time = t
                },
                SHOW_AUDIO_PLAYER(e, t) {
                    e.show_audio_player = t
                },
                SET_SAVED_CONTENTS(e, t) {
                    e.saved_contents = t
                },
                REMOVE_SAVED_CONTENTS(e, t) {
                    var o = _.findIndex(e.saved_contents, (e => e.id == t.id));
                    o > -1 && e.saved_contents.splice(o, 1)
                },
                SET_VIDEO_PICTURE_DATA(e, t) {
                    e.video_picture_data = e.content_detail
                },
                SET_VIDEO_PICTURE(e, t) {
                    e.show_video_picture = t
                },
                SET_CONTENT_PLAYLIST(e, t) {
                    e.playlist = t
                },
                SET_BG(e, t) {
                    e.bg = t
                },
                SET_FAMILY(e, t) {
                    e.family = t
                },
                SET_SIZE(e, t) {
                    e.size = t
                },
                SET_VIDEO_HEIGHT(e, t) {
                    e.video_height = t
                },
                SET_CONTENT_QUESTION(e, t) {
                    e.questions = t
                },
                REMOVE_CONTENT_QUESTION(e, t) {
                    e.questions.splice(t, 1)
                },
                SET_CONTENT_QUESTION_INDEX(e, t) {
                    e.qindex = t
                },
                SET_FULL_SCREEN(e, t) {
                    e.fullscreen = t
                },
                SET_QUESTION_FORM(e, t) {
                    e.showQuestionForm = t
                },
                SET_CONTENT_COMPLETE(e, t) {
                    e.is_content_complete = t
                },
                SET_CONTENT_REVIEWS(e, t) {
                    e.reviews = t
                },
                SET_TABLE_CONTENTS(e, t) {
                    e.table_contents = t
                },
                SET_VIEWED_DATA(e, t) {
                    e.viewed_data = t
                },
                SET_USER_SPECIFIC_REVIEWS(e, t) {
                    e.user_specific_reviews = t
                },
                SET_SHOW_DISCUSSION(e, t) {
                    e.showDiscussion = t
                },
                SET_SHOW_RATINGS(e, t) {
                    e.showRatings = t
                },
                SET_DISCUSSION(e, t) {
                    e.discussion = t
                },
                SET_NAV_CONTENTS(e, t) {
                    e.nav_contents = t
                },
                SET_REPORT_TYPE(e, t) {
                    e.report_type = t
                },
                SET_ATTEMPTED_QUESTION(e, t) {
                    var o = _.findIndex(e.questions, {
                        question_id: t.id
                    });
                    console.log(o),
                    -1 != o && (e.questions[o].question.submitted_answer = t.data.submitted_answer,
                    e.questions[o].question.correct_answer = t.data.correct_answer)
                },
                SET_SECTION_CONTENT(e, t) {
                    e.section_content = t
                },
                REPORT_LABELS(e, t) {
                    e.reportLabels = t,
                    e.reportLabels.push({
                        title: "other"
                    })
                },
                SHOW_CONTENT_REPORT(e, t) {
                    e.showContentReport = t
                },
                SHOW_REPORTED_DATA(e, t) {
                    e.report = t
                },
                SET_PAGINATION(e, t) {
                    e.pagination = t
                },
                SET_CHILD_NAME(e, t) {
                    e.childName = t
                },
                SET_EMPTY(e, t) {
                    e.showEmpty = t
                },
                SET_CONTENT_NAME(e, t) {
                    e.contentNameList = t
                },
                SET_CURRENT_SYLLABUS_ID(e, t) {
                    e.currentSyllabusId = t
                }
            }
              , z = {
                totalContents: e => {
                    const t = (0,
                    K.KR)(0)
                      , o = (0,
                    K.KR)(0)
                      , a = (0,
                    K.KR)(0);
                    return e.table_contents.map((e => {
                        t.value += e.totalContents.QUESTIONS,
                        o.value += e.totalContents.NOTE,
                        a.value += e.totalContents.VIDEOS
                    }
                    )),
                    {
                        questions: t.value,
                        notes: o.value,
                        videos: a.value
                    }
                }
            }
              , J = {
                namespaced: !0,
                state: j,
                actions: Y,
                mutations: X,
                getters: z
            }
              , Z = {
                selected: {},
                prev_type: null
            }
              , ee = {
                fetchSectionWiseProgress({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/subject-wise-progress", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                }
            }
              , te = {
                SET_SELECTED(e, t) {
                    e.selected = t
                },
                SET_PREV_TYPE(e, t) {
                    e.prev_type = t
                }
            }
              , oe = {
                namespaced: !0,
                state: Z,
                actions: ee,
                mutations: te
            };
            var ae = o(77618);
            const ne = {
                discussion: [],
                form: {}
            }
              , se = {
                fetchContentDiscussion({commit: e}, t) {
                    return console.log(t),
                    new Promise(( (o, a) => {
                        m.axiosInstance.post("/discussion/content/get", t).then((t => {
                            t = t.data.data,
                            e("SET_DISCUSSION", t),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                storeContentReply({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/discussion/content/store-reply", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                editDiscussion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/discussion/update", o).then((t => {
                            t = t.data.data,
                            console.log(t),
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                removeDiscussion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/discussion/delete", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                replyDiscussion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/discussion/reply", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                likeDiscussion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/discussion/like", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , ie = {
                SET_DISCUSSION(e, t) {
                    e.discussion = t
                },
                SET_DISCUSSION_TEMP_ID(e, t) {
                    e.discussion_temp_id = t
                },
                SET_DISCUSSION_COMMENT_TRACK(e, t) {
                    e.discussion_comment_add_track = t
                },
                EDIT_HOME_COMMENT_COUNT(e, t) {
                    if (e.discussion.length > 0) {
                        var o = _.findIndex(e.discussion, {
                            id: e.discussion_temp_id
                        });
                        console.log(o),
                        o > -1 && (e.discussion[o].comments_count = e.discussion[o].comments_count + 1)
                    }
                },
                SET_DISCUSSION_ADD_FORM(e, t) {
                    e.showDiscussionAddForm = t
                },
                SET_DISCUSSION_MODE(e, t) {
                    e.discussionMode = t
                },
                SET_DISCUSSION_FROM(e, t) {
                    e.discussion_from = t
                },
                SET_FORM_TITLE(e, t) {
                    e.formTitle = t
                },
                SET_FORM(e, t) {
                    "file" == t.key || "media_id" == t.key || "demo_images" == t.key || "media_id" == t.key ? (e.form[t.key].push(t.value),
                    console.log("comment form ", e.form[t.key])) : e.form[t.key] = t.value
                },
                REMOVE_FORM(e, t) {
                    e.form[t.key].splice(t.index, 1)
                },
                SET_FILTER(e, t) {
                    e.filter[t.filter] = t.value
                },
                RESET_FORM(e, t) {
                    e.form = {
                        id: "",
                        title: "",
                        category: "",
                        description: "",
                        file: [],
                        media_id: [],
                        content_id: "",
                        is_question: !1,
                        demo_images: []
                    }
                },
                SET_SECTION_DISCUSSIONS(e, t) {
                    e.section_discussions = t,
                    e.loading = !1
                },
                SET_CURRENT_DISCUSSION_ID(e, t) {
                    e.currentDiscussionId = t,
                    e.loading = !1
                },
                SET_CURRENT_HOVER_DISCUSSION_ID(e, t) {
                    e.currentHoverDiscussionId = t
                }
            }
              , ce = {
                namespaced: !0,
                state: ne,
                actions: se,
                mutations: ie
            }
              , re = {
                loading: !0,
                discussion: [],
                editDiscussion: {},
                addDiscussion: !1,
                formData: {},
                currentDiscussion: {},
                comments: []
            }
              , me = {
                fetchDiscussion({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        e("SET_DISCUSSION", []),
                        m.axiosInstance.get(`v2/discussions?page=${t.pagination}`).then(( ({data: t}) => {
                            e("SET_DISCUSSION", t.data.data),
                            o(t.data.data)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchContentDiscussionDetail({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("v2/discussions/" + t.slug).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                likeDiscussion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post(`v2/discussions/${o.slug}/upvote-or-remove`).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                saveDiscussion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("content/save", {
                            model_type: "discussion",
                            model_id: o.id
                        }).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                createDiscussion({commit: e, dispatch: t}, o) {
                    return new Promise(( (a, n) => {
                        m.axiosInstance.post("v3/discussions", o).then((o => {
                            o = o.data,
                            e("ADD_NEW_DISCUSSION", o),
                            t("fetchDiscussion", {
                                pagination: 1
                            }),
                            a(o)
                        }
                        )).catch((e => {
                            n(e)
                        }
                        ))
                    }
                    ))
                },
                removeDiscussion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.delete(`v2/discussions/${o.slug}`, o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                updateDiscussionOrReply({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.put(`v2/discussions/${t.slug}`, t).then((t => {
                            t = t.data,
                            e("UPDATE_DISCUSSION_LIST", t),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchDiscussionReplies({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`v2/discussions/${t.slug}/replies?per_page=${t.per_page}&page=${t.page}`).then((t => {
                            t = t?.data.data,
                            console.log(t, "response discussion"),
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                createReplies({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`v2/discussions/${t.slug}/reply`, t).then((t => {
                            t = t.data,
                            console.log(t, "response discussion"),
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                updateDiscussionStatus({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.put("v2/discussions/change-discussion-status", t).then((t => {
                            t = t.data,
                            e("UPDATE_DISCUSSION_LIST", t),
                            o(t)
                        }
                        )).catch(a)
                    }
                    ))
                }
            }
              , ue = {
                SET_CREATE_DISCUSSION(e, t) {
                    e.addDiscussion = t
                },
                SET_DISCUSSION(e, t) {
                    e.discussion = t
                },
                SET_EDIT_DISCUSSION(e, t) {
                    e.editDiscussion = t
                },
                SET_FORMDATA(e, t) {
                    e.formData = t
                },
                ADD_NEW_DISCUSSION(e, t) {
                    e.discussion?.unshift(t)
                },
                UPDATE_DISCUSSION(e, t) {
                    e.currentDiscussion = t
                },
                UPDATE_DISCUSSION_LIST(e, t) {
                    const o = e.discussion.findIndex((e => e.slug === t.data.slug));
                    -1 !== o ? e.discussion[o] = t.data : console.log("No matching discussion found to update.")
                }
            }
              , de = {
                namespaced: !0,
                state: re,
                actions: me,
                mutations: ue
            }
              , le = {
                practice: {},
                assessments: [],
                showSelectForm: !1,
                fullScreen: !1,
                questions: [],
                questionIndex: 0,
                minMode: !0,
                scrollMode: !1,
                reportLabels: [],
                select: {
                    number_of_questions: 15,
                    name: "",
                    is_exam: !1,
                    duration: 60,
                    type: "content",
                    question_fetch_type: null,
                    id: "",
                    purpose: "",
                    subject_id: [],
                    unit_id: [],
                    chapter_id: []
                }
            }
              , pe = {
                createPractice({commit: e, state: t}, o=null) {
                    return new Promise(( (e, o) => {
                        let a = t.select;
                        m.axiosInstance.post("/practice/create", a).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                redoPractice({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/practice/restart", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchAssesments({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_ASSESSMENTS", []),
                        m.axiosInstance.post("/practice/get-assessments?page=" + o.cpage, o).then((o => {
                            o = o.data.data,
                            e("SET_ASSESSMENTS", o.data),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchPracticeById({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        var n = {
                            id: o.id
                        };
                        m.axiosInstance.post("/practice/get", n).then((o => {
                            o = o.data.data,
                            e("SET_PRACTICE", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchPracticeQuestions({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        var n = {
                            id: o.id
                        };
                        m.axiosInstance.post("/practice/get-questions", n).then((o => {
                            o = o.data.data,
                            e("SET_PRACTICE", o),
                            e("SET_QUESTIONS", o.question),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                attemptQuestion({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("/practice/attempt", o).then((a => {
                            a = a.data.data,
                            e("SET_ATTEMPTED_QUESTION", {
                                data: a,
                                id: o.question_id
                            }),
                            t(a)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                attemptSubjectiveQuestion({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("/interactive-content/attempt", o).then((a => {
                            a = a.data.data,
                            e("SET_ATTEMPTED_QUESTION", {
                                data: a,
                                id: o.question_id
                            }),
                            t(a)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                markQuestion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/practice/mark", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                submitPractice({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/practice/submit", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                viewResult({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/practice/result", o).then((e => {
                            let t = t.data.data
                        }
                        ))
                    }
                    ))
                },
                reportQuestion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("question-report/store", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                modelSetPractice({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/practice/start-model-set", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchSuggestion({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.get("question-report/suggestions", o).then((o => {
                            o = o.data.data,
                            e("REPORT_LABELS", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchSuggestedPractice({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("my-space/suggested-practice", o).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchAnswerExplainationVideos({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/get-question-explanation-by-id", o).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , he = {
                SHOW_SELECT_FORM(e, t) {
                    e.showSelectForm = t
                },
                REPORT_LABELS(e, t) {
                    e.reportLabels = t,
                    e.reportLabels.push({
                        title: "other"
                    })
                },
                SET_MIN_MODE(e, t) {
                    e.minMode = t
                },
                SET_FULL_SCREEN(e, t) {
                    e.fullScreen = t
                },
                SET_SCROLL_MODE(e, t) {
                    e.scrollMode = t
                },
                SET_PRACTICE(e, t) {
                    e.practice = t
                },
                SET_ASSESSMENTS(e, t) {
                    e.assessments = t
                },
                SET_QUESTIONS(e, t) {
                    var o = t.map(( (e, t) => ({
                        ...e,
                        index: t
                    })));
                    e.questions = o
                },
                SET_QUESTIONS_ONLY(e, t) {
                    e.questions = t
                },
                SET_QUESTION_INDEX(e, t) {
                    e.questionIndex = t
                },
                SET_SELECT(e, t) {
                    e.select[t.key] = t.value
                },
                SET_SELECT_ALL(e, t) {
                    e.select = t
                },
                INCREASE_QUESTION_INDEX(e) {
                    e.questionIndex++
                },
                DECREASE_QUESTION_INDEX(e) {
                    e.questionIndex--
                },
                SET_ATTEMPTED_QUESTION(e, t) {
                    var o = _.findIndex(e.questions, {
                        id: t.id
                    });
                    console.log(o),
                    -1 != o && (e.questions[o].attempted = t.data)
                },
                SET_QUESTION_SAVED(e, t) {
                    e.questions[e.questionIndex].is_saved = !e.questions[e.questionIndex].is_saved
                }
            }
              , ge = {
                namespaced: !0,
                state: le,
                actions: pe,
                mutations: he
            }
              , _e = {
                practice: {},
                questions: [],
                questionIndex: 0,
                questionContextIndex: 0,
                questionContext: [],
                showResultIelts: !1,
                showRoadMap: !1,
                showSolution: !1,
                result: {},
                confirmSubmit: !1,
                showListeningPage: !1,
                time: "00:00:00",
                showTestEnded: !1,
                type: "",
                audioSource: "",
                currentQuestion: "",
                showTestAutoEnded: !1,
                showWritingPage: !1,
                showReadingPage: !1,
                showSpeakingPage: !1,
                showTopicInfo: !0,
                timeInSeconds: 0,
                speakingPayload: {},
                volumn: 60,
                tmpQuestions: [],
                wordCount: 0
            }
              , Ee = {
                modelSetPractice({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/mock-exam/test/create-practice", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchQuestionContextByPracticeId({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_QUESTION_CONTEXT", []),
                        m.axiosInstance.get("/get-question-context-by-practice-id/" + o.id).then((o => {
                            e("SET_QUESTION_CONTEXT", o.data.data),
                            o = o.data.data,
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchQuestionWithContext({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_QUESTIONS", []),
                        e("SET_PRACTICE", {}),
                        m.axiosInstance.post("/practice/get-questions-with-context", o).then((o => {
                            console.log("questions all ", o.data.data),
                            e("SET_PRACTICE", o.data.data),
                            e("SET_QUESTIONS", o.data?.data?.question ?? []),
                            o = o.data.data,
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                attemptQuestion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("practice/attempt", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                submitPractice({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("practice/submit", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                ieltsSolution({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_RESULT", {}),
                        m.axiosInstance.post("ielts-result", o).then((o => {
                            e("SET_RESULT", o.data.data),
                            o = o.data.data,
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                submitBulkAttempt({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/mock-exam/attempt/bulk", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                ieltsIntroduction({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        console.log(o, "payload"),
                        m.axiosInstance.get("exams/introductions/" + o.exam_id).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , Se = {
                SET_QUESTIONS(e, t) {
                    e.questions = t
                },
                SET_PRACTICE(e, t) {
                    e.practice = t
                },
                SET_QUESTION_INDEX(e, t) {
                    e.questionIndex = t
                },
                SET_QUESTION_CONTEXT(e, t) {
                    e.questionContext = t
                },
                SET_QUESTION_CONTEXT_INDEX(e, t) {
                    e.questionContextIndex = t
                },
                SET_SHOW_RESULT(e, t) {
                    e.showResultIelts = t
                },
                SET_SHOW_ROADMAP(e, t) {
                    e.showRoadMap = t
                },
                SET_SHOW_SOLUTION(e, t) {
                    e.showSolution = t
                },
                SET_RESULT(e, t) {
                    e.result = t
                },
                SET_CONFIRM_SUBMIT(e, t) {
                    e.confirmSubmit = t
                },
                SET_SHOW_LISTENING_PAGE(e, t) {
                    e.showListeningPage = t
                },
                SET_EXAM_TIME(e, t) {
                    e.time = t
                },
                SET_EXAM_TIME_IN_SECONDS(e, t) {
                    e.timeInSeconds = t
                },
                SET_EXAM_ENDED(e, t) {
                    e.showTestEnded = t
                },
                SET_SHOW_READING_PAGE(e, t) {
                    e.showReadingPage = t
                },
                SET_EXAM_TYPE(e, t) {
                    e.type = t
                },
                SET_CURRENT_QUESTION(e, t) {
                    e.currentQuestion = t
                },
                SET_AUDIO_SOURCE(e, t) {
                    var o = _.findIndex(e.questionContextIndex);
                    e.audioSource = e.questionContext[o]?.media?.path
                },
                SET_EXAM_AUTO_ENDED(e, t) {
                    e.showTestAutoEnded = t
                },
                SET_SHOW_WRITING_PAGE(e, t) {
                    e.showWritingPage = t
                },
                SET_SHOW_SPEAKING_PAGE(e, t) {
                    e.showSpeakingPage = t
                },
                SET_SHOW_TOPIC_INFO(e, t) {
                    e.showTopicInfo = t
                },
                SET_SPEAKING_PAYLOAD(e, t) {
                    e.speakingPayload = t
                },
                SET_VOLUME(e, t) {
                    e.volumn = t
                },
                SET_TEMP_QUESTIONS(e, t) {
                    e.tmpQuestions = t
                },
                SET_WORD_COUNT(e, t) {
                    e.wordCount = t
                }
            }
              , ve = {
                namespaced: !0,
                state: _e,
                actions: Ee,
                mutations: Se
            };
            function Ce() {
                return {
                    settingsModal: !1,
                    questionModal: !1,
                    showConfirm: !1,
                    showResult: !1,
                    practice: {},
                    questions: [],
                    questionIndex: 0,
                    tab: "all",
                    reportLabels: [],
                    scrollMode: !1,
                    questionRef: null,
                    showConfirmDialog: !1,
                    tempQuestions: [],
                    practiceModes: [{
                        label: "Exam Mode",
                        val: "exam_mode",
                        key: 0
                    }, {
                        label: "Normal Mode",
                        val: "normal_mode",
                        key: 1
                    }],
                    mode: "exam_mode",
                    themes: [{
                        label: "Light",
                        value: "light_theme",
                        color: "#FBFBFB"
                    }, {
                        label: "Paper",
                        value: "paper_theme",
                        color: "#E7ECF0"
                    }, {
                        label: "Sepia",
                        value: "sepia_theme",
                        color: "#FDFBEC"
                    }, {
                        label: "Dark",
                        value: "dark_theme",
                        color: "#2b2a2a"
                    }],
                    theme: "light_theme",
                    textStyles: [{
                        label: "Sans Serif",
                        color: "rgba(233, 233, 233, 0.5)",
                        value: "sans_serif"
                    }, {
                        label: "Serif",
                        color: "#555555",
                        value: "serif"
                    }],
                    textStyle: "sans_serif",
                    textSizes: [{
                        label: 1,
                        value: "text-all-1"
                    }, {
                        label: 2,
                        value: "text-all-2"
                    }, {
                        label: 3,
                        value: "text-all-3"
                    }],
                    textSize: 2,
                    showMessage: !1,
                    dppStatus: !1,
                    reportedStatus: !1,
                    selectedSubjects: [],
                    currentQuestions: "",
                    currentImages: [],
                    showImagePreview: !1,
                    supportedSubjectiveType: ["Image", "Subjective"],
                    viewQuestion: !1,
                    resultHomeworkData: {}
                }
            }
            const Te = Ce()
              , Ie = {
                fetchPracticeQuestions({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        var n = {
                            id: o.id
                        };
                        m.axiosInstance.post("/practice/get-questions", n).then((o => {
                            o = o.data.data,
                            e("SET_PRACTICE", o),
                            e("SET_QUESTIONS", o.question),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                attemptQuestion({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("/practice/attempt", o).then((a => {
                            a = a.data.data,
                            e("SET_ATTEMPTED_QUESTION", {
                                data: a,
                                id: o.question_id
                            }),
                            t(a)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                reportQuestion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("question-report/store", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchSuggestion({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.get("question-report/suggestions", o).then((o => {
                            o = o.data.data,
                            e("REPORT_LABELS", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                markQuestion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/practice/mark", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                submitPractice({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/practice/submit", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                viewResult({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/practice/result", o).then((e => {
                            let t = t.data.data
                        }
                        ))
                    }
                    ))
                },
                fetchAnswerExplainationVideos({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/get-question-explanation-by-id", o).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchDpp({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/practice/start-dpp", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                startHomework({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/homework/start", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                resultHomework({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get(`homework/result/${o.id}`, o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                resetState({commit: e}) {
                    e("RESET_STATE")
                }
            }
              , fe = {
                SET_TAB(e, t) {
                    e.tab = t
                },
                SET_SETTINGS_MODAL(e, t) {
                    e.settingsModal = t
                },
                SET_QUESTION_MODAL(e, t) {
                    e.questionModal = t
                },
                SET_PRACTICE(e, t) {
                    e.practice = t
                },
                SET_QUESTIONS(e, t) {
                    var o = t.map(( (e, t) => ({
                        ...e,
                        index: t
                    })));
                    e.questions = o
                },
                SET_QUESTION_INDEX(e, t) {
                    e.questionIndex = t
                },
                SET_ATTEMPTED_QUESTION(e, t) {
                    console.log(t);
                    var o = U().findIndex(e.questions, {
                        id: t.id
                    });
                    console.log(o),
                    -1 != o && (e.questions[o].attempted = t.data)
                },
                SET_QUESTION_SAVED(e, t) {
                    if (t) {
                        console.log(t, e.questions);
                        var o = e.questions.findIndex((e => e.id === t));
                        console.log(o),
                        o > -1 && (e.questions[o].is_saved = !e.questions[o].is_saved)
                    } else
                        e.questions[e.questionIndex].is_saved = !e.questions[e.questionIndex].is_saved
                },
                REPORT_LABELS(e, t) {
                    e.reportLabels = t,
                    e.reportLabels.push({
                        title: "other"
                    })
                },
                SET_PRACTICE_MODE(e, t) {
                    e.practiceModes = t
                },
                SET_MODE(e, t) {
                    e.mode = t
                },
                SET_THEMES_MODE(e, t) {
                    e.themes = t
                },
                SET_THEME(e, t) {
                    e.theme = t
                },
                SET_TEXT_STYLE(e, t) {
                    e.textStyles = t
                },
                SET_STYLE(e, t) {
                    e.textStyle = t
                },
                SET_SHOW_CONFIRM(e, t) {
                    e.showConfirm = t
                },
                SET_SHOW_RESULT(e, t) {
                    e.showResult = t
                },
                SET_TEXT_SIZES(e, t) {
                    e.textSizes = t
                },
                SET_SIZES(e, t) {
                    e.textSize = t
                },
                SET_QUESTIONS_ONLY(e, t) {
                    e.questions = t
                },
                SET_SCROLL_MODE(e, t) {
                    e.scrollMode = t
                },
                SET_QUESTION_REF(e, t) {
                    e.questionRef = t
                },
                SET_SHOW_MESSAGE(e, t) {
                    e.showMessage = t
                },
                SET_SHOW_CONFIRM_DIALOG(e, t) {
                    e.showConfirmDialog = t
                },
                SET_TEMP_QUESTION(e, t) {
                    e.tempQuestions = t
                },
                SET_DPP_PRACTICE_STATUS(e, t) {
                    e.dppStatus = t
                },
                RESET_STATE(e) {
                    Object.assign(e, Ce())
                },
                SET_REPORTED_STATUS(e, t) {
                    e.reportedStatus = t
                },
                SET_SELECTED_SUBJECTS(e, t) {
                    e.selectedSubjects = t
                },
                SET_CURRENT_QUESTIONS(e, t) {
                    e.currentQuestions = t
                },
                SET_CURRENT_IMAGES(e, t) {
                    e.currentImages = t
                },
                SET_SHOW_IMAGE_PREVIEW(e, t) {
                    e.showImagePreview = t
                },
                SET_SUPPORTED_SUBJECTIVE_TYPE(e, t) {
                    e.supportedSubjectiveType = t
                },
                SET_VIEW_QUESTION(e, t) {
                    e.viewQuestion = t
                },
                SET_HOMEWORK_RESULT_DATA(e, t) {
                    e.resultHomeworkData = t
                }
            }
              , Pe = {
                namespaced: !0,
                state: Te,
                actions: Ie,
                mutations: fe
            }
              , we = {
                exams: [],
                showPremium: !1,
                upcoming: {},
                featured: [],
                tab: "live",
                filter: "current",
                series_filter: "all",
                privacy_mode: !1,
                exam: {},
                exam_result: {},
                questions: [],
                questionIndex: 0,
                timer_time: 0,
                showQuestionReport: !0,
                showPaymentForm: !1,
                showResult: !1,
                showInfoForm: !1,
                showCompareData: !1,
                showResultDialog: !1,
                showUpcomingDialog: !1,
                result_data: {},
                examDetail: {},
                exam_rank: {},
                compare_data: {},
                exam_stats: [],
                dailyQuiz: null,
                allDailyQuizData: [],
                singleQuizData: null,
                dailyQuizStatus: !1,
                modelSet: [],
                modelSetCategories: [],
                upcommingExamNow: !1,
                currentImages: [],
                tempQuestions: [],
                practiceModes: [{
                    label: "Exam Mode",
                    val: "exam_mode",
                    key: 0
                }, {
                    label: "Normal Mode",
                    val: "normal_mode",
                    key: 1
                }],
                mode: "exam_mode",
                themes: [{
                    label: "Light",
                    value: "light_theme",
                    color: "#FBFBFB"
                }, {
                    label: "Paper",
                    value: "paper_theme",
                    color: "#E7ECF0"
                }, {
                    label: "Sepia",
                    value: "sepia_theme",
                    color: "#FDFBEC"
                }, {
                    label: "Dark",
                    value: "dark_theme",
                    color: "#2b2a2a"
                }],
                theme: "light_theme",
                textStyles: [{
                    label: "Sans Serif",
                    color: "rgba(233, 233, 233, 0.5)",
                    value: "sans_serif"
                }, {
                    label: "Serif",
                    color: "#555555",
                    value: "serif"
                }],
                textStyle: "sans_serif",
                textSizes: [{
                    label: 1,
                    value: "text-all-1"
                }, {
                    label: 2,
                    value: "text-all-2"
                }, {
                    label: 3,
                    value: "text-all-3"
                }],
                textSize: 2,
                questionModal: !1,
                settingsModal: !1,
                scrollMode: !1,
                showAnswerUploaded: !1,
                showAnswerNotUploaded: !1,
                showAnswerUploadComp: !0,
                showAnswerList: !0,
                showUploadedAnswer: !0,
                closedMockTest: [],
                showImagePreview: !1,
                subjectiveExams: [],
                currentQuestions: "",
                exam_type: "subjective",
                currentPage: 1,
                total: 0,
                loading: !1
            }
              , Ae = {
                createExam({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/mock-exam/start", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                restartExam({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/mock-exam/restart", o).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchPracticeHistory({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/mock-exam/practice", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                createOfflineExam({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("offline-mock-exam/start", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                submitPrivacy({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/mock-exam/update-details-privacy", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchMyExams({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_EXAMS", []);
                        var n = "/mock-exam/my-tests?page=" + o.cpage;
                        m.axiosInstance.post(n, o).then((o => {
                            o = o.data.data,
                            e("SET_EXAMS", o.data),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchExams({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_EXAMS", []);
                        var n = "/mock-exam/get-exams?page=" + o.cpage + "&num_of_rows=" + o.per_page;
                        m.axiosInstance.post(n, o).then((o => {
                            o = o.data.data,
                            e("SET_EXAMS", o.data),
                            e("SET_UPCOMING_EXAMS", o?.data[0]),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchSeriesExams({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_EXAMS", []),
                        "mylist" == o.sort_by ? m.axiosInstance.get("offline-mock-exam/my-tests?page=" + o.cpage, o).then((o => {
                            o = o.data.data,
                            e("SET_EXAMS", o.data),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        )) : m.axiosInstance.post("offline-mock-exam/get-exams?page=" + o.cpage, o).then((o => {
                            o = o.data.data,
                            e("SET_EXAMS", o.data),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchExamQuestions({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        var n = {
                            id: o.id
                        };
                        m.axiosInstance.post("/mock-exam/get-questions", n).then((o => {
                            o = o.data.data,
                            console.log("exam res", o),
                            e("SET_EXAM", o),
                            e("SET_QUESTIONS", o.question),
                            setTimeout(( () => {
                                e("SET_LOCAL_VIEWED_QUESTION")
                            }
                            ), 400),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchQuestionsByExamId({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.get("/mock-exam/questions/" + o.id).then((o => {
                            o = o.data.data,
                            e("SET_EXAM", o),
                            e("SET_QUESTIONS", o.question),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                markQuestion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/mock-exam/mark", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                cancelRegistration({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("/mock-exam/cancel-registration", o).then((a => {
                            a = a.data.data,
                            e("RESET_REGISTERED", o),
                            t(a)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                submitExam({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        var a = "/mock-exam/submit";
                        "offline" == o.submit_type && (a = "/offline-mock-exam/submit"),
                        m.axiosInstance.post(a, o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchResult({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.get("/mock-exam/result-summary/" + o.id).then((o => {
                            o = o.data.data,
                            e("SET_EXAM_RESULT", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchRank({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.get("/mock-exam/result-ranks/" + o.id).then((o => {
                            o = o.data.data,
                            console.log("rank", o),
                            e("SET_EXAM_RANK", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                compareRank({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("/mock-exam/compare-result-summary", o).then((o => {
                            o = o.data.data,
                            e("SET_COMPARE_DATA", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                attemptQuestion({commit: e, state: t, dispatch: o}, a) {
                    return new Promise(( (t, o) => {
                        m.axiosInstance.post("/mock-exam/attempt", a).then((o => {
                            o = o.data.data,
                            e("SET_ATTEMPTED_QUESTION", {
                                data: o,
                                id: a.question_id
                            }),
                            t(o)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                submitBulkAttempt({commit: e, state: t}, o) {
                    var a = G.A.getItem("attempted_questions");
                    if (a && a.data.length > 0) {
                        var n = [];
                        a.data.forEach((function(e, t) {
                            (e.a || 0 == e.a) && n.push(e)
                        }
                        ));
                        var s = {
                            type: "EXAM",
                            type_id: o.type_id,
                            data: n
                        };
                        (o.is_urgent && n.length > 0 || n.length >= 4) && m.axiosInstance.post("/mock-exam/attempt/bulk", s).then((t => {
                            t = t.data.data,
                            e("CLEAR_LOCAL_ATTEMPTED")
                        }
                        )).catch((e => {}
                        ))
                    }
                },
                getExamDetails({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_EXAM_DETAIL", []),
                        m.axiosInstance.post("/mock-exam/get-exam-detail", o).then((o => {
                            o = o.data.data,
                            e("SET_EXAM_DETAIL", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                getSeriesExamDetails({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_EXAM_DETAIL", []),
                        m.axiosInstance.post("offline-mock-exam/get-exam-detail", o).then((o => {
                            o = o.data.data,
                            e("SET_EXAM_DETAIL", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                regsiterFreeExam({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("/mock-exam/register", o).then((a => {
                            a = a.data.data,
                            e("SET_REGISTERED", {
                                exam_id: o.exam_id
                            }),
                            t(a)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                getExamStats({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.get("/mock-exam/total-count", o).then((o => {
                            o = o.data.data,
                            e("SET_EXAM_STATS", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                getUpcomingExams({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get("/mock-exam/my-upcoming-exams", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                getFeaturedExams({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("mock-exam/get-featured-exams", o).then((o => {
                            o = o.data.data,
                            e("SET_FEATURED_EXAMS", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                getSuggestionContentByUnitId({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("mock-exam/content-suggestion/" + o.exam_id, o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                getPracticeIdByExamId({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/practice/get-id-from-exam", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchDailyQuiz({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("/quiz/fetch-question", o).then((a => {
                            a = a.data.data,
                            e(o ? "SET_SINGLE_QUIZ_DATA" : "SET_DAILY_QUIZ", a),
                            t(a)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                submitDailyQuiz({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/quiz/attempt-question", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchAllQuizData({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.get("/quiz/fetch", o).then((o => {
                            o = o.data.data,
                            e("SET_ALL_DAILY_QUIZ_DATA", o.data),
                            t(o.data)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchModelSet({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        if (t.model_set_category_id)
                            var n = `/mock-exam/fetch-by-type/model-set?page=${t.cpage}&model_set_category_id=${t.model_set_category_id}`;
                        else
                            n = `/mock-exam/fetch-by-type/model-set?page=${t.cpage}`;
                        m.axiosInstance.get(n).then((t => {
                            e("FETCH_MODEL_SET", t.data.data.data),
                            o(t.data)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchModelSetCategories({commit: e}, t) {
                    return new Promise(( (t, o) => {
                        m.axiosInstance.post("/model-set/get-all-categories-by-package").then((o => {
                            o = o.data.data,
                            e("SET_MODEL_CATEGORIES", o),
                            t(o)
                        }
                        )).catch((e => {
                            o(e),
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                fetchVideoExplanation({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("/video-solutions-by-exam/" + t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e),
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                checkHasUpcommingExam({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_UPCOMING_EXAMS", []),
                        m.axiosInstance.post("mock-exam/has-live", o).then((o => {
                            let a = o.data.data.status;
                            e("SET_UPCOMMING_EXAM_NOW", a),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchDppList({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get("mock-exam/fetch-dpp?date=" + o.date, o).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchHomework({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get("/mock-exam/get-exams-v2?date=" + o.date, o).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                deleteUploadedImage({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("delete/question-image", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchSubjectiveExams({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_SUBJECTIVE_EXAMS", []);
                        var n = "mock-exam/fetch-subjective?page=" + o.cpage;
                        m.axiosInstance.get(n, o).then((o => {
                            o = o.data.data,
                            e("SET_SUBJECTIVE_EXAMS", o.data),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchModelSetHistory({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get(`exams/model-set/history/${o.id}&?page=${o.current_page}`, o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchModelSetSummary({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get(`exams/model-set/history/${o.id}/summary`, o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchModelSetDetail({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get(`mock-exam/single/fetch-by-type/model-set?id=${o.id}`, o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchHomeworkDetail({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get(`homework/detail/${o.id}`, o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , ye = {
                SET_EXAMS(e, t) {
                    e.exams = t
                },
                SET_TIMER_TIME(e, t) {
                    e.timer_time = t
                },
                SET_TAB(e, t) {
                    e.tab = t
                },
                SET_FILTER(e, t) {
                    e.filter = t
                },
                SHOW_RESULT(e, t) {
                    e.showResult = t
                },
                SHOW_QUESTION_REPORT(e, t) {
                    e.showQuestionReport = t
                },
                SET_SERIES_FILTER(e, t) {
                    e.series_filter = t
                },
                SET_UPCOMING_EXAMS(e, t) {
                    e.upcoming = t
                },
                SET_UPCOMING_DIALOG(e, t) {
                    e.showUpcomingDialog = t
                },
                SET_FEATURED_EXAMS(e, t) {
                    e.featured = t
                },
                SET_EXAM_STATS(e, t) {
                    e.exam_stats = t
                },
                SHOW_RESULT_DIALOG(e, t) {
                    e.showResultDialog = t
                },
                SET_EXAM(e, t) {
                    e.exam = t
                },
                SET_PREMIUM(e, t) {
                    e.showPremium = t
                },
                FETCH_MODEL_SET(e, t) {
                    e.modelSet = t
                },
                RESET_REGISTERED(e, t) {
                    var o = _.findIndex(e.exams, {
                        id: t.exam_id
                    });
                    o > -1 && (e.exams[o].is_registered = !1);
                    var a = _.findIndex(e.featured, {
                        id: t.exam_id
                    });
                    -1 != a && (e.featured[a].is_registered = !1),
                    e.examDetail && e.examDetail.id == t.exam_id && (e.examDetail.is_registered = !1)
                },
                CLEAR_LOCAL_ATTEMPTED(e) {
                    var t = G.A.getItem("attempted_questions");
                    if (t && t.length > 0) {
                        var o = [];
                        t.forEach((function(e, t) {
                            e.a || o.push(e)
                        }
                        )),
                        o.length > 0 ? G.A.set("attempted_questions", o) : G.A.remove("attempted_questions")
                    } else
                        G.A.remove("attempted_questions")
                },
                SET_LOCAL_VIEWED_QUESTION(e, t) {
                    var o = G.A.getItem("attempted_questions");
                    o && o.data.length > 0 && (console.log("state", o),
                    o.data.forEach((function(t) {
                        var o = e.questions.findIndex((e => e.id == t.q));
                        if (o > -1) {
                            var a = {
                                question_id: t.q,
                                submitted_answer: t.a,
                                start_time: t.start_time
                            };
                            if (!e.questions[o].attempted) {
                                o = _.findIndex(e.questions, {
                                    id: t.q
                                });
                                -1 != o && (e.questions[o].attempted = a)
                            }
                        }
                    }
                    )))
                },
                SET_COMPARE_DATA(e, t) {
                    e.compare_data = t
                },
                SHOW_COMPARE_DATA(e, t) {
                    e.showCompareData = t
                },
                SET_EXAM_RESULT(e, t) {
                    e.exam_result = t
                },
                SET_EXAM_RANK(e, t) {
                    e.exam_rank = t
                },
                SET_EXAM_DETAIL(e, t) {
                    e.examDetail = t
                },
                SET_REGISTERED(e, t) {
                    var o = _.findIndex(e.exams, {
                        id: t.exam_id
                    });
                    -1 != o && (e.exams[o].is_registered = !0);
                    var a = _.findIndex(e.featured, {
                        id: t.exam_id
                    });
                    -1 != a && (e.featured[a].is_registered = !0),
                    e.examDetail && e.examDetail.id == t.exam_id && (e.examDetail.is_registered = !0)
                },
                SET_PAYMENT_FORM(e, t) {
                    e.showPaymentForm = t
                },
                SET_INFO_FORM(e, t) {
                    e.showInfoForm = t
                },
                SET_QUESTIONS(e, t) {
                    var o = t.map(( (e, t) => ({
                        ...e,
                        index: t
                    })));
                    e.questions = o
                },
                SET_QUESTIONS_ONLY(e, t) {
                    e.questions = t
                },
                SET_QUESTION_INDEX(e, t) {
                    e.questionIndex = t
                },
                SET_SELECT(e, t) {
                    e.select[t.key] = t.value
                },
                INCREASE_QUESTION_INDEX(e) {
                    e.questionIndex++
                },
                DECREASE_QUESTION_INDEX(e) {
                    e.questionIndex--
                },
                SET_ATTEMPTED_QUESTION(e, t) {
                    var o = _.findIndex(e.questions, {
                        id: t.id
                    });
                    console.log(o),
                    -1 != o && (e.questions[o].attempted = t.data)
                },
                SET_QUESTION_SAVED(e, t) {
                    e.questions[e.questionIndex].is_saved = !e.questions[e.questionIndex].is_saved
                },
                SET_DAILY_QUIZ(e, t) {
                    e.dailyQuiz = t
                },
                SET_ALL_DAILY_QUIZ_DATA(e, t) {
                    e.allDailyQuizData = t
                },
                SET_SINGLE_QUIZ_DATA(e, t) {
                    e.singleQuizData = t
                },
                SET_DAILY_QUIZ_STATUS(e, t) {
                    e.dailyQuizStatus = t
                },
                SET_MODEL_CATEGORIES(e, t) {
                    e.modelSetCategories = t
                },
                SET_UPCOMMING_EXAM_NOW(e, t) {
                    e.upcommingExamNow = t
                },
                SET_PRACTICE_MODE(e, t) {
                    e.practiceModes = t
                },
                SET_MODE(e, t) {
                    e.mode = t
                },
                SET_THEMES_MODE(e, t) {
                    e.themes = t
                },
                SET_THEME(e, t) {
                    e.theme = t
                },
                SET_TEXT_STYLE(e, t) {
                    e.textStyles = t
                },
                SET_STYLE(e, t) {
                    e.textStyle = t
                },
                SET_SHOW_CONFIRM(e, t) {
                    e.showConfirm = t
                },
                SET_SHOW_RESULT(e, t) {
                    e.showResult = t
                },
                SET_TEXT_SIZES(e, t) {
                    e.textSizes = t
                },
                SET_SIZES(e, t) {
                    e.textSize = t
                },
                SET_SCROLL_MODE(e, t) {
                    e.scrollMode = t
                },
                SET_QUESTION_REF(e, t) {
                    e.questionRef = t
                },
                SET_SHOW_MESSAGE(e, t) {
                    e.showMessage = t
                },
                SET_SHOW_CONFIRM_DIALOG(e, t) {
                    e.showConfirmDialog = t
                },
                SET_TEMP_QUESTION(e, t) {
                    e.tempQuestions = t
                },
                SET_QUESTION_MODAL(e, t) {
                    e.questionModal = t
                },
                SET_SETTINGS_MODAL(e, t) {
                    e.settingsModal = t
                },
                SET_ANSWER_UPLOADED(e, t) {
                    e.showAnswerUploaded = t
                },
                SET_ANSWER_NOT_UPLOADED(e, t) {
                    e.showAnswerNotUploaded = t
                },
                SET_ANSWER_UPLOADED_COMP(e, t) {
                    e.showAnswerUploadComp = t
                },
                SET_ANSWER_LIST(e, t) {
                    e.showAnswerList = t
                },
                SET_SHOW_UPLOADED_ANSWER(e, t) {
                    e.showUploadedAnswer = t
                },
                SET_CLOSED_MISSED_MOCK_TEST(e, t) {
                    e.closedMockTest = t
                },
                SET_SHOW_IMAGE_PREVIEW(e, t) {
                    e.showImagePreview = t
                },
                SET_SUBJECTIVE_EXAMS(e, t) {
                    e.subjectiveExams = t
                },
                SET_CURRENT_IMAGES(e, t) {
                    e.currentImages = t
                },
                SET_CURRENT_QUESTIONS(e, t) {
                    e.currentQuestions = t
                },
                SET_EXAM_TYPE(e, t) {
                    e.exam_type = t
                },
                SET_CURRENT_PAGE(e, t) {
                    e.currentPage = t
                },
                SET_TOTAL(e, t) {
                    e.total = t
                },
                SET_LOADING(e, t) {
                    e.loading = t
                }
            }
              , be = {
                namespaced: !0,
                state: we,
                actions: Ae,
                mutations: ye
            }
              , ke = {
                questionModal: !1,
                showSubmitKoreanInfo: !1,
                showSubmitInfo: !1,
                agree: !1,
                showKoreanConfirm: !1,
                resultPublishInfo: !1,
                audioTracking: [],
                tab: "whole"
            }
              , xe = {}
              , De = {
                SET_QUESTION_MODAL(e, t) {
                    e.questionModal = t
                },
                SET_KOREAN_MODAL(e, t) {
                    e.showSubmitKoreanInfo = t
                },
                SET_INFO_MODAL(e, t) {
                    e.showSubmitInfo = t
                },
                SET_EXAM_AGREE(e, t) {
                    e.agree = t
                },
                SET_SHOW_KOREAN_CONFIRM(e, t) {
                    e.showKoreanConfirm = t
                },
                SET_RESULT_PUBLISH_INFO(e, t) {
                    e.resultPublishInfo = t
                },
                SET_AUDIO_TRACKING(e, t) {
                    e.audioTracking = t
                },
                SET_TAB_DEFAULT_VALUE(e, t) {
                    e.tab = t
                }
            }
              , Re = {
                namespaced: !0,
                state: ke,
                actions: xe,
                mutations: De
            }
              , Oe = {
                allReferalContacts: [],
                allReferrals: [],
                totalReferrals: 0,
                totalReferralsPages: 0,
                referralsCurrentPage: 1,
                totalContacts: 0,
                totalContactsPages: 0,
                contactsCurrentPage: 1,
                offers: [],
                invitationLink: null,
                referredContacts: [],
                responseMessage: null
            }
              , Ne = {
                fetchInvitationLink({commit: e}, t) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("get-invitation-link").then((t => {
                            e(t.data)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchStudentContacts({commit: e}, t) {
                    return new Promise(( (t, o) => {
                        m.axiosInstance.get(`get-customer-contacts?page=${Oe.contactsCurrentPage}`).then((o => {
                            o = o.data;
                            e("SET_ALL_REFERRAL_CONTACTS", o.data),
                            e("SET_TOTAL_CONTACTS", o.total),
                            e("SET_CONTACTS_CURRENT_PAGE", o.current_page),
                            e("SET_CONTACTS_TOTAL_PAGE", o.last_page),
                            t(o.data)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchAllStudentReferrals({commit: e}, t) {
                    return new Promise(( (t, o) => {
                        m.axiosInstance.get(`get-my-referrals?page=${Oe.referralsCurrentPage}`).then((o => {
                            o = o.data;
                            e("SET_ALL_REFERRALS", o.data.data),
                            e("SET_TOTAL_REFERRALS", o.total),
                            e("SET_REFERRALS_CURRENT_PAGE", o.current_page),
                            e("SET_REFERRALS_TOTAL_PAGE", o.last_page),
                            t(o.data)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                sendReferralSMS({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/app/api/student/send-referral-sms", t).then((a => {
                            e("UPDATE_REFERRAL_STATUS", t),
                            o(a.data)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchOffers({commit: e}, t) {
                    return new Promise(( (t, o) => {
                        m.axiosInstance.post("refer-earn/get-campaign-packages").then((o => {
                            e("SET_OFFERS", o.data.data),
                            t(o.data)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchStats({commit: e}, t) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get("refer-earn/get-stats").then((t => {
                            e(t.data.data)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchReferralInvitationLink({commit: e}, t) {
                    return new Promise(( (t, o) => {
                        m.axiosInstance.post("refer-earn/get-invitation-link").then((o => {
                            t(o.data),
                            e("SET_INVITATION_LINK", o.data.data)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                inviteContact({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("refer-earn/contact", t).then((t => {
                            e(t.data)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchAllReferredContacts({commit: e}, t) {
                    return new Promise(( (t, o) => {
                        m.axiosInstance.get("refer-earn/get-all-referrals").then((o => {
                            e("SET_REFERRED_CONTACTS", o.data.data),
                            t(o.data.data)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                cancelReferral({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("refer-earn/cancel-referral", t).then((t => {
                            e(t.data)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , Le = {
                SET_ALL_REFERRALS(e, t) {
                    e.allReferrals = t
                },
                SET_TOTAL_REFERRALS(e, t) {
                    e.totalReferrals = t
                },
                SET_REFERRALS_CURRENT_PAGE(e, t) {
                    e.referralsCurrentPage = t
                },
                SET_REFERRALS_TOTAL_PAGE(e, t) {
                    e.totalReferralsPages = t
                },
                SET_ALL_REFERRAL_CONTACTS(e, t) {
                    e.allReferalContacts = t
                },
                SET_TOTAL_CONTACTS(e, t) {
                    e.totalContacts = t
                },
                SET_CONTACTS_CURRENT_PAGE(e, t) {
                    e.contactsCurrentPage = t
                },
                SET_CONTACTS_TOTAL_PAGE(e, t) {
                    e.totalContactsPages = t
                },
                UPDATE_REFERRAL_STATUS(e, t) {
                    e.allReferalContacts[t.index].status = t.status
                },
                SET_OFFERS(e, t) {
                    e.offers = t
                },
                SET_INVITATION_LINK(e, t) {
                    e.invitationLink = t
                },
                SET_REFERRED_CONTACTS(e, t) {
                    e.referredContacts = t
                },
                SET_RESPONSE_MESSAGE(e, t) {
                    e.responseMessage = t
                }
            }
              , Me = {
                namespaced: !0,
                state: Oe,
                actions: Ne,
                mutations: Le
            }
              , Ve = {
                conversation: [],
                activeConversation: [],
                messageList: [],
                currentConversation: {},
                unseenMessageCount: 0,
                slideItems: [],
                showSlider: !1,
                typing_info: {},
                is_typing: !1,
                message: []
            }
              , Ue = {
                createConversationByUserId({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/conversation/create-by-user-id", o).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                setSeenConversation({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/conversation/set-seen", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                createConversationByGuruId({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/conversation/create-by-guru-id", o).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchConversation({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("/conversation/get-all?page_limit=20", o).then((o => {
                            o = o.data.data;
                            e("SET_CONVERSATION", o.data),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                deleteConversation({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/conversation/delete", o).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                deleteMessage({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("/conversation/message/delete", o).then((a => {
                            a = a.data.data;
                            e("SET_MESSAGE_DELETE", {
                                data: a,
                                index: o.index
                            }),
                            t(a)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                saveClickEvent({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/conversation/message/save-click-event", o).then((t => {
                            t = t.data.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchConversationById({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("/conversation/detail/" + o.uuid).then((o => {
                            o = o.data.data;
                            o.data ? e("SET_CURRENT_CONVERSATION", o.data) : e("SET_CURRENT_CONVERSATION", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchMessages({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post(`/v2/conversation/get-all-messages?page=${o.current_page}&page_limit=${o.page_limit ?? 20}`, o).then((o => {
                            o = o.data.data;
                            e("SET_MESSAGE", o.data),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                sendMessage({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/v2/conversation/message", o, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        }).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                askQuestion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/conversation/ask-question", o).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                searchUser({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/conversation/get-mobile-user", o).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                getAttemptedQuestion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/conversation/get-attempted-question", o).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                setMessageItemStatus({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/conversation/set-message-item-status", o).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                getUnseenConversationCount({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.get("conversation/get-all-conversation-count", o).then((o => {
                            o = o.data.data;
                            e("SET_UNSEEN_MESSAGE_COUNT", o.count),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchReportUserSuggestion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/conversation/report-suggestions", o).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                reportUser({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("/conversation/report-user", o).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , qe = {
                SET_CONVERSATION(e, t) {
                    e.conversation = t,
                    console.log("The conversation from state is: ", e.conversation)
                },
                SET_UNSEEN_MESSAGE_COUNT(e, t) {
                    e.unseenMessageCount = t
                },
                SET_TYPING_INFO(e, t) {
                    e.typing_info = t
                },
                SET_IS_TYPING(e, t) {
                    e.is_typing = t
                },
                SET_MESSAGE_LIST(e, t) {
                    e.messageList = t
                },
                PUSH_CONVERSATION(e, t) {
                    var o = _.findIndex(e.conversation, {
                        uuid: t.uuid
                    });
                    if (console.log("new_conv", t),
                    o > -1) {
                        var a = e.conversation[o];
                        console.log("temp", a),
                        e.conversation.splice(o, 1),
                        e.currentConversation.uuid != t.uuid && "App\\Models\\Customer" != t.member_type && (a["unread"] = a.unread + 1),
                        a["last_message"] = t.last_message,
                        a["is_seen"] = t.is_seen,
                        a["member_type"] = t.member_type,
                        a["member_id"] = t.member_id,
                        e.conversation.unshift(a)
                    }
                },
                SET_SLIDE_ITEMS(e, t) {
                    e.slideItems = t
                },
                SHOW_SLIDER(e, t) {
                    e.showSlider = t
                },
                SET_MESSAGE_SENT_STATUS(e, t) {
                    var o = _.findIndex(e.messageList, {
                        id: t.id
                    });
                    console.log("index ", o),
                    o > -1 && (e.messageList[o].status = t.status)
                },
                SET_MESSAGE_SENT_CONTENT(e, t) {
                    var o = _.findIndex(e.messageList, {
                        id: t.id
                    });
                    console.log("index ", o),
                    o > -1 && (e.messageList[o].id = t.content.id,
                    console.log("message_id", t),
                    e.messageList[o].content = t.content.content,
                    e.messageList[o].pdf = t.content.pdf,
                    e.messageList[o].message = t.content.message)
                },
                SET_MESSAGE_DELETE(e, t) {
                    console.log("dlete-payload", t),
                    e.messageList[t.index] = t.data
                },
                SET_CONVERSATION_SEEN(e, t) {
                    e.currentConversation.is_seen = 1,
                    e.currentConversation.unread = 0
                },
                SET_CURRENT_CONVERSATION(e, t) {
                    e.currentConversation = t
                },
                SET_ACTIVE_CONVERSATION(e, t) {
                    var o = _.findIndex(e.activeConversation, (e => e.uuid == t.uuid));
                    -1 == o && e.activeConversation.push(t),
                    e.activeConversation.length > 3 && e.activeConversation.shift()
                },
                REMOVE_ACTIVE_CONVERSATION(e, t) {
                    var o = _.findIndex(e.activeConversation, (e => e.uuid == t.id));
                    o > -1 && e.activeConversation.splice(o, 1)
                },
                SET_MESSAGE(e, t) {
                    e.message = t
                }
            }
              , Ge = {
                unseenMessageCount: e => e.conversation ? _.filter(e.conversation, {
                    is_seen: !1
                }).length : 0
            }
              , Fe = {
                namespaced: !0,
                state: Ve,
                actions: Ue,
                mutations: qe,
                getters: Ge
            }
              , Be = {
                gurus: []
            }
              , He = {
                fetchGurusBySection({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("gurus-by-section", o).then((o => {
                            e("SET_GURUS", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , Qe = {
                SET_GURUS(e, t) {
                    e.gurus = t
                }
            }
              , We = {
                namespaced: !0,
                state: Be,
                actions: He,
                mutations: Qe
            }
              , $e = {
                styles: {
                    fontSize: 26
                },
                is_playing: !1,
                isFullScreen: !1,
                audio_player: null,
                showSidebar: !1,
                ebooks: [],
                chapters: [],
                detail: {},
                audioCurrentTime: 0,
                reading: {},
                pagination: {
                    page: 1,
                    rowsPerPage: 10
                }
            }
              , Ke = {
                fetchEbooks({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get("ebooks", t).then((t => {
                            t = t.data,
                            e("SET_EBOOKS", t.data),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchEbookChapters({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`ebooks/${t.id}/contents`, t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchEbookContentDetail({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get(`ebooks/${t.id}/contents/${t.cid}`, t).then((t => {
                            t = t.data.data,
                            e("SET_READING", t),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchEbookDetail({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`ebooks/${t.id}`, t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchEbookCategories({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("ebooks-categories", t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchRelatedEbook({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`ebooks/related/${t.id}`).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchEbookLayout({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`/layout/ebooks?rowsPerPage=${t.rowsPerPage}`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , je = {
                SET_PLAYER(e, t) {
                    e.audio_player = t
                },
                SET_IS_PLAYING(e, t) {
                    e.is_playing = t
                },
                SET_CHAPTERS(e, t) {
                    e.chapters = t
                },
                SET_EBOOKS(e, t) {
                    e.ebooks = t
                },
                SET_DETAIL(e, t) {
                    e.detail = t
                },
                SET_AUDIO_CURRENT_TIME(e, t) {
                    e.audioCurrentTime = t
                },
                SET_READING(e, t) {
                    e.reading = t
                },
                SET_PAGINATION(e, t) {
                    e.pagination = t
                },
                SET_SIDEBAR(e, t) {
                    e.showSidebar = t
                },
                SET_STYLES(e, t) {
                    e.styles = t
                },
                SET_FULLSCREEN(e, t) {
                    e.isFullScreen = t
                }
            }
              , Ye = {
                namespaced: !0,
                state: $e,
                actions: Ke,
                mutations: je
            };
            var Xe = o(54760)
              , ze = o.n(Xe)
              , Je = o(20989)
              , Ze = o(63345);
            const et = {
                ag_ecommerce: {
                    name: "Ag Ecommerce",
                    baseUrl: "https://api-ecom.ambition.guru/"
                }
            }
              , tt = e => {
                if (!et[e])
                    throw new Error(`Microservice ${e} does not exist`);
                return et[e]
            }
              , ot = G.A.getItem("access_token");
            let at = G.A.getItem("ag_device_fingerprint");
            if (at)
                at = G.A.getItem("ag_device_fingerprint");
            else {
                var nt = new Ze.ClientJS;
                G.A.set("ag_device_fingerprint", nt.getFingerprint()),
                at = G.A.getItem("ag_device_fingerprint")
            }
            const st = e => {
                const {baseUrl: t} = tt(e)
                  , o = f.A.create({
                    paramsSerializer: e => ze().stringify(e, {
                        arrayFormat: "repeat"
                    }),
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        Authorization: "Bearer " + ot,
                        fingerprint: at
                    },
                    baseURL: t + "api/web/ecom"
                });
                return o.interceptors.response.use((function(e) {
                    return e
                }
                ), (e => {
                    const t = (0,
                    i.Pj)();
                    return e.response && 404 === e.response.status ? Je.A.create({
                        message: "Resource not found",
                        timeout: 3e3,
                        color: "negative"
                    }) : e.response && 200 === e.response.status ? t?.commit("validationErrors/setErrors", null) : e.response && 422 === e.response.status ? t?.commit("validationErrors/setErrors", e.response.data.errors) : e.response && 555 === e.response.status ? Je.A.create({
                        message: e.response.data.message,
                        timeout: 3e3,
                        color: "negative"
                    }) : e.response && 401 === e.response.status ? ("Unauthenticated." === e.response.data.message && Je.A.create({
                        message: e.response.data.message,
                        timeout: 3e3,
                        color: "negative"
                    }),
                    G.A.remove("access_token"),
                    G.A.remove("refresh_token"),
                    G.A.remove("fingerprint"),
                    G.A.remove("course_selection_skipped"),
                    G.A.remove("ag_device_fingerprint"),
                    G.A.remove("ambition-guru-health-checkup-skipped"),
                    t?.commit("auth/setUsername", null),
                    window.location.href = "/login") : e.response && 400 === e.response.status ? Je.A.create({
                        message: e.response.data.message,
                        timeout: 3e3,
                        color: "negative"
                    }) : e.response && 429 === e.response.status ? e.response.data.message && t?.commit("validationErrors/setErrors", {
                        mobile: [e.response.data.message]
                    }) : e.response && 4001 === e.response.status ? Je.A.create({
                        message: e.response.data.message,
                        timeout: 3e3,
                        color: "negative"
                    }) : e.response && 500 === e.response.status || (e.response && e.response?.data?.data?.description && 403 === e.response.status ? Je.A.create({
                        message: e.response?.data?.data?.description,
                        timeout: 3e3,
                        color: "negative"
                    }) : (e.response && e.response?.data?.message && 403 === e.response.status || console.log(e),
                    Je.A.create({
                        message: e.response?.data?.message,
                        timeout: 3e3,
                        color: "negative"
                    }))),
                    Promise.reject(e)
                }
                )),
                o
            }
              , it = st("ag_ecommerce")
              , ct = {
                ebooks: [],
                detail: {},
                checkoutData: {},
                cartAddedData: {},
                variants: {},
                variantIds: [],
                payementSuccessful: !1,
                ebookContentList: [],
                ebookContent: {},
                showLocation: !1,
                audioCurrentTime: 0,
                is_playing: !1,
                audio_player: null,
                isFullScreen: !1,
                styles: {
                    fontSize: 26
                },
                isLoading: !1,
                address: []
            }
              , rt = {
                fetchEbooks({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        console.log(t, "payload"),
                        it.get(`products?filters={"category_id" : "${t.category_id}", "for" : "${t.for}",  "search" : "${t.search}", "variant_type":"${t.variant_type}"}&page=${t.pagination}&rowsPerPage=${t.rowsPerPage}`, t).then((a => {
                            a = a.data,
                            e("SET_EBOOKS", a.data),
                            console.log(t.category_id, "payload"),
                            o(a)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchEbookCategories({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        it.get("categories", t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchRelatedEbook({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        it.get(`products/${t.id}`).then((t => {
                            t = t.data,
                            e("SET_DETAIL", t.data),
                            e("SET_DETAIL_VARIANTS", t.data?.variants),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchEbookVariations({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        it.get(`products/${t.id}/variations`, t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                addtoCard({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        it.post("add-to-cart", t).then((t => {
                            t = t.data,
                            e("SET_ADD_TO_CART", t.data),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchCart({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        it.get("get-cart", t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                checkout({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        it.post("checkout", t).then((t => {
                            t = t.data,
                            e("SET_CHECKOUT_DATA", t.data),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                confirmPayWithWallet({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        it.post("payment/pay-with-wallet", t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchEbookContentList({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        console.log(t, "payloadd content list"),
                        it.get(`ebooks/content-list?product_variant_id=${t.product_variant_id}`, t).then((t => {
                            t = t.data,
                            e("SET_EBOOK_CONTENT_LIST", t.data),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchEbookContent({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        console.log(t, "payloadd content"),
                        ct.ebookContent = {},
                        it.get(`ebooks/get-mapped-chapter?content_id=${t.content_id}&product_variant_id=${t.product_variant_id}`, t).then((t => {
                            t = t.data,
                            e("SET_EBOOK_CONTENT", t.data),
                            console.log(t.data, "res.data"),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                updateDeliveryAddress({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        ct.ebookContent = {},
                        it.post("update-delivery-address", t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                SaveDeliveryAddress({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        ct.ebookContent = {},
                        it.post("save-address", t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                getAddress({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        it.get("get-address", t).then((t => {
                            t = t.data,
                            e("SET_ADDRESS", t.data),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchCountries({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        it.get("/geo/countries", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchCountriesAdministrative({commit: e}, t) {
                    return console.log(t, "payload"),
                    new Promise(( (e, o) => {
                        it.get(`/geo/administrative-areas/${t}`).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchEbookLayout({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        it.get("/get-layout", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                getOrderHistory({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        it.get(`/get-orders?page=${t.pagination}`, t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                submitRating({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        it.post(`/products/${t.reviewable_id}/add-rating`, t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                getRatingList({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        it.get(`/products/${t.reviewable_id}/ratings`, t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchEbooksSuggested({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        console.log(t, "payload"),
                        it.get(`products?filters={"for" : "${t.for}",  "related_to_product_id" : "${t.related_to_product_id}"}&page=${t.pagination}&limit=20`, t).then((a => {
                            a = a.data,
                            e("SET_EBOOKS", a.data),
                            console.log(t.category_id, "payload"),
                            o(a)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                deleteBook({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        console.log(t, "payload"),
                        it.post("remove-cart-items", t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , mt = {
                SET_EBOOKS(e, t) {
                    e.ebooks = t
                },
                SET_DETAIL(e, t) {
                    e.detail = t
                },
                SET_ADD_TO_CART(e, t) {
                    e.cartAddedData = t
                },
                SET_CHECKOUT_DATA(e, t) {
                    e.checkoutData = t
                },
                SET_DETAIL_VARIANTS(e, t) {
                    e.variants = t
                },
                SET_VARIANTS_IDS(e, t) {
                    e.variantIds = t
                },
                SET_PAYMENT_SUCCESSFUL(e, t) {
                    e.payementSuccessful = t
                },
                SET_EBOOK_CONTENT_LIST(e, t) {
                    e.ebookContentList = t
                },
                SET_EBOOK_CONTENT(e, t) {
                    e.ebookContent = t
                },
                SET_SHOW_LOCATION(e, t) {
                    e.showLocation = t
                },
                SET_AUDIO_CURRENT_TIME(e, t) {
                    e.audioCurrentTime = t
                },
                SET_IS_PLAYING(e, t) {
                    e.is_playing = t
                },
                SET_PLAYER(e, t) {
                    e.audio_player = t
                },
                SET_FULLSCREEN(e, t) {
                    e.isFullScreen = t
                },
                SET_STYLES(e, t) {
                    e.styles = t
                },
                SET_LOADING(e, t) {
                    e.isLoading = t
                },
                SET_ADDRESS(e, t) {
                    e.address = t
                }
            }
              , ut = {
                namespaced: !0,
                state: ct,
                actions: rt,
                mutations: mt
            };
            function dt() {
                return {
                    errors: null
                }
            }
            function lt(e) {
                return e.errors
            }
            const pt = (e, t) => {
                e.errors = t
            }
            ;
            var ht = o(4331);
            const gt = {
                namespaced: !0,
                state: dt,
                getters: a,
                mutations: n,
                actions: ht
            };
            var _t = o(23453);
            const Et = {
                loading: !0,
                message: "",
                show: !1
            }
              , St = {
                fetchPageSpecificMessages({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        e("SET_LOADING", !0),
                        m.axiosInstance.post("/page-wise-message", {
                            page_key: t.page_key
                        }).then((t => {
                            t = t.data.data,
                            e("SET_MESSAGES", t),
                            G.A.has("dismiss_message_" + t.page_key) || e("SET_SHOW", !0),
                            o(t)
                        }
                        )).catch((t => {
                            e("SET_LOADING", !1),
                            console.log(t)
                        }
                        ))
                    }
                    ))
                },
                fetchPageSpecificCustomMessages({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        e("SET_LOADING", !0),
                        m.axiosInstance.post("/page-wise-message", {
                            page_key: t.page_key
                        }).then((e => {
                            e = e.data.data,
                            o(e)
                        }
                        )).catch((t => {
                            e("SET_LOADING", !1),
                            console.log(t)
                        }
                        ))
                    }
                    ))
                }
            }
              , vt = {
                SET_LOADING(e, t) {
                    e.loading = t
                },
                SET_MESSAGES(e, t) {
                    e.message = t,
                    e.loading = !1
                },
                SET_SHOW(e, t) {
                    e.show = t
                }
            }
              , Ct = {
                namespaced: !0,
                state: Et,
                actions: St,
                mutations: vt
            }
              , Tt = {
                meeting: [],
                comments: [],
                meetingLiveNow: !1,
                videos: [],
                details: [],
                guruVideo: [],
                user_specific_reviews: null,
                reviews: [],
                ratingForm: [{
                    rating: 0,
                    message: ""
                }],
                zoomMeetingLink: {},
                classJoinCount: 0
            }
              , It = {
                fetchMeeting({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_MEETING", []),
                        m.axiosInstance.post("meeting/get", o).then((o => {
                            let a = o.data.data.data;
                            e("SET_MEETING", a),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchOngoingMeeting({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_MEETING", []),
                        m.axiosInstance.post("meeting/get-ongoing", o).then((e => {
                            e.data.data;
                            t(e)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                checkHasLiveClass({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_MEETING", []),
                        m.axiosInstance.post("meeting/has-live", o).then((o => {
                            let a = o.data.data.status;
                            e("SET_MEETING_LIVE_NOW", a),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                registerMeeting({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("meeting/store-registrant", o).then((o => {
                            o = o.data.data,
                            e("ZOOM_MEETING_LINK", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e),
                            console.log("rejected")
                        }
                        ))
                    }
                    ))
                },
                saveComment({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("meeting/save-comment", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                registerMeetingTrack({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("meeting/store-tracks", o).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchAccessToken({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get("meeting/" + o.meeting_id + "/fetch-access-token").then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e),
                            console.log("rejected")
                        }
                        ))
                    }
                    ))
                },
                getQuestionDetail({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get("meeting/get-question-detail/" + o.question_id).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                getQuestionResult({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("meeting/get-question-result", o).then((t => {
                            console.log("jistid question result fetch", t),
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                submitSessionRequest({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("meeting/session-request/save", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                attemptMeetingQuestion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("meeting/attempt-question", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                },
                fetchLiveRecordedVideos({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("meeting/live-recorded", o).then((o => {
                            e("SET_LIVE_VIDEOS", o.data.data.data),
                            t(o.data.data)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchLiveClassDetails({commit: e, state: t}, o) {
                    if (o.meetingId)
                        return new Promise(( (t, a) => {
                            m.axiosInstance.post(`meeting/detail/${o.meetingId}`, o).then((o => {
                                o = o.data.data,
                                e("SET_LIVE_CLASS_DETAIL", o.data),
                                t(o)
                            }
                            )).catch((e => {
                                a(e)
                            }
                            ))
                        }
                        ))
                },
                fetchContentRating({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("meeting/review/fetch", t).then((t => {
                            t = t.data.data,
                            e("SET_USER_SPECIFIC_REVIEWS", t),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                fetchVideoByGuru({commit: e, state: t}, o) {
                    if (o.guru_id)
                        return new Promise(( (t, a) => {
                            m.axiosInstance.get("get-videos-by-guru/" + o?.guru_id).then((o => {
                                o = o.data.data,
                                e("SET_GURU_VIDEO", o.data),
                                t(o)
                            }
                            )).catch((e => {
                                a(e)
                            }
                            ))
                        }
                        ))
                },
                fetchRating({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.post("meeting/review/fetch", o).then((o => {
                            o = o.data.data,
                            e("SET_USER_SPECIFIC_REVIEWS", o),
                            t(o)
                        }
                        ))
                    }
                    ))
                },
                submitRating({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("meeting/review/store", o).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchReviews({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("meeting/review/all", t).then((t => {
                            t = t.data.data,
                            e("SET_CONTENT_REVIEWS", t),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                cancelMeeting({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("meeting/cancelled-meeting", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                searchMeeting({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`meeting/get-search?page=${t.current_page}`, t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                }
            }
              , ft = {
                SET_MEETING(e, t) {
                    e.meeting = t
                },
                SET_COMMENTS(e, t) {
                    e.comments = t
                },
                SET_MEETING_LIVE_NOW(e, t) {
                    e.meetingLiveNow = t
                },
                SET_LIVE_VIDEOS(e, t) {
                    e.videos = t
                },
                SET_LIVE_CLASS_DETAIL(e, t) {
                    e.details = t
                },
                SET_GURU_VIDEO(e, t) {
                    e.guruVideo = t
                },
                SET_USER_SPECIFIC_REVIEWS(e, t) {
                    e.user_specific_reviews = t
                },
                SET_REVIEWS(e, t) {
                    e.reviews = t
                },
                SET_RATING_FORM(e, t) {
                    e.ratingForm = t
                },
                ZOOM_MEETING_LINK(e, t) {
                    e.zoomMeetingLink = t
                },
                CLASS_JOIN_COUNT(e, t) {
                    e.classJoinCount = t
                }
            }
              , Pt = {
                namespaced: !0,
                state: Tt,
                actions: It,
                mutations: ft
            }
              , wt = {
                loading: !0,
                status: !1,
                formFieldsData: null,
                formFields: null,
                mockTest: null,
                surveyDialogStatus: !1,
                surveyFormDialog: !1
            }
              , At = {
                checkSurvey({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        e("SET_LOADING", !0),
                        m.axiosInstance.post("/survey/check", t).then((t => {
                            t = t.data.data,
                            console.log(t),
                            e("SET_STATUS", t.status),
                            o(t)
                        }
                        )).catch((t => {
                            e("SET_LOADING", !1),
                            console.log(t)
                        }
                        ))
                    }
                    ))
                },
                fetchSurveyDetails({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        e("SET_LOADING", !0),
                        m.axiosInstance.post("/survey/get-detail", {
                            key: t
                        }).then((t => {
                            t = t.data.data,
                            console.log(t),
                            e("SET_FORM_FIELDS_DATA", t),
                            o(t)
                        }
                        )).catch((t => {
                            e("SET_LOADING", !1),
                            console.log(t)
                        }
                        ))
                    }
                    ))
                },
                submitSurvey({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        e("SET_LOADING", !0),
                        m.axiosInstance.post("/survey/submit", t).then((e => {
                            e = e.data.data,
                            console.log(e),
                            o(e)
                        }
                        )).catch((t => {
                            e("SET_LOADING", !1),
                            console.log(t)
                        }
                        ))
                    }
                    ))
                }
            }
              , yt = {
                SET_LOADING(e, t) {
                    e.loading = t
                },
                SET_STATUS(e, t) {
                    e.status = t
                },
                SET_SURVEY(e, t) {
                    e.survey = t
                },
                SET_FORM_FIELDS_DATA(e, t) {
                    if (e.formFieldsData = t,
                    e.formFieldsData && e.formFieldsData.fields.length) {
                        let o = [];
                        t.fields.forEach((t => {
                            "checkbox" === t.field_type ? o.push({
                                field_type: t.field_type,
                                label: t.label,
                                placeholder: t.placeholder,
                                is_required: t.is_required,
                                options: JSON.parse(t.options),
                                value: []
                            }) : o.push({
                                field_type: t.field_type,
                                label: t.label,
                                placeholder: t.placeholder,
                                is_required: t.is_required,
                                options: JSON.parse(t.options),
                                value: null
                            }),
                            e.formFields = o
                        }
                        ))
                    } else
                        e.status = !1
                },
                SET_SURVEY_DIALOG_STATUS(e, t) {
                    e.surveyDialogStatus = t
                },
                SET_SURVEY_FORM_DIALOG(e, t) {
                    e.surveyFormDialog = t
                }
            }
              , bt = {
                namespaced: !0,
                state: wt,
                actions: At,
                mutations: yt
            }
              , kt = {
                loading: !0,
                courseCategories: [],
                courseCategoryWithPackages: null
            }
              , xt = {
                fetchCourseCategories({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_LOADING", !0),
                        m.axiosInstance.get("course-category", o).then((o => {
                            e("SET_COURSE_CATEGORIES", o.data.data),
                            e("SET_LOADING", !1),
                            t(o)
                        }
                        )).catch((t => {
                            e("SET_LOADING", !1),
                            console.error(t)
                        }
                        ))
                    }
                    ))
                },
                fetchCoursePackages({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_LOADING", !0),
                        m.axiosInstance.get(`course-category/packages/${o.slug}`).then((o => {
                            e("SET_COURSE_CATEGORY_WITH_PACKAGES", o.data.data),
                            e("SET_LOADING", !1),
                            t(o)
                        }
                        )).catch((t => {
                            e("SET_LOADING", !1),
                            console.error(t)
                        }
                        ))
                    }
                    ))
                },
                fetchCoursePackageWithType({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_LOADING", !0),
                        m.axiosInstance.get(`course-category/packages/${o.slug}?type=${o.type}`).then((o => {
                            e("SET_COURSE_CATEGORY_WITH_PACKAGES", o.data.data),
                            e("SET_LOADING", !1),
                            t(o)
                        }
                        )).catch((t => {
                            e("SET_LOADING", !1),
                            console.error(t)
                        }
                        ))
                    }
                    ))
                },
                fetchCourseDynamicLayout({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        e("SET_LOADING", !0),
                        m.axiosInstance.get(`/packages?is_featured=${o.is_featured}?rowsPerPage=${o.rowsPerPage}`).then((e => {
                            t(e)
                        }
                        )).catch((t => {
                            e("SET_LOADING", !1),
                            console.error(t)
                        }
                        ))
                    }
                    ))
                }
            }
              , Dt = {
                SET_LOADING(e, t) {
                    e.loading = t
                },
                SET_COURSE_CATEGORIES(e, t) {
                    e.courseCategories = t
                },
                SET_COURSE_CATEGORY_WITH_PACKAGES(e, t) {
                    e.courseCategoryWithPackages = t
                }
            }
              , Rt = {}
              , Ot = {
                namespaced: !0,
                state: kt,
                actions: xt,
                mutations: Dt,
                getters: Rt
            }
              , Nt = {
                path: "transaction",
                transactions: [],
                totalTransactions: 0,
                totalPages: 0,
                currentPage: 1
            }
              , Lt = {
                fetchTransactions({commit: e}, t) {
                    return new Promise(( (t, o) => {
                        m.axiosInstance.post(`${Nt.path}/get-all?page=${Nt.currentPage}`).then((o => {
                            o = o.data;
                            e("SET_ALL_TRANSACTION", o.data.data),
                            e("SET_TOTAL_TRANSACTION", o.total),
                            e("SET_TRANSACTION_CURRENT_PAGE", o.current_page),
                            e("SET_TRANSACTION_TOTAL_PAGE", o.last_page),
                            t(o.data)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , Mt = {
                SET_ALL_TRANSACTION(e, t) {
                    e.transactions = t
                },
                SET_TOTAL_TRANSACTION(e, t) {
                    e.totalTransactions = t
                },
                SET_TRANSACTION_CURRENT_PAGE(e, t) {
                    e.currentPage = t
                },
                SET_TRANSACTION_TOTAL_PAGE(e, t) {
                    e.totalPages = t
                }
            }
              , Vt = {
                namespaced: !0,
                state: Nt,
                actions: Lt,
                mutations: Mt
            }
              , Ut = {
                path: "account",
                showWithdraw: !1,
                discountMode: !1
            }
              , qt = {
                withdrawAmount({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`${Ut.path}/withdraw`, t).then((t => {
                            t = t.data;
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchWithdrawOptions({commit: e}, t) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get(`${Ut.path}/withdraw-options`).then((t => {
                            t = t.data;
                            e(t.data)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , Gt = {
                SHOW_WITHDRAW(e, t) {
                    e.showWithdraw = t
                },
                SHOW_DISCOUNT_MODE(e, t) {
                    e.discountMode = t
                }
            }
              , Ft = {
                namespaced: !0,
                state: Ut,
                actions: qt,
                mutations: Gt
            }
              , Bt = {
                path: "rooms",
                local_user: {},
                socket: null,
                activity_socket: null,
                user_socket: null,
                remotes: [],
                peerConnections: {},
                localStream: null,
                speakers: [],
                microphones: [],
                preview_data: {},
                draw_preview: null,
                players: null
            }
              , Ht = {
                createRoom({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`${Bt.path}/create`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                getAllRooms({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`${Bt.path}/get-all`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                sendConnectionInfo({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`${Bt.path}/send-connection-info`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                getRoomDetail({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`${Bt.path}/detail/${t.id}`).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e),
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                registerParticipant({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`${Bt.path}/register`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                blockParticipant({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`${Bt.path}/block`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                sendActivity({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`${Bt.path}/create-activity`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                resendActivity({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`${Bt.path}/recreate-activity`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                updateActivityStatus({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`${Bt.path}/update-activity-status/${t.room_id}`).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                getActivity({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`${Bt.path}/get-activity`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                endCall({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`${Bt.path}/end-call`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                attemptRoomQuestion({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.post("rooms/question/attempt", o).then((t => {
                            e(t)
                        }
                        )).catch((e => {
                            t(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , Qt = {
                SET_SOCKET(e, t) {
                    e.socket = t
                },
                SET_ACTIVITY_SOCKET(e, t) {
                    e.activity_socket = t
                },
                SET_REMOTES(e, t) {
                    e.remotes = t
                },
                SET_SPEAKERS(e, t) {
                    e.speakers = t
                },
                SET_MICROPHONES(e, t) {
                    e.microphones = t
                },
                SET_LOCAL_USER(e, t) {
                    e.local_user = t
                },
                SET_PREVIEW_DATA(e, t) {
                    e.preview_data = t
                },
                SET_LOCAL_STREAM(e, t) {
                    e.localStream = t
                },
                SET_PEER_CONNECTIONS(e, t) {
                    e.peerConnections = t
                },
                SET_DRAW_PREVIEW(e, t) {
                    e.draw_preview = t
                },
                SET_PLAYER(e, t) {
                    e.players = t
                }
            }
              , Wt = {
                namespaced: !0,
                state: Bt,
                actions: Ht,
                mutations: Qt
            }
              , $t = {
                color: "#000000",
                thickness: 2,
                canvas: null,
                context: null,
                lastX: null,
                lastY: null
            }
              , Kt = {}
              , jt = {
                SET_COLOR(e, t) {
                    e.color = t
                },
                SET_THICKNESS(e, t) {
                    e.thickness = t
                },
                SET_CANVAS(e, t) {
                    e.canvas = t
                },
                SET_CONTEXT(e, t) {
                    e.context = t
                },
                SET_LASTX(e, t) {
                    e.lastX = t
                },
                SET_LASTY(e, t) {
                    e.lastY = t
                }
            }
              , Yt = {
                namespaced: !0,
                state: $t,
                actions: Kt,
                mutations: jt
            }
              , Xt = {
                path: "transaction",
                transactions: [],
                totalTransactions: 0,
                totalPages: 0,
                currentPage: 1
            }
              , zt = {
                fetchTransactions({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`${Xt.path}/get-all?page=${t.current_page}`).then((t => {
                            t = t.data;
                            e(t.data)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , Jt = {
                SET_ALL_TRANSACTION(e, t) {
                    e.transactions = t
                },
                SET_TOTAL_TRANSACTION(e, t) {
                    e.totalTransactions = t
                },
                SET_TRANSACTION_CURRENT_PAGE(e, t) {
                    e.currentPage = t
                },
                SET_TRANSACTION_TOTAL_PAGE(e, t) {
                    e.totalPages = t
                }
            }
              , Zt = {
                namespaced: !0,
                state: Xt,
                actions: zt,
                mutations: Jt
            }
              , eo = {
                audio: [],
                pagination: {
                    page: 1,
                    last_page: 1
                },
                showGlobalAudio: !0,
                globalAudioDetail: {}
            }
              , to = {
                fetchAudio({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("audio/list", t).then((t => {
                            t = t.data.data,
                            e("SET_AUDIOS", t),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                fetchAudioLayout({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`layout/audios?rowsPerPage=${t.rowsPerPage}`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            o(e)
                        }
                        ))
                    }
                    ))
                },
                fetchPlaylistCategories({commit: e, state: t}, o) {
                    return new Promise(( (e, t) => {
                        m.axiosInstance.get(`/playlists?type=${o.type}`).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                }
            }
              , oo = {
                SET_AUDIOS(e, t) {
                    e.audio = t
                },
                SET_PAGINATION(e, t) {
                    e.pagination = t
                },
                SHOW_GLOBAL_AUDIO(e, t) {
                    e.showGlobalAudio = t
                }
            }
              , ao = {
                namespaced: !0,
                state: eo,
                actions: to,
                mutations: oo
            }
              , no = {
                path: "classroom",
                participants: [],
                socket: null,
                room_activity_socket: null,
                room: {},
                activity: {},
                activityType: null,
                settings: {
                    is_muted: !0,
                    can_speak: !1
                },
                audioParams: {},
                remoteConnection: {}
            }
              , so = {
                getRoomDetail({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`${no.path}/${t.room_id}`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                registerParticipant({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`${no.path}/register-participant`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , io = {
                SET_PARTICIPANTS(e, t) {
                    e.participants = t
                },
                SET_ROOM_SOCKET(e, t) {
                    e.socket = t
                },
                SET_ROOM_ACTIVITY_SOCKET(e, t) {
                    e.room_activity_socket = t
                },
                SET_ROOM(e, t) {
                    e.room = t
                },
                SET_ACTIVITY(e, t) {
                    e.activity = t
                },
                SET_ACTIVITY_TYPE(e, t) {
                    e.activityType = t
                },
                SET_SETTINGS(e, t) {
                    e.settings = t
                },
                SET_AUDIO_PARAMS(e, t) {
                    e.audioParams = t
                },
                SET_REMOTE_CONNECTION(e, t) {
                    e.remoteConnection = t
                }
            }
              , co = {
                namespaced: !0,
                state: no,
                actions: so,
                mutations: io
            }
              , ro = {
                ctime: 0,
                player: {},
                videoPlayerRef: null
            }
              , mo = {}
              , uo = {
                SET_CTIME(e, t) {
                    e.ctime = t
                },
                SET_PLAYER(e, t) {
                    e.player = t
                },
                SET_VIDEO_PLAYER_REF(e, t) {
                    e.videoPlayerRef = t
                }
            }
              , lo = {
                namespaced: !0,
                state: ro,
                actions: mo,
                mutations: uo
            }
              , po = {
                syllabus: [],
                package_id: null
            }
              , ho = {
                async fetchSectionWiseProgress({commit: e}, t) {
                    const {data: o} = await m.axiosInstance.post("/subject-wise-progress-v2", t);
                    return o.data
                },
                async fetchContent({commit: e}, t) {
                    const {data: o} = await m.axiosInstance.post(`/get-contents-by-custom-syllabus/${t.syllabus_id}`, t);
                    return o.data
                }
            }
              , go = {
                SET_SYLLABUS(e, t) {
                    e.syllabus = t
                },
                SET_PACKAGE_ID(e, t) {
                    e.package_id = t
                }
            }
              , _o = {
                namespaced: !0,
                state: po,
                actions: ho,
                mutations: go
            }
              , Eo = {
                contentDetail: {},
                showGlobalContent: !1,
                isGlobalContentLoading: !1,
                detailContentView: !1,
                hoverVisible: !1,
                videoPlayer: {},
                showGlobalAudio: !1,
                tempaudio: []
            }
              , So = {
                fetchContentDetail({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get(`/get-content-detail/${t.id}?suggested=${t.suggested}`).then((t => {
                            t = t.data.data,
                            e("SET_CONTENT_DETAIL", t),
                            o(t)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                likeContent({commit: e}, t) {
                    return e("UPDATE_LIKE_COUNT"),
                    new Promise(( (e, o) => {
                        m.axiosInstance.post("/report/like", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                bookmarkContent({commit: e}, t) {
                    return e("UPDATE_BOOKMARK"),
                    new Promise(( (e, o) => {
                        m.axiosInstance.post("/content/save", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchContentReviews({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/report/content-rating/fetch", t).then((t => {
                            e(t.data.data)
                        }
                        ))
                    }
                    ))
                },
                fetchContentRating({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/report/rating/fetch", t).then((t => {
                            e(t.data)
                        }
                        ))
                    }
                    ))
                },
                submitRating({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/report/rating/store", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                }
            }
              , vo = {
                SET_CONTENT_DETAIL(e, t) {
                    e.contentDetail = t
                },
                SHOW_GLOBAL_CONTENT(e, t) {
                    e.showGlobalContent = t
                },
                SHOW_GLOBAL_AUDIO(e, t) {
                    e.showGlobalAudio = t
                },
                SET_IS_GLOBAL_CONTENT_LOADING(e, t) {
                    e.isGlobalContentLoading = t
                },
                SET_VIDEO_PLAYER(e, t) {
                    e.videoPlayer = t
                },
                SET_DETAIL_CONTENT_VIEW(e, t) {
                    e.detailContentView = t
                },
                SET_HOVER_VISIBLE(e, t) {
                    e.hoverVisible = t
                },
                UPDATE_LIKE_COUNT(e, t) {
                    e.contentDetail.is_liked ? e.contentDetail.likes_count-- : e.contentDetail.likes_count++,
                    e.contentDetail.is_liked = !e.contentDetail.is_liked
                },
                UPDATE_BOOKMARK(e, t) {
                    e.contentDetail.is_saved = !e.contentDetail.is_saved
                },
                SET_TEMP_AUDIO(e, t) {
                    e.tempaudio = t
                }
            }
              , Co = {}
              , To = {
                namespaced: !0,
                state: Eo,
                actions: So,
                mutations: vo,
                getters: Co
            }
              , Io = {
                channel: [],
                showChannelFollowInfo: !1,
                showChannelSubscriptionPlan: !1,
                channelList: [],
                discussion: [],
                showSubItemsSubscription: !1,
                reportLabels: [],
                channelRecommendation: [],
                playlist: [],
                premiumMessage: {}
            }
              , fo = {
                getChannelList({commit: e}, t) {
                    return new Promise(( (t, o) => {
                        m.axiosInstance.get("channels/profiles").then((o => {
                            o = o.data.data,
                            e("SET_CHANNEL", o),
                            t(o)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                getChanneDetail({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`channels/${t.slug}`).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                getChanneContent({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`channels/${t.slug}${t.content_slug}`).then((t => {
                            t = t.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                getChannelIndividualContent({commit: e}, t) {
                    return console.log(t, "payload"),
                    new Promise(( (o, a) => {
                        m.axiosInstance.get(`channels/${t.slug}/contents?type=${t.content_type}&content_visibility=${t.content_visibility}&page=${t.page}&is_featured=${t.is_featured}`).then((t => {
                            t = t.data.data,
                            e("SET_CHANNEL_LIST", t),
                            o(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                getChannelSearchContent({commit: e}, t) {
                    return console.log(t, "payload"),
                    new Promise(( (e, o) => {
                        m.axiosInstance.get(`channels/${t.slug}/contents/search?q=${t.query}&type=${t.content_type}&content_visibility=${t.content_visibility}&page=${t.current_page}`).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                getChannelIndividualContentDetail({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get(`channels/content-by-slug/${t.content_slug}`).then((t => {
                            t = t.data.data,
                            e("SET_CHANNEL", t),
                            o(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                getChannelRecommendation({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.get(`channels/${t.slug}/contents/recommendations?now_playing=${t.now_playing}&page=${t.pagination}`).then((t => {
                            t = t.data.data,
                            e("SET_CHANNEL_RECOMMENDATION", t),
                            o(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                channelFollow({commit: e}, t) {
                    return e("UPDATE_CHANNEL_FOLLOW"),
                    new Promise(( (e, o) => {
                        m.axiosInstance.post(`channels/${t.slug}/follow`).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                channelUnfollow({commit: e}, t) {
                    return e("UPDATE_CHANNEL_FOLLOW"),
                    new Promise(( (e, o) => {
                        m.axiosInstance.post(`channels/${t.slug}/unfollow`).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                notificationToggle({commit: e}, t) {
                    return e("UPDATE_NOTIFICATION"),
                    new Promise(( (e, o) => {
                        m.axiosInstance.post(`channels/${t.slug}/notifications`).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        )).catch((e => {
                            console.log(e)
                        }
                        ))
                    }
                    ))
                },
                likeContent({commit: e}, t) {
                    return "content" == t.type && e("UPDATE_LIKE_COUNT"),
                    new Promise(( (e, o) => {
                        m.axiosInstance.post("channels/interactions/like-or-unlike", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                bookmarkContent({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/content/save", t).then((t => {
                            t = t.data.data,
                            e("UPDATE_BOOKMARK"),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                channelSubscriptionItems({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`/channels/${t.slug}/subscription-items`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                channelAddToCart({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("channels/carts/add", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                channelCheckout({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("channels/carts/checkout", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                channelPayWithWallet({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("channels/carts/pay-using-wallet", t).then((t => {
                            t = t.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                channelReportContent({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`channels/${t.slug}/contents/${t.content_slug}/report`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchReportSuggestion({commit: e, state: t}, o) {
                    return new Promise(( (t, a) => {
                        m.axiosInstance.get("content-report/suggestions?for=channel", o).then((o => {
                            o = o.data.data,
                            e("REPORT_LABELS", o),
                            t(o)
                        }
                        )).catch((e => {
                            a(e)
                        }
                        ))
                    }
                    ))
                },
                getChannelDiscussion({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post("/discussion/content/store-reply", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                fetchChannelDiscussion({commit: e}, t) {
                    return new Promise(( (o, a) => {
                        m.axiosInstance.post("/discussion/content/get", t).then((t => {
                            t = t.data.data,
                            e("SET_DISCUSSION", t),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                editChannelDiscussion({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get("/discussion/update", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                deleteChannelDiscussion({commit: e}, t) {
                    return console.log(t, "payloadd----"),
                    new Promise(( (e, o) => {
                        m.axiosInstance.post("/discussion/delete", t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                getReplyChannelDiscussion({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.post(`channels/${t.slug}/contents/${t.content_slug}/discussions/${t.content_id}/reply`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                getChannelPlaylist({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`channels/${t.slug}${t.content_slug}`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                getIndividualPlaylist({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`channels/${t.slug}/playlists/${t.content_type}`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                getMessagePremium({commit: e}, t) {
                    return new Promise(( (e, o) => {
                        m.axiosInstance.get(`channels/${t.slug}/messages?key=${t.key}`, t).then((t => {
                            t = t.data.data,
                            e(t)
                        }
                        ))
                    }
                    ))
                }
            }
              , Po = {
                SET_CHANNEL(e, t) {
                    e.channel = t
                },
                UPDATE_CHANNEL_FOLLOW(e, t) {
                    e.channel.has_followed ? (e.channel.has_followed = !1,
                    console.log(e.channel.has_followed, "if")) : (e.channel.has_followed = !0,
                    console.log(e.channel.has_followed, "else"))
                },
                UPDATE_LIKE_COUNT(e, t) {
                    e.channel && (e.channel.is_liked ? e.channel.likes_count-- : e.channel.likes_count++,
                    e.channel.is_liked = !e.channel.is_liked)
                },
                UPDATE_BOOKMARK(e, t) {
                    e.channel.is_saved = !e.channel.is_saved
                },
                FOLLOW_CHANNEL_CARD(e, t) {
                    e.showChannelFollowInfo = t
                },
                UPDATE_NOTIFICATION(e, t) {
                    e.channel.has_enabled_notification = !e.channel.has_enabled_notification
                },
                SHOW_CHANNEL_SUBSCRIPTION_PLAN(e, t) {
                    e.showChannelSubscriptionPlan = t
                },
                SHOW_SUB_ITEM_SUBSCRIPTION_PLAN(e, t) {
                    e.showSubItemsSubscription = t
                },
                SET_CHANNEL_LIST(e, t) {
                    e.channelList = t
                },
                SET_DISCUSSION(e, t) {
                    e.discussion = t
                },
                REPORT_LABELS(e, t) {
                    e.reportLabels = t,
                    e.reportLabels.push({
                        title: "other"
                    })
                },
                SET_CHANNEL_RECOMMENDATION(e, t) {
                    e.channelRecommendation = t
                },
                SET_CHANNEL_PLAYLIST(e, t) {
                    e.playlist = t
                },
                SET_PREMIUM_MESSAGE(e, t) {
                    e.premiumMessage = t
                }
            }
              , wo = {
                namespaced: !0,
                state: Io,
                actions: fo,
                mutations: Po
            }
              , Ao = {
                isCalling: !1,
                callingUser: null,
                ringtoneAudio: null
            }
              , yo = {
                isCalling: e => e.isCalling,
                callingUser: e => e.callingUser,
                ringtoneAudio: e => e.ringtoneAudio
            }
              , bo = {
                SET_IS_CALLING(e, t) {
                    e.isCalling = t
                },
                SET_CALLING_USER(e, t) {
                    e.callingUser = t
                },
                SET_RINGTONE_AUDIO(e, t) {
                    e.ringtoneAudio = t
                }
            }
              , ko = {}
              , xo = {
                namespaced: !0,
                state: Ao,
                getters: yo,
                mutations: bo,
                actions: ko
            }
              , Do = (0,
            s.M_)((function() {
                const e = (0,
                i.y$)({
                    modules: {
                        globalContent: To,
                        ielts_test: ve,
                        auth: c.A,
                        refer: Me,
                        ebook: Ye,
                        ebook_microservice: ut,
                        default_data: r.A,
                        product: p,
                        cart: y,
                        validationErrors: gt,
                        checkout: M,
                        packages: $,
                        content: J,
                        discussion: ae.A,
                        classroom: co,
                        practice: ge,
                        practice_new: Pe,
                        mock_exam: be,
                        korean_test: Re,
                        chat: Fe,
                        guru: We,
                        resource: _t.A,
                        meeting: Pt,
                        message: Ct,
                        survey: bt,
                        courseCategory: Ot,
                        transaction: Vt,
                        payment: Ft,
                        rooms: Wt,
                        draw: Yt,
                        content_playlist: oe,
                        agent: I,
                        transaction_new: Zt,
                        playlist: S,
                        audio: ao,
                        video_player: lo,
                        customSyllabus: _o,
                        course: R,
                        discussionV1: ce,
                        channel: wo,
                        discussionNew: de,
                        askCall: xo
                    },
                    strict: !1
                });
                return e
            }
            ))
        }
        ,
        90155: (e, t, o) => {
            "use strict";
            o.d(t, {
                A: () => a
            });
            const a = {
                modelData: {
                    username: "",
                    password: "",
                    token: "",
                    message: ""
                },
                otpPage: !1,
                isDownloadPluginDetected: !1,
                currentUser: null,
                deviceRequestedStatus: !1
            }
        }
    }
      , t = {};
    function o(a) {
        var n = t[a];
        if (void 0 !== n)
            return n.exports;
        var s = t[a] = {
            id: a,
            loaded: !1,
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, o),
        s.loaded = !0,
        s.exports
    }
    o.m = e,
    ( () => {
        var e = [];
        o.O = (t, a, n, s) => {
            if (!a) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [a,n,s] = e[u], c = !0, r = 0; r < a.length; r++)
                        (!1 & s || i >= s) && Object.keys(o.O).every((e => o.O[e](a[r]))) ? a.splice(r--, 1) : (c = !1,
                        s < i && (i = s));
                    if (c) {
                        e.splice(u--, 1);
                        var m = n();
                        void 0 !== m && (t = m)
                    }
                }
                return t
            }
            s = s || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > s; u--)
                e[u] = e[u - 1];
            e[u] = [a, n, s]
        }
    }
    )(),
    ( () => {
        o.n = e => {
            var t = e && e.__esModule ? () => e["default"] : () => e;
            return o.d(t, {
                a: t
            }),
            t
        }
    }
    )(),
    ( () => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        o.t = function(a, n) {
            if (1 & n && (a = this(a)),
            8 & n)
                return a;
            if ("object" === typeof a && a) {
                if (4 & n && a.__esModule)
                    return a;
                if (16 & n && "function" === typeof a.then)
                    return a
            }
            var s = Object.create(null);
            o.r(s);
            var i = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var c = 2 & n && a; "object" == typeof c && !~e.indexOf(c); c = t(c))
                Object.getOwnPropertyNames(c).forEach((e => i[e] = () => a[e]));
            return i["default"] = () => a,
            o.d(s, i),
            s
        }
    }
    )(),
    ( () => {
        o.d = (e, t) => {
            for (var a in t)
                o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, {
                    enumerable: !0,
                    get: t[a]
                })
        }
    }
    )(),
    ( () => {
        o.f = {},
        o.e = e => Promise.all(Object.keys(o.f).reduce(( (t, a) => (o.f[a](e, t),
        t)), []))
    }
    )(),
    ( () => {
        o.u = e => "js/" + (996 === e ? "chunk-common" : e) + "." + {
            38: "ec9a2621",
            124: "0ec0108c",
            207: "6fdd56bd",
            230: "2983ed08",
            234: "7a4c7fe8",
            310: "71479c50",
            333: "3114e272",
            396: "051c0c3b",
            488: "152ab9ab",
            589: "e04dc777",
            653: "e8a9ef4f",
            898: "a45a885c",
            956: "bcb4bffd",
            963: "ca17e0a5",
            971: "d1001692",
            996: "a385d002",
            1014: "fe195f01",
            1049: "e70ad5a7",
            1077: "21b14e67",
            1087: "30e5a286",
            1168: "231e992d",
            1171: "7d230cf6",
            1216: "727e9c8a",
            1294: "f9993b84",
            1295: "39618589",
            1388: "4f023c91",
            1393: "8824b457",
            1404: "74877eb8",
            1414: "714a793a",
            1435: "1182438f",
            1464: "368e1de8",
            1482: "4872242e",
            1517: "256dff9e",
            1605: "b3e84805",
            1610: "a81ec246",
            1765: "b3442f9a",
            1770: "3e2e889b",
            1812: "af93d6e6",
            1840: "70e34938",
            1843: "4f488d9b",
            1894: "f72117d4",
            1944: "746516a7",
            1961: "a19ff086",
            2028: "8b5c1f6e",
            2041: "c030002f",
            2045: "2331b6f8",
            2046: "c507d835",
            2071: "9426691b",
            2082: "c782c999",
            2088: "19ca610e",
            2095: "7199b8ba",
            2126: "5196dbbd",
            2139: "94923d63",
            2159: "d9052fc4",
            2169: "eb3464c8",
            2185: "03621dbf",
            2191: "f55bf4ad",
            2206: "4e6a9eeb",
            2208: "c524708c",
            2211: "358fc194",
            2224: "b745f658",
            2228: "c0cf19ca",
            2282: "a8dfede2",
            2306: "ea48621f",
            2318: "a27e4240",
            2371: "bccf7fee",
            2468: "23eea324",
            2778: "36c52750",
            2780: "a21fe6cd",
            2801: "1a628bd4",
            2917: "949aedaf",
            2935: "8c55d56f",
            2987: "57a65df4",
            2997: "7e7dfcc2",
            3034: "ca9a2e72",
            3047: "67950945",
            3068: "2610d539",
            3073: "a3a50e3c",
            3090: "4df86d66",
            3125: "19aefeb6",
            3159: "c8a718ea",
            3205: "5d3a2fa3",
            3262: "cf2297ad",
            3452: "5c9fc0df",
            3453: "4075ded4",
            3456: "6ad8c560",
            3490: "7f2d67c5",
            3547: "6d531041",
            3579: "a9a27ed6",
            3728: "72eb0fa9",
            3795: "a58d7086",
            3797: "6e6a6c22",
            3823: "774d38a9",
            3966: "6e6a0e00",
            3986: "0cca01ce",
            4017: "8de96ae2",
            4067: "962ae25a",
            4110: "b8a1e498",
            4157: "68534d1a",
            4161: "b69bd107",
            4181: "2b0ac3f9",
            4245: "0cb5a1e6",
            4277: "9064e4fc",
            4285: "f9ba537e",
            4300: "e9d84136",
            4334: "23ffcb6f",
            4379: "944b66f6",
            4382: "6462a5e1",
            4417: "8e5dd080",
            4496: "cd5fe90e",
            4499: "c80a6e51",
            4583: "f9496ffa",
            4656: "acd39684",
            4724: "c791978b",
            4767: "2bac971c",
            4850: "f4373631",
            4858: "63766888",
            4992: "f8b959a7",
            5e3: "0b20a4f9",
            5053: "e3628dd0",
            5057: "377e9284",
            5221: "db2bd20c",
            5249: "38626897",
            5407: "fc4bfdf5",
            5450: "5ec3acdf",
            5463: "0cfb96c4",
            5487: "72a8373a",
            5492: "884f04b8",
            5493: "fc1ea4fd",
            5509: "76cce204",
            5546: "40e01430",
            5554: "14173392",
            5678: "aafade5a",
            5690: "38399772",
            5756: "5df5a71c",
            5767: "3d554ad4",
            5799: "9657d234",
            5845: "72be216d",
            5980: "ba374a2c",
            5991: "09248aac",
            6090: "98b4cb6c",
            6098: "543058d2",
            6099: "dd5790d8",
            6103: "fb5855b8",
            6104: "f4e06d51",
            6150: "e30f3d70",
            6188: "8e3065d8",
            6233: "8896ead4",
            6236: "b960cad6",
            6253: "c109251d",
            6362: "82530266",
            6428: "50dcfdbc",
            6445: "87304d66",
            6470: "2ee1b0ec",
            6488: "3c43f5a3",
            6542: "cf8660c3",
            6554: "5299512c",
            6560: "e3a94279",
            6702: "6f65055e",
            6731: "b9f2759b",
            6756: "f5fa4a3c",
            6966: "15f8e137",
            7050: "6f3e5b82",
            7053: "e5047016",
            7069: "f01ac085",
            7076: "e1ebcc4f",
            7152: "5750c1e7",
            7179: "3936499d",
            7182: "799c1f74",
            7183: "cec6c707",
            7269: "cd6c21d1",
            7420: "a1d84f75",
            7527: "9239b730",
            7596: "046560a5",
            7641: "e4a6587d",
            7644: "e37fe699",
            7668: "16857a5f",
            7732: "748132d2",
            7764: "0eb044cb",
            7804: "ebede94d",
            7825: "823262ca",
            8001: "ec57c4a6",
            8021: "3910117d",
            8045: "ca8babaf",
            8102: "09856b80",
            8273: "90c46a26",
            8290: "347e6b40",
            8530: "bae930b8",
            8552: "63fb19f8",
            8605: "054a7d76",
            8629: "eaeeed99",
            8650: "83bd33a4",
            8684: "869957f6",
            8687: "144c0848",
            8702: "4f65e591",
            8713: "fda7f99e",
            8793: "f471e3a7",
            8797: "9e5ff4c5",
            8844: "0bc01a8d",
            8965: "de62a87e",
            8993: "08c99d3f",
            9013: "ea4d2de8",
            9075: "616c8117",
            9084: "1ebfe344",
            9197: "939f2ba6",
            9203: "4f6086da",
            9247: "df6f59e5",
            9313: "260ed979",
            9357: "48dbe94b",
            9370: "a38728ca",
            9411: "0fa8de6d",
            9417: "9927db3a",
            9477: "eca9ffad",
            9487: "add6bb3e",
            9613: "0cec5909",
            9627: "23ac4ffa",
            9652: "9d6774a5",
            9732: "93bcd09d",
            9787: "f6d66a4d",
            9790: "fd2a9165",
            9888: "63258068",
            9916: "508c24f6",
            9928: "dc092bdd",
            9937: "dccd7b71",
            9960: "fb971d0b",
            9965: "db0d0cf1",
            9988: "0eb80051",
            9999: "d00458fa"
        }[e] + ".js"
    }
    )(),
    ( () => {
        o.miniCssF = e => "css/" + (996 === e ? "chunk-common" : e) + "." + {
            38: "4f95cd44",
            124: "52838eb2",
            207: "c5ba897a",
            310: "62659cd7",
            333: "84d50f3b",
            488: "92c7dca6",
            589: "68d8d68f",
            653: "ddef79b5",
            996: "a9648454",
            1014: "953b461c",
            1077: "3080dfbb",
            1294: "81ae2259",
            1295: "bfcfdd3f",
            1393: "d5b6534c",
            1414: "6d7e5459",
            1464: "d850d0aa",
            1482: "495cb7ea",
            1517: "0201da37",
            1605: "f7c6cf4a",
            1610: "8324710d",
            1765: "669f0167",
            1770: "5a9419af",
            1840: "e87dadd2",
            1894: "c454dfbc",
            1961: "5628890f",
            2028: "d2bbc67b",
            2041: "3a2ce028",
            2045: "4b258a36",
            2046: "db32e855",
            2071: "a96baee3",
            2082: "a7ce5b6d",
            2088: "a7cd6c59",
            2126: "d570082a",
            2159: "08db0795",
            2169: "665d1e65",
            2185: "c7a6c4cb",
            2208: "fe4e19bf",
            2228: "0c18dac9",
            2318: "d1257653",
            2371: "db6e77da",
            2801: "146c4808",
            2987: "d8dc85af",
            3034: "3759103d",
            3047: "f59d5e42",
            3068: "978af020",
            3125: "157b140f",
            3159: "1f9fbe7e",
            3205: "35bdf678",
            3262: "d100e466",
            3547: "e061a164",
            3579: "9e025e73",
            3795: "169be530",
            3797: "d5c440b5",
            3823: "c64b5c5c",
            3966: "d678912f",
            3986: "5bf0e8f9",
            4017: "193d658e",
            4067: "31d6cfe0",
            4110: "7a6f40b9",
            4277: "e578cd3e",
            4285: "178e3445",
            4379: "0e4d1e09",
            4382: "b5700f49",
            4583: "abd1320c",
            4724: "050de198",
            4767: "197761db",
            4858: "392d7537",
            4992: "858125b6",
            5e3: "3289a4c3",
            5221: "5835d47b",
            5249: "86bf7de5",
            5487: "a661a6c9",
            5492: "16c670b2",
            5509: "92c7dca6",
            5546: "07f6694e",
            5554: "676f2ade",
            5756: "c8ddc0df",
            5991: "32f33996",
            6090: "786d6d55",
            6099: "00a6d578",
            6188: "669f0167",
            6233: "80146676",
            6470: "123418b1",
            6542: "62a2d351",
            6731: "cd8af663",
            7076: "c6f73580",
            7152: "da1e0d1c",
            7179: "ade4399e",
            7182: "7cca3646",
            7527: "c872ffe5",
            7644: "3a3f9cc4",
            7668: "d7cede4a",
            7764: "8831f34b",
            7825: "3e994e4b",
            8102: "28af4b72",
            8273: "dd2b6866",
            8530: "605f8b04",
            8552: "91e4c41f",
            8629: "66b6b7da",
            8650: "bef1de2c",
            8684: "cef0676a",
            8687: "b1684002",
            8713: "ff2efb1f",
            8844: "42c0372c",
            8965: "95055ef6",
            9075: "ff9093b9",
            9197: "edf62e63",
            9247: "d05ebcb2",
            9417: "253a5d70",
            9613: "83eed7a1",
            9732: "2b52e81a",
            9787: "d9148532",
            9928: "86eb028f",
            9937: "c3c5637f"
        }[e] + ".css"
    }
    )(),
    ( () => {
        o.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }
    )(),
    ( () => {
        o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)
    }
    )(),
    ( () => {
        var e = {}
          , t = "ambition-guru:";
        o.l = (a, n, s, i) => {
            if (e[a])
                e[a].push(n);
            else {
                var c, r;
                if (void 0 !== s)
                    for (var m = document.getElementsByTagName("script"), u = 0; u < m.length; u++) {
                        var d = m[u];
                        if (d.getAttribute("src") == a || d.getAttribute("data-webpack") == t + s) {
                            c = d;
                            break
                        }
                    }
                c || (r = !0,
                c = document.createElement("script"),
                c.charset = "utf-8",
                c.timeout = 120,
                o.nc && c.setAttribute("nonce", o.nc),
                c.setAttribute("data-webpack", t + s),
                c.src = a),
                e[a] = [n];
                var l = (t, o) => {
                    c.onerror = c.onload = null,
                    clearTimeout(p);
                    var n = e[a];
                    if (delete e[a],
                    c.parentNode && c.parentNode.removeChild(c),
                    n && n.forEach((e => e(o))),
                    t)
                        return t(o)
                }
                  , p = setTimeout(l.bind(null, void 0, {
                    type: "timeout",
                    target: c
                }), 12e4);
                c.onerror = l.bind(null, c.onerror),
                c.onload = l.bind(null, c.onload),
                r && document.head.appendChild(c)
            }
        }
    }
    )(),
    ( () => {
        o.r = e => {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }
    )(),
    ( () => {
        o.nmd = e => (e.paths = [],
        e.children || (e.children = []),
        e)
    }
    )(),
    ( () => {
        o.p = "/"
    }
    )(),
    ( () => {
        if ("undefined" !== typeof document) {
            var e = (e, t, a, n, s) => {
                var i = document.createElement("link");
                i.rel = "stylesheet",
                i.type = "text/css",
                o.nc && (i.nonce = o.nc);
                var c = o => {
                    if (i.onerror = i.onload = null,
                    "load" === o.type)
                        n();
                    else {
                        var a = o && o.type
                          , c = o && o.target && o.target.href || t
                          , r = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ": " + c + ")");
                        r.name = "ChunkLoadError",
                        r.code = "CSS_CHUNK_LOAD_FAILED",
                        r.type = a,
                        r.request = c,
                        i.parentNode && i.parentNode.removeChild(i),
                        s(r)
                    }
                }
                ;
                return i.onerror = i.onload = c,
                i.href = t,
                a ? a.parentNode.insertBefore(i, a.nextSibling) : document.head.appendChild(i),
                i
            }
              , t = (e, t) => {
                for (var o = document.getElementsByTagName("link"), a = 0; a < o.length; a++) {
                    var n = o[a]
                      , s = n.getAttribute("data-href") || n.getAttribute("href");
                    if ("stylesheet" === n.rel && (s === e || s === t))
                        return n
                }
                var i = document.getElementsByTagName("style");
                for (a = 0; a < i.length; a++) {
                    n = i[a],
                    s = n.getAttribute("data-href");
                    if (s === e || s === t)
                        return n
                }
            }
              , a = a => new Promise(( (n, s) => {
                var i = o.miniCssF(a)
                  , c = o.p + i;
                if (t(i, c))
                    return n();
                e(a, c, null, n, s)
            }
            ))
              , n = {
                3524: 0
            };
            o.f.miniCss = (e, t) => {
                var o = {
                    38: 1,
                    124: 1,
                    207: 1,
                    310: 1,
                    333: 1,
                    488: 1,
                    589: 1,
                    653: 1,
                    996: 1,
                    1014: 1,
                    1077: 1,
                    1294: 1,
                    1295: 1,
                    1393: 1,
                    1414: 1,
                    1464: 1,
                    1482: 1,
                    1517: 1,
                    1605: 1,
                    1610: 1,
                    1765: 1,
                    1770: 1,
                    1840: 1,
                    1894: 1,
                    1961: 1,
                    2028: 1,
                    2041: 1,
                    2045: 1,
                    2046: 1,
                    2071: 1,
                    2082: 1,
                    2088: 1,
                    2126: 1,
                    2159: 1,
                    2169: 1,
                    2185: 1,
                    2208: 1,
                    2228: 1,
                    2318: 1,
                    2371: 1,
                    2801: 1,
                    2987: 1,
                    3034: 1,
                    3047: 1,
                    3068: 1,
                    3125: 1,
                    3159: 1,
                    3205: 1,
                    3262: 1,
                    3547: 1,
                    3579: 1,
                    3795: 1,
                    3797: 1,
                    3823: 1,
                    3966: 1,
                    3986: 1,
                    4017: 1,
                    4067: 1,
                    4110: 1,
                    4277: 1,
                    4285: 1,
                    4379: 1,
                    4382: 1,
                    4583: 1,
                    4724: 1,
                    4767: 1,
                    4858: 1,
                    4992: 1,
                    5e3: 1,
                    5221: 1,
                    5249: 1,
                    5487: 1,
                    5492: 1,
                    5509: 1,
                    5546: 1,
                    5554: 1,
                    5756: 1,
                    5991: 1,
                    6090: 1,
                    6099: 1,
                    6188: 1,
                    6233: 1,
                    6470: 1,
                    6542: 1,
                    6731: 1,
                    7076: 1,
                    7152: 1,
                    7179: 1,
                    7182: 1,
                    7527: 1,
                    7644: 1,
                    7668: 1,
                    7764: 1,
                    7825: 1,
                    8102: 1,
                    8273: 1,
                    8530: 1,
                    8552: 1,
                    8629: 1,
                    8650: 1,
                    8684: 1,
                    8687: 1,
                    8713: 1,
                    8844: 1,
                    8965: 1,
                    9075: 1,
                    9197: 1,
                    9247: 1,
                    9417: 1,
                    9613: 1,
                    9732: 1,
                    9787: 1,
                    9928: 1,
                    9937: 1
                };
                n[e] ? t.push(n[e]) : 0 !== n[e] && o[e] && t.push(n[e] = a(e).then(( () => {
                    n[e] = 0
                }
                ), (t => {
                    throw delete n[e],
                    t
                }
                )))
            }
        }
    }
    )(),
    ( () => {
        var e = {
            3524: 0
        };
        o.f.j = (t, a) => {
            var n = o.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n)
                    a.push(n[2]);
                else {
                    var s = new Promise(( (o, a) => n = e[t] = [o, a]));
                    a.push(n[2] = s);
                    var i = o.p + o.u(t)
                      , c = new Error
                      , r = a => {
                        if (o.o(e, t) && (n = e[t],
                        0 !== n && (e[t] = void 0),
                        n)) {
                            var s = a && ("load" === a.type ? "missing" : a.type)
                              , i = a && a.target && a.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + s + ": " + i + ")",
                            c.name = "ChunkLoadError",
                            c.type = s,
                            c.request = i,
                            n[1](c)
                        }
                    }
                    ;
                    o.l(i, r, "chunk-" + t, t)
                }
        }
        ,
        o.O.j = t => 0 === e[t];
        var t = (t, a) => {
            var n, s, [i,c,r] = a, m = 0;
            if (i.some((t => 0 !== e[t]))) {
                for (n in c)
                    o.o(c, n) && (o.m[n] = c[n]);
                if (r)
                    var u = r(o)
            }
            for (t && t(a); m < i.length; m++)
                s = i[m],
                o.o(e, s) && e[s] && e[s][0](),
                e[s] = 0;
            return o.O(u)
        }
          , a = globalThis["webpackChunkambition_guru"] = globalThis["webpackChunkambition_guru"] || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }
    )();
    var a = o.O(void 0, [4121], ( () => o(78162)));
    a = o.O(a)
}
)();
