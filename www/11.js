/*
 * Generated: 05.09.2014 03:49
 * Copyright (c) 2014.
 * Tinkoff Credit Systems Bank.
 * All rights reserved.
 */
function docinit() {
    function a() {
        0 !== $(".tabs_block .select_vk").length && $(".tabs_block .select_vk").next().addClass("right_from_select")
    }

    function b(a, b) {
        var c = TCS.getServiceURL("deactivate_mail_delivery?key=" + a);
        b && (c += "&type=" + b);
        $.ajax({
            url: c, success: function (a) {
                $("#unsubscribe_paper_extract_process").hide();
                a && "OK" === a.resultCode ? $("#unsubscribe_paper_extract_success").show() : $("#unsubscribe_paper_extract_error").show()
            }, error: function () {
                $("#unsubscribe_paper_extract_process").hide();
                $("#unsubscribe_paper_extract_error").show()
            }
        });
        $("#unsubscribe_paper_extract").hide();
        $("#unsubscribe_paper_extract_process").show()
    }

    function c() {
        for (var a, b = [], c = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), d = 0; d < c.length; d++) {
            a = c[d].split("=");
            b.push(a[0]);
            b[a[0]] = a[1]
        }
        return b
    }

    function d(a) {
        $("#tcs-tab-" + a).length > 0 ? $("#tcs-tab-" + a).trigger("click") : $("#tcs-tab-left-" + a).length > 0 ? $("#tcs-tab-left-" + a).trigger("click") : $(".service_tabs").length > 0 && $(".service_tabs .tabs_block [href=#" + a + "]").trigger("click")
    }

    $(".carousel_wrapper .prev_slide, .carousel_wrapper .next_slide").click(function () {
        var a = $(this).closest(".carousel_slide"), b = $(this).closest(".carousel_wrapper"), c = 346, d = "next_slide" === $(this).attr("class") ? 1 : 0, e = /([a-zA-Z_]+)/, f = a.attr("id").replace(e, ""), g = b.find(".carousel_slide:last-child").attr("id").replace(e, ""), h = 0 === f && 0 === d || f === g && 1 === d, i = 0;
        if (!h) {
            a.removeClass("current");
            try {
                i = parseInt(b.css("background-position").split(" ")[1].replace("px", ""), 10)
            } catch (j) {
                i = parseInt(b.css("background-position-y").replace("px", ""), 10)
            }
            if (0 === d) {
                i += c;
                a.prev().addClass("current")
            } else {
                i -= c;
                a.next().addClass("current")
            }
            b.css("background-position", "0px " + i + "px")
        }
    });
    a();
    $(".tabs_block a").click(function () {
        $("div#" + $(this).attr("rel") + " div." + $(this).attr("rel")).hide();
        $("#" + $(this).attr("id") + "_content").show();
        $("div#" + $(this).attr("rel") + " li").removeClass("right_from_select");
        $("div#" + $(this).attr("rel") + " li").removeClass("select_vk");
        $(this).parent().addClass("select_vk");
        a()
    });
    $(".sms_commands li .sms_command a").click(function () {
        $(this).closest("li").addClass("sms_command_hover").siblings().removeClass("sms_command_hover");
        return !1
    });
    $(".tabs_wrapper li").click(function () {
        if (!$(this).is(".current")) {
            var a = $(this).parent().find("li").index($(this));
            $(this).addClass("current").siblings("li.current").removeClass("current");
            $(this).closest(".tabs_header").nextAll(".tabs_body").removeClass("current").eq(a).addClass("current")
        }
        return !1
    });
    $("#unsubscribe").click(function () {
        var a = c().key, d = c().type;
        a && b(a, d)
    });
    if (!arguments.callee.done) {
        arguments.callee.done = !0;
        jQuery("#main_tabs .table_yellow_bg td").click(function () {
            jQuery("#main_tabs .table_yellow_bg td").removeClass("current");
            jQuery("#main_tabs_content .main_tabs_content").removeClass("current");
            var a = this.id + "_content";
            jQuery("#main_tabs_shadow").show();
            jQuery(this).addClass("current");
            jQuery("#" + a).addClass("current");
            jQuery("#main_tabs_content").removeClass().addClass("content_" + this.id)
        });
        $(".g-video-link").click(function () {
            var a = $(".g-video-switch", this)[0], b = (a.getAttribute("stream"), $(".g-videoWrapperShown"));
            renderVideo($(".g-video-movie", b)[0])
        });
        jQuery(".g-videoColumn").click(function () {
            var a = $(this);
            $(".g-videoWrapperShown").removeClass("g-videoWrapperShown");
            if (a.is(".g-videoColumnSelected")) {
                a.removeClass("g-videoColumnSelected");
                $("#replace_video_gadget").removeClass("g-video-shown")
            } else {
                var b = $(".g-videoColumnSelected");
                b.length && b.removeClass("g-videoColumnSelected");
                a.addClass("g-videoColumnSelected");
                var c = a.attr("columnindex"), d = $('.g-videoWrapper[columnindex = "' + c + '"]');
                d.addClass("g-videoWrapperShown");
                $("#replace_video_gadget").addClass("g-video-shown")
            }
        });
        $(".deposit_video_column").click(function () {
            var a = $(this);
            $(".g-videoWrapperShown").removeClass("g-videoWrapperShown");
            if (a.hasClass("g-videoColumnSelected")) {
                a.removeClass("g-videoColumnSelected");
                $("#replace_video_gadget").removeClass("g-video-shown")
            } else {
                var b = $(".g-videoColumnSelected");
                b.length && b.removeClass("g-videoColumnSelected");
                a.addClass("g-videoColumnSelected");
                var c = a.attr("columnindex"), d = $('.g-videoWrapper[columnindex = "' + c + '"]');
                d.addClass("g-videoWrapperShown");
                $("#replace_video_gadget").addClass("g-video-shown");
                renderVideo($(".g-video-movie", d)[0])
            }
        });
        jQuery(".deposit_tab.current").prev().find("h3.deposit_tabs_delimitter").hide();
        jQuery(".deposit_tab").click(function () {
            document.location = "#deposit_tabs";
            jQuery(".deposit_tab").removeClass("current");
            jQuery(this).addClass("current");
            jQuery(".deposit_tab").find("h3.deposit_tabs_delimitter").show();
            jQuery(".deposit_tab.current").prev().find("h3.deposit_tabs_delimitter").hide();
            jQuery(".deposit_tabs_body").removeClass("current");
            for (var a = 0; 3 >= a; a++)jQuery(".deposit_tab").eq(a).is(".current") && jQuery("#deposit_tabs_body_" + (a + 1)).addClass("current")
        });
        jQuery(".content_tabs dd.current").prev().find("span.content_tabs_delimitter").hide();
        jQuery("dt.content_tab").click(function () {
            jQuery("dt.content_tab").removeClass("current");
            jQuery(this).addClass("current");
            jQuery("dt.content_tab").find("span.content_tabs_delimitter").show();
            jQuery("dt.content_tab.current").prev().find("span.content_tabs_delimitter").hide();
            jQuery("dd.content_tabs_body").removeClass("current");
            jQuery(this).next("dd").addClass("current")
        });
        jQuery(".show_next").click(function () {
            jQuery(this).next().slideToggle("slow");
            return !1
        });
        jQuery(".js_show_description").click(function () {
            jQuery(this).parents(".item").find(".description").slideToggle()
        });
        jQuery(".js_go_ibank").click(function () {
            location.href = "https://online.tcsbank.ru"
        });
        jQuery('.js_yellow_container a[href="' + window.location.pathname + '"]').addClass("yellowtext");
        jQuery(".js_show_tinkoff_tooltip").click(function () {
            var a = $(window), b = jQuery("#tinkoff_tooltip");
            b.css("position", "absolute");
            b.css("top", (a.height() - b.height()) / 2 + a.scrollTop() + "px");
            b.css("left", (jQuery("body").width() - b.width()) / 2 + a.scrollLeft() + "px");
            jQuery(this).hasClass("js_noib") ? b.find(".ibank_link").hide() : b.find(".ibank_link").show();
            b.fadeIn()
        });
        jQuery("body").append(jQuery("#tinkoff_tooltip_container").html());
        jQuery(".js_hide_tinkoff_tooltip").click(function () {
            jQuery("#tinkoff_tooltip").hide()
        });
        jQuery("#tinkoff_tooltip_container").remove();
        var e = function () {
            return Math.floor($("body").width() - $(window).width()) / 2
        }, f = $('<style id="b-share-fix">.b-share-popup-wrap {margin-left: ' + e() + "px}</style>").appendTo("body");
        $(window).bind("resize", function () {
            try {
                f.html(".b-share-popup-wrap {margin-left: " + e() + "px}")
            } catch (a) {
            }
        });
        $(".two_hor_tabs_coll .left_tabs_coll li, .two_hor_tabs_coll .right_tabs_coll li").click(function () {
            $(this).parents(".two_hor_tabs_coll").children(".left_tabs_coll, .right_tabs_coll").children("li").removeClass("hover_hor_tab").removeClass("prev_hover_hor_tab");
            $(this).addClass("hover_hor_tab").prev().addClass("prev_hover_hor_tab");
            $(this).parents(".two_hor_tabs_coll").children(".hor_tabs_content").children("div").hide();
            var a = $(this).parents(".two_hor_tabs_coll").find(".left_tabs_coll li").length;
            $(this).parents(".right_tabs_coll").length > 0 ? $(this).parents(".two_hor_tabs_coll").children(".hor_tabs_content").children("div").eq(a + $(this).index()).show() : $(this).parents(".two_hor_tabs_coll").children(".hor_tabs_content").children("div").eq($(this).index()).show();
            return !1
        });
        $(".tcs_main_banner_block .right_main_banner_list > li .right_main_banner_list_content").each(function () {
            var a = ($(this).parent("li").height() - $(this).height()) / 2;
            $(this).css("padding-top", a)
        });
        $(".tcs_main_banner_block .right_main_banner_list li").click(function () {
            $(this).parents(".tcs_main_banner_block").children(".main_banner_content").children(".main_banner_content_block_" + parseInt($(this).index() + 1, 10)).show().siblings().hide();
            $(this).addClass("right_main_banner_list_hover").siblings().removeClass("right_main_banner_list_hover");
            return !1
        });
        $(".horiz_list_with_bottom_content .horiz_list-bottom_content-list .horiz_list_show_content_link").click(function () {
            $(this).parents(".horiz_list_with_bottom_content").children(".horiz_list-bottom_content-block").children("div").hide();
            $(this).parents(".horiz_list_with_bottom_content").children(".horiz_list-bottom_content-block").show();
            $(this).parents(".horiz_list_with_bottom_content").children(".horiz_list-bottom_content-block").children("div").eq($(this).parents("li.horiz_list_li").index()).show();
            if ($(this).parents(".horiz_list_with_bottom_content").is(".tcs_main_page_benefits_slogan")) {
                $(this).parents(".horiz_list_with_bottom_content").children(".horiz_list-bottom_content-block").children("div").eq($(this).parents("li.horiz_list_li").index()).children(".horiz_list-bottom_conten_str").addClass("horiz_list-bottom_conten_str-" + parseInt($(this).parents("li").index() + 1, 10));
                $(this).parents(".main_page_benefits").children("li").removeClass("gray_li_text").removeClass("tcs_main_page_benefit_hover");
                $(this).parents(".tcs_main_page_benefit").siblings().addClass("gray_li_text");
                $(this).parents(".tcs_main_page_benefit").addClass("tcs_main_page_benefit_hover")
            } else if ($(this).parents(".horiz_list_with_bottom_content").is(".tcs_main_page_video_block")) {
                $(this).parents(".tcs_main_page_video_list").children(".horiz_list_li").children(".tcs_video_tour_name").removeClass("mark_simple_text");
                $(this).parents(".horiz_list_li").children(".tcs_video_tour_name").addClass("mark_simple_text")
            }
            $(this).parents(".horiz_list_with_bottom_content").children(".new_el_shadow").show()
        });
        $(".close-horiz_list-bottom_content-block").click(function () {
            $(this).parents(".horiz_list-bottom_content-block").hide().next(".horiz_list-bottom_content_shadow").hide();
            $(this).parents(".horiz_list-bottom_content-block").children("div").hide();
            $(this).parents(".horiz_list_with_bottom_content").is(".tcs_main_page_benefits_slogan") ? $(this).parents(".horiz_list_with_bottom_content").children(".main_page_benefits").children("li").removeClass("gray_li_text").removeClass("tcs_main_page_benefit_hover") : $(this).parents(".horiz_list_with_bottom_content").is(".tcs_main_page_video_block") && $(this).parents(".tcs_main_page_video_block").find(".horiz_list_li").find(".tcs_video_tour_name").removeClass("mark_simple_text");
            $(this).parents(".horiz_list_with_bottom_content").children(".new_el_shadow").hide();
            return !1
        });
        $(".tcs_tabs").each(function () {
            var a = $(this).children("ul.tcs_tab_list").width(), b = Math.floor(parseFloat(a) / parseInt($(this).children("ul.tcs_tab_list").children("li").length, 10) - 2);
            $(this).children("ul.tcs_tab_list").children("li").width(b);
            $(this).children("ul.tcs_tab_list").children("li.first_tab").width(b + 1);
            var c = b * parseInt($(this).children("ul.tcs_tab_list").children("li").length, 10) + 2 * parseInt($(this).children("ul.tcs_tab_list").children("li").length, 10) - 1;
            $(this).children(".tcs_tabs_content").width(c)
        });
        $(".tcs_tabs > ul > li a").click(function () {
            $(this).parents("ul").children("li").removeClass("tcs_tab_hover").removeClass("border_right_none").removeClass("border_left_none").removeClass("padding_left_1px").removeClass("padding_right_1px");
            $(this).parents("ul").children("li").children("a").removeClass("left_tab_shadow").removeClass("right_tab_shadow");
            $(this).removeClass("left_tab_shadow").removeClass("right_tab_shadow");
            $(this).parent("li").addClass("tcs_tab_hover");
            if ($(this).parent().is(":first-child")) {
                $(this).parent("li").addClass("padding_right_1px");
                $(this).parent("li").next().children("a").addClass("right_tab_shadow")
            } else if ($(this).parent().is(":last-child")) {
                $(this).parent("li").addClass("padding_left_1px");
                $(this).parent("li").prev().children("a").addClass("left_tab_shadow")
            } else {
                $(this).parent("li").addClass("padding_left_1px").addClass("padding_right_1px");
                $(this).parent("li").prev().children("a").addClass("left_tab_shadow");
                $(this).parent("li").next().children("a").addClass("right_tab_shadow")
            }
            $(this).parent("li").next().addClass("border_left_none").addClass("padding_left_1px");
            $(this).parent("li").prev().addClass("border_right_none").addClass("padding_right_1px");
            $(this).parent("li").parents(".tcs_tabs").children(".tcs_tabs_content").children("div").hide();
            $(this).parents(".tcs_tabs").children(".tcs_tabs_content").children("div").eq($(this).parent("li").index()).show()
        });
        $(".tcs-tabs-left").length > 0 && $(".tcs-tabs-left .tcs-tabs-left-tab").click(function () {
            var a = $(".tcs-tabs-left");
            $(".tcs-tabs-left-tab-current", a).toggleClass("tcs-tabs-left-tab-current");
            $(".tcs-tabs-left-tab-content-current", a).toggleClass("tcs-tabs-left-tab-content-current");
            $(this).addClass("tcs-tabs-left-tab-current");
            $(".tcs-tabs-left-tab-content", a).eq($(this).index()).addClass("tcs-tabs-left-tab-content-current")
        });
        $(".hash_link").click(function () {
            d($(this).attr("href").replace("#", ""))
        });
        var g = window.location.hash.replace("#", "");
        /[\&\#\=]/g.test(g) || d(g);
        $(".tcs_link_content").click(function () {
            $("#" + $(this).attr("id") + "_block").toggle();
            return "credit_card_odnoklassniki_video_block" !== $(this).attr("rel1") ? !1 : void 0
        });
        $(".close_this_content_block").click(function () {
            $(this).parents(".tcs_link_content_block").hide();
            return "return_anchor" !== $(this).attr("rel2") ? !1 : void 0
        });
        $(".tcs-about-bonds-2011").click(function (a) {
            a.preventDefault();
            $(".tcs-about-bonds-2010").removeClass("selected");
            $(this).addClass("selected");
            $(".tcs-about-bonds-2010Block").hide();
            $(".tcs-about-bonds-2011Block").show()
        });
        $(".tcs-about-bonds-2010").click(function (a) {
            a.preventDefault();
            $(".tcs-about-bonds-2011").removeClass("selected");
            $(this).addClass("selected");
            $(".tcs-about-bonds-2010Block").show();
            $(".tcs-about-bonds-2011Block").hide()
        });
        $.browser.msie && $.browser.version <= 8 && $("#tcs_primary_menu a").click(function () {
            $(this).addClass("tcs-primary-menu-current").parents("li, td").addClass("tcs-primary-menu-current")
        });
        $.browser.msie && 7 === $.browser.version && $("a").focus(function () {
            this.blur()
        })
    }
}
function initGetAppLink(a) {
    "use strict";
    function b(a) {
        return a.length < 13 ? !1 : a.match(/\d\(\d{3}\)\d{3}-\d{2}-\d{2}/)
    }

    var c, d = ".tcs-mob-bank__phone-for-receive-reference-sms";
    c = a ? $(a).find(d) : $(d);
    c.mask("8(999)999-99-99", {placeholder: "_"});
    $(".tcs-mob-bank__receive-reference-sms").click(function () {
        var a, e = $(d).val(), f = "<p class='tcs-mob-bank__receive-reference-sms-title'>Ссылка на указанный номер отправлена.</p>";
        if (b(e)) {
            c.removeClass("phone-error");
            a = {phone: e};
            $.get(TCS.getServiceURL("get_mobile_app"), a).done(function () {
                $(".tcs-mob-bank_sms-link").empty().append(f)
            })
        } else c.addClass("phone-error");
        c.keyup(function () {
            var a = c.val();
            b(a) ? c.removeClass("phone-error") : c.addClass("phone-error")
        });
        return !1
    })
}
!function (a, b) {
    function c(a) {
        var b = ob[a] = {};
        return $.each(a.split(bb), function (a, c) {
            b[c] = !0
        }), b
    }

    function d(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(qb, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if ("string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : pb.test(d) ? $.parseJSON(d) : d
                } catch (f) {
                }
                $.data(a, c, d)
            } else d = b
        }
        return d
    }

    function e(a) {
        var b;
        for (b in a)if (("data" !== b || !$.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
        return !0
    }

    function f() {
        return !1
    }

    function g() {
        return !0
    }

    function h(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function i(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function j(a, b, c) {
        b = b || 0;
        if ($.isFunction(b))return $.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType)return $.grep(a, function (a) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = $.grep(a, function (a) {
                return 1 === a.nodeType
            });
            if (Kb.test(b))return $.filter(b, d, !c);
            b = $.filter(b, d)
        }
        return $.grep(a, function (a) {
            return $.inArray(a, b) >= 0 === c
        })
    }

    function k(a) {
        var b = Nb.split("|"), c = a.createDocumentFragment();
        if (c.createElement)for (; b.length;)c.createElement(b.pop());
        return c
    }

    function l(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }

    function m(a, b) {
        if (1 === b.nodeType && $.hasData(a)) {
            var c, d, e, f = $._data(a), g = $._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)for (d = 0, e = h[c].length; e > d; d++)$.event.add(b, c, h[c][d])
            }
            g.data && (g.data = $.extend({}, g.data))
        }
    }

    function n(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), $.support.html5Clone && a.innerHTML && !$.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Xb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text), b.removeAttribute($.expando))
    }

    function o(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function p(a) {
        Xb.test(a.type) && (a.defaultChecked = a.checked)
    }

    function q(a, b) {
        if (b in a)return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = rc.length; e--;) {
            b = rc[e] + c;
            if (b in a)return b
        }
        return d
    }

    function r(a, b) {
        return a = b || a, "none" === $.css(a, "display") || !$.contains(a.ownerDocument, a)
    }

    function s(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++) {
            c = a[f];
            c.style && (e[f] = $._data(c, "olddisplay"), b ? (!e[f] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && r(c) && (e[f] = $._data(c, "olddisplay", w(c.nodeName)))) : (d = cc(c, "display"), !e[f] && "none" !== d && $._data(c, "olddisplay", d)))
        }
        for (f = 0; g > f; f++) {
            c = a[f];
            c.style && (b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? e[f] || "" : "none"))
        }
        return a
    }

    function t(a, b, c) {
        var d = kc.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function u(a, b, c, d) {
        for (var e = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, f = 0; 4 > e; e += 2)"margin" === c && (f += $.css(a, c + qc[e], !0)), d ? ("content" === c && (f -= parseFloat(cc(a, "padding" + qc[e])) || 0), "margin" !== c && (f -= parseFloat(cc(a, "border" + qc[e] + "Width")) || 0)) : (f += parseFloat(cc(a, "padding" + qc[e])) || 0, "padding" !== c && (f += parseFloat(cc(a, "border" + qc[e] + "Width")) || 0));
        return f
    }

    function v(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight, e = !0, f = $.support.boxSizing && "border-box" === $.css(a, "boxSizing");
        if (0 >= d || null == d) {
            d = cc(a, b);
            (0 > d || null == d) && (d = a.style[b]);
            if (lc.test(d))return d;
            e = f && ($.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + u(a, b, c || (f ? "border" : "content"), e) + "px"
    }

    function w(a) {
        if (nc[a])return nc[a];
        var b = $("<" + a + ">").appendTo(P.body), c = b.css("display");
        b.remove();
        if ("none" === c || "" === c) {
            dc = P.body.appendChild(dc || $.extend(P.createElement("iframe"), {frameBorder: 0, width: 0, height: 0}));
            ec && dc.createElement || (ec = (dc.contentWindow || dc.contentDocument).document, ec.write("<!doctype html><html><body>"), ec.close());
            b = ec.body.appendChild(ec.createElement(a)), c = cc(b, "display"), P.body.removeChild(dc)
        }
        return nc[a] = c, c
    }

    function x(a, b, c, d) {
        var e;
        if ($.isArray(b))$.each(b, function (b, e) {
            c || uc.test(a) ? d(a, e) : x(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== $.type(b))d(a, b); else for (e in b)x(a + "[" + e + "]", b[e], c, d)
    }

    function y(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e, f, g = b.toLowerCase().split(bb), h = 0, i = g.length;
            if ($.isFunction(c))for (; i > h; h++)d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
    }

    function z(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === Kc; k > j && (l || !h); j++)h = i[j](c, d, e), "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = z(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = z(a, c, d, e, "*", g)), h
    }

    function A(a, c) {
        var d, e, f = $.ajaxSettings.flatOptions || {};
        for (d in c)c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && $.extend(!0, a, e)
    }

    function B(a, c, d) {
        var e, f, g, h, i = a.contents, j = a.dataTypes, k = a.responseFields;
        for (f in k)f in d && (c[k[f]] = d[f]);
        for (; "*" === j[0];)j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)for (f in i)if (i[f] && i[f].test(e)) {
            j.unshift(f);
            break
        }
        if (j[0]in d)g = j[0]; else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function C(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(), h = g[0], i = {}, j = 0;
        a.dataFilter && (b = a.dataFilter(b, a.dataType));
        if (g[1])for (c in a.converters)i[c.toLowerCase()] = a.converters[c];
        for (; e = g[++j];)if ("*" !== e) {
            if ("*" !== h && h !== e) {
                c = i[h + " " + e] || i["* " + e];
                if (!c)for (d in i) {
                    f = d.split(" ");
                    if (f[1] === e) {
                        c = i[h + " " + f[0]] || i["* " + f[0]];
                        if (c) {
                            c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                            break
                        }
                    }
                }
                if (c !== !0)if (c && a["throws"])b = c(b); else try {
                    b = c(b)
                } catch (k) {
                    return {state: "parsererror", error: c ? k : "No conversion from " + h + " to " + e}
                }
            }
            h = e
        }
        return {state: "success", data: b}
    }

    function D() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function E() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function F() {
        return setTimeout(function () {
            Vc = b
        }, 0), Vc = $.now()
    }

    function G(a, b) {
        $.each(b, function (b, c) {
            for (var d = (_c[b] || []).concat(_c["*"]), e = 0, f = d.length; f > e; e++)if (d[e].call(a, b, c))return
        })
    }

    function H(a, b, c) {
        var d, e = 0, f = $c.length, g = $.Deferred().always(function () {
            delete h.elem
        }), h = function () {
            for (var b = Vc || F(), c = Math.max(0, i.startTime + i.duration - b), d = c / i.duration || 0, e = 1 - d, f = 0, h = i.tweens.length; h > f; f++)i.tweens[f].run(e);
            return g.notifyWith(a, [i, e, c]), 1 > e && h ? c : (g.resolveWith(a, [i]), !1)
        }, i = g.promise({
            elem: a,
            props: $.extend({}, b),
            opts: $.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Vc || F(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = $.Tween(a, i.opts, b, c, i.opts.specialEasing[b] || i.opts.easing);
                return i.tweens.push(d), d
            },
            stop: function (b) {
                for (var c = 0, d = b ? i.tweens.length : 0; d > c; c++)i.tweens[c].run(1);
                return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]), this
            }
        }), j = i.props;
        I(j, i.opts.specialEasing);
        for (; f > e; e++) {
            d = $c[e].call(i, a, j, i.opts);
            if (d)return d
        }
        return G(i, j), $.isFunction(i.opts.start) && i.opts.start.call(a, i), $.fx.timer($.extend(h, {
            anim: i,
            queue: i.opts.queue,
            elem: a
        })), i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
    }

    function I(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = $.camelCase(c), e = b[d], f = a[c], $.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = $.cssHooks[d];
            if (g && "expand"in g) {
                f = g.expand(f), delete a[d];
                for (c in f)c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
        }
    }

    function J(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m = this, n = a.style, o = {}, p = [], q = a.nodeType && r(a);
        c.queue || (k = $._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function () {
            k.unqueued || l()
        }), k.unqueued++, m.always(function () {
            m.always(function () {
                k.unqueued--, $.queue(a, "fx").length || k.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === $.css(a, "display") && "none" === $.css(a, "float") && ($.support.inlineBlockNeedsLayout && "inline" !== w(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", $.support.shrinkWrapBlocks || m.done(function () {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b) {
            f = b[d];
            if (Xc.exec(f)) {
                delete b[d], i = i || "toggle" === f;
                if (f === (q ? "hide" : "show"))continue;
                p.push(d)
            }
        }
        g = p.length;
        if (g) {
            h = $._data(a, "fxshow") || $._data(a, "fxshow", {}), "hidden"in h && (q = h.hidden), i && (h.hidden = !q), q ? $(a).show() : m.done(function () {
                $(a).hide()
            }), m.done(function () {
                var b;
                $.removeData(a, "fxshow", !0);
                for (b in o)$.style(a, b, o[b])
            });
            for (d = 0; g > d; d++)e = p[d], j = m.createTween(e, q ? h[e] : 0), o[e] = h[e] || $.style(a, e), e in h || (h[e] = j.start, q && (j.end = j.start, j.start = "width" === e || "height" === e ? 1 : 0))
        }
    }

    function K(a, b, c, d, e) {
        return new K.prototype.init(a, b, c, d, e)
    }

    function L(a, b) {
        var c, d = {height: a}, e = 0;
        b = b ? 1 : 0;
        for (; 4 > e; e += 2 - b)c = qc[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function M(a) {
        return $.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    var N, O, P = a.document, Q = a.location, R = a.navigator, S = a.jQuery, T = a.$, U = Array.prototype.push, V = Array.prototype.slice, W = Array.prototype.indexOf, X = Object.prototype.toString, Y = Object.prototype.hasOwnProperty, Z = String.prototype.trim, $ = function (a, b) {
        return new $.fn.init(a, b, N)
    }, _ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ab = /\S/, bb = /\s+/, cb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, db = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, eb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, fb = /^[\],:{}\s]*$/, gb = /(?:^|:|,)(?:\s*\[)+/g, hb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, ib = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, jb = /^-ms-/, kb = /-([\da-z])/gi, lb = function (a, b) {
        return (b + "").toUpperCase()
    }, mb = function () {
        P.addEventListener ? (P.removeEventListener("DOMContentLoaded", mb, !1), $.ready()) : "complete" === P.readyState && (P.detachEvent("onreadystatechange", mb), $.ready())
    }, nb = {};
    $.fn = $.prototype = {
        constructor: $, init: function (a, c, d) {
            var e, f, g;
            if (!a)return this;
            if (a.nodeType)return this.context = this[0] = a, this.length = 1, this;
            if ("string" == typeof a) {
                e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : db.exec(a);
                if (e && (e[1] || !c)) {
                    if (e[1])return c = c instanceof $ ? c[0] : c, g = c && c.nodeType ? c.ownerDocument || c : P, a = $.parseHTML(e[1], g, !0), eb.test(e[1]) && $.isPlainObject(c) && this.attr.call(a, c, !0), $.merge(this, a);
                    f = P.getElementById(e[2]);
                    if (f && f.parentNode) {
                        if (f.id !== e[2])return d.find(a);
                        this.length = 1, this[0] = f
                    }
                    return this.context = P, this.selector = a, this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return $.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), $.makeArray(a, this))
        }, selector: "", jquery: "1.8.3", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return V.call(this)
        }, get: function (a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        }, pushStack: function (a, b, c) {
            var d = $.merge(this.constructor(), a);
            return d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
        }, each: function (a, b) {
            return $.each(this, a, b)
        }, ready: function (a) {
            return $.ready.promise().done(a), this
        }, eq: function (a) {
            return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","))
        }, map: function (a) {
            return this.pushStack($.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: U, sort: [].sort, splice: [].splice
    }, $.fn.init.prototype = $.fn, $.extend = $.fn.extend = function () {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        "boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" != typeof h && !$.isFunction(h) && (h = {}), j === i && (h = this, --i);
        for (; j > i; i++)if (null != (a = arguments[i]))for (c in a) {
            d = h[c], e = a[c];
            h !== e && (k && e && ($.isPlainObject(e) || (f = $.isArray(e))) ? (f ? (f = !1, g = d && $.isArray(d) ? d : []) : g = d && $.isPlainObject(d) ? d : {}, h[c] = $.extend(k, g, e)) : e !== b && (h[c] = e))
        }
        return h
    }, $.extend({
        noConflict: function (b) {
            return a.$ === $ && (a.$ = T), b && a.jQuery === $ && (a.jQuery = S), $
        }, isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? $.readyWait++ : $.ready(!0)
        }, ready: function (a) {
            if (a === !0 ? !--$.readyWait : !$.isReady) {
                if (!P.body)return setTimeout($.ready, 1);
                $.isReady = !0;
                a !== !0 && --$.readyWait > 0 || (O.resolveWith(P, [$]), $.fn.trigger && $(P).trigger("ready").off("ready"))
            }
        }, isFunction: function (a) {
            return "function" === $.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === $.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, type: function (a) {
            return null == a ? String(a) : nb[X.call(a)] || "object"
        }, isPlainObject: function (a) {
            if (!a || "object" !== $.type(a) || a.nodeType || $.isWindow(a))return !1;
            try {
                if (a.constructor && !Y.call(a, "constructor") && !Y.call(a.constructor.prototype, "isPrototypeOf"))return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a);
            return d === b || Y.call(a, d)
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, error: function (a) {
            throw new Error(a)
        }, parseHTML: function (a, b, c) {
            var d;
            return a && "string" == typeof a ? ("boolean" == typeof b && (c = b, b = 0), b = b || P, (d = eb.exec(a)) ? [b.createElement(d[1])] : (d = $.buildFragment([a], b, c ? null : []), $.merge([], (d.cacheable ? $.clone(d.fragment) : d.fragment).childNodes))) : null
        }, parseJSON: function (b) {
            if (!b || "string" != typeof b)return null;
            b = $.trim(b);
            if (a.JSON && a.JSON.parse)return a.JSON.parse(b);
            if (fb.test(b.replace(hb, "@").replace(ib, "]").replace(gb, "")))return new Function("return " + b)();
            $.error("Invalid JSON: " + b);
            return void 0
        }, parseXML: function (c) {
            var d, e;
            if (!c || "string" != typeof c)return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && $.error("Invalid XML: " + c), d
        }, noop: function () {
        }, globalEval: function (b) {
            b && ab.test(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(jb, "ms-").replace(kb, lb)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, c, d) {
            var e, f = 0, g = a.length, h = g === b || $.isFunction(a);
            if (d)if (h) {
                for (e in a)if (c.apply(a[e], d) === !1)break
            } else for (; g > f && c.apply(a[f++], d) !== !1;); else if (h) {
                for (e in a)if (c.call(a[e], e, a[e]) === !1)break
            } else for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
            return a
        }, trim: Z && !Z.call("? ") ? function (a) {
            return null == a ? "" : Z.call(a)
        } : function (a) {
            return null == a ? "" : (a + "").replace(cb, "")
        }, makeArray: function (a, b) {
            var c, d = b || [];
            return null != a && (c = $.type(a), null == a.length || "string" === c || "function" === c || "regexp" === c || $.isWindow(a) ? U.call(d, a) : $.merge(d, a)), d
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (W)return W.call(b, a, c);
                d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0;
                for (; d > c; c++)if (c in b && b[c] === a)return c
            }
            return -1
        }, merge: function (a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d)for (; d > f; f++)a[e++] = c[f]; else for (; c[f] !== b;)a[e++] = c[f++];
            return a.length = e, a
        }, grep: function (a, b, c) {
            var d, e = [], f = 0, g = a.length;
            c = !!c;
            for (; g > f; f++)d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        }, map: function (a, c, d) {
            var e, f, g = [], h = 0, i = a.length, j = a instanceof $ || i !== b && "number" == typeof i && (i > 0 && a[0] && a[i - 1] || 0 === i || $.isArray(a));
            if (j)for (; i > h; h++)e = c(a[h], h, d), null != e && (g[g.length] = e); else for (f in a)e = c(a[f], f, d), null != e && (g[g.length] = e);
            return g.concat.apply([], g)
        }, guid: 1, proxy: function (a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c], c = a, a = d), $.isFunction(a) ? (e = V.call(arguments, 2), f = function () {
                return a.apply(c, e.concat(V.call(arguments)))
            }, f.guid = a.guid = a.guid || $.guid++, f) : b
        }, access: function (a, c, d, e, f, g, h) {
            var i, j = null == d, k = 0, l = a.length;
            if (d && "object" == typeof d) {
                for (k in d)$.access(a, c, k, d[k], 1, g, e);
                f = 1
            } else if (e !== b) {
                i = h === b && $.isFunction(e), j && (i ? (i = c, c = function (a, b, c) {
                    return i.call($(a), c)
                }) : (c.call(a, e), c = null));
                if (c)for (; l > k; k++)c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1
            }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
        }, now: function () {
            return (new Date).getTime()
        }
    }), $.ready.promise = function (b) {
        if (!O) {
            O = $.Deferred();
            if ("complete" === P.readyState)setTimeout($.ready, 1); else if (P.addEventListener)P.addEventListener("DOMContentLoaded", mb, !1), a.addEventListener("load", $.ready, !1); else {
                P.attachEvent("onreadystatechange", mb), a.attachEvent("onload", $.ready);
                var c = !1;
                try {
                    c = null == a.frameElement && P.documentElement
                } catch (d) {
                }
                c && c.doScroll && function e() {
                    if (!$.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        $.ready()
                    }
                }()
            }
        }
        return O.promise(b)
    }, $.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
        nb["[object " + b + "]"] = b.toLowerCase()
    }), N = $(P);
    var ob = {};
    $.Callbacks = function (a) {
        a = "string" == typeof a ? ob[a] || c(a) : $.extend({}, a);
        var d, e, f, g, h, i, j = [], k = !a.once && [], l = function (b) {
            d = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0;
            for (; j && h > i; i++)if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                d = !1;
                break
            }
            f = !1, j && (k ? k.length && l(k.shift()) : d ? j = [] : m.disable())
        }, m = {
            add: function () {
                if (j) {
                    var b = j.length;
                    !function c(b) {
                        $.each(b, function (b, d) {
                            var e = $.type(d);
                            "function" === e ? (!a.unique || !m.has(d)) && j.push(d) : d && d.length && "string" !== e && c(d)
                        })
                    }(arguments), f ? h = j.length : d && (g = b, l(d))
                }
                return this
            }, remove: function () {
                return j && $.each(arguments, function (a, b) {
                    for (var c; (c = $.inArray(b, j, c)) > -1;)j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
                }), this
            }, has: function (a) {
                return $.inArray(a, j) > -1
            }, empty: function () {
                return j = [], this
            }, disable: function () {
                return j = k = d = b, this
            }, disabled: function () {
                return !j
            }, lock: function () {
                return k = b, d || m.disable(), this
            }, locked: function () {
                return !k
            }, fireWith: function (a, b) {
                return b = b || [], b = [a, b.slice ? b.slice() : b], j && (!e || k) && (f ? k.push(b) : l(b)), this
            }, fire: function () {
                return m.fireWith(this, arguments), this
            }, fired: function () {
                return !!e
            }
        };
        return m
    }, $.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", $.Callbacks("once memory"), "resolved"], ["reject", "fail", $.Callbacks("once memory"), "rejected"], ["notify", "progress", $.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return $.Deferred(function (c) {
                        $.each(b, function (b, d) {
                            var f = d[0], g = a[b];
                            e[d[1]]($.isFunction(g) ? function () {
                                var a = g.apply(this, arguments);
                                a && $.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                            } : c[f])
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? $.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, $.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b, c, d, e = 0, f = V.call(arguments), g = f.length, h = 1 !== g || a && $.isFunction(a.promise) ? g : 0, i = 1 === h ? a : $.Deferred(), j = function (a, c, d) {
                return function (e) {
                    c[a] = this, d[a] = arguments.length > 1 ? V.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1) {
                b = new Array(g), c = new Array(g), d = new Array(g);
                for (; g > e; e++)f[e] && $.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h
            }
            return h || i.resolveWith(d, f), i.promise()
        }
    }), $.support = function () {
        var b, c, d, e, f, g, h, i, j, k, l, m = P.createElement("div");
        m.setAttribute("className", "t"), m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0];
        if (!c || !d || !c.length)return {};
        e = P.createElement("select"), f = e.appendChild(P.createElement("option")), g = m.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b = {
            leadingWhitespace: 3 === m.firstChild.nodeType,
            tbody: !m.getElementsByTagName("tbody").length,
            htmlSerialize: !!m.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: "on" === g.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== m.className,
            enctype: !!P.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== P.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === P.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
        try {
            delete m.test
        } catch (n) {
            b.deleteExpando = !1
        }
        !m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", l = function () {
            b.noCloneEvent = !1
        }), m.cloneNode(!0).fireEvent("onclick"), m.detachEvent("onclick", l)), g = P.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = P.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m);
        if (m.attachEvent)for (j in{
            submit: !0,
            change: !0,
            focusin: !0
        })i = "on" + j, k = i in m, k || (m.setAttribute(i, "return;"), k = "function" == typeof m[i]), b[j + "Bubbles"] = k;
        return $(function () {
            var c, d, e, f, g = "padding:0;margin:0;border:0;display:block;overflow:hidden;", h = P.getElementsByTagName("body")[0];
            h && (c = P.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", h.insertBefore(c, h.firstChild), d = P.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = d.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", k = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = k && 0 === e[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === d.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(d, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(d, null) || {width: "4px"}).width, f = P.createElement("div"), f.style.cssText = d.style.cssText = g, f.style.marginRight = f.style.width = "0", d.style.width = "1px", d.appendChild(f), b.reliableMarginRight = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== d.offsetWidth, c.style.zoom = 1), h.removeChild(c), c = d = e = f = null)
        }), h.removeChild(m), c = d = e = f = g = h = m = null, b
    }();
    var pb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, qb = /([A-Z])/g;
    $.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + ($.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (a) {
            return a = a.nodeType ? $.cache[a[$.expando]] : a[$.expando], !!a && !e(a)
        },
        data: function (a, c, d, e) {
            if ($.acceptData(a)) {
                var f, g, h = $.expando, i = "string" == typeof c, j = a.nodeType, k = j ? $.cache : a, l = j ? a[h] : a[h] && h;
                if (l && k[l] && (e || k[l].data) || !i || d !== b) {
                    l || (j ? a[h] = l = $.deletedIds.pop() || $.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = $.noop));
                    ("object" == typeof c || "function" == typeof c) && (e ? k[l] = $.extend(k[l], c) : k[l].data = $.extend(k[l].data, c));
                    return f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[$.camelCase(c)] = d), i ? (g = f[c], null == g && (g = f[$.camelCase(c)])) : g = f, g
                }
            }
        },
        removeData: function (a, b, c) {
            if ($.acceptData(a)) {
                var d, f, g, h = a.nodeType, i = h ? $.cache : a, j = h ? a[$.expando] : $.expando;
                if (i[j]) {
                    if (b) {
                        d = c ? i[j] : i[j].data;
                        if (d) {
                            $.isArray(b) || (b in d ? b = [b] : (b = $.camelCase(b), b = b in d ? [b] : b.split(" ")));
                            for (f = 0, g = b.length; g > f; f++)delete d[b[f]];
                            if (!(c ? e : $.isEmptyObject)(d))return
                        }
                    }
                    if (!c) {
                        delete i[j].data;
                        if (!e(i[j]))return
                    }
                    h ? $.cleanData([a], !0) : $.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null
                }
            }
        },
        _data: function (a, b, c) {
            return $.data(a, b, c, !0)
        },
        acceptData: function (a) {
            var b = a.nodeName && $.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), $.fn.extend({
        data: function (a, c) {
            var e, f, g, h, i, j = this[0], k = 0, l = null;
            if (a === b) {
                if (this.length) {
                    l = $.data(j);
                    if (1 === j.nodeType && !$._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; i > k; k++)h = g[k].name, h.indexOf("data-") || (h = $.camelCase(h.substring(5)), d(j, h, l[h]));
                        $._data(j, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return "object" == typeof a ? this.each(function () {
                $.data(this, a)
            }) : (e = a.split(".", 2), e[1] = e[1] ? "." + e[1] : "", f = e[1] + "!", $.access(this, function (c) {
                if (c === b)return l = this.triggerHandler("getData" + f, [e[0]]), l === b && j && (l = $.data(j, a), l = d(j, a, l)), l === b && e[1] ? this.data(e[0]) : l;
                e[1] = c, this.each(function () {
                    var b = $(this);
                    b.triggerHandler("setData" + f, e), $.data(this, a, c), b.triggerHandler("changeData" + f, e)
                });
                return void 0
            }, null, c, arguments.length > 1, null, !1))
        }, removeData: function (a) {
            return this.each(function () {
                $.removeData(this, a)
            })
        }
    }), $.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = $._data(a, b), c && (!d || $.isArray(c) ? d = $._data(a, b, $.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = $.queue(a, b), d = c.length, e = c.shift(), f = $._queueHooks(a, b), g = function () {
                $.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return $._data(a, c) || $._data(a, c, {
                empty: $.Callbacks("once memory").add(function () {
                    $.removeData(a, b + "queue", !0), $.removeData(a, c, !0)
                })
            })
        }
    }), $.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? $.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = $.queue(this, a, c);
                $._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && $.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                $.dequeue(this, a)
            })
        }, delay: function (a, b) {
            return a = $.fx ? $.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            var d, e = 1, f = $.Deferred(), g = this, h = this.length, i = function () {
                --e || f.resolveWith(g, [g])
            };
            "string" != typeof a && (c = a, a = b), a = a || "fx";
            for (; h--;)d = $._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var rb, sb, tb, ub = /[\t\r\n]/g, vb = /\r/g, wb = /^(?:button|input)$/i, xb = /^(?:button|input|object|select|textarea)$/i, yb = /^a(?:rea|)$/i, zb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Ab = $.support.getSetAttribute;
    $.fn.extend({
        attr: function (a, b) {
            return $.access(this, $.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                $.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return $.access(this, $.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = $.propFix[a] || a, this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {
                }
            })
        }, addClass: function (a) {
            var b, c, d, e, f, g, h;
            if ($.isFunction(a))return this.each(function (b) {
                $(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a) {
                b = a.split(bb);
                for (c = 0, d = this.length; d > c; c++) {
                    e = this[c];
                    if (1 === e.nodeType)if (e.className || 1 !== b.length) {
                        f = " " + e.className + " ";
                        for (g = 0, h = b.length; h > g; g++)f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                        e.className = $.trim(f)
                    } else e.className = a
                }
            }
            return this
        }, removeClass: function (a) {
            var c, d, e, f, g, h, i;
            if ($.isFunction(a))return this.each(function (b) {
                $(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a || a === b) {
                c = (a || "").split(bb);
                for (h = 0, i = this.length; i > h; h++) {
                    e = this[h];
                    if (1 === e.nodeType && e.className) {
                        d = (" " + e.className + " ").replace(ub, " ");
                        for (f = 0, g = c.length; g > f; f++)for (; d.indexOf(" " + c[f] + " ") >= 0;)d = d.replace(" " + c[f] + " ", " ");
                        e.className = a ? $.trim(d) : ""
                    }
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = "boolean" == typeof b;
            return $.isFunction(a) ? this.each(function (c) {
                $(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if ("string" === c)for (var e, f = 0, g = $(this), h = b, i = a.split(bb); e = i[f++];)h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e); else("undefined" === c || "boolean" === c) && (this.className && $._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : $._data(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0)return !0;
            return !1
        }, val: function (a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = $.isFunction(a), this.each(function (d) {
                var f, g = $(this);
                if (1 === this.nodeType) {
                    f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : $.isArray(f) && (f = $.map(f, function (a) {
                        return null == a ? "" : a + ""
                    })), c = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()];
                    c && "set"in c && c.set(this, f, "value") !== b || (this.value = f)
                }
            })) : f ? (c = $.valHooks[f.type] || $.valHooks[f.nodeName.toLowerCase()], c && "get"in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(vb, "") : null == d ? "" : d)) : void 0
        }
    }), $.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        c = d[i];
                        if (!(!c.selected && i !== e || ($.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && $.nodeName(c.parentNode, "optgroup"))) {
                            b = $(c).val();
                            if (f)return b;
                            g.push(b)
                        }
                    }
                    return g
                }, set: function (a, b) {
                    var c = $.makeArray(b);
                    return $(a).find("option").each(function () {
                        this.selected = $.inArray($(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function (a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (a && 3 !== i && 8 !== i && 2 !== i) {
                if (e && $.isFunction($.fn[c]))return $(a)[c](d);
                if ("undefined" == typeof a.getAttribute)return $.prop(a, c, d);
                h = 1 !== i || !$.isXMLDoc(a), h && (c = c.toLowerCase(), g = $.attrHooks[c] || (zb.test(c) ? sb : rb));
                if (d !== b) {
                    if (null === d) {
                        $.removeAttr(a, c);
                        return
                    }
                    return g && "set"in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d)
                }
                return g && "get"in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f)
            }
        },
        removeAttr: function (a, b) {
            var c, d, e, f, g = 0;
            if (b && 1 === a.nodeType) {
                d = b.split(bb);
                for (; g < d.length; g++)e = d[g], e && (c = $.propFix[e] || e, f = zb.test(e), f || $.attr(a, e, ""), a.removeAttribute(Ab ? e : c), f && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (wb.test(a.nodeName) && a.parentNode)$.error("type property can't be changed"); else if (!$.support.radioValue && "radio" === b && $.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }, value: {
                get: function (a, b) {
                    return rb && $.nodeName(a, "button") ? rb.get(a, b) : b in a ? a.value : null
                }, set: function (a, b, c) {
                    if (rb && $.nodeName(a, "button"))return rb.set(a, b, c);
                    a.value = b;
                    return void 0
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !$.isXMLDoc(a), g && (c = $.propFix[c] || c, f = $.propHooks[c]), d !== b ? f && "set"in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get"in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : xb.test(a.nodeName) || yb.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), sb = {
        get: function (a, c) {
            var d, e = $.prop(a, c);
            return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        }, set: function (a, b, c) {
            var d;
            return b === !1 ? $.removeAttr(a, c) : (d = $.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, Ab || (tb = {name: !0, id: !0, coords: !0}, rb = $.valHooks.button = {
        get: function (a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (tb[c] ? "" !== d.value : d.specified) ? d.value : b
        }, set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = P.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
        }
    }, $.each(["width", "height"], function (a, b) {
        $.attrHooks[b] = $.extend($.attrHooks[b], {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        })
    }), $.attrHooks.contenteditable = {
        get: rb.get, set: function (a, b, c) {
            "" === b && (b = "false"), rb.set(a, b, c)
        }
    }), $.support.hrefNormalized || $.each(["href", "src", "width", "height"], function (a, c) {
        $.attrHooks[c] = $.extend($.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return null === d ? b : d
            }
        })
    }), $.support.style || ($.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    }), $.support.optSelected || ($.propHooks.selected = $.extend($.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), $.support.enctype || ($.propFix.enctype = "encoding"), $.support.checkOn || $.each(["radio", "checkbox"], function () {
        $.valHooks[this] = {
            get: function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }), $.each(["radio", "checkbox"], function () {
        $.valHooks[this] = $.extend($.valHooks[this], {
            set: function (a, b) {
                return $.isArray(b) ? a.checked = $.inArray($(a).val(), b) >= 0 : void 0
            }
        })
    });
    var Bb = /^(?:textarea|input|select)$/i, Cb = /^([^\.]*|)(?:\.(.+)|)$/, Db = /(?:^|\s)hover(\.\S+|)\b/, Eb = /^key/, Fb = /^(?:mouse|contextmenu)|click/, Gb = /^(?:focusinfocus|focusoutblur)$/, Hb = function (a) {
        return $.event.special.hover ? a : a.replace(Db, "mouseenter$1 mouseleave$1")
    };
    $.event = {
        add: function (a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q;
            if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = $._data(a))) {
                d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = $.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function (a) {
                    return "undefined" == typeof $ || a && $.event.triggered === a.type ? b : $.event.dispatch.apply(h.elem, arguments)
                }, h.elem = a), c = $.trim(Hb(c)).split(" ");
                for (j = 0; j < c.length; j++) {
                    k = Cb.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = $.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = $.event.special[l] || {}, n = $.extend({
                        type: l,
                        origType: k[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && $.expr.match.needsContext.test(f),
                        namespace: m.join(".")
                    }, o), p = i[l];
                    if (!p) {
                        p = i[l] = [], p.delegateCount = 0;
                        q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))
                    }
                    q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), $.event.global[l] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = $.hasData(a) && $._data(a);
            if (q && (m = q.events)) {
                b = $.trim(Hb(b || "")).split(" ");
                for (f = 0; f < b.length; f++) {
                    g = Cb.exec(b[f]) || [], h = i = g[1], j = g[2];
                    if (h) {
                        n = $.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (l = 0; l < o.length; l++)p = o[l], !(!e && i !== p.origType || c && c.guid !== p.guid || j && !j.test(p.namespace) || d && d !== p.selector && ("**" !== d || !p.selector) || (o.splice(l--, 1), p.selector && o.delegateCount--, !n.remove || !n.remove.call(a, p)));
                        0 === o.length && k !== o.length && ((!n.teardown || n.teardown.call(a, j, q.handle) === !1) && $.removeEvent(a, h, q.handle), delete m[h])
                    } else for (h in m)$.event.remove(a, h + b[f], c, d, !0)
                }
                $.isEmptyObject(m) && (delete q.handle, $.removeData(a, "events", !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (c, d, e, f) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var g, h, i, j, k, l, m, n, o, p, q = c.type || c, r = [];
                if (Gb.test(q + $.event.triggered))return;
                q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort());
                if ((!e || $.event.customEvent[q]) && !$.event.global[q])return;
                c = "object" == typeof c ? c[$.expando] ? c : new $.Event(q, c) : new $.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "";
                if (!e) {
                    g = $.cache;
                    for (i in g)g[i].events && g[i].events[q] && $.event.trigger(c, d, g[i].handle.elem, !0);
                    return
                }
                c.result = b, c.target || (c.target = e), d = null != d ? $.makeArray(d) : [], d.unshift(c), m = $.event.special[q] || {};
                if (m.trigger && m.trigger.apply(e, d) === !1)return;
                o = [[e, m.bindType || q]];
                if (!f && !m.noBubble && !$.isWindow(e)) {
                    p = m.delegateType || q, j = Gb.test(p + q) ? e : e.parentNode;
                    for (k = e; j; j = j.parentNode)o.push([j, p]), k = j;
                    k === (e.ownerDocument || P) && o.push([k.defaultView || k.parentWindow || a, p])
                }
                for (i = 0; i < o.length && !c.isPropagationStopped(); i++)j = o[i][0], c.type = o[i][1], n = ($._data(j, "events") || {})[c.type] && $._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && $.acceptData(j) && n.apply && n.apply(j, d) === !1 && c.preventDefault();
                return c.type = q, !(f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === q && $.nodeName(e, "a") || !$.acceptData(e) || !l || !e[q] || ("focus" === q || "blur" === q) && 0 === c.target.offsetWidth || $.isWindow(e) || (k = e[l], k && (e[l] = null), $.event.triggered = q, e[q](), $.event.triggered = b, !k || !(e[l] = k))), c.result
            }
        },
        dispatch: function (c) {
            c = $.event.fix(c || a.event);
            var d, e, f, g, h, i, j, k, l, m = ($._data(this, "events") || {})[c.type] || [], n = m.delegateCount, o = V.call(arguments), p = !c.exclusive && !c.namespace, q = $.event.special[c.type] || {}, r = [];
            o[0] = c, c.delegateTarget = this;
            if (!q.preDispatch || q.preDispatch.call(this, c) !== !1) {
                if (n && (!c.button || "click" !== c.type))for (f = c.target; f != this; f = f.parentNode || this)if (f.disabled !== !0 || "click" !== c.type) {
                    h = {}, j = [];
                    for (d = 0; n > d; d++)k = m[d], l = k.selector, h[l] === b && (h[l] = k.needsContext ? $(l, this).index(f) >= 0 : $.find(l, this, null, [f]).length), h[l] && j.push(k);
                    j.length && r.push({elem: f, matches: j})
                }
                m.length > n && r.push({elem: this, matches: m.slice(n)});
                for (d = 0; d < r.length && !c.isPropagationStopped(); d++) {
                    i = r[d], c.currentTarget = i.elem;
                    for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) {
                        k = i.matches[e];
                        (p || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) && (c.data = k.data, c.handleObj = k, g = (($.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, o), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation())))
                    }
                }
                return q.postDispatch && q.postDispatch.call(this, c), c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var d, e, f, g = c.button, h = c.fromElement;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || P, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[$.expando])return a;
            var b, c, d = a, e = $.event.fixHooks[a.type] || {}, f = e.props ? this.props.concat(e.props) : this.props;
            a = $.Event(d);
            for (b = f.length; b;)c = f[--b], a[c] = d[c];
            return a.target || (a.target = d.srcElement || P), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, d) : a
        },
        special: {
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (a, b, c) {
                    $.isWindow(this) && (this.onbeforeunload = c)
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = $.extend(new $.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? $.event.trigger(e, null, b) : $.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, $.event.handle = $.event.dispatch, $.removeEvent = P.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, $.Event = function (a, b) {
        if (!(this instanceof $.Event))return new $.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? g : f) : this.type = a, b && $.extend(this, b), this.timeStamp = a && a.timeStamp || $.now(), this[$.expando] = !0;
        return void 0
    }, $.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = g;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = g;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = g, this.stopPropagation()
        }, isDefaultPrevented: f, isPropagationStopped: f, isImmediatePropagationStopped: f
    }, $.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        $.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    f.selector
                }
                (!e || e !== d && !$.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b);
                return c
            }
        }
    }), $.support.submitBubbles || ($.event.special.submit = {
        setup: function () {
            if ($.nodeName(this, "form"))return !1;
            $.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target, d = $.nodeName(c, "input") || $.nodeName(c, "button") ? c.form : b;
                d && !$._data(d, "_submit_attached") && ($.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), $._data(d, "_submit_attached", !0))
            });
            return void 0
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && $.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            if ($.nodeName(this, "form"))return !1;
            $.event.remove(this, "._submit");
            return void 0
        }
    }), $.support.changeBubbles || ($.event.special.change = {
        setup: function () {
            if (Bb.test(this.nodeName)) {
                ("checkbox" === this.type || "radio" === this.type) && ($.event.add(this, "propertychange._change", function (a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), $.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), $.event.simulate("change", this, a, !0)
                }));
                return !1
            }
            $.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Bb.test(b.nodeName) && !$._data(b, "_change_attached") && ($.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && $.event.simulate("change", this.parentNode, a, !0)
                }), $._data(b, "_change_attached", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return $.event.remove(this, "._change"), !Bb.test(this.nodeName)
        }
    }), $.support.focusinBubbles || $.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = 0, d = function (a) {
            $.event.simulate(b, a.target, $.event.fix(a), !0)
        };
        $.event.special[b] = {
            setup: function () {
                0 === c++ && P.addEventListener(a, d, !0)
            }, teardown: function () {
                0 === --c && P.removeEventListener(a, d, !0)
            }
        }
    }), $.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a)this.on(i, c, d, a[i], g);
                return this
            }
            null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1)e = f; else if (!e)return this;
            return 1 === g && (h = e, e = function (a) {
                return $().off(a), h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = $.guid++)), this.each(function () {
                $.event.add(this, a, e, d, c)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, c, d) {
            var e, g;
            if (a && a.preventDefault && a.handleObj)return e = a.handleObj, $(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (g in a)this.off(g, c, a[g]);
                return this
            }
            (c === !1 || "function" == typeof c) && (d = c, c = b);
            return d === !1 && (d = f), this.each(function () {
                $.event.remove(this, a, d, c)
            })
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, live: function (a, b, c) {
            return $(this.context).on(a, this.selector, b, c), this
        }, die: function (a, b) {
            return $(this.context).off(a, this.selector || "**", b), this
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }, trigger: function (a, b) {
            return this.each(function () {
                $.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            return this[0] ? $.event.trigger(a, b, this[0], !0) : void 0
        }, toggle: function (a) {
            var b = arguments, c = a.guid || $.guid++, d = 0, e = function (c) {
                var e = ($._data(this, "lastToggle" + a.guid) || 0) % d;
                return $._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            for (; d < b.length;)b[d++].guid = c;
            return this.click(e)
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        $.fn[b] = function (a, c) {
            return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, Eb.test(b) && ($.event.fixHooks[b] = $.event.keyHooks), Fb.test(b) && ($.event.fixHooks[b] = $.event.mouseHooks)
    }), function (a, b) {
        function c(a, b, c, d) {
            c = c || [], b = b || F;
            var e, f, g, h, i = b.nodeType;
            if (!a || "string" != typeof a)return c;
            if (1 !== i && 9 !== i)return [];
            g = v(b);
            if (!g && !d && (e = cb.exec(a)))if (h = e[1]) {
                if (9 === i) {
                    f = b.getElementById(h);
                    if (!f || !f.parentNode)return c;
                    if (f.id === h)return c.push(f), c
                } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && w(b, f) && f.id === h)return c.push(f), c
            } else {
                if (e[2])return K.apply(c, L.call(b.getElementsByTagName(a), 0)), c;
                if ((h = e[3]) && mb && b.getElementsByClassName)return K.apply(c, L.call(b.getElementsByClassName(h), 0)), c
            }
            return p(a.replace(Z, "$1"), b, c, d, g)
        }

        function d(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function e(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function f(a) {
            return N(function (b) {
                return b = +b, N(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function g(a, b, c) {
            if (a === b)return c;
            for (var d = a.nextSibling; d;) {
                if (d === b)return -1;
                d = d.nextSibling
            }
            return 1
        }

        function h(a, b) {
            var d, e, f, g, h, i, j, k = Q[D][a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = t.preFilter;
            for (; h;) {
                (!d || (e = _.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = []));
                d = !1;
                (e = ab.exec(h)) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = e[0].replace(Z, " "));
                for (g in t.filter)(e = hb[g].exec(h)) && (!j[g] || (e = j[g](e))) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = g, d.matches = e);
                if (!d)break
            }
            return b ? h.length : h ? c.error(a) : Q(a, i).slice(0)
        }

        function i(a, b, c) {
            var d = b.dir, e = c && "parentNode" === b.dir, f = I++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];)if (e || 1 === b.nodeType)return a(b, c, f)
            } : function (b, c, g) {
                if (g) {
                    for (; b = b[d];)if ((e || 1 === b.nodeType) && a(b, c, g))return b
                } else for (var h, i = H + " " + f + " ", j = i + r; b = b[d];)if (e || 1 === b.nodeType) {
                    if ((h = b[D]) === j)return b.sizset;
                    if ("string" == typeof h && 0 === h.indexOf(i)) {
                        if (b.sizset)return b
                    } else {
                        b[D] = j;
                        if (a(b, c, g))return b.sizset = !0, b;
                        b.sizset = !1
                    }
                }
            }
        }

        function j(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function k(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function l(a, b, c, d, e, f) {
            return d && !d[D] && (d = l(d)), e && !e[D] && (e = l(e, f)), N(function (f, g, h, i) {
                var j, l, m, n = [], p = [], q = g.length, r = f || o(b || "*", h.nodeType ? [h] : h, []), s = !a || !f && b ? r : k(r, n, a, h, i), t = c ? e || (f ? a : q || d) ? [] : g : s;
                c && c(s, t, h, i);
                if (d) {
                    j = k(t, p), d(j, [], h, i), l = j.length;
                    for (; l--;)(m = j[l]) && (t[p[l]] = !(s[p[l]] = m))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], l = t.length;
                            for (; l--;)(m = t[l]) && j.push(s[l] = m);
                            e(null, t = [], j, i)
                        }
                        l = t.length;
                        for (; l--;)(m = t[l]) && (j = e ? M.call(f, m) : n[l]) > -1 && (f[j] = !(g[j] = m))
                    }
                } else t = k(t === g ? t.splice(q, t.length) : t), e ? e(null, g, t, i) : K.apply(g, t)
            })
        }

        function m(a) {
            for (var b, c, d, e = a.length, f = t.relative[a[0].type], g = f || t.relative[" "], h = f ? 1 : 0, k = i(function (a) {
                return a === b
            }, g, !0), n = i(function (a) {
                return M.call(b, a) > -1
            }, g, !0), o = [function (a, c, d) {
                return !f && (d || c !== A) || ((b = c).nodeType ? k(a, c, d) : n(a, c, d))
            }]; e > h; h++)if (c = t.relative[a[h].type])o = [i(j(o), c)]; else {
                c = t.filter[a[h].type].apply(null, a[h].matches);
                if (c[D]) {
                    d = ++h;
                    for (; e > d && !t.relative[a[d].type]; d++);
                    return l(h > 1 && j(o), h > 1 && a.slice(0, h - 1).join("").replace(Z, "$1"), c, d > h && m(a.slice(h, d)), e > d && m(a = a.slice(d)), e > d && a.join(""))
                }
                o.push(c)
            }
            return j(o)
        }

        function n(a, b) {
            var d = b.length > 0, e = a.length > 0, f = function (g, h, i, j, l) {
                var m, n, o, p = [], q = 0, s = "0", u = g && [], v = null != l, w = A, x = g || e && t.find.TAG("*", l && h.parentNode || h), y = H += null == w ? 1 : Math.E;
                v && (A = h !== F && h, r = f.el);
                for (; null != (m = x[s]); s++) {
                    if (e && m) {
                        for (n = 0; o = a[n]; n++)if (o(m, h, i)) {
                            j.push(m);
                            break
                        }
                        v && (H = y, r = ++f.el)
                    }
                    d && ((m = !o && m) && q--, g && u.push(m))
                }
                q += s;
                if (d && s !== q) {
                    for (n = 0; o = b[n]; n++)o(u, p, h, i);
                    if (g) {
                        if (q > 0)for (; s--;)!u[s] && !p[s] && (p[s] = J.call(j));
                        p = k(p)
                    }
                    K.apply(j, p), v && !g && p.length > 0 && q + b.length > 1 && c.uniqueSort(j)
                }
                return v && (H = y, A = w), u
            };
            return f.el = 0, d ? N(f) : f
        }

        function o(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++)c(a, b[e], d);
            return d
        }

        function p(a, b, c, d, e) {
            {
                var f, g, i, j, k, l = h(a);
                l.length
            }
            if (!d && 1 === l.length) {
                g = l[0] = l[0].slice(0);
                if (g.length > 2 && "ID" === (i = g[0]).type && 9 === b.nodeType && !e && t.relative[g[1].type]) {
                    b = t.find.ID(i.matches[0].replace(gb, ""), b, e)[0];
                    if (!b)return c;
                    a = a.slice(g.shift().length)
                }
                for (f = hb.POS.test(a) ? -1 : g.length - 1; f >= 0; f--) {
                    i = g[f];
                    if (t.relative[j = i.type])break;
                    if ((k = t.find[j]) && (d = k(i.matches[0].replace(gb, ""), db.test(g[0].type) && b.parentNode || b, e))) {
                        g.splice(f, 1), a = d.length && g.join("");
                        if (!a)return K.apply(c, L.call(d, 0)), c;
                        break
                    }
                }
            }
            return x(a, l)(d, b, e, c, db.test(a)), c
        }

        function q() {
        }

        var r, s, t, u, v, w, x, y, z, A, B = !0, C = "undefined", D = ("sizcache" + Math.random()).replace(".", ""), E = String, F = a.document, G = F.documentElement, H = 0, I = 0, J = [].pop, K = [].push, L = [].slice, M = [].indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
                return -1
            }, N = function (a, b) {
            return a[D] = null == b || b, a
        }, O = function () {
            var a = {}, b = [];
            return N(function (c, d) {
                return b.push(c) > t.cacheLength && delete a[b.shift()], a[c + " "] = d
            }, a)
        }, P = O(), Q = O(), R = O(), S = "[\\x20\\t\\r\\n\\f]", T = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", U = T.replace("w", "w#"), V = "([*^$|!~]?=)", W = "\\[" + S + "*(" + T + ")" + S + "*(?:" + V + S + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + S + "*\\]", X = ":(" + T + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + W + ")|[^:]|\\\\.)*|.*))\\)|)", Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + S + "*((?:-\\d)?\\d*)" + S + "*\\)|)(?=[^-]|$)", Z = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$", "g"), _ = new RegExp("^" + S + "*," + S + "*"), ab = new RegExp("^" + S + "*([\\x20\\t\\r\\n\\f>+~])" + S + "*"), bb = new RegExp(X), cb = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, db = /[\x20\t\r\n\f]*[+~]/, eb = /h\d/i, fb = /input|select|textarea|button/i, gb = /\\(?!\\)/g, hb = {
            ID: new RegExp("^#(" + T + ")"),
            CLASS: new RegExp("^\\.(" + T + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + T + ")['\"]?\\]"),
            TAG: new RegExp("^(" + T.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + X),
            POS: new RegExp(Y, "i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)", "i"),
            needsContext: new RegExp("^" + S + "*[>+~]|" + Y, "i")
        }, ib = function (a) {
            var b = F.createElement("div");
            try {
                return a(b)
            } catch (c) {
                return !1
            } finally {
                b = null
            }
        }, jb = ib(function (a) {
            return a.appendChild(F.createComment("")), !a.getElementsByTagName("*").length
        }), kb = ib(function (a) {
            return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== C && "#" === a.firstChild.getAttribute("href")
        }), lb = ib(function (a) {
            a.innerHTML = "<select></select>";
            var b = typeof a.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }), mb = ib(function (a) {
            return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
        }), nb = ib(function (a) {
            a.id = D + 0, a.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>", G.insertBefore(a, G.firstChild);
            var b = F.getElementsByName && F.getElementsByName(D).length === 2 + F.getElementsByName(D + 0).length;
            return s = !F.getElementById(D), G.removeChild(a), b
        });
        try {
            L.call(G.childNodes, 0)[0].nodeType
        } catch (ob) {
            L = function (a) {
                for (var b, c = []; b = this[a]; a++)c.push(b);
                return c
            }
        }
        c.matches = function (a, b) {
            return c(a, null, null, b)
        }, c.matchesSelector = function (a, b) {
            return c(b, null, null, [a]).length > 0
        }, u = c.getText = function (a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += u(a)
                } else if (3 === e || 4 === e)return a.nodeValue
            } else for (; b = a[d]; d++)c += u(b);
            return c
        }, v = c.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, w = c.contains = G.contains ? function (a, b) {
            var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
            return a === d || !!(d && 1 === d.nodeType && c.contains && c.contains(d))
        } : G.compareDocumentPosition ? function (a, b) {
            return b && !!(16 & a.compareDocumentPosition(b))
        } : function (a, b) {
            for (; b = b.parentNode;)if (b === a)return !0;
            return !1
        }, c.attr = function (a, b) {
            var c, d = v(a);
            return d || (b = b.toLowerCase()), (c = t.attrHandle[b]) ? c(a) : d || lb ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? "boolean" == typeof a[b] ? a[b] ? b : null : c.specified ? c.value : null : null)
        }, t = c.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: hb,
            attrHandle: kb ? {} : {
                href: function (a) {
                    return a.getAttribute("href", 2)
                }, type: function (a) {
                    return a.getAttribute("type")
                }
            },
            find: {
                ID: s ? function (a, b, c) {
                    if (typeof b.getElementById !== C && !c) {
                        var d = b.getElementById(a);
                        return d && d.parentNode ? [d] : []
                    }
                } : function (a, c, d) {
                    if (typeof c.getElementById !== C && !d) {
                        var e = c.getElementById(a);
                        return e ? e.id === a || typeof e.getAttributeNode !== C && e.getAttributeNode("id").value === a ? [e] : b : []
                    }
                }, TAG: jb ? function (a, b) {
                    return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
                } : function (a, b) {
                    var c = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (var d, e = [], f = 0; d = c[f]; f++)1 === d.nodeType && e.push(d);
                        return e
                    }
                    return c
                }, NAME: nb && function (a, b) {
                    return typeof b.getElementsByName !== C ? b.getElementsByName(name) : void 0
                }, CLASS: mb && function (a, b, c) {
                    return typeof b.getElementsByClassName === C || c ? void 0 : b.getElementsByClassName(a)
                }
            },
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(gb, ""), a[3] = (a[4] || a[5] || "").replace(gb, ""), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1] ? (a[2] || c.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])), a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && c.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c;
                    if (hb.CHILD.test(a[0]))return null;
                    a[3] ? a[2] = a[3] : (b = a[4]) && (bb.test(b) && (c = h(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b);
                    return a.slice(0, 3)
                }
            },
            filter: {
                ID: s ? function (a) {
                    return a = a.replace(gb, ""), function (b) {
                        return b.getAttribute("id") === a
                    }
                } : function (a) {
                    return a = a.replace(gb, ""), function (b) {
                        var c = typeof b.getAttributeNode !== C && b.getAttributeNode("id");
                        return c && c.value === a
                    }
                }, TAG: function (a) {
                    return "*" === a ? function () {
                        return !0
                    } : (a = a.replace(gb, "").toLowerCase(), function (b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    })
                }, CLASS: function (a) {
                    var b = P[D][a + " "];
                    return b || (b = new RegExp("(^|" + S + ")" + a + "(" + S + "|$)")) && P(a, function (a) {
                        return b.test(a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, b, d) {
                    return function (e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.substr(f.length - d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.substr(0, d.length + 1) === d + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d) {
                    return "nth" === a ? function (a) {
                        var b, e, f = a.parentNode;
                        if (1 === c && 0 === d)return !0;
                        if (f) {
                            e = 0;
                            for (b = f.firstChild; b; b = b.nextSibling)if (1 === b.nodeType) {
                                e++;
                                if (a === b)break
                            }
                        }
                        return e -= d, e === c || e % c === 0 && e / c >= 0
                    } : function (b) {
                        var c = b;
                        switch (a) {
                            case"only":
                            case"first":
                                for (; c = c.previousSibling;)if (1 === c.nodeType)return !1;
                                if ("first" === a)return !0;
                                c = b;
                            case"last":
                                for (; c = c.nextSibling;)if (1 === c.nodeType)return !1;
                                return !0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var d, e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return e[D] ? e(b) : e.length > 1 ? (d = [a, a, "", b], t.setFilters.hasOwnProperty(a.toLowerCase()) ? N(function (a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;)d = M.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, d)
                    }) : e
                }
            },
            pseudos: {
                not: N(function (a) {
                    var b = [], c = [], d = x(a.replace(Z, "$1"));
                    return d[D] ? N(function (a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: N(function (a) {
                    return function (b) {
                        return c(a, b).length > 0
                    }
                }),
                contains: N(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || u(b)).indexOf(a) > -1
                    }
                }),
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                parent: function (a) {
                    return !t.pseudos.empty(a)
                },
                empty: function (a) {
                    var b;
                    a = a.firstChild;
                    for (; a;) {
                        if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b)return !1;
                        a = a.nextSibling
                    }
                    return !0
                },
                header: function (a) {
                    return eb.test(a.nodeName)
                },
                text: function (a) {
                    var b, c;
                    return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b)
                },
                radio: d("radio"),
                checkbox: d("checkbox"),
                file: d("file"),
                password: d("password"),
                image: d("image"),
                submit: e("submit"),
                reset: e("reset"),
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                input: function (a) {
                    return fb.test(a.nodeName)
                },
                focus: function (a) {
                    var b = a.ownerDocument;
                    return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                active: function (a) {
                    return a === a.ownerDocument.activeElement
                },
                first: f(function () {
                    return [0]
                }),
                last: f(function (a, b) {
                    return [b - 1]
                }),
                eq: f(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: f(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }),
                odd: f(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }),
                lt: f(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }),
                gt: f(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, y = G.compareDocumentPosition ? function (a, b) {
            return a === b ? (z = !0, 0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1
        } : function (a, b) {
            if (a === b)return z = !0, 0;
            if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], h = a.parentNode, i = b.parentNode, j = h;
            if (h === i)return g(a, b);
            if (!h)return -1;
            if (!i)return 1;
            for (; j;)e.unshift(j), j = j.parentNode;
            j = i;
            for (; j;)f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; c > k && d > k; k++)if (e[k] !== f[k])return g(e[k], f[k]);
            return k === c ? g(a, f[k], -1) : g(e[k], b, 1)
        }, [0, 0].sort(y), B = !z, c.uniqueSort = function (a) {
            var b, c = [], d = 1, e = 0;
            z = B, a.sort(y);
            if (z) {
                for (; b = a[d]; d++)b === a[d - 1] && (e = c.push(d));
                for (; e--;)a.splice(c[e], 1)
            }
            return a
        }, c.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, x = c.compile = function (a, b) {
            var c, d = [], e = [], f = R[D][a + " "];
            if (!f) {
                b || (b = h(a)), c = b.length;
                for (; c--;)f = m(b[c]), f[D] ? d.push(f) : e.push(f);
                f = R(a, n(e, d))
            }
            return f
        }, F.querySelectorAll && function () {
            var a, b = p, d = /'|\\/g, e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, f = [":focus"], g = [":active"], i = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector;
            ib(function (a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || f.push("\\[" + S + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || f.push(":checked")
            }), ib(function (a) {
                a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && f.push("[*^$]=" + S + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled")
            }), f = new RegExp(f.join("|")), p = function (a, c, e, g, i) {
                if (!g && !i && !f.test(a)) {
                    var j, k, l = !0, m = D, n = c, o = 9 === c.nodeType && a;
                    if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                        j = h(a), (l = c.getAttribute("id")) ? m = l.replace(d, "\\$&") : c.setAttribute("id", m), m = "[id='" + m + "'] ", k = j.length;
                        for (; k--;)j[k] = m + j[k].join("");
                        n = db.test(a) && c.parentNode || c, o = j.join(",")
                    }
                    if (o)try {
                        return K.apply(e, L.call(n.querySelectorAll(o), 0)), e
                    } catch (p) {
                    } finally {
                        l || c.removeAttribute("id")
                    }
                }
                return b(a, c, e, g, i)
            }, i && (ib(function (b) {
                a = i.call(b, "div");
                try {
                    i.call(b, "[test!='']:sizzle"), g.push("!=", X)
                } catch (c) {
                }
            }), g = new RegExp(g.join("|")), c.matchesSelector = function (b, d) {
                d = d.replace(e, "='$1']");
                if (!v(b) && !g.test(d) && !f.test(d))try {
                    var h = i.call(b, d);
                    if (h || a || b.document && 11 !== b.document.nodeType)return h
                } catch (j) {
                }
                return c(d, null, null, [b]).length > 0
            })
        }(), t.pseudos.nth = t.pseudos.eq, t.filters = q.prototype = t.pseudos, t.setFilters = new q, c.attr = $.attr, $.find = c, $.expr = c.selectors, $.expr[":"] = $.expr.pseudos, $.unique = c.uniqueSort, $.text = c.getText, $.isXMLDoc = c.isXML, $.contains = c.contains
    }(a);
    var Ib = /Until$/, Jb = /^(?:parents|prev(?:Until|All))/, Kb = /^.[^:#\[\.,]*$/, Lb = $.expr.match.needsContext, Mb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    $.fn.extend({
        find: function (a) {
            var b, c, d, e, f, g, h = this;
            if ("string" != typeof a)return $(a).filter(function () {
                for (b = 0, c = h.length; c > b; b++)if ($.contains(h[b], this))return !0
            });
            g = this.pushStack("", "find", a);
            for (b = 0, c = this.length; c > b; b++) {
                d = g.length, $.find(a, this[b], g);
                if (b > 0)for (e = d; e < g.length; e++)for (f = 0; d > f; f++)if (g[f] === g[e]) {
                    g.splice(e--, 1);
                    break
                }
            }
            return g
        }, has: function (a) {
            var b, c = $(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)if ($.contains(this, c[b]))return !0
            })
        }, not: function (a) {
            return this.pushStack(j(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(j(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && ("string" == typeof a ? Lb.test(a) ? $(a, this.context).index(this[0]) >= 0 : $.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Lb.test(a) || "string" != typeof a ? $(a, b || this.context) : 0; e > d; d++) {
                c = this[d];
                for (; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                    if (g ? g.index(c) > -1 : $.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            }
            return f = f.length > 1 ? $.unique(f) : f, this.pushStack(f, "closest", a)
        }, index: function (a) {
            return a ? "string" == typeof a ? $.inArray(this[0], $(a)) : $.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        }, add: function (a, b) {
            var c = "string" == typeof a ? $(a, b) : $.makeArray(a && a.nodeType ? [a] : a), d = $.merge(this.get(), c);
            return this.pushStack(h(c[0]) || h(d[0]) ? d : $.unique(d))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), $.fn.andSelf = $.fn.addBack, $.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return $.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return $.dir(a, "parentNode", c)
        }, next: function (a) {
            return i(a, "nextSibling")
        }, prev: function (a) {
            return i(a, "previousSibling")
        }, nextAll: function (a) {
            return $.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return $.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return $.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return $.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return $.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return $.sibling(a.firstChild)
        }, contents: function (a) {
            return $.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : $.merge([], a.childNodes)
        }
    }, function (a, b) {
        $.fn[a] = function (c, d) {
            var e = $.map(this, b, c);
            return Ib.test(a) || (d = c), d && "string" == typeof d && (e = $.filter(d, e)), e = this.length > 1 && !Mb[a] ? $.unique(e) : e, this.length > 1 && Jb.test(a) && (e = e.reverse()), this.pushStack(e, a, V.call(arguments).join(","))
        }
    }), $.extend({
        filter: function (a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? $.find.matchesSelector(b[0], a) ? [b[0]] : [] : $.find.matches(a, b)
        }, dir: function (a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !$(f).is(d));)1 === f.nodeType && e.push(f), f = f[c];
            return e
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Nb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ob = / jQuery\d+="(?:null|\d+)"/g, Pb = /^\s+/, Qb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Rb = /<([\w:]+)/, Sb = /<tbody/i, Tb = /<|&#?\w+;/, Ub = /<(?:script|style|link)/i, Vb = /<(?:script|object|embed|option|style)/i, Wb = new RegExp("<(?:" + Nb + ")[\\s/>]", "i"), Xb = /^(?:checkbox|radio)$/, Yb = /checked\s*(?:[^=]|=\s*.checked.)/i, Zb = /\/(java|ecma)script/i, $b = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, _b = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }, ac = k(P), bc = ac.appendChild(P.createElement("div"));
    _b.optgroup = _b.option, _b.tbody = _b.tfoot = _b.colgroup = _b.caption = _b.thead, _b.th = _b.td, $.support.htmlSerialize || (_b._default = [1, "X<div>", "</div>"]), $.fn.extend({
        text: function (a) {
            return $.access(this, function (a) {
                return a === b ? $.text(this) : this.empty().append((this[0] && this[0].ownerDocument || P).createTextNode(a))
            }, null, a, arguments.length)
        }, wrapAll: function (a) {
            if ($.isFunction(a))return this.each(function (b) {
                $(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = $(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return $.isFunction(a) ? this.each(function (b) {
                $(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = $(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = $.isFunction(a);
            return this.each(function (c) {
                $(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                $.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (!h(this[0]))return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = $.clean(arguments);
                return this.pushStack($.merge(a, this), "before", this.selector)
            }
        }, after: function () {
            if (!h(this[0]))return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = $.clean(arguments);
                return this.pushStack($.merge(this, a), "after", this.selector)
            }
        }, remove: function (a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)(!a || $.filter(a, [c]).length) && (!b && 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), $.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && $.cleanData(a.getElementsByTagName("*"));
                for (; a.firstChild;)a.removeChild(a.firstChild)
            }
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return $.clone(this, a, b)
            })
        }, html: function (a) {
            return $.access(this, function (a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b)return 1 === c.nodeType ? c.innerHTML.replace(Ob, "") : b;
                if (!("string" != typeof a || Ub.test(a) || !$.support.htmlSerialize && Wb.test(a) || !$.support.leadingWhitespace && Pb.test(a) || _b[(Rb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Qb, "<$1></$2>");
                    try {
                        for (; e > d; d++)c = this[d] || {}, 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (f) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function (a) {
            return h(this[0]) ? this.length ? this.pushStack($($.isFunction(a) ? a() : a), "replaceWith", a) : this : $.isFunction(a) ? this.each(function (b) {
                var c = $(this), d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = $(a).detach()), this.each(function () {
                var b = this.nextSibling, c = this.parentNode;
                $(this).remove(), b ? $(b).before(a) : $(c).append(a)
            }))
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, d) {
            a = [].concat.apply([], a);
            var e, f, g, h, i = 0, j = a[0], k = [], m = this.length;
            if (!$.support.checkClone && m > 1 && "string" == typeof j && Yb.test(j))return this.each(function () {
                $(this).domManip(a, c, d)
            });
            if ($.isFunction(j))return this.each(function (e) {
                var f = $(this);
                a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
            });
            if (this[0]) {
                e = $.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, 1 === g.childNodes.length && (g = f);
                if (f) {
                    c = c && $.nodeName(f, "tr");
                    for (h = e.cacheable || m - 1; m > i; i++)d.call(c && $.nodeName(this[i], "table") ? l(this[i], "tbody") : this[i], i === h ? g : $.clone(g, !0, !0))
                }
                g = f = null, k.length && $.each(k, function (a, b) {
                    b.src ? $.ajax ? $.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : $.error("no ajax") : $.globalEval((b.text || b.textContent || b.innerHTML || "").replace($b, "")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), $.buildFragment = function (a, c, d) {
        var e, f, g, h = a[0];
        return c = c || P, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, 1 === a.length && "string" == typeof h && h.length < 512 && c === P && "<" === h.charAt(0) && !Vb.test(h) && ($.support.checkClone || !Yb.test(h)) && ($.support.html5Clone || !Wb.test(h)) && (f = !0, e = $.fragments[h], g = e !== b), e || (e = c.createDocumentFragment(), $.clean(a, c, e, d), f && ($.fragments[h] = g && e)), {
            fragment: e,
            cacheable: f
        }
    }, $.fragments = {}, $.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        $.fn[a] = function (c) {
            var d, e = 0, f = [], g = $(c), h = g.length, i = 1 === this.length && this[0].parentNode;
            if ((null == i || i && 11 === i.nodeType && 1 === i.childNodes.length) && 1 === h)return g[b](this[0]), this;
            for (; h > e; e++)d = (e > 0 ? this.clone(!0) : this).get(), $(g[e])[b](d), f = f.concat(d);
            return this.pushStack(f, a, g.selector)
        }
    }), $.extend({
        clone: function (a, b, c) {
            var d, e, f, g;
            $.support.html5Clone || $.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bc.innerHTML = a.outerHTML, bc.removeChild(g = bc.firstChild));
            if (!($.support.noCloneEvent && $.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || $.isXMLDoc(a))) {
                n(a, g), d = o(a), e = o(g);
                for (f = 0; d[f]; ++f)e[f] && n(d[f], e[f])
            }
            if (b) {
                m(a, g);
                if (c) {
                    d = o(a), e = o(g);
                    for (f = 0; d[f]; ++f)m(d[f], e[f])
                }
            }
            return d = e = null, g
        }, clean: function (a, b, c, d) {
            var e, f, g, h, i, j, l, m, n, o, q, r = b === P && ac, s = [];
            b && "undefined" != typeof b.createDocumentFragment || (b = P);
            for (e = 0; null != (g = a[e]); e++) {
                "number" == typeof g && (g += "");
                if (g) {
                    if ("string" == typeof g)if (Tb.test(g)) {
                        r = r || k(b), l = b.createElement("div"), r.appendChild(l), g = g.replace(Qb, "<$1></$2>"), h = (Rb.exec(g) || ["", ""])[1].toLowerCase(), i = _b[h] || _b._default, j = i[0], l.innerHTML = i[1] + g + i[2];
                        for (; j--;)l = l.lastChild;
                        if (!$.support.tbody) {
                            m = Sb.test(g), n = "table" !== h || m ? "<table>" !== i[1] || m ? [] : l.childNodes : l.firstChild && l.firstChild.childNodes;
                            for (f = n.length - 1; f >= 0; --f)$.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f])
                        }
                        !$.support.leadingWhitespace && Pb.test(g) && l.insertBefore(b.createTextNode(Pb.exec(g)[0]), l.firstChild), g = l.childNodes, l.parentNode.removeChild(l)
                    } else g = b.createTextNode(g);
                    g.nodeType ? s.push(g) : $.merge(s, g)
                }
            }
            l && (g = l = r = null);
            if (!$.support.appendChecked)for (e = 0; null != (g = s[e]); e++)$.nodeName(g, "input") ? p(g) : "undefined" != typeof g.getElementsByTagName && $.grep(g.getElementsByTagName("input"), p);
            if (c) {
                o = function (a) {
                    return !a.type || Zb.test(a.type) ? d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a) : void 0
                };
                for (e = 0; null != (g = s[e]); e++)$.nodeName(g, "script") && o(g) || (c.appendChild(g), "undefined" != typeof g.getElementsByTagName && (q = $.grep($.merge([], g.getElementsByTagName("script")), o), s.splice.apply(s, [e + 1, 0].concat(q)), e += q.length))
            }
            return s
        }, cleanData: function (a, b) {
            for (var c, d, e, f, g = 0, h = $.expando, i = $.cache, j = $.support.deleteExpando, k = $.event.special; null != (e = a[g]); g++)if (b || $.acceptData(e)) {
                d = e[h], c = d && i[d];
                if (c) {
                    if (c.events)for (f in c.events)k[f] ? $.event.remove(e, f) : $.removeEvent(e, f, c.handle);
                    i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, $.deletedIds.push(d))
                }
            }
        }
    }), function () {
        var a, b;
        $.uaMatch = function (a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {browser: b[1] || "", version: b[2] || "0"}
        }, a = $.uaMatch(R.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), $.browser = b, $.sub = function () {
            function a(b, c) {
                return new a.fn.init(b, c)
            }

            $.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (c, d) {
                return d && d instanceof $ && !(d instanceof a) && (d = a(d)), $.fn.init.call(this, c, d, b)
            }, a.fn.init.prototype = a.fn;
            var b = a(P);
            return a
        }
    }();
    var cc, dc, ec, fc = /alpha\([^)]*\)/i, gc = /opacity=([^)]*)/, hc = /^(top|right|bottom|left)$/, ic = /^(none|table(?!-c[ea]).+)/, jc = /^margin/, kc = new RegExp("^(" + _ + ")(.*)$", "i"), lc = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"), mc = new RegExp("^([-+])=(" + _ + ")", "i"), nc = {BODY: "block"}, oc = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, pc = {
        letterSpacing: 0,
        fontWeight: 400
    }, qc = ["Top", "Right", "Bottom", "Left"], rc = ["Webkit", "O", "Moz", "ms"], sc = $.fn.toggle;
    $.fn.extend({
        css: function (a, c) {
            return $.access(this, function (a, c, d) {
                return d !== b ? $.style(a, c, d) : $.css(a, c)
            }, a, c, arguments.length > 1)
        }, show: function () {
            return s(this, !0)
        }, hide: function () {
            return s(this)
        }, toggle: function (a, b) {
            var c = "boolean" == typeof a;
            return $.isFunction(a) && $.isFunction(b) ? sc.apply(this, arguments) : this.each(function () {
                (c ? a : r(this)) ? $(this).show() : $(this).hide()
            })
        }
    }), $.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = cc(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": $.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = $.camelCase(c), j = a.style;
                c = $.cssProps[i] || ($.cssProps[i] = q(j, i)), h = $.cssHooks[c] || $.cssHooks[i];
                if (d === b)return h && "get"in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                g = typeof d, "string" === g && (f = mc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat($.css(a, c)), g = "number");
                if (!(null == d || "number" === g && isNaN(d))) {
                    "number" === g && !$.cssNumber[i] && (d += "px");
                    if (!(h && "set"in h && (d = h.set(a, d, e)) === b))try {
                        j[c] = d
                    } catch (k) {
                    }
                }
            }
        },
        css: function (a, c, d, e) {
            var f, g, h, i = $.camelCase(c);
            return c = $.cssProps[i] || ($.cssProps[i] = q(a.style, i)), h = $.cssHooks[c] || $.cssHooks[i], h && "get"in h && (f = h.get(a, !0, e)), f === b && (f = cc(a, c)), "normal" === f && c in pc && (f = pc[c]), d || e !== b ? (g = parseFloat(f), d || $.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function (a, b, c) {
            var d, e, f = {};
            for (e in b)f[e] = a.style[e], a.style[e] = b[e];
            d = c.call(a);
            for (e in b)a.style[e] = f[e];
            return d
        }
    }), a.getComputedStyle ? cc = function (b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null), i = b.style;
        return h && (d = h.getPropertyValue(c) || h[c], "" === d && !$.contains(b.ownerDocument, b) && (d = $.style(b, c)), lc.test(d) && jc.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
    } : P.documentElement.currentStyle && (cc = function (a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b], f = a.style;
        return null == e && f && f[b] && (e = f[b]), lc.test(e) && !hc.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), "" === e ? "auto" : e
    }), $.each(["height", "width"], function (a, b) {
        $.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? 0 === a.offsetWidth && ic.test(cc(a, "display")) ? $.swap(a, oc, function () {
                    return v(a, b, d)
                }) : v(a, b, d) : void 0
            }, set: function (a, c, d) {
                return t(a, c, d ? u(a, b, d, $.support.boxSizing && "border-box" === $.css(a, "boxSizing")) : 0)
            }
        }
    }), $.support.opacity || ($.cssHooks.opacity = {
        get: function (a, b) {
            return gc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = $.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && "" === $.trim(f.replace(fc, "")) && c.removeAttribute) {
                c.removeAttribute("filter");
                if (d && !d.filter)return
            }
            c.filter = fc.test(f) ? f.replace(fc, e) : f + " " + e
        }
    }), $(function () {
        $.support.reliableMarginRight || ($.cssHooks.marginRight = {
            get: function (a, b) {
                return $.swap(a, {display: "inline-block"}, function () {
                    return b ? cc(a, "marginRight") : void 0
                })
            }
        }), !$.support.pixelPosition && $.fn.position && $.each(["top", "left"], function (a, b) {
            $.cssHooks[b] = {
                get: function (a, c) {
                    if (c) {
                        var d = cc(a, b);
                        return lc.test(d) ? $(a).position()[b] + "px" : d
                    }
                }
            }
        })
    }), $.expr && $.expr.filters && ($.expr.filters.hidden = function (a) {
        return 0 === a.offsetWidth && 0 === a.offsetHeight || !$.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || cc(a, "display"))
    }, $.expr.filters.visible = function (a) {
        return !$.expr.filters.hidden(a)
    }), $.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        $.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = "string" == typeof c ? c.split(" ") : [c], f = {};
                for (d = 0; 4 > d; d++)f[a + qc[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }, jc.test(a) || ($.cssHooks[a + b].set = t)
    });
    var tc = /%20/g, uc = /\[\]$/, vc = /\r?\n/g, wc = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, xc = /^(?:select|textarea)/i;
    $.fn.extend({
        serialize: function () {
            return $.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? $.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || xc.test(this.nodeName) || wc.test(this.type))
            }).map(function (a, b) {
                var c = $(this).val();
                return null == c ? null : $.isArray(c) ? $.map(c, function (a) {
                    return {name: b.name, value: a.replace(vc, "\r\n")}
                }) : {name: b.name, value: c.replace(vc, "\r\n")}
            }).get()
        }
    }), $.param = function (a, c) {
        var d, e = [], f = function (a, b) {
            b = $.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        c === b && (c = $.ajaxSettings && $.ajaxSettings.traditional);
        if ($.isArray(a) || a.jquery && !$.isPlainObject(a))$.each(a, function () {
            f(this.name, this.value)
        }); else for (d in a)x(d, a[d], c, f);
        return e.join("&").replace(tc, "+")
    };
    var yc, zc, Ac = /#.*$/, Bc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cc = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Dc = /^(?:GET|HEAD)$/, Ec = /^\/\//, Fc = /\?/, Gc = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Hc = /([?&])_=[^&]*/, Ic = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Jc = $.fn.load, Kc = {}, Lc = {}, Mc = ["*/"] + ["*"];
    try {
        zc = Q.href
    } catch (Nc) {
        zc = P.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Ic.exec(zc.toLowerCase()) || [], $.fn.load = function (a, c, d) {
        if ("string" != typeof a && Jc)return Jc.apply(this, arguments);
        if (!this.length)return this;
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), $.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), $.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function (a, b) {
                d && h.each(d, g || [a.responseText, b, a])
            }
        }).done(function (a) {
            g = arguments, h.html(e ? $("<div>").append(a.replace(Gc, "")).find(e) : a)
        }), this
    }, $.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        $.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), $.each(["get", "post"], function (a, c) {
        $[c] = function (a, d, e, f) {
            return $.isFunction(d) && (f = f || e, e = d, d = b), $.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), $.extend({
        getScript: function (a, c) {
            return $.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return $.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            return b ? A(a, $.ajaxSettings) : (b = a, a = $.ajaxSettings), A(a, b), a
        },
        ajaxSettings: {
            url: zc,
            isLocal: Cc.test(yc[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Mc
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": a.String, "text html": !0, "text json": $.parseJSON, "text xml": $.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: y(Kc),
        ajaxTransport: y(Lc),
        ajax: function (a, c) {
            function d(a, c, d, g) {
                var j, l, s, t, v, x = c;
                if (2 !== u) {
                    u = 2, i && clearTimeout(i), h = b, f = g || "", w.readyState = a > 0 ? 4 : 0, d && (t = B(m, w, d));
                    if (a >= 200 && 300 > a || 304 === a)m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && ($.lastModified[e] = v), v = w.getResponseHeader("Etag"), v && ($.etag[e] = v)), 304 === a ? (x = "notmodified", j = !0) : (j = C(m, t), x = j.state, l = j.data, s = j.error, j = !s); else {
                        s = x;
                        (!x || a) && (x = "error", 0 > a && (a = 0))
                    }
                    w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --$.active || $.event.trigger("ajaxStop"))
                }
            }

            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = $.ajaxSetup({}, c), n = m.context || m, o = n !== m && (n.nodeType || n instanceof $) ? $(n) : $.event, p = $.Deferred(), q = $.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0, setRequestHeader: function (a, b) {
                    if (!u) {
                        var c = a.toLowerCase();
                        a = t[c] = t[c] || a, s[a] = b
                    }
                    return this
                }, getAllResponseHeaders: function () {
                    return 2 === u ? f : null
                }, getResponseHeader: function (a) {
                    var c;
                    if (2 === u) {
                        if (!g) {
                            g = {};
                            for (; c = Bc.exec(f);)g[c[1].toLowerCase()] = c[2]
                        }
                        c = g[a.toLowerCase()]
                    }
                    return c === b ? null : c
                }, overrideMimeType: function (a) {
                    return u || (m.mimeType = a), this
                }, abort: function (a) {
                    return a = a || v, h && h.abort(a), d(0, a), this
                }
            };
            p.promise(w), w.success = w.done, w.error = w.fail, w.complete = q.add, w.statusCode = function (a) {
                if (a) {
                    var b;
                    if (2 > u)for (b in a)r[b] = [r[b], a[b]]; else b = a[w.status], w.always(b)
                }
                return this
            }, m.url = ((a || m.url) + "").replace(Ac, "").replace(Ec, yc[1] + "//"), m.dataTypes = $.trim(m.dataType || "*").toLowerCase().split(bb), null == m.crossDomain && (j = Ic.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === yc[1] && j[2] === yc[2] && (j[3] || ("http:" === j[1] ? 80 : 443)) == (yc[3] || ("http:" === yc[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = $.param(m.data, m.traditional)), z(Kc, m, c, w);
            if (2 === u)return w;
            k = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Dc.test(m.type), k && 0 === $.active++ && $.event.trigger("ajaxStart");
            if (!m.hasContent) {
                m.data && (m.url += (Fc.test(m.url) ? "&" : "?") + m.data, delete m.data), e = m.url;
                if (m.cache === !1) {
                    var x = $.now(), y = m.url.replace(Hc, "$1_=" + x);
                    m.url = y + (y === m.url ? (Fc.test(m.url) ? "&" : "?") + "_=" + x : "")
                }
            }
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), m.ifModified && (e = e || m.url, $.lastModified[e] && w.setRequestHeader("If-Modified-Since", $.lastModified[e]), $.etag[e] && w.setRequestHeader("If-None-Match", $.etag[e])), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mc + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)w.setRequestHeader(l, m.headers[l]);
            if (!m.beforeSend || m.beforeSend.call(n, w, m) !== !1 && 2 !== u) {
                v = "abort";
                for (l in{success: 1, error: 1, complete: 1})w[l](m[l]);
                h = z(Lc, m, c, w);
                if (h) {
                    w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function () {
                        w.abort("timeout")
                    }, m.timeout));
                    try {
                        u = 1, h.send(s, d)
                    } catch (A) {
                        if (!(2 > u))throw A;
                        d(-1, A)
                    }
                } else d(-1, "No Transport");
                return w
            }
            return w.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Oc = [], Pc = /\?/, Qc = /(=)\?(?=&|$)|\?\?/, Rc = $.now();
    $.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Oc.pop() || $.expando + "_" + Rc++;
            return this[a] = !0, a
        }
    }), $.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f, g, h, i = c.data, j = c.url, k = c.jsonp !== !1, l = k && Qc.test(j), m = k && !l && "string" == typeof i && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Qc.test(i);
        return "jsonp" === c.dataTypes[0] || l || m ? (f = c.jsonpCallback = $.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(Qc, "$1" + f) : m ? c.data = i.replace(Qc, "$1" + f) : k && (c.url += (Pc.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
            return h || $.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", a[f] = function () {
            h = arguments
        }, e.always(function () {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Oc.push(f)), h && $.isFunction(g) && g(h[0]), h = g = b
        }), "script") : void 0
    }), $.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (a) {
                return $.globalEval(a), a
            }
        }
    }), $.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), $.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
            return {
                send: function (e, f) {
                    c = P.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, e) {
                        (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                }, abort: function () {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var Sc, Tc = a.ActiveXObject ? function () {
        for (var a in Sc)Sc[a](0, 1)
    } : !1, Uc = 0;
    $.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && D() || E()
    } : D, function (a) {
        $.extend($.support, {ajax: !!a, cors: !!a && "withCredentials"in a})
    }($.ajaxSettings.xhr()), $.support.ajax && $.ajaxTransport(function (c) {
        if (!c.crossDomain || $.support.cors) {
            var d;
            return {
                send: function (e, f) {
                    var g, h, i = c.xhr();
                    c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
                    if (c.xhrFields)for (h in c.xhrFields)i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e)i.setRequestHeader(h, e[h])
                    } catch (j) {
                    }
                    i.send(c.hasContent && c.data || null), d = function (a, e) {
                        var h, j, k, l, m;
                        try {
                            if (d && (e || 4 === i.readyState)) {
                                d = b, g && (i.onreadystatechange = $.noop, Tc && delete Sc[g]);
                                if (e)4 !== i.readyState && i.abort(); else {
                                    h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                    try {
                                        l.text = i.responseText
                                    } catch (n) {
                                    }
                                    try {
                                        j = i.statusText
                                    } catch (n) {
                                        j = ""
                                    }
                                    h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                }
                            }
                        } catch (o) {
                            e || f(-1, o)
                        }
                        l && f(h, j, l, k)
                    }, c.async ? 4 === i.readyState ? setTimeout(d, 0) : (g = ++Uc, Tc && (Sc || (Sc = {}, $(a).unload(Tc)), Sc[g] = d), i.onreadystatechange = d) : d()
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var Vc, Wc, Xc = /^(?:toggle|show|hide)$/, Yc = new RegExp("^(?:([-+])=|)(" + _ + ")([a-z%]*)$", "i"), Zc = /queueHooks$/, $c = [J], _c = {
        "*": [function (a, b) {
            var c, d, e = this.createTween(a, b), f = Yc.exec(b), g = e.cur(), h = +g || 0, i = 1, j = 20;
            if (f) {
                c = +f[2], d = f[3] || ($.cssNumber[a] ? "" : "px");
                if ("px" !== d && h) {
                    h = $.css(e.elem, a, !0) || c || 1;
                    do i = i || ".5", h /= i, $.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && 1 !== i && --j)
                }
                e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
            }
            return e
        }]
    };
    $.Animation = $.extend(H, {
        tweener: function (a, b) {
            $.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], _c[c] = _c[c] || [], _c[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? $c.unshift(a) : $c.push(a)
        }
    }), $.Tween = K, K.prototype = {
        constructor: K, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || ($.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = K.propHooks[this.prop];
            return a && a.get ? a.get(this) : K.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = K.propHooks[this.prop];
            return this.pos = b = this.options.duration ? $.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : K.propHooks._default.set(this), this
        }
    }, K.prototype.init.prototype = K.prototype, K.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = $.css(a.elem, a.prop, !1, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                $.fx.step[a.prop] ? $.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[$.cssProps[a.prop]] || $.cssHooks[a.prop]) ? $.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, K.propHooks.scrollTop = K.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, $.each(["toggle", "show", "hide"], function (a, b) {
        var c = $.fn[b];
        $.fn[b] = function (d, e, f) {
            return null == d || "boolean" == typeof d || !a && $.isFunction(d) && $.isFunction(e) ? c.apply(this, arguments) : this.animate(L(b, !0), d, e, f)
        }
    }), $.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(r).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = $.isEmptyObject(a), f = $.speed(b, c, d), g = function () {
                var b = H(this, $.extend({}, a), f);
                e && b.stop(!0)
            };
            return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, c, d) {
            var e = function (a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, c = null != a && a + "queueHooks", f = $.timers, g = $._data(this);
                if (c)g[c] && g[c].stop && e(g[c]); else for (c in g)g[c] && g[c].stop && Zc.test(c) && e(g[c]);
                for (c = f.length; c--;)f[c].elem === this && (null == a || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && $.dequeue(this, a)
            })
        }
    }), $.each({
        slideDown: L("show"),
        slideUp: L("hide"),
        slideToggle: L("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        $.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), $.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? $.extend({}, a) : {
            complete: c || !c && b || $.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !$.isFunction(b) && b
        };
        d.duration = $.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in $.fx.speeds ? $.fx.speeds[d.duration] : $.fx.speeds._default;
        (null == d.queue || d.queue === !0) && (d.queue = "fx");
        return d.old = d.complete, d.complete = function () {
            $.isFunction(d.old) && d.old.call(this), d.queue && $.dequeue(this, d.queue)
        }, d
    }, $.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, $.timers = [], $.fx = K.prototype.init, $.fx.tick = function () {
        var a, c = $.timers, d = 0;
        Vc = $.now();
        for (; d < c.length; d++)a = c[d], !a() && c[d] === a && c.splice(d--, 1);
        c.length || $.fx.stop(), Vc = b
    }, $.fx.timer = function (a) {
        a() && $.timers.push(a) && !Wc && (Wc = setInterval($.fx.tick, $.fx.interval))
    }, $.fx.interval = 13, $.fx.stop = function () {
        clearInterval(Wc), Wc = null
    }, $.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, $.fx.step = {}, $.expr && $.expr.filters && ($.expr.filters.animated = function (a) {
        return $.grep($.timers, function (b) {
            return a === b.elem
        }).length
    });
    var ad = /^(?:body|html)$/i;
    $.fn.offset = function (a) {
        if (arguments.length)return a === b ? this : this.each(function (b) {
            $.offset.setOffset(this, a, b)
        });
        var c, d, e, f, g, h, i, j = {top: 0, left: 0}, k = this[0], l = k && k.ownerDocument;
        return l ? (d = l.body) === k ? $.offset.bodyOffset(k) : (c = l.documentElement, $.contains(c, k) ? ("undefined" != typeof k.getBoundingClientRect && (j = k.getBoundingClientRect()), e = M(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
            top: j.top + h - f,
            left: j.left + i - g
        }) : j) : void 0
    }, $.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            return $.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat($.css(a, "marginTop")) || 0, c += parseFloat($.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        }, setOffset: function (a, b, c) {
            var d = $.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = $(a), h = g.offset(), i = $.css(a, "top"), j = $.css(a, "left"), k = ("absolute" === d || "fixed" === d) && $.inArray("auto", [i, j]) > -1, l = {}, m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), $.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using"in b ? b.using.call(a, l) : g.css(l)
        }
    }, $.fn.extend({
        position: function () {
            if (this[0]) {
                var a = this[0], b = this.offsetParent(), c = this.offset(), d = ad.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
                return c.top -= parseFloat($.css(a, "marginTop")) || 0, c.left -= parseFloat($.css(a, "marginLeft")) || 0, d.top += parseFloat($.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat($.css(b[0], "borderLeftWidth")) || 0, {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || P.body; a && !ad.test(a.nodeName) && "static" === $.css(a, "position");)a = a.offsetParent;
                return a || P.body
            })
        }
    }), $.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = /Y/.test(c);
        $.fn[a] = function (e) {
            return $.access(this, function (a, e, f) {
                var g = M(a);
                if (f === b)return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
                g ? g.scrollTo(d ? $(g).scrollLeft() : f, d ? f : $(g).scrollTop()) : a[e] = f;
                return void 0
            }, a, e, arguments.length, null)
        }
    }), $.each({Height: "height", Width: "width"}, function (a, c) {
        $.each({padding: "inner" + a, content: c, "": "outer" + a}, function (d, e) {
            $.fn[e] = function (e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return $.access(this, function (c, d, e) {
                    var f;
                    return $.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? $.css(c, d, e, h) : $.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), a.jQuery = a.$ = $, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return $
    })
}(window);
!function (a, b) {
    function c(b, c) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], !!g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b)
    }

    function d(b) {
        return a.expr.filters.visible(b) && !a(b).parents().andSelf().filter(function () {
            return "hidden" === a.css(this, "visibility")
        }).length
    }

    var e = 0, f = /^ui-id-\d+$/;
    a.ui = a.ui || {}, a.ui.version || (a.extend(a.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        _focus: a.fn.focus, focus: function (b, c) {
            return "number" == typeof b ? this.each(function () {
                var d = this;
                setTimeout(function () {
                    a(d).focus(), c && c.call(d)
                }, b)
            }) : this._focus.apply(this, arguments)
        }, scrollParent: function () {
            var b;
            return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        }, zIndex: function (c) {
            if (c !== b)return this.css("zIndex", c);
            if (this.length)for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
                if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e))return e;
                f = f.parent()
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++e)
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                f.test(this.id) && a(this).removeAttr("id")
            })
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
            return function (c) {
                return !!a.data(c, b)
            }
        }) : function (b, c, d) {
            return !!a.data(b, d[3])
        }, focusable: function (b) {
            return c(b, !isNaN(a.attr(b, "tabindex")))
        }, tabbable: function (b) {
            var d = a.attr(b, "tabindex"), e = isNaN(d);
            return (e || d >= 0) && c(b, !e)
        }
    }), a(function () {
        var b = document.body, c = b.appendChild(c = document.createElement("div"));
        c.offsetHeight, a.extend(c.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), a.support.minHeight = 100 === c.offsetHeight, a.support.selectstart = "onselectstart"in c, b.removeChild(c).style.display = "none"
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (c, d) {
        function e(b, c, d, e) {
            return a.each(f, function () {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }

        var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"], g = d.toLowerCase(), h = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + d] = function (c) {
            return c === b ? h["inner" + d].call(this) : this.each(function () {
                a(this).css(g, e(this, c) + "px")
            })
        }, a.fn["outer" + d] = function (b, c) {
            return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function () {
                a(this).css(g, e(this, b, !0, c) + "px")
            })
        }
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
        return function (c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)), function () {
        var b = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        a.ui.ie = b.length ? !0 : !1, a.ui.ie6 = 6 === parseFloat(b[1], 10)
    }(), a.fn.extend({
        disableSelection: function () {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
                a.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), a.extend(a.ui, {
        plugin: {
            add: function (b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d)f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
            }, call: function (a, b, c) {
                var d, e = a.plugins[b];
                if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)for (d = 0; e.length > d; d++)a.options[e[d][0]] && e[d][1].apply(a.element, c)
            }
        }, contains: a.contains, hasScroll: function (b, c) {
            if ("hidden" === a(b).css("overflow"))return !1;
            var d = c && "left" === c ? "scrollLeft" : "scrollTop", e = !1;
            return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
        }, isOverAxis: function (a, b, c) {
            return a > b && b + c > a
        }, isOver: function (b, c, d, e, f, g) {
            return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g)
        }
    }))
}(jQuery);
!function (a, b) {
    var c = 0, d = Array.prototype.slice, e = a.cleanData;
    a.cleanData = function (b) {
        for (var c, d = 0; null != (c = b[d]); d++)try {
            a(c).triggerHandler("remove")
        } catch (f) {
        }
        e(b)
    }, a.widget = function (c, d, e) {
        var f, g, h, i, j = c.split(".")[0];
        c = c.split(".")[1], f = j + "-" + c, e || (e = d, d = a.Widget), a.expr[":"][f.toLowerCase()] = function (b) {
            return !!a.data(b, f)
        }, a[j] = a[j] || {}, g = a[j][c], h = a[j][c] = function (a, c) {
            return this._createWidget ? (arguments.length && this._createWidget(a, c), b) : new h(a, c)
        }, a.extend(h, g, {
            version: e.version,
            _proto: a.extend({}, e),
            _childConstructors: []
        }), i = new d, i.options = a.widget.extend({}, i.options), a.each(e, function (b, c) {
            a.isFunction(c) && (e[b] = function () {
                var a = function () {
                    return d.prototype[b].apply(this, arguments)
                }, e = function (a) {
                    return d.prototype[b].apply(this, a)
                };
                return function () {
                    var b, d = this._super, f = this._superApply;
                    return this._super = a, this._superApply = e, b = c.apply(this, arguments), this._super = d, this._superApply = f, b
                }
            }())
        }), h.prototype = a.widget.extend(i, {widgetEventPrefix: g ? i.widgetEventPrefix : c}, e, {
            constructor: h,
            namespace: j,
            widgetName: c,
            widgetBaseClass: f,
            widgetFullName: f
        }), g ? (a.each(g._childConstructors, function (b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, h, c._proto)
        }), delete g._childConstructors) : d._childConstructors.push(h), a.widget.bridge(c, h)
    }, a.widget.extend = function (c) {
        for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++)for (e in g[h])f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : f);
        return c
    }, a.widget.bridge = function (c, e) {
        var f = e.prototype.widgetFullName || c;
        a.fn[c] = function (g) {
            var h = "string" == typeof g, i = d.call(arguments, 1), j = this;
            return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, h ? this.each(function () {
                var d, e = a.data(this, f);
                return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : b) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
            }) : this.each(function () {
                var b = a.data(this, f);
                b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
            }), j
        }
    }, a.Widget = function () {
    }, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (b, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetName, this), a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (a) {
                    a.target === d && this.destroy()
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function () {
            return this.element
        },
        option: function (c, d) {
            var e, f, g, h = c;
            if (0 === arguments.length)return a.widget.extend({}, this.options);
            if ("string" == typeof c)if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; e.length - 1 > g; g++)f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                if (c = e.pop(), d === b)return f[c] === b ? null : f[c];
                f[c] = d
            } else {
                if (d === b)return this.options[c] === b ? null : this.options[c];
                h[c] = d
            }
            return this._setOptions(h), this
        },
        _setOptions: function (a) {
            var b;
            for (b in a)this._setOption(b, a[b]);
            return this
        },
        _setOption: function (a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (c, d, e) {
            var f, g = this;
            "boolean" != typeof c && (e = d, d = c, c = !1), e ? (d = f = a(d), this.bindings = this.bindings.add(d)) : (e = d, d = this.element, f = this.widget()), a.each(e, function (e, h) {
                function i() {
                    return c || g.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof h ? g[h] : h).apply(g, arguments) : b
                }

                "string" != typeof h && (i.guid = h.guid = h.guid || i.guid || a.guid++);
                var j = e.match(/^(\w+)\s*(.*)$/), k = j[1] + g.eventNamespace, l = j[2];
                l ? f.delegate(l, k, i) : d.bind(k, i)
            })
        },
        _off: function (a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
        },
        _delay: function (a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }

            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function (b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function (b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function (b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                }, focusout: function (b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)for (e in f)e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
    }, a.each({show: "fadeIn", hide: "fadeOut"}, function (b, c) {
        a.Widget.prototype["_" + b] = function (d, e, f) {
            "string" == typeof e && (e = {effect: e});
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {duration: e}), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && (a.effects.effect[h] || a.uiBackCompat !== !1 && a.effects[h]) ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
                a(this)[b](), f && f.call(d[0]), c()
            })
        }
    }), a.uiBackCompat !== !1 && (a.Widget.prototype._getCreateOptions = function () {
        return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
    })
}(jQuery);
!function (a) {
    var b = !1;
    a(document).mouseup(function () {
        b = !1
    }), a.widget("ui.mouse", {
        version: "1.9.2",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function (a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName, function (c) {
                return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (c) {
            if (!b) {
                this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                var d = this, e = 1 === c.which, f = "string" == typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                return e && !f && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    d.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
                    return d._mouseMove(a)
                }, this._mouseUpDelegate = function (a) {
                    return d._mouseUp(a)
                }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0)) : !0
            }
        },
        _mouseMove: function (b) {
            return !a.ui.ie || document.documentMode >= 9 || b.button ? this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted) : this._mouseUp(b)
        },
        _mouseUp: function (b) {
            return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
        },
        _mouseDistanceMet: function (a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery);
!function (a, b) {
    function c(a, b, c) {
        return [parseInt(a[0], 10) * (m.test(a[0]) ? b / 100 : 1), parseInt(a[1], 10) * (m.test(a[1]) ? c / 100 : 1)]
    }

    function d(b, c) {
        return parseInt(a.css(b, c), 10) || 0
    }

    a.ui = a.ui || {};
    var e, f = Math.max, g = Math.abs, h = Math.round, i = /left|center|right/, j = /top|center|bottom/, k = /[\+\-]\d+%?/, l = /^\w+/, m = /%$/, n = a.fn.position;
    a.position = {
        scrollbarWidth: function () {
            if (e !== b)return e;
            var c, d, f = a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), g = f.children()[0];
            return a("body").append(f), c = g.offsetWidth, f.css("overflow", "scroll"), d = g.offsetWidth, c === d && (d = f[0].clientWidth), f.remove(), e = c - d
        }, getScrollInfo: function (b) {
            var c = b.isWindow ? "" : b.element.css("overflow-x"), d = b.isWindow ? "" : b.element.css("overflow-y"), e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth, f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
            return {width: e ? a.position.scrollbarWidth() : 0, height: f ? a.position.scrollbarWidth() : 0}
        }, getWithinInfo: function (b) {
            var c = a(b || window), d = a.isWindow(c[0]);
            return {
                element: c,
                isWindow: d,
                offset: c.offset() || {left: 0, top: 0},
                scrollLeft: c.scrollLeft(),
                scrollTop: c.scrollTop(),
                width: d ? c.width() : c.outerWidth(),
                height: d ? c.height() : c.outerHeight()
            }
        }
    }, a.fn.position = function (b) {
        if (!b || !b.of)return n.apply(this, arguments);
        b = a.extend({}, b);
        var e, m, o, p, q, r = a(b.of), s = a.position.getWithinInfo(b.within), t = a.position.getScrollInfo(s), u = r[0], v = (b.collision || "flip").split(" "), w = {};
        return 9 === u.nodeType ? (m = r.width(), o = r.height(), p = {
            top: 0,
            left: 0
        }) : a.isWindow(u) ? (m = r.width(), o = r.height(), p = {
            top: r.scrollTop(),
            left: r.scrollLeft()
        }) : u.preventDefault ? (b.at = "left top", m = o = 0, p = {
            top: u.pageY,
            left: u.pageX
        }) : (m = r.outerWidth(), o = r.outerHeight(), p = r.offset()), q = a.extend({}, p), a.each(["my", "at"], function () {
            var a, c, d = (b[this] || "").split(" ");
            1 === d.length && (d = i.test(d[0]) ? d.concat(["center"]) : j.test(d[0]) ? ["center"].concat(d) : ["center", "center"]), d[0] = i.test(d[0]) ? d[0] : "center", d[1] = j.test(d[1]) ? d[1] : "center", a = k.exec(d[0]), c = k.exec(d[1]), w[this] = [a ? a[0] : 0, c ? c[0] : 0], b[this] = [l.exec(d[0])[0], l.exec(d[1])[0]]
        }), 1 === v.length && (v[1] = v[0]), "right" === b.at[0] ? q.left += m : "center" === b.at[0] && (q.left += m / 2), "bottom" === b.at[1] ? q.top += o : "center" === b.at[1] && (q.top += o / 2), e = c(w.at, m, o), q.left += e[0], q.top += e[1], this.each(function () {
            var i, j, k = a(this), l = k.outerWidth(), n = k.outerHeight(), u = d(this, "marginLeft"), x = d(this, "marginTop"), y = l + u + d(this, "marginRight") + t.width, z = n + x + d(this, "marginBottom") + t.height, A = a.extend({}, q), B = c(w.my, k.outerWidth(), k.outerHeight());
            "right" === b.my[0] ? A.left -= l : "center" === b.my[0] && (A.left -= l / 2), "bottom" === b.my[1] ? A.top -= n : "center" === b.my[1] && (A.top -= n / 2), A.left += B[0], A.top += B[1], a.support.offsetFractions || (A.left = h(A.left), A.top = h(A.top)), i = {
                marginLeft: u,
                marginTop: x
            }, a.each(["left", "top"], function (c, d) {
                a.ui.position[v[c]] && a.ui.position[v[c]][d](A, {
                    targetWidth: m,
                    targetHeight: o,
                    elemWidth: l,
                    elemHeight: n,
                    collisionPosition: i,
                    collisionWidth: y,
                    collisionHeight: z,
                    offset: [e[0] + B[0], e[1] + B[1]],
                    my: b.my,
                    at: b.at,
                    within: s,
                    elem: k
                })
            }), a.fn.bgiframe && k.bgiframe(), b.using && (j = function (a) {
                var c = p.left - A.left, d = c + m - l, e = p.top - A.top, h = e + o - n, i = {
                    target: {
                        element: r,
                        left: p.left,
                        top: p.top,
                        width: m,
                        height: o
                    },
                    element: {element: k, left: A.left, top: A.top, width: l, height: n},
                    horizontal: 0 > d ? "left" : c > 0 ? "right" : "center",
                    vertical: 0 > h ? "top" : e > 0 ? "bottom" : "middle"
                };
                l > m && m > g(c + d) && (i.horizontal = "center"), n > o && o > g(e + h) && (i.vertical = "middle"), i.important = f(g(c), g(d)) > f(g(e), g(h)) ? "horizontal" : "vertical", b.using.call(this, a, i)
            }), k.offset(a.extend(A, {using: j}))
        })
    }, a.ui.position = {
        fit: {
            left: function (a, b) {
                var c, d = b.within, e = d.isWindow ? d.scrollLeft : d.offset.left, g = d.width, h = a.left - b.collisionPosition.marginLeft, i = e - h, j = h + b.collisionWidth - g - e;
                b.collisionWidth > g ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - g - e, a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + g - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = f(a.left - h, a.left)
            }, top: function (a, b) {
                var c, d = b.within, e = d.isWindow ? d.scrollTop : d.offset.top, g = b.within.height, h = a.top - b.collisionPosition.marginTop, i = e - h, j = h + b.collisionHeight - g - e;
                b.collisionHeight > g ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - g - e, a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + g - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = f(a.top - h, a.top)
            }
        }, flip: {
            left: function (a, b) {
                var c, d, e = b.within, f = e.offset.left + e.scrollLeft, h = e.width, i = e.isWindow ? e.scrollLeft : e.offset.left, j = a.left - b.collisionPosition.marginLeft, k = j - i, l = j + b.collisionWidth - h - i, m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, o = -2 * b.offset[0];
                0 > k ? (c = a.left + m + n + o + b.collisionWidth - h - f, (0 > c || g(k) > c) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || l > g(d)) && (a.left += m + n + o))
            }, top: function (a, b) {
                var c, d, e = b.within, f = e.offset.top + e.scrollTop, h = e.height, i = e.isWindow ? e.scrollTop : e.offset.top, j = a.top - b.collisionPosition.marginTop, k = j - i, l = j + b.collisionHeight - h - i, m = "top" === b.my[1], n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, p = -2 * b.offset[1];
                0 > k ? (d = a.top + n + o + p + b.collisionHeight - h - f, a.top + n + o + p > k && (0 > d || g(k) > d) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, a.top + n + o + p > l && (c > 0 || l > g(c)) && (a.top += n + o + p))
            }
        }, flipfit: {
            left: function () {
                a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
            }, top: function () {
                a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
            }
        }
    }, function () {
        var b, c, d, e, f, g = document.getElementsByTagName("body")[0], h = document.createElement("div");
        b = document.createElement(g ? "div" : "body"), d = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, g && a.extend(d, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (f in d)b.style[f] = d[f];
        b.appendChild(h), c = g || document.documentElement, c.insertBefore(b, c.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", e = a(h).offset().left, a.support.offsetFractions = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b)
    }(), a.uiBackCompat !== !1 && function (a) {
        var c = a.fn.position;
        a.fn.position = function (d) {
            if (!d || !d.offset)return c.call(this, d);
            var e = d.offset.split(" "), f = d.at.split(" ");
            return 1 === e.length && (e[1] = e[0]), /^\d/.test(e[0]) && (e[0] = "+" + e[0]), /^\d/.test(e[1]) && (e[1] = "+" + e[1]), 1 === f.length && (/left|center|right/.test(f[0]) ? f[1] = "center" : (f[1] = f[0], f[0] = "center")), c.call(this, a.extend(d, {
                at: f[0] + e[0] + " " + f[1] + e[1],
                offset: b
            }))
        }
    }(jQuery)
}(jQuery);
!function (a) {
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function () {
            "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function (b) {
            var c = this.options;
            return this.helper || c.disabled || a(b.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(b), this.handle ? (a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function () {
                a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(a(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (b) {
            var c = this.options;
            return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, a.extend(this.offset, {
                click: {left: b.pageX - this.offset.left, top: b.pageY - this.offset.top},
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), c.containment && this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
        },
        _mouseDrag: function (b, c) {
            if (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                var d = this._uiHash();
                if (this._trigger("drag", b, d) === !1)return this._mouseUp({}), !1;
                this.position = d.position
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
        },
        _mouseStop: function (b) {
            var c = !1;
            a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, b)), this.dropped && (c = this.dropped, this.dropped = !1);
            for (var d = this.element[0], e = !1; d && (d = d.parentNode);)d == document && (e = !0);
            if (!e && "original" === this.options.helper)return !1;
            if ("invalid" == this.options.revert && !c || "valid" == this.options.revert && c || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c)) {
                var f = this;
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    f._trigger("stop", b) !== !1 && f._clear()
                })
            } else this._trigger("stop", b) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function (b) {
            return a("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (b) {
            var c = this.options.handle && a(this.options.handle, this.element).length ? !1 : !0;
            return a(this.options.handle, this.element).find("*").andSelf().each(function () {
                this == b.target && (c = !0)
            }), c
        },
        _createHelper: function (b) {
            var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : "clone" == c.helper ? this.element.clone().removeAttr("id") : this.element;
            return d.parents("body").length || d.appendTo("parent" == c.appendTo ? this.element[0].parentNode : c.appendTo), d[0] == this.element[0] || /(fixed|absolute)/.test(d.css("position")) || d.css("position", "absolute"), d
        },
        _adjustOffsetFromHelper: function (b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left"in b && (this.offset.click.left = b.left + this.margins.left), "right"in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top"in b && (this.offset.click.top = b.top + this.margins.top), "bottom"in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" == this.cssPosition) {
                var a = this.element.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var b = this.options;
            if ("parent" == b.containment && (b.containment = this.helper[0].parentNode), ("document" == b.containment || "window" == b.containment) && (this.containment = ["document" == b.containment ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == b.containment ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == b.containment ? 0 : a(window).scrollLeft()) + a("document" == b.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == b.containment ? 0 : a(window).scrollTop()) + (a("document" == b.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(b.containment) || b.containment.constructor == Array)b.containment.constructor == Array && (this.containment = b.containment); else {
                var c = a(b.containment), d = c[0];
                if (!d)return;
                c.offset();
                var e = "hidden" != a(d).css("overflow");
                this.containment = [(parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0), (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0), (e ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c
            }
        },
        _convertPositionTo: function (b, c) {
            c || (c = this.position);
            var d = "absolute" == b ? 1 : -1, e = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent), f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
            }
        },
        _generatePosition: function (b) {
            var c = this.options, d = "absolute" != this.cssPosition || this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, e = /(html|body)/i.test(d[0].tagName), f = b.pageX, g = b.pageY;
            if (this.originalPosition) {
                var h;
                if (this.containment) {
                    if (this.relative_container) {
                        var i = this.relative_container.offset();
                        h = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]
                    } else h = this.containment;
                    b.pageX - this.offset.click.left < h[0] && (f = h[0] + this.offset.click.left), b.pageY - this.offset.click.top < h[1] && (g = h[1] + this.offset.click.top), b.pageX - this.offset.click.left > h[2] && (f = h[2] + this.offset.click.left), b.pageY - this.offset.click.top > h[3] && (g = h[3] + this.offset.click.top)
                }
                if (c.grid) {
                    var j = c.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY;
                    g = h ? j - this.offset.click.top < h[1] || j - this.offset.click.top > h[3] ? j - this.offset.click.top < h[1] ? j + c.grid[1] : j - c.grid[1] : j : j;
                    var k = c.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0] : this.originalPageX;
                    f = h ? k - this.offset.click.left < h[0] || k - this.offset.click.left > h[2] ? k - this.offset.click.left < h[0] ? k + c.grid[0] : k - c.grid[0] : k : k
                }
            }
            return {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (b, c, d) {
            return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), "drag" == b && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function (b, c) {
            var d = a(this).data("draggable"), e = d.options, f = a.extend({}, c, {item: d.element});
            d.sortables = [], a(e.connectToSortable).each(function () {
                var c = a.data(this, "sortable");
                c && !c.options.disabled && (d.sortables.push({
                    instance: c,
                    shouldRevert: c.options.revert
                }), c.refreshPositions(), c._trigger("activate", b, f))
            })
        }, stop: function (b, c) {
            var d = a(this).data("draggable"), e = a.extend({}, c, {item: d.element});
            a.each(d.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, "original" == d.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e))
            })
        }, drag: function (b, c) {
            var d = a(this).data("draggable"), e = this;
            a.each(d.sortables, function () {
                var f = !1, g = this;
                this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (f = !0, a.each(d.sortables, function () {
                    return this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this != g && this.instance._intersectsWith(this.instance.containerCache) && a.ui.contains(g.instance.element[0], this.instance.element[0]) && (f = !1), f
                })), f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return c.helper[0]
                }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1)
            })
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var b = a("body"), c = a(this).data("draggable").options;
            b.css("cursor") && (c._cursor = b.css("cursor")), b.css("cursor", c.cursor)
        }, stop: function () {
            var b = a(this).data("draggable").options;
            b._cursor && a("body").css("cursor", b._cursor)
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function (b, c) {
            var d = a(c.helper), e = a(this).data("draggable").options;
            d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity)
        }, stop: function (b, c) {
            var d = a(this).data("draggable").options;
            d._opacity && a(c.helper).css("opacity", d._opacity)
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var b = a(this).data("draggable");
            b.scrollParent[0] != document && "HTML" != b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset())
        }, drag: function (b) {
            var c = a(this).data("draggable"), d = c.options, e = !1;
            c.scrollParent[0] != document && "HTML" != c.scrollParent[0].tagName ? (d.axis && "x" == d.axis || (c.overflowOffset.top + c.scrollParent[0].offsetHeight - b.pageY < d.scrollSensitivity ? c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop + d.scrollSpeed : b.pageY - c.overflowOffset.top < d.scrollSensitivity && (c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop - d.scrollSpeed)), d.axis && "y" == d.axis || (c.overflowOffset.left + c.scrollParent[0].offsetWidth - b.pageX < d.scrollSensitivity ? c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft + d.scrollSpeed : b.pageX - c.overflowOffset.left < d.scrollSensitivity && (c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft - d.scrollSpeed))) : (d.axis && "x" == d.axis || (b.pageY - a(document).scrollTop() < d.scrollSensitivity ? e = a(document).scrollTop(a(document).scrollTop() - d.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < d.scrollSensitivity && (e = a(document).scrollTop(a(document).scrollTop() + d.scrollSpeed))), d.axis && "y" == d.axis || (b.pageX - a(document).scrollLeft() < d.scrollSensitivity ? e = a(document).scrollLeft(a(document).scrollLeft() - d.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < d.scrollSensitivity && (e = a(document).scrollLeft(a(document).scrollLeft() + d.scrollSpeed)))), e !== !1 && a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, b)
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function () {
            var b = a(this).data("draggable"), c = b.options;
            b.snapElements = [], a(c.snap.constructor != String ? c.snap.items || ":data(draggable)" : c.snap).each(function () {
                var c = a(this), d = c.offset();
                this != b.element[0] && b.snapElements.push({
                    item: this,
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: d.top,
                    left: d.left
                })
            })
        }, drag: function (b, c) {
            for (var d = a(this).data("draggable"), e = d.options, f = e.snapTolerance, g = c.offset.left, h = g + d.helperProportions.width, i = c.offset.top, j = i + d.helperProportions.height, k = d.snapElements.length - 1; k >= 0; k--) {
                var l = d.snapElements[k].left, m = l + d.snapElements[k].width, n = d.snapElements[k].top, o = n + d.snapElements[k].height;
                if (g > l - f && m + f > g && i > n - f && o + f > i || g > l - f && m + f > g && j > n - f && o + f > j || h > l - f && m + f > h && i > n - f && o + f > i || h > l - f && m + f > h && j > n - f && o + f > j) {
                    if ("inner" != e.snapMode) {
                        var p = f >= Math.abs(n - j), q = f >= Math.abs(o - i), r = f >= Math.abs(l - h), s = f >= Math.abs(m - g);
                        p && (c.position.top = d._convertPositionTo("relative", {
                            top: n - d.helperProportions.height,
                            left: 0
                        }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {
                            top: o,
                            left: 0
                        }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {
                            top: 0,
                            left: l - d.helperProportions.width
                        }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {
                            top: 0,
                            left: m
                        }).left - d.margins.left)
                    }
                    var t = p || q || r || s;
                    if ("outer" != e.snapMode) {
                        var p = f >= Math.abs(n - i), q = f >= Math.abs(o - j), r = f >= Math.abs(l - g), s = f >= Math.abs(m - h);
                        p && (c.position.top = d._convertPositionTo("relative", {
                            top: n,
                            left: 0
                        }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {
                            top: o - d.helperProportions.height,
                            left: 0
                        }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {
                            top: 0,
                            left: l
                        }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {
                            top: 0,
                            left: m - d.helperProportions.width
                        }).left - d.margins.left)
                    }
                    !d.snapElements[k].snapping && (p || q || r || s || t) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {snapItem: d.snapElements[k].item})), d.snapElements[k].snapping = p || q || r || s || t
                } else d.snapElements[k].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {snapItem: d.snapElements[k].item})), d.snapElements[k].snapping = !1
            }
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function () {
            var b = a(this).data("draggable").options, c = a.makeArray(a(b.stack)).sort(function (b, c) {
                return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
            });
            if (c.length) {
                var d = parseInt(c[0].style.zIndex) || 0;
                a(c).each(function (a) {
                    this.style.zIndex = d + a
                }), this[0].style.zIndex = d + c.length
            }
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function (b, c) {
            var d = a(c.helper), e = a(this).data("draggable").options;
            d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex)
        }, stop: function (b, c) {
            var d = a(this).data("draggable").options;
            d._zIndex && a(c.helper).css("zIndex", d._zIndex)
        }
    })
}(jQuery);
!function (a) {
    a.widget("ui.droppable", {
        version: "1.9.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function () {
            var b = this.options, c = b.accept;
            this.isover = 0, this.isout = 1, this.accept = a.isFunction(c) ? c : function (a) {
                return a.is(c)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function () {
            for (var b = a.ui.ddmanager.droppables[this.options.scope], c = 0; b.length > c; c++)b[c] == this && b.splice(c, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (b, c) {
            "accept" == b && (this.accept = a.isFunction(c) ? c : function (a) {
                return a.is(c)
            }), a.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
        },
        _deactivate: function (b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
        },
        _over: function (b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] != this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
        },
        _out: function (b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] != this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
        },
        _drop: function (b, c) {
            var d = c || a.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] == this.element[0])return !1;
            var e = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                var b = a.data(this, "droppable");
                return b.options.greedy && !b.options.disabled && b.options.scope == d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {offset: b.element.offset()}), b.options.tolerance) ? (e = !0, !1) : void 0
            }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1
        },
        ui: function (a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        }
    }), a.ui.intersect = function (b, c, d) {
        if (!c.offset)return !1;
        var e = (b.positionAbs || b.position.absolute).left, f = e + b.helperProportions.width, g = (b.positionAbs || b.position.absolute).top, h = g + b.helperProportions.height, i = c.offset.left, j = i + c.proportions.width, k = c.offset.top, l = k + c.proportions.height;
        switch (d) {
            case"fit":
                return e >= i && j >= f && g >= k && l >= h;
            case"intersect":
                return e + b.helperProportions.width / 2 > i && j > f - b.helperProportions.width / 2 && g + b.helperProportions.height / 2 > k && l > h - b.helperProportions.height / 2;
            case"pointer":
                var m = (b.positionAbs || b.position.absolute).left + (b.clickOffset || b.offset.click).left, n = (b.positionAbs || b.position.absolute).top + (b.clickOffset || b.offset.click).top, o = a.ui.isOver(n, m, k, i, c.proportions.height, c.proportions.width);
                return o;
            case"touch":
                return (g >= k && l >= g || h >= k && l >= h || k > g && h > l) && (e >= i && j >= e || f >= i && j >= f || i > e && f > j);
            default:
                return !1
        }
    }, a.ui.ddmanager = {
        current: null, droppables: {"default": []}, prepareOffsets: function (b, c) {
            var d = a.ui.ddmanager.droppables[b.options.scope] || [], e = c ? c.type : null, f = (b.currentItem || b.element).find(":data(droppable)").andSelf();
            a:for (var g = 0; d.length > g; g++)if (!(d[g].options.disabled || b && !d[g].accept.call(d[g].element[0], b.currentItem || b.element))) {
                for (var h = 0; f.length > h; h++)if (f[h] == d[g].element[0]) {
                    d[g].proportions.height = 0;
                    continue a
                }
                d[g].visible = "none" != d[g].element.css("display"), d[g].visible && ("mousedown" == e && d[g]._activate.call(d[g], c), d[g].offset = d[g].element.offset(), d[g].proportions = {
                    width: d[g].element[0].offsetWidth,
                    height: d[g].element[0].offsetHeight
                })
            }
        }, drop: function (b, c) {
            var d = !1;
            return a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
                this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, c)))
            }), d
        }, dragStart: function (b, c) {
            b.element.parentsUntil("body").bind("scroll.droppable", function () {
                b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
            })
        }, drag: function (b, c) {
            b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d = a.ui.intersect(b, this, this.options.tolerance), e = d || 1 != this.isover ? d && 0 == this.isover ? "isover" : null : "isout";
                    if (e) {
                        var f;
                        if (this.options.greedy) {
                            var g = this.options.scope, h = this.element.parents(":data(droppable)").filter(function () {
                                return a.data(this, "droppable").options.scope === g
                            });
                            h.length && (f = a.data(h[0], "droppable"), f.greedyChild = "isover" == e ? 1 : 0)
                        }
                        f && "isover" == e && (f.isover = 0, f.isout = 1, f._out.call(f, c)), this[e] = 1, this["isout" == e ? "isover" : "isout"] = 0, this["isover" == e ? "_over" : "_out"].call(this, c), f && "isout" == e && (f.isout = 0, f.isover = 1, f._over.call(f, c))
                    }
                }
            })
        }, dragStop: function (b, c) {
            b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
        }
    }
}(jQuery);
!function (a) {
    a.widget("ui.resizable", a.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function () {
            var b = this, c = this.options;
            if (this.element.addClass("ui-resizable"), a.extend(this, {
                    _aspectRatio: !!c.aspectRatio,
                    aspectRatio: c.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: c.helper || c.ghost || c.animate ? c.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = c.handles || (a(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor == String) {
                "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var d = this.handles.split(",");
                this.handles = {};
                for (var e = 0; d.length > e; e++) {
                    var f = a.trim(d[e]), g = "ui-resizable-" + f, h = a('<div class="ui-resizable-handle ' + g + '"></div>');
                    h.css({zIndex: c.zIndex}), "se" == f && h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[f] = ".ui-resizable-" + f, this.element.append(h)
                }
            }
            this._renderAxis = function (b) {
                b = b || this.element;
                for (var c in this.handles) {
                    if (this.handles[c].constructor == String && (this.handles[c] = a(this.handles[c], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var d = a(this.handles[c], this.element), e = 0;
                        e = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth();
                        var f = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join("");
                        b.css(f, e), this._proportionallyResize()
                    }
                    a(this.handles[c]).length
                }
            }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                if (!b.resizing) {
                    if (this.className)var a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    b.axis = a && a[1] ? a[1] : "se"
                }
            }), c.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                c.disabled || (a(this).removeClass("ui-resizable-autohide"), b._handles.show())
            }).mouseleave(function () {
                c.disabled || b.resizing || (a(this).addClass("ui-resizable-autohide"), b._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var b = function (b) {
                a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                b(this.element);
                var c = this.element;
                this.originalElement.css({
                    position: c.css("position"),
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: c.css("top"),
                    left: c.css("left")
                }).insertAfter(c), c.remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), b(this.originalElement), this
        },
        _mouseCapture: function (b) {
            var c = !1;
            for (var d in this.handles)a(this.handles[d])[0] == b.target && (c = !0);
            return !this.options.disabled && c
        },
        _mouseStart: function (c) {
            var d = this.options, e = this.element.position(), f = this.element;
            this.resizing = !0, this.documentScroll = {
                top: a(document).scrollTop(),
                left: a(document).scrollLeft()
            }, (f.is(".ui-draggable") || /absolute/.test(f.css("position"))) && f.css({
                position: "absolute",
                top: e.top,
                left: e.left
            }), this._renderProxy();
            var g = b(this.helper.css("left")), h = b(this.helper.css("top"));
            d.containment && (g += a(d.containment).scrollLeft() || 0, h += a(d.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: g,
                top: h
            }, this.size = this._helper ? {width: f.outerWidth(), height: f.outerHeight()} : {
                width: f.width(),
                height: f.height()
            }, this.originalSize = this._helper ? {width: f.outerWidth(), height: f.outerHeight()} : {
                width: f.width(),
                height: f.height()
            }, this.originalPosition = {left: g, top: h}, this.sizeDiff = {
                width: f.outerWidth() - f.width(),
                height: f.outerHeight() - f.height()
            }, this.originalMousePosition = {
                left: c.pageX,
                top: c.pageY
            }, this.aspectRatio = "number" == typeof d.aspectRatio ? d.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var i = a(".ui-resizable-" + this.axis).css("cursor");
            return a("body").css("cursor", "auto" == i ? this.axis + "-resize" : i), f.addClass("ui-resizable-resizing"), this._propagate("start", c), !0
        },
        _mouseDrag: function (a) {
            var b = this.helper, c = (this.options, this.originalMousePosition), d = this.axis, e = a.pageX - c.left || 0, f = a.pageY - c.top || 0, g = this._change[d];
            if (!g)return !1;
            var h = g.apply(this, [a, e, f]);
            return this._updateVirtualBoundaries(a.shiftKey), (this._aspectRatio || a.shiftKey) && (h = this._updateRatio(h, a)), h = this._respectSize(h, a), this._propagate("resize", a), b.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(h), this._trigger("resize", a, this.ui()), !1
        },
        _mouseStop: function (b) {
            this.resizing = !1;
            var c = this.options, d = this;
            if (this._helper) {
                var e = this._proportionallyResizeElements, f = e.length && /textarea/i.test(e[0].nodeName), g = f && a.ui.hasScroll(e[0], "left") ? 0 : d.sizeDiff.height, h = f ? 0 : d.sizeDiff.width, i = {
                    width: d.helper.width() - h,
                    height: d.helper.height() - g
                }, j = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null, k = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null;
                c.animate || this.element.css(a.extend(i, {
                    top: k,
                    left: j
                })), d.helper.height(d.size.height), d.helper.width(d.size.width), this._helper && !c.animate && this._proportionallyResize()
            }
            return a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (a) {
            var b, d, e, f, g, h = this.options;
            g = {
                minWidth: c(h.minWidth) ? h.minWidth : 0,
                maxWidth: c(h.maxWidth) ? h.maxWidth : 1 / 0,
                minHeight: c(h.minHeight) ? h.minHeight : 0,
                maxHeight: c(h.maxHeight) ? h.maxHeight : 1 / 0
            }, (this._aspectRatio || a) && (b = g.minHeight * this.aspectRatio, e = g.minWidth / this.aspectRatio, d = g.maxHeight * this.aspectRatio, f = g.maxWidth / this.aspectRatio, b > g.minWidth && (g.minWidth = b), e > g.minHeight && (g.minHeight = e), g.maxWidth > d && (g.maxWidth = d), g.maxHeight > f && (g.maxHeight = f)), this._vBoundaries = g
        },
        _updateCache: function (a) {
            this.options, this.offset = this.helper.offset(), c(a.left) && (this.position.left = a.left), c(a.top) && (this.position.top = a.top), c(a.height) && (this.size.height = a.height), c(a.width) && (this.size.width = a.width)
        },
        _updateRatio: function (a) {
            var b = (this.options, this.position), d = this.size, e = this.axis;
            return c(a.height) ? a.width = a.height * this.aspectRatio : c(a.width) && (a.height = a.width / this.aspectRatio), "sw" == e && (a.left = b.left + (d.width - a.width), a.top = null), "nw" == e && (a.top = b.top + (d.height - a.height), a.left = b.left + (d.width - a.width)), a
        },
        _respectSize: function (a, b) {
            var d = (this.helper, this._vBoundaries), e = (this._aspectRatio || b.shiftKey, this.axis), f = c(a.width) && d.maxWidth && d.maxWidth < a.width, g = c(a.height) && d.maxHeight && d.maxHeight < a.height, h = c(a.width) && d.minWidth && d.minWidth > a.width, i = c(a.height) && d.minHeight && d.minHeight > a.height;
            h && (a.width = d.minWidth), i && (a.height = d.minHeight), f && (a.width = d.maxWidth), g && (a.height = d.maxHeight);
            var j = this.originalPosition.left + this.originalSize.width, k = this.position.top + this.size.height, l = /sw|nw|w/.test(e), m = /nw|ne|n/.test(e);
            h && l && (a.left = j - d.minWidth), f && l && (a.left = j - d.maxWidth), i && m && (a.top = k - d.minHeight), g && m && (a.top = k - d.maxHeight);
            var n = !a.width && !a.height;
            return n && !a.left && a.top ? a.top = null : n && !a.top && a.left && (a.left = null), a
        },
        _proportionallyResize: function () {
            if (this.options, this._proportionallyResizeElements.length)for (var b = this.helper || this.element, c = 0; this._proportionallyResizeElements.length > c; c++) {
                var d = this._proportionallyResizeElements[c];
                if (!this.borderDif) {
                    var e = [d.css("borderTopWidth"), d.css("borderRightWidth"), d.css("borderBottomWidth"), d.css("borderLeftWidth")], f = [d.css("paddingTop"), d.css("paddingRight"), d.css("paddingBottom"), d.css("paddingLeft")];
                    this.borderDif = a.map(e, function (a, b) {
                        var c = parseInt(a, 10) || 0, d = parseInt(f[b], 10) || 0;
                        return c + d
                    })
                }
                d.css({
                    height: b.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: b.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function () {
            var b = this.element, c = this.options;
            if (this.elementOffset = b.offset(), this._helper) {
                this.helper = this.helper || a('<div style="overflow:hidden;"></div>');
                var d = a.ui.ie6 ? 1 : 0, e = a.ui.ie6 ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + e,
                    height: this.element.outerHeight() + e,
                    position: "absolute",
                    left: this.elementOffset.left - d + "px",
                    top: this.elementOffset.top - d + "px",
                    zIndex: ++c.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function (a, b) {
                return {width: this.originalSize.width + b}
            }, w: function (a, b) {
                var c = (this.options, this.originalSize), d = this.originalPosition;
                return {left: d.left + b, width: c.width - b}
            }, n: function (a, b, c) {
                var d = (this.options, this.originalSize), e = this.originalPosition;
                return {top: e.top + c, height: d.height - c}
            }, s: function (a, b, c) {
                return {height: this.originalSize.height + c}
            }, se: function (b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            }, sw: function (b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            }, ne: function (b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            }, nw: function (b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            }
        },
        _propagate: function (b, c) {
            a.ui.plugin.call(this, b, [c, this.ui()]), "resize" != b && this._trigger(b, c, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), a.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var b = a(this).data("resizable"), c = b.options, d = function (b) {
                a(b).each(function () {
                    var b = a(this);
                    b.data("resizable-alsoresize", {
                        width: parseInt(b.width(), 10),
                        height: parseInt(b.height(), 10),
                        left: parseInt(b.css("left"), 10),
                        top: parseInt(b.css("top"), 10)
                    })
                })
            };
            "object" != typeof c.alsoResize || c.alsoResize.parentNode ? d(c.alsoResize) : c.alsoResize.length ? (c.alsoResize = c.alsoResize[0], d(c.alsoResize)) : a.each(c.alsoResize, function (a) {
                d(a)
            })
        }, resize: function (b, c) {
            var d = a(this).data("resizable"), e = d.options, f = d.originalSize, g = d.originalPosition, h = {
                height: d.size.height - f.height || 0,
                width: d.size.width - f.width || 0,
                top: d.position.top - g.top || 0,
                left: d.position.left - g.left || 0
            }, i = function (b, d) {
                a(b).each(function () {
                    var b = a(this), e = a(this).data("resizable-alsoresize"), f = {}, g = d && d.length ? d : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    a.each(g, function (a, b) {
                        var c = (e[b] || 0) + (h[b] || 0);
                        c && c >= 0 && (f[b] = c || null)
                    }), b.css(f)
                })
            };
            "object" != typeof e.alsoResize || e.alsoResize.nodeType ? i(e.alsoResize) : a.each(e.alsoResize, function (a, b) {
                i(a, b)
            })
        }, stop: function () {
            a(this).removeData("resizable-alsoresize")
        }
    }), a.ui.plugin.add("resizable", "animate", {
        stop: function (b) {
            var c = a(this).data("resizable"), d = c.options, e = c._proportionallyResizeElements, f = e.length && /textarea/i.test(e[0].nodeName), g = f && a.ui.hasScroll(e[0], "left") ? 0 : c.sizeDiff.height, h = f ? 0 : c.sizeDiff.width, i = {
                width: c.size.width - h,
                height: c.size.height - g
            }, j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
            c.element.animate(a.extend(i, k && j ? {top: k, left: j} : {}), {
                duration: d.animateDuration,
                easing: d.animateEasing,
                step: function () {
                    var d = {
                        width: parseInt(c.element.css("width"), 10),
                        height: parseInt(c.element.css("height"), 10),
                        top: parseInt(c.element.css("top"), 10),
                        left: parseInt(c.element.css("left"), 10)
                    };
                    e && e.length && a(e[0]).css({
                        width: d.width,
                        height: d.height
                    }), c._updateCache(d), c._propagate("resize", b)
                }
            })
        }
    }), a.ui.plugin.add("resizable", "containment", {
        start: function () {
            var c = a(this).data("resizable"), d = c.options, e = c.element, f = d.containment, g = f instanceof a ? f.get(0) : /parent/.test(f) ? e.parent().get(0) : f;
            if (g)if (c.containerElement = a(g), /document/.test(f) || f == document)c.containerOffset = {
                left: 0,
                top: 0
            }, c.containerPosition = {left: 0, top: 0}, c.parentData = {
                element: a(document),
                left: 0,
                top: 0,
                width: a(document).width(),
                height: a(document).height() || document.body.parentNode.scrollHeight
            }; else {
                var h = a(g), i = [];
                a(["Top", "Right", "Left", "Bottom"]).each(function (a, c) {
                    i[a] = b(h.css("padding" + c))
                }), c.containerOffset = h.offset(), c.containerPosition = h.position(), c.containerSize = {
                    height: h.innerHeight() - i[3],
                    width: h.innerWidth() - i[1]
                };
                var j = c.containerOffset, k = c.containerSize.height, l = c.containerSize.width, m = a.ui.hasScroll(g, "left") ? g.scrollWidth : l, n = a.ui.hasScroll(g) ? g.scrollHeight : k;
                c.parentData = {element: g, left: j.left, top: j.top, width: m, height: n}
            }
        }, resize: function (b) {
            var c = a(this).data("resizable"), d = c.options, e = (c.containerSize, c.containerOffset), f = (c.size, c.position), g = c._aspectRatio || b.shiftKey, h = {
                top: 0,
                left: 0
            }, i = c.containerElement;
            i[0] != document && /static/.test(i.css("position")) && (h = e), f.left < (c._helper ? e.left : 0) && (c.size.width = c.size.width + (c._helper ? c.position.left - e.left : c.position.left - h.left), g && (c.size.height = c.size.width / c.aspectRatio), c.position.left = d.helper ? e.left : 0), f.top < (c._helper ? e.top : 0) && (c.size.height = c.size.height + (c._helper ? c.position.top - e.top : c.position.top), g && (c.size.width = c.size.height * c.aspectRatio), c.position.top = c._helper ? e.top : 0), c.offset.left = c.parentData.left + c.position.left, c.offset.top = c.parentData.top + c.position.top;
            var j = Math.abs((c._helper ? c.offset.left - h.left : c.offset.left - h.left) + c.sizeDiff.width), k = Math.abs((c._helper ? c.offset.top - h.top : c.offset.top - e.top) + c.sizeDiff.height), l = c.containerElement.get(0) == c.element.parent().get(0), m = /relative|absolute/.test(c.containerElement.css("position"));
            l && m && (j -= c.parentData.left), j + c.size.width >= c.parentData.width && (c.size.width = c.parentData.width - j, g && (c.size.height = c.size.width / c.aspectRatio)), k + c.size.height >= c.parentData.height && (c.size.height = c.parentData.height - k, g && (c.size.width = c.size.height * c.aspectRatio))
        }, stop: function () {
            var b = a(this).data("resizable"), c = b.options, d = (b.position, b.containerOffset), e = b.containerPosition, f = b.containerElement, g = a(b.helper), h = g.offset(), i = g.outerWidth() - b.sizeDiff.width, j = g.outerHeight() - b.sizeDiff.height;
            b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            })
        }
    }), a.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var b = a(this).data("resizable"), c = b.options, d = b.size;
            b.ghost = b.originalElement.clone(), b.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: d.height,
                width: d.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), b.ghost.appendTo(b.helper)
        }, resize: function () {
            var b = a(this).data("resizable");
            b.options, b.ghost && b.ghost.css({position: "relative", height: b.size.height, width: b.size.width})
        }, stop: function () {
            var b = a(this).data("resizable");
            b.options, b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
        }
    }), a.ui.plugin.add("resizable", "grid", {
        resize: function (b) {
            var c = a(this).data("resizable"), d = c.options, e = c.size, f = c.originalSize, g = c.originalPosition, h = c.axis;
            d._aspectRatio || b.shiftKey, d.grid = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid;
            var i = Math.round((e.width - f.width) / (d.grid[0] || 1)) * (d.grid[0] || 1), j = Math.round((e.height - f.height) / (d.grid[1] || 1)) * (d.grid[1] || 1);
            /^(se|s|e)$/.test(h) ? (c.size.width = f.width + i, c.size.height = f.height + j) : /^(ne)$/.test(h) ? (c.size.width = f.width + i, c.size.height = f.height + j, c.position.top = g.top - j) : /^(sw)$/.test(h) ? (c.size.width = f.width + i, c.size.height = f.height + j, c.position.left = g.left - i) : (c.size.width = f.width + i, c.size.height = f.height + j, c.position.top = g.top - j, c.position.left = g.left - i)
        }
    });
    var b = function (a) {
        return parseInt(a, 10) || 0
    }, c = function (a) {
        return !isNaN(parseInt(a, 10))
    }
}(jQuery);
!function (a) {
    a.widget("ui.selectable", a.ui.mouse, {
        version: "1.9.2",
        options: {appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch"},
        _create: function () {
            var b = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var c;
            this.refresh = function () {
                c = a(b.options.filter, b.element[0]), c.addClass("ui-selectee"), c.each(function () {
                    var b = a(this), c = b.offset();
                    a.data(this, "selectable-item", {
                        element: this,
                        $element: b,
                        left: c.left,
                        top: c.top,
                        right: c.left + b.outerWidth(),
                        bottom: c.top + b.outerHeight(),
                        startselected: !1,
                        selected: b.hasClass("ui-selected"),
                        selecting: b.hasClass("ui-selecting"),
                        unselecting: b.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = c.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function (b) {
            var c = this;
            if (this.opos = [b.pageX, b.pageY], !this.options.disabled) {
                var d = this.options;
                this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
                    left: b.clientX,
                    top: b.clientY,
                    width: 0,
                    height: 0
                }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                    var d = a.data(this, "selectable-item");
                    d.startselected = !0, b.metaKey || b.ctrlKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {unselecting: d.element}))
                }), a(b.target).parents().andSelf().each(function () {
                    var d = a.data(this, "selectable-item");
                    if (d) {
                        var e = !b.metaKey && !b.ctrlKey || !d.$element.hasClass("ui-selected");
                        return d.$element.removeClass(e ? "ui-unselecting" : "ui-selected").addClass(e ? "ui-selecting" : "ui-unselecting"), d.unselecting = !e, d.selecting = e, d.selected = e, e ? c._trigger("selecting", b, {selecting: d.element}) : c._trigger("unselecting", b, {unselecting: d.element}), !1
                    }
                })
            }
        },
        _mouseDrag: function (b) {
            var c = this;
            if (this.dragged = !0, !this.options.disabled) {
                var d = this.options, e = this.opos[0], f = this.opos[1], g = b.pageX, h = b.pageY;
                if (e > g) {
                    var i = g;
                    g = e, e = i
                }
                if (f > h) {
                    var i = h;
                    h = f, f = i
                }
                return this.helper.css({
                    left: e,
                    top: f,
                    width: g - e,
                    height: h - f
                }), this.selectees.each(function () {
                    var i = a.data(this, "selectable-item");
                    if (i && i.element != c.element[0]) {
                        var j = !1;
                        "touch" == d.tolerance ? j = !(i.left > g || e > i.right || i.top > h || f > i.bottom) : "fit" == d.tolerance && (j = i.left > e && g > i.right && i.top > f && h > i.bottom), j ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, c._trigger("selecting", b, {selecting: i.element}))) : (i.selecting && ((b.metaKey || b.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), c._trigger("unselecting", b, {unselecting: i.element}))), i.selected && (b.metaKey || b.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, c._trigger("unselecting", b, {unselecting: i.element}))))
                    }
                }), !1
            }
        },
        _mouseStop: function (b) {
            var c = this;
            return this.dragged = !1, this.options, a(".ui-unselecting", this.element[0]).each(function () {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {unselected: d.element})
            }), a(".ui-selecting", this.element[0]).each(function () {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {selected: d.element})
            }), this._trigger("stop", b), this.helper.remove(), !1
        }
    })
}(jQuery);
!function (a) {
    a.widget("ui.sortable", a.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function () {
            var a = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === a.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--)this.items[a].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (b, c) {
            "disabled" === b ? (this.options[b] = c, this.widget().toggleClass("ui-sortable-disabled", !!c)) : a.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (b, c) {
            var d = this;
            if (this.reverting)return !1;
            if (this.options.disabled || "static" == this.options.type)return !1;
            this._refreshItems(b);
            var e = null;
            if (a(b.target).parents().each(function () {
                    return a.data(this, d.widgetName + "-item") == d ? (e = a(this), !1) : void 0
                }), a.data(b.target, d.widgetName + "-item") == d && (e = a(b.target)), !e)return !1;
            if (this.options.handle && !c) {
                var f = !1;
                if (a(this.options.handle, e).find("*").andSelf().each(function () {
                        this == b.target && (f = !0)
                    }), !f)return !1
            }
            return this.currentItem = e, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function (b, c, d) {
            var e = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, a.extend(this.offset, {
                    click: {left: b.pageX - this.offset.left, top: b.pageY - this.offset.top},
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), e.containment && this._setContainment(), e.cursor && (a("body").css("cursor") && (this._storedCursor = a("body").css("cursor")), a("body").css("cursor", e.cursor)), e.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", e.opacity)), e.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", e.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)for (var f = this.containers.length - 1; f >= 0; f--)this.containers[f]._trigger("activate", b, this._uiHash(this));
            return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
        },
        _mouseDrag: function (b) {
            if (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var c = this.options, d = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + c.scrollSpeed : b.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - c.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < c.scrollSensitivity ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + c.scrollSpeed : b.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - c.scrollSpeed)) : (b.pageY - a(document).scrollTop() < c.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - c.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < c.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + c.scrollSpeed)), b.pageX - a(document).scrollLeft() < c.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - c.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < c.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + c.scrollSpeed))), d !== !1 && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)
            }
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (var e = this.items.length - 1; e >= 0; e--) {
                var f = this.items[e], g = f.item[0], h = this._intersectsWithPointer(f);
                if (h && f.instance === this.currentContainer && g != this.currentItem[0] && this.placeholder[1 == h ? "next" : "prev"]()[0] != g && !a.contains(this.placeholder[0], g) && ("semi-dynamic" == this.options.type ? !a.contains(this.element[0], g) : !0)) {
                    if (this.direction = 1 == h ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(f))break;
                    this._rearrange(b, f), this._trigger("change", b, this._uiHash());
                    break
                }
            }
            return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (b, c) {
            if (b) {
                if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                    var d = this, e = this.placeholder.offset();
                    this.reverting = !0, a(this.helper).animate({
                        left: e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function () {
                        d._clear(b)
                    })
                } else this._clear(b, c);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({target: null}), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var b = this.containers.length - 1; b >= 0; b--)this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (b) {
            var c = this._getItemsAsjQuery(b && b.connected), d = [];
            return b = b || {}, a(c).each(function () {
                var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[-=_](.+)/);
                c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
            }), !d.length && b.key && d.push(b.key + "="), d.join("&")
        },
        toArray: function (b) {
            var c = this._getItemsAsjQuery(b && b.connected), d = [];
            return b = b || {}, c.each(function () {
                d.push(a(b.item || this).attr(b.attribute || "id") || "")
            }), d
        },
        _intersectsWith: function (a) {
            var b = this.positionAbs.left, c = b + this.helperProportions.width, d = this.positionAbs.top, e = d + this.helperProportions.height, f = a.left, g = f + a.width, h = a.top, i = h + a.height, j = this.offset.click.top, k = this.offset.click.left, l = d + j > h && i > d + j && b + k > f && g > b + k;
            return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? l : b + this.helperProportions.width / 2 > f && g > c - this.helperProportions.width / 2 && d + this.helperProportions.height / 2 > h && i > e - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (b) {
            var c = "x" === this.options.axis || a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top, b.height), d = "y" === this.options.axis || a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left, b.width), e = c && d, f = this._getDragVerticalDirection(), g = this._getDragHorizontalDirection();
            return e ? this.floating ? g && "right" == g || "down" == f ? 2 : 1 : f && ("down" == f ? 2 : 1) : !1
        },
        _intersectsWithSides: function (b) {
            var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top + b.height / 2, b.height), d = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left + b.width / 2, b.width), e = this._getDragVerticalDirection(), f = this._getDragHorizontalDirection();
            return this.floating && f ? "right" == f && d || "left" == f && !d : e && ("down" == e && c || "up" == e && !c)
        },
        _getDragVerticalDirection: function () {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != a && (a > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != a && (a > 0 ? "right" : "left")
        },
        refresh: function (a) {
            return this._refreshItems(a), this.refreshPositions(), this
        },
        _connectWith: function () {
            var a = this.options;
            return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function (b) {
            var c = [], d = [], e = this._connectWith();
            if (e && b)for (var f = e.length - 1; f >= 0; f--)for (var g = a(e[f]), h = g.length - 1; h >= 0; h--) {
                var i = a.data(g[h], this.widgetName);
                i && i != this && !i.options.disabled && d.push([a.isFunction(i.options.items) ? i.options.items.call(i.element) : a(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i])
            }
            d.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var f = d.length - 1; f >= 0; f--)d[f][0].each(function () {
                c.push(this)
            });
            return a(c)
        },
        _removeCurrentsFromItems: function () {
            var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = a.grep(this.items, function (a) {
                for (var c = 0; b.length > c; c++)if (b[c] == a.item[0])return !1;
                return !0
            })
        },
        _refreshItems: function (b) {
            this.items = [], this.containers = [this];
            var c = this.items, d = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {item: this.currentItem}) : a(this.options.items, this.element), this]], e = this._connectWith();
            if (e && this.ready)for (var f = e.length - 1; f >= 0; f--)for (var g = a(e[f]), h = g.length - 1; h >= 0; h--) {
                var i = a.data(g[h], this.widgetName);
                i && i != this && !i.options.disabled && (d.push([a.isFunction(i.options.items) ? i.options.items.call(i.element[0], b, {item: this.currentItem}) : a(i.options.items, i.element), i]), this.containers.push(i))
            }
            for (var f = d.length - 1; f >= 0; f--)for (var j = d[f][1], k = d[f][0], h = 0, l = k.length; l > h; h++) {
                var m = a(k[h]);
                m.data(this.widgetName + "-item", j), c.push({
                    item: m,
                    instance: j,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            }
        },
        refreshPositions: function (b) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var c = this.items.length - 1; c >= 0; c--) {
                var d = this.items[c];
                if (d.instance == this.currentContainer || !this.currentContainer || d.item[0] == this.currentItem[0]) {
                    var e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item;
                    b || (d.width = e.outerWidth(), d.height = e.outerHeight());
                    var f = e.offset();
                    d.left = f.left, d.top = f.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (var c = this.containers.length - 1; c >= 0; c--) {
                var f = this.containers[c].element.offset();
                this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight()
            }
            return this
        },
        _createPlaceholder: function (b) {
            b = b || this;
            var c = b.options;
            if (!c.placeholder || c.placeholder.constructor == String) {
                var d = c.placeholder;
                c.placeholder = {
                    element: function () {
                        var c = a(document.createElement(b.currentItem[0].nodeName)).addClass(d || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return d || (c.style.visibility = "hidden"), c
                    }, update: function (a, e) {
                        (!d || c.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
                    }
                }
            }
            b.placeholder = a(c.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), c.placeholder.update(b, b.placeholder)
        },
        _contactContainers: function (b) {
            for (var c = null, d = null, e = this.containers.length - 1; e >= 0; e--)if (!a.contains(this.currentItem[0], this.containers[e].element[0]))if (this._intersectsWith(this.containers[e].containerCache)) {
                if (c && a.contains(this.containers[e].element[0], c.element[0]))continue;
                c = this.containers[e], d = e
            } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", b, this._uiHash(this)), this.containers[e].containerCache.over = 0);
            if (c)if (1 === this.containers.length)this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1; else {
                for (var f = 1e4, g = null, h = this.containers[d].floating ? "left" : "top", i = this.containers[d].floating ? "width" : "height", j = this.positionAbs[h] + this.offset.click[h], k = this.items.length - 1; k >= 0; k--)if (a.contains(this.containers[d].element[0], this.items[k].item[0]) && this.items[k].item[0] != this.currentItem[0]) {
                    var l = this.items[k].item.offset()[h], m = !1;
                    Math.abs(l - j) > Math.abs(l + this.items[k][i] - j) && (m = !0, l += this.items[k][i]), f > Math.abs(l - j) && (f = Math.abs(l - j), g = this.items[k], this.direction = m ? "up" : "down")
                }
                if (!g && !this.options.dropOnEmpty)return;
                this.currentContainer = this.containers[d], g ? this._rearrange(b, g, null, !0) : this._rearrange(b, null, this.containers[d].element, !0), this._trigger("change", b, this._uiHash()), this.containers[d]._trigger("change", b, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1
            }
        },
        _createHelper: function (b) {
            var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" == c.helper ? this.currentItem.clone() : this.currentItem;
            return d.parents("body").length || a("parent" != c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), ("" == d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), ("" == d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d
        },
        _adjustOffsetFromHelper: function (b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left"in b && (this.offset.click.left = b.left + this.margins.left), "right"in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top"in b && (this.offset.click.top = b.top + this.margins.top), "bottom"in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" == this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var b = this.options;
            if ("parent" == b.containment && (b.containment = this.helper[0].parentNode), ("document" == b.containment || "window" == b.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a("document" == b.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" == b.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(b.containment)) {
                var c = a(b.containment)[0], d = a(b.containment).offset(), e = "hidden" != a(c).css("overflow");
                this.containment = [d.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0) - this.margins.left, d.top + (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top, d.left + (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, d.top + (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (b, c) {
            c || (c = this.position);
            var d = "absolute" == b ? 1 : -1, e = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent), f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
            }
        },
        _generatePosition: function (b) {
            var c = this.options, d = "absolute" != this.cssPosition || this.scrollParent[0] != document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, e = /(html|body)/i.test(d[0].tagName);
            "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            var f = b.pageX, g = b.pageY;
            if (this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), c.grid)) {
                var h = this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1];
                g = this.containment ? h - this.offset.click.top < this.containment[1] || h - this.offset.click.top > this.containment[3] ? h - this.offset.click.top < this.containment[1] ? h + c.grid[1] : h - c.grid[1] : h : h;
                var i = this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0];
                f = this.containment ? i - this.offset.click.left < this.containment[0] || i - this.offset.click.left > this.containment[2] ? i - this.offset.click.left < this.containment[0] ? i + c.grid[0] : i - c.grid[0] : i : i
            }
            return {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())
            }
        },
        _rearrange: function (a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var e = this.counter;
            this._delay(function () {
                e == this.counter && this.refreshPositions(!d)
            })
        },
        _clear: function (b, c) {
            this.reverting = !1;
            var d = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var e in this._storedCSS)("auto" == this._storedCSS[e] || "static" == this._storedCSS[e]) && (this._storedCSS[e] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !c && d.push(function (a) {
                this._trigger("receive", a, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || c || d.push(function (a) {
                this._trigger("update", a, this._uiHash())
            }), this !== this.currentContainer && (c || (d.push(function (a) {
                this._trigger("remove", a, this._uiHash())
            }), d.push(function (a) {
                return function (b) {
                    a._trigger("receive", b, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), d.push(function (a) {
                return function (b) {
                    a._trigger("update", b, this._uiHash(this))
                }
            }.call(this, this.currentContainer))));
            for (var e = this.containers.length - 1; e >= 0; e--)c || d.push(function (a) {
                return function (b) {
                    a._trigger("deactivate", b, this._uiHash(this))
                }
            }.call(this, this.containers[e])), this.containers[e].containerCache.over && (d.push(function (a) {
                return function (b) {
                    a._trigger("out", b, this._uiHash(this))
                }
            }.call(this, this.containers[e])), this.containers[e].containerCache.over = 0);
            if (this._storedCursor && a("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!c) {
                    this._trigger("beforeStop", b, this._uiHash());
                    for (var e = 0; d.length > e; e++)d[e].call(this, b);
                    this._trigger("stop", b, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !c) {
                for (var e = 0; d.length > e; e++)d[e].call(this, b);
                this._trigger("stop", b, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (b) {
            var c = b || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: b ? b.element : null
            }
        }
    })
}(jQuery);
!function (a) {
    var b, c, d, e, f = "ui-button ui-widget ui-state-default ui-corner-all", g = "ui-state-hover ui-state-active ", h = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", i = function () {
        var b = a(this).find(":ui-button");
        setTimeout(function () {
            b.button("refresh")
        }, 1)
    }, j = function (b) {
        var c = b.name, d = b.form, e = a([]);
        return c && (e = d ? a(d).find("[name='" + c + "']") : a("[name='" + c + "']", b.ownerDocument).filter(function () {
            return !this.form
        })), e
    };
    a.widget("ui.button", {
        version: "1.9.2",
        defaultElement: "<button>",
        options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}},
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, i), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var g = this, h = this.options, k = "checkbox" === this.type || "radio" === this.type, l = k ? "" : "ui-state-active", m = "ui-state-focus";
            null === h.label && (h.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(f).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                h.disabled || this === b && a(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                h.disabled || a(this).removeClass(l)
            }).bind("click" + this.eventNamespace, function (a) {
                h.disabled && (a.preventDefault(), a.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function () {
                g.buttonElement.addClass(m)
            }).bind("blur" + this.eventNamespace, function () {
                g.buttonElement.removeClass(m)
            }), k && (this.element.bind("change" + this.eventNamespace, function () {
                e || g.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (a) {
                h.disabled || (e = !1, c = a.pageX, d = a.pageY)
            }).bind("mouseup" + this.eventNamespace, function (a) {
                h.disabled || (c !== a.pageX || d !== a.pageY) && (e = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                return h.disabled || e ? !1 : (a(this).toggleClass("ui-state-active"), g.buttonElement.attr("aria-pressed", g.element[0].checked), void 0)
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (h.disabled || e)return !1;
                a(this).addClass("ui-state-active"), g.buttonElement.attr("aria-pressed", "true");
                var b = g.element[0];
                j(b).not(b).map(function () {
                    return a(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                return h.disabled ? !1 : (a(this).addClass("ui-state-active"), b = this, g.document.one("mouseup", function () {
                    b = null
                }), void 0)
            }).bind("mouseup" + this.eventNamespace, function () {
                return h.disabled ? !1 : (a(this).removeClass("ui-state-active"), void 0)
            }).bind("keydown" + this.eventNamespace, function (b) {
                return h.disabled ? !1 : ((b.keyCode === a.ui.keyCode.SPACE || b.keyCode === a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active"), void 0)
            }).bind("keyup" + this.eventNamespace, function () {
                a(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (b) {
                b.keyCode === a.ui.keyCode.SPACE && a(this).click()
            })), this._setOption("disabled", h.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var a, b, c;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), c = this.element.is(":checked"), c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", c)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(f + " " + g + " " + h).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (a, b) {
            return this._super(a, b), "disabled" === a ? (b ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), void 0) : (this._resetButton(), void 0)
        },
        refresh: function () {
            var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            b !== this.options.disabled && this._setOption("disabled", b), "radio" === this.type ? j(this.element[0]).each(function () {
                a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type)return this.options.label && this.element.val(this.options.label), void 0;
            var b = this.buttonElement.removeClass(h), c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(), d = this.options.icons, e = d.primary && d.secondary, f = [];
            d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", a.trim(c)))) : f.push("ui-button-text-only"), b.addClass(f.join(" "))
        }
    }), a.widget("ui.buttonset", {
        version: "1.9.2",
        options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (a, b) {
            "disabled" === a && this.buttons.button("option", a, b), this._super(a, b)
        },
        refresh: function () {
            var b = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return a(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return a(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery);
!function (a) {
    var b = 5;
    a.widget("ui.slider", a.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var c, d, e = this.options, f = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), g = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", h = [];
            for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (e.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = a([]), e.range && (e.range === !0 && (e.values || (e.values = [this._valueMin(), this._valueMin()]), e.values.length && 2 !== e.values.length && (e.values = [e.values[0], e.values[0]])), this.range = a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))), d = e.values && e.values.length || 1, c = f.length; d > c; c++)h.push(g);
            this.handles = f.add(a(h.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (a) {
                a.preventDefault()
            }).mouseenter(function () {
                e.disabled || a(this).addClass("ui-state-hover")
            }).mouseleave(function () {
                a(this).removeClass("ui-state-hover")
            }).focus(function () {
                e.disabled ? a(this).blur() : (a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), a(this).addClass("ui-state-focus"))
            }).blur(function () {
                a(this).removeClass("ui-state-focus")
            }), this.handles.each(function (b) {
                a(this).data("ui-slider-handle-index", b)
            }), this._on(this.handles, {
                keydown: function (c) {
                    var d, e, f, g, h = a(c.target).data("ui-slider-handle-index");
                    switch (c.keyCode) {
                        case a.ui.keyCode.HOME:
                        case a.ui.keyCode.END:
                        case a.ui.keyCode.PAGE_UP:
                        case a.ui.keyCode.PAGE_DOWN:
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (c.preventDefault(), !this._keySliding && (this._keySliding = !0, a(c.target).addClass("ui-state-active"), d = this._start(c, h), d === !1))return
                    }
                    switch (g = this.options.step, e = f = this.options.values && this.options.values.length ? this.values(h) : this.value(), c.keyCode) {
                        case a.ui.keyCode.HOME:
                            f = this._valueMin();
                            break;
                        case a.ui.keyCode.END:
                            f = this._valueMax();
                            break;
                        case a.ui.keyCode.PAGE_UP:
                            f = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / b);
                            break;
                        case a.ui.keyCode.PAGE_DOWN:
                            f = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / b);
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                            if (e === this._valueMax())return;
                            f = this._trimAlignValue(e + g);
                            break;
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (e === this._valueMin())return;
                            f = this._trimAlignValue(e - g)
                    }
                    this._slide(c, h, f)
                }, keyup: function (b) {
                    var c = a(b.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), a(b.target).removeClass("ui-state-active"))
                }
            }), this._refreshValue(), this._animateOff = !1
        },
        _destroy: function () {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (b) {
            var c, d, e, f, g, h, i, j, k = this, l = this.options;
            return l.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), c = {
                x: b.pageX,
                y: b.pageY
            }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function (b) {
                var c = Math.abs(d - k.values(b));
                e > c && (e = c, f = a(this), g = b)
            }), l.range === !0 && this.values(1) === l.min && (g += 1, f = a(this.handles[g])), h = this._start(b, g), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = g, f.addClass("ui-state-active").focus(), i = f.offset(), j = !a(b.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = j ? {
                left: 0,
                top: 0
            } : {
                left: b.pageX - i.left - f.width() / 2,
                top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (a) {
            var b = {x: a.pageX, y: a.pageY}, c = this._normValueFromMouse(b);
            return this._slide(a, this._handleIndex, c), !1
        },
        _mouseStop: function (a) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (a) {
            var b, c, d, e, f;
            return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f)
        },
        _start: function (a, b) {
            var c = {handle: this.handles[b], value: this.value()};
            return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c)
        },
        _slide: function (a, b, c) {
            var d, e, f;
            this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && d > c) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c,
                values: e
            }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c, !0))) : c !== this.value() && (f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c
            }), f !== !1 && this.value(c))
        },
        _stop: function (a, b) {
            var c = {handle: this.handles[b], value: this.value()};
            this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c)
        },
        _change: function (a, b) {
            if (!this._keySliding && !this._mouseSliding) {
                var c = {handle: this.handles[b], value: this.value()};
                this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("change", a, c)
            }
        },
        value: function (a) {
            return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function (b, c) {
            var d, e, f;
            if (arguments.length > 1)return this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), this._change(null, b), void 0;
            if (!arguments.length)return this._values();
            if (!a.isArray(arguments[0]))return this.options.values && this.options.values.length ? this._values(b) : this.value();
            for (d = this.options.values, e = arguments[0], f = 0; d.length > f; f += 1)d[f] = this._trimAlignValue(e[f]), this._change(null, f);
            this._refreshValue()
        },
        _setOption: function (b, c) {
            var d, e = 0;
            switch (a.isArray(this.options.values) && (e = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments), b) {
                case"disabled":
                    c ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                    break;
                case"orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case"value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), d = 0; e > d; d += 1)this._change(null, d);
                    this._animateOff = !1;
                    break;
                case"min":
                case"max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1
            }
        },
        _value: function () {
            var a = this.options.value;
            return a = this._trimAlignValue(a)
        },
        _values: function (a) {
            var b, c, d;
            if (arguments.length)return b = this.options.values[a], b = this._trimAlignValue(b);
            for (c = this.options.values.slice(), d = 0; c.length > d; d += 1)c[d] = this._trimAlignValue(c[d]);
            return c
        },
        _trimAlignValue: function (a) {
            if (this._valueMin() >= a)return this._valueMin();
            if (a >= this._valueMax())return this._valueMax();
            var b = this.options.step > 0 ? this.options.step : 1, c = (a - this._valueMin()) % b, d = a - c;
            return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var b, c, d, e, f, g = this.options.range, h = this.options, i = this, j = this._animateOff ? !1 : h.animate, k = {};
            this.options.values && this.options.values.length ? this.handles.each(function (d) {
                c = 100 * ((i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin())), k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), i.options.range === !0 && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({left: c + "%"}, h.animate), 1 === d && i.range[j ? "animate" : "css"]({width: c - b + "%"}, {
                    queue: !1,
                    duration: h.animate
                })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({bottom: c + "%"}, h.animate), 1 === d && i.range[j ? "animate" : "css"]({height: c - b + "%"}, {
                    queue: !1,
                    duration: h.animate
                }))), b = c
            }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? 100 * ((d - e) / (f - e)) : 0, k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({width: c + "%"}, h.animate), "max" === g && "horizontal" === this.orientation && this.range[j ? "animate" : "css"]({width: 100 - c + "%"}, {
                queue: !1,
                duration: h.animate
            }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({height: c + "%"}, h.animate), "max" === g && "vertical" === this.orientation && this.range[j ? "animate" : "css"]({height: 100 - c + "%"}, {
                queue: !1,
                duration: h.animate
            }))
        }
    })
}(jQuery);
jQuery.effects || function (a, b) {
    var c = a.uiBackCompat !== !1, d = "ui-effects-";
    a.effects = {effect: {}}, function (b, c) {
        function d(a, b, c) {
            var d = m[b.type] || {};
            return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : a > d.max ? d.max : a)
        }

        function e(a) {
            var d = k(), e = d._rgba = [];
            return a = a.toLowerCase(), p(j, function (b, f) {
                var g, h = f.re.exec(a), i = h && f.parse(h), j = f.space || "rgba";
                return i ? (g = d[j](i), d[l[j].cache] = g[l[j].cache], e = d._rgba = g._rgba, !1) : c
            }), e.length ? ("0,0,0,0" === e.join() && b.extend(e, g.transparent), d) : g[a]
        }

        function f(a, b, c) {
            return c = (c + 1) % 1, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
        }

        var g, h = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "), i = /^([\-+])=\s*(\d+\.?\d*)/, j = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function (a) {
                return [a[1], a[2], a[3], a[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function (a) {
                return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (a) {
                return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (a) {
                return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function (a) {
                return [a[1], a[2] / 100, a[3] / 100, a[4]]
            }
        }], k = b.Color = function (a, c, d, e) {
            return new b.Color.fn.parse(a, c, d, e)
        }, l = {
            rgba: {
                props: {
                    red: {idx: 0, type: "byte"},
                    green: {idx: 1, type: "byte"},
                    blue: {idx: 2, type: "byte"}
                }
            },
            hsla: {
                props: {
                    hue: {idx: 0, type: "degrees"},
                    saturation: {idx: 1, type: "percent"},
                    lightness: {idx: 2, type: "percent"}
                }
            }
        }, m = {
            "byte": {floor: !0, max: 255},
            percent: {max: 1},
            degrees: {mod: 360, floor: !0}
        }, n = k.support = {}, o = b("<p>")[0], p = b.each;
        o.style.cssText = "background-color:rgba(1,1,1,.5)", n.rgba = o.style.backgroundColor.indexOf("rgba") > -1, p(l, function (a, b) {
            b.cache = "_" + a, b.props.alpha = {idx: 3, type: "percent", def: 1}
        }), k.fn = b.extend(k.prototype, {
            parse: function (f, h, i, j) {
                if (f === c)return this._rgba = [null, null, null, null], this;
                (f.jquery || f.nodeType) && (f = b(f).css(h), h = c);
                var m = this, n = b.type(f), o = this._rgba = [];
                return h !== c && (f = [f, h, i, j], n = "array"), "string" === n ? this.parse(e(f) || g._default) : "array" === n ? (p(l.rgba.props, function (a, b) {
                    o[b.idx] = d(f[b.idx], b)
                }), this) : "object" === n ? (f instanceof k ? p(l, function (a, b) {
                    f[b.cache] && (m[b.cache] = f[b.cache].slice())
                }) : p(l, function (b, c) {
                    var e = c.cache;
                    p(c.props, function (a, b) {
                        if (!m[e] && c.to) {
                            if ("alpha" === a || null == f[a])return;
                            m[e] = c.to(m._rgba)
                        }
                        m[e][b.idx] = d(f[a], b, !0)
                    }), m[e] && 0 > a.inArray(null, m[e].slice(0, 3)) && (m[e][3] = 1, c.from && (m._rgba = c.from(m[e])))
                }), this) : c
            }, is: function (a) {
                var b = k(a), d = !0, e = this;
                return p(l, function (a, f) {
                    var g, h = b[f.cache];
                    return h && (g = e[f.cache] || f.to && f.to(e._rgba) || [], p(f.props, function (a, b) {
                        return null != h[b.idx] ? d = h[b.idx] === g[b.idx] : c
                    })), d
                }), d
            }, _space: function () {
                var a = [], b = this;
                return p(l, function (c, d) {
                    b[d.cache] && a.push(c)
                }), a.pop()
            }, transition: function (a, b) {
                var c = k(a), e = c._space(), f = l[e], g = 0 === this.alpha() ? k("transparent") : this, h = g[f.cache] || f.to(g._rgba), i = h.slice();
                return c = c[f.cache], p(f.props, function (a, e) {
                    var f = e.idx, g = h[f], j = c[f], k = m[e.type] || {};
                    null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = d((j - g) * b + g, e)))
                }), this[e](i)
            }, blend: function (a) {
                if (1 === this._rgba[3])return this;
                var c = this._rgba.slice(), d = c.pop(), e = k(a)._rgba;
                return k(b.map(c, function (a, b) {
                    return (1 - d) * e[b] + d * a
                }))
            }, toRgbaString: function () {
                var a = "rgba(", c = b.map(this._rgba, function (a, b) {
                    return null == a ? b > 2 ? 1 : 0 : a
                });
                return 1 === c[3] && (c.pop(), a = "rgb("), a + c.join() + ")"
            }, toHslaString: function () {
                var a = "hsla(", c = b.map(this.hsla(), function (a, b) {
                    return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                });
                return 1 === c[3] && (c.pop(), a = "hsl("), a + c.join() + ")"
            }, toHexString: function (a) {
                var c = this._rgba.slice(), d = c.pop();
                return a && c.push(~~(255 * d)), "#" + b.map(c, function (a) {
                    return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), k.fn.parse.prototype = k.fn, l.hsla.to = function (a) {
            if (null == a[0] || null == a[1] || null == a[2])return [null, null, null, a[3]];
            var b, c, d = a[0] / 255, e = a[1] / 255, f = a[2] / 255, g = a[3], h = Math.max(d, e, f), i = Math.min(d, e, f), j = h - i, k = h + i, l = .5 * k;
            return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === l || 1 === l ? l : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
        }, l.hsla.from = function (a) {
            if (null == a[0] || null == a[1] || null == a[2])return [null, null, null, a[3]];
            var b = a[0] / 360, c = a[1], d = a[2], e = a[3], g = .5 >= d ? d * (1 + c) : d + c - d * c, h = 2 * d - g;
            return [Math.round(255 * f(h, g, b + 1 / 3)), Math.round(255 * f(h, g, b)), Math.round(255 * f(h, g, b - 1 / 3)), e]
        }, p(l, function (a, e) {
            var f = e.props, g = e.cache, h = e.to, j = e.from;
            k.fn[a] = function (a) {
                if (h && !this[g] && (this[g] = h(this._rgba)), a === c)return this[g].slice();
                var e, i = b.type(a), l = "array" === i || "object" === i ? a : arguments, m = this[g].slice();
                return p(f, function (a, b) {
                    var c = l["object" === i ? a : b.idx];
                    null == c && (c = m[b.idx]), m[b.idx] = d(c, b)
                }), j ? (e = k(j(m)), e[g] = m, e) : k(m)
            }, p(f, function (c, d) {
                k.fn[c] || (k.fn[c] = function (e) {
                    var f, g = b.type(e), h = "alpha" === c ? this._hsla ? "hsla" : "rgba" : a, j = this[h](), k = j[d.idx];
                    return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = b.type(e)), null == e && d.empty ? this : ("string" === g && (f = i.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[d.idx] = e, this[h](j)))
                })
            })
        }), p(h, function (a, c) {
            b.cssHooks[c] = {
                set: function (a, d) {
                    var f, g, h = "";
                    if ("string" !== b.type(d) || (f = e(d))) {
                        if (d = k(f || d), !n.rgba && 1 !== d._rgba[3]) {
                            for (g = "backgroundColor" === c ? a.parentNode : a; ("" === h || "transparent" === h) && g && g.style;)try {
                                h = b.css(g, "backgroundColor"), g = g.parentNode
                            } catch (i) {
                            }
                            d = d.blend(h && "transparent" !== h ? h : "_default")
                        }
                        d = d.toRgbaString()
                    }
                    try {
                        a.style[c] = d
                    } catch (j) {
                    }
                }
            }, b.fx.step[c] = function (a) {
                a.colorInit || (a.start = k(a.elem, c), a.end = k(a.end), a.colorInit = !0), b.cssHooks[c].set(a.elem, a.start.transition(a.end, a.pos))
            }
        }), b.cssHooks.borderColor = {
            expand: function (a) {
                var b = {};
                return p(["Top", "Right", "Bottom", "Left"], function (c, d) {
                    b["border" + d + "Color"] = a
                }), b
            }
        }, g = b.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery), function () {
        function c() {
            var b, c, d = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle, e = {};
            if (d && d.length && d[0] && d[d[0]])for (c = d.length; c--;)b = d[c], "string" == typeof d[b] && (e[a.camelCase(b)] = d[b]); else for (b in d)"string" == typeof d[b] && (e[b] = d[b]);
            return e
        }

        function d(b, c) {
            var d, e, g = {};
            for (d in c)e = c[d], b[d] !== e && (f[d] || (a.fx.step[d] || !isNaN(parseFloat(e))) && (g[d] = e));
            return g
        }

        var e = ["add", "remove", "toggle"], f = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (b, c) {
            a.fx.step[c] = function (a) {
                ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (jQuery.style(a.elem, c, a.end), a.setAttr = !0)
            }
        }), a.effects.animateClass = function (b, f, g, h) {
            var i = a.speed(f, g, h);
            return this.queue(function () {
                var f, g = a(this), h = g.attr("class") || "", j = i.children ? g.find("*").andSelf() : g;
                j = j.map(function () {
                    var b = a(this);
                    return {el: b, start: c.call(this)}
                }), f = function () {
                    a.each(e, function (a, c) {
                        b[c] && g[c + "Class"](b[c])
                    })
                }, f(), j = j.map(function () {
                    return this.end = c.call(this.el[0]), this.diff = d(this.start, this.end), this
                }), g.attr("class", h), j = j.map(function () {
                    var b = this, c = a.Deferred(), d = jQuery.extend({}, i, {
                        queue: !1, complete: function () {
                            c.resolve(b)
                        }
                    });
                    return this.el.animate(this.diff, d), c.promise()
                }), a.when.apply(a, j.get()).done(function () {
                    f(), a.each(arguments, function () {
                        var b = this.el;
                        a.each(this.diff, function (a) {
                            b.css(a, "")
                        })
                    }), i.complete.call(g[0])
                })
            })
        }, a.fn.extend({
            _addClass: a.fn.addClass, addClass: function (b, c, d, e) {
                return c ? a.effects.animateClass.call(this, {add: b}, c, d, e) : this._addClass(b)
            }, _removeClass: a.fn.removeClass, removeClass: function (b, c, d, e) {
                return c ? a.effects.animateClass.call(this, {remove: b}, c, d, e) : this._removeClass(b)
            }, _toggleClass: a.fn.toggleClass, toggleClass: function (c, d, e, f, g) {
                return "boolean" == typeof d || d === b ? e ? a.effects.animateClass.call(this, d ? {add: c} : {remove: c}, e, f, g) : this._toggleClass(c, d) : a.effects.animateClass.call(this, {toggle: c}, d, e, f)
            }, switchClass: function (b, c, d, e, f) {
                return a.effects.animateClass.call(this, {add: c, remove: b}, d, e, f)
            }
        })
    }(), function () {
        function e(b, c, d, e) {
            return a.isPlainObject(b) && (c = b, b = b.effect), b = {effect: b}, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
        }

        function f(b) {
            return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" != typeof b || a.effects.effect[b] ? !1 : c && a.effects[b] ? !1 : !0
        }

        a.extend(a.effects, {
            version: "1.9.2", save: function (a, b) {
                for (var c = 0; b.length > c; c++)null !== b[c] && a.data(d + b[c], a[0].style[b[c]])
            }, restore: function (a, c) {
                var e, f;
                for (f = 0; c.length > f; f++)null !== c[f] && (e = a.data(d + c[f]), e === b && (e = ""), a.css(c[f], e))
            }, setMode: function (a, b) {
                return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
            }, getBaseline: function (a, b) {
                var c, d;
                switch (a[0]) {
                    case"top":
                        c = 0;
                        break;
                    case"middle":
                        c = .5;
                        break;
                    case"bottom":
                        c = 1;
                        break;
                    default:
                        c = a[0] / b.height
                }
                switch (a[1]) {
                    case"left":
                        d = 0;
                        break;
                    case"center":
                        d = .5;
                        break;
                    case"right":
                        d = 1;
                        break;
                    default:
                        d = a[1] / b.width
                }
                return {x: d, y: c}
            }, createWrapper: function (b) {
                if (b.parent().is(".ui-effects-wrapper"))return b.parent();
                var c = {
                    width: b.outerWidth(!0),
                    height: b.outerHeight(!0),
                    "float": b.css("float")
                }, d = a("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), e = {width: b.width(), height: b.height()}, f = document.activeElement;
                try {
                    f.id
                } catch (g) {
                    f = document.body
                }
                return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({position: "relative"}), b.css({position: "relative"})) : (a.extend(c, {
                    position: b.css("position"),
                    zIndex: b.css("z-index")
                }), a.each(["top", "left", "bottom", "right"], function (a, d) {
                    c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                }), b.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), b.css(e), d.css(c).show()
            }, removeWrapper: function (b) {
                var c = document.activeElement;
                return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
            }, setTransition: function (b, c, d, e) {
                return e = e || {}, a.each(c, function (a, c) {
                    var f = b.cssUnit(c);
                    f[0] > 0 && (e[c] = f[0] * d + f[1])
                }), e
            }
        }), a.fn.extend({
            effect: function () {
                function b(b) {
                    function c() {
                        a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
                    }

                    var e = a(this), f = d.complete, g = d.mode;
                    (e.is(":hidden") ? "hide" === g : "show" === g) ? c() : h.call(e[0], d, c)
                }

                var d = e.apply(this, arguments), f = d.mode, g = d.queue, h = a.effects.effect[d.effect], i = !h && c && a.effects[d.effect];
                return a.fx.off || !h && !i ? f ? this[f](d.duration, d.complete) : this.each(function () {
                    d.complete && d.complete.call(this)
                }) : h ? g === !1 ? this.each(b) : this.queue(g || "fx", b) : i.call(this, {
                    options: d,
                    duration: d.duration,
                    callback: d.complete,
                    mode: d.mode
                })
            }, _show: a.fn.show, show: function (a) {
                if (f(a))return this._show.apply(this, arguments);
                var b = e.apply(this, arguments);
                return b.mode = "show", this.effect.call(this, b)
            }, _hide: a.fn.hide, hide: function (a) {
                if (f(a))return this._hide.apply(this, arguments);
                var b = e.apply(this, arguments);
                return b.mode = "hide", this.effect.call(this, b)
            }, __toggle: a.fn.toggle, toggle: function (b) {
                if (f(b) || "boolean" == typeof b || a.isFunction(b))return this.__toggle.apply(this, arguments);
                var c = e.apply(this, arguments);
                return c.mode = "toggle", this.effect.call(this, c)
            }, cssUnit: function (b) {
                var c = this.css(b), d = [];
                return a.each(["em", "px", "%", "pt"], function (a, b) {
                    c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                }), d
            }
        })
    }(), function () {
        var b = {};
        a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (a, c) {
            b[c] = function (b) {
                return Math.pow(b, a + 2)
            }
        }), a.extend(b, {
            Sine: function (a) {
                return 1 - Math.cos(a * Math.PI / 2)
            }, Circ: function (a) {
                return 1 - Math.sqrt(1 - a * a)
            }, Elastic: function (a) {
                return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
            }, Back: function (a) {
                return a * a * (3 * a - 2)
            }, Bounce: function (a) {
                for (var b, c = 4; ((b = Math.pow(2, --c)) - 1) / 11 > a;);
                return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
            }
        }), a.each(b, function (b, c) {
            a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function (a) {
                return 1 - c(1 - a)
            }, a.easing["easeInOut" + b] = function (a) {
                return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
            }
        })
    }()
}(jQuery);
!function (a) {
    var b = /up|down|vertical/, c = /up|left|vertical|horizontal/;
    a.effects.effect.blind = function (d, e) {
        var f, g, h, i = a(this), j = ["position", "top", "bottom", "left", "right", "height", "width"], k = a.effects.setMode(i, d.mode || "hide"), l = d.direction || "up", m = b.test(l), n = m ? "height" : "width", o = m ? "top" : "left", p = c.test(l), q = {}, r = "show" === k;
        i.parent().is(".ui-effects-wrapper") ? a.effects.save(i.parent(), j) : a.effects.save(i, j), i.show(), f = a.effects.createWrapper(i).css({overflow: "hidden"}), g = f[n](), h = parseFloat(f.css(o)) || 0, q[n] = r ? g : 0, p || (i.css(m ? "bottom" : "right", 0).css(m ? "top" : "left", "auto").css({position: "absolute"}), q[o] = r ? h : g + h), r && (f.css(n, 0), p || f.css(o, h + g)), f.animate(q, {
            duration: d.duration,
            easing: d.easing,
            queue: !1,
            complete: function () {
                "hide" === k && i.hide(), a.effects.restore(i, j), a.effects.removeWrapper(i), e()
            }
        })
    }
}(jQuery);
!function (a) {
    a.effects.effect.bounce = function (b, c) {
        var d, e, f, g = a(this), h = ["position", "top", "bottom", "left", "right", "height", "width"], i = a.effects.setMode(g, b.mode || "effect"), j = "hide" === i, k = "show" === i, l = b.direction || "up", m = b.distance, n = b.times || 5, o = 2 * n + (k || j ? 1 : 0), p = b.duration / o, q = b.easing, r = "up" === l || "down" === l ? "top" : "left", s = "up" === l || "left" === l, t = g.queue(), u = t.length;
        for ((k || j) && h.push("opacity"), a.effects.save(g, h), g.show(), a.effects.createWrapper(g), m || (m = g["top" === r ? "outerHeight" : "outerWidth"]() / 3), k && (f = {opacity: 1}, f[r] = 0, g.css("opacity", 0).css(r, s ? 2 * -m : 2 * m).animate(f, p, q)), j && (m /= Math.pow(2, n - 1)), f = {}, f[r] = 0, d = 0; n > d; d++)e = {}, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q).animate(f, p, q), m = j ? 2 * m : m / 2;
        j && (e = {opacity: 0}, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q)), g.queue(function () {
            j && g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
        }), u > 1 && t.splice.apply(t, [1, 0].concat(t.splice(u, o + 1))), g.dequeue()
    }
}(jQuery);
!function (a) {
    a.effects.effect.clip = function (b, c) {
        var d, e, f, g = a(this), h = ["position", "top", "bottom", "left", "right", "height", "width"], i = a.effects.setMode(g, b.mode || "hide"), j = "show" === i, k = b.direction || "vertical", l = "vertical" === k, m = l ? "height" : "width", n = l ? "top" : "left", o = {};
        a.effects.save(g, h), g.show(), d = a.effects.createWrapper(g).css({overflow: "hidden"}), e = "IMG" === g[0].tagName ? d : g, f = e[m](), j && (e.css(m, 0), e.css(n, f / 2)), o[m] = j ? f : 0, o[n] = j ? 0 : f / 2, e.animate(o, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function () {
                j || g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
            }
        })
    }
}(jQuery);
!function (a) {
    a.effects.effect.drop = function (b, c) {
        var d, e = a(this), f = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], g = a.effects.setMode(e, b.mode || "hide"), h = "show" === g, i = b.direction || "left", j = "up" === i || "down" === i ? "top" : "left", k = "up" === i || "left" === i ? "pos" : "neg", l = {opacity: h ? 1 : 0};
        a.effects.save(e, f), e.show(), a.effects.createWrapper(e), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0) / 2, h && e.css("opacity", 0).css(j, "pos" === k ? -d : d), l[j] = (h ? "pos" === k ? "+=" : "-=" : "pos" === k ? "-=" : "+=") + d, e.animate(l, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function () {
                "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
            }
        })
    }
}(jQuery);
!function (a) {
    a.effects.effect.explode = function (b, c) {
        function d() {
            t.push(this), t.length === l * m && e()
        }

        function e() {
            n.css({visibility: "visible"}), a(t).remove(), p || n.hide(), c()
        }

        var f, g, h, i, j, k, l = b.pieces ? Math.round(Math.sqrt(b.pieces)) : 3, m = l, n = a(this), o = a.effects.setMode(n, b.mode || "hide"), p = "show" === o, q = n.show().css("visibility", "hidden").offset(), r = Math.ceil(n.outerWidth() / m), s = Math.ceil(n.outerHeight() / l), t = [];
        for (f = 0; l > f; f++)for (i = q.top + f * s, k = f - (l - 1) / 2, g = 0; m > g; g++)h = q.left + g * r, j = g - (m - 1) / 2, n.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -g * r,
            top: -f * s
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: r,
            height: s,
            left: h + (p ? j * r : 0),
            top: i + (p ? k * s : 0),
            opacity: p ? 0 : 1
        }).animate({
            left: h + (p ? 0 : j * r),
            top: i + (p ? 0 : k * s),
            opacity: p ? 1 : 0
        }, b.duration || 500, b.easing, d)
    }
}(jQuery);
!function (a) {
    a.effects.effect.fade = function (b, c) {
        var d = a(this), e = a.effects.setMode(d, b.mode || "toggle");
        d.animate({opacity: e}, {queue: !1, duration: b.duration, easing: b.easing, complete: c})
    }
}(jQuery);
!function (a) {
    a.effects.effect.fold = function (b, c) {
        var d, e, f = a(this), g = ["position", "top", "bottom", "left", "right", "height", "width"], h = a.effects.setMode(f, b.mode || "hide"), i = "show" === h, j = "hide" === h, k = b.size || 15, l = /([0-9]+)%/.exec(k), m = !!b.horizFirst, n = i !== m, o = n ? ["width", "height"] : ["height", "width"], p = b.duration / 2, q = {}, r = {};
        a.effects.save(f, g), f.show(), d = a.effects.createWrapper(f).css({overflow: "hidden"}), e = n ? [d.width(), d.height()] : [d.height(), d.width()], l && (k = parseInt(l[1], 10) / 100 * e[j ? 0 : 1]), i && d.css(m ? {
            height: 0,
            width: k
        } : {
            height: k,
            width: 0
        }), q[o[0]] = i ? e[0] : k, r[o[1]] = i ? e[1] : 0, d.animate(q, p, b.easing).animate(r, p, b.easing, function () {
            j && f.hide(), a.effects.restore(f, g), a.effects.removeWrapper(f), c()
        })
    }
}(jQuery);
!function (a) {
    a.effects.effect.highlight = function (b, c) {
        var d = a(this), e = ["backgroundImage", "backgroundColor", "opacity"], f = a.effects.setMode(d, b.mode || "show"), g = {backgroundColor: d.css("backgroundColor")};
        "hide" === f && (g.opacity = 0), a.effects.save(d, e), d.show().css({
            backgroundImage: "none",
            backgroundColor: b.color || "#ffff99"
        }).animate(g, {
            queue: !1, duration: b.duration, easing: b.easing, complete: function () {
                "hide" === f && d.hide(), a.effects.restore(d, e), c()
            }
        })
    }
}(jQuery);
!function (a) {
    a.effects.effect.pulsate = function (b, c) {
        var d, e = a(this), f = a.effects.setMode(e, b.mode || "show"), g = "show" === f, h = "hide" === f, i = g || "hide" === f, j = 2 * (b.times || 5) + (i ? 1 : 0), k = b.duration / j, l = 0, m = e.queue(), n = m.length;
        for ((g || !e.is(":visible")) && (e.css("opacity", 0).show(), l = 1), d = 1; j > d; d++)e.animate({opacity: l}, k, b.easing), l = 1 - l;
        e.animate({opacity: l}, k, b.easing), e.queue(function () {
            h && e.hide(), c()
        }), n > 1 && m.splice.apply(m, [1, 0].concat(m.splice(n, j + 1))), e.dequeue()
    }
}(jQuery);
!function (a) {
    a.effects.effect.puff = function (b, c) {
        var d = a(this), e = a.effects.setMode(d, b.mode || "hide"), f = "hide" === e, g = parseInt(b.percent, 10) || 150, h = g / 100, i = {
            height: d.height(),
            width: d.width(),
            outerHeight: d.outerHeight(),
            outerWidth: d.outerWidth()
        };
        a.extend(b, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: e,
            complete: c,
            percent: f ? g : 100,
            from: f ? i : {
                height: i.height * h,
                width: i.width * h,
                outerHeight: i.outerHeight * h,
                outerWidth: i.outerWidth * h
            }
        }), d.effect(b)
    }, a.effects.effect.scale = function (b, c) {
        var d = a(this), e = a.extend(!0, {}, b), f = a.effects.setMode(d, b.mode || "effect"), g = parseInt(b.percent, 10) || (0 === parseInt(b.percent, 10) ? 0 : "hide" === f ? 0 : 100), h = b.direction || "both", i = b.origin, j = {
            height: d.height(),
            width: d.width(),
            outerHeight: d.outerHeight(),
            outerWidth: d.outerWidth()
        }, k = {y: "horizontal" !== h ? g / 100 : 1, x: "vertical" !== h ? g / 100 : 1};
        e.effect = "size", e.queue = !1, e.complete = c, "effect" !== f && (e.origin = i || ["middle", "center"], e.restore = !0), e.from = b.from || ("show" === f ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : j), e.to = {
            height: j.height * k.y,
            width: j.width * k.x,
            outerHeight: j.outerHeight * k.y,
            outerWidth: j.outerWidth * k.x
        }, e.fade && ("show" === f && (e.from.opacity = 0, e.to.opacity = 1), "hide" === f && (e.from.opacity = 1, e.to.opacity = 0)), d.effect(e)
    }, a.effects.effect.size = function (b, c) {
        var d, e, f, g = a(this), h = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], i = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], j = ["width", "height", "overflow"], k = ["fontSize"], l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], m = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], n = a.effects.setMode(g, b.mode || "effect"), o = b.restore || "effect" !== n, p = b.scale || "both", q = b.origin || ["middle", "center"], r = g.css("position"), s = o ? h : i, t = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === n && g.show(), d = {
            height: g.height(),
            width: g.width(),
            outerHeight: g.outerHeight(),
            outerWidth: g.outerWidth()
        }, "toggle" === b.mode && "show" === n ? (g.from = b.to || t, g.to = b.from || d) : (g.from = b.from || ("show" === n ? t : d), g.to = b.to || ("hide" === n ? t : d)), f = {
            from: {
                y: g.from.height / d.height,
                x: g.from.width / d.width
            }, to: {y: g.to.height / d.height, x: g.to.width / d.width}
        }, ("box" === p || "both" === p) && (f.from.y !== f.to.y && (s = s.concat(l), g.from = a.effects.setTransition(g, l, f.from.y, g.from), g.to = a.effects.setTransition(g, l, f.to.y, g.to)), f.from.x !== f.to.x && (s = s.concat(m), g.from = a.effects.setTransition(g, m, f.from.x, g.from), g.to = a.effects.setTransition(g, m, f.to.x, g.to))), ("content" === p || "both" === p) && f.from.y !== f.to.y && (s = s.concat(k).concat(j), g.from = a.effects.setTransition(g, k, f.from.y, g.from), g.to = a.effects.setTransition(g, k, f.to.y, g.to)), a.effects.save(g, s), g.show(), a.effects.createWrapper(g), g.css("overflow", "hidden").css(g.from), q && (e = a.effects.getBaseline(q, d), g.from.top = (d.outerHeight - g.outerHeight()) * e.y, g.from.left = (d.outerWidth - g.outerWidth()) * e.x, g.to.top = (d.outerHeight - g.to.outerHeight) * e.y, g.to.left = (d.outerWidth - g.to.outerWidth) * e.x), g.css(g.from), ("content" === p || "both" === p) && (l = l.concat(["marginTop", "marginBottom"]).concat(k), m = m.concat(["marginLeft", "marginRight"]), j = h.concat(l).concat(m), g.find("*[width]").each(function () {
            var c = a(this), d = {
                height: c.height(),
                width: c.width(),
                outerHeight: c.outerHeight(),
                outerWidth: c.outerWidth()
            };
            o && a.effects.save(c, j), c.from = {
                height: d.height * f.from.y,
                width: d.width * f.from.x,
                outerHeight: d.outerHeight * f.from.y,
                outerWidth: d.outerWidth * f.from.x
            }, c.to = {
                height: d.height * f.to.y,
                width: d.width * f.to.x,
                outerHeight: d.height * f.to.y,
                outerWidth: d.width * f.to.x
            }, f.from.y !== f.to.y && (c.from = a.effects.setTransition(c, l, f.from.y, c.from), c.to = a.effects.setTransition(c, l, f.to.y, c.to)), f.from.x !== f.to.x && (c.from = a.effects.setTransition(c, m, f.from.x, c.from), c.to = a.effects.setTransition(c, m, f.to.x, c.to)), c.css(c.from), c.animate(c.to, b.duration, b.easing, function () {
                o && a.effects.restore(c, j)
            })
        })), g.animate(g.to, {
            queue: !1, duration: b.duration, easing: b.easing, complete: function () {
                0 === g.to.opacity && g.css("opacity", g.from.opacity), "hide" === n && g.hide(), a.effects.restore(g, s), o || ("static" === r ? g.css({
                    position: "relative",
                    top: g.to.top,
                    left: g.to.left
                }) : a.each(["top", "left"], function (a, b) {
                    g.css(b, function (b, c) {
                        var d = parseInt(c, 10), e = a ? g.to.left : g.to.top;
                        return "auto" === c ? e + "px" : d + e + "px"
                    })
                })), a.effects.removeWrapper(g), c()
            }
        })
    }
}(jQuery);
!function (a) {
    a.effects.effect.shake = function (b, c) {
        var d, e = a(this), f = ["position", "top", "bottom", "left", "right", "height", "width"], g = a.effects.setMode(e, b.mode || "effect"), h = b.direction || "left", i = b.distance || 20, j = b.times || 3, k = 2 * j + 1, l = Math.round(b.duration / k), m = "up" === h || "down" === h ? "top" : "left", n = "up" === h || "left" === h, o = {}, p = {}, q = {}, r = e.queue(), s = r.length;
        for (a.effects.save(e, f), e.show(), a.effects.createWrapper(e), o[m] = (n ? "-=" : "+=") + i, p[m] = (n ? "+=" : "-=") + 2 * i, q[m] = (n ? "-=" : "+=") + 2 * i, e.animate(o, l, b.easing), d = 1; j > d; d++)e.animate(p, l, b.easing).animate(q, l, b.easing);
        e.animate(p, l, b.easing).animate(o, l / 2, b.easing).queue(function () {
            "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
        }), s > 1 && r.splice.apply(r, [1, 0].concat(r.splice(s, k + 1))), e.dequeue()
    }
}(jQuery);
!function (a) {
    a.effects.effect.slide = function (b, c) {
        var d, e = a(this), f = ["position", "top", "bottom", "left", "right", "width", "height"], g = a.effects.setMode(e, b.mode || "show"), h = "show" === g, i = b.direction || "left", j = "up" === i || "down" === i ? "top" : "left", k = "up" === i || "left" === i, l = {};
        a.effects.save(e, f), e.show(), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0), a.effects.createWrapper(e).css({overflow: "hidden"}), h && e.css(j, k ? isNaN(d) ? "-" + d : -d : d), l[j] = (h ? k ? "+=" : "-=" : k ? "-=" : "+=") + d, e.animate(l, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function () {
                "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
            }
        })
    }
}(jQuery);
!function (a) {
    a.effects.effect.transfer = function (b, c) {
        var d = a(this), e = a(b.to), f = "fixed" === e.css("position"), g = a("body"), h = f ? g.scrollTop() : 0, i = f ? g.scrollLeft() : 0, j = e.offset(), k = {
            top: j.top - h,
            left: j.left - i,
            height: e.innerHeight(),
            width: e.innerWidth()
        }, l = d.offset(), m = a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.className).css({
            top: l.top - h,
            left: l.left - i,
            height: d.innerHeight(),
            width: d.innerWidth(),
            position: f ? "fixed" : "absolute"
        }).animate(k, b.duration, b.easing, function () {
            m.remove(), c()
        })
    }
}(jQuery);
!function (a) {
    function b(b, f, g) {
        var h = !1;
        if (d) {
            var i = [];
            a.each(e, function () {
                g.hasOwnProperty(this) && (h = !0) && i.push({name: this, val: g[this]})
            });
            if (h) {
                a.each(g, function (a) {
                    i.push({name: a, val: this})
                });
                g = i
            }
        }
        a.each(g, function (d, e) {
            if (h) {
                d = e.name;
                e = e.val
            }
            if (a.isFunction(e) && (!c || e.toString().indexOf(".__base") > -1)) {
                var g = b[d] || function () {
                    };
                f[d] = function () {
                    var a = this.__base;
                    this.__base = g;
                    var b = e.apply(this, arguments);
                    this.__base = a;
                    return b
                }
            } else f[d] = e
        })
    }

    var c = function () {
        }.toString().indexOf("_") > -1, d = a.browser.msie, e = d ? ["toString", "valueOf"] : null, f = function () {
    };
    a.inherit = function () {
        var c = arguments, d = a.isFunction(c[0]), e = d ? c[0] : f, g = c[d ? 1 : 0] || {}, h = c[d ? 2 : 1], i = g.__constructor || d && e.prototype.__constructor ? function () {
            return this.__constructor.apply(this, arguments)
        } : function () {
        };
        if (!d) {
            i.prototype = g;
            i.prototype.__self = i.prototype.constructor = i;
            return a.extend(i, h)
        }
        a.extend(i, e);
        var j = function () {
        }, k = j.prototype = e.prototype, l = i.prototype = new j;
        l.__self = l.constructor = i;
        b(k, l, g);
        h && b(e, i, h);
        return i
    };
    a.inheritSelf = function (a, c, d) {
        var e = a.prototype;
        b(e, e, c);
        d && b(a, a, d);
        return a
    }
}(jQuery);
var TCS = TCS || {};
!function (a, b) {
    function c(c) {
        if (!a || "undefined" == typeof a.form) {
            var d = b(c), e = d.val().length;
            setTimeout(function () {
                d.caret(e, e)
            }, 10)
        }
    }

    var d = (b.browser.msie ? "paste" : "input") + ".mask", e = void 0 != window.orientation;
    b.mask = {definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"}, dataName: "rawMaskFn"};
    b.fn.extend({
        caret: function (a, b) {
            if (0 != this.length) {
                if ("number" == typeof a) {
                    b = "number" == typeof b ? b : a;
                    return this.each(function () {
                        try {
                            if (this.setSelectionRange)this.setSelectionRange(a, b); else if (this.createTextRange) {
                                var c = this.createTextRange();
                                c.collapse(!0);
                                c.moveEnd("character", b);
                                c.moveStart("character", a);
                                c.select()
                            }
                        } catch (d) {
                        }
                    })
                }
                if (this[0].setSelectionRange) {
                    a = this[0].selectionStart;
                    b = this[0].selectionEnd
                } else if (document.selection && document.selection.createRange) {
                    var c = document.selection.createRange();
                    a = 0 - c.duplicate().moveStart("character", -1e5);
                    b = a + c.text.length
                }
                return {begin: a, end: b}
            }
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (c, f) {
            if (!c && this.length > 0) {
                var g = b(this[0]);
                return g.data(b.mask.dataName)()
            }
            f = b.extend({
                placeholder: "_",
                completed: null,
                before: null,
                autoclear: !0,
                cut: !1,
                cursorToBegin: !0,
                className: "tcs-masked-input",
                emptyClassName: "tcs-masked-input-empty",
                focusClassName: "tcs-masked-input-focus"
            }, f);
            var h = b.mask.definitions, i = [], j = c.length, k = null, l = c.length;
            b(this[0]).addClass(f.className).data("mask", c);
            b.each(c.split(""), function (a, b) {
                if ("?" == b) {
                    l--;
                    j = a
                } else if (h[b]) {
                    i.push(new RegExp(h[b]));
                    null == k && (k = i.length - 1)
                } else i.push(null)
            });
            return this.trigger("unmask").each(function () {
                function g(a) {
                    for (; ++a <= l && !i[a];);
                    return a
                }

                function m(a) {
                    for (; --a >= 0 && !i[a];);
                    return a
                }

                function n(a, b) {
                    if (!(0 > a)) {
                        for (var c = a, d = g(b); l > c; c++)if (i[c]) {
                            if (!(l > d && i[c].test(w[d])))break;
                            w[c] = w[d];
                            w[d] = f.placeholder;
                            d = g(d)
                        }
                        s();
                        v.caret(Math.max(k, a))
                    }
                }

                function o(a) {
                    for (var b = a, c = f.placeholder; l > b; b++)if (i[b]) {
                        var d = g(b), e = w[b];
                        w[b] = c;
                        if (!(l > d && i[d].test(e)))break;
                        c = e
                    }
                }

                function p(a) {
                    var b = a.which;
                    if (8 == b || 46 == b || e && 127 == b) {
                        var c = v.caret(), d = c.begin, f = c.end;
                        if (f - d == 0) {
                            d = 46 != b ? m(d) : f = g(d - 1);
                            f = 46 == b ? g(f) : f
                        }
                        r(d, f);
                        n(d, f - 1);
                        return !1
                    }
                    if (27 == b) {
                        v.val(x);
                        v.caret(0, u());
                        return !1
                    }
                }

                function q(a) {
                    var b = a.which, c = v.caret();
                    if (a.ctrlKey || a.altKey || a.metaKey || 32 > b)return !0;
                    if (b) {
                        if (c.end - c.begin != 0) {
                            r(c.begin, c.end);
                            n(c.begin, c.end - 1)
                        }
                        var d = g(c.begin - 1);
                        if (l > d) {
                            var e = String.fromCharCode(b);
                            "function" == typeof f.keypressPreprocess && (e = f.keypressPreprocess(e));
                            if (i[d].test(e)) {
                                o(d);
                                w[d] = e;
                                s();
                                var h = g(d);
                                v.caret(h);
                                f.completed && h >= l && f.completed.call(v)
                            }
                        }
                        return !1
                    }
                }

                function r(a, b) {
                    for (var c = a; b > c && l > c; c++)i[c] && (w[c] = f.placeholder)
                }

                function s() {
                    if (f.cut) {
                        var a = w.slice(0, t(w.join("")) + 1);
                        return v.val(a.join("")).val()
                    }
                    return v.val(w.join("")).val()
                }

                function t(a) {
                    a += "";
                    for (var b = a.length; !(-1 === b || i[b] && i[b].test(a.charAt(b)));)b--;
                    return b
                }

                function u(a, b) {
                    var c = v.val(), d = -1;
                    if ("function" == typeof f.before && a && c && b) {
                        f.before(v, w);
                        c = v.val()
                    }
                    for (var e = 0, g = 0; l > e; e++)if (i[e]) {
                        w[e] = f.placeholder;
                        for (; g++ < c.length;) {
                            var h = c.charAt(g - 1);
                            if (i[g - 1] && i[g - 1].test(h)) {
                                w[e] = h;
                                d = e;
                                break
                            }
                        }
                        if (g > c.length)break
                    } else if (w[e] == c.charAt(g) && e != j) {
                        g++;
                        d = e
                    }
                    if (!a && j > d + 1) {
                        v.val("");
                        v.addClass(f.emptyClassName);
                        r(0, l)
                    } else if (a || d + 1 >= j) {
                        v.removeClass(f.emptyClassName);
                        s();
                        a || v.val(v.val().substring(0, d + 1))
                    }
                    return j ? e : k
                }

                var v = b(this), w = b.map(c.split(""), function (a) {
                    return "?" != a ? h[a] ? f.placeholder : a : void 0
                }), x = v.val();
                v.data(b.mask.dataName, function () {
                    return b.map(w, function (a, b) {
                        return i[b] && a != f.placeholder ? a : null
                    }).join("")
                });
                v.attr("readonly") || v.one("unmask", function () {
                    v.unbind(".mask").removeData(b.mask.dataName).data("mask", "")
                }).bind("focus.mask", function () {
                    var d, e = c.replace(/9/g, f.placeholder).replace(/\?/g, "");
                    v.addClass(f.focusClassName);
                    x = v.val();
                    if (f.autoclear)var d = u();
                    s();
                    var g = function () {
                        var g = b.inArray(f.placeholder, w);
                        !f.cursorToBegin || x && x !== e ? d == c.length ? a && "undefined" == typeof a.form && v.caret(d, d) : x !== e && x.length ? a && "undefined" == typeof a.form && v.caret(x.length, x.length) : v.caret(f.cursorToBegin ? g : d) : v.caret(g, g)
                    };
                    (b.browser.msie ? g : function () {
                        setTimeout(g, 0)
                    })()
                }).bind("click.mask", function () {
                    var a = c.replace(/9/g, f.placeholder).replace(/\?/g, ""), d = v.val(), e = function () {
                        var c = b.inArray(f.placeholder, w);
                        !f.cursorToBegin || d && d !== a || v.caret(c, c)
                    };
                    (b.browser.msie ? e : function () {
                        setTimeout(e, 0)
                    })()
                }).bind("focusout.mask", function () {
                    var a = c.replace(/9/g, f.placeholder).replace(/\?/g, "");
                    v.removeClass(f.focusClassName);
                    if (f.autoclear || v.val() == a) {
                        u();
                        v.val() != x && v.change()
                    }
                }).bind("keydown.mask", p).bind("keypress.mask", q).bind(d, function () {
                    setTimeout(function () {
                        v.caret(u(!0))
                    }, 0)
                }).bind("paste", function () {
                    setTimeout(function () {
                        v.caret(u(!0, !0))
                    }, 0)
                }).bind("clearmask", function () {
                    r(0, l)
                }).bind("change.mask", function () {
                    u()
                }).bind("sync.mask", function () {
                    v.caret(u(!0))
                });
                u()
            })
        }
    });
    b(document).on("click", "input[type=text], input[type=email], input[type=url], input[type=search], input[type=tel]", function (a) {
        var d = b(a.target);
        if (!d.data("mask") && !d.data("hascaret")) {
            d.off("focus.caret").on("focus.caret", function (a) {
                c(a.target)
            });
            c(a.target);
            d.data("hascaret", !0)
        }
    })
}(TCS, jQuery);
!function (a, b, c) {
    function d(a) {
        return a
    }

    function e(a) {
        return decodeURIComponent(a.replace(g, " "))
    }

    function f(a) {
        return a.constructor.toString().match(/function ([^(]*)\(/)[1]
    }

    var g = /\+/g, h = a.cookie = function (g, i, j) {
        if (i !== c) {
            j = a.extend({}, h.defaults, j);
            null === i && (j.expires = -1);
            if ("number" == typeof j.expires) {
                var k = j.expires, l = j.expires = new Date;
                l.setDate(l.getDate() + k)
            }
            i = h.json ? JSON.stringify(i) : String(i);
            return b.cookie = [encodeURIComponent(g), "=", h.raw ? i : encodeURIComponent(i), j.expires ? "; expires=" + j.expires.toUTCString() : "", j.path ? "; path=" + j.path : "", j.domain ? "; domain=" + j.domain : "", j.secure ? "; secure" : ""].join("")
        }
        for (var m, n, o, p = h.raw ? d : e, q = b.cookie.split("; "), r = null, s = 0; o = q[s] && q[s].split("="); s++) {
            m = p(o.shift());
            if ("RegExp" === f(g) && g.test(m)) {
                n = p(o.join("="));
                r = r || {};
                r[m] = h.json ? JSON.parse(n) : n
            } else if ("String" === f(g) && m === g) {
                n = p(o.join("="));
                try {
                    return h.json ? JSON.parse(n) : n
                } catch (t) {
                }
            }
        }
        return r || null
    };
    h.defaults = {};
    a.removeCookie = function (b, c) {
        if (null !== a.cookie(b, c)) {
            a.cookie(b, null, c);
            return !0
        }
        return !1
    }
}(jQuery, document);
var TCS = TCS || {};
!function (a) {
    "use strict";
    a.permaCookie = function (b, c) {
        var d = {
            methods: ["cookie", "localstorage"], prefix: "__P__", initialize: {}, set: function (a, b) {
                var c, d;
                for (c = 0; c < this.methods.length; c++) {
                    d = "set_" + this.methods[c];
                    this.initialize[this.methods[c]] = this[d](this.prefix + a, b)
                }
                return this.isInitializeSuccess()
            }, isInitializeSuccess: function () {
                var a, b = !1;
                for (a in this.initialize)this.initialize.hasOwnProperty(a) && (b = b || this.initialize[a]);
                return b
            }, set_cookie: function (b, c) {
                var d = 3650;
                a.cookie(b, c, {path: "/", expires: d});
                return a.cookie(b) == c
            }, set_localstorage: function (a, b) {
                try {
                    if (window.localStorage) {
                        b ? localStorage.setItem(a, b) : localStorage.removeItem(a);
                        return localStorage.getItem(a) == b
                    }
                    return !1
                } catch (c) {
                    return !1
                }
            }, get: function (a) {
                var b, c, d, e = this.methods;
                for (b = 0; b < e.length; b++) {
                    c = "get_" + e[b];
                    d = this[c](this.prefix + a);
                    if (d) {
                        this.set(a, d);
                        break
                    }
                }
                return d
            }, get_cookie: function (b) {
                return a.cookie(b) || null
            }, get_localstorage: function (a) {
                try {
                    return window.localStorage ? localStorage.getItem(a) || null : null
                } catch (b) {
                    return null
                }
            }
        };
        return b && "undefined" != typeof c ? d.set(b, c) : b ? d.get(b) : void 0
    }
}(jQuery);
!function (a) {
    "use strict";
    a.fn.extend({
        autocomplete: function (b, c) {
            var d = "string" == typeof b;
            c = a.extend({}, a.Autocompleter.defaults, {
                url: d ? b : null,
                data: d ? null : b,
                delay: d ? a.Autocompleter.defaults.delay : 10,
                max: c && !c.scroll ? 10 : 150
            }, c);
            c.highlight = c.highlight || function (a) {
                return a
            };
            c.formatMatch = c.formatMatch || c.formatItem;
            return this.each(function () {
                new a.Autocompleter(this, c)
            })
        }, result: function (a) {
            return this.bind("result", a)
        }, search: function (a) {
            return this.trigger("search", [a])
        }, flushCache: function () {
            return this.trigger("flushCache")
        }, setOptions: function (a) {
            return this.trigger("setOptions", [a])
        }, unautocomplete: function () {
            return this.trigger("unautocomplete")
        }
    });
    a.Autocompleter = function (b, c) {
        function d() {
            var d = x.selected();
            if (!d)return !1;
            var e = d.result;
            t = e;
            if (c.multiple) {
                var g = f(s.val());
                if (g.length > 1) {
                    var h, i = c.multipleSeparator.length, k = a(b).selection().start, l = 0;
                    a.each(g, function (a, b) {
                        l += b.length;
                        if (l >= k) {
                            h = a;
                            return !1
                        }
                        l += i
                    });
                    g[h] = e;
                    e = g.join(c.multipleSeparator)
                }
                e += c.multipleSeparator
            }
            s.val(e);
            j();
            s.trigger("result", [d.data, d.value]);
            return !0
        }

        function e(a, b) {
            if (p != r.DEL) {
                var d = s.val();
                if (b || d != t) {
                    t = d;
                    d = g(d);
                    if (d.length >= c.minChars) {
                        s.addClass(c.loadingClass);
                        c.matchCase || (d = d.toLowerCase());
                        l(d, k, j)
                    } else {
                        n();
                        x.hide()
                    }
                }
            } else x.hide()
        }

        function f(b) {
            return b ? c.multiple ? a.map(b.split(c.multipleSeparator), function (c) {
                return a.trim(b).length ? a.trim(c) : null
            }) : [a.trim(b)] : [""]
        }

        function g(d) {
            if (!c.multiple)return d;
            var e = f(d);
            if (1 == e.length)return e[0];
            var g = a(b).selection().start;
            e = g == d.length ? f(d) : f(d.replace(d.substring(g), ""));
            return e[e.length - 1]
        }

        function h(d, e) {
            if (c.autoFill && g(s.val()).toLowerCase() == d.toLowerCase() && p != r.BACKSPACE) {
                s.val(s.val() + e.substring(g(t).length));
                a(b).selection(t.length, t.length + e.length)
            }
        }

        function i() {
            clearTimeout(o);
            o = setTimeout(j, 200)
        }

        function j() {
            x.visible();
            x.hide();
            clearTimeout(o);
            n();
            c.mustMatch && s.search(function (a) {
                if (!a)if (c.multiple) {
                    var b = f(s.val()).slice(0, -1);
                    s.val(b.join(c.multipleSeparator) + (b.length ? c.multipleSeparator : ""))
                } else {
                    s.val("");
                    s.trigger("result", null)
                }
            })
        }

        function k(a, b) {
            if (b && b.length && v) {
                n();
                x.display(b, a);
                h(a, b[0].value);
                x.show()
            } else j()
        }

        function l(d, e, f) {
            c.matchCase || (d = d.toLowerCase());
            var h = u.load(d);
            if (h && h.length)e(d, h); else if ("string" == typeof c.url && c.url.length > 0) {
                var i = {};
                i[c.timestampParameter] = +new Date;
                a.each(c.extraParams, function (a, b) {
                    i[a] = "function" == typeof b ? b() : b
                });
                a.ajax({
                    mode: "abort",
                    port: "autocomplete" + b.name,
                    dataType: c.dataType,
                    url: c.url,
                    data: a.extend({q: g(d), limit: c.max}, i),
                    success: function (a) {
                        var b = c.parse && c.parse(a) || m(a);
                        u.add(d, b);
                        e(d, b)
                    }
                })
            } else {
                x.emptyList();
                f(d)
            }
        }

        function m(b) {
            for (var d = [], e = b.split("\n"), f = 0; f < e.length; f++) {
                var g = a.trim(e[f]);
                if (g) {
                    g = g.split("|");
                    d[d.length] = {data: g, value: g[0], result: c.formatResult && c.formatResult(g, g[0]) || g[0]}
                }
            }
            return d
        }

        function n() {
            s.removeClass(c.loadingClass)
        }

        var o, p, q, r = {
            UP: 38,
            DOWN: 40,
            DEL: 46,
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            COMMA: 188,
            PAGEUP: 33,
            PAGEDOWN: 34,
            BACKSPACE: 8
        }, s = a(b).attr("autocomplete", "off").addClass(c.inputClass), t = "", u = a.Autocompleter.Cache(c), v = 0, w = {mouseDownOnSelect: !1}, x = a.Autocompleter.Select(c, b, d, w);
        a.browser.opera && a(b.form).bind("submit.autocomplete", function () {
            if (q) {
                q = !1;
                return !1
            }
        });
        s.bind((a.browser.opera ? "keypress" : "keydown") + ".autocomplete", function (b) {
            v = 1;
            p = b.keyCode;
            switch (b.keyCode) {
                case r.UP:
                    b.preventDefault();
                    x.visible() ? x.prev() : e(0, !0);
                    break;
                case r.DOWN:
                    b.preventDefault();
                    x.visible() ? x.next() : e(0, !0);
                    break;
                case r.PAGEUP:
                    b.preventDefault();
                    x.visible() ? x.pageUp() : e(0, !0);
                    break;
                case r.PAGEDOWN:
                    b.preventDefault();
                    x.visible() ? x.pageDown() : e(0, !0);
                    break;
                case c.multiple && "," === a.trim(c.multipleSeparator) && r.COMMA:
                case r.TAB:
                case r.RETURN:
                    if (d()) {
                        b.preventDefault();
                        q = !0;
                        return !1
                    }
                    break;
                case r.ESC:
                    x.hide();
                    break;
                default:
                    clearTimeout(o);
                    o = setTimeout(e, c.delay)
            }
        }).focus(function () {
            v++
        }).blur(function () {
            v = 0;
            w.mouseDownOnSelect || i()
        }).click(function () {
            v++ > 1 && !x.visible() && e(0, !0)
        }).bind("search", function () {
            function b(a, b) {
                var d;
                if (b && b.length)for (var e = 0; e < b.length; e++)if (b[e].result.toLowerCase() == a.toLowerCase()) {
                    d = b[e];
                    break
                }
                "function" == typeof c ? c(d) : s.trigger("result", d && [d.data, d.value])
            }

            var c = arguments.length > 1 ? arguments[1] : null;
            a.each(f(s.val()), function (a, c) {
                l(c, b, b)
            })
        }).bind("flushCache", function () {
            u.flush()
        }).bind("setOptions", function () {
            a.extend(c, arguments[1]);
            "data"in arguments[1] && u.populate()
        }).bind("unautocomplete", function () {
            x.unbind();
            s.unbind();
            a(b.form).unbind(".autocomplete")
        })
    };
    a.Autocompleter.defaults = {
        inputClass: "ac_input",
        resultsClass: "ac_results",
        loadingClass: "ac_loading",
        timestampParameter: "_",
        minChars: 1,
        delay: 400,
        matchCase: !1,
        matchSubset: !0,
        matchContains: !1,
        cacheLength: 10,
        max: 100,
        mustMatch: !1,
        extraParams: {},
        selectFirst: !0,
        formatItem: function (a) {
            return a[0]
        },
        formatMatch: null,
        autoFill: !1,
        width: 0,
        multiple: !1,
        multipleSeparator: ", ",
        highlight: function (a, b) {
            return a.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + b.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>")
        },
        scroll: !0,
        scrollHeight: 180
    };
    a.Autocompleter.Cache = function (b) {
        function c(a, c) {
            b.matchCase || (a = a.toLowerCase());
            var d = a.indexOf(c);
            "word" == b.matchContains && (d = a.toLowerCase().search("\\b" + c.toLowerCase()));
            return -1 == d ? !1 : 0 == d || b.matchContains
        }

        function d(a, c) {
            h > b.cacheLength && f();
            g[a] || h++;
            g[a] = c
        }

        function e() {
            if (!b.data)return !1;
            var c = {}, e = 0;
            b.url || (b.cacheLength = 1);
            c[""] = [];
            for (var f = 0, g = b.data.length; g > f; f++) {
                var h = b.data[f];
                h = "string" == typeof h ? [h] : h;
                var i = b.formatMatch(h, f + 1, b.data.length);
                if (i !== !1) {
                    var j = i.charAt(0).toLowerCase();
                    c[j] || (c[j] = []);
                    var k = {value: i, data: h, result: b.formatResult && b.formatResult(h) || i};
                    c[j].push(k);
                    e++ < b.max && c[""].push(k)
                }
            }
            a.each(c, function (a, c) {
                b.cacheLength++;
                d(a, c)
            })
        }

        function f() {
            g = {};
            h = 0
        }

        var g = {}, h = 0;
        setTimeout(e, 25);
        return {
            flush: f, add: d, populate: e, load: function (d) {
                if (!b.cacheLength || !h)return null;
                if (!b.url && b.matchContains) {
                    var e = [];
                    for (var f in g)if (f.length > 0) {
                        var i = g[f];
                        a.each(i, function (a, b) {
                            c(b.value, d) && e.push(b)
                        })
                    }
                    return e
                }
                if (g[d])return g[d];
                if (b.matchSubset)for (var j = d.length - 1; j >= b.minChars; j--) {
                    var i = g[d.substr(0, j)];
                    if (i) {
                        var e = [];
                        a.each(i, function (a, b) {
                            c(b.value, d) && (e[e.length] = b)
                        });
                        return e
                    }
                }
                return null
            }
        }
    };
    a.Autocompleter.Select = function (b, c, d, e) {
        function f() {
            if (s) {
                n = a("<div/>").hide().addClass(b.resultsClass).css("position", "absolute").appendTo(document.body);
                o = a("<ul/>").appendTo(n).mouseover(function (b) {
                    if (g(b).nodeName && "LI" == g(b).nodeName.toUpperCase()) {
                        q = a("li", o).removeClass(p.ACTIVE).index(g(b));
                        a(g(b)).addClass(p.ACTIVE)
                    }
                }).click(function (b) {
                    a(g(b)).addClass(p.ACTIVE);
                    d();
                    c.focus();
                    return !1
                }).mousedown(function () {
                    e.mouseDownOnSelect = !0
                }).mouseup(function () {
                    e.mouseDownOnSelect = !1
                });
                b.width > 0 && n.css("width", b.width);
                s = !1
            }
        }

        function g(a) {
            for (var b = a.target; b && "LI" != b.tagName;)b = b.parentNode;
            return b ? b : []
        }

        function h(a) {
            l.slice(q, q + 1).removeClass(p.ACTIVE);
            i(a);
            var c = l.slice(q, q + 1).addClass(p.ACTIVE);
            if (b.scroll) {
                var d = 0;
                l.slice(0, q).each(function () {
                    d += this.offsetHeight
                });
                d + c[0].offsetHeight - o.scrollTop() > o[0].clientHeight ? o.scrollTop(d + c[0].offsetHeight - o.innerHeight()) : d < o.scrollTop() && o.scrollTop(d)
            }
        }

        function i(a) {
            q += a;
            0 > q ? q = l.size() - 1 : q >= l.size() && (q = 0)
        }

        function j(a) {
            return b.max && b.max < a ? b.max : a
        }

        function k() {
            o.empty();
            for (var c = j(m.length), d = 0; c > d; d++)if (m[d]) {
                var e = b.formatItem(m[d].data, d + 1, c, m[d].value, r);
                if (e !== !1) {
                    var f = a("<li/>").html(b.highlight(e, r)).addClass(d % 2 == 0 ? "ac_even" : "ac_odd").appendTo(o)[0];
                    a.data(f, "ac_data", m[d])
                }
            }
            l = o.find("li");
            if (b.selectFirst) {
                l.slice(0, 1).addClass(p.ACTIVE);
                q = 0
            }
            a.fn.bgiframe && o.bgiframe()
        }

        var l, m, n, o, p = {ACTIVE: "ac_over"}, q = -1, r = "", s = !0;
        return {
            display: function (a, b) {
                f();
                m = a;
                r = b;
                k()
            }, next: function () {
                h(1)
            }, prev: function () {
                h(-1)
            }, pageUp: function () {
                0 != q && 0 > q - 8 ? h(-q) : h(-8)
            }, pageDown: function () {
                q != l.size() - 1 && q + 8 > l.size() ? h(l.size() - 1 - q) : h(8)
            }, hide: function () {
                n && n.hide();
                l && l.removeClass(p.ACTIVE);
                q = -1
            }, visible: function () {
                return n && n.is(":visible")
            }, current: function () {
                return this.visible() && (l.filter("." + p.ACTIVE)[0] || b.selectFirst && l[0])
            }, show: function () {
                var d = a(c).offset();
                n.css({
                    width: "string" == typeof b.width || b.width > 0 ? b.width : a(c).width(),
                    top: d.top + c.offsetHeight,
                    left: d.left
                }).show();
                if (b.scroll) {
                    o.scrollTop(0);
                    o.css({maxHeight: b.scrollHeight, overflow: "auto"});
                    if (a.browser.msie && "undefined" == typeof document.body.style.maxHeight) {
                        var e = 0;
                        l.each(function () {
                            e += this.offsetHeight
                        });
                        var f = e > b.scrollHeight;
                        o.css("height", f ? b.scrollHeight : e);
                        f || l.width(o.width() - parseInt(l.css("padding-left")) - parseInt(l.css("padding-right")))
                    }
                }
            }, selected: function () {
                var b = l && l.filter("." + p.ACTIVE).removeClass(p.ACTIVE);
                return b && b.length && a.data(b[0], "ac_data")
            }, emptyList: function () {
                o && o.empty()
            }, unbind: function () {
                n && n.remove()
            }
        }
    };
    a.fn.selection = function (a, b) {
        if (void 0 !== a)return this.each(function () {
            if (this.createTextRange) {
                var c = this.createTextRange();
                if (void 0 === b || a == b) {
                    c.move("character", a);
                    c.select()
                } else {
                    c.collapse(!0);
                    c.moveStart("character", a);
                    c.moveEnd("character", b);
                    c.select()
                }
            } else if (this.setSelectionRange)this.setSelectionRange(a, b); else if (this.selectionStart) {
                this.selectionStart = a;
                this.selectionEnd = b
            }
        });
        var c = this[0];
        if (c.createTextRange) {
            var d = document.selection.createRange(), e = c.value, f = "<->", g = d.text.length;
            d.text = f;
            var h = c.value.indexOf(f);
            c.value = e;
            this.selection(h, h + g);
            return {start: h, end: h + g}
        }
        return void 0 !== c.selectionStart ? {start: c.selectionStart, end: c.selectionEnd} : void 0
    }
}(jQuery);
!function (a) {
    "use strict";
    a.fn.autotab = function (b) {
        var c = {maxlength: 255}, d = b && b.maxlength || c, e = {
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            BACKSPACE: 8,
            DELETE: 46
        }, f = {
            63234: 37,
            63235: 39,
            63232: 38,
            63233: 40,
            63276: 33,
            63277: 34,
            63272: 46,
            63273: 36,
            63275: 35
        }, g = function (b) {
            var c = b.keyCode;
            c = a.browser.safari ? f[c] || c : c;
            return c >= 33 && 40 >= c || c == e.RETURN || c == e.TAB || c == e.ESC
        }, h = function (b) {
            {
                var c = b.keyCode;
                b.charCode
            }
            return 9 == c || 13 == c || 40 == c && (!a.browser.opera || !b.shiftKey) || 27 == c || 16 == c || 17 == c || c >= 18 && 20 >= c || a.browser.opera && !b.shiftKey && (8 == c || c >= 33 && 35 >= c || c >= 36 && 39 >= c || c >= 44 && 45 >= c)
        };
        return this.each(function (b, c) {
            var f = this[b - 1], i = this[b + 1], j = a(c).attr("data-autotab-maxlength") || a(c).attr("maxLength") || d;
            a(c).data("autotab", {
                previous: f || null,
                next: i || null,
                maxlength: j
            }).on("keyup.autotab", function (b) {
                var c = a(b.target).val(), d = a(b.target).data("autotab"), f = b.keyCode;
                if (f != e.BACKSPACE && !h(b) && !g(b))if (c.length == d.maxlength) {
                    if (!d.next)return;
                    setTimeout(function () {
                        a(d.next).focus();
                        a(b.target).trigger("autotab:next", {current: a(b.target), next: d.next})
                    }, 15)
                } else if (c.length > d.maxlength)return
            }).on("keyup.autotab", function (b) {
                var c = a(b.target).val(), d = a(b.target).data("autotab"), f = b.keyCode;
                f === e.BACKSPACE && d.previous && 0 === c.length && setTimeout(function () {
                    a(d.previous).focus();
                    a(b.target).trigger("autotab:prev", {current: a(b.target), next: d.previous})
                }, 15)
            })
        }.bind(this))
    };
    a.fn.autotaboff = function () {
        return this.each(function (b, c) {
            a(c).data("autotab", null).off("keyup.autotab")
        }.bind(this))
    }
}(jQuery);
!function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (this.length) {
                var c = a.data(this[0], "validator");
                if (c)return c;
                this[0].setAttribute("novalidate", "novalidate");
                c = new a.validator(b, this[0]);
                a.data(this[0], "validator", c);
                if (c.settings.onsubmit) {
                    this.validateDelegate(":submit", "click", function (b) {
                        c.settings.submitHandler && (c.submitButton = b.target);
                        a(b.target).hasClass("cancel") && (c.cancelSubmit = !0)
                    });
                    this.submit(function (b) {
                        function d() {
                            var d;
                            if (c.settings.submitHandler) {
                                c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm));
                                c.settings.submitHandler.call(c, c.currentForm, b);
                                c.submitButton && d.remove();
                                return !1
                            }
                            return !0
                        }

                        c.settings.debug && b.preventDefault();
                        if (c.cancelSubmit) {
                            c.cancelSubmit = !1;
                            return d()
                        }
                        if (c.form()) {
                            if (c.pendingRequest) {
                                c.formSubmitted = !0;
                                return !1
                            }
                            return d()
                        }
                        c.focusInvalid();
                        return !1
                    })
                }
                return c
            }
            b && b.debug && window.console
        }, valid: function () {
            if (a(this[0]).is("form"))return this.validate().form();
            var b = !0, c = a(this[0].form).validate();
            this.each(function () {
                b &= c.element(this)
            });
            return b
        }, removeAttrs: function (b) {
            var c = {}, d = this;
            a.each(b.split(/\s/), function (a, b) {
                c[b] = d.attr(b);
                d.removeAttr(b)
            });
            return c
        }, rules: function (b, c) {
            var d = this[0];
            if (b) {
                var e = a.data(d.form, "validator").settings, f = e.rules, g = a.validator.staticRules(d);
                switch (b) {
                    case"add":
                        a.extend(g, a.validator.normalizeRule(c));
                        f[d.name] = g;
                        c.messages && (e.messages[d.name] = a.extend(e.messages[d.name], c.messages));
                        break;
                    case"remove":
                        if (!c) {
                            delete f[d.name];
                            return g
                        }
                        var h = {};
                        a.each(c.split(/\s/), function (a, b) {
                            h[b] = g[b];
                            delete g[b]
                        });
                        return h
                }
            }
            var i = a.validator.normalizeRules(a.extend({}, a.validator.metadataRules(d), a.validator.classRules(d), a.validator.attributeRules(d), a.validator.staticRules(d)), d);
            if (i.required) {
                var j = i.required;
                delete i.required;
                i = a.extend({required: j}, i)
            }
            return i
        }
    });
    a.extend(a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + b.value)
        }, filled: function (b) {
            return !!a.trim("" + b.value)
        }, unchecked: function (a) {
            return !a.checked
        }
    });
    a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b);
        this.currentForm = c;
        this.init()
    };
    a.validator.format = function (b, c) {
        if (1 === arguments.length)return function () {
            var c = a.makeArray(arguments);
            c.unshift(b);
            return a.validator.format.apply(this, c)
        };
        arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1));
        c.constructor !== Array && (c = [c]);
        a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), c)
        });
        return b
    };
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onlyFirst: !0,
            onfocusin: function (a) {
                this.lastActive = a;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass);
                    this.addWrapper(this.errorsFor(a)).hide()
                }
            },
            onfocusout: function (a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (a, b) {
                (9 != b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastActive) && this.element(a)
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    var c = a.data(this[0].form, "validator"), d = "on" + b.type.replace(/^validate/, "");
                    c.settings[d] && c.settings[d].call(c, this[0], b)
                }

                this.labelContainer = a(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm);
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var c = this.groups = {};
                a.each(this.settings.groups, function (b, d) {
                    a.each(d.split(/\s/), function (a, d) {
                        c[d] = b
                    })
                });
                var d = this.settings.rules;
                a.each(d, function (b, c) {
                    d[b] = a.validator.normalizeRule(c)
                });
                a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b);
                this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                this.checkForm();
                a.extend(this.submitted, this.errorMap);
                this.invalid = a.extend({}, this.errorMap);
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)this.check(b[a]);
                return this.valid()
            }, element: function (b) {
                b = this.validationTargetFor(this.clean(b));
                this.lastElement = b;
                this.prepareElement(b);
                this.currentElements = a(b);
                var c = this.check(b) !== !1;
                c ? delete this.invalid[b.name] : this.invalid[b.name] = !0;
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers));
                this.showErrors();
                return c
            }, showErrors: function (b) {
                if (b) {
                    a.extend(this.errorMap, b);
                    this.errorList = [];
                    for (var c in b)this.errorList.push({message: b[c], element: this.findByName(c)[0]});
                    this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (a) {
                var b = 0;
                for (var c in a)b++;
                return b
            }, hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid)try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {
                }
            }, findLastActive: function () {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function (a) {
                    return a.element.name === b.name
                }).length && b
            }, elements: function () {
                var b = this, c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this);
                    if (b.settings.onlyFirst && this.name in c || !b.objectLength(a(this).rules()))return !1;
                    c[this.name] = !0;
                    return !0
                })
            }, clean: function (b) {
                return a(b)[0]
            }, errors: function () {
                var b = this.settings.errorClass.replace(" ", ".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            }, reset: function () {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = a([]);
                this.toHide = a([]);
                this.currentElements = a([])
            }, prepareForm: function () {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            }, elementValue: function (b) {
                var c = a(b).attr("type"), d = a(b).val();
                return "radio" === c || "checkbox" === c ? a('input[name="' + a(b).attr("name") + '"]:checked').val() : "string" == typeof d ? d.replace(/\r/g, "") : d
            }, check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d = a(b).rules(), e = !1, f = this.elementValue(b);
                for (var g in d) {
                    var h = {method: g, parameters: d[g]};
                    try {
                        c = a.validator.methods[g].call(this, f, b, h.parameters);
                        if ("dependency-mismatch" === c) {
                            e = !0;
                            continue
                        }
                        e = !1;
                        if ("pending" === c) {
                            this.toHide = this.toHide.not(this.errorsFor(b));
                            return
                        }
                        if (!c) {
                            this.formatAndAdd(b, h);
                            return !1
                        }
                    } catch (i) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " + b.id + ", check the '" + h.method + "' method", i);
                        throw i
                    }
                }
                if (!e) {
                    this.objectLength(d) && this.successList.push(b);
                    return !0
                }
            }, customMetaMessage: function (b, c) {
                if (a.metadata) {
                    var d = this.settings.meta ? a(b).metadata()[this.settings.meta] : a(b).metadata();
                    return d && d.messages && d.messages[c]
                }
            }, customDataMessage: function (b, c) {
                return a(b).data("msg-" + c.toLowerCase()) || b.attributes && a(b).attr("data-msg-" + c.toLowerCase())
            }, customMessage: function (a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            }, findDefined: function () {
                for (var a = 0; a < arguments.length; a++)if (void 0 !== arguments[a])return arguments[a];
                return void 0
            }, defaultMessage: function (b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), this.customMetaMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            }, formatAndAdd: function (b, c) {
                var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters));
                this.errorList.push({message: d, element: b});
                this.errorMap[b.name] = d;
                this.submitted[b.name] = d
            }, addWrapper: function (a) {
                this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper)));
                return a
            }, defaultShowErrors: function () {
                var a, b;
                for (a = 0; this.errorList[a]; a++) {
                    var c = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(c.element, c.message)
                }
                this.errorList.length && (this.toShow = this.toShow.add(this.containers));
                if (this.settings.success)for (a = 0; this.successList[a]; a++)this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)for (a = 0, b = this.validElements(); b[a]; a++)this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (b, c) {
                var d = this.errorsFor(b);
                if (d.length) {
                    d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    d.attr("generated") && d.html(c)
                } else {
                    d = a("<" + this.settings.errorElement + "/>").attr({
                        "for": this.idOrName(b),
                        generated: !0
                    }).addClass(this.settings.errorClass).html(c || "");
                    this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent());
                    this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))
                }
                if (!c && this.settings.success) {
                    d.text("");
                    "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)
                }
                this.toShow = this.toShow.add(d)
            }, errorsFor: function (b) {
                var c = this.idOrName(b);
                return this.errors().filter(function () {
                    return a(this).attr("for") === c
                })
            }, idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            }, validationTargetFor: function (a) {
                this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]);
                return a
            }, checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            }, findByName: function (b) {
                return a(this.currentForm).find('[name="' + b + '"]')
            }, getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case"select":
                        return a("option:selected", c).length;
                    case"input":
                        if (this.checkable(c))return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            }, depend: function (a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            }, dependTypes: {
                "boolean": function (a) {
                    return a
                }, string: function (b, c) {
                    return !!a(b, c.form).length
                }, "function": function (a, b) {
                    return a(b)
                }
            }, optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            }, startRequest: function (a) {
                if (!this.pending[a.name]) {
                    this.pendingRequest++;
                    this.pending[a.name] = !0
                }
            }, stopRequest: function (b, c) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[b.name];
                if (c && 0 === this.pendingRequest && this.formSubmitted && this.form()) {
                    a(this.currentForm).submit();
                    this.formSubmitted = !1
                } else if (!c && 0 === this.pendingRequest && this.formSubmitted) {
                    a(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted = !1
                }
            }, previousValue: function (b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {}, d = a(b).attr("class");
            d && a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            });
            return c
        },
        attributeRules: function (b) {
            var c = {}, d = a(b);
            for (var e in a.validator.methods) {
                var f;
                if ("required" === e) {
                    f = d.get(0).getAttribute(e);
                    "" === f && d.get(0).hasAttribute(e) ? f = !0 : d.get(0).hasAttribute(e) && "false" !== f || (f = !1);
                    f = !!f
                } else f = d.attr(e);
                f ? c[e] = f : d[0].getAttribute("type") === e && (c[e] = !0)
            }
            c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength;
            return c
        },
        metadataRules: function (b) {
            if (!a.metadata)return {};
            var c = a.data(b.form, "validator").settings.meta;
            return c ? a(b).metadata()[c] : a(b).metadata()
        },
        staticRules: function (b) {
            var c = {}, d = a.data(b.form, "validator");
            d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {});
            return c
        },
        normalizeRules: function (b, c) {
            a.each(b, function (d, e) {
                if (e !== !1) {
                    if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                            case"string":
                                f = !!a(e.depends, c.form).length;
                                break;
                            case"function":
                                f = e.depends.call(c, c)
                        }
                        f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                    }
                } else delete b[d]
            });
            a.each(b, function (d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            });
            a.each(["minlength", "maxlength", "min", "max"], function () {
                b[this] && (b[this] = Number(b[this]))
            });
            a.each(["rangelength", "range"], function () {
                b[this] && (b[this] = [Number(b[this][0]), Number(b[this][1])])
            });
            if (a.validator.autoCreateRanges) {
                if (b.min && b.max) {
                    b.range = [b.min, b.max];
                    delete b.min;
                    delete b.max
                }
                if (b.minlength && b.maxlength) {
                    b.rangelength = [b.minlength, b.maxlength];
                    delete b.minlength;
                    delete b.maxlength
                }
            }
            b.messages && delete b.messages;
            return b
        },
        normalizeRule: function (b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                });
                b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c;
            a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b];
            c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c))return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
            }, remote: function (b, c, d) {
                if (this.optional(c))return "dependency-mismatch";
                var e = this.previousValue(c);
                this.settings.messages[c.name] || (this.settings.messages[c.name] = {});
                e.originalMessage = this.settings.messages[c.name].remote;
                this.settings.messages[c.name].remote = e.message;
                d = "string" == typeof d && {url: d} || d;
                if (this.pending[c.name])return "pending";
                if (e.old === b)return e.valid;
                e.old = b;
                var f = this;
                this.startRequest(c);
                var g = {};
                g[c.name] = b;
                a.ajax(a.extend(!0, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    success: function (d) {
                        f.settings.messages[c.name].remote = e.originalMessage;
                        var g = d === !0 || "true" === d;
                        if (g) {
                            var h = f.formSubmitted;
                            f.prepareElement(c);
                            f.formSubmitted = h;
                            f.successList.push(c);
                            delete f.invalid[c.name];
                            f.showErrors()
                        } else {
                            var i = {}, j = d || f.defaultMessage(c, "remote");
                            i[c.name] = e.message = a.isFunction(j) ? j(b) : j;
                            f.invalid[c.name] = !0;
                            f.showErrors(i)
                        }
                        e.valid = g;
                        f.stopRequest(c, g)
                    }
                }, d));
                return "pending"
            }, minlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d
            }, maxlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || d >= e
            }, rangelength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            }, min: function (a, b, c) {
                return this.optional(b) || a >= c
            }, max: function (a, b, c) {
                return this.optional(b) || c >= a
            }, range: function (a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            }, email: function (a, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
            }, url: function (a, b) {
                return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            }, date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a))
            }, dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
            }, number: function (a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            }, digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            }, creditcard: function (a, b) {
                if (this.optional(b))return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a))return !1;
                var c = 0, d = 0, e = !1;
                a = a.replace(/\D/g, "");
                for (var f = a.length - 1; f >= 0; f--) {
                    var g = a.charAt(f);
                    d = parseInt(g, 10);
                    e && (d *= 2) > 9 && (d -= 9);
                    c += d;
                    e = !e
                }
                return c % 10 === 0
            }, equalTo: function (b, c, d) {
                var e = a(d);
                this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    a(c).valid()
                });
                return b === e.val()
            }
        }
    });
    a.format = a.validator.format
}(jQuery);
!function (a) {
    var b = {};
    if (a.ajaxPrefilter)a.ajaxPrefilter(function (a, c, d) {
        var e = a.port;
        if ("abort" === a.mode) {
            b[e] && b[e].abort();
            b[e] = d
        }
    }); else {
        var c = a.ajax;
        a.ajax = function (d) {
            var e = ("mode"in d ? d : a.ajaxSettings).mode, f = ("port"in d ? d : a.ajaxSettings).port;
            if ("abort" === e) {
                b[f] && b[f].abort();
                return b[f] = c.apply(this, arguments)
            }
            return c.apply(this, arguments)
        }
    }
}(jQuery);
!function (a) {
    jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || a.each({
        focus: "focusin",
        blur: "focusout"
    }, function (b, c) {
        function d(b) {
            b = a.event.fix(b);
            b.type = c;
            return a.event.handle.call(this, b)
        }

        a.event.special[c] = {
            setup: function () {
                this.addEventListener(b, d, !0)
            }, teardown: function () {
                this.removeEventListener(b, d, !0)
            }, handler: function (b) {
                var d = arguments;
                d[0] = a.event.fix(b);
                d[0].type = c;
                return a.event.handle.apply(this, d)
            }
        }
    });
    a.extend(a.fn, {
        validateDelegate: function (b, c, d) {
            return this.bind(c, function (c) {
                var e = a(c.target);
                return e.is(b) ? d.apply(e, arguments) : void 0
            })
        }
    })
}(jQuery);
!function (a) {
    "use strict";
    function b(b) {
        this.input = b;
        "password" === b.attr("type") && this.handlePassword();
        a(b[0].form).submit(function () {
            b.hasClass("placeholder") && b[0].value === b.attr("placeholder") && (b[0].value = "")
        })
    }

    b.prototype = {
        show: function (a) {
            if ("" === this.input[0].value || a && this.valueIsPlaceholder()) {
                if (this.isPassword)try {
                    this.input[0].setAttribute("type", "text")
                } catch (b) {
                    this.input.before(this.fakePassword.show()).hide()
                }
                this.input.addClass("placeholder");
                this.input[0].value = this.input.attr("placeholder")
            }
        }, hide: function () {
            if (this.valueIsPlaceholder() && this.input.hasClass("placeholder")) {
                this.input.removeClass("placeholder");
                this.input[0].value = "";
                if (this.isPassword) {
                    try {
                        this.input[0].setAttribute("type", "password")
                    } catch (a) {
                    }
                    this.input.show();
                    this.input[0].focus()
                }
            }
        }, valueIsPlaceholder: function () {
            return this.input[0].value === this.input.attr("placeholder")
        }, handlePassword: function () {
            var b = this.input;
            b.attr("realType", "password");
            this.isPassword = !0;
            if (a.browser.msie && b[0].outerHTML) {
                var c = a(b[0].outerHTML.replace(/type=(['"])?password\1/gi, "type=$1text$1"));
                this.fakePassword = c.val(b.attr("placeholder")).addClass("placeholder").focus(function () {
                    b.trigger("focus");
                    a(this).hide()
                });
                a(b[0].form).submit(function () {
                    c.remove();
                    b.show()
                })
            }
        }
    };
    var c = !!("placeholder"in document.createElement("input"));
    a.fn.placeholder = function () {
        return c ? this : this.each(function () {
            var c = a(this), d = new b(c);
            d.show(!0);
            c.focus(function () {
                d.hide()
            });
            c.blur(function () {
                d.show(!1)
            });
            if (a.browser.msie) {
                a(window).load(function () {
                    c.val() && c.removeClass("placeholder");
                    d.show(!0)
                });
                c.focus(function () {
                    if (0 === a.trim(this.value).length) {
                        var b = this.createTextRange();
                        b.collapse(!0);
                        b.moveStart("character", 0);
                        b.select()
                    }
                })
            }
        })
    }
}(jQuery);
!function (a) {
    function b(a, b) {
        var c = Math.pow(10, b);
        return Math.round(a * c) / c
    }

    function c(a, b) {
        var c = parseInt(a.css(b), 10);
        if (c)return c;
        var d = a[0].currentStyle;
        return d && d.width && parseInt(d.width, 10)
    }

    function d(a) {
        var b = a.data("events");
        return b && b.onSlide
    }

    function e(e, f) {
        function g(a, c, d, g) {
            void 0 === d ? d = c / m * t : g && (d -= f.min), u && (d = Math.round(d / u) * u);
            (void 0 === c || u) && (c = d * m / t);
            if (isNaN(d))return o;
            c = Math.max(0, Math.min(c, m)), d = c / m * t;
            (g || !j) && (d += f.min);
            j && (g ? c = m - c : d = f.max - d), d = b(d, v);
            var h = "click" == a.type;
            if (A && void 0 !== k && !h) {
                a.type = "onSlide", z.trigger(a, [d, c]);
                if (a.isDefaultPrevented())return o
            }
            var i = h ? f.speed : 0, l = h ? function () {
                a.type = "change", z.trigger(a, [d])
            } : null;
            j ? (r.animate({top: c}, i, l), f.progress && s.animate({height: m - c + r.height() / 2}, i)) : (r.animate({left: c}, i, l), f.progress && s.animate({width: c + r.width() / 2}, i)), k = d, n = c, e.val(d);
            return o
        }

        function h() {
            j = f.vertical || c(q, "height") > c(q, "width"), j ? (m = c(q, "height") - c(r, "height"), l = q.offset().top + m) : (m = c(q, "width") - c(r, "width"), l = q.offset().left)
        }

        function i() {
            h(), o.setValue(void 0 !== f.value ? f.value : f.min)
        }

        var j, k, l, m, n, o = this, p = f.css, q = a("<div><div/><a href='#'/></div>").data("rangeinput", o);
        e.before(q);
        var r = q.addClass(p.slider).find("a").addClass(p.handle), s = q.find("div").addClass(p.progress);
        a.each("min,max,step,value".split(","), function (a, b) {
            var c = e.attr(b);
            parseFloat(c) && (f[b] = parseFloat(c, 10))
        });
        var t = f.max - f.min, u = "any" == f.step ? 0 : f.step, v = f.precision;
        if (void 0 === v)try {
            v = u.toString().split(".")[1].length
        } catch (w) {
            v = 0
        }
        if ("range" == e.attr("type")) {
            var x = e.clone().wrap("<div/>").parent().html(), y = a(x.replace(/type/i, "type=text data-orig-type"));
            y.val(f.value), e.replaceWith(y), e = y
        }
        e.addClass(p.input);
        var z = a(o).add(e), A = !0;
        a.extend(o, {
            getValue: function () {
                return k
            }, setValue: function (b, c) {
                h();
                return g(c || a.Event("api"), void 0, b, !0)
            }, getConf: function () {
                return f
            }, getProgress: function () {
                return s
            }, getHandle: function () {
                return r
            }, getInput: function () {
                return e
            }, step: function (b, c) {
                c = c || a.Event();
                var d = "any" == f.step ? 1 : f.step;
                o.setValue(k + d * (b || 1), c)
            }, stepUp: function (a) {
                return o.step(a || 1)
            }, stepDown: function (a) {
                return o.step(-a || -1)
            }
        }), a.each("onSlide,change".split(","), function (b, c) {
            a.isFunction(f[c]) && a(o).bind(c, f[c]), o[c] = function (b) {
                b && a(o).bind(c, b);
                return o
            }
        }), r.drag({drag: !1}).bind("dragStart", function () {
            h(), A = d(a(o)) || d(e)
        }).bind("drag", function (a, b, c) {
            if (e.is(":disabled"))return !1;
            g(a, j ? b : c);
            return void 0
        }).bind("dragEnd", function (a) {
            a.isDefaultPrevented() || (a.type = "change", z.trigger(a, [k]))
        }).click(function (a) {
            return a.preventDefault()
        }), q.click(function (a) {
            if (e.is(":disabled") || a.target == r[0])return a.preventDefault();
            h();
            var b = j ? r.height() / 2 : r.width() / 2;
            g(a, j ? m - l - b + a.pageY : a.pageX - l - b)
        }), f.keyboard && e.keydown(function (b) {
            if (!e.attr("readonly")) {
                var c = b.keyCode, d = -1 != a([75, 76, 38, 33, 39]).index(c), f = -1 != a([74, 72, 40, 34, 37]).index(c);
                if ((d || f) && !(b.shiftKey || b.altKey || b.ctrlKey)) {
                    d ? o.step(33 == c ? 10 : 1, b) : f && o.step(34 == c ? -10 : -1, b);
                    return b.preventDefault()
                }
            }
        }), e.blur(function (b) {
            var c = a(this).val();
            c !== k && o.setValue(c, b)
        }), a.extend(e[0], {stepUp: o.stepUp, stepDown: o.stepDown});
        i(), m || a(window).load(i)
    }

    a.tools = a.tools || {version: "v1.2.6"};
    var f;
    f = a.tools.rangeinput = {
        conf: {
            min: 0,
            max: 100,
            step: "any",
            steps: 0,
            value: 0,
            precision: void 0,
            vertical: 0,
            keyboard: !0,
            progress: !1,
            speed: 100,
            css: {input: "range", slider: "slider", progress: "progress", handle: "handle"}
        }
    };
    var g, h;
    a.fn.drag = function (b) {
        document.ondragstart = function () {
            return !1
        }, b = a.extend({x: !0, y: !0, drag: !0}, b), g = g || a(document).bind("mousedown mouseup", function (c) {
            var d = a(c.target);
            if ("mousedown" == c.type && d.data("drag")) {
                var e = d.position(), f = c.pageX - e.left, i = c.pageY - e.top, j = !0;
                g.bind("mousemove.drag", function (a) {
                    var c = a.pageX - f, e = a.pageY - i, g = {};
                    b.x && (g.left = c), b.y && (g.top = e), j && (d.trigger("dragStart"), j = !1), b.drag && d.css(g), d.trigger("drag", [e, c]), h = d
                }), c.preventDefault()
            } else try {
                h && h.trigger("dragEnd")
            } finally {
                g.unbind("mousemove.drag"), h = null
            }
        });
        return this.data("drag", !0)
    };
    a.expr[":"].range = function (b) {
        var c = b.getAttribute("type");
        return c && "range" == c || a(b).filter("input").data("rangeinput")
    }, a.fn.rangeinput = function (b) {
        if (this.data("rangeinput"))return this;
        b = a.extend(!0, {}, f.conf, b);
        var c;
        this.each(function () {
            var d = new e(a(this), a.extend(!0, {}, b)), f = d.getInput().data("rangeinput", d);
            c = c ? c.add(f) : f
        });
        return c ? c : this
    }
}(jQuery);
!function (a, b, c) {
    function d(c, d, e) {
        var f = b.createElement(c);
        d && (f.id = X + d);
        e && (f.style.cssText = e);
        return a(f)
    }

    function e(a) {
        var b = v.length, c = (N + a) % b;
        return 0 > c ? b + c : c
    }

    function f(a, b) {
        return Math.round((/%/.test(a) ? ("x" === b ? w.width() : w.height()) / 100 : 1) * parseInt(a, 10))
    }

    function g(a) {
        return H.photo || /\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(a)
    }

    function h() {
        var b;
        H = a.extend({}, a.data(M, W));
        for (b in H)a.isFunction(H[b]) && "on" !== b.slice(0, 2) && (H[b] = H[b].call(M));
        H.rel = H.rel || M.rel || "nofollow";
        H.href = H.href || a(M).attr("href");
        H.title = H.title || M.title;
        "string" == typeof H.href && (H.href = a.trim(H.href))
    }

    function i(b, c) {
        a.event.trigger(b);
        c && c.call(M)
    }

    function j() {
        var a, b, c, d = X + "Slideshow_", e = "click." + X;
        if (H.slideshow && v[1]) {
            b = function () {
                C.text(H.slideshowStop).unbind(e).bind(_, function () {
                    (H.loop || v[N + 1]) && (a = setTimeout(T.next, H.slideshowSpeed))
                }).bind($, function () {
                    clearTimeout(a)
                }).one(e + " " + ab, c);
                o.removeClass(d + "off").addClass(d + "on");
                a = setTimeout(T.next, H.slideshowSpeed)
            };
            c = function () {
                clearTimeout(a);
                C.text(H.slideshowStart).unbind([_, $, ab, e].join(" ")).one(e, function () {
                    T.next();
                    b()
                });
                o.removeClass(d + "on").addClass(d + "off")
            };
            H.slideshowAuto ? b() : c()
        } else o.removeClass(d + "off " + d + "on")
    }

    function k(b) {
        if (!R) {
            M = b;
            h();
            v = a(M);
            N = 0;
            if ("nofollow" !== H.rel) {
                v = a("." + Y).filter(function () {
                    var b = a.data(this, W).rel || this.rel;
                    return b === H.rel
                });
                N = v.index(M);
                if (-1 === N) {
                    v = v.add(M);
                    N = v.length - 1
                }
            }
            if (!P) {
                P = Q = !0;
                o.show();
                H.returnFocus && a(M).blur().one(bb, function () {
                    a(this).focus()
                });
                n.css({opacity: +H.opacity, cursor: H.overlayClose ? "pointer" : "auto"}).show();
                H.w = f(H.initialWidth, "x");
                H.h = f(H.initialHeight, "y");
                T.position();
                eb && w.bind("resize." + fb + " scroll." + fb, function () {
                    n.css({width: w.width(), height: w.height(), top: w.scrollTop(), left: w.scrollLeft()})
                }).trigger("resize." + fb);
                i(Z, H.onOpen);
                G.add(A).hide();
                F.html(H.close).show()
            }
            T.load(!0)
        }
    }

    function l() {
        if (!o && b.body) {
            U = !1;
            w = a(c);
            o = d(gb).attr({id: W, "class": db ? X + (eb ? "IE6" : "IE") : ""}).hide();
            n = d(gb, "Overlay", eb ? "position:absolute" : "").hide();
            p = d(gb, "Wrapper");
            q = d(gb, "Content").append(x = d(gb, "LoadedContent", "width:0; height:0; overflow:hidden"), z = d(gb, "LoadingOverlay").add(d(gb, "LoadingGraphic")), A = d(gb, "Title"), B = d(gb, "Current"), D = d(gb, "Next"), E = d(gb, "Previous"), C = d(gb, "Slideshow").bind(Z, j), F = d(gb, "Close"));
            p.append(d(gb).append(d(gb, "TopLeft"), r = d(gb, "TopCenter"), d(gb, "TopRight")), d(gb, !1, "clear:left").append(s = d(gb, "MiddleLeft"), q, t = d(gb, "MiddleRight")), d(gb, !1, "clear:left").append(d(gb, "BottomLeft"), u = d(gb, "BottomCenter"), d(gb, "BottomRight"))).find("div div").css({"float": "left"});
            y = d(gb, !1, "position:absolute; width:9999px; visibility:hidden; display:none");
            G = D.add(E).add(B).add(C);
            a(b.body).append(n, o.append(p, y))
        }
    }

    function m() {
        if (o) {
            if (!U) {
                U = !0;
                I = r.height() + u.height() + q.outerHeight(!0) - q.height();
                J = s.width() + t.width() + q.outerWidth(!0) - q.width();
                K = x.outerHeight(!0);
                L = x.outerWidth(!0);
                o.css({"padding-bottom": I, "padding-right": J});
                D.click(function () {
                    T.next()
                });
                E.click(function () {
                    T.prev()
                });
                F.click(function () {
                    T.close()
                });
                n.click(function () {
                    H.overlayClose && T.close()
                });
                a(b).bind("keydown." + X, function (a) {
                    var b = a.keyCode;
                    if (P && H.escKey && 27 === b) {
                        a.preventDefault();
                        T.close()
                    }
                    if (P && H.arrowKey && v[1])if (37 === b) {
                        a.preventDefault();
                        E.click()
                    } else if (39 === b) {
                        a.preventDefault();
                        D.click()
                    }
                });
                a("." + Y, b).live("click", function (a) {
                    if (!(a.which > 1 || a.shiftKey || a.altKey || a.metaKey)) {
                        a.preventDefault();
                        k(this)
                    }
                })
            }
            return !0
        }
        return !1
    }

    var n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V = {
        transition: "elastic",
        speed: 300,
        width: !1,
        initialWidth: "600",
        innerWidth: !1,
        maxWidth: !1,
        height: !1,
        initialHeight: "450",
        innerHeight: !1,
        maxHeight: !1,
        scalePhotos: !0,
        scrolling: !0,
        inline: !1,
        html: !1,
        iframe: !1,
        fastIframe: !0,
        photo: !1,
        href: !1,
        title: !1,
        rel: !1,
        opacity: .9,
        preloading: !0,
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        open: !1,
        returnFocus: !0,
        reposition: !0,
        loop: !0,
        slideshow: !1,
        slideshowAuto: !0,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        onOpen: !1,
        onLoad: !1,
        onComplete: !1,
        onCleanup: !1,
        onClosed: !1,
        overlayClose: !0,
        escKey: !0,
        arrowKey: !0,
        top: !1,
        bottom: !1,
        left: !1,
        right: !1,
        fixed: !1,
        data: void 0
    }, W = "colorbox", X = "cbox", Y = X + "Element", Z = X + "_open", $ = X + "_load", _ = X + "_complete", ab = X + "_cleanup", bb = X + "_closed", cb = X + "_purge", db = !a.support.opacity && !a.support.style, eb = db && !c.XMLHttpRequest, fb = X + "_IE6", gb = "div";
    if (!a.colorbox) {
        a(l);
        T = a.fn[W] = a[W] = function (b, c) {
            var d = this;
            b = b || {};
            l();
            if (m()) {
                if (!d[0]) {
                    if (d.selector)return d;
                    d = a("<a/>");
                    b.open = !0
                }
                c && (b.onComplete = c);
                d.each(function () {
                    a.data(this, W, a.extend({}, a.data(this, W) || V, b))
                }).addClass(Y);
                (a.isFunction(b.open) && b.open.call(d) || b.open) && k(d[0])
            }
            return d
        };
        T.position = function (a, b) {
            function c(a) {
                r[0].style.width = u[0].style.width = q[0].style.width = a.style.width;
                q[0].style.height = s[0].style.height = t[0].style.height = a.style.height
            }

            var d = 0, e = 0, g = o.offset(), h = w.scrollTop(), i = w.scrollLeft();
            w.unbind("resize." + X);
            o.css({top: -9e4, left: -9e4});
            if (H.fixed && !eb) {
                g.top -= h;
                g.left -= i;
                o.css({position: "fixed"})
            } else {
                d = h;
                e = i;
                o.css({position: "absolute"})
            }
            e += H.right !== !1 ? Math.max(w.width() - H.w - L - J - f(H.right, "x"), 0) : H.left !== !1 ? f(H.left, "x") : Math.round(Math.max(w.width() - H.w - L - J, 0) / 2);
            d += H.bottom !== !1 ? Math.max(w.height() - H.h - K - I - f(H.bottom, "y"), 0) : H.top !== !1 ? f(H.top, "y") : Math.round(Math.max(w.height() - H.h - K - I, 0) / 2);
            o.css({top: g.top, left: g.left});
            a = o.width() === H.w + L && o.height() === H.h + K ? 0 : a || 0;
            p[0].style.width = p[0].style.height = "9999px";
            o.dequeue().animate({width: H.w + L, height: H.h + K, top: d, left: e}, {
                duration: a,
                complete: function () {
                    c(this);
                    Q = !1;
                    p[0].style.width = H.w + L + J + "px";
                    p[0].style.height = H.h + K + I + "px";
                    H.reposition && setTimeout(function () {
                        w.bind("resize." + X, T.position)
                    }, 1);
                    b && b()
                },
                step: function () {
                    c(this)
                }
            })
        };
        T.resize = function (a) {
            if (P) {
                a = a || {};
                a.width && (H.w = f(a.width, "x") - L - J);
                a.innerWidth && (H.w = f(a.innerWidth, "x"));
                x.css({width: H.w});
                a.height && (H.h = f(a.height, "y") - K - I);
                a.innerHeight && (H.h = f(a.innerHeight, "y"));
                if (!a.innerHeight && !a.height) {
                    x.css({height: "auto"});
                    H.h = x.height()
                }
                x.css({height: H.h});
                T.position("none" === H.transition ? 0 : H.speed)
            }
        };
        T.prep = function (b) {
            function c() {
                H.w = H.w || x.width();
                H.w = H.mw && H.mw < H.w ? H.mw : H.w;
                return H.w
            }

            function f() {
                H.h = H.h || x.height();
                H.h = H.mh && H.mh < H.h ? H.mh : H.h;
                return H.h
            }

            if (P) {
                var h, j = "none" === H.transition ? 0 : H.speed;
                x.remove();
                x = d(gb, "LoadedContent").append(b);
                x.hide().appendTo(y.show()).css({
                    width: c(),
                    overflow: H.scrolling ? "auto" : "hidden"
                }).css({height: f()}).prependTo(q);
                y.hide();
                a(O).css({"float": "none"});
                eb && a("select").not(o.find("select")).filter(function () {
                    return "hidden" !== this.style.visibility
                }).css({visibility: "hidden"}).one(ab, function () {
                    this.style.visibility = "inherit"
                });
                h = function () {
                    function b() {
                        db && o[0].style.removeAttribute("filter")
                    }

                    var c, f, h, k, l, m, n = v.length, p = "frameBorder", q = "allowTransparency";
                    if (P) {
                        k = function () {
                            clearTimeout(S);
                            z.hide();
                            i(_, H.onComplete)
                        };
                        db && O && x.fadeIn(100);
                        A.html(H.title).add(x).show();
                        if (n > 1) {
                            "string" == typeof H.current && B.html(H.current.replace("{current}", N + 1).replace("{total}", n)).show();
                            D[H.loop || n - 1 > N ? "show" : "hide"]().html(H.next);
                            E[H.loop || N ? "show" : "hide"]().html(H.previous);
                            H.slideshow && C.show();
                            if (H.preloading) {
                                c = [e(-1), e(1)];
                                for (; f = v[c.pop()];) {
                                    l = a.data(f, W).href || f.href;
                                    a.isFunction(l) && (l = l.call(f));
                                    if (g(l)) {
                                        m = new Image;
                                        m.src = l
                                    }
                                }
                            }
                        } else G.hide();
                        if (H.iframe) {
                            h = d("iframe")[0];
                            p in h && (h[p] = 0);
                            q in h && (h[q] = "true");
                            h.name = X + +new Date;
                            H.fastIframe ? k() : a(h).one("load", k);
                            h.src = H.href;
                            H.scrolling || (h.scrolling = "no");
                            a(h).addClass(X + "Iframe").appendTo(x).one(cb, function () {
                                h.src = "//about:blank"
                            })
                        } else k();
                        "fade" === H.transition ? o.fadeTo(j, 1, b) : b()
                    }
                };
                "fade" === H.transition ? o.fadeTo(j, 0, function () {
                    T.position(0, h)
                }) : T.position(j, h)
            }
        };
        T.load = function (b) {
            var c, e, j = T.prep;
            Q = !0;
            O = !1;
            M = v[N];
            b || h();
            i(cb);
            i($, H.onLoad);
            H.h = H.height ? f(H.height, "y") - K - I : H.innerHeight && f(H.innerHeight, "y");
            H.w = H.width ? f(H.width, "x") - L - J : H.innerWidth && f(H.innerWidth, "x");
            H.mw = H.w;
            H.mh = H.h;
            if (H.maxWidth) {
                H.mw = f(H.maxWidth, "x") - L - J;
                H.mw = H.w && H.w < H.mw ? H.w : H.mw
            }
            if (H.maxHeight) {
                H.mh = f(H.maxHeight, "y") - K - I;
                H.mh = H.h && H.h < H.mh ? H.h : H.mh
            }
            c = H.href;
            S = setTimeout(function () {
                z.show()
            }, 100);
            if (H.inline) {
                d(gb).hide().insertBefore(a(c)[0]).one(cb, function () {
                    a(this).replaceWith(x.children())
                });
                j(a(c))
            } else if (H.iframe)j(" "); else if (H.html)j(H.html); else if (g(c)) {
                a(O = new Image).addClass(X + "Photo").error(function () {
                    H.title = !1;
                    j(d(gb, "Error").text("This image could not be loaded"))
                }).load(function () {
                    var a;
                    O.onload = null;
                    if (H.scalePhotos) {
                        e = function () {
                            O.height -= O.height * a;
                            O.width -= O.width * a
                        };
                        if (H.mw && O.width > H.mw) {
                            a = (O.width - H.mw) / O.width;
                            e()
                        }
                        if (H.mh && O.height > H.mh) {
                            a = (O.height - H.mh) / O.height;
                            e()
                        }
                    }
                    H.h && (O.style.marginTop = Math.max(H.h - O.height, 0) / 2 + "px");
                    if (v[1] && (H.loop || v[N + 1])) {
                        O.style.cursor = "pointer";
                        O.onclick = function () {
                            T.next()
                        }
                    }
                    db && (O.style.msInterpolationMode = "bicubic");
                    setTimeout(function () {
                        j(O)
                    }, 1)
                });
                setTimeout(function () {
                    O.src = c
                }, 1)
            } else c && y.load(c, H.data, function (b, c, e) {
                j("error" === c ? d(gb, "Error").text("Request unsuccessful: " + e.statusText) : a(this).contents())
            })
        };
        T.next = function () {
            if (!Q && v[1] && (H.loop || v[N + 1])) {
                N = e(1);
                T.load()
            }
        };
        T.prev = function () {
            if (!Q && v[1] && (H.loop || N)) {
                N = e(-1);
                T.load()
            }
        };
        T.close = function () {
            if (P && !R) {
                R = !0;
                P = !1;
                i(ab, H.onCleanup);
                w.unbind("." + X + " ." + fb);
                n.fadeTo(200, 0);
                o.stop().fadeTo(300, 0, function () {
                    o.add(n).css({opacity: 1, cursor: "auto"}).hide();
                    i(cb);
                    x.remove();
                    setTimeout(function () {
                        R = !1;
                        i(bb, H.onClosed)
                    }, 1)
                })
            }
        };
        T.remove = function () {
            a([]).add(o).add(n).remove();
            o = null;
            a("." + Y).removeData(W).removeClass(Y).die()
        };
        T.element = function () {
            return a(M)
        };
        T.settings = V
    }
}(jQuery, document, this);
!function (a) {
    function b() {
        this._renderContainer();
        a(document).on("click", this._onCalendarClick.bind(this))
    }

    var c, d = "tcscalendar", e = "tcscalendar-button", f = "tcscalendar-prefix", g = "tcscalendar-button-prefix", h = 9, i = 1, j = 28, k = {
        dateFormat: "dd.MM.yyyy",
        date: null,
        minDate: new Date(1900, 0, 1),
        maxDate: new Date(2100, 11, 31),
        button: null,
        inputOpen: !0
    };
    b.prototype._$selector;
    b.prototype._settings;
    b.prototype._$calendarSelector;
    b.prototype._$container;
    b.prototype._isOpened;
    b.prototype._date;
    b.prototype._$daysSelector;
    b.prototype._$daysContainer;
    b.prototype._$monthsSelector;
    b.prototype._$monthsContainer;
    b.prototype._$yearsSelector;
    b.prototype._$yearsContainer;
    b.prototype._renderContainer = function () {
        this._$calendarSelector = a('<div class="tcs-calendar2"><div class="tcs-calendar2__days-selector">' + this._createArrowButton() + '<div class="tcs-calendar2__months-concrete-container"></div>' + this._createArrowButton(!0) + '</div><div class="tcs-calendar2__months-selector">' + this._createArrowButton() + '<ul class="tcs-calendar2__months-container"></ul>' + this._createArrowButton(!0) + '</div><div class="tcs-calendar2__years-selector">' + this._createArrowButton() + '<ul class="tcs-calendar2__years-container"></ul>' + this._createArrowButton(!0) + "</div></div>");
        this._$daysSelector = this._$calendarSelector.find(".tcs-calendar2__days-selector");
        this._$daysContainer = this._$daysSelector.find(".tcs-calendar2__months-concrete-container");
        this._$monthsSelector = this._$calendarSelector.find(".tcs-calendar2__months-selector");
        this._$monthsContainer = this._$monthsSelector.find(".tcs-calendar2__months-container");
        this._$yearsSelector = this._$calendarSelector.find(".tcs-calendar2__years-selector");
        this._$yearsContainer = this._$yearsSelector.find(".tcs-calendar2__years-container");
        this._$daysContainer.on("mousewheel", this._onMonthsMouseWheel.bind(this)).on("click", ".tcs-calendar2__item", this._onClickDay.bind(this));
        this._$monthsContainer.on("mousewheel", this._onMonthsMouseWheel.bind(this)).on("click", ".tcs-calendar2__item", this._onClickMonthYear.bind(this));
        this._$yearsContainer.on("mousewheel", this._onYearMouseWheel.bind(this)).on("click", ".tcs-calendar2__item", this._onClickMonthYear.bind(this));
        this._$daysSelector.on("click", ".tcs-calendar2__arrow-button", this._onClickContainerArrow.bind(this));
        this._$monthsSelector.on("click", ".tcs-calendar2__arrow-button", this._onClickContainerArrow.bind(this));
        this._$yearsSelector.on("click", ".tcs-calendar2__arrow-button", this._onClickContainerArrow.bind(this));
        this._$calendarSelector.appendTo(document.body).hide()
    };
    b.prototype._getDirectionByEvent = function (a) {
        a.preventDefault();
        a.stopPropagation();
        return parseInt(a.originalEvent.wheelDelta || -a.originalEvent.detail) > 0 ? -1 : 1
    };
    b.prototype._onMonthsMouseWheel = function (a) {
        var b = this._getDirectionByEvent(a);
        this._updateMonthsByDirection(b)
    };
    b.prototype._onClickContainerArrow = function (b) {
        b.stopPropagation();
        var c = -1, d = a(b.currentTarget);
        d.hasClass("tcs-calendar2__arrow-button_down") && (c = 1);
        d.parents(".tcs-calendar2__years-selector").length ? this._updateYearByDirection(c) : this._updateMonthsByDirection(c)
    };
    b.prototype._updateMonthsByDirection = function (a) {
        var b = this._date.getFullYear(), c = this._date.clone();
        if (a) {
            c.addMonths(a);
            if (!this._isAppropriateMonth(c))return;
            this._date = c;
            this._updateMonthsContainer();
            this._updateDaysContainer();
            b !== this._date.getFullYear() && this._updateYearsContainer()
        }
    };
    b.prototype._onYearMouseWheel = function (a) {
        var b = this._getDirectionByEvent(a);
        this._updateYearByDirection(b)
    };
    b.prototype._updateYearByDirection = function (a) {
        var b = this._date.clone().addYears(a);
        if (this._isAppropriateYear(b)) {
            this._date = b;
            this._updateYearsContainer();
            this._updateMonthsContainer();
            this._updateDaysContainer()
        }
    };
    b.prototype._onClickDay = function (b) {
        b.stopPropagation();
        var c, d, e = a(b.currentTarget), f = 0;
        if (!e.hasClass("tcs-calendar2__item_empty") && !e.hasClass("tcs-calendar2__item_disabled")) {
            c = e.parents(".tcs-calendar2__month")[0];
            d = this._$daysContainer.find(".tcs-calendar2__month");
            c === d[0] ? f = -1 : c === d[2] && (f = 1);
            this._date.addMonths(f).setDate(parseInt(e.text()));
            this._$selector.val(this._date.toString(this._settings.dateFormat)).trigger("change").trigger("change.calendar", this._date.clone());
            this.close()
        }
    };
    b.prototype._onClickMonthYear = function (b) {
        b.stopPropagation();
        var c, d = 4, e = a(b.currentTarget);
        if (!e.hasClass("tcs-calendar2__item_disabled")) {
            c = e.parent().find(".tcs-calendar2__item").index(e) - d;
            e.parents(".tcs-calendar2__years-selector").length ? this._updateYearByDirection(c) : this._updateMonthsByDirection(c)
        }
    };
    b.prototype._createArrowButton = function (a) {
        return '<div class="tcs-calendar2__arrow-button' + (a ? " tcs-calendar2__arrow-button_down" : "") + '"></div>'
    };
    b.prototype.open = function (b) {
        this._$selector = b;
        var c = this._$selector.val(), d = this._$selector.offset();
        this._settings = this._$selector.data(f) || a.extend(!0, {}, k);
        this._date = Date.parseExact(c, this._settings.dateFormat) || Date.parse(c) || (this._settings.date ? new Date(this._settings.date) : null) || new Date;
        this._createDays();
        this._$calendarSelector.css({left: d.left, top: d.top + this._$selector.outerHeight()}).fadeIn(200);
        this._$selector.addClass("tcs-gradient-yellow-simple");
        this._isOpened = !0;
        a(document).on("keydown", a.proxy(this._onCalendarOpenAndKeyDown, this)).on("click", a.proxy(this._onCalendarOpenAndClickOut, this));
        return this
    };
    b.prototype.close = function () {
        this._$calendarSelector.fadeOut(200, function () {
            this._$yearsContainer.html("");
            this._$monthsContainer.html("");
            this._$daysContainer.html("")
        }.bind(this));
        if (this._$selector) {
            this._$selector.removeClass("tcs-gradient-yellow-simple");
            this._$selector = null
        }
        this._date = null;
        this._settings = null;
        this._isOpened = !1;
        a(document).off("keydown", this._onCalendarOpenAndKeyDown).off("click", this._onCalendarOpenAndClickOut);
        return this
    };
    b.prototype.isOpened = function () {
        return this._isOpened
    };
    b.prototype._isAppropriateYear = function (a) {
        var b = a.getFullYear();
        return (!this._settings.minDate || b >= this._settings.minDate.getFullYear()) && (!this._settings.maxDate || b <= this._settings.maxDate.getFullYear())
    };
    b.prototype._isAppropriateMonth = function (a) {
        var b = a.getMonth(), c = a.getFullYear();
        return (!this._settings.minDate || c > this._settings.minDate.getFullYear() || b >= this._settings.minDate.getMonth() && c === this._settings.minDate.getFullYear()) && (!this._settings.maxDate || c < this._settings.maxDate.getFullYear() || b <= this._settings.maxDate.getMonth() && c === this._settings.maxDate.getFullYear())
    };
    b.prototype._isAppropriateDay = function (a) {
        var b = a.getDate(), c = a.getMonth(), d = a.getFullYear();
        return (!this._settings.minDate || 1 === a.compareTo(this._settings.minDate) || b >= this._settings.minDate.getDate() && c === this._settings.minDate.getMonth() && d === this._settings.minDate.getFullYear()) && (!this._settings.maxDate || -1 === a.compareTo(this._settings.maxDate) || b <= this._settings.maxDate.getDate() && c === this._settings.maxDate.getMonth() && d === this._settings.maxDate.getFullYear())
    };
    b.prototype.getSelector = function () {
        return this._$selector
    };
    b.prototype._createDays = function () {
        this._updateDaysContainer();
        this._updateMonthsContainer();
        this._updateYearsContainer();
        return this
    };
    b.prototype._updateDaysContainer = function () {
        var a, b, c = this._date.clone();
        c.setDate(1);
        a = c.clone().add(-1).month();
        b = c.clone().add(1).month();
        this._$daysContainer.html([this._createMonth(a, -1), this._createMonth(c), this._createMonth(b, 1)].join(""))
    };
    b.prototype._updateMonthsContainer = function () {
        this._$monthsContainer.html(this._createMonths())
    };
    b.prototype._updateYearsContainer = function () {
        this._$yearsContainer.html(this._createYears())
    };
    b.prototype._createMonth = function (a, b) {
        var c, d, e, f, g = Date.CultureInfo.abbreviatedDayNames, h = '<div class="tcs-calendar2__month' + (b ? "" : " tcs-calendar2__month_current") + '"><div class="tcs-calendar2__month-year-title">' + Date.CultureInfo.monthNames[a.getMonth()] + ", " + a.getFullYear() + '</div><ul class="tcs-calendar2__day-names"><li class="tcs-calendar2__day-name">' + g[1] + '</li><li class="tcs-calendar2__day-name">' + g[2] + '</li><li class="tcs-calendar2__day-name">' + g[3] + '</li><li class="tcs-calendar2__day-name">' + g[4] + '</li><li class="tcs-calendar2__day-name">' + g[5] + '</li><li class="tcs-calendar2__day-name">' + g[6] + '</li><li class="tcs-calendar2__day-name">' + g[0] + "</li></ul><ul>", k = a.getDaysInMonth(), l = a.getDay() || 7, m = 1;
        if (!b) {
            this._$daysSelector.removeClass("tcs-calendar2__days-selector_short tcs-calendar2__days-selector_long");
            if (this._isAppropriateDay(this._date))c = this._date.getDate(); else {
                d = this._settings.minDate ? this._settings.minDate.getTime() : 0;
                e = this._settings.maxDate ? this._settings.maxDate.getTime() : 0;
                f = this._date.getTime();
                c = Math.abs(f - d) < Math.abs(f - e) ? this._settings.minDate.getDate() : this._settings.maxDate.getDate()
            }
        }
        if (-1 != b)for (var n = i; l > n; n++)h += this._createCalendarItem("", "tcs-calendar2__day tcs-calendar2__item_empty");
        if (1 == b)k = j; else if (-1 == b) {
            a.add(1).month();
            l = a.getDay();
            1 != l ? a.moveToDayOfWeek(1, -1).moveToDayOfWeek(1, -1) : a.moveToDayOfWeek(1, -2);
            m = a.getDate()
        }
        for (; k >= m;) {
            h += this._createCalendarItem(m, "tcs-calendar2__day", !b && m === c, !this._isAppropriateDay(a));
            m++;
            a.addDays(1)
        }
        h += "</ul></div>";
        return h
    };
    b.prototype._createCalendarItem = function (a, b, c, d) {
        return '<li class="tcs-calendar2__item' + (b ? " " + b : "") + (c ? " tcs-calendar2__item_active" : "") + (d ? " tcs-calendar2__item_disabled" : "") + '">' + a + "</li>"
    };
    b.prototype._createMonths = function () {
        var a, b, c = this._date.clone(), d = this._date.getMonth(), e = "";
        c.add(-4).month();
        for (var f = 0; h > f; f++) {
            a = c.getMonth();
            b = !this._isAppropriateMonth(c);
            e += this._createCalendarItem(Date.CultureInfo.monthNames[a], "tcs-calendar2__month-item", a === d, b);
            c.add(1).month()
        }
        return e
    };
    b.prototype._createYears = function () {
        var a, b = this._date.clone(), c = this._date.getFullYear(), d = "";
        b.add(-4).year().setDate(1);
        for (var e = 0; h > e; e++) {
            a = !this._isAppropriateYear(b);
            d += this._createCalendarItem(b.getFullYear(), "tcs-calendar2__year-item", b.getFullYear() === c, a);
            b.add(1).year()
        }
        return d
    };
    b.prototype._onCalendarClick = function (b) {
        var c = a(b.target), d = null, h = null;
        if (c.attr("data-" + e)) {
            d = c.data(g);
            this._validateSelector(d) || (d = null)
        } else if (this._validateSelector(c)) {
            b.stopPropagation();
            d = c
        }
        if (d) {
            h = d.data(f);
            if (d.is(":disabled") || this.isOpened() || d === c && h && !h.inputOpen)return;
            this.open(d)
        }
    };
    b.prototype._validateSelector = function (a) {
        return a.attr("data-" + d) && (!this._$selector || a[0] !== this._$selector[0])
    };
    b.prototype._onCalendarOpenAndKeyDown = function (a) {
        var b = 27, c = 9;
        (a.keyCode === b || a.keyCode === c) && this.close()
    };
    b.prototype._onCalendarOpenAndClickOut = function (b) {
        var c = a(b.target);
        b.target === this.getSelector()[0] || c.parents("." + this._$calendarSelector.attr("class")).length || this.close()
    };
    a(function () {
        c || (c = new b)
    });
    a.fn.TCSCalendar = function (b) {
        var h = this, i = null, j = this.attr("data-" + d);
        if (!b || b instanceof Object)h.each(function (c, h) {
            var i = a(h), j = {};
            a.extend(!0, j, k);
            b && a.extend(!0, j, b);
            i.attr("data-" + d, !0).data(f, j).mask(j.dateFormat.replace(/[dmy]/gi, "9"));
            j.button && a(j.button).attr("data-" + e, !0).data(g, i)
        }); else if ("remove" === b && j) {
            i = h.data(f);
            if (i.button) {
                a(i.button).removeAttr("data-" + e).removeData(g);
                i = null
            }
            h.unmask().removeAttr("data-" + d).removeData(f)
        } else if ("close" === b && j)c && c.close(); else if ("open" === b && j)c && c.open(h); else if (("disable" === b || "enable" === b) && j) {
            i = h.data(f);
            i.button && a(i.button).toggleClass("tcs-calendar-disabled", "disable" === b)
        }
        return this
    }
}(jQuery);
jQuery ? !function (a) {
    "use strict";
    a.pluginCheckbox = function (b, c) {
        this.setting = {
            htmlWrapper: "<div></div>",
            classWrapper: "tcs-plugin-checkbox",
            classWrapperDisabled: "tcs-plugin-checkbox-disabled",
            classWrapperChecked: "tcs-plugin-checkbox-checked"
        };
        a.extend(this.setting, c || {});
        this.elementNative = a(b);
        this.elementNativeWrapper = a(this.setting.htmlWrapper).addClass(this.setting.classWrapper)
    };
    a.pluginCheckbox.prototype.createWrapper = function () {
        var a = this.elementNative.css("display");
        this.elementNativeWrapper.css({
            display: "inline" === a || "inline-block" === a ? "inline-block" : a,
            "float": this.elementNative.css("float"),
            position: this.elementNative.css("position"),
            "margin-top": this.elementNative.css("margin-top"),
            "margin-right": this.elementNative.css("margin-right"),
            "margin-bottom": this.elementNative.css("margin-bottom"),
            "margin-left": this.elementNative.css("margin-left")
        });
        this.elementNative.removeClass("tcs-input").css({
            display: "block",
            position: "static",
            opacity: 0,
            margin: "0",
            padding: 0,
            width: "20px",
            height: "20px",
            outline: 0
        }).wrap(this.elementNativeWrapper).bind("change.plugin", this.updateWrapper.bind(this)).bind("click.plugin", this.updateWrapper.bind(this)).on("change.plugin", this.updateWrapper.bind(this));
        this.updateWrapperAttributes(this.elementNative, !0);
        return this
    };
    a.pluginCheckbox.prototype.updateWrapper = function (b) {
        this.updateWrapperAttributes(a(b.target), !1)
    };
    a.pluginCheckbox.prototype.updateWrapperAttributes = function (b, c) {
        var d = !(!a.browser.msie || "8.0" !== a.browser.version), e = a(b).is(".checkbox_enabled") || a(b).is(".checkbox_disabled"), f = d && e && !c ? a(b).is(".checkbox_enabled") : a(b).is(":checked") || "checked" === a(b).attr("checked"), g = d && e && !c ? a(b).is(".checkbox_disabled") : a(b).is(":disabled") || "disabled" === a(b).attr("disabled");
        a(b).parent()[f ? "addClass" : "removeClass"](this.setting.classWrapperChecked)[g ? "addClass" : "removeClass"](this.setting.classWrapperDisabled);
        a(b).trigger("change-emulate")
    };
    a.fn.pluginCheckbox = function (b) {
        return a(this).each(function (c, d) {
            if (a(d).is("input") && "checkbox" === a(d).attr("type")) {
                if (a(d).data("plugin"))return a(d).data("plugin").updateWrapper(a(d));
                a(d).data("plugin", new a.pluginCheckbox(a(d), b).createWrapper())
            } else a(d).children().each(function (c, d) {
                a(d).pluginCheckbox(b)
            })
        })
    }
}(jQuery) : console.log("Plugin jQuery not found");
jQuery ? !function (a) {
    "use strict";
    a.pluginRadio = function (b, c) {
        this.setting = {
            htmlWrapper: "<div></div>",
            classWrapper: "tcs-plugin-radio",
            classWrapperDisabled: "tcs-plugin-radio-disabled",
            classWrapperChecked: "tcs-plugin-radio-checked",
            classWrapperFocus: "tcs-plugin-radio-focus"
        };
        a.extend(this.setting, c || {});
        this.elementNative = a(b);
        this.elementNativeWrapper = a(this.setting.htmlWrapper).addClass(this.setting.classWrapper)
    };
    a.pluginRadio.prototype.createWrapper = function () {
        this.elementNativeWrapper.css({
            display: this.elementNative.css("display"),
            "float": this.elementNative.css("float"),
            position: this.elementNative.css("position"),
            "margin-top": this.elementNative.css("margin-top"),
            "margin-right": this.elementNative.css("margin-right"),
            "margin-bottom": this.elementNative.css("margin-bottom"),
            "margin-left": this.elementNative.css("margin-left")
        });
        this.elementNative.css({
            display: "inline",
            opacity: 0,
            outline: 0,
            margin: 0,
            padding: 0,
            width: 15,
            height: 13
        }).wrap(this.elementNativeWrapper).bind("focus.plugin", this.onFocus.bind(this)).bind("blur.plugin", this.onBlur.bind(this)).bind("change.plugin", this.updateWrapper.bind(this)).on("change.plugin", this.updateWrapper.bind(this));
        this.updateWrapperAttributes(this.elementNative);
        return this
    };
    a.pluginRadio.prototype.onFocus = function () {
        a(this.elementNative).parent().addClass(this.setting.classWrapperFocus)
    };
    a.pluginRadio.prototype.onBlur = function () {
        a(this.elementNative).parent().removeClass(this.setting.classWrapperFocus)
    };
    a.pluginRadio.prototype.updateWrapper = function (b) {
        a("input[name=" + a(b.target).attr("name") + "]").each(function (b, c) {
            this.updateWrapperAttributes(a(c))
        }.bind(this));
        this.updateWrapperAttributes(a(b.target))
    };
    a.pluginRadio.prototype.updateWrapperAttributes = function (b) {
        a(b).parent()[a(b).is(":checked") || "checked" === a(b).attr("checked") ? "addClass" : "removeClass"](this.setting.classWrapperChecked)[a(b).is(":disabled") || "disabled" === a(b).attr("disabled") ? "addClass" : "removeClass"](this.setting.classWrapperDisabled)
    };
    a.fn.pluginRadio = function (b) {
        return a(this).each(function (c, d) {
            if (a(d).is("input") && "radio" === a(d).attr("type")) {
                if (a(d).data("plugin"))return a(d).data("plugin").updateWrapper(a(d));
                a(d).data("plugin", new a.pluginRadio(a(d), b).createWrapper())
            } else a(d).children().each(function (c, d) {
                a(d).pluginRadio(b)
            })
        })
    }
}(jQuery) : console.log("Plugin jQuery not found");
!function (a) {
    "use strict";
    a.pluginSelect = function (b, c) {
        this.setting = {
            prefix: "tcs-plugin-select",
            version: (new Date).getTime(),
            scrollIndex: "0",
            scrollShow: "5",
            scrollShowCurrent: "0",
            scrollItemHover: 0,
            scrollItemHoverCurrent: 0,
            allowScroll: !0,
            allowMove: !0,
            allowClick: !0,
            allowDrop: !0,
            iconAsBackground: !1,
            disabled: !1
        };
        this.setting = a.extend(this.setting, c || {});
        this.select = a(b)
    };
    a.pluginSelect.prototype.pluginCreate = function () {
        if (this.select.attr("size") && this.select.attr("size") > 1)try {
            this.makeLayout("mainview");
            this.mainview.css({
                display: "inline" === this.select.css("display") ? "inline-block" : this.select.css("display"),
                position: this.select.css("position"),
                "float": this.select.css("float"),
                width: this.select.outerWidth() > 0 ? this.select.outerWidth() : "auto"
            }).disableSelection();
            this.mainviewContainer.bind("click.plugin_" + this.select.attr("id") + "_" + this.setting.version, this.onClick.bind(this));
            this.setting.scrollShow = this.select.attr("size");
            a(document.body).find(this.select).after(this.mainview)
        } catch (b) {
            console.error(b)
        } else {
            this.makeLayout("preview").attr("tabindex", "0");
            this.makeLayout("mainview");
            this.preview.css({
                display: "inline" === this.select.css("display") ? "inline-block" : this.select.css("display"),
                position: this.select.css("position"),
                "float": this.select.css("float"),
                width: this.select.outerWidth() > 0 ? this.select.outerWidth() : "auto"
            }).disableSelection();
            this.mainview.css({
                display: "block",
                position: "absolute",
                width: this.select.outerWidth() > 0 ? this.select.outerWidth() : "auto",
                border: "1px solid rgb(171, 171, 171)",
                "border-top": "1px solid rgb(221, 221, 221)",
                "z-index": "99999"
            }).disableSelection();
            this.hidder = a("<div/>").css({
                display: "block",
                position: "fixed",
                width: a(document.body).width(),
                height: a(document.body).height() > a(a(document.body).children()[0]).height() ? a(document.body).height() : a(a(document.body).children()[0]).height(),
                background: "#000000",
                opacity: "0",
                top: "0px",
                left: "0px",
                "z-index": "9999"
            }).disableSelection();
            this.preview.bind("click.plugin_" + this.select.attr("id") + "_" + this.setting.version, this.onClick.bind(this));
            this.hidder.bind("click.plugin_" + this.select.attr("id") + "_" + this.setting.version, this.onClick.bind(this));
            this.mainviewContainer.bind("click.plugin_" + this.select.attr("id") + "_" + this.setting.version, this.onClick.bind(this));
            a(document.body).append(this.hidder).append(this.mainview).find(this.select).after(this.preview)
        }
        this.mainview.attr("data-for", this.select.attr("id"));
        this.preview.attr("data-for", this.select.attr("id"));
        this.hidder.attr("data-for", this.select.attr("id"));
        this.select.addClass("tcs-plugin-select-native-hide").bind("change." + this.select.attr("id") + "_" + this.setting.version, this.onChange.bind(this));
        if (!a.browser.msie) {
            this.select.bind("focus." + this.select.attr("id") + "_" + this.setting.version, this.onFocus.bind(this)).bind("blur." + this.select.attr("id") + "_" + this.setting.version, this.onBlur.bind(this));
            this.preview.bind("focus." + this.select.attr("id") + "_" + this.setting.version, this.onFocus.bind(this)).bind("blur." + this.select.attr("id") + "_" + this.setting.version, this.onBlur.bind(this))
        }
        this.pluginUpdate();
        return this
    };
    a.pluginSelect.prototype.pluginDestroy = function () {
        this.mainview.detach();
        this.mainviewContainer.detach();
        this.hidder.detach();
        this.mainview = null;
        this.mainviewContainer = null;
        this.hidder = null
    };
    a.pluginSelect.prototype.pluginUpdate = function () {
        if (this.mainview) {
            this.list = this.renderList(this.select);
            this.updateLayout()
        } else this.pluginCreate()
    };
    a.pluginSelect.prototype.onChange = function () {
        this.pluginUpdate()
    };
    a.pluginSelect.prototype.onFocus = function () {
        a(document.body).bind("keydown." + this.select.attr("id") + "_" + this.setting.version, this.onKeyDown.bind(this))
    };
    a.pluginSelect.prototype.onBlur = function () {
        a(document.body).unbind("keydown." + this.select.attr("id") + "_" + this.setting.version)
    };
    a.pluginSelect.prototype.onKeyUp = function () {
    };
    a.pluginSelect.prototype.onKeyDown = function (a) {
        switch (a.keyCode) {
            case 38:
                a.stopPropagation();
                var b = this.select.find("option:selected");
                if (b.length) {
                    var c = b.first().prevAll("option");
                    if (c.length && c.length > 0) {
                        this.select.val(c.val()).trigger("change");
                        this.updateLayout()
                    }
                } else if (this.select.find("option")) {
                    this.select.val(this.select.find("option").first().val()).trigger("change");
                    this.updateLayout()
                }
                return !1;
            case 40:
                a.stopPropagation();
                var b = this.select.find("option:selected");
                if (b.length) {
                    var d = b.last().nextAll("option");
                    if (d.length && d.length > 0) {
                        this.select.val(d.val()).trigger("change");
                        this.updateLayout()
                    }
                } else if (this.select.find("option")) {
                    this.select.val(this.select.find("option").first().val()).trigger("change");
                    this.updateLayout()
                }
                return !1;
            case 36:
                a.stopPropagation();
                var b = this.select.find("option");
                if (b.length) {
                    this.select.val(b.first().val()).trigger("change");
                    this.updateLayout()
                }
                return !1;
            case 35:
                a.stopPropagation();
                var b = this.select.find("option");
                if (b.length) {
                    this.select.val(b.last().val()).trigger("change");
                    this.updateLayout()
                }
                return !1
        }
    };
    a.pluginSelect.prototype.onClick = function (b) {
        var c = a(b.target);
        if (this.select.is(":disabled"))return !1;
        if (c.is(this.preview) || c.parents().is(this.preview))this.list.children().length > 1 && (this.setting.allowDrop = !this.setting.allowDrop); else if (c.is(this.mainviewContainer) || c.parents().is(this.mainviewContainer)) {
            var d = c.is("." + this.setting.prefix + "-list-item") ? c : c.parents("." + this.setting.prefix + "-list-item");
            if (d.is("." + this.setting.prefix + "-list-item")) {
                if (d.attr("data-value") !== this.select.val()) {
                    this.setting.scrollIndex = d.data("index");
                    this.select.val(d.attr("data-value")).trigger("change")
                }
                this.setting.allowDrop = !this.setting.allowDrop
            }
        } else {
            if (!c.is(this.hidder) && !c.parents().is(this.hidder))return !1;
            this.setting.allowDrop = !this.setting.allowDrop
        }
        this.updateLayout()
    };
    a.pluginSelect.prototype.onMouseDown = function () {
        a(document.body).bind("mousemove.plugin_" + this.select.attr("id") + "_" + this.setting.version, this.onMouseMove.bind(this)).bind("mouseup.plugin_" + this.select.attr("id") + "_" + this.setting.version, this.onMouseUp.bind(this));
        this.mainviewContainer.unbind("click.plugin_" + this.select.attr("id") + "_" + this.setting.version);
        if (this.preview) {
            this.preview.unbind("click.plugin_" + this.select.attr("id") + "_" + this.setting.version);
            this.hidder.unbind("click.plugin_" + this.select.attr("id") + "_" + this.setting.version)
        }
    };
    a.pluginSelect.prototype.onMouseUp = function () {
        a(document.body).unbind("mousemove.plugin_" + this.select.attr("id") + "_" + this.setting.version).unbind("mouseup.plugin_" + this.select.attr("id") + "_" + this.setting.version);
        this.mainviewContainer.bind("click.plugin_" + this.select.attr("id") + "_" + this.setting.version, this.onClick.bind(this));
        this.mainviewScroll.bind("click.plugin_" + this.select.attr("id") + "_" + this.setting.version, this.onClick.bind(this));
        if (this.preview) {
            this.preview.bind("click.plugin_" + this.select.attr("id") + "_" + this.setting.version, this.onClick.bind(this));
            this.hidder.bind("click.plugin_" + this.select.attr("id") + "_" + this.setting.version, this.onClick.bind(this))
        }
    };
    a.pluginSelect.prototype.onListItemMouseEnter = function (b) {
        this.list.children().each(function (b, c) {
            a(c).removeClass(this.setting.prefix + "-list-item-hover")
        }.bind(this));
        var c = a(b.target).is("." + this.setting.prefix + "-list-item") ? a(b.target) : a(b.target).parents("." + this.setting.prefix + "-list-item");
        if (c.is("." + this.setting.prefix + "-list-item")) {
            this.setting.scrollItemHover = c.data("index");
            c.addClass(this.setting.prefix + "-list-item-hover")
        }
    };
    a.pluginSelect.prototype.onListItemMouseLeave = function (b) {
        var c = a(b.target).is("." + this.setting.prefix + "-list-item") ? a(b.target) : a(b.target).parents("." + this.setting.prefix + "-list-item");
        c.is("." + this.setting.prefix + "-list-item") && c.removeClass(this.setting.prefix + "-list-item-hover")
    };
    a.pluginSelect.prototype.enable = function () {
        this.setting.disabled = !1;
        this.updateLayout()
    };
    a.pluginSelect.prototype.disable = function () {
        this.setting.disabled = !0;
        this.updateLayout()
    };
    a.pluginSelect.prototype.updateLayout = function () {
        if (this.preview && this.select.children().filter("option")) {
            this.select.children().filter("option").each(function (b, c) {
                var d = a(c);
                if (d.attr("selected") || "selected" === d.attr("selected")) {
                    this.previewContainer.html(this.renderLabel(d));
                    this.previewScroll.css({height: this.previewContainer.height()});
                    if (this.select.children().length > 1 && !this.setting.disabled) {
                        this.previewContainer.removeClass("tcs-plugin-select-disabled");
                        this.previewScroll.removeClass("tcs-plugin-select-preview-scroll-fade")
                    } else {
                        this.previewContainer.addClass("tcs-plugin-select-disabled");
                        this.previewScroll.addClass("tcs-plugin-select-preview-scroll-fade")
                    }
                }
            }.bind(this));
            this.select.get(0).selectedIndex > 0 ? this.previewContainer.addClass("tcs-plugin-select-option-selected") : this.previewContainer.removeClass("tcs-plugin-select-option-selected");
            this.mainview.css({
                top: this.preview.offset().top + this.preview.height(),
                left: this.preview.offset().left
            })
        }
        if (this.mainview) {
            if (a.isEmptyObject(this.list))return !1;
            this.mainview.show();
            this.mainviewContainer.html(this.list);
            if (this.list) {
                var b = 0;
                this.list.children().each(function (c, d) {
                    a(d).attr({
                        "data-width": a(d).width(),
                        "data-height": a(d).height(),
                        "data-top": b
                    }).unbind("mouseenter.plugin_" + this.select.attr("id") + "_" + this.setting.version).unbind("mouseleave.plugin_" + this.select.attr("id") + "_" + this.setting.version).bind("mouseenter.plugin_" + this.select.attr("id") + "_" + this.setting.version, this.onListItemMouseEnter.bind(this)).bind("mouseleave.plugin_" + this.select.attr("id") + "_" + this.setting.version, this.onListItemMouseLeave.bind(this));
                    b += a(d).height()
                }.bind(this));
                this.setting.scrollShowCurrent = this.list.children().length > this.setting.scrollShow ? parseFloat(this.setting.scrollShow) : parseFloat(this.list.children().length);
                var c = 0;
                this.list.children().each(function (b, d) {
                    var e = a(d);
                    this.setting.scrollIndex < this.list.children().length - this.setting.scrollShowCurrent ? b >= this.setting.scrollIndex && b < this.setting.scrollIndex + this.setting.scrollShowCurrent && (c += e.data("height")) : b >= this.list.children().length - this.setting.scrollShowCurrent && b < this.list.children().length && (c += e.data("height"))
                }.bind(this));
                this.mainviewContainer.css({height: c});
                if (this.list.children().length > this.setting.scrollShow) {
                    this.mainviewScrollRatio = this.mainviewContainer.height() / this.list.height();
                    var b = 0;
                    if (this.setting.scrollIndex >= this.setting.scrollShowCurrent) {
                        var d = {};
                        this.setting.scrollIndex >= this.list.children().length - this.setting.scrollShowCurrent && (d = a(this.list.children()[this.list.children().length - this.setting.scrollShowCurrent + 1]));
                        this.setting.scrollIndex < this.list.children().length - this.setting.scrollShowCurrent && (d = a(this.list.children()[this.setting.scrollIndex]))
                    }
                    this.list.css({top: -b});
                    if (this.list.children().length > 1) {
                        this.mainviewScroll.css({height: this.mainviewContainer.height()});
                        this.mainviewScrollRunner.css({
                            height: this.mainviewContainer.height() * this.mainviewScrollRatio,
                            top: this.list.position().top * this.mainviewScrollRatio * -1
                        });
                        a("." + this.setting.prefix + "-" + name + "-scroll-runner-middle", this.mainviewScrollRunner).css({height: this.mainviewScrollRunner.height() - a("." + this.setting.prefix + "-" + name + "-scroll-runner-top", this.mainviewScrollRunner).height() - a("." + this.setting.prefix + "-" + name + "-scroll-runner-top", this.mainviewScrollRunner).height()})
                    }
                } else this.mainviewScroll.hide()
            } else console.error("Select box list error");
            this.preview && this.mainview[this.setting.allowDrop || this.setting.disabled ? "hide" : "show"]()
        }
        if (this.hidder) {
            this.hidder.css({height: a(document.body).height() > a(a(document.body).children()[0]).height() ? a(document.body).height() : a(a(document.body).children()[0]).height()});
            this.hidder[this.setting.allowDrop ? "hide" : "show"]()
        }
    };
    a.pluginSelect.prototype.makeLayout = function (b) {
        if (b) {
            this[b + "Container"] = a("<div></div>").addClass(this.setting.prefix + "-" + b + "-container").html("&mdash;");
            this[b + "ScrollRunner"] = a("<span></span>").append(a("<span></span>").addClass(this.setting.prefix + "-" + b + "-scroll-runner-top")).append(a("<span></span>").addClass(this.setting.prefix + "-" + b + "-scroll-runner-middle")).append(a("<span></span>").addClass(this.setting.prefix + "-" + b + "-scroll-runner-bottom")).addClass(this.setting.prefix + "-" + b + "-scroll-runner");
            this[b + "Scroll"] = a("<div></div>").addClass(this.setting.prefix + "-" + b + "-scroll").append(this[b + "ScrollRunner"]);
            this[b] = a("<div></div>").addClass(this.setting.prefix + "-" + b).append(this[b + "Scroll"]).append(this[b + "Container"]);
            return this[b]
        }
        return !1
    };
    a.pluginSelect.prototype.renderList = function (b) {
        if (a.isEmptyObject(b))return !1;
        var c = a("<ul></ul>").addClass(this.setting.prefix + "-list");
        b.children().filter("option").each(function (b, d) {
            var e = a(d);
            (e.attr("selected") || "selected" === e.attr("selected")) && (this.setting.scrollIndex = b);
            var f = this.renderListItem(e).attr({
                "data-index": b,
                "data-value": "" + e.val(),
                title: e.text(),
                alt: e.text()
            });
            c.append(f)
        }.bind(this));
        return c
    };
    a.pluginSelect.prototype.renderListItem = function (b) {
        if (a.isEmptyObject(b))return !1;
        var c = a("<li></li>"), d = b.data("template");
        d && "attributes"in d && a.each(d.attributes, function (a, b) {
            c.attr(a, b)
        });
        return c.addClass(this.setting.prefix + "-list-item")[b.attr("selected") || "selected" === b.attr("selected") ? "addClass" : "removeClass"](this.setting.prefix + "-list-item-active").html(this.renderLabel(b))
    };
    a.pluginSelect.prototype.renderLabel = function (b) {
        if (a.isEmptyObject(b))return !1;
        var c = a("<span></span>").addClass(this.setting.prefix + "-label");
        if (b.data("template")) {
            var d = b.data("template"), e = "", f = null;
            d["class"] && c.addClass(d["class"]);
            if (d.icon) {
                var g = null;
                g = this.setting.iconAsBackground ? a("<span/>").addClass(this.setting.prefix + "-label-icon").addClass(d.icon) : a("<img/>").addClass(this.setting.prefix + "-label-icon").attr({
                    src: d.icon,
                    border: "0"
                });
                c.append(g)
            }
            if (d.title) {
                var h = a("<span></span>").addClass(this.setting.prefix + "-label-title").append(d.title);
                c.append(h)
            }
            if (d.content) {
                var i = a("<span></span>").addClass(this.setting.prefix + "-label-content").append(d.content);
                c.append(i)
            }
            if ("attributes"in d) {
                f = d.attributes;
                for (e in f)f.hasOwnProperty(e) && c.attr(e, f[e])
            }
        } else c.html(b.html());
        return c
    };
    a.fn.pluginSelect = function (b) {
        return a(this).each(function (c, d) {
            if (a(d).is("select")) {
                if (a(d).data("pluginSelect"))return a(d).data("pluginSelect").pluginUpdate();
                a(d).data("pluginSelect", new a.pluginSelect(d, b).pluginCreate())
            } else a(d).children().each(function (c, d) {
                a(d).pluginSelect(b)
            })
        })
    };
    a.fn.disableSelection = function () {
        return this.each(function () {
            a(this).attr("unselectable", "on").css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none",
                "-ms-user-select": "none"
            }).each(function () {
                this.onselectstart = function () {
                    return !1
                }
            })
        })
    }
}(jQuery);
!function (a) {
    "use strict";
    function b(b, c, d) {
        this._$selectElement = b;
        this._values = c || null;
        this._settings = {
            containerClassName: "",
            listClassName: "",
            listItemClassName: "",
            scrollShow: 0,
            isFilter: !1,
            iterator: this._defaultFilter
        };
        a.extend(this._settings, d);
        this._init()
    }

    function c(b) {
        var c = a(b.currentTarget), d = c.data(e), f = d ? d.data(e) : null;
        d.is(":disabled") || f && f.select && f.select.expand()
    }

    var d = "plugin-select", e = "plugin-select-prefix", f = {
        SELECT: "tcs-plugin-select2",
        SELECT_ACTIVE: "tcs-plugin-select2_active",
        SELECT_DISABLE: "tcs-plugin-select2_disable",
        LIST: "tcs-plugin-select2__list",
        LIST_ITEM: "tcs-plugin-select2__list-item",
        LIST_ITEM_ACTIVE: "tcs-plugin-select2__list-item_active"
    }, g = 38, h = 40, i = 13, j = 27, k = !1;
    a(document).on("click", ".tcs-plugin-select2", c);
    b.prototype._$selectElement;
    b.prototype._$selector;
    b.prototype._valueSelector;
    b.prototype._$listSelector;
    b.prototype._values;
    b.prototype._value;
    b.prototype._isExpand;
    b.prototype._settings;
    b.prototype._init = function () {
        var b, c;
        this._$selector = a('<div class="' + f.SELECT + (this._settings.containerClassName ? " " + this._settings.containerClassName : "") + '"><div class="tcs-plugin-select2__current-value"></div><div class="tcs-plugin-select2__arrow"></div></div>');
        this._$selector.data(e, this._$selectElement);
        this._valueSelector = this._$selector.find(".tcs-plugin-select2__current-value");
        if (this._values) {
            c = [];
            a(this._values).each(function (a, d) {
                !b && d.selected && (b = d);
                c.push('<option value="' + d.value + '"' + (d.selected ? ' selected="selected"' : "") + ">" + d.value + "</option>")
            });
            b || (b = this._values[0]);
            this._$selectElement.html(c.join(""))
        } else {
            this._values = [];
            this._$selectElement.find("option").each(function (c, d) {
                var e = a(d), f = e.text(), g = {value: e.val(), data: f, template: e.data("template")};
                this._values.push(g);
                !b && e.is(":selected") && (b = g)
            }.bind(this))
        }
        0 != this._values.length || this._settings.placeholder || (this._settings.placeholder = "Список пуст");
        b = this._value = b || this._values[0];
        if (this._settings.placeholder) {
            b = {
                data: '<span class="tcs-plugin-select2__placeholder">' + this._settings.placeholder + "</span>",
                value: 0,
                render: this._settings.placeholderRender || this._defaultRender
            };
            this._$selectElement.prepend('<option value="" selected></option>');
            this._value = 0
        }
        this._settings.scrollShow && this._settings.scrollShow > this._values.length && (this._settings.scrollShow = this._values.length);
        this._valueSelector.html(this._getOptionString(b));
        this._$selector.css({width: this._$selectElement.width()});
        this._$selectElement.after(this._$selector).css({visibility: "hidden", position: "absolute"})
    };
    b.prototype.expand = function () {
        var b, c, d, e = [], g = this._$selector.offset();
        this.originValues = this._values;
        if (!k) {
            k = !0;
            if (this._settings.isFilter) {
                var h = a.trim(this._valueSelector.text());
                this._valueSelector.empty().html('<input type="text" class="tcs-plugin-select2__filter" value="' + h + '">');
                this.filter = this._valueSelector.find("input").on("keyup", this._onFilterChange.bind(this)).on("click", function (a) {
                    a.preventDefault();
                    this.expand();
                    return !1
                }.bind(this)).focus().select()
            }
            this._$selector.addClass(f.SELECT_ACTIVE);
            this._$listSelector = a('<ul class="' + f.LIST + (this._settings.listClassName ? " " + this._settings.listClassName : "") + '"></ul>');
            this._$listSelector.css({width: this._$selector.innerWidth()});
            a(this._values).each(function (b, c) {
                var d = this._getOptionString(c);
                e.push('<li class="' + f.LIST_ITEM + (this._settings.listItemClassName ? " " + this._settings.listItemClassName : "") + (this._value === c || this._value === b ? " " + f.LIST_ITEM_ACTIVE : "") + '" data-id="' + b + '" title="' + _.escape(a("<i>" + d + "</i>").text()) + '">' + d + "</li>")
            }.bind(this));
            this._$listSelector.html(e.join(""));
            d = this._$listSelector.find("." + f.LIST_ITEM_ACTIVE);
            this._$listSelector.css({left: g.left, top: g.top + this._$selector.outerHeight()}).appendTo(document.body);
            if (this._settings.scrollShow) {
                b = this._$listSelector.find("." + f.LIST_ITEM).filter(":eq(" + (this._settings.scrollShow - 1) + ")");
                c = b.position().top + b.outerHeight();
                this._$listSelector.css("maxHeight", c)
            }
            d.length > 0 && this.scrollTo(d);
            this._$listSelector.hide().fadeIn(200);
            a(document).one("click", a.proxy(this._onClickOutPluginSelect, this)).on("keydown", a.proxy(this._onKeyDownOnPluginSelect, this))
        }
    };
    b.prototype._onFilterChange = function () {
        var b = [];
        this.searchString = this.filter.val().toLowerCase();
        this._values = _.filter(this._values, this._settings.iterator, this);
        a(this._values).each(function (a, c) {
            var d = this._getOptionString(c);
            b.push('<li class=" ' + f.LIST_ITEM + (0 === a ? " " + f.LIST_ITEM_ACTIVE : "") + '" data-id="' + a + '">' + d + "</li>")
        }.bind(this));
        b.length > 0 ? this._$listSelector && this._$listSelector.show().html(b.join("")) : this._$listSelector.hide()
    };
    b.prototype.collapse = function () {
        if (this._$listSelector) {
            this._value && this._valueSelector.html(this._getOptionString(this._value));
            this._values = this.originValues;
            this._$selector.removeClass(f.SELECT_ACTIVE);
            a(document).off("keydown", this._onKeyDownOnPluginSelect).off("click", this._onClickOutPluginSelect);
            this._$listSelector.fadeOut(200, function () {
                this._$listSelector.remove();
                this._$listSelector = null;
                k = !1
            }.bind(this))
        }
    };
    b.prototype.destroy = function () {
        this._$selectElement = null;
        this._$selector = null;
        this._valueSelector = null;
        this._$listSelector = null;
        this._values = null;
        this._value = null;
        this.filter && this.filter.off()
    };
    b.prototype._onClickOutPluginSelect = function (b) {
        var c, d, e = a(b.target);
        d = e.hasClass(f.LIST_ITEM) ? e : e.parents("." + f.LIST_ITEM);
        if (d.length) {
            c = this._values[d.data("id")];
            this._value !== c && this._valueSelector.html(this._getOptionString(c));
            this._updateValue(c)
        }
        this.collapse()
    };
    b.prototype.scrollTo = function (a) {
        var b = this._$listSelector.height(), c = a.outerHeight(), d = a.position().top, e = d + c, f = this._$listSelector.scrollTop();
        e > b ? this._$listSelector.scrollTop(f + e - c) : 0 > d && this._$listSelector.scrollTop(f + d);
        return this
    };
    b.prototype._onKeyDownOnPluginSelect = function (a) {
        var b, c, d = this._$listSelector.find("." + f.LIST_ITEM), e = d.filter("." + f.LIST_ITEM_ACTIVE), k = e.index();
        if (a.keyCode === g || a.keyCode === h) {
            a.preventDefault();
            if (a.keyCode === g) {
                b = e.prev();
                k--
            } else if (a.keyCode === h) {
                b = e.next();
                k++
            }
            if (!b.length)return;
            e.removeClass(f.LIST_ITEM_ACTIVE);
            b.addClass(f.LIST_ITEM_ACTIVE);
            this.scrollTo(b);
            c = this._values[k];
            this._valueSelector.html(this._getOptionString(c))
        } else if (a.keyCode === i) {
            this._updateValue(this._values[k]);
            this.collapse()
        } else a.keyCode === j && this.collapse();
        this._values = this.originValues
    };
    b.prototype._defaultRender = function (a) {
        return a.toString()
    };
    b.prototype._getOptionString = function (a) {
        var b = "";
        if (a.render)b = a.render(a.data); else if (a.template) {
            b = a.template.content;
            a.template["class"] && (b = '<div class="' + a.template["class"] + '">' + b + "</div>")
        } else b = this._defaultRender(a.data);
        return b
    };
    b.prototype._defaultFilter = function (a) {
        return a.value ? -1 != a.data.toString().toLowerCase().indexOf(this.searchString) : !1
    };
    b.prototype._updateValue = function (a) {
        if (this._value !== a) {
            this._value = a;
            this._$selectElement.val(this._value.value).trigger("change", this._value.value)
        } else this._$selectElement.trigger("oldvalue:change", this._value.value)
    };
    b.prototype.disable = function () {
        this._isExpand && this.collapse();
        this._$selectElement.attr("disabled", "disabled");
        this._$selector.addClass(f.SELECT_DISABLE)
    };
    b.prototype.enable = function () {
        this._$selectElement.removeAttr("disabled");
        this._$selector.removeClass(f.SELECT_DISABLE)
    };
    b.prototype.update = function () {
        var b = this._$selectElement.val();
        this._$selector.css({width: this._$selectElement.width()});
        a(this._values).each(function (a, c) {
            if (c.value === b) {
                this._value = c;
                this._valueSelector.html(this._getOptionString(this._value))
            }
        }.bind(this))
    };
    b.prototype.close = function () {
        this.collapse()
    };
    a.fn.pluginSelect2 = function (c, f) {
        function g(a) {
            return a.data(e)
        }

        function h(a, b) {
            a && a.select && a.select[b] && a.select[b]()
        }

        var i, j = "data-" + d;
        this.each(function (d, k) {
            var l = a(k);
            if (l.attr(j) || "string" == typeof c)switch (c) {
                case"disable":
                case"update":
                case"enable":
                case"close":
                    i = g(l);
                    h(i, c);
                    break;
                case"remove":
                    i = g(l);
                    h(i, c);
                    l.removeAttr(j).removeData(e)
            } else {
                i = new b(l, c, f);
                l.attr(j, !0).data(e, {select: i}).data("pluginSelect", l);
                i = g(l)
            }
            l.is(":disabled") && h(i, "disable")
        });
        return this
    }
}(jQuery);
!function (a) {
    "use strict";
    a.fn.pluginSelect2WithIcon = function (c, d) {
        d.containerClassName = a.trim((d.containerClassName || "") + " tcs-plugin-select2-with-icon__container");
        d.listClassName = a.trim((d.listClassName || "") + " tcs-plugin-select2-with-icon__list");
        d.listItemClassName = a.trim((d.listItemClassName || "") + " tcs-plugin-select2-with-icon__list-item");
        _.each(c, function (a) {
            a.render || a.template || (a.template = {content: b(a.data)})
        }.bind(this));
        var e = a(this).pluginSelect2(c, d);
        return e
    };
    var b = function (a) {
        var b = "";
        a.content = a.content || "";
        if (a.icon) {
            "string" == typeof a.icon && (a.icon = {content: a.icon});
            switch (a.icon.source) {
                case"class":
                    b += '<div class="tcs-plugin-select2-with-icon__list-item-icon ' + a.icon.content + '"></div>';
                    break;
                case"image":
                    b += '<div class="tcs-plugin-select2-with-icon__list-item-icon""><img alt="' + a.content + '" src="' + a.icon.content + '"></div>';
                    break;
                default:
                    b += '<div class="tcs-plugin-select2-with-icon__list-item-icon" style="background-image: url(\'' + a.icon.content + "');\"></div>"
            }
        }
        b += '<div class="tcs-plugin-select2-with-icon__list-item-content">' + a.content + "</div>";
        return b
    }
}(jQuery);
(window._gsQueue || (window._gsQueue = [])).push(function () {
    _gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
        var d = function (a, b, d) {
            c.call(this, a, b, d);
            this._cycle = 0;
            this._yoyo = 1 == this.vars.yoyo;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._dirty = !0
        }, e = d.prototype = c.to({}, .1, {}), f = [];
        e.constructor = d;
        e.kill()._gc = !1;
        d.killTweensOf = d.killDelayedCallsTo = c.killTweensOf;
        d.getTweensOf = c.getTweensOf;
        d.ticker = c.ticker;
        e.invalidate = function () {
            this._yoyo = 1 == this.vars.yoyo;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(!0);
            return c.prototype.invalidate.call(this)
        };
        e.updateTo = function (a, b) {
            var d, e = this.ratio;
            b && null != this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (d in a)this.vars[d] = a[d];
            if (this._initted)if (b)this._initted = !1; else if (this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), .998 < this._time / this._duration)e = this._time, this.render(0, !0, !1), this._initted = !1, this.render(e, !0, !1); else if (0 < this._time) {
                this._initted = !1;
                this._init();
                e = 1 / (1 - e);
                d = this._firstPT;
                for (var f; d;)f = d.s + d.c, d.c *= e, d.s = f - d.c, d = d._next
            }
            return this
        };
        e.render = function (a, b, c) {
            var d, e, g = this._dirty ? this.totalDuration() : this._totalDuration, h = this._time, i = this._totalTime, j = this._cycle;
            if (a >= g) {
                if (this._totalTime = g, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (d = !0, e = "onComplete"), 0 === this._duration) {
                    (0 === a || 0 > this._rawPrevTime) && this._rawPrevTime !== a && (c = !0);
                    this._rawPrevTime = a
                }
            } else if (0 >= a) {
                this._totalTime = this._time = this._cycle = 0;
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                (0 !== i || 0 === this._duration && 0 < this._rawPrevTime) && (e = "onReverseComplete", d = this._reversed);
                0 > a ? (this._active = !1, 0 === this._duration && (0 <= this._rawPrevTime && (c = !0), this._rawPrevTime = a)) : this._initted || (c = !0)
            } else if (this._totalTime = this._time = a, 0 !== this._repeat && (a = this._duration + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 !== (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? this._time = this._duration : 0 > this._time && (this._time = 0)), this._easeType) {
                var a = this._time / this._duration, g = this._easeType, k = this._easePower;
                (1 === g || 3 === g && a >= .5) && (a = 1 - a);
                3 === g && (a *= 2);
                1 === k ? a *= a : 2 === k ? a *= a * a : 3 === k ? a *= a * a * a : 4 === k && (a *= a * a * a * a);
                this.ratio = 1 === g ? 1 - a : 2 === g ? a : .5 > this._time / this._duration ? a / 2 : 1 - a / 2
            } else this.ratio = this._ease.getRatio(this._time / this._duration);
            if (h !== this._time || c) {
                this._initted || (this._init(), !d && this._time && (this.ratio = this._ease.getRatio(this._time / this._duration)));
                !this._active && !this._paused && (this._active = !0);
                0 != i || !this.vars.onStart || 0 === this._totalTime && 0 !== this._duration || b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f);
                for (c = this._firstPT; c;) {
                    c.f ? c.t[c.p](c.c * this.ratio + c.s) : c.t[c.p] = c.c * this.ratio + c.s;
                    c = c._next
                }
                this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f));
                this._cycle != j && (b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || f));
                e && !this._gc && (d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), b || this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || f))
            }
        };
        d.to = function (a, b, c) {
            return new d(a, b, c)
        };
        d.from = function (a, b, c) {
            c.runBackwards = !0;
            0 != c.immediateRender && (c.immediateRender = !0);
            return new d(a, b, c)
        };
        d.fromTo = function (a, b, c, e) {
            e.startAt = c;
            c.immediateRender && (e.immediateRender = !0);
            return new d(a, b, e)
        };
        d.staggerTo = d.allTo = function (a, b, c, e, f, g, h) {
            var i, j, k, e = e || 0, l = [], m = a.length, n = c.delay || 0;
            for (j = 0; m > j; j++) {
                i = {};
                for (k in c)i[k] = c[k];
                i.delay = n;
                j === m - 1 && f && (i.onComplete = function () {
                    c.onComplete && c.onComplete.apply(c.onCompleteScope, c.onCompleteParams);
                    f.apply(h, g)
                });
                l[j] = new d(a[j], b, i);
                n += e
            }
            return l
        };
        d.staggerFrom = d.allFrom = function (a, b, c, e, f, g, h) {
            c.runBackwards = !0;
            0 != c.immediateRender && (c.immediateRender = !0);
            return d.staggerTo(a, b, c, e, f, g, h)
        };
        d.staggerFromTo = d.allFromTo = function (a, b, c, e, f, g, h, i) {
            e.startAt = c;
            c.immediateRender && (e.immediateRender = !0);
            return d.staggerTo(a, b, e, f, g, h, i)
        };
        d.delayedCall = function (a, b, c, e, f) {
            return new d(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: e,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: e,
                immediateRender: !1,
                useFrames: f,
                overwrite: 0
            })
        };
        d.set = function (a, b) {
            return new d(a, 0, b)
        };
        d.isTweening = function (a) {
            for (var b, a = c.getTweensOf(a), d = a.length; -1 < --d;)if ((b = a[d])._active || b._startTime === b.timeline._time && b.timeline._active)return !0;
            return !1
        };
        var g = function (a, b) {
            for (var d = [], e = 0, f = a._first; f;)f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(g(f, b)), e = d.length), f = f._next;
            return d
        }, h = d.getAllTweens = function (b) {
            return g(a._rootTimeline, b).concat(g(a._rootFramesTimeline, b))
        };
        d.killAll = function (a, c, d, e) {
            null == c && (c = !0);
            null == d && (d = !0);
            var f, g, i, j = h(0 != e), k = j.length, e = c && d && e;
            for (i = 0; k > i; i++)(g = j[i], e || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g.totalDuration()) : g._enabled(!1, !1))
        };
        d.killChildTweensOf = function (a, b) {
            if (null != a)if (a.jquery)a.each(function (a, c) {
                d.killChildTweensOf(c, b)
            }); else {
                var e, f, g = c._tweenLookup, h = [];
                for (f in g)for (e = g[f].target.parentNode; e;)e === a && (h = h.concat(g[f].tweens)), e = e.parentNode;
                e = h.length;
                for (g = 0; e > g; g++)b && h[g].totalTime(h[g].totalDuration()), h[g]._enabled(!1, !1)
            }
        };
        d.pauseAll = function (a, b, c) {
            i(!0, a, b, c)
        };
        d.resumeAll = function (a, b, c) {
            i(!1, a, b, c)
        };
        var i = function (a, c, d, e) {
            void 0 == c && (c = !0);
            void 0 == d && (d = !0);
            for (var f, g, i = h(e), e = c && d && e, j = i.length; -1 < --j;)g = i[j], (e || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
        };
        e.progress = function (a) {
            return arguments.length ? this.totalTime(this.duration() * a + this._cycle * this._duration, !1) : this._time / this.duration()
        };
        e.totalProgress = function (a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
        };
        e.time = function (a, b) {
            if (!arguments.length)return this._time;
            this._dirty && this.totalDuration();
            a > this._duration && (a = this._duration);
            this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 != this._repeat && (a += this._cycle * (this._duration + this._repeatDelay));
            return this.totalTime(a, b)
        };
        e.totalDuration = function (a) {
            return arguments.length ? -1 == this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        };
        e.repeat = function (a) {
            if (!arguments.length)return this._repeat;
            this._repeat = a;
            return this._uncache(!0)
        };
        e.repeatDelay = function (a) {
            if (!arguments.length)return this._repeatDelay;
            this._repeatDelay = a;
            return this._uncache(!0)
        };
        e.yoyo = function (a) {
            if (!arguments.length)return this._yoyo;
            this._yoyo = a;
            return this
        };
        return d
    }, !0);
    _gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
        var d = function (a) {
            b.call(this, a);
            this._labels = {};
            this.autoRemoveChildren = 1 == this.vars.autoRemoveChildren;
            this.smoothChildTiming = 1 == this.vars.smoothChildTiming;
            this._sortChildren = !0;
            this._onUpdate = this.vars.onUpdate;
            for (var c, d, a = e.length; -1 < --a;)if (d = this.vars[e[a]])for (c = d.length; -1 < --c;)"{self}" === d[c] && (d = this.vars[e[a]] = d.concat(), d[c] = this);
            this.vars.tweens instanceof Array && this.insertMultiple(this.vars.tweens, 0, this.vars.align || "normal", this.vars.stagger || 0)
        }, e = ["onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams"], f = [], g = function (a) {
            var b, c = {};
            for (b in a)c[b] = a[b];
            return c
        }, h = d.prototype = new b;
        h.constructor = d;
        h.kill()._gc = !1;
        h.to = function (a, b, d, e, f) {
            return this.insert(new c(a, b, d), this._parseTimeOrLabel(f) + (e || 0))
        };
        h.from = function (a, b, d, e, f) {
            return this.insert(c.from(a, b, d), this._parseTimeOrLabel(f) + (e || 0))
        };
        h.fromTo = function (a, b, d, e, f, g) {
            return this.insert(c.fromTo(a, b, d, e), this._parseTimeOrLabel(g) + (f || 0))
        };
        h.staggerTo = function (a, b, e, f, h, i, j, k, l) {
            j = new d({onComplete: j, onCompleteParams: k, onCompleteScope: l});
            f = f || 0;
            for (k = 0; k < a.length; k++)null != e.startAt && (e.startAt = g(e.startAt)), j.insert(new c(a[k], b, g(e)), k * f);
            return this.insert(j, this._parseTimeOrLabel(i) + (h || 0))
        };
        h.staggerFrom = function (a, b, c, d, e, f, g, h, i) {
            null == c.immediateRender && (c.immediateRender = !0);
            c.runBackwards = !0;
            return this.staggerTo(a, b, c, d, e, f, g, h, i)
        };
        h.staggerFromTo = function (a, b, c, d, e, f, g, h, i, j) {
            d.startAt = c;
            c.immediateRender && (d.immediateRender = !0);
            return this.staggerTo(a, b, d, e, f, g, h, i, j)
        };
        h.call = function (a, b, d, e, f) {
            return this.insert(c.delayedCall(0, a, b, d), this._parseTimeOrLabel(f) + (e || 0))
        };
        h.set = function (a, b, d, e) {
            b.immediateRender = !1;
            return this.insert(new c(a, 0, b), this._parseTimeOrLabel(e) + (d || 0))
        };
        d.exportRoot = function (a, b) {
            a = a || {};
            null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e = new d(a), f = e._timeline;
            null == b && (b = !0);
            f._remove(e, !0);
            e._startTime = 0;
            e._rawPrevTime = e._time = e._totalTime = f._time;
            for (var g, h = f._first; h;)g = h._next, (!b || !(h instanceof c && h.target == h.vars.onComplete)) && e.insert(h, h._startTime - h._delay), h = g;
            f.insert(e, 0);
            return e
        };
        h.insert = function (d, e) {
            if (!(d instanceof a)) {
                if (d instanceof Array)return this.insertMultiple(d, e);
                if ("string" == typeof d)return this.addLabel(d, this._parseTimeOrLabel(e || 0, !0));
                if ("function" != typeof d)throw"ERROR: Cannot insert() " + d + " into the TimelineLite/Max because it is neither a tween, timeline, function, nor a String.";
                d = c.delayedCall(0, d)
            }
            b.prototype.insert.call(this, d, this._parseTimeOrLabel(e || 0, !0));
            if (this._gc && !this._paused && this._time === this._duration && this._time < this.duration())for (var f = this; f._gc && f._timeline;)f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._enabled(!0, !1), f = f._timeline;
            return this
        };
        h.remove = function (b) {
            if (b instanceof a)return this._remove(b, !1);
            if (b instanceof Array) {
                for (var c = b.length; -1 < --c;)this.remove(b[c]);
                return this
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
        };
        h.append = function (a, b) {
            return this.insert(a, this.duration() + (b || 0))
        };
        h.insertMultiple = function (a, b, c, e) {
            for (var f, c = c || "normal", e = e || 0, g = this._parseTimeOrLabel(b || 0, !0), h = a.length, b = 0; h > b; b++) {
                (f = a[b])instanceof Array && (f = new d({tweens: f}));
                this.insert(f, g);
                "string" == typeof f || "function" == typeof f || ("sequence" === c ? g = f._startTime + f.totalDuration() / f._timeScale : "start" === c && (f._startTime -= f.delay()));
                g += e
            }
            return this._uncache(!0)
        };
        h.appendMultiple = function (a, b, c, d) {
            return this.insertMultiple(a, this.duration() + (b || 0), c, d)
        };
        h.addLabel = function (a, b) {
            this._labels[a] = b;
            return this
        };
        h.removeLabel = function (a) {
            delete this._labels[a];
            return this
        };
        h.getLabelTime = function (a) {
            return null != this._labels[a] ? this._labels[a] : -1
        };
        h._parseTimeOrLabel = function (a, b) {
            return null == a ? this.duration() : "string" == typeof a && isNaN(a) ? null == this._labels[a] ? b ? this._labels[a] = this.duration() : 0 : this._labels[a] : Number(a)
        };
        h.seek = function (a, b) {
            return this.totalTime(this._parseTimeOrLabel(a, !1), 0 != b)
        };
        h.stop = function () {
            return this.paused(!0)
        };
        h.gotoAndPlay = function (a, c) {
            return b.prototype.play.call(this, a, c)
        };
        h.gotoAndStop = function (a, b) {
            return this.pause(a, b)
        };
        h.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            this._active = !this._paused;
            var d, e, g, h = this._dirty ? this.totalDuration() : this._totalDuration, i = this._time, j = this._startTime, k = this._timeScale, l = this._paused;
            if (a >= h) {
                this._totalTime = this._time = h;
                this._reversed || this._hasPausedChild() || (d = !0, g = "onComplete", 0 !== this._duration || !(0 === a || 0 > this._rawPrevTime)) || this._rawPrevTime !== a && (c = !0);
                this._rawPrevTime = a;
                a = h + 1e-6
            } else if (0 >= a) {
                this._totalTime = this._time = 0;
                (0 !== i || 0 === this._duration && 0 < this._rawPrevTime) && (g = "onReverseComplete", d = this._reversed);
                0 > a ? (this._active = !1, 0 === this._duration && 0 <= this._rawPrevTime && (c = !0)) : this._initted || (c = !0);
                this._rawPrevTime = a;
                a = -1e-6
            } else this._totalTime = this._time = this._rawPrevTime = a;
            if (this._time !== i || c) {
                this._initted || (this._initted = !0);
                0 === i && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f));
                if (this._time > i)for (c = this._first; c;) {
                    e = c._next;
                    if (this._paused && !l)break;
                    (c._active || c._startTime <= this._time && !c._paused && !c._gc) && (c._reversed ? c.render((c._dirty ? c.totalDuration() : c._totalDuration) - (a - c._startTime) * c._timeScale, b, !1) : c.render((a - c._startTime) * c._timeScale, b, !1));
                    c = e
                } else for (c = this._last; c;) {
                    e = c._prev;
                    if (this._paused && !l)break;
                    (c._active || c._startTime <= i && !c._paused && !c._gc) && (c._reversed ? c.render((c._dirty ? c.totalDuration() : c._totalDuration) - (a - c._startTime) * c._timeScale, b, !1) : c.render((a - c._startTime) * c._timeScale, b, !1));
                    c = e
                }
                this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f));
                !g || this._gc || j !== this._startTime && k == this._timeScale || (0 === this._time || h >= this.totalDuration()) && (d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), b || this.vars[g] && this.vars[g].apply(this.vars[g + "Scope"] || this, this.vars[g + "Params"] || f))
            }
        };
        h._hasPausedChild = function () {
            for (var a = this._first; a;) {
                if (a._paused || a instanceof d && a._hasPausedChild())return !0;
                a = a._next
            }
            return !1
        };
        h.getChildren = function (a, b, d, e) {
            for (var e = e || -9999999999, f = [], g = this._first, h = 0; g;)g._startTime < e || (g instanceof c ? 0 != b && (f[h++] = g) : (0 != d && (f[h++] = g), 0 != a && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
            return f
        };
        h.getTweensOf = function (a, b) {
            for (var d = c.getTweensOf(a), e = d.length, f = [], g = 0; -1 < --e;)(d[e].timeline === this || b && this._contains(d[e])) && (f[g++] = d[e]);
            return f
        };
        h._contains = function (a) {
            for (a = a.timeline; a;) {
                if (a === this)return !0;
                a = a.timeline
            }
            return !1
        };
        h.shiftChildren = function (a, b, c) {
            for (var c = c || 0, d = this._first; d;)d._startTime >= c && (d._startTime += a), d = d._next;
            if (b)for (var e in this._labels)this._labels[e] >= c && (this._labels[e] += a);
            return this._uncache(!0)
        };
        h._kill = function (a, b) {
            if (null == a && null == b)return this._enabled(!1, !1);
            for (var c = null == b ? this.getChildren(!0, !0, !1) : this.getTweensOf(b), d = c.length, e = !1; -1 < --d;)c[d]._kill(a, b) && (e = !0);
            return e
        };
        h.clear = function (a) {
            var b = this.getChildren(!1, !0, !0), c = b.length;
            for (this._time = this._totalTime = 0; -1 < --c;)b[c]._enabled(!1, !1);
            0 != a && (this._labels = {});
            return this._uncache(!0)
        };
        h.invalidate = function () {
            for (var a = this._first; a;)a.invalidate(), a = a._next;
            return this
        };
        h._enabled = function (a, c) {
            if (a == this._gc)for (var d = this._first; d;)d._enabled(a, !0), d = d._next;
            return b.prototype._enabled.call(this, a, c)
        };
        h.progress = function (a) {
            return arguments.length ? this.totalTime(this.duration() * a, !1) : this._time / this.duration()
        };
        h.duration = function (a) {
            if (!arguments.length)return this._dirty && this.totalDuration(), this._duration;
            0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a);
            return this
        };
        h.totalDuration = function (a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var b, c = 0, d = this._first, e = -999999999999; d;)b = d._next, d._startTime < e && this._sortChildren ? this.insert(d, d._startTime - d._delay) : e = d._startTime, 0 > d._startTime && (c -= d._startTime, this.shiftChildren(-d._startTime, !1, -9999999999)), d = d._startTime + (d._dirty ? d.totalDuration() : d._totalDuration) / d._timeScale, d > c && (c = d), d = b;
                    this._duration = this._totalDuration = c;
                    this._dirty = !1
                }
                return this._totalDuration
            }
            0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a);
            return this
        };
        h.usesFrames = function () {
            for (var b = this._timeline; b._timeline;)b = b._timeline;
            return b === a._rootFramesTimeline
        };
        h.rawTime = function () {
            return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        };
        return d
    }, !0);
    _gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c) {
        var d = function (b) {
            a.call(this, b);
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._cycle = 0;
            this._yoyo = 1 == this.vars.yoyo;
            this._dirty = !0
        }, e = [], f = new c(null, null, 1, 0), c = d.prototype = new a;
        c.constructor = d;
        c.kill()._gc = !1;
        d.version = 12;
        c.invalidate = function () {
            this._yoyo = 1 == this.vars.yoyo;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(!0);
            return a.prototype.invalidate.call(this)
        };
        c.addCallback = function (a, c, d, e) {
            return this.insert(b.delayedCall(0, a, d, e), c)
        };
        c.removeCallback = function (a, b) {
            if (null == b)this._kill(null, a); else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b, !1); -1 < --d;)c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this
        };
        c.tweenTo = function (a, c) {
            var d, g, c = c || {}, h = {ease: f, overwrite: 2, useFrames: this.usesFrames(), immediateRender: !1};
            for (d in c)h[d] = c[d];
            h.time = this._parseTimeOrLabel(a, !1);
            g = new b(this, Math.abs(Number(h.time) - this._time) / this._timeScale || .001, h);
            h.onStart = function () {
                g.target.paused(!0);
                g.vars.time != g.target.time() && g.duration(Math.abs(g.vars.time - g.target.time()) / g.target._timeScale);
                c.onStart && c.onStart.apply(c.onStartScope || g, c.onStartParams || e)
            };
            return g
        };
        c.tweenFromTo = function (a, b, c) {
            c = c || {};
            c.startAt = {time: this._parseTimeOrLabel(a, !1)};
            a = this.tweenTo(b, c);
            return a.duration(Math.abs(a.vars.time - a.vars.startAt.time) / this._timeScale || .001)
        };
        c.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            this._active = !this._paused;
            var d, f, g = this._dirty ? this.totalDuration() : this._totalDuration, h = this._time, i = this._totalTime, j = this._startTime, k = this._timeScale, l = this._rawPrevTime, m = this._paused, n = this._cycle;
            if (a >= g) {
                this._locked || (this._totalTime = g, this._cycle = this._repeat);
                this._reversed || this._hasPausedChild() || (d = !0, f = "onComplete", 0 !== this._duration || !(0 === a || 0 > this._rawPrevTime)) || this._rawPrevTime !== a && (c = !0);
                this._rawPrevTime = a;
                this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, a = -1e-6) : (this._time = this._duration, a = this._duration + 1e-6)
            } else if (0 >= a) {
                this._locked || (this._totalTime = this._cycle = 0);
                this._time = 0;
                (0 !== h || 0 === this._duration && 0 < this._rawPrevTime) && (f = "onReverseComplete", d = this._reversed);
                0 > a ? (this._active = !1, 0 === this._duration && 0 <= this._rawPrevTime && (c = !0)) : this._initted || (c = !0);
                this._rawPrevTime = a;
                a = -1e-6
            } else this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (a = this._duration + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? (this._time = this._duration, a = this._duration + 1e-6) : 0 > this._time ? (this._time = 0, a = -1e-6) : a = this._time));
            if (this._cycle !== n && !this._locked) {
                var o = this._yoyo && 0 !== (1 & n), p = o === (this._yoyo && 0 !== (1 & this._cycle)), q = this._totalTime, r = this._cycle, s = this._rawPrevTime, t = this._time;
                this._totalTime = n * this._duration;
                this._cycle < n ? o = !o : this._totalTime += this._duration;
                this._time = h;
                this._rawPrevTime = l;
                this._cycle = n;
                this._locked = !0;
                h = o ? 0 : this._duration;
                this.render(h, b, !1);
                b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || e);
                p && (h = o ? this._duration + 1e-6 : -1e-6, this.render(h, !0, !1));
                this._time = t;
                this._totalTime = q;
                this._cycle = r;
                this._rawPrevTime = s;
                this._locked = !1
            }
            if (this._time !== h || c) {
                this._initted || (this._initted = !0);
                0 === i && this.vars.onStart && 0 !== this._totalTime && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || e));
                if (this._time > h)for (c = this._first; c;) {
                    i = c._next;
                    if (this._paused && !m)break;
                    (c._active || c._startTime <= this._time && !c._paused && !c._gc) && (c._reversed ? c.render((c._dirty ? c.totalDuration() : c._totalDuration) - (a - c._startTime) * c._timeScale, b, !1) : c.render((a - c._startTime) * c._timeScale, b, !1));
                    c = i
                } else for (c = this._last; c;) {
                    i = c._prev;
                    if (this._paused && !m)break;
                    (c._active || c._startTime <= h && !c._paused && !c._gc) && (c._reversed ? c.render((c._dirty ? c.totalDuration() : c._totalDuration) - (a - c._startTime) * c._timeScale, b, !1) : c.render((a - c._startTime) * c._timeScale, b, !1));
                    c = i
                }
                this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e));
                !f || this._locked || this._gc || j !== this._startTime && k == this._timeScale || (0 === this._time || g >= this.totalDuration()) && (d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), b || this.vars[f] && this.vars[f].apply(this.vars[f + "Scope"] || this, this.vars[f + "Params"] || e))
            }
        };
        c.getActive = function (a, b, c) {
            null == a && (a = !0);
            null == b && (b = !0);
            null == c && (c = !1);
            var d, e, f = [], a = this.getChildren(a, b, c), b = 0, c = a.length;
            for (d = 0; c > d; d++)if (e = a[d], !e._paused && e._timeline._time >= e._startTime && e._timeline._time < e._startTime + e._totalDuration / e._timeScale) {
                var g;
                a:{
                    for (g = e._timeline; g;) {
                        if (g._paused) {
                            g = !0;
                            break a
                        }
                        g = g._timeline
                    }
                    g = !1
                }
                g || (f[b++] = e)
            }
            return f
        };
        c.getLabelAfter = function (a) {
            !a && 0 !== a && (a = this._time);
            var b, c = this.getLabelsArray(), d = c.length;
            for (b = 0; d > b; b++)if (c[b].time > a)return c[b].name;
            return null
        };
        c.getLabelBefore = function (a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; -1 < --c;)if (b[c].time < a)return b[c].name;
            return null
        };
        c.getLabelsArray = function () {
            var a, b = [], c = 0;
            for (a in this._labels)b[c++] = {time: this._labels[a], name: a};
            b.sort(function (a, b) {
                return a.time - b.time
            });
            return b
        };
        c.progress = function (a) {
            return arguments.length ? this.totalTime(this.duration() * a + this._cycle * this._duration, !1) : this._time / this.duration()
        };
        c.totalProgress = function (a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
        };
        c.totalDuration = function (b) {
            return arguments.length ? -1 == this._repeat ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        };
        c.time = function (a, b) {
            if (!arguments.length)return this._time;
            this._dirty && this.totalDuration();
            a > this._duration && (a = this._duration);
            this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 != this._repeat && (a += this._cycle * (this._duration + this._repeatDelay));
            return this.totalTime(a, b)
        };
        c.repeat = function (a) {
            if (!arguments.length)return this._repeat;
            this._repeat = a;
            return this._uncache(!0)
        };
        c.repeatDelay = function (a) {
            if (!arguments.length)return this._repeatDelay;
            this._repeatDelay = a;
            return this._uncache(!0)
        };
        c.yoyo = function (a) {
            if (!arguments.length)return this._yoyo;
            this._yoyo = a;
            return this
        };
        c.currentLabel = function (a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
        };
        return d
    }, !0);
    _gsDefine("plugins.BezierPlugin", ["plugins.TweenPlugin"], function (b) {
        var c = function () {
            b.call(this, "bezier", -1);
            this._overwriteProps.pop();
            this._func = {};
            this._round = {}
        }, d = c.prototype = new b("bezier", 1), e = 180 / Math.PI, f = [], g = [], h = [], i = {}, k = function (a, b, c, d) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.da = d - a;
            this.ca = c - a;
            this.ba = b - a
        }, m = c.bezierThrough = function (b, c, d, e, m, o) {
            var p, q, s = {}, t = [], m = "string" == typeof m ? "," + m + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";
            null == c && (c = 1);
            for (q in b[0])t.push(q);
            f.length = g.length = h.length = 0;
            for (p = t.length; -1 < --p;) {
                q = t[p];
                i[q] = -1 !== m.indexOf("," + q + ",");
                var u, v = s, w = q;
                u = b;
                var x = q, y = i[q], z = o, A = [], B = void 0, C = void 0, D = void 0, E = void 0, F = void 0, B = void 0;
                if (z) {
                    u = [z].concat(u);
                    for (C = u.length; -1 < --C;)"string" == typeof(B = u[C][x]) && "=" === B.charAt(1) && (u[C][x] = z[x] + Number(B.charAt(0) + B.substr(2)))
                }
                B = u.length - 2;
                if (0 > B)A[0] = new k(u[0][x], 0, 0, u[-1 > B ? 0 : 1][x]); else {
                    for (C = 0; B > C; C++)D = u[C][x], E = u[C + 1][x], A[C] = new k(D, 0, 0, E), y && (F = u[C + 2][x], f[C] = (f[C] || 0) + (E - D) * (E - D), g[C] = (g[C] || 0) + (F - E) * (F - E));
                    A[C] = new k(u[C][x], 0, 0, u[C + 1][x])
                }
                u = A;
                v[w] = u
            }
            for (p = f.length; -1 < --p;)f[p] = Math.sqrt(f[p]), g[p] = Math.sqrt(g[p]);
            if (!e) {
                for (p = t.length; -1 < --p;)if (i[q]) {
                    a = s[t[p]];
                    l = a.length - 1;
                    for (j = 0; l > j; j++)r = a[j + 1].da / g[j] + a[j].da / f[j], h[j] = (h[j] || 0) + r * r
                }
                for (p = h.length; -1 < --p;)h[p] = Math.sqrt(h[p])
            }
            for (p = t.length; -1 < --p;) {
                q = t[p];
                b = s[q];
                m = c;
                o = d;
                v = e;
                q = i[q];
                w = b.length - 1;
                u = 0;
                for (var x = b[0].a, G = F = E = z = B = E = D = B = C = D = A = z = y = void 0, y = 0; w > y; y++)C = b[u], z = C.a, A = C.d, D = b[u + 1].d, q ? (E = f[y], F = g[y], G = .25 * (F + E) * m / (v ? .5 : h[y] || .5), B = A - (A - z) * (v ? .5 * m : G / E), D = A + (D - A) * (v ? .5 * m : G / F), E = A - (B + (D - B) * (3 * E / (E + F) + .5) / 4)) : (B = A - .5 * (A - z) * m, D = A + .5 * (D - A) * m, E = A - (B + D) / 2), B += E, D += E, C.c = B, C.b = 0 != y ? x : x = C.a + .6 * (C.c - C.a), C.da = A - z, C.ca = B - z, C.ba = x - z, o ? (z = n(z, x, B, A), b.splice(u, 1, z[0], z[1], z[2], z[3]), u += 4) : u++, x = D;
                C = b[u];
                C.b = x;
                C.c = x + .4 * (C.d - x);
                C.da = C.d - C.a;
                C.ca = C.c - C.a;
                C.ba = x - C.a;
                o && (z = n(C.a, x, C.c, C.d), b.splice(u, 1, z[0], z[1], z[2], z[3]))
            }
            return s
        }, n = c.cubicToQuadratic = function (a, b, c, d) {
            var e = {a: a}, f = {}, g = {}, h = {c: d}, i = (a + b) / 2, j = (b + c) / 2, c = (c + d) / 2, b = (i + j) / 2, j = (j + c) / 2, k = (j - b) / 8;
            e.b = i + (a - i) / 4;
            f.b = b + k;
            e.c = f.a = (e.b + f.b) / 2;
            f.c = g.a = (b + j) / 2;
            g.b = j - k;
            h.b = c + (d - c) / 4;
            g.c = h.a = (g.b + h.b) / 2;
            return [e, f, g, h]
        };
        c.quadraticToCubic = function (a, b, c) {
            return new k(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
        };
        d.constructor = c;
        c.API = 2;
        d._onInitTween = function (a, b, c) {
            this._target = a;
            b instanceof Array && (b = {values: b});
            this._props = [];
            this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution);
            var d, e, f, g = b.values || [], h = {}, i = g[0], c = b.autoRotate || c.vars.orientToBezier;
            this._autoRotate = c ? c instanceof Array ? c : [["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]] : null;
            for (d in i)this._props.push(d);
            for (i = this._props.length; -1 < --i;)d = this._props[i], this._overwriteProps.push(d), c = this._func[d] = "function" == typeof a[d], h[d] = c ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), f || h[d] !== g[0][d] && (f = h);
            if ("cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type)h = m(g, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, f); else {
                c = (c = b.type) || "soft";
                b = {};
                f = "cubic" === c ? 3 : 2;
                var j, l, n, o, p, q, r, s, t, c = "soft" === c, i = [];
                c && h && (g = [h].concat(g));
                if (null == g || g.length < f + 1)throw"invalid Bezier data";
                for (l in g[0])i.push(l);
                for (q = i.length; -1 < --q;) {
                    l = i[q];
                    b[l] = p = [];
                    t = 0;
                    s = g.length;
                    for (r = 0; s > r; r++)j = null == h ? g[r][l] : "string" == typeof(n = g[r][l]) && "=" === n.charAt(1) ? h[l] + Number(n.charAt(0) + n.substr(2)) : Number(n), c && r > 1 && s - 1 > r && (p[t++] = (j + p[t - 2]) / 2), p[t++] = j;
                    s = t - f + 1;
                    for (r = t = 0; s > r; r += f)j = p[r], l = p[r + 1], n = p[r + 2], o = 2 === f ? 0 : p[r + 3], p[t++] = n = 3 === f ? new k(j, l, n, o) : new k(j, (2 * l + j) / 3, (2 * l + n) / 3, n);
                    p.length = t
                }
                h = b
            }
            this._beziers = h;
            this._segCount = this._beziers[d].length;
            if (this._timeRes) {
                i = this._beziers;
                d = this._timeRes;
                d = d >> 0 || 6;
                h = [];
                l = [];
                g = n = 0;
                b = d - 1;
                f = [];
                c = [];
                for (e in i) {
                    j = i[e];
                    p = h;
                    q = d;
                    r = 1 / q;
                    s = j.length;
                    for (var u = void 0, v = void 0, w = o = t = v = void 0, x = u = void 0, y = void 0, y = w = void 0; -1 < --s;) {
                        w = j[s];
                        v = w.a;
                        t = w.d - v;
                        o = w.c - v;
                        w = w.b - v;
                        v = 0;
                        for (x = 1; q >= x; x++)u = r * x, y = 1 - u, u = v - (v = (u * u * t + 3 * y * (u * o + y * w)) * u), y = s * q + x - 1, p[y] = (p[y] || 0) + u * u
                    }
                }
                i = h.length;
                for (e = 0; i > e; e++)n += Math.sqrt(h[e]), j = e % d, c[j] = n, j === b && (g += n, j = e / d >> 0, f[j] = c, l[j] = g, n = 0, c = []);
                this._length = g;
                this._lengths = l;
                this._segments = f;
                this._l1 = this._li = this._s1 = this._si = 0;
                this._l2 = this._lengths[0];
                this._curSeg = this._segments[0];
                this._s2 = this._curSeg[0];
                this._prec = 1 / this._curSeg.length
            }
            if (c = this._autoRotate) {
                c[0]instanceof Array || (this._autoRotate = c = [c]);
                for (i = c.length; -1 < --i;)for (e = 0; 3 > e; e++)d = c[i][e], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1
            }
            return !0
        };
        d.setRatio = function (a) {
            var b, c, d, f, g, h = this._segCount, i = this._func, j = this._target;
            if (this._timeRes) {
                b = this._lengths;
                f = this._curSeg;
                a *= this._length;
                c = this._li;
                if (a > this._l2 && h - 1 > c) {
                    for (h -= 1; h > c && (this._l2 = b[++c]) <= a;);
                    this._l1 = b[c - 1];
                    this._li = c;
                    this._curSeg = f = this._segments[c];
                    this._s2 = f[this._s1 = this._si = 0]
                } else if (a < this._l1 && c > 0) {
                    for (; c > 0 && (this._l1 = b[--c]) >= a;);
                    0 === c && a < this._l1 ? this._l1 = 0 : c++;
                    this._l2 = b[c];
                    this._li = c;
                    this._curSeg = f = this._segments[c];
                    this._s1 = f[(this._si = f.length - 1) - 1] || 0;
                    this._s2 = f[this._si]
                }
                b = c;
                a -= this._l1;
                c = this._si;
                if (a > this._s2 && c < f.length - 1) {
                    for (h = f.length - 1; h > c && (this._s2 = f[++c]) <= a;);
                    this._s1 = f[c - 1];
                    this._si = c
                } else if (a < this._s1 && c > 0) {
                    for (; c > 0 && (this._s1 = f[--c]) >= a;);
                    0 === c && a < this._s1 ? this._s1 = 0 : c++;
                    this._s2 = f[c];
                    this._si = c
                }
                f = (c + (a - this._s1) / (this._s2 - this._s1)) * this._prec
            } else b = 0 > a ? 0 : a >= 1 ? h - 1 : h * a >> 0, f = (a - b * (1 / h)) * h;
            h = 1 - f;
            for (c = this._props.length; -1 < --c;)a = this._props[c], d = this._beziers[a][b], g = (f * f * d.da + 3 * h * (f * d.ca + h * d.ba)) * f + d.a, this._round[a] && (g = g + (g > 0 ? .5 : -.5) >> 0), i[a] ? j[a](g) : j[a] = g;
            if (this._autoRotate) {
                var k, l, m, n, o, h = this._autoRotate;
                for (c = h.length; -1 < --c;)a = h[c][2], n = h[c][3] || 0, o = 1 == h[c][4] ? 1 : e, d = this._beziers[h[c][0]][b], g = this._beziers[h[c][1]][b], k = d.a + (d.b - d.a) * f, l = d.b + (d.c - d.b) * f, k += (l - k) * f, l += (d.c + (d.d - d.c) * f - l) * f, d = g.a + (g.b - g.a) * f, m = g.b + (g.c - g.b) * f, d += (m - d) * f, m += (g.c + (g.d - g.c) * f - m) * f, g = Math.atan2(m - d, l - k) * o + n, i[a] ? i[a].call(j, g) : j[a] = g
            }
        };
        d._roundProps = function (a, b) {
            for (var c = this._overwriteProps, d = c.length; -1 < --d;)(a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b)
        };
        d._kill = function (a) {
            var c, d, e = this._props;
            for (c in _beziers)if (c in a) {
                delete this._beziers[c];
                delete this._func[c];
                for (d = e.length; -1 < --d;)e[d] === c && e.splice(d, 1)
            }
            return b.prototype._kill.call(this, a)
        };
        b.activate([c]);
        return c
    }, !0);
    _gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a) {
        var b = function () {
            a.call(this, "css");
            this._overwriteProps.pop()
        }, c = b.prototype = new a("css");
        c.constructor = b;
        b.API = 2;
        b.suffixMap = {
            top: "px",
            right: "px",
            bottom: "px",
            left: "px",
            width: "px",
            height: "px",
            fontSize: "px",
            padding: "px",
            margin: "px"
        };
        var d, e, f, g, h, i = /[^\d\-\.]/g, j = /(\d|\-|\+|=|#|\.)*/g, k = /(\d|\.)+/g, l = /opacity *= *([^)]*)/, m = /opacity:([^;]*)/, n = /([A-Z])/g, o = /-([a-z])/gi, p = function (a, b) {
            return b.toUpperCase()
        }, q = /(Left|Right|Width)/i, r = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, s = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, t = Math.PI / 180, u = 180 / Math.PI, v = {}, w = document, x = w.createElement("div"), y = navigator.userAgent, z = y.indexOf("Android"), A = w.createElement("div");
        f = -1 !== y.indexOf("Safari") && -1 === y.indexOf("Chrome") && (-1 === z || 3 < Number(y.substr(z + 8, 1)));
        /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(y);
        g = parseFloat(RegExp.$1);
        A.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>";
        h = (y = A.getElementsByTagName("a")[0]) ? /^0.55/.test(y.style.opacity) : !1;
        var B = function (a) {
            if (!a || "" === a)return T.black;
            if (T[a])return T[a];
            if ("number" == typeof a)return [a >> 16, a >> 8 & 255, 255 & a];
            if ("#" === a.charAt(0)) {
                if (4 === a.length)var b = a.charAt(1), c = a.charAt(2), a = a.charAt(3), a = "#" + b + b + c + c + a + a;
                a = parseInt(a.substr(1), 16);
                return [a >> 16, a >> 8 & 255, 255 & a]
            }
            return a.match(k) || T.transparent
        }, C = function (a) {
            return l.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, D = w.defaultView ? w.defaultView.getComputedStyle : function () {
        }, E = function (a, b, c, d) {
            return h || "opacity" !== b ? !d && a.style[b] ? a.style[b] : (c = c || D(a, null)) ? (a = c.getPropertyValue(b.replace(n, "-$1").toLowerCase())) || c.length ? a : c[b] : a.currentStyle ? (c = a.currentStyle, d = c[b], d || "backgroundPosition" !== b ? d : c[b + "X"] + " " + c[b + "Y"]) : null : C(a)
        }, F = function (a, b) {
            var c, d = {};
            if (b = b || D(a, null))if (c = b.length)for (; -1 < --c;)d[b[c].replace(o, p)] = b.getPropertyValue(b[c]); else for (c in b)d[c] = b[c]; else if (b = a.currentStyle || a.style)for (c in b)d[c.replace(o, p)] = b[c];
            h || (d.opacity = C(a));
            c = M(a, b, !1);
            d.rotation = c.rotation * u;
            d.skewX = c.skewX * u;
            d.scaleX = c.scaleX;
            d.scaleY = c.scaleY;
            d.x = c.x;
            d.y = c.y;
            null != d.filters && delete d.filters;
            return d
        }, G = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b)"cssText" !== f && "length" !== f && isNaN(f) && a[f] != (e = b[f]) && (e === K || "number" != typeof e && "string" != typeof e || (g[f] = "" !== e && "auto" !== e || "string" != typeof a[f] || "" === a[f].replace(i, "") ? e : 0, d && d.props.push(f)));
            if (c)for (f in c)"className" !== f && (g[f] = c[f]);
            return g
        }, H = {
            scaleX: 1,
            scaleY: 1,
            x: 1,
            y: 1,
            rotation: 1,
            shortRotation: 1,
            skewX: 1,
            skewY: 1,
            scale: 1
        }, I = "", J = "", K = function (a, b) {
            var c, d, b = b || x, e = b.style;
            if (void 0 !== e[a])return a;
            a = a.substr(0, 1).toUpperCase() + a.substr(1);
            c = ["O", "Moz", "ms", "Ms", "Webkit"];
            for (d = 5; -1 < --d && void 0 === e[c[d] + a];);
            return d >= 0 ? (J = 3 === d ? "ms" : c[d], I = "-" + J.toLowerCase() + "-", J + a) : null
        }("transform"), L = I + "transform", M = function (a, b, c) {
            var d, e = a._gsTransform;
            K ? d = E(a, L, b, !0) : a.currentStyle && (d = (d = a.currentStyle.filter.match(r)) && 4 === d.length ? d[0].substr(4) + "," + Number(d[2].substr(4)) + "," + Number(d[1].substr(4)) + "," + d[3].substr(4) + "," + (e ? e.x : 0) + "," + (e ? e.y : 0) : null);
            var b = (d || "").replace(/[^\d\-\.e,]/g, "").split(","), f = (d = 6 <= b.length) ? Number(b[0]) : 1, g = d ? Number(b[1]) : 0, h = d ? Number(b[2]) : 0, i = d ? Number(b[3]) : 1, e = c ? e || {skewY: 0} : {skewY: 0}, j = 0 > e.scaleX;
            e.x = d ? Number(b[4]) : 0;
            e.y = d ? Number(b[5]) : 0;
            e.scaleX = Math.sqrt(f * f + g * g);
            e.scaleY = Math.sqrt(i * i + h * h);
            e.rotation = f || g ? Math.atan2(g, f) : e.rotation || 0;
            e.skewX = h || i ? Math.atan2(h, i) + e.rotation : e.skewX || 0;
            Math.abs(e.skewX) > Math.PI / 2 && Math.abs(e.skewX) < 1.5 * Math.PI && (j ? (e.scaleX *= -1, e.skewX += 0 >= e.rotation ? Math.PI : -Math.PI, e.rotation += 0 >= e.rotation ? Math.PI : -Math.PI) : (e.scaleY *= -1, e.skewX += 0 >= e.skewX ? Math.PI : -Math.PI));
            1e-6 > e.rotation && -1e-6 < e.rotation && (f || g) && (e.rotation = 0);
            1e-6 > e.skewX && -1e-6 < e.skewX && (g || h) && (e.skewX = 0);
            c && (a._gsTransform = e);
            return e
        }, N = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, O = ["marginLeft", "marginRight", "marginTop", "marginBottom"], P = function (a, b, c, d, e) {
            if ("px" === d || !d)return c;
            if ("auto" === d || !c)return 0;
            var f = q.test(b), g = a, h = x.style, i = 0 > c;
            i && (c = -c);
            h.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;";
            "%" !== d && "em" !== d && g.appendChild ? h[f ? "borderLeftWidth" : "borderTopWidth"] = c + d : (g = a.parentNode || w.body, h[f ? "width" : "height"] = c + d);
            g.appendChild(x);
            f = parseFloat(x[f ? "offsetWidth" : "offsetHeight"]);
            g.removeChild(x);
            0 === f && !e && (f = P(a, b, c, d, !0));
            return i ? -f : f
        }, Q = function (a, b) {
            (null == a || "" === a || "auto" === a || "auto auto" === a) && (a = "0 0");
            var b = b || {}, c = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : a.split(" ")[0], d = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : a.split(" ")[1];
            null == d ? d = "0" : "center" === d && (d = "50%");
            "center" === c && (c = "50%");
            b.oxp = -1 !== c.indexOf("%");
            b.oyp = -1 !== d.indexOf("%");
            b.oxr = "=" === c.charAt(1);
            b.oyr = "=" === d.charAt(1);
            b.ox = parseFloat(c.replace(i, ""));
            b.oy = parseFloat(d.replace(i, ""));
            return b
        }, R = function (a, b) {
            return null == a ? b : "string" == typeof a && 1 === a.indexOf("=") ? Number(a.split("=").join("")) + b : Number(a)
        }, S = function (a, b) {
            var c = -1 === a.indexOf("rad") ? t : 1, d = 1 === a.indexOf("="), a = Number(a.replace(i, "")) * c;
            return d ? a + b : a
        }, T = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        };
        c._onInitTween = function (a, c, f) {
            if (!a.nodeType)return !1;
            this._target = a;
            this._tween = f;
            this._classData = this._transform = null;
            d = c.autoRound;
            var g, i, j = this._style = a.style, k = D(a, "");
            e && "" === j.zIndex && (i = E(a, "zIndex", k), "auto" === i || "" === i) && (j.zIndex = 0);
            "string" == typeof c ? (g = j.cssText, f = F(a, k), j.cssText = g + ";" + c, i = G(f, F(a)), !h && m.test(c) && (i.opacity = parseFloat(RegExp.$1)), c = i, j.cssText = g) : c.className && (g = a.className, this._classData = {
                b: g,
                e: "=" !== c.className.charAt(1) ? c.className : "+" === c.className.charAt(0) ? a.className + " " + c.className.substr(2) : a.className.split(c.className.substr(2)).join(""),
                props: []
            }, f._duration ? (f = F(a, k), a.className = this._classData.e, c = G(f, F(a), c, this._classData), a.className = g) : c = {});
            this._parseVars(c, a, k, c.suffixMap || b.suffixMap);
            return !0
        };
        c._parseVars = function (a, b, c, e) {
            var f, g, k, l, m, n, o, p = this._style;
            for (f in a)if (g = a[f], "transform" === f || f === K)this._parseTransform(b, g, c, e); else if (H[f] || "transformOrigin" === f)this._parseTransform(b, a, c, e); else {
                if ("alpha" === f || "autoAlpha" === f)f = "opacity"; else {
                    if ("margin" === f || "padding" === f) {
                        g = (g + "").split(" ");
                        m = g.length;
                        k = {};
                        k[f + "Top"] = g[0];
                        k[f + "Right"] = m > 1 ? g[1] : g[0];
                        k[f + "Bottom"] = 4 === m ? g[2] : g[0];
                        k[f + "Left"] = 4 === m ? g[3] : 2 === m ? g[1] : g[0];
                        this._parseVars(k, b, c, e);
                        continue
                    }
                    if ("backgroundPosition" === f || "backgroundSize" === f) {
                        k = Q(g);
                        o = Q(l = E(b, f, c));
                        this._firstPT = k = {
                            _next: this._firstPT,
                            t: p,
                            p: f,
                            b: l,
                            f: !1,
                            n: "css_" + f,
                            type: 3,
                            s: o.ox,
                            c: k.oxr ? k.ox : k.ox - o.ox,
                            ys: o.oy,
                            yc: k.oyr ? k.oy : k.oy - o.oy,
                            sfx: k.oxp ? "%" : "px",
                            ysfx: k.oyp ? "%" : "px",
                            r: !k.oxp && !1 !== a.autoRound
                        };
                        k.e = k.s + k.c + k.sfx + " " + (k.ys + k.yc) + k.ysfx;
                        continue
                    }
                    if ("border" === f) {
                        g = (g + "").split(" ");
                        this._parseVars({
                            borderWidth: g[0],
                            borderStyle: g[1] || "none",
                            borderColor: g[2] || "#000000"
                        }, b, c, e);
                        continue
                    }
                    if ("bezier" === f) {
                        this._parseBezier(g, b, c, e);
                        continue
                    }
                    if ("autoRound" === f)continue
                }
                l = E(b, f, c);
                l = null != l ? l + "" : "";
                this._firstPT = k = {
                    _next: this._firstPT,
                    t: p,
                    p: f,
                    b: l,
                    f: !1,
                    n: "css_" + f,
                    sfx: "",
                    r: !1,
                    type: 0
                };
                "opacity" === f && null != a.autoAlpha && ("1" === l && "hidden" === E(b, "visibility", c) && (l = k.b = "0"), this._firstPT = k._prev = {
                    _next: k,
                    t: p,
                    p: "visibility",
                    f: !1,
                    n: "css_visibility",
                    r: !1,
                    type: -1,
                    b: 0 !== Number(l) ? "visible" : "hidden",
                    i: "visible",
                    e: 0 === Number(g) ? "hidden" : "visible"
                }, this._overwriteProps.push("css_visibility"));
                m = "string" == typeof g;
                if ("color" === f || "fill" === f || "stroke" === f || -1 !== f.indexOf("Color") || m && !g.indexOf("rgb("))(m = B(l), g = B(g), k.e = k.i = (3 < g.length ? "rgba(" : "rgb(") + g.join(",") + ")", k.b = (3 < m.length ? "rgba(" : "rgb(") + m.join(",") + ")", k.s = Number(m[0]), k.c = Number(g[0]) - k.s, k.gs = Number(m[1]), k.gc = Number(g[1]) - k.gs, k.bs = Number(m[2]), k.bc = Number(g[2]) - k.bs, k.type = 1, 3 < m.length || 3 < g.length) && (h ? (k.as = 4 > m.length ? 1 : Number(m[3]), k.ac = (4 > g.length ? 1 : Number(g[3])) - k.as, k.type = 2) : (0 == g[3] && (k.e = k.i = "transparent", k.type = -1), 0 == m[3] && (k.b = "transparent"))); else {
                    n = l.replace(j, "");
                    if ("" === l || "auto" === l)if ("width" === f || "height" === f) {
                        var q = f;
                        n = b;
                        o = c;
                        l = parseFloat("width" === q ? n.offsetWidth : n.offsetHeight);
                        var q = N[q], r = q.length;
                        for (o = o || D(n, null); -1 < --r;)l -= parseFloat(E(n, "padding" + q[r], o, !0)) || 0, l -= parseFloat(E(n, "border" + q[r] + "Width", o, !0)) || 0;
                        o = l;
                        n = "px"
                    } else o = "opacity" !== f ? 0 : 1, n = ""; else o = -1 === l.indexOf(" ") ? parseFloat(l.replace(i, "")) : 0 / 0;
                    m ? (m = "=" === g.charAt(1), l = g.replace(j, ""), g = -1 === g.indexOf(" ") ? parseFloat(g.replace(i, "")) : 0 / 0) : (m = !1, l = "");
                    "" === l && (l = e[f] || n);
                    k.e = g || 0 === g ? (m ? g + o : g) + l : a[f];
                    n === l || "" === l || !g && 0 !== g || (o || 0 === o) && (o = P(b, f, o, n), "%" === l ? (o /= P(b, f, 100, "%") / 100, o > 100 && (o = 100)) : "em" === l ? o /= P(b, f, 1, "em") : (g = P(b, f, g, l), l = "px"), m && (g || 0 === g)) && (k.e = g + o + l);
                    !o && 0 !== o || !g && 0 !== g || !(k.c = m ? g : g - o) ? (k.type = -1, k.i = "display" === f && "none" === k.e ? k.b : k.e, k.s = k.c = 0) : (k.s = o, k.sfx = l, "opacity" === f ? h || (k.type = 4, k.p = "filter", k.b = "alpha(opacity=" + 100 * k.s + ")", k.e = "alpha(opacity=" + 100 * (k.s + k.c) + ")", k.dup = null != a.autoAlpha, this._style.zoom = 1) : !1 === d || "px" !== l && "zIndex" !== f || (k.r = !0))
                }
                this._overwriteProps.push("css_" + f);
                k._next && (k._next._prev = k)
            }
        };
        c._parseTransform = function (a, b, c) {
            if (!this._transform) {
                var d, g, h, i = this._transform = M(a, c, !0), j = this._style;
                if ("object" == typeof b) {
                    d = {
                        scaleX: R(null != b.scaleX ? b.scaleX : b.scale, i.scaleX),
                        scaleY: R(null != b.scaleY ? b.scaleY : b.scale, i.scaleY),
                        x: R(b.x, i.x),
                        y: R(b.y, i.y)
                    };
                    null != b.shortRotation ? (d.rotation = "number" == typeof b.shortRotation ? b.shortRotation * t : S(b.shortRotation, i.rotation), g = (d.rotation - i.rotation) % (2 * Math.PI), g !== g % Math.PI && (g += Math.PI * (0 > g ? 2 : -2)), d.rotation = i.rotation + g) : d.rotation = null == b.rotation ? i.rotation : "number" == typeof b.rotation ? b.rotation * t : S(b.rotation, i.rotation);
                    d.skewX = null == b.skewX ? i.skewX : "number" == typeof b.skewX ? b.skewX * t : S(b.skewX, i.skewX);
                    d.skewY = null == b.skewY ? i.skewY : "number" == typeof b.skewY ? b.skewY * t : S(b.skewY, i.skewY);
                    (g = d.skewY - i.skewY) && (d.skewX += g, d.rotation += g);
                    1e-6 > d.skewY && -1e-6 < d.skewY && (d.skewY = 0);
                    1e-6 > d.skewX && -1e-6 < d.skewX && (d.skewX = 0);
                    1e-6 > d.rotation && -1e-6 < d.rotation && (d.rotation = 0);
                    null != (b = b.transformOrigin) && (K ? (h = K + "Origin", this._firstPT = b = {
                        _next: this._firstPT,
                        t: j,
                        p: h,
                        s: 0,
                        c: 0,
                        n: h,
                        f: !1,
                        r: !1,
                        b: j[h],
                        e: b,
                        i: b,
                        type: -1,
                        sfx: ""
                    }, b._next && (b._next._prev = b)) : Q(b, i))
                } else {
                    if ("string" != typeof b || !K)return;
                    g = j[K], j[K] = b, d = M(a, null, !1), j[K] = g
                }
                K ? f && (e = !0, "" === j.WebkitBackfaceVisibility && (j.WebkitBackfaceVisibility = "hidden"), "" === j.zIndex && (g = E(a, "zIndex", c), "auto" === g || "" === g)) && (j.zIndex = 0) : j.zoom = 1;
                for (h in H)i[h] === d[h] && null == v[h] || "shortRotation" === h || "scale" === h || (this._firstPT = b = {
                    _next: this._firstPT,
                    t: i,
                    p: h,
                    s: i[h],
                    c: d[h] - i[h],
                    n: h,
                    f: !1,
                    r: !1,
                    b: i[h],
                    e: d[h],
                    type: 0,
                    sfx: 0
                }, b._next && (b._next._prev = b), this._overwriteProps.push("css_" + h))
            }
        };
        c._parseBezier = function (a, b, c, d) {
            if (window.com.greensock.plugins.BezierPlugin) {
                a instanceof Array && (a = {values: a});
                var e, f, g, h, i, j = a.values || [], k = j.length, l = [], m = this._bezier = {_pt: []}, n = m._proxy = {}, o = 0, p = 0, q = {}, r = k - 1, s = v, t = m._plugin = new window.com.greensock.plugins.BezierPlugin;
                for (e = 0; k > e; e++) {
                    h = {};
                    this._transform = null;
                    g = this._firstPT;
                    this._parseVars(v = j[e], b, c, d);
                    f = this._firstPT;
                    if (0 === e) {
                        for (i = this._transform; f !== g;)n[f.p] = f.s, m._pt[p++] = q[f.p] = f, 1 === f.type || 2 === f.type ? (n[f.p + "_g"] = f.gs, n[f.p + "_b"] = f.bs, 2 === f.type && (n[f.p + "_a"] = f.as)) : 3 === f.type && (n[f.p + "_y"] = f.ys), f = f._next;
                        f = this._firstPT
                    } else this._firstPT = g, g._prev && (g._prev._next = null), g = g._prev = null;
                    for (; f !== g;)q[f.p] && (h[f.p] = f.s + f.c, e === r && (q[f.p].e = f.e), 1 === f.type || 2 === f.type ? (h[f.p + "_g"] = f.gs + f.gc, h[f.p + "_b"] = f.bs + f.bc, 2 === f.type && (h[f.p + "_a"] = f.as + f.ac)) : 3 === f.type && (h[f.p + "_y"] = f.ys + f.yc), 0 === e && (f.c = f.ac = f.gc = f.bc = f.yc = 0)), f = f._next;
                    l[o++] = h
                }
                this._transform = i;
                v = s;
                a.values = l;
                0 === a.autoRotate && (a.autoRotate = !0);
                a.autoRotate && !(a.autoRotate instanceof Array) && (e = 1 == a.autoRotate ? 0 : Number(a.autoRotate) * Math.PI / 180, a.autoRotate = null != l[0].left ? [["left", "top", "rotation", e, !0]] : null != l[0].x ? [["x", "y", "rotation", e, !0]] : !1);
                (m._autoRotate = a.autoRotate) && !i && (this._transform = M(b, c, !0));
                t._onInitTween(n, a, this._tween);
                a.values = j
            } else console.log("Error: BezierPlugin not loaded.")
        };
        c.setRatio = function (a) {
            var b, c, d = this._firstPT, e = this._bezier, f = 1e-6;
            if (e) {
                e._plugin.setRatio(a);
                var h = e._pt, i = e._proxy;
                for (c = h.length; -1 < --c;)d = h[c], d.s = i[d.p], 1 === d.type || 2 === d.type ? (d.gs = i[d.p + "_g"], d.bs = i[d.p + "_b"], 2 === d.type && (d.as = i[d.p + "_a"])) : 3 === d.type && (d.ys = i[d.p + "_y"]);
                e._autoRotate && (this._transform.rotation = i.rotation)
            }
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)for (; d;)b = d.c * a + d.s, d.r ? b = b > 0 ? b + .5 >> 0 : b - .5 >> 0 : f > b && b > -f && (b = 0), d.type ? 1 === d.type ? d.t[d.p] = "rgb(" + (b >> 0) + ", " + (d.gs + a * d.gc >> 0) + ", " + (d.bs + a * d.bc >> 0) + ")" : 2 === d.type ? d.t[d.p] = "rgba(" + (b >> 0) + ", " + (d.gs + a * d.gc >> 0) + ", " + (d.bs + a * d.bc >> 0) + ", " + (d.as + a * d.ac) + ")" : -1 === d.type ? d.t[d.p] = d.i : 3 === d.type ? (e = d.ys + a * d.yc, d.r && (e = e > 0 ? e + .5 >> 0 : e - .5 >> 0), d.t[d.p] = b + d.sfx + " " + e + d.ysfx) : (d.dup && (d.t.filter = d.t.filter || "alpha(opacity=100)"), d.t.filter = -1 === d.t.filter.indexOf("opacity") ? d.t.filter + (" alpha(opacity=" + (100 * b >> 0) + ")") : d.t.filter.replace(l, "opacity=" + (100 * b >> 0))) : d.t[d.p] = b + d.sfx, d = d._next; else for (; d;)d.t[d.p] = d.b, 4 === d.type && 1 === d.s && (this._style.removeAttribute("filter"), E(this._target, "filter") && (d.t[d.p] = d.b)), d = d._next; else for (; d;)d.t[d.p] = d.e, 4 === d.type && 1 === d.s + d.c && (this._style.removeAttribute("filter"), E(this._target, "filter") && (d.t[d.p] = d.e)), d = d._next;
            if (this._transform)if (d = this._transform, !K || d.rotation || d.skewX) {
                var k, h = K ? d.rotation : -d.rotation, m = K ? h - d.skewX : h + d.skewX, e = Math.cos(h) * d.scaleX, h = Math.sin(h) * d.scaleX, i = Math.sin(m) * -d.scaleY, m = Math.cos(m) * d.scaleY;
                f > e && e > -f && (e = 0);
                f > h && h > -f && (h = 0);
                f > i && i > -f && (i = 0);
                f > m && m > -f && (m = 0);
                if (K)this._style[K] = "matrix(" + e + "," + h + "," + i + "," + m + "," + d.x + "," + d.y + ")"; else if (k = this._target.currentStyle) {
                    f = h;
                    h = -i;
                    i = -f;
                    f = k.filter;
                    this._style.filter = "";
                    c = this._target.offsetWidth;
                    b = this._target.offsetHeight;
                    var n, o, p = "absolute" !== k.position, q = "progid:DXImageTransform.Microsoft.Matrix(M11=" + e + ", M12=" + h + ", M21=" + i + ", M22=" + m, r = d.x, t = d.y;
                    null != d.ox && (n = (d.oxp ? .01 * c * d.ox : d.ox) - c / 2, o = (d.oyp ? .01 * b * d.oy : d.oy) - b / 2, r = n - (n * e + o * h) + d.x, t = o - (n * i + o * m) + d.y);
                    if (p)n = c / 2, o = b / 2, q += ", Dx=" + (n - (n * e + o * h) + r) + ", Dy=" + (o - (n * i + o * m) + t) + ")"; else {
                        var u = 8 > g ? 1 : -1;
                        n = d.ieOffsetX || 0;
                        o = d.ieOffsetY || 0;
                        d.ieOffsetX = Math.round((c - ((0 > e ? -e : e) * c + (0 > h ? -h : h) * b)) / 2 + r);
                        d.ieOffsetY = Math.round((b - ((0 > m ? -m : m) * b + (0 > i ? -i : i) * c)) / 2 + t);
                        for (c = 0; 4 > c; c++)r = O[c], b = k[r], b = -1 !== b.indexOf("px") ? parseFloat(b) : P(this._target, r, parseFloat(b), b.replace(j, "")) || 0, t = b !== d[r] ? 2 > c ? -d.ieOffsetX : -d.ieOffsetY : 2 > c ? n - d.ieOffsetX : o - d.ieOffsetY, this._style[r] = (d[r] = Math.round(b - t * (0 === c || 2 === c ? 1 : u))) + "px";
                        q += ", sizingMethod='auto expand')"
                    }
                    this._style.filter = -1 !== f.indexOf("DXImageTransform.Microsoft.Matrix(") ? f.replace(s, q) : q + " " + f;
                    (0 === a || 1 === a) && (1 !== e || 0 !== h || 0 !== i || 1 !== m || p && -1 === q.indexOf("Dx=0, Dy=0") || (!l.test(f) || 100 === parseFloat(RegExp.$1)) && this._style.removeAttribute("filter"))
                }
            } else this._style[K] = (d.x || d.y ? "translate(" + d.x + "px," + d.y + "px) " : "") + (1 !== d.scaleX || 1 !== d.scaleY ? "scale(" + d.scaleX + "," + d.scaleY + ")" : "") || "translate(0px,0px)";
            if (this._classData)if (d = this._classData, 1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)this._target.className !== d.b && (this._target.className = d.b); else {
                for (c = d.props.length; -1 < --c;)this._style[d.props[c]] = "";
                this._target.className = d.e
            }
        };
        c._kill = function (b) {
            var c, d = b;
            if (b.autoAlpha || b.alpha) {
                d = {};
                for (c in b)d[c] = b[c];
                d.opacity = 1;
                d.autoAlpha && (d.visibility = 1)
            }
            return a.prototype._kill.call(this, d)
        };
        a.activate([b]);
        return b
    }, !0);
    _gsDefine("plugins.RoundPropsPlugin", ["plugins.TweenPlugin"], function (a) {
        var b = function () {
            a.call(this, "roundProps", -1);
            this._overwriteProps.length = 0
        }, c = b.prototype = new a("roundProps", -1);
        c.constructor = b;
        b.API = 2;
        c._onInitTween = function (a, b, c) {
            this._tween = c;
            return !0
        };
        c._onInitAllProps = function () {
            for (var a, b, c, d = this._tween, e = d.vars.roundProps instanceof Array ? d.vars.roundProps : d.vars.roundProps.split(","), f = e.length, g = {}, h = d._propLookup.roundProps; -1 < --f;)g[e[f]] = 1;
            for (f = e.length; -1 < --f;) {
                a = e[f];
                for (b = d._firstPT; b;)c = b._next, b.pg ? b.t._roundProps(g, !0) : b.n === a && (this._add(b.t, a, b.s, b.c), c && (c._prev = b._prev), b._prev ? b._prev._next = c : _tween._firstPT === b && (d._firstPT = c), b._next = b._prev = null, d._propLookup[a] = h), b = c
            }
            return !1
        };
        c._add = function (a, b, c, d) {
            this._addTween(a, b, c, c + d, b, !0);
            this._overwriteProps.push(b)
        };
        a.activate([b]);
        return b
    }, !0);
    _gsDefine("easing.Back", ["easing.Ease"], function (a) {
        var b = window.com.greensock._class, c = function (c, d) {
            var e = b("easing." + c, function () {
            }, !0), f = e.prototype = new a;
            f.constructor = e;
            f.getRatio = d;
            return e
        }, d = function (c, d) {
            var e = b("easing." + c, function (a) {
                this._p1 = a || 0 === a ? a : 1.70158;
                this._p2 = 1.525 * this._p1
            }, !0), f = e.prototype = new a;
            f.constructor = e;
            f.getRatio = d;
            f.config = function (a) {
                return new e(a)
            };
            return e
        }, e = d("BackOut", function (a) {
            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
        }), f = d("BackIn", function (a) {
            return a * a * ((this._p1 + 1) * a - this._p1)
        }), d = d("BackInOut", function (a) {
            return 1 > (a *= 2) ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
        }), g = c("BounceOut", function (a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }), h = c("BounceIn", function (a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        }), i = c("BounceInOut", function (a) {
            var b = .5 > a, a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
            return b ? .5 * (1 - a) : .5 * a + .5
        }), j = c("CircOut", function (a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }), k = c("CircIn", function (a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }), l = c("CircInOut", function (a) {
            return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        }), m = 2 * Math.PI, n = function (c, d, e) {
            var f = b("easing." + c, function (a, b) {
                this._p1 = a || 1;
                this._p2 = b || e;
                this._p3 = this._p2 / m * (Math.asin(1 / this._p1) || 0)
            }, !0), c = f.prototype = new a;
            c.constructor = f;
            c.getRatio = d;
            c.config = function (a, b) {
                return new f(a, b)
            };
            return f
        }, o = n("ElasticOut", function (a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * m / this._p2) + 1
        }, .3), p = n("ElasticIn", function (a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * m / this._p2))
        }, .3), n = n("ElasticInOut", function (a) {
            return 1 > (a *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * m / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * m / this._p2) + 1
        }, .45), q = c("ExpoOut", function (a) {
            return 1 - Math.pow(2, -10 * a)
        }), r = c("ExpoIn", function (a) {
            return Math.pow(2, 10 * (a - 1)) - .001
        }), s = c("ExpoInOut", function (a) {
            return 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
        }), t = Math.PI / 2, u = c("SineOut", function (a) {
            return Math.sin(a * t)
        }), v = c("SineIn", function (a) {
            return -Math.cos(a * t) + 1
        }), c = c("SineInOut", function (a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        }), w = b("easing.SlowMo", function (a, b, c) {
            null == a ? a = .7 : a > 1 && (a = 1);
            this._p = 1 != a ? b || 0 === b ? b : .7 : 0;
            this._p1 = (1 - a) / 2;
            this._p2 = a;
            this._p3 = this._p1 + this._p2;
            this._calcEnd = !0 === c
        }, !0), x = w.prototype = new a;
        x.constructor = w;
        x.getRatio = function (a) {
            var b = a + (.5 - a) * this._p;
            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
        };
        w.ease = new w(.7, .7);
        x.config = w.config = function (a, b, c) {
            return new w(a, b, c)
        };
        var y = b("easing.SteppedEase", function (a) {
            a = a || 1;
            this._p1 = 1 / a;
            this._p2 = a + 1
        }, !0), x = y.prototype = new a;
        x.constructor = y;
        x.getRatio = function (a) {
            0 > a ? a = 0 : a >= 1 && (a = .999999999);
            return (this._p2 * a >> 0) * this._p1
        };
        x.config = y.config = function (a) {
            return new y(a)
        };
        b("easing.Bounce", {easeOut: new g, easeIn: new h, easeInOut: new i}, !0);
        b("easing.Circ", {easeOut: new j, easeIn: new k, easeInOut: new l}, !0);
        b("easing.Elastic", {easeOut: new o, easeIn: new p, easeInOut: new n}, !0);
        b("easing.Expo", {easeOut: new q, easeIn: new r, easeInOut: new s}, !0);
        b("easing.Sine", {easeOut: new u, easeIn: new v, easeInOut: new c}, !0);
        return {easeOut: new e, easeIn: new f, easeInOut: new d}
    }, !0)
});
!function (a) {
    var b, c, d, e, f, g = function (b) {
        var c, b = b.split("."), d = a;
        for (c = 0; c < b.length; c++)d[b[c]] = d = d[b[c]] || {};
        return d
    }, h = g("com.greensock"), i = {}, j = function (b, c, d, e) {
        this.sc = i[b] ? i[b].sc : [];
        i[b] = this;
        this.gsClass = null;
        this.def = d;
        var f = c || [], h = [];
        this.check = function (c) {
            for (var k, l = f.length, m = 0; -1 < --l;)(k = i[f[l]] || new j(f[l])).gsClass ? h[l] = k.gsClass : (m++, c && k.sc.push(this));
            if (0 === m && d) {
                var c = ("com.greensock." + b).split("."), l = c.pop(), n = g(c.join("."))[l] = this.gsClass = d.apply(d, h);
                e && ((a.GreenSockGlobals || a)[l] = n, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + b.split(".").join("/"), [], function () {
                    return n
                }) : "undefined" != typeof module && module.exports && (module.exports = n));
                for (l = 0; l < this.sc.length; l++)this.sc[l].check(!1)
            }
        };
        this.check(!0)
    }, k = h._class = function (a, b, c) {
        new j(a, [], function () {
            return b
        }, c);
        return b
    };
    a._gsDefine = function (a, b, c, d) {
        return new j(a, b, c, d)
    };
    var l = [0, 0, 1, 1], m = [], n = k("easing.Ease", function (a, b, c, d) {
        this._func = a;
        this._type = c || 0;
        this._power = d || 0;
        this._params = b ? l.concat(b) : l
    }, !0);
    d = n.prototype;
    d._calcEnd = !1;
    d.getRatio = function (a) {
        if (this._func)return this._params[0] = a, this._func.apply(null, this._params);
        var b = this._type, c = this._power, d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
        1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d);
        return 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
    };
    b = ["Linear", "Quad", "Cubic", "Quart", "Quint"];
    for (c = b.length; -1 < --c;)d = k("easing." + b[c], function () {
    }, !0), e = k("easing.Power" + c, function () {
    }, !0), d.easeOut = e.easeOut = new n(null, null, 1, c), d.easeIn = e.easeIn = new n(null, null, 2, c), d.easeInOut = e.easeInOut = new n(null, null, 3, c);
    k("easing.Strong", h.easing.Power4, !0);
    h.easing.Linear.easeNone = h.easing.Linear.easeIn;
    var o = k("events.EventDispatcher", function (a) {
        this._listeners = {};
        this._eventTarget = a || this
    });
    d = o.prototype;
    d.addEventListener = function (a, b, c, d, e) {
        var f, e = e || 0, g = this._listeners[a], h = 0;
        null == g && (this._listeners[a] = g = []);
        for (f = g.length; -1 < --f;)a = g[f], a.c === b ? g.splice(f, 1) : 0 === h && a.pr < e && (h = f + 1);
        g.splice(h, 0, {c: b, s: c, up: d, pr: e})
    };
    d.removeEventListener = function (a, b) {
        var c = this._listeners[a];
        if (c)for (var d = c.length; -1 < --d;)if (c[d].c === b) {
            c.splice(d, 1);
            break
        }
    };
    d.dispatchEvent = function (a) {
        var b = this._listeners[a];
        if (b)for (var c, d = b.length, e = this._eventTarget; -1 < --d;)c = b[d], c.up ? c.c.call(c.s || e, {
            type: a,
            target: e
        }) : c.c.call(c.s || e)
    };
    var p = a.requestAnimationFrame, q = a.cancelAnimationFrame, r = Date.now || function () {
            return (new Date).getTime()
        };
    b = ["ms", "moz", "webkit", "o"];
    for (c = b.length; -1 < --c && !p;)p = a[b[c] + "RequestAnimationFrame"], q = a[b[c] + "CancelAnimationFrame"] || a[b[c] + "CancelRequestAnimationFrame"];
    k("Ticker", function (b, c) {
        var d, e, f, g, h, i = this, j = r(), k = !1 !== c && p, l = function () {
            null != f && (k && q ? q(f) : a.clearTimeout(f), f = null)
        }, m = function (a) {
            i.time = (r() - j) / 1e3;
            (!d || i.time >= h || a) && (i.frame++, h = i.time > h ? i.time + g - (i.time - h) : i.time + g - .001, h < i.time + .001 && (h = i.time + .001), i.dispatchEvent("tick"));
            !0 !== a && (f = e(m))
        };
        o.call(i);
        this.time = this.frame = 0;
        this.tick = function () {
            m(!0)
        };
        this.fps = function (b) {
            if (!arguments.length)return d;
            d = b;
            g = 1 / (d || 60);
            h = this.time + g;
            e = 0 === d ? function () {
            } : k && p ? p : function (b) {
                return a.setTimeout(b, 1e3 * (h - i.time) + 1 >> 0 || 1)
            };
            l();
            f = e(m)
        };
        this.useRAF = function (a) {
            if (!arguments.length)return k;
            l();
            k = a;
            i.fps(d)
        };
        i.fps(b);
        a.setTimeout(function () {
            k && !f && i.useRAF(!1)
        }, 1e3)
    });
    d = h.Ticker.prototype = new h.events.EventDispatcher;
    d.constructor = h.Ticker;
    var s = k("core.Animation", function (a, b) {
        this.vars = b || {};
        this._duration = this._totalDuration = a || 0;
        this._delay = Number(this.vars.delay) || 0;
        this._timeScale = 1;
        this._active = 1 == this.vars.immediateRender;
        this.data = this.vars.data;
        this._reversed = 1 == this.vars.reversed;
        if (B) {
            f || (t.tick(), f = !0);
            var c = this.vars.useFrames ? A : B;
            c.insert(this, c._time);
            this.vars.paused && this.paused(!0)
        }
    }), t = s.ticker = new h.Ticker;
    d = s.prototype;
    d._dirty = d._gc = d._initted = d._paused = !1;
    d._totalTime = d._time = 0;
    d._rawPrevTime = -1;
    d._next = d._last = d._onUpdate = d._timeline = d.timeline = null;
    d._paused = !1;
    d.play = function (a, b) {
        arguments.length && this.seek(a, b);
        this.reversed(!1);
        return this.paused(!1)
    };
    d.pause = function (a, b) {
        arguments.length && this.seek(a, b);
        return this.paused(!0)
    };
    d.resume = function (a, b) {
        arguments.length && this.seek(a, b);
        return this.paused(!1)
    };
    d.seek = function (a, b) {
        return this.totalTime(Number(a), 0 != b)
    };
    d.restart = function (a, b) {
        this.reversed(!1);
        this.paused(!1);
        return this.totalTime(a ? -this._delay : 0, 0 != b)
    };
    d.reverse = function (a, b) {
        arguments.length && this.seek(a || this.totalDuration(), b);
        this.reversed(!0);
        return this.paused(!1)
    };
    d.render = function () {
    };
    d.invalidate = function () {
        return this
    };
    d._enabled = function (a, b) {
        this._gc = !a;
        this._active = a && !this._paused && 0 < this._totalTime && this._totalTime < this._totalDuration;
        1 != b && (a && null == this.timeline ? this._timeline.insert(this, this._startTime - this._delay) : !a && null != this.timeline && this._timeline._remove(this, !0));
        return !1
    };
    d._kill = function () {
        return this._enabled(!1, !1)
    };
    d.kill = function (a, b) {
        this._kill(a, b);
        return this
    };
    d._uncache = function (a) {
        for (a = a ? this : this.timeline; a;)a._dirty = !0, a = a.timeline;
        return this
    };
    d.eventCallback = function (a, b, c, d) {
        if (null == a)return null;
        if ("on" === a.substr(0, 2)) {
            if (1 === arguments.length)return this.vars[a];
            if (null == b)delete this.vars[a]; else if (this.vars[a] = b, this.vars[a + "Params"] = c, this.vars[a + "Scope"] = d, c)for (var e = c.length; -1 < --e;)"{self}" === c[e] && (c = this.vars[a + "Params"] = c.concat(), c[e] = this);
            "onUpdate" === a && (this._onUpdate = b)
        }
        return this
    };
    d.delay = function (a) {
        if (!arguments.length)return this._delay;
        this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay);
        this._delay = a;
        return this
    };
    d.duration = function (a) {
        if (!arguments.length)return this._dirty = !1, this._duration;
        this._duration = this._totalDuration = a;
        this._uncache(!0);
        this._timeline.smoothChildTiming && this._active && 0 != a && this.totalTime(this._totalTime * (a / this._duration), !0);
        return this
    };
    d.totalDuration = function (a) {
        this._dirty = !1;
        return arguments.length ? this.duration(a) : this._totalDuration
    };
    d.time = function (a, b) {
        if (!arguments.length)return this._time;
        this._dirty && this.totalDuration();
        a > this._duration && (a = this._duration);
        return this.totalTime(a, b)
    };
    d.totalTime = function (a, b) {
        if (!arguments.length)return this._totalTime;
        if (this._timeline) {
            0 > a && (a += this.totalDuration());
            if (this._timeline.smoothChildTiming && (this._dirty && this.totalDuration(), a > this._totalDuration && (a = this._totalDuration), this._startTime = (this._paused ? this._pauseTime : this._timeline._time) - (this._reversed ? this._totalDuration - a : a) / this._timeScale, this._timeline._dirty || this._uncache(!1), !this._timeline._active))for (var c = this._timeline; c._timeline;)c.totalTime(c._totalTime, !0), c = c._timeline;
            this._gc && this._enabled(!0, !1);
            this._totalTime != a && this.render(a, b, !1)
        }
        return this
    };
    d.startTime = function (a) {
        if (!arguments.length)return this._startTime;
        a != this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.insert(this, a - this._delay));
        return this
    };
    d.timeScale = function (a) {
        if (!arguments.length)return this._timeScale;
        a = a || 1e-6;
        if (this._timeline && this._timeline.smoothChildTiming) {
            var b = this._pauseTime || 0 == this._pauseTime ? this._pauseTime : this._timeline._totalTime;
            this._startTime = b - (b - this._startTime) * this._timeScale / a
        }
        this._timeScale = a;
        return this._uncache(!1)
    };
    d.reversed = function (a) {
        if (!arguments.length)return this._reversed;
        a != this._reversed && (this._reversed = a, this.totalTime(this._totalTime, !0));
        return this
    };
    d.paused = function (a) {
        if (!arguments.length)return this._paused;
        a != this._paused && this._timeline && (!a && this._timeline.smoothChildTiming && (this._startTime += this._timeline.rawTime() - this._pauseTime, this._uncache(!1)), this._pauseTime = a ? this._timeline.rawTime() : null, this._paused = a, this._active = !this._paused && 0 < this._totalTime && this._totalTime < this._totalDuration);
        this._gc && (a || this._enabled(!0, !1));
        return this
    };
    h = k("core.SimpleTimeline", function (a) {
        s.call(this, 0, a);
        this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    d = h.prototype = new s;
    d.constructor = h;
    d.kill()._gc = !1;
    d._first = d._last = null;
    d._sortChildren = !1;
    d.insert = function (a, b) {
        a._startTime = Number(b || 0) + a._delay;
        a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale);
        a.timeline && a.timeline._remove(a, !0);
        a.timeline = a._timeline = this;
        a._gc && a._enabled(!0, !0);
        var c = this._last;
        if (this._sortChildren)for (var d = a._startTime; c && c._startTime > d;)c = c._prev;
        c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a);
        a._next ? a._next._prev = a : this._last = a;
        a._prev = c;
        this._timeline && this._uncache(!0);
        return this
    };
    d._remove = function (a, b) {
        a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0));
        return this
    };
    d.render = function (a, b) {
        var c, d = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = a; d;) {
            c = d._next;
            (d._active || a >= d._startTime && !d._paused) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, !1) : d.render((a - d._startTime) * d._timeScale, b, !1));
            d = c
        }
    };
    d.rawTime = function () {
        return this._totalTime
    };
    var u = k("TweenLite", function (a, b, c) {
        s.call(this, b, c);
        if (null == a)throw"Cannot tween an undefined reference.";
        this.target = a;
        this._overwrite = null == this.vars.overwrite ? z[u.defaultOverwrite] : "number" == typeof this.vars.overwrite ? this.vars.overwrite >> 0 : z[this.vars.overwrite];
        if ((a instanceof Array || a.jquery) && "object" == typeof a[0]) {
            this._targets = a.slice(0);
            this._propLookup = [];
            this._siblings = [];
            for (a = 0; a < this._targets.length; a++)c = this._targets[a], c.jquery ? (this._targets.splice(a--, 1), this._targets = this._targets.concat(c.constructor.makeArray(c))) : (this._siblings[a] = C(c, this, !1), 1 === this._overwrite && 1 < this._siblings[a].length && D(c, this, null, 1, this._siblings[a]))
        } else this._propLookup = {}, this._siblings = C(a, this, !1), 1 === this._overwrite && 1 < this._siblings.length && D(a, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === b && 0 === this._delay && 0 != this.vars.immediateRender) && this.render(-this._delay, !1, !0)
    }, !0);
    d = u.prototype = new s;
    d.constructor = u;
    d.kill()._gc = !1;
    d.ratio = 0;
    d._firstPT = d._targets = d._overwrittenProps = null;
    d._notifyPluginsOfEnabled = !1;
    u.version = 12;
    u.defaultEase = d._ease = new n(null, null, 1, 1);
    u.defaultOverwrite = "auto";
    u.ticker = t;
    var v = u._plugins = {}, w = u._tweenLookup = {}, x = 0, y = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        orientToBezier: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1
    }, z = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        "true": 1,
        "false": 0
    }, A = s._rootFramesTimeline = new h, B = s._rootTimeline = new h;
    B._startTime = t.time;
    A._startTime = t.frame;
    B._active = A._active = !0;
    s._updateRoot = function () {
        B.render((t.time - B._startTime) * B._timeScale, !1, !1);
        A.render((t.frame - A._startTime) * A._timeScale, !1, !1);
        if (!(t.frame % 120)) {
            var a, b, c;
            for (c in w) {
                b = w[c].tweens;
                for (a = b.length; -1 < --a;)b[a]._gc && b.splice(a, 1);
                0 === b.length && delete w[c]
            }
        }
    };
    t.addEventListener("tick", s._updateRoot);
    var C = function (a, b, c) {
        var d, e = a._gsTweenID;
        w[e || (a._gsTweenID = e = "t" + x++)] || (w[e] = {target: a, tweens: []});
        if (b && (a = w[e].tweens, a[d = a.length] = b, c))for (; -1 < --d;)a[d] === b && a.splice(d, 1);
        return w[e].tweens
    }, D = function (a, b, c, d, e) {
        var f, g, h;
        if (1 === d || d >= 4) {
            a = e.length;
            for (f = 0; a > f; f++)if ((h = e[f]) !== b)h._gc || h._enabled(!1, !1) && (g = !0); else if (5 === d)break;
            return g
        }
        var i, j = b._startTime + 1e-10, k = [], l = 0;
        for (f = e.length; -1 < --f;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (i = i || E(b, 0), 0 === E(h, i) && (k[l++] = h)) : h._startTime <= j && h._startTime + h.totalDuration() / h._timeScale + 1e-10 > j && ((0 === b._duration || !h._initted) && 2e-10 >= j - h._startTime || (k[l++] = h)));
        for (f = l; -1 < --f;)(h = k[f], 2 === d && h._kill(c, a) && (g = !0), 2 !== d || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
        return g
    }, E = function (a, b) {
        for (var c = a._timeline, d = c._timeScale, e = a._startTime; c._timeline;) {
            e += c._startTime;
            d *= c._timeScale;
            if (c._paused)return -100;
            c = c._timeline
        }
        e /= d;
        return e > b ? e - b : !a._initted && 2e-10 > e - b ? 1e-10 : (e += a.totalDuration() / a._timeScale / d) > b ? 0 : e - b - 1e-10
    };
    d._init = function () {
        this.vars.startAt && (this.vars.startAt.overwrite = 0, this.vars.startAt.immediateRender = !0, u.to(this.target, 0, this.vars.startAt));
        var a, b;
        this._ease = this.vars.ease instanceof n ? this.vars.easeParams instanceof Array ? this.vars.ease.config.apply(this.vars.ease, this.vars.easeParams) : this.vars.ease : "function" == typeof this.vars.ease ? new n(this.vars.ease, this.vars.easeParams) : u.defaultEase;
        this._easeType = this._ease._type;
        this._easePower = this._ease._power;
        this._firstPT = null;
        if (this._targets)for (a = this._targets.length; -1 < --a;)this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], this._overwrittenProps ? this._overwrittenProps[a] : null) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, this._overwrittenProps);
        b && u._onPluginEvent("_onInitAllProps", this);
        this._overwrittenProps && null == this._firstPT && "function" != typeof this.target && this._enabled(!1, !1);
        if (this.vars.runBackwards)for (a = this._firstPT; a;)a.s += a.c, a.c = -a.c, a = a._next;
        this._onUpdate = this.vars.onUpdate;
        this._initted = !0
    };
    d._initProps = function (a, b, c, d) {
        var e, f, g, h, i, j;
        if (null == a)return !1;
        for (e in this.vars) {
            if (y[e]) {
                if (("onStartParams" === e || "onUpdateParams" === e || "onCompleteParams" === e || "onReverseCompleteParams" === e || "onRepeatParams" === e) && (i = this.vars[e]))for (f = i.length; -1 < --f;)"{self}" === i[f] && (i = this.vars[e] = i.concat(), i[f] = this)
            } else if (v[e] && (h = new v[e])._onInitTween(a, this.vars[e], this)) {
                this._firstPT = j = {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: !0,
                    n: e,
                    pg: !0,
                    pr: h._priority
                };
                for (f = h._overwriteProps.length; -1 < --f;)b[h._overwriteProps[f]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (g = !0);
                (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
            } else this._firstPT = b[e] = j = {
                _next: this._firstPT,
                t: a,
                p: e,
                f: "function" == typeof a[e],
                n: e,
                pg: !1,
                pr: 0
            }, j.s = j.f ? a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]() : parseFloat(a[e]), f = this.vars[e], j.c = "number" == typeof f ? f - j.s : "string" == typeof f && "=" === f.charAt(1) ? parseInt(f.charAt(0) + "1") * Number(f.substr(2)) : Number(f) || 0;
            j && j._next && (j._next._prev = j)
        }
        return d && this._kill(d, a) ? this._initProps(a, b, c, d) : 1 < this._overwrite && this._firstPT && 1 < c.length && D(a, this, b, this._overwrite, c) ? (this._kill(b, a), this._initProps(a, b, c, d)) : g
    };
    d.render = function (a, b, c) {
        var d, e, f = this._time;
        if (a >= this._duration) {
            if (this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete"), 0 === this._duration) {
                (0 === a || 0 > this._rawPrevTime) && this._rawPrevTime !== a && (c = !0);
                this._rawPrevTime = a
            }
        } else if (0 >= a) {
            this._totalTime = this._time = 0;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
            (0 !== f || 0 === this._duration && 0 < this._rawPrevTime) && (e = "onReverseComplete", d = this._reversed);
            0 > a ? (this._active = !1, 0 === this._duration && (0 <= this._rawPrevTime && (c = !0), this._rawPrevTime = a)) : this._initted || (c = !0)
        } else if (this._totalTime = this._time = a, this._easeType) {
            var g = a / this._duration, h = this._easeType, i = this._easePower;
            (1 === h || 3 === h && g >= .5) && (g = 1 - g);
            3 === h && (g *= 2);
            1 === i ? g *= g : 2 === i ? g *= g * g : 3 === i ? g *= g * g * g : 4 === i && (g *= g * g * g * g);
            this.ratio = 1 === h ? 1 - g : 2 === h ? g : .5 > a / this._duration ? g / 2 : 1 - g / 2
        } else this.ratio = this._ease.getRatio(a / this._duration);
        if (this._time !== f || c) {
            this._initted || (this._init(), !d && this._time && (this.ratio = this._ease.getRatio(this._time / this._duration)));
            !this._active && !this._paused && (this._active = !0);
            0 !== f || !this.vars.onStart || 0 === this._time && 0 !== this._duration || b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || m);
            for (a = this._firstPT; a;) {
                a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s;
                a = a._next
            }
            this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || m));
            e && !this._gc && (d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), b || this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || m))
        }
    };
    d._kill = function (a, b) {
        "all" === a && (a = null);
        if (null == a && (null == b || b == this.target))return this._enabled(!1, !1);
        var c, d, e, f, g, h, i, b = b || this._targets || this.target;
        if ((b instanceof Array || b.jquery) && "object" == typeof b[0])for (c = b.length; -1 < --c;)this._kill(a, b[c]) && (g = !0); else {
            if (this._targets) {
                for (c = this._targets.length; -1 < --c;)if (b === this._targets[c]) {
                    f = this._propLookup[c] || {};
                    this._overwrittenProps = this._overwrittenProps || [];
                    d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                    break
                }
            } else {
                if (b !== this.target)return !1;
                f = this._propLookup;
                d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
            }
            if (f)for (e in h = a || f, i = a != d && "all" != d && a != f && (null == a || 1 != a._tempKill), h) {
                if (c = f[e]) {
                    c.pg && c.t._kill(h) && (g = !0);
                    c.pg && 0 !== c.t._overwriteProps.length || (c._prev ? c._prev._next = c._next : c === this._firstPT && (this._firstPT = c._next), c._next && (c._next._prev = c._prev), c._next = c._prev = null);
                    delete f[e]
                }
                i && (d[e] = 1)
            }
        }
        return g
    };
    d.invalidate = function () {
        this._notifyPluginsOfEnabled && u._onPluginEvent("_onDisable", this);
        this._onUpdate = this._overwrittenProps = this._firstPT = null;
        this._initted = this._active = this._notifyPluginsOfEnabled = !1;
        this._propLookup = this._targets ? {} : [];
        return this
    };
    d._enabled = function (a, b) {
        if (a && this._gc)if (this._targets)for (var c = this._targets.length; -1 < --c;)this._siblings[c] = C(this._targets[c], this, !0); else this._siblings = C(this.target, this, !0);
        s.prototype._enabled.call(this, a, b);
        return this._notifyPluginsOfEnabled && this._firstPT ? u._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
    };
    u.to = function (a, b, c) {
        return new u(a, b, c)
    };
    u.from = function (a, b, c) {
        c.runBackwards = !0;
        0 != c.immediateRender && (c.immediateRender = !0);
        return new u(a, b, c)
    };
    u.fromTo = function (a, b, c, d) {
        d.startAt = c;
        c.immediateRender && (d.immediateRender = !0);
        return new u(a, b, d)
    };
    u.delayedCall = function (a, b, c, d, e) {
        return new u(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            onCompleteScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            onReverseCompleteScope: d,
            immediateRender: !1,
            useFrames: e,
            overwrite: 0
        })
    };
    u.set = function (a, b) {
        return new u(a, 0, b)
    };
    u.killTweensOf = u.killDelayedCallsTo = function (a, b) {
        for (var c = u.getTweensOf(a), d = c.length; -1 < --d;)c[d]._kill(b, a)
    };
    u.getTweensOf = function (a) {
        if (null != a) {
            var b, c, d;
            if ((a instanceof Array || a.jquery) && "object" == typeof a[0]) {
                b = a.length;
                for (c = []; -1 < --b;)c = c.concat(u.getTweensOf(a[b]));
                for (b = c.length; -1 < --b;) {
                    d = c[b];
                    for (a = b; -1 < --a;)d === c[a] && c.splice(b, 1)
                }
            } else {
                c = C(a).concat();
                for (b = c.length; -1 < --b;)c[b]._gc && c.splice(b, 1)
            }
            return c
        }
    };
    var F = k("plugins.TweenPlugin", function (a, b) {
        this._overwriteProps = (a || "").split(",");
        this._propName = this._overwriteProps[0];
        this._priority = b || 0
    }, !0);
    d = F.prototype;
    F.version = 12;
    F.API = 2;
    d._firstPT = null;
    d._addTween = function (a, b, c, d, e, f) {
        var g;
        null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1") * Number(d.substr(2))) && (this._firstPT = a = {
            _next: this._firstPT,
            t: a,
            p: b,
            s: c,
            c: g,
            f: "function" == typeof a[b],
            n: e || b,
            r: f
        }, a._next && (a._next._prev = a))
    };
    d.setRatio = function (a) {
        for (var b, c = this._firstPT; c;) {
            b = c.c * a + c.s;
            c.r && (b = b + (b > 0 ? .5 : -.5) >> 0);
            c.f ? c.t[c.p](b) : c.t[c.p] = b;
            c = c._next
        }
    };
    d._kill = function (a) {
        if (null != a[this._propName])this._overwriteProps = []; else for (var b = this._overwriteProps.length; -1 < --b;)null != a[this._overwriteProps[b]] && this._overwriteProps.splice(b, 1);
        for (b = this._firstPT; b;)null != a[b.n] && (b._next && (b._next._prev = b._prev), b._prev ? (b._prev._next = b._next, b._prev = null) : this._firstPT === b && (this._firstPT = b._next)), b = b._next;
        return !1
    };
    d._roundProps = function (a, b) {
        for (var c = this._firstPT; c;) {
            (a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b);
            c = c._next
        }
    };
    u._onPluginEvent = function (a, b) {
        var c, d = b._firstPT;
        if ("_onInitAllProps" === a) {
            for (var e, f, g, h; d;) {
                h = d._next;
                for (e = f; e && e.pr > d.pr;)e = e._next;
                (d._prev = e ? e._prev : g) ? d._prev._next = d : f = d;
                (d._next = e) ? e._prev = d : g = d;
                d = h
            }
            d = b._firstPT = f
        }
        for (; d;)d.pg && "function" == typeof d.t[a] && d.t[a]() && (c = !0), d = d._next;
        return c
    };
    F.activate = function (a) {
        for (var b = a.length; -1 < --b;)a[b].API === F.API && (u._plugins[(new a[b])._propName] = a[b]);
        return !0
    };
    if (b = a._gsQueue) {
        for (c = 0; c < b.length; c++)b[c]();
        for (d in i)i[d].def || console.log("Warning: TweenLite encountered missing dependency: com.greensock." + d)
    }
}(window);
!function (a, b) {
    "use strict";
    function c(b, c) {
        var e = this.createConfig(a.extend({}, f, c)), g = this.css = e.css, h = this.slide = e.slide, i = this.transition = e.transition, j = (this.broadcaster = e.broadcaster, this.$el = {
            slideshow: b,
            pages: b.find("." + g.page),
            slides: b.find("." + g.slide)
        });
        d.hasOwnProperty(i.name) || (i.name = "swap");
        i.speed /= 1e3;
        h.count = j.slides.length;
        if (!(h.count < 2)) {
            if ("number" == typeof h.start) {
                h.current = h.start;
                h.current >= h.count && (h.current = h.count - 1)
            } else h.current = "string" == typeof h.start ? "rnd" === h.start ? Math.floor(Math.random() * h.count) : this.getSlideIndex(h.start) : 0;
            a.extend(b, {
                first: this.gotoFirst.bind(this),
                previous: this.gotoPrevious.bind(this),
                next: this.gotoNext.bind(this),
                last: this.gotoLast.bind(this),
                gotoSlide: this.gotoSlide.bind(this)
            });
            b.on("click", "." + g.page + ":not(." + g.page_prev + ", ." + g.page_next + ")", this.clickPage.bind(this)).on("click", "." + g.page_prev, this.gotoPrevious.bind(this)).on("click", "." + g.page_next, this.gotoNext.bind(this));
            this.init()
        }
    }

    var d, e = a(window), f = {
        slide_start: 0,
        css_pagination: "tcs-slideshow__pagination",
        css_page: "tcs-slideshow__page",
        css_page_active: "tcs-slideshow__page_active",
        css_page_prev: "tcs-slideshow__page_prev",
        css_page_next: "tcs-slideshow__page_next",
        css_slides: "tcs-slideshow__slides",
        css_slide: "tcs-slideshow__slide",
        transition_name: "swap",
        transition_ease: "Power2.easeIn",
        transition_speed: 700
    };
    c.prototype = {
        constructor: c, createConfig: function (a) {
            var b, c, d, e = {};
            for (b in a)if (a.hasOwnProperty(b)) {
                c = b.split("_");
                d = c.shift();
                if (c.length) {
                    e[d] || (e[d] = {});
                    e[d][c.join("_")] = a[b]
                } else e[b] = a[b]
            }
            return e
        }, init: function () {
            var a, b, c, d = this.$el, f = this.css, g = this.slide;
            a = d.slides.eq(g.current).show();
            d.slides.not(a).hide();
            b = this.getPage(a, g.current);
            d.pages.removeClass(f.page_active);
            b.addClass(f.page_active);
            d.slide_active = a;
            d.page_active = b;
            c = {$slideshow: d.slideshow, new_index: g.current, $new_slide: a, $new_page: b};
            d.slideshow.trigger("slideshow.init", c);
            e.trigger("slideshow.init", c)
        }, getSlideIndex: function (b) {
            var c = 0;
            this.$el.slides.each(function (d, e) {
                var f = a(e);
                if (b === (f.attr("id") || f.data("id"))) {
                    c = d;
                    return !1
                }
            });
            return c
        }, getPage: function (a, b) {
            var c = this.$el.pages, d = a.attr("id") || a.data("id"), e = c.filter('[href="#' + d + '"]');
            if (!e.length) {
                b = b || 0;
                e = c.eq(b)
            }
            return e
        }, clickPage: function (a) {
            a.preventDefault();
            var b = a.currentTarget, c = b.hash, d = 0;
            c ? d = this.getSlideIndex(c.substr(1)) : this.$el.pages.each(function (a, c) {
                if (b === c) {
                    d = a;
                    return !1
                }
            });
            this.gotoSlide(d)
        }, gotoFirst: function (a) {
            if (a) {
                a.preventDefault();
                a.stopPropagation()
            }
            return this.gotoSlide(0)
        }, gotoPrevious: function (a) {
            if (a) {
                a.preventDefault();
                a.stopPropagation()
            }
            return this.gotoSlide(this.slide.current - 1)
        }, gotoNext: function (a) {
            if (a) {
                a.preventDefault();
                a.stopPropagation()
            }
            return this.gotoSlide(this.slide.current + 1)
        }, gotoLast: function (a) {
            if (a) {
                a.preventDefault();
                a.stopPropagation()
            }
            return this.gotoSlide(this.slide.count - 1)
        }, gotoSlide: function (b) {
            function c() {
                j.slideshow.trigger("slideshow.changeend", i);
                e.trigger("slideshow.changeend", i)
            }

            function f() {
                j.slideshow.trigger("slideshow.changestart", i);
                e.trigger("slideshow.changestart", i);
                d[m.name](i, c)
            }

            var g, h, i, j = this.$el, k = this.css, l = this.slide, m = this.transition, n = j.slide_active, o = j.page_active;
            if (b === l.current)return j.slideshow;
            0 > b && (b = l.count - 1);
            b >= l.count && (b = 0);
            g = j.slides.eq(b);
            h = this.getPage(g, b);
            o.removeClass(k.page_active);
            h.addClass(k.page_active);
            i = {
                $slideshow: j.slideshow,
                new_index: b,
                old_index: l.current,
                $new_slide: g,
                $new_page: h,
                $old_slide: n,
                $old_page: o,
                transition: m
            };
            j.slide_active = g;
            j.page_active = h;
            l.current = b;
            this.broadcaster ? a(this.broadcaster.broadcaster).on("finished", f) : f();
            return j.slideshow
        }
    };
    d = {
        swap: function (a, b) {
            a.$new_slide.show();
            a.$old_slide.hide(0, b)
        }, fade: function (c, d) {
            if (a.browser.msie && a.browser.version < 9)this.swap(c, d); else {
                var e = c.transition, f = c.$old_slide, g = c.$new_slide;
                b.to(f, e.speed, {css: {opacity: 0, display: "none"}});
                b.fromTo(g, e.speed, {css: {opacity: 0, display: "block"}}, {
                    css: {opacity: 1, display: "block"},
                    ease: e.ease,
                    onComplete: d
                })
            }
        }, swipe: function (a, c) {
            var d = a.transition, e = a.$old_slide, f = a.$new_slide, g = a.new_index > a.old_index, h = d.use_opacity;
            b.to(e, d.speed, {css: {opacity: h ? 0 : null, left: g ? "-100%" : "100%", display: "none"}, ease: d.ease});
            b.fromTo(f, d.speed, {
                css: {
                    opacity: h ? 0 : null,
                    left: g ? "100%" : "-100%",
                    display: "block"
                }
            }, {css: {opacity: h ? 1 : null, left: 0, display: "block"}, ease: d.ease, onComplete: c})
        }, slideTop: function (a, c) {
            var d = a.transition, e = a.$old_slide, f = a.$new_slide, g = a.new_index > a.old_index;
            b.to(e, d.speed, {css: {opacity: 0, top: g ? "-100%" : "100%", display: "none"}, ease: d.ease});
            b.fromTo(f, d.speed, {css: {opacity: 0, top: g ? "100%" : "-100%", display: "block"}}, {
                css: {
                    opacity: 1,
                    top: 0,
                    display: "block"
                }, ease: d.ease, onComplete: c
            })
        }, parallax: function (a, b) {
            this.swap(a, b)
        }
    };
    a.fn.slideshow = function (b) {
        if (this.length > 1) {
            this.each(function () {
                a(this).slideshow(b)
            });
            return this
        }
        var d = a.data(this, "slideshow");
        if (d)return d;
        a.data(this, "slideshow", new c(this, b));
        return this
    }
}(jQuery, TweenMax);
!function (a) {
    "use strict";
    var b = {
        pint: /[0-9]/,
        "int": /[\d\-]/,
        pnum: /[\d\.]/,
        money: /[\d\.,]/,
        moneyru: /[\d,]/,
        num: /[\d\-\.]/,
        hex: /[0-9a-f]/i,
        email: /[a-z0-9_\.\-@]/i,
        alpha: /[a-z\s]/i,
        alphanum: /[a-z0-9\s]/i,
        cardname: /[абвгдеёжзийклмнопрстуфхцчшщъыьэюяa-z0-9\.()\s]/i,
        cardholder: /[a-z\s\-\.]/i
    }, c = {TAB: 9, RETURN: 13, ESC: 27, BACKSPACE: 8, DELETE: 46}, d = {
        63234: 37,
        63235: 39,
        63232: 38,
        63233: 40,
        63276: 33,
        63277: 34,
        63272: 46,
        63273: 36,
        63275: 35
    }, e = function (b) {
        var e = b.keyCode;
        e = a.browser.safari ? d[e] || e : e;
        return e >= 33 && 40 > e || e == c.RETURN || e == c.TAB || e == c.ESC
    }, f = function (b) {
        var c = b.keyCode;
        return 9 == c || 13 == c || 16 == c || 17 == c || c >= 18 && 20 >= c || 27 == c || 40 == c && !a.browser.opera && !b.shiftKey || a.browser.opera && !b.shiftKey && (c >= 33 && 35 >= c || c >= 36 && 39 >= c)
    }, g = function (b) {
        var c = b.keyCode || b.charCode;
        return a.browser.safari ? d[c] || c : c
    }, h = function (a) {
        return a.charCode || a.keyCode || a.which
    };
    a.fn.keyfilter = function (d) {
        a(this).data("keyfilter", d);
        return this.keypress(function (i) {
            if (!i.ctrlKey && !i.altKey) {
                var j = g(i);
                if (!a.browser.mozilla || !(e(i) || j == c.BACKSPACE || j == c.DELETE && 0 == i.charCode)) {
                    var k = h(i), l = String.fromCharCode(k), m = !0;
                    if (a.browser.mozilla || !f(i) && l) {
                        m = a.isFunction(d) ? d.call(this, l) : "string" == typeof d && d in a.fn.keyfilter.defaults.masks ? b[d].test(l) : d.test(l);
                        m || j === c.BACKSPACE || i.preventDefault()
                    } else i.preventDefault()
                }
            }
        })
    };
    a.extend(a.fn.keyfilter, {defaults: {masks: b}, version: 1.7})
}(jQuery);
var TCS = TCS || {};
!function (a, b) {
    "use strict";
    function c(a, b, c, d, e, f, g) {
        var h = a + (b & c | ~b & d) + e + g;
        return (h << f | h >>> 32 - f) + b
    }

    function d(a, b, c, d, e, f, g) {
        var h = a + (b & d | c & ~d) + e + g;
        return (h << f | h >>> 32 - f) + b
    }

    function e(a, b, c, d, e, f, g) {
        var h = a + (b ^ c ^ d) + e + g;
        return (h << f | h >>> 32 - f) + b
    }

    function f(a, b, c, d, e, f, g) {
        var h = a + (c ^ (b | ~d)) + e + g;
        return (h << f | h >>> 32 - f) + b
    }

    var g = b || {}, h = g.lib = {}, i = h.Base = function () {
        function a() {
        }

        return {
            extend: function (b) {
                a.prototype = this;
                var c = new a;
                b && c.mixIn(b);
                c.$super = this;
                return c
            }, create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            }, init: function () {
            }, mixIn: function (a) {
                for (var b in a)a.hasOwnProperty(b) && (this[b] = a[b]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            }, clone: function () {
                return this.$super.extend(this)
            }
        }
    }(), j = h.WordArray = i.extend({
        init: function (a, b) {
            a = this.words = a || [];
            this.sigBytes = void 0 != b ? b : 4 * a.length
        }, toString: function (a) {
            return (a || l).stringify(this)
        }, concat: function (a) {
            var b = this.words, c = a.words, d = this.sigBytes, e = a.sigBytes;
            this.clamp();
            if (d % 4)for (var f = 0; e > f; f++) {
                var g = c[f >>> 2] >>> 24 - f % 4 * 8 & 255;
                b[d + f >>> 2] |= g << 24 - (d + f) % 4 * 8
            } else if (c.length > 65535)for (var f = 0; e > f; f += 4)b[d + f >>> 2] = c[f >>> 2]; else b.push.apply(b, c);
            this.sigBytes += e;
            return this
        }, clamp: function () {
            var b = this.words, c = this.sigBytes;
            b[c >>> 2] &= 4294967295 << 32 - c % 4 * 8;
            b.length = a.ceil(c / 4)
        }, clone: function () {
            var a = i.clone.call(this);
            a.words = this.words.slice(0);
            return a
        }, random: function (b) {
            for (var c = [], d = 0; b > d; d += 4)c.push(4294967296 * a.random() | 0);
            return j.create(c, b)
        }
    }), k = g.enc = {}, l = k.Hex = {
        stringify: function (a) {
            for (var b = a.words, c = a.sigBytes, d = [], e = 0; c > e; e++) {
                var f = b[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                d.push((f >>> 4).toString(16));
                d.push((15 & f).toString(16))
            }
            return d.join("")
        }, parse: function (a) {
            for (var b = a.length, c = [], d = 0; b > d; d += 2)c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - d % 8 * 4;
            return j.create(c, b / 2)
        }
    }, m = k.Latin1 = {
        stringify: function (a) {
            for (var b = a.words, c = a.sigBytes, d = [], e = 0; c > e; e++) {
                var f = b[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                d.push(String.fromCharCode(f))
            }
            return d.join("")
        }, parse: function (a) {
            for (var b = a.length, c = [], d = 0; b > d; d++)c[d >>> 2] |= (255 & a.charCodeAt(d)) << 24 - d % 4 * 8;
            return j.create(c, b)
        }
    }, n = k.Utf8 = {
        stringify: function (a) {
            try {
                return decodeURIComponent(escape(m.stringify(a)))
            } catch (b) {
                throw new Error("Malformed UTF-8 data")
            }
        }, parse: function (a) {
            return m.parse(unescape(encodeURIComponent(a)))
        }
    }, o = h.BufferedBlockAlgorithm = i.extend({
        reset: function () {
            this._data = j.create();
            this._nDataBytes = 0
        }, _append: function (a) {
            "string" == typeof a && (a = n.parse(a));
            this._data.concat(a);
            this._nDataBytes += a.sigBytes
        }, _process: function (b) {
            var c = this._data, d = c.words, e = c.sigBytes, f = this.blockSize, g = 4 * f, h = e / g;
            h = b ? a.ceil(h) : a.max((0 | h) - this._minBufferSize, 0);
            var i = h * f, k = a.min(4 * i, e);
            if (i) {
                for (var l = 0; i > l; l += f)this._doProcessBlock(d, l);
                var m = d.splice(0, i);
                c.sigBytes -= k
            }
            return j.create(m, k)
        }, clone: function () {
            var a = i.clone.call(this);
            a._data = this._data.clone();
            return a
        }, _minBufferSize: 0
    }), p = h.Hasher = o.extend({
        init: function () {
            this.reset()
        }, reset: function () {
            o.reset.call(this);
            this._doReset()
        }, update: function (a) {
            this._append(a);
            this._process();
            return this
        }, finalize: function (a) {
            a && this._append(a);
            this._doFinalize();
            return this._hash
        }, clone: function () {
            var a = o.clone.call(this);
            a._hash = this._hash.clone();
            return a
        }, blockSize: 16, _createHelper: function (a) {
            return function (b, c) {
                return a.create(c).finalize(b)
            }
        }, _createHmacHelper: function (a) {
            return function (b, c) {
                return C_algo.HMAC.create(a, c).finalize(b)
            }
        }
    }), q = [];
    !function () {
        for (var b = 0; 64 > b; b++)q[b] = 4294967296 * a.abs(a.sin(b + 1)) | 0
    }();
    var r = b.MD5 = p.extend({
        _doReset: function () {
            this._hash = j.create([1732584193, 4023233417, 2562383102, 271733878])
        }, _doProcessBlock: function (a, b) {
            for (var g = 0; 16 > g; g++) {
                var h = b + g, i = a[h];
                a[h] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
            }
            for (var j = this._hash.words, k = j[0], l = j[1], m = j[2], n = j[3], g = 0; 64 > g; g += 4)if (16 > g) {
                k = c(k, l, m, n, a[b + g], 7, q[g]);
                n = c(n, k, l, m, a[b + g + 1], 12, q[g + 1]);
                m = c(m, n, k, l, a[b + g + 2], 17, q[g + 2]);
                l = c(l, m, n, k, a[b + g + 3], 22, q[g + 3])
            } else if (32 > g) {
                k = d(k, l, m, n, a[b + (g + 1) % 16], 5, q[g]);
                n = d(n, k, l, m, a[b + (g + 6) % 16], 9, q[g + 1]);
                m = d(m, n, k, l, a[b + (g + 11) % 16], 14, q[g + 2]);
                l = d(l, m, n, k, a[b + g % 16], 20, q[g + 3])
            } else if (48 > g) {
                k = e(k, l, m, n, a[b + (3 * g + 5) % 16], 4, q[g]);
                n = e(n, k, l, m, a[b + (3 * g + 8) % 16], 11, q[g + 1]);
                m = e(m, n, k, l, a[b + (3 * g + 11) % 16], 16, q[g + 2]);
                l = e(l, m, n, k, a[b + (3 * g + 14) % 16], 23, q[g + 3])
            } else {
                k = f(k, l, m, n, a[b + 3 * g % 16], 6, q[g]);
                n = f(n, k, l, m, a[b + (3 * g + 7) % 16], 10, q[g + 1]);
                m = f(m, n, k, l, a[b + (3 * g + 14) % 16], 15, q[g + 2]);
                l = f(l, m, n, k, a[b + (3 * g + 5) % 16], 21, q[g + 3])
            }
            j[0] = j[0] + k | 0;
            j[1] = j[1] + l | 0;
            j[2] = j[2] + m | 0;
            j[3] = j[3] + n | 0
        }, _doFinalize: function () {
            var a = this._data, b = a.words, c = 8 * this._nDataBytes, d = 8 * a.sigBytes;
            b[d >>> 5] |= 128 << 24 - d % 32;
            b[(d + 64 >>> 9 << 4) + 14] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
            a.sigBytes = 4 * (b.length + 1);
            this._process();
            for (var e = this._hash.words, f = 0; 4 > f; f++) {
                var g = e[f];
                e[f] = 16711935 & (g << 8 | g >>> 24) | 4278255360 & (g << 24 | g >>> 8)
            }
        }
    });
    g.MD5 = p._createHelper(r);
    g.HmacMD5 = p._createHmacHelper(r)
}(Math, TCS);
!function (a) {
    a.fingerprint = function () {
        return [navigator.userAgent.replace(/;|::/g, ""), [screen.height, screen.width, screen.colorDepth].join("x"), (new Date).getTimezoneOffset(), !!window.sessionStorage, !!window.localStorage, a.map(navigator.plugins, function (b) {
            return [b.name.replace(/;|::/g, ""), b.description.replace(/;|::/g, ""), a.map(b, function (a) {
                return [a.type, a.suffixes].join("~").replace(/;|::/g, "")
            }).join(",")].join("::")
        }).join(";")].join("###")
    }
}(jQuery);
Date.CultureInfo = {
    name: "ru-RU",
    englishName: "Russian (Russia)",
    nativeName: "русский (Россия)",
    dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    abbreviatedDayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    shortestDayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    firstLetterDayNames: ["В", "П", "В", "С", "Ч", "П", "С"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    abbreviatedMonthNames: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
    amDesignator: "",
    pmDesignator: "",
    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    dateElementOrder: "dmy",
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "d MMMM yyyy 'г.'",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d MMMM yyyy 'г.' H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy 'г.'"
    },
    regexPatterns: {
        jan: /^янв(арь)?/i,
        feb: /^фев(раль)?/i,
        mar: /^мар(т)?/i,
        apr: /^апр(ель)?/i,
        may: /^май/i,
        jun: /^июн(ь)?/i,
        jul: /^июл(ь)?/i,
        aug: /^авг(уст)?/i,
        sep: /^сен(тябрь)?/i,
        oct: /^окт(ябрь)?/i,
        nov: /^ноя(брь)?/i,
        dec: /^дек(абрь)?/i,
        sun: /^воскресенье/i,
        mon: /^понедельник/i,
        tue: /^вторник/i,
        wed: /^среда/i,
        thu: /^четверг/i,
        fri: /^пятница/i,
        sat: /^суббота/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },
    abbreviatedTimeZoneStandard: {GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700"},
    abbreviatedTimeZoneDST: {GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800"}
};
Date.getMonthNumberFromName = function (a) {
    for (var b = Date.CultureInfo.monthNames, c = Date.CultureInfo.abbreviatedMonthNames, d = a.toLowerCase(), e = 0; e < b.length; e++)if (b[e].toLowerCase() == d || c[e].toLowerCase() == d)return e;
    return -1
};
Date.getDayNumberFromName = function (a) {
    for (var b = Date.CultureInfo.dayNames, c = Date.CultureInfo.abbreviatedDayNames, d = (Date.CultureInfo.shortestDayNames, a.toLowerCase()), e = 0; e < b.length; e++)if (b[e].toLowerCase() == d || c[e].toLowerCase() == d)return e;
    return -1
};
Date.isLeapYear = function (a) {
    return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
};
Date.getDaysInMonth = function (a, b) {
    return [31, Date.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
};
Date.getTimezoneOffset = function (a, b) {
    return b ? Date.CultureInfo.abbreviatedTimeZoneDST[a.toUpperCase()] : Date.CultureInfo.abbreviatedTimeZoneStandard[a.toUpperCase()]
};
Date.getTimezoneAbbreviation = function (a, b) {
    var c, d = b ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard;
    for (c in d)if (d[c] === a)return c;
    return null
};
Date.prototype.clone = function () {
    return new Date(this.getTime())
};
Date.prototype.compareTo = function (a) {
    if (isNaN(this))throw new Error(this);
    if (a instanceof Date && !isNaN(a))return this > a ? 1 : a > this ? -1 : 0;
    throw new TypeError(a)
};
Date.prototype.equals = function (a) {
    return 0 === this.compareTo(a)
};
Date.prototype.between = function (a, b) {
    var c = this.getTime();
    return c >= a.getTime() && c <= b.getTime()
};
Date.prototype.addMilliseconds = function (a) {
    this.setMilliseconds(this.getMilliseconds() + a);
    return this
};
Date.prototype.addSeconds = function (a) {
    return this.addMilliseconds(1e3 * a)
};
Date.prototype.addMinutes = function (a) {
    return this.addMilliseconds(6e4 * a)
};
Date.prototype.addHours = function (a) {
    return this.addMilliseconds(36e5 * a)
};
Date.prototype.addDays = function (a) {
    return this.addMilliseconds(864e5 * a)
};
Date.prototype.addWeeks = function (a) {
    return this.addMilliseconds(6048e5 * a)
};
Date.prototype.addMonths = function (a) {
    var b = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + a);
    this.setDate(Math.min(b, this.getDaysInMonth()));
    return this
};
Date.prototype.addYears = function (a) {
    return this.addMonths(12 * a)
};
Date.prototype.add = function (a) {
    if ("number" == typeof a) {
        this._orient = a;
        return this
    }
    var b = a;
    (b.millisecond || b.milliseconds) && this.addMilliseconds(b.millisecond || b.milliseconds);
    (b.second || b.seconds) && this.addSeconds(b.second || b.seconds);
    (b.minute || b.minutes) && this.addMinutes(b.minute || b.minutes);
    (b.hour || b.hours) && this.addHours(b.hour || b.hours);
    (b.month || b.months) && this.addMonths(b.month || b.months);
    (b.year || b.years) && this.addYears(b.year || b.years);
    (b.day || b.days) && this.addDays(b.day || b.days);
    return this
};
Date._validate = function (a, b, c, d) {
    if ("number" != typeof a)throw new TypeError(a + " is not a Number.");
    if (b > a || a > c)throw new RangeError(a + " is not a valid value for " + d + ".");
    return !0
};
Date.validateMillisecond = function (a) {
    return Date._validate(a, 0, 999, "milliseconds")
};
Date.validateSecond = function (a) {
    return Date._validate(a, 0, 59, "seconds")
};
Date.validateMinute = function (a) {
    return Date._validate(a, 0, 59, "minutes")
};
Date.validateHour = function (a) {
    return Date._validate(a, 0, 23, "hours")
};
Date.validateDay = function (a, b, c) {
    return Date._validate(a, 1, Date.getDaysInMonth(b, c), "days")
};
Date.validateMonth = function (a) {
    return Date._validate(a, 0, 11, "months")
};
Date.validateYear = function (a) {
    return Date._validate(a, 1, 9999, "seconds")
};
Date.prototype.set = function (a) {
    var b = a;
    b.millisecond || 0 === b.millisecond || (b.millisecond = -1);
    b.second || 0 === b.second || (b.second = -1);
    b.minute || 0 === b.minute || (b.minute = -1);
    b.hour || 0 === b.hour || (b.hour = -1);
    b.day || 0 === b.day || (b.day = -1);
    b.month || 0 === b.month || (b.month = -1);
    b.year || 0 === b.year || (b.year = -1);
    -1 != b.millisecond && Date.validateMillisecond(b.millisecond) && this.addMilliseconds(b.millisecond - this.getMilliseconds());
    -1 != b.second && Date.validateSecond(b.second) && this.addSeconds(b.second - this.getSeconds());
    -1 != b.minute && Date.validateMinute(b.minute) && this.addMinutes(b.minute - this.getMinutes());
    -1 != b.hour && Date.validateHour(b.hour) && this.addHours(b.hour - this.getHours());
    -1 !== b.month && Date.validateMonth(b.month) && this.addMonths(b.month - this.getMonth());
    -1 != b.year && Date.validateYear(b.year) && this.addYears(b.year - this.getFullYear());
    -1 != b.day && Date.validateDay(b.day, this.getFullYear(), this.getMonth()) && this.addDays(b.day - this.getDate());
    b.timezone && this.setTimezone(b.timezone);
    b.timezoneOffset && this.setTimezoneOffset(b.timezoneOffset);
    return this
};
Date.prototype.clearTime = function () {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this
};
Date.prototype.isLeapYear = function () {
    var a = this.getFullYear();
    return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
};
Date.prototype.isWeekday = function () {
    return !(this.is().sat() || this.is().sun())
};
Date.prototype.getDaysInMonth = function () {
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth())
};
Date.prototype.moveToFirstDayOfMonth = function () {
    return this.set({day: 1})
};
Date.prototype.moveToLastDayOfMonth = function () {
    return this.set({day: this.getDaysInMonth()})
};
Date.prototype.moveToDayOfWeek = function (a, b) {
    var c = (a - this.getDay() + 7 * (b || 1)) % 7;
    return this.addDays(0 === c ? c += 7 * (b || 1) : c)
};
Date.prototype.moveToMonth = function (a, b) {
    var c = (a - this.getMonth() + 12 * (b || 1)) % 12;
    return this.addMonths(0 === c ? c += 12 * (b || 1) : c)
};
Date.prototype.getDayOfYear = function () {
    return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 864e5)
};
Date.prototype.getWeekOfYear = function (a) {
    var b = this.getFullYear(), c = this.getMonth(), d = this.getDate(), e = a || Date.CultureInfo.firstDayOfWeek, f = 8 - new Date(b, 0, 1).getDay();
    8 == f && (f = 1);
    var g = (Date.UTC(b, c, d, 0, 0, 0) - Date.UTC(b, 0, 1, 0, 0, 0)) / 864e5 + 1, h = Math.floor((g - f + 7) / 7);
    if (h === e) {
        b--;
        var i = 8 - new Date(b, 0, 1).getDay();
        h = 2 == i || 8 == i ? 53 : 52
    }
    return h
};
Date.prototype.isDST = function () {
    console.log("isDST");
    return "D" == this.toString().match(/(E|C|M|P)(S|D)T/)[2]
};
Date.prototype.getTimezone = function () {
    return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST())
};
Date.prototype.setTimezoneOffset = function (a) {
    var b = this.getTimezoneOffset(), c = -6 * Number(a) / 10;
    this.addMinutes(c - b);
    return this
};
Date.prototype.setTimezone = function (a) {
    return this.setTimezoneOffset(Date.getTimezoneOffset(a))
};
Date.prototype.getUTCOffset = function () {
    var a, b = -10 * this.getTimezoneOffset() / 6;
    if (0 > b) {
        a = (b - 1e4).toString();
        return a[0] + a.substr(2)
    }
    a = (b + 1e4).toString();
    return "+" + a.substr(1)
};
Date.prototype.getDayName = function (a) {
    return a ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] : Date.CultureInfo.dayNames[this.getDay()]
};
Date.prototype.getMonthName = function (a) {
    return a ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] : Date.CultureInfo.monthNames[this.getMonth()]
};
Date.prototype._toString = Date.prototype.toString;
Date.prototype.toString = function (a) {
    var b = this, c = function (a) {
        return 1 == a.toString().length ? "0" + a : a
    };
    return a ? a.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g, function (a) {
        switch (a) {
            case"hh":
                return c(b.getHours() < 13 ? b.getHours() : b.getHours() - 12);
            case"h":
                return b.getHours() < 13 ? b.getHours() : b.getHours() - 12;
            case"HH":
                return c(b.getHours());
            case"H":
                return b.getHours();
            case"mm":
                return c(b.getMinutes());
            case"m":
                return b.getMinutes();
            case"ss":
                return c(b.getSeconds());
            case"s":
                return b.getSeconds();
            case"yyyy":
                return b.getFullYear();
            case"yy":
                return b.getFullYear().toString().substring(2, 4);
            case"dddd":
                return b.getDayName();
            case"ddd":
                return b.getDayName(!0);
            case"dd":
                return c(b.getDate());
            case"d":
                return b.getDate().toString();
            case"MMMM":
                return b.getMonthName();
            case"MMM":
                return b.getMonthName(!0);
            case"MM":
                return c(b.getMonth() + 1);
            case"M":
                return b.getMonth() + 1;
            case"t":
                return b.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
            case"tt":
                return b.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
            case"zzz":
            case"zz":
            case"z":
                return ""
        }
    }) : this._toString()
};
Date.now = function () {
    return new Date
};
Date.today = function () {
    return Date.now().clearTime()
};
Date.prototype._orient = 1;
Date.prototype.next = function () {
    this._orient = 1;
    return this
};
Date.prototype.last = Date.prototype.prev = Date.prototype.previous = function () {
    this._orient = -1;
    return this
};
Date.prototype._is = !1;
Date.prototype.is = function () {
    this._is = !0;
    return this
};
Number.prototype._dateElement = "day";
Number.prototype.fromNow = function () {
    var a = {};
    a[this._dateElement] = this;
    return Date.now().add(a)
};
Number.prototype.ago = function () {
    var a = {};
    a[this._dateElement] = -1 * this;
    return Date.now().add(a)
};
!function () {
    for (var a, b = Date.prototype, c = Number.prototype, d = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/), e = "january february march april may june july august september october november december".split(/\s/), f = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/), g = function (a) {
        return function () {
            if (this._is) {
                this._is = !1;
                return this.getDay() == a
            }
            return this.moveToDayOfWeek(a, this._orient)
        }
    }, h = 0; h < d.length; h++)b[d[h]] = b[d[h].substring(0, 3)] = g(h);
    for (var i = function (a) {
        return function () {
            if (this._is) {
                this._is = !1;
                return this.getMonth() === a
            }
            return this.moveToMonth(a, this._orient)
        }
    }, j = 0; j < e.length; j++)b[e[j]] = b[e[j].substring(0, 3)] = i(j);
    for (var k = function (a) {
        return function () {
            "s" != a.substring(a.length - 1) && (a += "s");
            return this["add" + a](this._orient)
        }
    }, l = function (a) {
        return function () {
            this._dateElement = a;
            return this
        }
    }, m = 0; m < f.length; m++) {
        a = f[m].toLowerCase();
        b[a] = b[a + "s"] = k(f[m]);
        c[a] = c[a + "s"] = l(a)
    }
}();
Date.prototype.toJSONString = function () {
    return this.toString("yyyy-MM-ddThh:mm:ssZ")
};
Date.prototype.toShortDateString = function () {
    return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern)
};
Date.prototype.toLongDateString = function () {
    return this.toString(Date.CultureInfo.formatPatterns.longDatePattern)
};
Date.prototype.toShortTimeString = function () {
    return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern)
};
Date.prototype.toLongTimeString = function () {
    return this.toString(Date.CultureInfo.formatPatterns.longTimePattern)
};
Date.prototype.getOrdinal = function () {
    switch (this.getDate()) {
        case 1:
        case 21:
        case 31:
            return "st";
        case 2:
        case 22:
            return "nd";
        case 3:
        case 23:
            return "rd";
        default:
            return "th"
    }
};
!function () {
    Date.Parsing = {
        Exception: function (a) {
            this.message = "Parse error at '" + a.substring(0, 10) + " ...'"
        }
    };
    for (var a = Date.Parsing, b = a.Operators = {
        rtoken: function (b) {
            return function (c) {
                var d = c.match(b);
                if (d)return [d[0], c.substring(d[0].length)];
                throw new a.Exception(c)
            }
        }, token: function () {
            return function (a) {
                return b.rtoken(new RegExp("^s*" + a + "s*"))(a)
            }
        }, stoken: function (a) {
            return b.rtoken(new RegExp("^" + a))
        }, until: function (a) {
            return function (b) {
                for (var c = [], d = null; b.length;) {
                    try {
                        d = a.call(this, b)
                    } catch (e) {
                        c.push(d[0]);
                        b = d[1];
                        continue
                    }
                    break
                }
                return [c, b]
            }
        }, many: function (a) {
            return function (b) {
                for (var c = [], d = null; b.length;) {
                    try {
                        d = a.call(this, b)
                    } catch (e) {
                        return [c, b]
                    }
                    c.push(d[0]);
                    b = d[1]
                }
                return [c, b]
            }
        }, optional: function (a) {
            return function (b) {
                var c = null;
                try {
                    c = a.call(this, b)
                } catch (d) {
                    return [null, b]
                }
                return [c[0], c[1]]
            }
        }, not: function (b) {
            return function (c) {
                try {
                    b.call(this, c)
                } catch (d) {
                    return [null, c]
                }
                throw new a.Exception(c)
            }
        }, ignore: function (a) {
            return a ? function (b) {
                var c = null;
                c = a.call(this, b);
                return [null, c[1]]
            } : null
        }, product: function () {
            for (var a = arguments[0], c = Array.prototype.slice.call(arguments, 1), d = [], e = 0; e < a.length; e++)d.push(b.each(a[e], c));
            return d
        }, cache: function (b) {
            var c = {}, d = null;
            return function (e) {
                try {
                    d = c[e] = c[e] || b.call(this, e)
                } catch (f) {
                    d = c[e] = f
                }
                if (d instanceof a.Exception)throw d;
                return d
            }
        }, any: function () {
            var b = arguments;
            return function (c) {
                for (var d = null, e = 0; e < b.length; e++)if (null != b[e]) {
                    try {
                        d = b[e].call(this, c)
                    } catch (f) {
                        d = null
                    }
                    if (d)return d
                }
                throw new a.Exception(c)
            }
        }, each: function () {
            var b = arguments;
            return function (c) {
                for (var d = [], e = null, f = 0; f < b.length; f++)if (null != b[f]) {
                    try {
                        e = b[f].call(this, c)
                    } catch (g) {
                        throw new a.Exception(c)
                    }
                    d.push(e[0]);
                    c = e[1]
                }
                return [d, c]
            }
        }, all: function () {
            var a = arguments, b = b;
            return b.each(b.optional(a))
        }, sequence: function (c, d, e) {
            d = d || b.rtoken(/^\s*/);
            e = e || null;
            return 1 == c.length ? c[0] : function (b) {
                for (var f = null, g = null, h = [], i = 0; i < c.length; i++) {
                    try {
                        f = c[i].call(this, b)
                    } catch (j) {
                        break
                    }
                    h.push(f[0]);
                    try {
                        g = d.call(this, f[1])
                    } catch (k) {
                        g = null;
                        break
                    }
                    b = g[1]
                }
                if (!f)throw new a.Exception(b);
                if (g)throw new a.Exception(g[1]);
                if (e)try {
                    f = e.call(this, f[1])
                } catch (l) {
                    throw new a.Exception(f[1])
                }
                return [h, f ? f[1] : b]
            }
        }, between: function (a, c, d) {
            d = d || a;
            var e = b.each(b.ignore(a), c, b.ignore(d));
            return function (a) {
                var b = e.call(this, a);
                return [[b[0][0], r[0][2]], b[1]]
            }
        }, list: function (a, c, d) {
            c = c || b.rtoken(/^\s*/);
            d = d || null;
            return a instanceof Array ? b.each(b.product(a.slice(0, -1), b.ignore(c)), a.slice(-1), b.ignore(d)) : b.each(b.many(b.each(a, b.ignore(c))), px, b.ignore(d))
        }, set: function (c, d, e) {
            d = d || b.rtoken(/^\s*/);
            e = e || null;
            return function (f) {
                for (var g = null, h = null, i = null, j = null, k = [[], f], l = !1, m = 0; m < c.length; m++) {
                    i = null;
                    h = null;
                    g = null;
                    l = 1 == c.length;
                    try {
                        g = c[m].call(this, f)
                    } catch (n) {
                        continue
                    }
                    j = [[g[0]], g[1]];
                    if (g[1].length > 0 && !l)try {
                        i = d.call(this, g[1])
                    } catch (o) {
                        l = !0
                    } else l = !0;
                    l || 0 !== i[1].length || (l = !0);
                    if (!l) {
                        for (var p = [], q = 0; q < c.length; q++)m != q && p.push(c[q]);
                        h = b.set(p, d).call(this, i[1]);
                        if (h[0].length > 0) {
                            j[0] = j[0].concat(h[0]);
                            j[1] = h[1]
                        }
                    }
                    j[1].length < k[1].length && (k = j);
                    if (0 === k[1].length)break
                }
                if (0 === k[0].length)return k;
                if (e) {
                    try {
                        i = e.call(this, k[1])
                    } catch (r) {
                        throw new a.Exception(k[1])
                    }
                    k[1] = i[1]
                }
                return k
            }
        }, forward: function (a, b) {
            return function (c) {
                return a[b].call(this, c)
            }
        }, replace: function (a, b) {
            return function (c) {
                var d = a.call(this, c);
                return [b, d[1]]
            }
        }, process: function (a, b) {
            return function (c) {
                var d = a.call(this, c);
                return [b.call(this, d[0]), d[1]]
            }
        }, min: function (b, c) {
            return function (d) {
                var e = c.call(this, d);
                if (e[0].length < b)throw new a.Exception(d);
                return e
            }
        }
    }, c = function (a) {
        return function () {
            var b = null, c = [];
            arguments.length > 1 ? b = Array.prototype.slice.call(arguments) : arguments[0]instanceof Array && (b = arguments[0]);
            if (!b)return a.apply(null, arguments);
            for (var d = 0, e = b.shift(); d < e.length; d++) {
                b.unshift(e[d]);
                c.push(a.apply(null, b));
                b.shift();
                return c
            }
        }
    }, d = "optional not ignore cache".split(/\s/), e = 0; e < d.length; e++)b[d[e]] = c(b[d[e]]);
    for (var f = function (a) {
        return function () {
            return arguments[0]instanceof Array ? a.apply(null, arguments[0]) : a.apply(null, arguments)
        }
    }, g = "each any all".split(/\s/), h = 0; h < g.length; h++)b[g[h]] = f(b[g[h]])
}();
!function () {
    var a = function (b) {
        for (var c = [], d = 0; d < b.length; d++)b[d]instanceof Array ? c = c.concat(a(b[d])) : b[d] && c.push(b[d]);
        return c
    };
    Date.Grammar = {};
    Date.Translator = {
        hour: function (a) {
            return function () {
                this.hour = Number(a)
            }
        }, minute: function (a) {
            return function () {
                this.minute = Number(a)
            }
        }, second: function (a) {
            return function () {
                this.second = Number(a)
            }
        }, meridian: function (a) {
            return function () {
                this.meridian = a.slice(0, 1).toLowerCase()
            }
        }, timezone: function (a) {
            return function () {
                var b = a.replace(/[^\d\+\-]/g, "");
                b.length ? this.timezoneOffset = Number(b) : this.timezone = a.toLowerCase()
            }
        }, day: function (a) {
            var b = a[0];
            return function () {
                this.day = Number(b.match(/\d+/)[0])
            }
        }, month: function (a) {
            return function () {
                this.month = 3 == a.length ? Date.getMonthNumberFromName(a) : Number(a) - 1
            }
        }, year: function (a) {
            return function () {
                var b = Number(a);
                this.year = a.length > 2 ? b : b + (b + 2e3 < Date.CultureInfo.twoDigitYearMax ? 2e3 : 1900)
            }
        }, rday: function (a) {
            return function () {
                switch (a) {
                    case"yesterday":
                        this.days = -1;
                        break;
                    case"tomorrow":
                        this.days = 1;
                        break;
                    case"today":
                        this.days = 0;
                        break;
                    case"now":
                        this.days = 0;
                        this.now = !0
                }
            }
        }, finishExact: function (a) {
            a = a instanceof Array ? a : [a];
            var b = new Date;
            this.year = b.getFullYear();
            this.month = b.getMonth();
            this.day = 1;
            this.hour = 0;
            this.minute = 0;
            this.second = 0;
            for (var c = 0; c < a.length; c++)a[c] && a[c].call(this);
            this.hour = "p" == this.meridian && this.hour < 13 ? this.hour + 12 : this.hour;
            if (this.day > Date.getDaysInMonth(this.year, this.month))throw new RangeError(this.day + " is not a valid value for days.");
            var d = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);
            this.timezone ? d.set({timezone: this.timezone}) : this.timezoneOffset && d.set({timezoneOffset: this.timezoneOffset});
            return d
        }, finish: function (b) {
            b = b instanceof Array ? a(b) : [b];
            if (0 === b.length)return null;
            for (var c = 0; c < b.length; c++)"function" == typeof b[c] && b[c].call(this);
            if (this.now)return new Date;
            var d = Date.today(), e = !(null == this.days && !this.orient && !this.operator);
            if (e) {
                var f, g, h;
                h = "past" == this.orient || "subtract" == this.operator ? -1 : 1;
                if (this.weekday) {
                    this.unit = "day";
                    f = Date.getDayNumberFromName(this.weekday) - d.getDay();
                    g = 7;
                    this.days = f ? (f + h * g) % g : h * g
                }
                if (this.month) {
                    this.unit = "month";
                    f = this.month - d.getMonth();
                    g = 12;
                    this.months = f ? (f + h * g) % g : h * g;
                    this.month = null
                }
                this.unit || (this.unit = "day");
                if (null == this[this.unit + "s"] || null != this.operator) {
                    this.value || (this.value = 1);
                    if ("week" == this.unit) {
                        this.unit = "day";
                        this.value = 7 * this.value
                    }
                    this[this.unit + "s"] = this.value * h
                }
                return d.add(this)
            }
            this.meridian && this.hour && (this.hour = this.hour < 13 && "p" == this.meridian ? this.hour + 12 : this.hour);
            this.weekday && !this.day && (this.day = d.addDays(Date.getDayNumberFromName(this.weekday) - d.getDay()).getDate());
            this.month && !this.day && (this.day = 1);
            return d.set(this)
        }
    };
    var b, c = Date.Parsing.Operators, d = Date.Grammar, e = Date.Translator;
    d.datePartDelimiter = c.rtoken(/^([\s\-\.\,\/\x27]+)/);
    d.timePartDelimiter = c.stoken(":");
    d.whiteSpace = c.rtoken(/^\s*/);
    d.generalDelimiter = c.rtoken(/^(([\s\,]|at|on)+)/);
    var f = {};
    d.ctoken = function (a) {
        var b = f[a];
        if (!b) {
            for (var d = Date.CultureInfo.regexPatterns, e = a.split(/\s+/), g = [], h = 0; h < e.length; h++)g.push(c.replace(c.rtoken(d[e[h]]), e[h]));
            b = f[a] = c.any.apply(null, g)
        }
        return b
    };
    d.ctoken2 = function (a) {
        return c.rtoken(Date.CultureInfo.regexPatterns[a])
    };
    d.h = c.cache(c.process(c.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), e.hour));
    d.hh = c.cache(c.process(c.rtoken(/^(0[0-9]|1[0-2])/), e.hour));
    d.H = c.cache(c.process(c.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), e.hour));
    d.HH = c.cache(c.process(c.rtoken(/^([0-1][0-9]|2[0-3])/), e.hour));
    d.m = c.cache(c.process(c.rtoken(/^([0-5][0-9]|[0-9])/), e.minute));
    d.mm = c.cache(c.process(c.rtoken(/^[0-5][0-9]/), e.minute));
    d.s = c.cache(c.process(c.rtoken(/^([0-5][0-9]|[0-9])/), e.second));
    d.ss = c.cache(c.process(c.rtoken(/^[0-5][0-9]/), e.second));
    d.hms = c.cache(c.sequence([d.H, d.mm, d.ss], d.timePartDelimiter));
    d.t = c.cache(c.process(d.ctoken2("shortMeridian"), e.meridian));
    d.tt = c.cache(c.process(d.ctoken2("longMeridian"), e.meridian));
    d.z = c.cache(c.process(c.rtoken(/^(\+|\-)?\s*\d\d\d\d?/), e.timezone));
    d.zz = c.cache(c.process(c.rtoken(/^(\+|\-)\s*\d\d\d\d/), e.timezone));
    d.zzz = c.cache(c.process(d.ctoken2("timezone"), e.timezone));
    d.timeSuffix = c.each(c.ignore(d.whiteSpace), c.set([d.tt, d.zzz]));
    d.time = c.each(c.optional(c.ignore(c.stoken("T"))), d.hms, d.timeSuffix);
    d.d = c.cache(c.process(c.each(c.rtoken(/^([0-2]\d|3[0-1]|\d)/), c.optional(d.ctoken2("ordinalSuffix"))), e.day));
    d.dd = c.cache(c.process(c.each(c.rtoken(/^([0-2]\d|3[0-1])/), c.optional(d.ctoken2("ordinalSuffix"))), e.day));
    d.ddd = d.dddd = c.cache(c.process(d.ctoken("sun mon tue wed thu fri sat"), function (a) {
        return function () {
            this.weekday = a
        }
    }));
    d.M = c.cache(c.process(c.rtoken(/^(1[0-2]|0\d|\d)/), e.month));
    d.MM = c.cache(c.process(c.rtoken(/^(1[0-2]|0\d)/), e.month));
    d.MMM = d.MMMM = c.cache(c.process(d.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), e.month));
    d.y = c.cache(c.process(c.rtoken(/^(\d\d?)/), e.year));
    d.yy = c.cache(c.process(c.rtoken(/^(\d\d)/), e.year));
    d.yyy = c.cache(c.process(c.rtoken(/^(\d\d?\d?\d?)/), e.year));
    d.yyyy = c.cache(c.process(c.rtoken(/^(\d\d\d\d)/), e.year));
    b = function () {
        return c.each(c.any.apply(null, arguments), c.not(d.ctoken2("timeContext")))
    };
    d.day = b(d.d, d.dd);
    d.month = b(d.M, d.MMM);
    d.year = b(d.yyyy, d.yy);
    d.orientation = c.process(d.ctoken("past future"), function (a) {
        return function () {
            this.orient = a
        }
    });
    d.operator = c.process(d.ctoken("add subtract"), function (a) {
        return function () {
            this.operator = a
        }
    });
    d.rday = c.process(d.ctoken("yesterday tomorrow today now"), e.rday);
    d.unit = c.process(d.ctoken("minute hour day week month year"), function (a) {
        return function () {
            this.unit = a
        }
    });
    d.value = c.process(c.rtoken(/^\d\d?(st|nd|rd|th)?/), function (a) {
        return function () {
            this.value = a.replace(/\D/g, "")
        }
    });
    d.expression = c.set([d.rday, d.operator, d.value, d.unit, d.orientation, d.ddd, d.MMM]);
    b = function () {
        return c.set(arguments, d.datePartDelimiter)
    };
    d.mdy = b(d.ddd, d.month, d.day, d.year);
    d.ymd = b(d.ddd, d.year, d.month, d.day);
    d.dmy = b(d.ddd, d.day, d.month, d.year);
    d.date = function (a) {
        return (d[Date.CultureInfo.dateElementOrder] || d.mdy).call(this, a)
    };
    d.format = c.process(c.many(c.any(c.process(c.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function (a) {
        if (d[a])return d[a];
        throw Date.Parsing.Exception(a)
    }), c.process(c.rtoken(/^[^dMyhHmstz]+/), function (a) {
        return c.ignore(c.stoken(a))
    }))), function (a) {
        return c.process(c.each.apply(null, a), e.finishExact)
    });
    var g = {}, h = function (a) {
        return g[a] = g[a] || d.format(a)[0]
    };
    d.formats = function (a) {
        if (a instanceof Array) {
            for (var b = [], d = 0; d < a.length; d++)b.push(h(a[d]));
            return c.any.apply(null, b)
        }
        return h(a)
    };
    d._formats = d.formats(["yyyy-MM-ddTHH:mm:ss", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "d"]);
    d._start = c.process(c.set([d.date, d.time, d.expression], d.generalDelimiter, d.whiteSpace), e.finish);
    d.start = function (a) {
        try {
            var b = d._formats.call({}, a);
            if (0 === b[1].length)return b
        } catch (c) {
        }
        return d._start.call({}, a)
    }
}();
Date._parse = Date.parse;
Date.parse = function (a) {
    var b = null;
    if (!a)return null;
    try {
        b = Date.Grammar.start.call({}, a)
    } catch (c) {
        return null
    }
    return 0 === b[1].length ? b[0] : null
};
Date.getParseFunction = function (a) {
    var b = Date.Grammar.formats(a);
    return function (a) {
        var c = null;
        try {
            c = b.call({}, a)
        } catch (d) {
            return null
        }
        return 0 === c[1].length ? c[0] : null
    }
};
Date.parseExact = function (a, b) {
    return Date.getParseFunction(b)(a)
};
var Handlebars = {};
Handlebars.VERSION = "1.0.beta.6";
Handlebars.helpers = {};
Handlebars.partials = {};
Handlebars.registerHelper = function (a, b, c) {
    c && (b.not = c);
    this.helpers[a] = b
};
Handlebars.registerPartial = function (a, b) {
    this.partials[a] = b
};
Handlebars.registerHelper("helperMissing", function (a) {
    if (2 === arguments.length)return void 0;
    throw new Error("Could not find property '" + a + "'")
});
var toString = Object.prototype.toString, functionType = "[object Function]";
Handlebars.registerHelper("blockHelperMissing", function (a, b) {
    var c = b.inverse || function () {
        }, d = b.fn, e = "", f = toString.call(a);
    f === functionType && (a = a.call(this));
    if (a === !0)return d(this);
    if (a === !1 || null == a)return c(this);
    if ("[object Array]" === f) {
        if (a.length > 0)for (var g = 0, h = a.length; h > g; g++)e += d(a[g]); else e = c(this);
        return e
    }
    return d(a)
});
Handlebars.registerHelper("each", function (a, b) {
    var c = b.fn, d = b.inverse, e = "";
    if (a && a.length > 0)for (var f = 0, g = a.length; g > f; f++)e += c(a[f]); else e = d(this);
    return e
});
Handlebars.registerHelper("if", function (a, b) {
    var c = toString.call(a);
    c === functionType && (a = a.call(this));
    return !a || Handlebars.Utils.isEmpty(a) ? b.inverse(this) : b.fn(this)
});
Handlebars.registerHelper("unless", function (a, b) {
    var c = b.fn, d = b.inverse;
    b.fn = d;
    b.inverse = c;
    return Handlebars.helpers["if"].call(this, a, b)
});
Handlebars.registerHelper("with", function (a, b) {
    return b.fn(a)
});
Handlebars.registerHelper("log", function (a) {
    Handlebars.log(a)
});
var handlebars = function () {
    var a = {
        trace: function () {
        },
        yy: {},
        symbols_: {
            error: 2,
            root: 3,
            program: 4,
            EOF: 5,
            statements: 6,
            simpleInverse: 7,
            statement: 8,
            openInverse: 9,
            closeBlock: 10,
            openBlock: 11,
            mustache: 12,
            partial: 13,
            CONTENT: 14,
            COMMENT: 15,
            OPEN_BLOCK: 16,
            inMustache: 17,
            CLOSE: 18,
            OPEN_INVERSE: 19,
            OPEN_ENDBLOCK: 20,
            path: 21,
            OPEN: 22,
            OPEN_UNESCAPED: 23,
            OPEN_PARTIAL: 24,
            params: 25,
            hash: 26,
            param: 27,
            STRING: 28,
            INTEGER: 29,
            BOOLEAN: 30,
            hashSegments: 31,
            hashSegment: 32,
            ID: 33,
            EQUALS: 34,
            pathSegments: 35,
            SEP: 36,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            5: "EOF",
            14: "CONTENT",
            15: "COMMENT",
            16: "OPEN_BLOCK",
            18: "CLOSE",
            19: "OPEN_INVERSE",
            20: "OPEN_ENDBLOCK",
            22: "OPEN",
            23: "OPEN_UNESCAPED",
            24: "OPEN_PARTIAL",
            28: "STRING",
            29: "INTEGER",
            30: "BOOLEAN",
            33: "ID",
            34: "EQUALS",
            36: "SEP"
        },
        productions_: [0, [3, 2], [4, 3], [4, 1], [4, 0], [6, 1], [6, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 3], [13, 4], [7, 2], [17, 3], [17, 2], [17, 2], [17, 1], [25, 2], [25, 1], [27, 1], [27, 1], [27, 1], [27, 1], [26, 1], [31, 2], [31, 1], [32, 3], [32, 3], [32, 3], [32, 3], [21, 1], [35, 3], [35, 1]],
        performAction: function (a, b, c, d, e, f) {
            var g = f.length - 1;
            switch (e) {
                case 1:
                    return f[g - 1];
                case 2:
                    this.$ = new d.ProgramNode(f[g - 2], f[g]);
                    break;
                case 3:
                    this.$ = new d.ProgramNode(f[g]);
                    break;
                case 4:
                    this.$ = new d.ProgramNode([]);
                    break;
                case 5:
                    this.$ = [f[g]];
                    break;
                case 6:
                    f[g - 1].push(f[g]);
                    this.$ = f[g - 1];
                    break;
                case 7:
                    this.$ = new d.InverseNode(f[g - 2], f[g - 1], f[g]);
                    break;
                case 8:
                    this.$ = new d.BlockNode(f[g - 2], f[g - 1], f[g]);
                    break;
                case 9:
                    this.$ = f[g];
                    break;
                case 10:
                    this.$ = f[g];
                    break;
                case 11:
                    this.$ = new d.ContentNode(f[g]);
                    break;
                case 12:
                    this.$ = new d.CommentNode(f[g]);
                    break;
                case 13:
                    this.$ = new d.MustacheNode(f[g - 1][0], f[g - 1][1]);
                    break;
                case 14:
                    this.$ = new d.MustacheNode(f[g - 1][0], f[g - 1][1]);
                    break;
                case 15:
                    this.$ = f[g - 1];
                    break;
                case 16:
                    this.$ = new d.MustacheNode(f[g - 1][0], f[g - 1][1]);
                    break;
                case 17:
                    this.$ = new d.MustacheNode(f[g - 1][0], f[g - 1][1], !0);
                    break;
                case 18:
                    this.$ = new d.PartialNode(f[g - 1]);
                    break;
                case 19:
                    this.$ = new d.PartialNode(f[g - 2], f[g - 1]);
                    break;
                case 20:
                    break;
                case 21:
                    this.$ = [[f[g - 2]].concat(f[g - 1]), f[g]];
                    break;
                case 22:
                    this.$ = [[f[g - 1]].concat(f[g]), null];
                    break;
                case 23:
                    this.$ = [[f[g - 1]], f[g]];
                    break;
                case 24:
                    this.$ = [[f[g]], null];
                    break;
                case 25:
                    f[g - 1].push(f[g]);
                    this.$ = f[g - 1];
                    break;
                case 26:
                    this.$ = [f[g]];
                    break;
                case 27:
                    this.$ = f[g];
                    break;
                case 28:
                    this.$ = new d.StringNode(f[g]);
                    break;
                case 29:
                    this.$ = new d.IntegerNode(f[g]);
                    break;
                case 30:
                    this.$ = new d.BooleanNode(f[g]);
                    break;
                case 31:
                    this.$ = new d.HashNode(f[g]);
                    break;
                case 32:
                    f[g - 1].push(f[g]);
                    this.$ = f[g - 1];
                    break;
                case 33:
                    this.$ = [f[g]];
                    break;
                case 34:
                    this.$ = [f[g - 2], f[g]];
                    break;
                case 35:
                    this.$ = [f[g - 2], new d.StringNode(f[g])];
                    break;
                case 36:
                    this.$ = [f[g - 2], new d.IntegerNode(f[g])];
                    break;
                case 37:
                    this.$ = [f[g - 2], new d.BooleanNode(f[g])];
                    break;
                case 38:
                    this.$ = new d.IdNode(f[g]);
                    break;
                case 39:
                    f[g - 2].push(f[g]);
                    this.$ = f[g - 2];
                    break;
                case 40:
                    this.$ = [f[g]]
            }
        },
        table: [{
            3: 1,
            4: 2,
            5: [2, 4],
            6: 3,
            8: 4,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [1, 9],
            15: [1, 10],
            16: [1, 12],
            19: [1, 11],
            22: [1, 13],
            23: [1, 14],
            24: [1, 15]
        }, {1: [3]}, {5: [1, 16]}, {
            5: [2, 3],
            7: 17,
            8: 18,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [1, 9],
            15: [1, 10],
            16: [1, 12],
            19: [1, 19],
            20: [2, 3],
            22: [1, 13],
            23: [1, 14],
            24: [1, 15]
        }, {
            5: [2, 5],
            14: [2, 5],
            15: [2, 5],
            16: [2, 5],
            19: [2, 5],
            20: [2, 5],
            22: [2, 5],
            23: [2, 5],
            24: [2, 5]
        }, {
            4: 20,
            6: 3,
            8: 4,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [1, 9],
            15: [1, 10],
            16: [1, 12],
            19: [1, 11],
            20: [2, 4],
            22: [1, 13],
            23: [1, 14],
            24: [1, 15]
        }, {
            4: 21,
            6: 3,
            8: 4,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [1, 9],
            15: [1, 10],
            16: [1, 12],
            19: [1, 11],
            20: [2, 4],
            22: [1, 13],
            23: [1, 14],
            24: [1, 15]
        }, {
            5: [2, 9],
            14: [2, 9],
            15: [2, 9],
            16: [2, 9],
            19: [2, 9],
            20: [2, 9],
            22: [2, 9],
            23: [2, 9],
            24: [2, 9]
        }, {
            5: [2, 10],
            14: [2, 10],
            15: [2, 10],
            16: [2, 10],
            19: [2, 10],
            20: [2, 10],
            22: [2, 10],
            23: [2, 10],
            24: [2, 10]
        }, {
            5: [2, 11],
            14: [2, 11],
            15: [2, 11],
            16: [2, 11],
            19: [2, 11],
            20: [2, 11],
            22: [2, 11],
            23: [2, 11],
            24: [2, 11]
        }, {
            5: [2, 12],
            14: [2, 12],
            15: [2, 12],
            16: [2, 12],
            19: [2, 12],
            20: [2, 12],
            22: [2, 12],
            23: [2, 12],
            24: [2, 12]
        }, {17: 22, 21: 23, 33: [1, 25], 35: 24}, {17: 26, 21: 23, 33: [1, 25], 35: 24}, {
            17: 27,
            21: 23,
            33: [1, 25],
            35: 24
        }, {17: 28, 21: 23, 33: [1, 25], 35: 24}, {21: 29, 33: [1, 25], 35: 24}, {1: [2, 1]}, {
            6: 30,
            8: 4,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [1, 9],
            15: [1, 10],
            16: [1, 12],
            19: [1, 11],
            22: [1, 13],
            23: [1, 14],
            24: [1, 15]
        }, {
            5: [2, 6],
            14: [2, 6],
            15: [2, 6],
            16: [2, 6],
            19: [2, 6],
            20: [2, 6],
            22: [2, 6],
            23: [2, 6],
            24: [2, 6]
        }, {17: 22, 18: [1, 31], 21: 23, 33: [1, 25], 35: 24}, {10: 32, 20: [1, 33]}, {
            10: 34,
            20: [1, 33]
        }, {18: [1, 35]}, {
            18: [2, 24],
            21: 40,
            25: 36,
            26: 37,
            27: 38,
            28: [1, 41],
            29: [1, 42],
            30: [1, 43],
            31: 39,
            32: 44,
            33: [1, 45],
            35: 24
        }, {18: [2, 38], 28: [2, 38], 29: [2, 38], 30: [2, 38], 33: [2, 38], 36: [1, 46]}, {
            18: [2, 40],
            28: [2, 40],
            29: [2, 40],
            30: [2, 40],
            33: [2, 40],
            36: [2, 40]
        }, {18: [1, 47]}, {18: [1, 48]}, {18: [1, 49]}, {18: [1, 50], 21: 51, 33: [1, 25], 35: 24}, {
            5: [2, 2],
            8: 18,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [1, 9],
            15: [1, 10],
            16: [1, 12],
            19: [1, 11],
            20: [2, 2],
            22: [1, 13],
            23: [1, 14],
            24: [1, 15]
        }, {14: [2, 20], 15: [2, 20], 16: [2, 20], 19: [2, 20], 22: [2, 20], 23: [2, 20], 24: [2, 20]}, {
            5: [2, 7],
            14: [2, 7],
            15: [2, 7],
            16: [2, 7],
            19: [2, 7],
            20: [2, 7],
            22: [2, 7],
            23: [2, 7],
            24: [2, 7]
        }, {21: 52, 33: [1, 25], 35: 24}, {
            5: [2, 8],
            14: [2, 8],
            15: [2, 8],
            16: [2, 8],
            19: [2, 8],
            20: [2, 8],
            22: [2, 8],
            23: [2, 8],
            24: [2, 8]
        }, {
            14: [2, 14],
            15: [2, 14],
            16: [2, 14],
            19: [2, 14],
            20: [2, 14],
            22: [2, 14],
            23: [2, 14],
            24: [2, 14]
        }, {
            18: [2, 22],
            21: 40,
            26: 53,
            27: 54,
            28: [1, 41],
            29: [1, 42],
            30: [1, 43],
            31: 39,
            32: 44,
            33: [1, 45],
            35: 24
        }, {18: [2, 23]}, {18: [2, 26], 28: [2, 26], 29: [2, 26], 30: [2, 26], 33: [2, 26]}, {
            18: [2, 31],
            32: 55,
            33: [1, 56]
        }, {18: [2, 27], 28: [2, 27], 29: [2, 27], 30: [2, 27], 33: [2, 27]}, {
            18: [2, 28],
            28: [2, 28],
            29: [2, 28],
            30: [2, 28],
            33: [2, 28]
        }, {18: [2, 29], 28: [2, 29], 29: [2, 29], 30: [2, 29], 33: [2, 29]}, {
            18: [2, 30],
            28: [2, 30],
            29: [2, 30],
            30: [2, 30],
            33: [2, 30]
        }, {18: [2, 33], 33: [2, 33]}, {
            18: [2, 40],
            28: [2, 40],
            29: [2, 40],
            30: [2, 40],
            33: [2, 40],
            34: [1, 57],
            36: [2, 40]
        }, {33: [1, 58]}, {
            14: [2, 13],
            15: [2, 13],
            16: [2, 13],
            19: [2, 13],
            20: [2, 13],
            22: [2, 13],
            23: [2, 13],
            24: [2, 13]
        }, {
            5: [2, 16],
            14: [2, 16],
            15: [2, 16],
            16: [2, 16],
            19: [2, 16],
            20: [2, 16],
            22: [2, 16],
            23: [2, 16],
            24: [2, 16]
        }, {
            5: [2, 17],
            14: [2, 17],
            15: [2, 17],
            16: [2, 17],
            19: [2, 17],
            20: [2, 17],
            22: [2, 17],
            23: [2, 17],
            24: [2, 17]
        }, {
            5: [2, 18],
            14: [2, 18],
            15: [2, 18],
            16: [2, 18],
            19: [2, 18],
            20: [2, 18],
            22: [2, 18],
            23: [2, 18],
            24: [2, 18]
        }, {18: [1, 59]}, {18: [1, 60]}, {18: [2, 21]}, {
            18: [2, 25],
            28: [2, 25],
            29: [2, 25],
            30: [2, 25],
            33: [2, 25]
        }, {18: [2, 32], 33: [2, 32]}, {34: [1, 57]}, {
            21: 61,
            28: [1, 62],
            29: [1, 63],
            30: [1, 64],
            33: [1, 25],
            35: 24
        }, {18: [2, 39], 28: [2, 39], 29: [2, 39], 30: [2, 39], 33: [2, 39], 36: [2, 39]}, {
            5: [2, 19],
            14: [2, 19],
            15: [2, 19],
            16: [2, 19],
            19: [2, 19],
            20: [2, 19],
            22: [2, 19],
            23: [2, 19],
            24: [2, 19]
        }, {
            5: [2, 15],
            14: [2, 15],
            15: [2, 15],
            16: [2, 15],
            19: [2, 15],
            20: [2, 15],
            22: [2, 15],
            23: [2, 15],
            24: [2, 15]
        }, {18: [2, 34], 33: [2, 34]}, {18: [2, 35], 33: [2, 35]}, {18: [2, 36], 33: [2, 36]}, {
            18: [2, 37],
            33: [2, 37]
        }],
        defaultActions: {16: [2, 1], 37: [2, 23], 53: [2, 21]},
        parseError: function (a) {
            throw new Error(a)
        },
        parse: function (a) {
            function b() {
                var a;
                a = c.lexer.lex() || 1;
                "number" != typeof a && (a = c.symbols_[a] || a);
                return a
            }

            var c = this, d = [0], e = [null], f = [], g = this.table, h = "", i = 0, j = 0, k = 0;
            this.lexer.setInput(a);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
            var l = this.lexer.yylloc;
            f.push(l);
            "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
            for (var m, n, o, p, q, r, s, t, u, v = {}; ;) {
                o = d[d.length - 1];
                if (this.defaultActions[o])p = this.defaultActions[o]; else {
                    null == m && (m = b());
                    p = g[o] && g[o][m]
                }
                if (!("undefined" != typeof p && p.length && p[0] || k)) {
                    u = [];
                    for (r in g[o])this.terminals_[r] && r > 2 && u.push("'" + this.terminals_[r] + "'");
                    var w = "";
                    w = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + u.join(", ") + ", got '" + this.terminals_[m] + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == m ? "end of input" : "'" + (this.terminals_[m] || m) + "'");
                    this.parseError(w, {
                        text: this.lexer.match,
                        token: this.terminals_[m] || m,
                        line: this.lexer.yylineno,
                        loc: l,
                        expected: u
                    })
                }
                if (p[0]instanceof Array && p.length > 1)throw new Error("Parse Error: multiple actions possible at state: " + o + ", token: " + m);
                switch (p[0]) {
                    case 1:
                        d.push(m);
                        e.push(this.lexer.yytext);
                        f.push(this.lexer.yylloc);
                        d.push(p[1]);
                        m = null;
                        if (n) {
                            m = n;
                            n = null
                        } else {
                            j = this.lexer.yyleng;
                            h = this.lexer.yytext;
                            i = this.lexer.yylineno;
                            l = this.lexer.yylloc;
                            k > 0 && k--
                        }
                        break;
                    case 2:
                        s = this.productions_[p[1]][1];
                        v.$ = e[e.length - s];
                        v._$ = {
                            first_line: f[f.length - (s || 1)].first_line,
                            last_line: f[f.length - 1].last_line,
                            first_column: f[f.length - (s || 1)].first_column,
                            last_column: f[f.length - 1].last_column
                        };
                        q = this.performAction.call(v, h, j, i, this.yy, p[1], e, f);
                        if ("undefined" != typeof q)return q;
                        if (s) {
                            d = d.slice(0, -1 * s * 2);
                            e = e.slice(0, -1 * s);
                            f = f.slice(0, -1 * s)
                        }
                        d.push(this.productions_[p[1]][0]);
                        e.push(v.$);
                        f.push(v._$);
                        t = g[d[d.length - 2]][d[d.length - 1]];
                        d.push(t);
                        break;
                    case 3:
                        return !0
                }
            }
            return !0
        }
    }, b = function () {
        var a = {
            EOF: 1, parseError: function (a, b) {
                if (!this.yy.parseError)throw new Error(a);
                this.yy.parseError(a, b)
            }, setInput: function (a) {
                this._input = a;
                this._more = this._less = this.done = !1;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = "";
                this.conditionStack = ["INITIAL"];
                this.yylloc = {first_line: 1, first_column: 0, last_line: 1, last_column: 0};
                return this
            }, input: function () {
                var a = this._input[0];
                this.yytext += a;
                this.yyleng++;
                this.match += a;
                this.matched += a;
                var b = a.match(/\n/);
                b && this.yylineno++;
                this._input = this._input.slice(1);
                return a
            }, unput: function (a) {
                this._input = a + this._input;
                return this
            }, more: function () {
                this._more = !0;
                return this
            }, pastInput: function () {
                var a = this.matched.substr(0, this.matched.length - this.match.length);
                return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
            }, upcomingInput: function () {
                var a = this.match;
                a.length < 20 && (a += this._input.substr(0, 20 - a.length));
                return (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
            }, showPosition: function () {
                var a = this.pastInput(), b = new Array(a.length + 1).join("-");
                return a + this.upcomingInput() + "\n" + b + "^"
            }, next: function () {
                if (this.done)return this.EOF;
                this._input || (this.done = !0);
                var a, b, c;
                if (!this._more) {
                    this.yytext = "";
                    this.match = ""
                }
                for (var d = this._currentRules(), e = 0; e < d.length; e++) {
                    b = this._input.match(this.rules[d[e]]);
                    if (b) {
                        c = b[0].match(/\n.*/g);
                        c && (this.yylineno += c.length);
                        this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: c ? c[c.length - 1].length - 1 : this.yylloc.last_column + b[0].length
                        };
                        this.yytext += b[0];
                        this.match += b[0];
                        this.matches = b;
                        this.yyleng = this.yytext.length;
                        this._more = !1;
                        this._input = this._input.slice(b[0].length);
                        this.matched += b[0];
                        a = this.performAction.call(this, this.yy, this, d[e], this.conditionStack[this.conditionStack.length - 1]);
                        return a ? a : void 0
                    }
                }
                if ("" === this._input)return this.EOF;
                this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
                return void 0
            }, lex: function () {
                var a = this.next();
                return "undefined" != typeof a ? a : this.lex()
            }, begin: function (a) {
                this.conditionStack.push(a)
            }, popState: function () {
                return this.conditionStack.pop()
            }, _currentRules: function () {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
            }, topState: function () {
                return this.conditionStack[this.conditionStack.length - 2]
            }, pushState: function (a) {
                this.begin(a)
            }
        };
        a.performAction = function (a, b, c, d) {
            switch (c) {
                case 0:
                    "\\" !== b.yytext.slice(-1) && this.begin("mu");
                    "\\" === b.yytext.slice(-1) && (b.yytext = b.yytext.substr(0, b.yyleng - 1), this.begin("emu"));
                    if (b.yytext)return 14;
                    break;
                case 1:
                    return 14;
                case 2:
                    this.popState();
                    return 14;
                case 3:
                    return 24;
                case 4:
                    return 16;
                case 5:
                    return 20;
                case 6:
                    return 19;
                case 7:
                    return 19;
                case 8:
                    return 23;
                case 9:
                    return 23;
                case 10:
                    b.yytext = b.yytext.substr(3, b.yyleng - 5);
                    this.popState();
                    return 15;
                case 11:
                    return 22;
                case 12:
                    return 34;
                case 13:
                    return 33;
                case 14:
                    return 33;
                case 15:
                    return 36;
                case 16:
                    break;
                case 17:
                    this.popState();
                    return 18;
                case 18:
                    this.popState();
                    return 18;
                case 19:
                    b.yytext = b.yytext.substr(1, b.yyleng - 2).replace(/\\"/g, '"');
                    return 28;
                case 20:
                    return 30;
                case 21:
                    return 30;
                case 22:
                    return 29;
                case 23:
                    return 33;
                case 24:
                    b.yytext = b.yytext.substr(1, b.yyleng - 2);
                    return 33;
                case 25:
                    return "INVALID";
                case 26:
                    return 5
            }
        };
        a.rules = [/^[^\x00]*?(?=(\{\{))/, /^[^\x00]+/, /^[^\x00]{2,}?(?=(\{\{))/, /^\{\{>/, /^\{\{#/, /^\{\{\//, /^\{\{\^/, /^\{\{\s*else\b/, /^\{\{\{/, /^\{\{&/, /^\{\{![\s\S]*?\}\}/, /^\{\{/, /^=/, /^\.(?=[} ])/, /^\.\./, /^[\/.]/, /^\s+/, /^\}\}\}/, /^\}\}/, /^"(\\["]|[^"])*"/, /^true(?=[}\s])/, /^false(?=[}\s])/, /^[0-9]+(?=[}\s])/, /^[a-zA-Z0-9_$-]+(?=[=}\s\/.])/, /^\[[^\]]*\]/, /^./, /^$/];
        a.conditions = {
            mu: {
                rules: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                inclusive: !1
            }, emu: {rules: [2], inclusive: !1}, INITIAL: {rules: [0, 1, 26], inclusive: !0}
        };
        return a
    }();
    a.lexer = b;
    return a
}();
if ("undefined" != typeof require && "undefined" != typeof exports) {
    exports.parser = handlebars;
    exports.parse = function () {
        return handlebars.parse.apply(handlebars, arguments)
    };
    exports.main = function (a) {
        if (!a[1])throw new Error("Usage: " + a[0] + " FILE");
        if ("undefined" != typeof process)var b = require("fs").readFileSync(require("path").join(process.cwd(), a[1]), "utf8"); else var c = require("file").path(require("file").cwd()), b = c.join(a[1]).read({charset: "utf-8"});
        return exports.parser.parse(b)
    };
    "undefined" != typeof module && require.main === module && exports.main("undefined" != typeof process ? process.argv.slice(1) : require("system").args)
}
Handlebars.Parser = handlebars;
Handlebars.parse = function (a) {
    Handlebars.Parser.yy = Handlebars.AST;
    return Handlebars.Parser.parse(a)
};
Handlebars.print = function (a) {
    return (new Handlebars.PrintVisitor).accept(a)
};
Handlebars.logger = {
    DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3, log: function () {
    }
};
Handlebars.log = function (a, b) {
    Handlebars.logger.log(a, b)
};
!function () {
    Handlebars.AST = {};
    Handlebars.AST.ProgramNode = function (a, b) {
        this.type = "program";
        this.statements = a;
        b && (this.inverse = new Handlebars.AST.ProgramNode(b))
    };
    Handlebars.AST.MustacheNode = function (a, b, c) {
        this.type = "mustache";
        this.id = a[0];
        this.params = a.slice(1);
        this.hash = b;
        this.escaped = !c
    };
    Handlebars.AST.PartialNode = function (a, b) {
        this.type = "partial";
        this.id = a;
        this.context = b
    };
    var a = function (a, b) {
        if (a.original !== b.original)throw new Handlebars.Exception(a.original + " doesn't match " + b.original)
    };
    Handlebars.AST.BlockNode = function (b, c, d) {
        a(b.id, d);
        this.type = "block";
        this.mustache = b;
        this.program = c
    };
    Handlebars.AST.InverseNode = function (b, c, d) {
        a(b.id, d);
        this.type = "inverse";
        this.mustache = b;
        this.program = c
    };
    Handlebars.AST.ContentNode = function (a) {
        this.type = "content";
        this.string = a
    };
    Handlebars.AST.HashNode = function (a) {
        this.type = "hash";
        this.pairs = a
    };
    Handlebars.AST.IdNode = function (a) {
        this.type = "ID";
        this.original = a.join(".");
        for (var b = [], c = 0, d = 0, e = a.length; e > d; d++) {
            var f = a[d];
            ".." === f ? c++ : "." === f || "this" === f ? this.isScoped = !0 : b.push(f)
        }
        this.parts = b;
        this.string = b.join(".");
        this.depth = c;
        this.isSimple = 1 === b.length && 0 === c
    };
    Handlebars.AST.StringNode = function (a) {
        this.type = "STRING";
        this.string = a
    };
    Handlebars.AST.IntegerNode = function (a) {
        this.type = "INTEGER";
        this.integer = a
    };
    Handlebars.AST.BooleanNode = function (a) {
        this.type = "BOOLEAN";
        this.bool = a
    };
    Handlebars.AST.CommentNode = function (a) {
        this.type = "comment";
        this.comment = a
    }
}();
Handlebars.Exception = function () {
    var a = Error.prototype.constructor.apply(this, arguments);
    for (var b in a)a.hasOwnProperty(b) && (this[b] = a[b]);
    this.message = a.message
};
Handlebars.Exception.prototype = new Error;
Handlebars.SafeString = function (a) {
    this.string = a
};
Handlebars.SafeString.prototype.toString = function () {
    return this.string.toString()
};
!function () {
    var a = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, b = /&(?!\w+;)|[<>"'`]/g, c = /[&<>"'`]/, d = function (b) {
        return a[b] || "&amp;"
    };
    Handlebars.Utils = {
        escapeExpression: function (a) {
            return a instanceof Handlebars.SafeString ? a.toString() : null == a || a === !1 ? "" : c.test(a) ? a.replace(b, d) : a
        }, isEmpty: function (a) {
            return "undefined" == typeof a ? !0 : null === a ? !0 : a === !1 ? !0 : "[object Array]" === Object.prototype.toString.call(a) && 0 === a.length ? !0 : !1
        }
    }
}();
Handlebars.Compiler = function () {
};
Handlebars.JavaScriptCompiler = function () {
};
!function (a, b) {
    a.OPCODE_MAP = {
        appendContent: 1,
        getContext: 2,
        lookupWithHelpers: 3,
        lookup: 4,
        append: 5,
        invokeMustache: 6,
        appendEscaped: 7,
        pushString: 8,
        truthyOrFallback: 9,
        functionOrFallback: 10,
        invokeProgram: 11,
        invokePartial: 12,
        push: 13,
        assignToHash: 15,
        pushStringParam: 16
    };
    a.MULTI_PARAM_OPCODES = {
        appendContent: 1,
        getContext: 1,
        lookupWithHelpers: 2,
        lookup: 1,
        invokeMustache: 3,
        pushString: 1,
        truthyOrFallback: 1,
        functionOrFallback: 1,
        invokeProgram: 3,
        invokePartial: 1,
        push: 1,
        assignToHash: 1,
        pushStringParam: 1
    };
    a.DISASSEMBLE_MAP = {};
    for (var c in a.OPCODE_MAP) {
        var d = a.OPCODE_MAP[c];
        a.DISASSEMBLE_MAP[d] = c
    }
    a.multiParamSize = function (b) {
        return a.MULTI_PARAM_OPCODES[a.DISASSEMBLE_MAP[b]]
    };
    a.prototype = {
        compiler: a, disassemble: function () {
            for (var b, c, d, e, f, g = this.opcodes, h = [], i = 0, j = g.length; j > i; i++) {
                b = g[i];
                if ("DECLARE" === b) {
                    e = g[++i];
                    f = g[++i];
                    h.push("DECLARE " + e + " = " + f)
                } else {
                    d = a.DISASSEMBLE_MAP[b];
                    for (var k = a.multiParamSize(b), l = [], m = 0; k > m; m++) {
                        c = g[++i];
                        "string" == typeof c && (c = '"' + c.replace("\n", "\\n") + '"');
                        l.push(c)
                    }
                    d = d + " " + l.join(" ");
                    h.push(d)
                }
            }
            return h.join("\n")
        }, guid: 0, compile: function (a, b) {
            this.children = [];
            this.depths = {list: []};
            this.options = b;
            var c = this.options.knownHelpers;
            this.options.knownHelpers = {
                helperMissing: !0,
                blockHelperMissing: !0,
                each: !0,
                "if": !0,
                unless: !0,
                "with": !0,
                log: !0
            };
            if (c)for (var d in c)this.options.knownHelpers[d] = c[d];
            return this.program(a)
        }, accept: function (a) {
            return this[a.type](a)
        }, program: function (a) {
            var b, c = a.statements;
            this.opcodes = [];
            for (var d = 0, e = c.length; e > d; d++) {
                b = c[d];
                this[b.type](b)
            }
            this.isSimple = 1 === e;
            this.depths.list = this.depths.list.sort(function (a, b) {
                return a - b
            });
            return this
        }, compileProgram: function (a) {
            var b = (new this.compiler).compile(a, this.options), c = this.guid++;
            this.usePartial = this.usePartial || b.usePartial;
            this.children[c] = b;
            for (var d = 0, e = b.depths.list.length; e > d; d++) {
                depth = b.depths.list[d];
                2 > depth || this.addDepth(depth - 1)
            }
            return c
        }, block: function (a) {
            var b, c = a.mustache, d = this.setupStackForMustache(c), e = this.compileProgram(a.program);
            if (a.program.inverse) {
                b = this.compileProgram(a.program.inverse);
                this.declare("inverse", b)
            }
            this.opcode("invokeProgram", e, d.length, !!c.hash);
            this.declare("inverse", null);
            this.opcode("append")
        }, inverse: function (a) {
            var b = this.setupStackForMustache(a.mustache), c = this.compileProgram(a.program);
            this.declare("inverse", c);
            this.opcode("invokeProgram", null, b.length, !!a.mustache.hash);
            this.declare("inverse", null);
            this.opcode("append")
        }, hash: function (a) {
            var b, c, d = a.pairs;
            this.opcode("push", "{}");
            for (var e = 0, f = d.length; f > e; e++) {
                b = d[e];
                c = b[1];
                this.accept(c);
                this.opcode("assignToHash", b[0])
            }
        }, partial: function (a) {
            var b = a.id;
            this.usePartial = !0;
            a.context ? this.ID(a.context) : this.opcode("push", "depth0");
            this.opcode("invokePartial", b.original);
            this.opcode("append")
        }, content: function (a) {
            this.opcode("appendContent", a.string)
        }, mustache: function (a) {
            var b = this.setupStackForMustache(a);
            this.opcode("invokeMustache", b.length, a.id.original, !!a.hash);
            a.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
        }, ID: function (a) {
            this.addDepth(a.depth);
            this.opcode("getContext", a.depth);
            this.opcode("lookupWithHelpers", a.parts[0] || null, a.isScoped || !1);
            for (var b = 1, c = a.parts.length; c > b; b++)this.opcode("lookup", a.parts[b])
        }, STRING: function (a) {
            this.opcode("pushString", a.string)
        }, INTEGER: function (a) {
            this.opcode("push", a.integer)
        }, BOOLEAN: function (a) {
            this.opcode("push", a.bool)
        }, comment: function () {
        }, pushParams: function (a) {
            for (var b, c = a.length; c--;) {
                b = a[c];
                if (this.options.stringParams) {
                    b.depth && this.addDepth(b.depth);
                    this.opcode("getContext", b.depth || 0);
                    this.opcode("pushStringParam", b.string)
                } else this[b.type](b)
            }
        }, opcode: function (b, c, d, e) {
            this.opcodes.push(a.OPCODE_MAP[b]);
            void 0 !== c && this.opcodes.push(c);
            void 0 !== d && this.opcodes.push(d);
            void 0 !== e && this.opcodes.push(e)
        }, declare: function (a, b) {
            this.opcodes.push("DECLARE");
            this.opcodes.push(a);
            this.opcodes.push(b)
        }, addDepth: function (a) {
            if (0 !== a && !this.depths[a]) {
                this.depths[a] = !0;
                this.depths.list.push(a)
            }
        }, setupStackForMustache: function (a) {
            var b = a.params;
            this.pushParams(b);
            a.hash && this.hash(a.hash);
            this.ID(a.id);
            return b
        }
    };
    b.prototype = {
        nameLookup: function (a, c) {
            return /^[0-9]+$/.test(c) ? a + "[" + c + "]" : b.isValidJavaScriptVariableName(c) ? a + "." + c : a + "['" + c + "']"
        }, appendToBuffer: function (a) {
            return this.environment.isSimple ? "return " + a + ";" : "buffer += " + a + ";"
        }, initializeBuffer: function () {
            return this.quotedString("")
        }, namespace: "Handlebars", compile: function (a, b, c, d) {
            this.environment = a;
            this.options = b || {};
            this.name = this.environment.name;
            this.isChild = !!c;
            this.context = c || {programs: [], aliases: {self: "this"}, registers: {list: []}};
            this.preamble();
            this.stackSlot = 0;
            this.stackVars = [];
            this.compileChildren(a, b);
            var e, f = a.opcodes;
            this.i = 0;
            for (h = f.length; this.i < h; this.i++) {
                e = this.nextOpcode(0);
                if ("DECLARE" === e[0]) {
                    this.i = this.i + 2;
                    this[e[1]] = e[2]
                } else {
                    this.i = this.i + e[1].length;
                    this[e[0]].apply(this, e[1])
                }
            }
            return this.createFunctionContext(d)
        }, nextOpcode: function (b) {
            var c, d, e, f, g = this.environment.opcodes, h = g[this.i + b];
            if ("DECLARE" === h) {
                c = g[this.i + 1];
                d = g[this.i + 2];
                return ["DECLARE", c, d]
            }
            c = a.DISASSEMBLE_MAP[h];
            e = a.multiParamSize(h);
            f = [];
            for (var i = 0; e > i; i++)f.push(g[this.i + i + 1 + b]);
            return [c, f]
        }, eat: function (a) {
            this.i = this.i + a.length
        }, preamble: function () {
            var a = [];
            this.useRegister("foundHelper");
            if (this.isChild)a.push(""); else {
                var b = this.namespace, c = "helpers = helpers || " + b + ".helpers;";
                this.environment.usePartial && (c = c + " partials = partials || " + b + ".partials;");
                a.push(c)
            }
            this.environment.isSimple ? a.push("") : a.push(", buffer = " + this.initializeBuffer());
            this.lastContext = 0;
            this.source = a
        }, createFunctionContext: function (a) {
            var b = this.stackVars;
            this.isChild || (b = b.concat(this.context.registers.list));
            b.length > 0 && (this.source[1] = this.source[1] + ", " + b.join(", "));
            if (!this.isChild) {
                for (var c in this.context.aliases)this.source[1] = this.source[1] + ", " + c + "=" + this.context.aliases[c]
            }
            this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";");
            this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n");
            this.environment.isSimple || this.source.push("return buffer;");
            for (var d = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], e = 0, f = this.environment.depths.list.length; f > e; e++)d.push("depth" + this.environment.depths.list[e]);
            if (a) {
                d.push(this.source.join("\n  "));
                return Function.apply(this, d)
            }
            var g = "function " + (this.name || "") + "(" + d.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
            Handlebars.log(Handlebars.logger.DEBUG, g + "\n\n");
            return g
        }, appendContent: function (a) {
            this.source.push(this.appendToBuffer(this.quotedString(a)))
        }, append: function () {
            var a = this.popStack();
            this.source.push("if(" + a + " || " + a + " === 0) { " + this.appendToBuffer(a) + " }");
            this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
        }, appendEscaped: function () {
            var a = this.nextOpcode(1), b = "";
            this.context.aliases.escapeExpression = "this.escapeExpression";
            if ("appendContent" === a[0]) {
                b = " + " + this.quotedString(a[1][0]);
                this.eat(a)
            }
            this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + b))
        }, getContext: function (a) {
            this.lastContext !== a && (this.lastContext = a)
        }, lookupWithHelpers: function (a, b) {
            if (a) {
                var c = this.nextStack();
                this.usingKnownHelper = !1;
                var d;
                if (!b && this.options.knownHelpers[a]) {
                    d = c + " = " + this.nameLookup("helpers", a, "helper");
                    this.usingKnownHelper = !0
                } else if (b || this.options.knownHelpersOnly)d = c + " = " + this.nameLookup("depth" + this.lastContext, a, "context"); else {
                    this.register("foundHelper", this.nameLookup("helpers", a, "helper"));
                    d = c + " = foundHelper || " + this.nameLookup("depth" + this.lastContext, a, "context")
                }
                d += ";";
                this.source.push(d)
            } else this.pushStack("depth" + this.lastContext)
        }, lookup: function (a) {
            var b = this.topStack();
            this.source.push(b + " = (" + b + " === null || " + b + " === undefined || " + b + " === false ? " + b + " : " + this.nameLookup(b, a, "context") + ");")
        }, pushStringParam: function (a) {
            this.pushStack("depth" + this.lastContext);
            this.pushString(a)
        }, pushString: function (a) {
            this.pushStack(this.quotedString(a))
        }, push: function (a) {
            this.pushStack(a)
        }, invokeMustache: function (a, b, c) {
            this.populateParams(a, this.quotedString(b), "{}", null, c, function (a, b, c) {
                if (!this.usingKnownHelper) {
                    this.context.aliases.helperMissing = "helpers.helperMissing";
                    this.context.aliases.undef = "void 0";
                    this.source.push("else if(" + c + "=== undef) { " + a + " = helperMissing.call(" + b + "); }");
                    a !== c && this.source.push("else { " + a + " = " + c + "; }")
                }
            })
        }, invokeProgram: function (a, b, c) {
            var d = this.programExpression(this.inverse), e = this.programExpression(a);
            this.populateParams(b, null, e, d, c, function (a, b) {
                if (!this.usingKnownHelper) {
                    this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                    this.source.push("else { " + a + " = blockHelperMissing.call(" + b + "); }")
                }
            })
        }, populateParams: function (a, b, c, d, e, f) {
            var g, h, i = e || this.options.stringParams || d || this.options.data, j = this.popStack(), k = [];
            if (i) {
                this.register("tmp1", c);
                h = "tmp1"
            } else h = "{ hash: {} }";
            if (i) {
                var l = e ? this.popStack() : "{}";
                this.source.push("tmp1.hash = " + l + ";")
            }
            this.options.stringParams && this.source.push("tmp1.contexts = [];");
            for (var m = 0; a > m; m++) {
                g = this.popStack();
                k.push(g);
                this.options.stringParams && this.source.push("tmp1.contexts.push(" + this.popStack() + ");")
            }
            if (d) {
                this.source.push("tmp1.fn = tmp1;");
                this.source.push("tmp1.inverse = " + d + ";")
            }
            this.options.data && this.source.push("tmp1.data = data;");
            k.push(h);
            this.populateCall(k, j, b || j, f, "{}" !== c)
        }, populateCall: function (a, b, c, d, e) {
            var f = ["depth0"].concat(a).join(", "), g = ["depth0"].concat(c).concat(a).join(", "), h = this.nextStack();
            if (this.usingKnownHelper)this.source.push(h + " = " + b + ".call(" + f + ");"); else {
                this.context.aliases.functionType = '"function"';
                var i = e ? "foundHelper && " : "";
                this.source.push("if(" + i + "typeof " + b + " === functionType) { " + h + " = " + b + ".call(" + f + "); }")
            }
            d.call(this, h, g, b);
            this.usingKnownHelper = !1
        }, invokePartial: function (a) {
            params = [this.nameLookup("partials", a, "partial"), "'" + a + "'", this.popStack(), "helpers", "partials"];
            this.options.data && params.push("data");
            this.pushStack("self.invokePartial(" + params.join(", ") + ");")
        }, assignToHash: function (a) {
            var b = this.popStack(), c = this.topStack();
            this.source.push(c + "['" + a + "'] = " + b + ";")
        }, compiler: b, compileChildren: function (a, b) {
            for (var c, d, e = a.children, f = 0, g = e.length; g > f; f++) {
                c = e[f];
                d = new this.compiler;
                this.context.programs.push("");
                var h = this.context.programs.length;
                c.index = h;
                c.name = "program" + h;
                this.context.programs[h] = d.compile(c, b, this.context)
            }
        }, programExpression: function (a) {
            if (null == a)return "self.noop";
            for (var b = this.environment.children[a], c = b.depths.list, d = [b.index, b.name, "data"], e = 0, f = c.length; f > e; e++) {
                depth = c[e];
                1 === depth ? d.push("depth0") : d.push("depth" + (depth - 1))
            }
            if (0 === c.length)return "self.program(" + d.join(", ") + ")";
            d.shift();
            return "self.programWithDepth(" + d.join(", ") + ")"
        }, register: function (a, b) {
            this.useRegister(a);
            this.source.push(a + " = " + b + ";")
        }, useRegister: function (a) {
            if (!this.context.registers[a]) {
                this.context.registers[a] = !0;
                this.context.registers.list.push(a)
            }
        }, pushStack: function (a) {
            this.source.push(this.nextStack() + " = " + a + ";");
            return "stack" + this.stackSlot
        }, nextStack: function () {
            this.stackSlot++;
            this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot);
            return "stack" + this.stackSlot
        }, popStack: function () {
            return "stack" + this.stackSlot--
        }, topStack: function () {
            return "stack" + this.stackSlot
        }, quotedString: function (a) {
            return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'
        }
    };
    for (var e = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), f = b.RESERVED_WORDS = {}, g = 0, h = e.length; h > g; g++)f[e[g]] = !0;
    b.isValidJavaScriptVariableName = function (a) {
        return !b.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(a) ? !0 : !1
    }
}(Handlebars.Compiler, Handlebars.JavaScriptCompiler);
Handlebars.precompile = function (a, b) {
    b = b || {};
    var c = Handlebars.parse(a), d = (new Handlebars.Compiler).compile(c, b);
    return (new Handlebars.JavaScriptCompiler).compile(d, b)
};
Handlebars.compile = function (a, b) {
    function c() {
        var c = Handlebars.parse(a), d = (new Handlebars.Compiler).compile(c, b), e = (new Handlebars.JavaScriptCompiler).compile(d, b, void 0, !0);
        return Handlebars.template(e)
    }

    b = b || {};
    var d;
    return function (a, b) {
        d || (d = c());
        return d.call(this, a, b)
    }
};
Handlebars.VM = {
    template: function (a) {
        var b = {
            escapeExpression: Handlebars.Utils.escapeExpression,
            invokePartial: Handlebars.VM.invokePartial,
            programs: [],
            program: function (a, b, c) {
                var d = this.programs[a];
                if (c)return Handlebars.VM.program(b, c);
                if (d)return d;
                d = this.programs[a] = Handlebars.VM.program(b);
                return d
            },
            programWithDepth: Handlebars.VM.programWithDepth,
            noop: Handlebars.VM.noop
        };
        return function (c, d) {
            d = d || {};
            return a.call(b, Handlebars, c, d.helpers, d.partials, d.data)
        }
    }, programWithDepth: function (a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        return function (d, e) {
            e = e || {};
            return a.apply(this, [d, e.data || b].concat(c))
        }
    }, program: function (a, b) {
        return function (c, d) {
            d = d || {};
            return a(c, d.data || b)
        }
    }, noop: function () {
        return ""
    }, invokePartial: function (a, b, c, d, e, f) {
        options = {helpers: d, partials: e, data: f};
        if (void 0 === a)throw new Handlebars.Exception("The partial " + b + " could not be found");
        if (a instanceof Function)return a(c, options);
        if (Handlebars.compile) {
            e[b] = Handlebars.compile(a);
            return e[b](c, options)
        }
        throw new Handlebars.Exception("The partial " + b + " could not be compiled when running in runtime-only mode")
    }
};
Handlebars.template = Handlebars.VM.template;
(function () {
    var a = this, b = a._, c = {}, d = Array.prototype, e = Object.prototype, f = Function.prototype, g = d.push, h = d.slice, i = d.concat, j = e.toString, k = e.hasOwnProperty, l = d.forEach, m = d.map, n = d.reduce, o = d.reduceRight, p = d.filter, q = d.every, r = d.some, s = d.indexOf, t = d.lastIndexOf, u = Array.isArray, v = Object.keys, w = f.bind, x = function (a) {
        return a instanceof x ? a : this instanceof x ? (this._wrapped = a, void 0) : new x(a)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : a._ = x, x.VERSION = "1.4.3";
    var y = x.each = x.forEach = function (a, b, d) {
        if (null != a)if (l && a.forEach === l)a.forEach(b, d); else if (a.length === +a.length) {
            for (var e = 0, f = a.length; f > e; e++)if (b.call(d, a[e], e, a) === c)return
        } else for (var g in a)if (x.has(a, g) && b.call(d, a[g], g, a) === c)return
    };
    x.map = x.collect = function (a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function (a, e, f) {
            d[d.length] = b.call(c, a, e, f)
        }), d)
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function (a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n)return d && (b = x.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function (a, f, g) {
                e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
            }), !e)throw new TypeError(z);
        return c
    }, x.reduceRight = x.foldr = function (a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o)return d && (b = x.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length
        }
        if (y(a, function (h, i, j) {
                i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0)
            }), !e)throw new TypeError(z);
        return c
    }, x.find = x.detect = function (a, b, c) {
        var d;
        return A(a, function (a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0
        }), d
    }, x.filter = x.select = function (a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function (a, e, f) {
            b.call(c, a, e, f) && (d[d.length] = a)
        }), d)
    }, x.reject = function (a, b, c) {
        return x.filter(a, function (a, d, e) {
            return !b.call(c, a, d, e)
        }, c)
    }, x.every = x.all = function (a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function (a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c
        }), !!e)
    };
    var A = x.some = x.any = function (a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function (a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0
        }), !!e)
    };
    x.contains = x.include = function (a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function (a) {
            return a === b
        })
    }, x.invoke = function (a, b) {
        var c = h.call(arguments, 2);
        return x.map(a, function (a) {
            return (x.isFunction(b) ? b : a[b]).apply(a, c)
        })
    }, x.pluck = function (a, b) {
        return x.map(a, function (a) {
            return a[b]
        })
    }, x.where = function (a, b) {
        return x.isEmpty(b) ? [] : x.filter(a, function (a) {
            for (var c in b)if (b[c] !== a[c])return !1;
            return !0
        })
    }, x.max = function (a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && 65535 > a.length)return Math.max.apply(Math, a);
        if (!b && x.isEmpty(a))return -1 / 0;
        var d = {computed: -1 / 0, value: -1 / 0};
        return y(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g >= d.computed && (d = {value: a, computed: g})
        }), d.value
    }, x.min = function (a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && 65535 > a.length)return Math.min.apply(Math, a);
        if (!b && x.isEmpty(a))return 1 / 0;
        var d = {computed: 1 / 0, value: 1 / 0};
        return y(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            d.computed > g && (d = {value: a, computed: g})
        }), d.value
    }, x.shuffle = function (a) {
        var b, c = 0, d = [];
        return y(a, function (a) {
            b = x.random(c++), d[c - 1] = d[b], d[b] = a
        }), d
    };
    var B = function (a) {
        return x.isFunction(a) ? a : function (b) {
            return b[a]
        }
    };
    x.sortBy = function (a, b, c) {
        var d = B(b);
        return x.pluck(x.map(a, function (a, b, e) {
            return {value: a, index: b, criteria: d.call(c, a, b, e)}
        }).sort(function (a, b) {
            var c = a.criteria, d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c)return 1;
                if (d > c || void 0 === d)return -1
            }
            return a.index < b.index ? -1 : 1
        }), "value")
    };
    var C = function (a, b, c, d) {
        var e = {}, f = B(b || x.identity);
        return y(a, function (b, g) {
            var h = f.call(c, b, g, a);
            d(e, h, b)
        }), e
    };
    x.groupBy = function (a, b, c) {
        return C(a, b, c, function (a, b, c) {
            (x.has(a, b) ? a[b] : a[b] = []).push(c)
        })
    }, x.countBy = function (a, b, c) {
        return C(a, b, c, function (a, b) {
            x.has(a, b) || (a[b] = 0), a[b]++
        })
    }, x.sortedIndex = function (a, b, c, d) {
        c = null == c ? x.identity : B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f;) {
            var h = f + g >>> 1;
            e > c.call(d, a[h]) ? f = h + 1 : g = h
        }
        return f
    }, x.toArray = function (a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : []
    }, x.size = function (a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length
    }, x.first = x.head = x.take = function (a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b)
    }, x.initial = function (a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b))
    }, x.last = function (a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0))
    }, x.rest = x.tail = x.drop = function (a, b, c) {
        return h.call(a, null == b || c ? 1 : b)
    }, x.compact = function (a) {
        return x.filter(a, x.identity)
    };
    var D = function (a, b, c) {
        return y(a, function (a) {
            x.isArray(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a)
        }), c
    };
    x.flatten = function (a, b) {
        return D(a, b, [])
    }, x.without = function (a) {
        return x.difference(a, h.call(arguments, 1))
    }, x.uniq = x.unique = function (a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a, f = [], g = [];
        return y(e, function (c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]))
        }), f
    }, x.union = function () {
        return x.uniq(i.apply(d, arguments))
    }, x.intersection = function (a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function (a) {
            return x.every(b, function (b) {
                return x.indexOf(b, a) >= 0
            })
        })
    }, x.difference = function (a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function (a) {
            return !x.contains(b, a)
        })
    }, x.zip = function () {
        for (var a = h.call(arguments), b = x.max(x.pluck(a, "length")), c = Array(b), d = 0; b > d; d++)c[d] = x.pluck(a, "" + d);
        return c
    }, x.object = function (a, b) {
        if (null == a)return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++)b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, x.indexOf = function (a, b, c) {
        if (null == a)return -1;
        var d = 0, e = a.length;
        if (c) {
            if ("number" != typeof c)return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        if (s && a.indexOf === s)return a.indexOf(b, c);
        for (; e > d; d++)if (a[d] === b)return d;
        return -1
    }, x.lastIndexOf = function (a, b, c) {
        if (null == a)return -1;
        var d = null != c;
        if (t && a.lastIndexOf === t)return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--;)if (a[e] === b)return e;
        return -1
    }, x.range = function (a, b, c) {
        1 >= arguments.length && (b = a || 0, a = 0), c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = Array(d); d > e;)f[e++] = a, a += c;
        return f
    };
    var E = function () {
    };
    x.bind = function (a, b) {
        var c, d;
        if (a.bind === w && w)return w.apply(a, h.call(arguments, 1));
        if (!x.isFunction(a))throw new TypeError;
        return c = h.call(arguments, 2), d = function () {
            if (!(this instanceof d))return a.apply(b, c.concat(h.call(arguments)));
            E.prototype = a.prototype;
            var e = new E;
            E.prototype = null;
            var f = a.apply(e, c.concat(h.call(arguments)));
            return Object(f) === f ? f : e
        }
    }, x.bindAll = function (a) {
        var b = h.call(arguments, 1);
        return 0 == b.length && (b = x.functions(a)), y(b, function (b) {
            a[b] = x.bind(a[b], a)
        }), a
    }, x.memoize = function (a, b) {
        var c = {};
        return b || (b = x.identity), function () {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    }, x.delay = function (a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(null, c)
        }, b)
    }, x.defer = function (a) {
        return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1)))
    }, x.throttle = function (a, b) {
        var c, d, e, f, g = 0, h = function () {
            g = new Date, e = null, f = a.apply(c, d)
        };
        return function () {
            var i = new Date, j = b - (i - g);
            return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
        }
    }, x.debounce = function (a, b, c) {
        var d, e;
        return function () {
            var f = this, g = arguments, h = function () {
                d = null, c || (e = a.apply(f, g))
            }, i = c && !d;
            return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
        }
    }, x.once = function (a) {
        var b, c = !1;
        return function () {
            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b)
        }
    }, x.wrap = function (a, b) {
        return function () {
            var c = [a];
            return g.apply(c, arguments), b.apply(this, c)
        }
    }, x.compose = function () {
        var a = arguments;
        return function () {
            for (var b = arguments, c = a.length - 1; c >= 0; c--)b = [a[c].apply(this, b)];
            return b[0]
        }
    }, x.after = function (a, b) {
        return 0 >= a ? b() : function () {
            return 1 > --a ? b.apply(this, arguments) : void 0
        }
    }, x.keys = v || function (a) {
        if (a !== Object(a))throw new TypeError("Invalid object");
        var b = [];
        for (var c in a)x.has(a, c) && (b[b.length] = c);
        return b
    }, x.values = function (a) {
        var b = [];
        for (var c in a)x.has(a, c) && b.push(a[c]);
        return b
    }, x.pairs = function (a) {
        var b = [];
        for (var c in a)x.has(a, c) && b.push([c, a[c]]);
        return b
    }, x.invert = function (a) {
        var b = {};
        for (var c in a)x.has(a, c) && (b[a[c]] = c);
        return b
    }, x.functions = x.methods = function (a) {
        var b = [];
        for (var c in a)x.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, x.extend = function (a) {
        return y(h.call(arguments, 1), function (b) {
            if (b)for (var c in b)a[c] = b[c]
        }), a
    }, x.pick = function (a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        return y(c, function (c) {
            c in a && (b[c] = a[c])
        }), b
    }, x.omit = function (a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        for (var e in a)x.contains(c, e) || (b[e] = a[e]);
        return b
    }, x.defaults = function (a) {
        return y(h.call(arguments, 1), function (b) {
            if (b)for (var c in b)null == a[c] && (a[c] = b[c])
        }), a
    }, x.clone = function (a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a
    }, x.tap = function (a, b) {
        return b(a), a
    };
    var F = function (a, b, c, d) {
        if (a === b)return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b)return a === b;
        a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b))return !1;
        switch (e) {
            case"[object String]":
                return a == b + "";
            case"[object Number]":
                return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
            case"[object Date]":
            case"[object Boolean]":
                return +a == +b;
            case"[object RegExp]":
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b)return !1;
        for (var f = c.length; f--;)if (c[f] == a)return d[f] == b;
        c.push(a), d.push(b);
        var g = 0, h = !0;
        if ("[object Array]" == e) {
            if (g = a.length, h = g == b.length)for (; g-- && (h = F(a[g], b[g], c, d)););
        } else {
            var i = a.constructor, k = b.constructor;
            if (i !== k && !(x.isFunction(i) && i instanceof i && x.isFunction(k) && k instanceof k))return !1;
            for (var l in a)if (x.has(a, l) && (g++, !(h = x.has(b, l) && F(a[l], b[l], c, d))))break;
            if (h) {
                for (l in b)if (x.has(b, l) && !g--)break;
                h = !g
            }
        }
        return c.pop(), d.pop(), h
    };
    x.isEqual = function (a, b) {
        return F(a, b, [], [])
    }, x.isEmpty = function (a) {
        if (null == a)return !0;
        if (x.isArray(a) || x.isString(a))return 0 === a.length;
        for (var b in a)if (x.has(a, b))return !1;
        return !0
    }, x.isElement = function (a) {
        return !(!a || 1 !== a.nodeType)
    }, x.isArray = u || function (a) {
        return "[object Array]" == j.call(a)
    }, x.isObject = function (a) {
        return a === Object(a)
    }, y(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (a) {
        x["is" + a] = function (b) {
            return j.call(b) == "[object " + a + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function (a) {
        return !(!a || !x.has(a, "callee"))
    }), x.isFunction = function (a) {
        return "function" == typeof a
    }, x.isFinite = function (a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, x.isNaN = function (a) {
        return x.isNumber(a) && a != +a
    }, x.isBoolean = function (a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a)
    }, x.isNull = function (a) {
        return null === a
    }, x.isUndefined = function (a) {
        return void 0 === a
    }, x.has = function (a, b) {
        return k.call(a, b)
    }, x.noConflict = function () {
        return a._ = b, this
    }, x.identity = function (a) {
        return a
    }, x.times = function (a, b, c) {
        for (var d = Array(a), e = 0; a > e; e++)d[e] = b.call(c, e);
        return d
    }, x.random = function (a, b) {
        return null == b && (b = a, a = 0), a + (0 | Math.random() * (b - a + 1))
    };
    var G = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;"}};
    G.unescape = x.invert(G.escape);
    var H = {
        escape: RegExp("[" + x.keys(G.escape).join("") + "]", "g"),
        unescape: RegExp("(" + x.keys(G.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function (a) {
        x[a] = function (b) {
            return null == b ? "" : ("" + b).replace(H[a], function (b) {
                return G[a][b]
            })
        }
    }), x.result = function (a, b) {
        if (null == a)return null;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c
    }, x.mixin = function (a) {
        y(x.functions(a), function (b) {
            var c = x[b] = a[b];
            x.prototype[b] = function () {
                var a = [this._wrapped];
                return g.apply(a, arguments), M.call(this, c.apply(x, a))
            }
        })
    };
    var I = 0;
    x.uniqueId = function (a) {
        var b = "" + ++I;
        return a ? a + b : b
    }, x.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var J = /(.)^/, K = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (a, b, c) {
        c = x.defaults({}, c, x.templateSettings);
        var d = RegExp([(c.escape || J).source, (c.interpolate || J).source, (c.evaluate || J).source].join("|") + "|$", "g"), e = 0, f = "__p+='";
        a.replace(d, function (b, c, d, g, h) {
            return f += a.slice(e, h).replace(L, function (a) {
                return "\\" + K[a]
            }), c && (f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), g && (f += "';\n" + g + "\n__p+='"), e = h + b.length, b
        }), f += "';\n", c.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = Function(c.variable || "obj", "_", f)
        } catch (h) {
            throw h.source = f, h
        }
        if (b)return g(b, x);
        var i = function (a) {
            return g.call(this, a, x)
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + f + "}", i
    }, x.chain = function (a) {
        return x(a).chain()
    };
    var M = function (a) {
        return this._chain ? x(a).chain() : a
    };
    x.mixin(x), y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (a) {
        var b = d[a];
        x.prototype[a] = function () {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], M.call(this, c)
        }
    }), y(["concat", "join", "slice"], function (a) {
        var b = d[a];
        x.prototype[a] = function () {
            return M.call(this, b.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function () {
            return this._chain = !0, this
        }, value: function () {
            return this._wrapped
        }
    })
}).call(this);
!function (a, b) {
    "use strict";
    function c(a, b) {
        var c, d, e = a.toLowerCase();
        for (b = [].concat(b), c = 0; b.length > c; c += 1)if (d = b[c]) {
            if (d.test && d.test(a))return !0;
            if (d.toLowerCase() === e)return !0
        }
    }

    var d = b.prototype.trim, e = b.prototype.trimRight, f = b.prototype.trimLeft, g = function (a) {
        return 1 * a || 0
    }, h = function (a, b) {
        if (1 > b)return "";
        for (var c = ""; b > 0;)1 & b && (c += a), b >>= 1, a += a;
        return c
    }, i = [].slice, j = function (a) {
        return null == a ? "\\s" : a.source ? a.source : "[" + o.escapeRegExp(a) + "]"
    }, k = {lt: "<", gt: ">", quot: '"', amp: "&", apos: "'"}, l = {};
    for (var m in k)l[k[m]] = m;
    l["'"] = "#39";
    var n = function () {
        function a(a) {
            return Object.prototype.toString.call(a).slice(8, -1).toLowerCase()
        }

        var c = h, d = function () {
            return d.cache.hasOwnProperty(arguments[0]) || (d.cache[arguments[0]] = d.parse(arguments[0])), d.format.call(null, d.cache[arguments[0]], arguments)
        };
        return d.format = function (d, e) {
            var f, g, h, i, j, k, l, m = 1, o = d.length, p = "", q = [];
            for (g = 0; o > g; g++)if (p = a(d[g]), "string" === p)q.push(d[g]);
            else if ("array" === p) {
                if (i = d[g], i[2])for (f = e[m], h = 0; i[2].length > h; h++) {
                    if (!f.hasOwnProperty(i[2][h]))throw new Error(n('[_.sprintf] property "%s" does not exist', i[2][h]));
                    f = f[i[2][h]]
                } else f = i[1] ? e[i[1]] : e[m++];
                if (/[^s]/.test(i[8]) && "number" != a(f))throw new Error(n("[_.sprintf] expecting number but found %s", a(f)));
                switch (i[8]) {
                    case"b":
                        f = f.toString(2);
                        break;
                    case"c":
                        f = b.fromCharCode(f);
                        break;
                    case"d":
                        f = parseInt(f, 10);
                        break;
                    case"e":
                        f = i[7] ? f.toExponential(i[7]) : f.toExponential();
                        break;
                    case"f":
                        f = i[7] ? parseFloat(f).toFixed(i[7]) : parseFloat(f);
                        break;
                    case"o":
                        f = f.toString(8);
                        break;
                    case"s":
                        f = (f = b(f)) && i[7] ? f.substring(0, i[7]) : f;
                        break;
                    case"u":
                        f = Math.abs(f);
                        break;
                    case"x":
                        f = f.toString(16);
                        break;
                    case"X":
                        f = f.toString(16).toUpperCase()
                }
                f = /[def]/.test(i[8]) && i[3] && f >= 0 ? "+" + f : f, k = i[4] ? "0" == i[4] ? "0" : i[4].charAt(1) : " ", l = i[6] - b(f).length, j = i[6] ? c(k, l) : "", q.push(i[5] ? f + j : j + f)
            }
            return q.join("")
        }, d.cache = {}, d.parse = function (a) {
            for (var b = a, c = [], d = [], e = 0; b;) {
                if (null !== (c = /^[^\x25]+/.exec(b)))d.push(c[0]); else if (null !== (c = /^\x25{2}/.exec(b)))d.push("%"); else {
                    if (null === (c = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b)))throw new Error("[_.sprintf] huh?");
                    if (c[2]) {
                        e |= 1;
                        var f = [], g = c[2], h = [];
                        if (null === (h = /^([a-z_][a-z_\d]*)/i.exec(g)))throw new Error("[_.sprintf] huh?");
                        for (f.push(h[1]); "" !== (g = g.substring(h[0].length));)if (null !== (h = /^\.([a-z_][a-z_\d]*)/i.exec(g)))f.push(h[1]); else {
                            if (null === (h = /^\[(\d+)\]/.exec(g)))throw new Error("[_.sprintf] huh?");
                            f.push(h[1])
                        }
                        c[2] = f
                    } else e |= 2;
                    if (3 === e)throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                    d.push(c)
                }
                b = b.substring(c[0].length)
            }
            return d
        }, d
    }(), o = {
        VERSION: "2.3.0", isBlank: function (a) {
            return null == a && (a = ""), /^\s*$/.test(a)
        }, stripTags: function (a) {
            return null == a ? "" : b(a).replace(/<\/?[^>]+>/g, "")
        }, capitalize: function (a) {
            return a = null == a ? "" : b(a), a.charAt(0).toUpperCase() + a.slice(1)
        }, chop: function (a, c) {
            return null == a ? [] : (a = b(a), c = ~~c, c > 0 ? a.match(new RegExp(".{1," + c + "}", "g")) : [a])
        }, clean: function (a) {
            return o.strip(a).replace(/\s+/g, " ")
        }, count: function (a, c) {
            if (null == a || null == c)return 0;
            a = b(a), c = b(c);
            for (var d = 0, e = 0, f = c.length; e = a.indexOf(c, e), -1 !== e;)d++, e += f;
            return d
        }, chars: function (a) {
            return null == a ? [] : b(a).split("")
        }, swapCase: function (a) {
            return null == a ? "" : b(a).replace(/\S/g, function (a) {
                return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()
            })
        }, escapeHTML: function (a) {
            return null == a ? "" : b(a).replace(/[&<>"']/g, function (a) {
                return "&" + l[a] + ";"
            })
        }, unescapeHTML: function (a) {
            return null == a ? "" : b(a).replace(/\&([^;]+);/g, function (a, c) {
                var d;
                return c in k ? k[c] : (d = c.match(/^#x([\da-fA-F]+)$/)) ? b.fromCharCode(parseInt(d[1], 16)) : (d = c.match(/^#(\d+)$/)) ? b.fromCharCode(~~d[1]) : a
            })
        }, escapeRegExp: function (a) {
            return null == a ? "" : b(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
        }, splice: function (a, b, c, d) {
            var e = o.chars(a);
            return e.splice(~~b, ~~c, d), e.join("")
        }, insert: function (a, b, c) {
            return o.splice(a, b, 0, c)
        }, include: function (a, c) {
            return "" === c ? !0 : null == a ? !1 : -1 !== b(a).indexOf(c)
        }, join: function () {
            var a = i.call(arguments), b = a.shift();
            return null == b && (b = ""), a.join(b)
        }, lines: function (a) {
            return null == a ? [] : b(a).split("\n")
        }, reverse: function (a) {
            return o.chars(a).reverse().join("")
        }, startsWith: function (a, c) {
            return "" === c ? !0 : null == a || null == c ? !1 : (a = b(a), c = b(c), a.length >= c.length && a.slice(0, c.length) === c)
        }, endsWith: function (a, c) {
            return "" === c ? !0 : null == a || null == c ? !1 : (a = b(a), c = b(c), a.length >= c.length && a.slice(a.length - c.length) === c)
        }, succ: function (a) {
            return null == a ? "" : (a = b(a), a.slice(0, -1) + b.fromCharCode(a.charCodeAt(a.length - 1) + 1))
        }, titleize: function (a) {
            return null == a ? "" : (a = b(a).toLowerCase(), a.replace(/(?:^|\s|-)\S/g, function (a) {
                return a.toUpperCase()
            }))
        }, camelize: function (a) {
            return o.trim(a).replace(/[-_\s]+(.)?/g, function (a, b) {
                return b ? b.toUpperCase() : ""
            })
        }, underscored: function (a) {
            return o.trim(a).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()
        }, dasherize: function (a) {
            return o.trim(a).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
        }, classify: function (a) {
            return o.titleize(b(a).replace(/[\W_]/g, " ")).replace(/\s/g, "")
        }, humanize: function (a) {
            return o.capitalize(o.underscored(a).replace(/_id$/, "").replace(/_/g, " "))
        }, trim: function (a, c) {
            return null == a ? "" : !c && d ? d.call(a) : (c = j(c), b(a).replace(new RegExp("^" + c + "+|" + c + "+$", "g"), ""))
        }, ltrim: function (a, c) {
            return null == a ? "" : !c && f ? f.call(a) : (c = j(c), b(a).replace(new RegExp("^" + c + "+"), ""))
        }, rtrim: function (a, c) {
            return null == a ? "" : !c && e ? e.call(a) : (c = j(c), b(a).replace(new RegExp(c + "+$"), ""))
        }, truncate: function (a, c, d) {
            return null == a ? "" : (a = b(a), d = d || "...", c = ~~c, a.length > c ? a.slice(0, c) + d : a)
        }, prune: function (a, c, d) {
            if (null == a)return "";
            if (a = b(a), c = ~~c, d = null != d ? b(d) : "...", c >= a.length)return a;
            var e = function (a) {
                return a.toUpperCase() !== a.toLowerCase() ? "A" : " "
            }, f = a.slice(0, c + 1).replace(/.(?=\W*\w*$)/g, e);
            return f = f.slice(f.length - 2).match(/\w\w/) ? f.replace(/\s*\S+$/, "") : o.rtrim(f.slice(0, f.length - 1)), (f + d).length > a.length ? a : a.slice(0, f.length) + d
        }, words: function (a, b) {
            return o.isBlank(a) ? [] : o.trim(a, b).split(b || /\s+/)
        }, pad: function (a, c, d, e) {
            a = null == a ? "" : b(a), c = ~~c;
            var f = 0;
            switch (d ? d.length > 1 && (d = d.charAt(0)) : d = " ", e) {
                case"right":
                    return f = c - a.length, a + h(d, f);
                case"both":
                    return f = c - a.length, h(d, Math.ceil(f / 2)) + a + h(d, Math.floor(f / 2));
                default:
                    return f = c - a.length, h(d, f) + a
            }
        }, lpad: function (a, b, c) {
            return o.pad(a, b, c)
        }, rpad: function (a, b, c) {
            return o.pad(a, b, c, "right")
        }, lrpad: function (a, b, c) {
            return o.pad(a, b, c, "both")
        }, sprintf: n, vsprintf: function (a, b) {
            return b.unshift(a), n.apply(null, b)
        }, toNumber: function (a, b) {
            return a ? (a = o.trim(a), a.match(/^-?\d+(?:\.\d+)?$/) ? g(g(a).toFixed(~~b)) : 0 / 0) : 0
        }, numberFormat: function (a, b, c, d) {
            if (isNaN(a) || null == a)return "";
            a = a.toFixed(~~b), d = "string" == typeof d ? d : ",";
            var e = a.split("."), f = e[0], g = e[1] ? (c || ".") + e[1] : "";
            return f.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + d) + g
        }, strRight: function (a, c) {
            if (null == a)return "";
            a = b(a), c = null != c ? b(c) : c;
            var d = c ? a.indexOf(c) : -1;
            return ~d ? a.slice(d + c.length, a.length) : a
        }, strRightBack: function (a, c) {
            if (null == a)return "";
            a = b(a), c = null != c ? b(c) : c;
            var d = c ? a.lastIndexOf(c) : -1;
            return ~d ? a.slice(d + c.length, a.length) : a
        }, strLeft: function (a, c) {
            if (null == a)return "";
            a = b(a), c = null != c ? b(c) : c;
            var d = c ? a.indexOf(c) : -1;
            return ~d ? a.slice(0, d) : a
        }, strLeftBack: function (a, b) {
            if (null == a)return "";
            a += "", b = null != b ? "" + b : b;
            var c = a.lastIndexOf(b);
            return ~c ? a.slice(0, c) : a
        }, toSentence: function (a, b, c, d) {
            b = b || ", ", c = c || " and ";
            var e = a.slice(), f = e.pop();
            return a.length > 2 && d && (c = o.rtrim(b) + c), e.length ? e.join(b) + c + f : f
        }, toSentenceSerial: function () {
            var a = i.call(arguments);
            return a[3] = !0, o.toSentence.apply(o, a)
        }, slugify: function (a) {
            if (null == a)return "";
            var c = "aaaaaaa?aceeeeeiiiilnoooooos??uuuunczz", d = "aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz", e = new RegExp(j(c), "g");
            return a = b(a).toLowerCase().replace(e, function (a) {
                var b = c.indexOf(a);
                return d.charAt(b) || "-"
            }), o.dasherize(a.replace(/[^\w\s-]/g, ""))
        }, surround: function (a, b) {
            return [b, a, b].join("")
        }, quote: function (a, b) {
            return o.surround(a, b || '"')
        }, unquote: function (a, b) {
            return b = b || '"', a[0] === b && a[a.length - 1] === b ? a.slice(1, a.length - 1) : a
        }, exports: function () {
            var a = {};
            for (var b in this)this.hasOwnProperty(b) && !b.match(/^(?:include|contains|reverse)$/) && (a[b] = this[b]);
            return a
        }, repeat: function (a, c, d) {
            if (null == a)return "";
            if (c = ~~c, null == d)return h(b(a), c);
            for (var e = []; c > 0; e[--c] = a);
            return e.join(d)
        }, naturalCmp: function (a, c) {
            if (a == c)return 0;
            if (!a)return -1;
            if (!c)return 1;
            for (var d = /(\.\d+)|(\d+)|(\D+)/g, e = b(a).toLowerCase().match(d), f = b(c).toLowerCase().match(d), g = Math.min(e.length, f.length), h = 0; g > h; h++) {
                var i = e[h], j = f[h];
                if (i !== j) {
                    var k = parseInt(i, 10);
                    if (!isNaN(k)) {
                        var l = parseInt(j, 10);
                        if (!isNaN(l) && k - l)return k - l
                    }
                    return j > i ? -1 : 1
                }
            }
            return e.length === f.length ? e.length - f.length : c > a ? -1 : 1
        }, levenshtein: function (a, c) {
            if (null == a && null == c)return 0;
            if (null == a)return b(c).length;
            if (null == c)return b(a).length;
            a = b(a), c = b(c);
            for (var d, e, f = [], g = 0; c.length >= g; g++)for (var h = 0; a.length >= h; h++)e = g && h ? a.charAt(h - 1) === c.charAt(g - 1) ? d : Math.min(f[h], f[h - 1], d) + 1 : g + h, d = f[h], f[h] = e;
            return f.pop()
        }, toBoolean: function (a, b, d) {
            return "number" == typeof a && (a = "" + a), "string" != typeof a ? !!a : (a = o.trim(a), c(a, b || ["true", "1"]) ? !0 : c(a, d || ["false", "0"]) ? !1 : void 0)
        }
    };
    o.strip = o.trim, o.lstrip = o.ltrim, o.rstrip = o.rtrim, o.center = o.lrpad, o.rjust = o.lpad, o.ljust = o.rpad, o.contains = o.include, o.q = o.quote, o.toBool = o.toBoolean, "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (module.exports = o), exports._s = o), "function" == typeof define && define.amd && define("underscore.string", [], function () {
        return o
    }), a._ = a._ || {}, a._.string = a._.str = o
}(this, String);
(function () {
    var a, b = this, c = b.Backbone, d = [], e = d.push, f = d.slice, g = d.splice;
    a = "undefined" != typeof exports ? exports : b.Backbone = {};
    a.VERSION = "0.9.9";
    var h = b._;
    h || "undefined" == typeof require || (h = require("underscore"));
    a.$ = b.jQuery || b.Zepto || b.ender;
    a.noConflict = function () {
        b.Backbone = c;
        return this
    };
    a.emulateHTTP = !1;
    a.emulateJSON = !1;
    var i = /\s+/, j = function (a, b, c, d) {
        if (!c)return !0;
        if ("object" == typeof c)for (var e in c)a[b].apply(a, [e, c[e]].concat(d)); else {
            if (!i.test(c))return !0;
            for (var f = c.split(i), g = 0, h = f.length; h > g; g++)a[b].apply(a, [f[g]].concat(d))
        }
    }, k = function (a, b, c) {
        var d, e = -1, f = b.length;
        switch (c.length) {
            case 0:
                for (; ++e < f;)(d = b[e]).callback.call(d.ctx);
                return;
            case 1:
                for (; ++e < f;)(d = b[e]).callback.call(d.ctx, c[0]);
                return;
            case 2:
                for (; ++e < f;)(d = b[e]).callback.call(d.ctx, c[0], c[1]);
                return;
            case 3:
                for (; ++e < f;)(d = b[e]).callback.call(d.ctx, c[0], c[1], c[2]);
                return;
            default:
                for (; ++e < f;)(d = b[e]).callback.apply(d.ctx, c)
        }
    }, l = a.Events = {
        on: function (a, b, c) {
            if (!j(this, "on", a, [b, c]) || !b)return this;
            this._events || (this._events = {});
            var d = this._events[a] || (this._events[a] = []);
            d.push({callback: b, context: c, ctx: c || this});
            return this
        }, once: function (a, b, c) {
            if (!j(this, "once", a, [b, c]) || !b)return this;
            var d = this, e = h.once(function () {
                d.off(a, e);
                b.apply(this, arguments)
            });
            e._callback = b;
            this.on(a, e, c);
            return this
        }, off: function (a, b, c) {
            var d, e, f, g, i, k, l, m;
            if (!this._events || !j(this, "off", a, [b, c]))return this;
            if (!a && !b && !c) {
                this._events = {};
                return this
            }
            g = a ? [a] : h.keys(this._events);
            for (i = 0, k = g.length; k > i; i++) {
                a = g[i];
                if (d = this._events[a]) {
                    f = [];
                    if (b || c)for (l = 0, m = d.length; m > l; l++) {
                        e = d[l];
                        (b && b !== (e.callback._callback || e.callback) || c && c !== e.context) && f.push(e)
                    }
                    this._events[a] = f
                }
            }
            return this
        }, trigger: function (a) {
            if (!this._events)return this;
            var b = f.call(arguments, 1);
            if (!j(this, "trigger", a, b))return this;
            var c = this._events[a], d = this._events.all;
            c && k(this, c, b);
            d && k(this, d, arguments);
            return this
        }, listenTo: function (a, b, c) {
            var d = this._listeners || (this._listeners = {}), e = a._listenerId || (a._listenerId = h.uniqueId("l"));
            d[e] = a;
            a.on(b, c || this, this);
            return this
        }, stopListening: function (a, b, c) {
            var d = this._listeners;
            if (d) {
                if (a) {
                    a.off(b, c, this);
                    b || c || delete d[a._listenerId]
                } else {
                    for (var e in d)d[e].off(null, null, this);
                    this._listeners = {}
                }
                return this
            }
        }
    };
    l.bind = l.on;
    l.unbind = l.off;
    h.extend(a, l);
    var m = a.Model = function (a, b) {
        var c, d = a || {};
        this.cid = h.uniqueId("c");
        this.changed = {};
        this.attributes = {};
        this._changes = [];
        b && b.collection && (this.collection = b.collection);
        b && b.parse && (d = this.parse(d));
        (c = h.result(this, "defaults")) && h.defaults(d, c);
        this.set(d, {silent: !0});
        this._currentAttributes = h.clone(this.attributes);
        this._previousAttributes = h.clone(this.attributes);
        this.initialize.apply(this, arguments)
    };
    h.extend(m.prototype, l, {
        changed: null, idAttribute: "id", initialize: function () {
        }, toJSON: function () {
            return h.clone(this.attributes)
        }, sync: function () {
            return a.sync.apply(this, arguments)
        }, get: function (a) {
            return this.attributes[a]
        }, escape: function (a) {
            return h.escape(this.get(a))
        }, has: function (a) {
            return null != this.get(a)
        }, set: function (a, b, c) {
            var d, e;
            if (null == a)return this;
            if (h.isObject(a)) {
                e = a;
                c = b
            } else(e = {})[a] = b;
            var f = c && c.silent, g = c && c.unset;
            if (!this._validate(e, c))return !1;
            this.idAttribute in e && (this.id = e[this.idAttribute]);
            var i = this.attributes;
            for (d in e) {
                b = e[d];
                g ? delete i[d] : i[d] = b;
                this._changes.push(d, b)
            }
            this._hasComputed = !1;
            f || this.change(c);
            return this
        }, unset: function (a, b) {
            return this.set(a, void 0, h.extend({}, b, {unset: !0}))
        }, clear: function (a) {
            var b = {};
            for (var c in this.attributes)b[c] = void 0;
            return this.set(b, h.extend({}, a, {unset: !0}))
        }, fetch: function (a) {
            a = a ? h.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var b = this, c = a.success;
            a.success = function (d) {
                if (!b.set(b.parse(d), a))return !1;
                c && c(b, d, a);
                return void 0
            };
            return this.sync("read", this, a)
        }, save: function (a, b, c) {
            var d, e, f;
            if (null == a || h.isObject(a)) {
                d = a;
                c = b
            } else null != a && ((d = {})[a] = b);
            c = c ? h.clone(c) : {};
            if (c.wait) {
                if (d && !this._validate(d, c))return !1;
                e = h.clone(this.attributes)
            }
            var g = h.extend({}, c, {silent: !0});
            if (d && !this.set(d, c.wait ? g : c))return !1;
            if (!d && !this._validate(null, c))return !1;
            var i = this, j = c.success;
            c.success = function (a) {
                f = !0;
                var b = i.parse(a);
                c.wait && (b = h.extend(d || {}, b));
                if (!i.set(b, c))return !1;
                j && j(i, a, c);
                return void 0
            };
            var k = this.isNew() ? "create" : c.patch ? "patch" : "update";
            "patch" == k && (c.attrs = d);
            var l = this.sync(k, this, c);
            if (!f && c.wait) {
                this.clear(g);
                this.set(e, g)
            }
            return l
        }, destroy: function (a) {
            a = a ? h.clone(a) : {};
            var b = this, c = a.success, d = function () {
                b.trigger("destroy", b, b.collection, a)
            };
            a.success = function (e) {
                (a.wait || b.isNew()) && d();
                c && c(b, e, a)
            };
            if (this.isNew()) {
                a.success();
                return !1
            }
            var e = this.sync("delete", this, a);
            a.wait || d();
            return e
        }, url: function () {
            var a = h.result(this, "urlRoot") || h.result(this.collection, "url") || F();
            return this.isNew() ? a : a + ("/" === a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        }, parse: function (a) {
            return a
        }, clone: function () {
            return new this.constructor(this.attributes)
        }, isNew: function () {
            return null == this.id
        }, change: function (a) {
            var b = this._changing;
            this._changing = !0;
            var c = this._computeChanges(!0);
            this._pending = !!c.length;
            for (var d = c.length - 2; d >= 0; d -= 2)this.trigger("change:" + c[d], this, c[d + 1], a);
            if (b)return this;
            for (; this._pending;) {
                this._pending = !1;
                this.trigger("change", this, a);
                this._previousAttributes = h.clone(this.attributes)
            }
            this._changing = !1;
            return this
        }, hasChanged: function (a) {
            this._hasComputed || this._computeChanges();
            return null == a ? !h.isEmpty(this.changed) : h.has(this.changed, a)
        }, changedAttributes: function (a) {
            if (!a)return this.hasChanged() ? h.clone(this.changed) : !1;
            var b, c = !1, d = this._previousAttributes;
            for (var e in a)h.isEqual(d[e], b = a[e]) || ((c || (c = {}))[e] = b);
            return c
        }, _computeChanges: function (a) {
            this.changed = {};
            for (var b = {}, c = [], d = this._currentAttributes, e = this._changes, f = e.length - 2; f >= 0; f -= 2) {
                var g = e[f], h = e[f + 1];
                if (!b[g]) {
                    b[g] = !0;
                    if (d[g] !== h) {
                        this.changed[g] = h;
                        if (!a)continue;
                        c.push(g, h);
                        d[g] = h
                    }
                }
            }
            a && (this._changes = []);
            this._hasComputed = !0;
            return c
        }, previous: function (a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        }, previousAttributes: function () {
            return h.clone(this._previousAttributes)
        }, _validate: function (a, b) {
            if (!this.validate)return !0;
            a = h.extend({}, this.attributes, a);
            var c = this.validate(a, b);
            if (!c)return !0;
            b && b.error && b.error(this, c, b);
            this.trigger("error", this, c, b);
            return !1
        }
    });
    var n = a.Collection = function (a, b) {
        b || (b = {});
        b.model && (this.model = b.model);
        void 0 !== b.comparator && (this.comparator = b.comparator);
        this._reset();
        this.initialize.apply(this, arguments);
        a && this.reset(a, h.extend({silent: !0}, b))
    };
    h.extend(n.prototype, l, {
        model: m, initialize: function () {
        }, toJSON: function (a) {
            return this.map(function (b) {
                return b.toJSON(a)
            })
        }, sync: function () {
            return a.sync.apply(this, arguments)
        }, add: function (a, b) {
            var c, d, f, i, j, k = b && b.at, l = null == (b && b.sort) ? !0 : b.sort;
            a = h.isArray(a) ? a.slice() : [a];
            for (c = a.length - 1; c >= 0; c--)if (f = this._prepareModel(a[c], b)) {
                a[c] = f;
                i = null != f.id && this._byId[f.id];
                if (i || this._byCid[f.cid]) {
                    if (b && b.merge && i) {
                        i.set(f.attributes, b);
                        j = l
                    }
                    a.splice(c, 1)
                } else {
                    f.on("all", this._onModelEvent, this);
                    this._byCid[f.cid] = f;
                    null != f.id && (this._byId[f.id] = f)
                }
            } else {
                this.trigger("error", this, a[c], b);
                a.splice(c, 1)
            }
            a.length && (j = l);
            this.length += a.length;
            d = [null != k ? k : this.models.length, 0];
            e.apply(d, a);
            g.apply(this.models, d);
            j && this.comparator && null == k && this.sort({silent: !0});
            if (b && b.silent)return this;
            for (; f = a.shift();)f.trigger("add", f, this, b);
            return this
        }, remove: function (a, b) {
            var c, d, e, f;
            b || (b = {});
            a = h.isArray(a) ? a.slice() : [a];
            for (c = 0, d = a.length; d > c; c++) {
                f = this.get(a[c]);
                if (f) {
                    delete this._byId[f.id];
                    delete this._byCid[f.cid];
                    e = this.indexOf(f);
                    this.models.splice(e, 1);
                    this.length--;
                    if (!b.silent) {
                        b.index = e;
                        f.trigger("remove", f, this, b)
                    }
                    this._removeReference(f)
                }
            }
            return this
        }, push: function (a, b) {
            a = this._prepareModel(a, b);
            this.add(a, h.extend({at: this.length}, b));
            return a
        }, pop: function (a) {
            var b = this.at(this.length - 1);
            this.remove(b, a);
            return b
        }, unshift: function (a, b) {
            a = this._prepareModel(a, b);
            this.add(a, h.extend({at: 0}, b));
            return a
        }, shift: function (a) {
            var b = this.at(0);
            this.remove(b, a);
            return b
        }, slice: function (a, b) {
            return this.models.slice(a, b)
        }, get: function (a) {
            return null == a ? void 0 : this._byId[null != a.id ? a.id : a] || this._byCid[a.cid || a]
        }, at: function (a) {
            return this.models[a]
        }, where: function (a) {
            return h.isEmpty(a) ? [] : this.filter(function (b) {
                for (var c in a)if (a[c] !== b.get(c))return !1;
                return !0
            })
        }, sort: function (a) {
            if (!this.comparator)throw new Error("Cannot sort a set without a comparator");
            h.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(h.bind(this.comparator, this));
            a && a.silent || this.trigger("sort", this, a);
            return this
        }, pluck: function (a) {
            return h.invoke(this.models, "get", a)
        }, update: function (a, b) {
            var c, d, e, f, g = [], i = [], j = {}, k = this.model.prototype.idAttribute;
            b = h.extend({add: !0, merge: !0, remove: !0}, b);
            b.parse && (a = this.parse(a));
            h.isArray(a) || (a = a ? [a] : []);
            if (b.add && !b.remove)return this.add(a, b);
            for (d = 0, e = a.length; e > d; d++) {
                c = a[d];
                f = this.get(c.id || c.cid || c[k]);
                b.remove && f && (j[f.cid] = !0);
                (b.add && !f || b.merge && f) && g.push(c)
            }
            if (b.remove)for (d = 0, e = this.models.length; e > d; d++) {
                c = this.models[d];
                j[c.cid] || i.push(c)
            }
            i.length && this.remove(i, b);
            g.length && this.add(g, b);
            return this
        }, reset: function (a, b) {
            b || (b = {});
            b.parse && (a = this.parse(a));
            for (var c = 0, d = this.models.length; d > c; c++)this._removeReference(this.models[c]);
            b.previousModels = this.models;
            this._reset();
            a && this.add(a, h.extend({silent: !0}, b));
            b.silent || this.trigger("reset", this, b);
            return this
        }, fetch: function (a) {
            a = a ? h.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var b = this, c = a.success;
            a.success = function (d) {
                var e = a.update ? "update" : "reset";
                b[e](d, a);
                c && c(b, d, a)
            };
            return this.sync("read", this, a)
        }, create: function (a, b) {
            var c = this;
            b = b ? h.clone(b) : {};
            a = this._prepareModel(a, b);
            if (!a)return !1;
            b.wait || c.add(a, b);
            var d = b.success;
            b.success = function (a, b, e) {
                e.wait && c.add(a, e);
                d && d(a, b, e)
            };
            a.save(null, b);
            return a
        }, parse: function (a) {
            return a
        }, clone: function () {
            return new this.constructor(this.models)
        }, chain: function () {
            return h(this.models).chain()
        }, _reset: function () {
            this.length = 0;
            this.models = [];
            this._byId = {};
            this._byCid = {}
        }, _prepareModel: function (a, b) {
            if (a instanceof m) {
                a.collection || (a.collection = this);
                return a
            }
            b || (b = {});
            b.collection = this;
            var c = new this.model(a, b);
            return c._validate(a, b) ? c : !1
        }, _removeReference: function (a) {
            this === a.collection && delete a.collection;
            a.off("all", this._onModelEvent, this)
        }, _onModelEvent: function (a, b, c, d) {
            if ("add" !== a && "remove" !== a || c === this) {
                "destroy" === a && this.remove(b, d);
                if (b && a === "change:" + b.idAttribute) {
                    delete this._byId[b.previous(b.idAttribute)];
                    null != b.id && (this._byId[b.id] = b)
                }
                this.trigger.apply(this, arguments)
            }
        }
    });
    var o = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortedIndex", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty"];
    h.each(o, function (a) {
        n.prototype[a] = function () {
            var b = f.call(arguments);
            b.unshift(this.models);
            return h[a].apply(h, b)
        }
    });
    var p = ["groupBy", "countBy", "sortBy"];
    h.each(p, function (a) {
        n.prototype[a] = function (b, c) {
            var d = h.isFunction(b) ? b : function (a) {
                return a.get(b)
            };
            return h[a](this.models, d, c)
        }
    });
    var q = a.Router = function (a) {
        a || (a = {});
        a.routes && (this.routes = a.routes);
        this._bindRoutes();
        this.initialize.apply(this, arguments)
    }, r = /\((.*?)\)/g, s = /:\w+/g, t = /\*\w+/g, u = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    h.extend(q.prototype, l, {
        initialize: function () {
        }, route: function (b, c, d) {
            h.isRegExp(b) || (b = this._routeToRegExp(b));
            d || (d = this[c]);
            a.history.route(b, h.bind(function (e) {
                var f = this._extractParameters(b, e);
                d && d.apply(this, f);
                this.trigger.apply(this, ["route:" + c].concat(f));
                a.history.trigger("route", this, c, f)
            }, this));
            return this
        }, navigate: function (b, c) {
            a.history.navigate(b, c);
            return this
        }, _bindRoutes: function () {
            if (this.routes)for (var a, b = h.keys(this.routes); null != (a = b.pop());)this.route(a, this.routes[a])
        }, _routeToRegExp: function (a) {
            a = a.replace(u, "\\$&").replace(r, "(?:$1)?").replace(s, "([^/]+)").replace(t, "(.*?)");
            return new RegExp("^" + a + "$")
        }, _extractParameters: function (a, b) {
            return a.exec(b).slice(1)
        }
    });
    var v = a.History = function () {
        this.handlers = [];
        h.bindAll(this, "checkUrl");
        if ("undefined" != typeof window) {
            this.location = window.location;
            this.history = window.history
        }
    }, w = /^[#\/]|\s+$/g, x = /^\/+|\/+$/g, y = /msie [\w.]+/, z = /\/$/;
    v.started = !1;
    h.extend(v.prototype, l, {
        interval: 50, getHash: function (a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : ""
        }, getFragment: function (a, b) {
            if (null == a)if (this._hasPushState || !this._wantsHashChange || b) {
                a = this.location.pathname;
                var c = this.root.replace(z, "");
                a.indexOf(c) || (a = a.substr(c.length))
            } else a = this.getHash();
            return a.replace(w, "")
        }, start: function (b) {
            if (v.started)throw new Error("Backbone.history has already been started");
            v.started = !0;
            this.options = h.extend({}, {root: "/"}, this.options, b);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== !1;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var c = this.getFragment(), d = document.documentMode, e = y.exec(navigator.userAgent.toLowerCase()) && (!d || 7 >= d);
            this.root = ("/" + this.root + "/").replace(x, "/");
            if (e && this._wantsHashChange) {
                this.iframe = a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
                this.navigate(c)
            }
            this._hasPushState ? a.$(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !e ? a.$(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval));
            this.fragment = c;
            var f = this.location, g = f.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !g) {
                this.fragment = this.getFragment(null, !0);
                this.location.replace(this.root + this.location.search + "#" + this.fragment);
                return !0
            }
            if (this._wantsPushState && this._hasPushState && g && f.hash) {
                this.fragment = this.getHash().replace(w, "");
                this.history.replaceState({}, document.title, this.root + this.fragment + f.search)
            }
            return this.options.silent ? void 0 : this.loadUrl()
        }, stop: function () {
            a.$(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl);
            clearInterval(this._checkUrlInterval);
            v.started = !1
        }, route: function (a, b) {
            this.handlers.unshift({route: a, callback: b})
        }, checkUrl: function () {
            var a = this.getFragment();
            a === this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe)));
            if (a === this.fragment)return !1;
            this.iframe && this.navigate(a);
            this.loadUrl() || this.loadUrl(this.getHash())
        }, loadUrl: function (a) {
            var b = this.fragment = this.getFragment(a), c = h.any(this.handlers, function (a) {
                if (a.route.test(b)) {
                    a.callback(b);
                    return !0
                }
            });
            return c
        }, navigate: function (a, b) {
            if (!v.started)return !1;
            b && b !== !0 || (b = {trigger: b});
            a = this.getFragment(a || "");
            if (this.fragment !== a) {
                this.fragment = a;
                var c = this.root + a;
                if (this._hasPushState)this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c); else {
                    if (!this._wantsHashChange)return this.location.assign(c);
                    this._updateHash(this.location, a, b.replace);
                    if (this.iframe && a !== this.getFragment(this.getHash(this.iframe))) {
                        b.replace || this.iframe.document.open().close();
                        this._updateHash(this.iframe.location, a, b.replace)
                    }
                }
                b.trigger && this.loadUrl(a)
            }
        }, _updateHash: function (a, b, c) {
            if (c) {
                var d = a.href.replace(/(javascript:|#).*$/, "");
                a.replace(d + "#" + b)
            } else a.hash = "#" + b
        }
    });
    a.history = new v;
    var A = a.View = function (a) {
        this.cid = h.uniqueId("view");
        this._configure(a || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
    }, B = /^(\S+)\s*(.*)$/, C = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    h.extend(A.prototype, l, {
        tagName: "div", $: function (a) {
            return this.$el.find(a)
        }, initialize: function () {
        }, render: function () {
            return this
        }, remove: function () {
            this.$el.remove();
            this.stopListening();
            return this
        }, make: function (b, c, d) {
            var e = document.createElement(b);
            c && a.$(e).attr(c);
            null != d && a.$(e).html(d);
            return e
        }, setElement: function (b, c) {
            this.$el && this.undelegateEvents();
            this.$el = b instanceof a.$ ? b : a.$(b);
            this.el = this.$el[0];
            c !== !1 && this.delegateEvents();
            return this
        }, delegateEvents: function (a) {
            if (a || (a = h.result(this, "events"))) {
                this.undelegateEvents();
                for (var b in a) {
                    var c = a[b];
                    h.isFunction(c) || (c = this[a[b]]);
                    if (!c)throw new Error('Method "' + a[b] + '" does not exist');
                    var d = b.match(B), e = d[1], f = d[2];
                    c = h.bind(c, this);
                    e += ".delegateEvents" + this.cid;
                    "" === f ? this.$el.bind(e, c) : this.$el.delegate(f, e, c)
                }
            }
        }, undelegateEvents: function () {
            this.$el.unbind(".delegateEvents" + this.cid)
        }, _configure: function (a) {
            this.options && (a = h.extend({}, h.result(this, "options"), a));
            h.extend(this, h.pick(a, C));
            this.options = a
        }, _ensureElement: function () {
            if (this.el)this.setElement(h.result(this, "el"), !1); else {
                var a = h.extend({}, h.result(this, "attributes"));
                this.id && (a.id = h.result(this, "id"));
                this.className && (a["class"] = h.result(this, "className"));
                this.setElement(this.make(h.result(this, "tagName"), a), !1)
            }
        }
    });
    var D = {create: "POST", update: "PUT", patch: "PATCH", "delete": "DELETE", read: "GET"};
    a.sync = function (b, c, d) {
        var e = D[b];
        h.defaults(d || (d = {}), {emulateHTTP: a.emulateHTTP, emulateJSON: a.emulateJSON});
        var f = {type: e, dataType: "json"};
        d.url || (f.url = h.result(c, "url") || F());
        if (null == d.data && c && ("create" === b || "update" === b || "patch" === b)) {
            f.contentType = "application/json";
            f.data = JSON.stringify(d.attrs || c.toJSON(d))
        }
        if (d.emulateJSON) {
            f.contentType = "application/x-www-form-urlencoded";
            f.data = f.data ? {model: f.data} : {}
        }
        if (d.emulateHTTP && ("PUT" === e || "DELETE" === e || "PATCH" === e)) {
            f.type = "POST";
            d.emulateJSON && (f.data._method = e);
            var g = d.beforeSend;
            d.beforeSend = function (a) {
                a.setRequestHeader("X-HTTP-Method-Override", e);
                return g ? g.apply(this, arguments) : void 0
            }
        }
        "GET" === f.type || d.emulateJSON || (f.processData = !1);
        var i = d.success;
        d.success = function (a, b, e) {
            i && i(a, b, e);
            c.trigger("sync", c, a, d)
        };
        var j = d.error;
        d.error = function (a) {
            j && j(c, a, d);
            c.trigger("error", c, a, d)
        };
        var k = a.ajax(h.extend(f, d));
        c.trigger("request", c, k, d);
        return k
    };
    a.ajax = function () {
        return a.$.ajax.apply(a.$, arguments)
    };
    var E = function (a, b) {
        var c, d = this;
        c = a && h.has(a, "constructor") ? a.constructor : function () {
            d.apply(this, arguments)
        };
        h.extend(c, d, b);
        var e = function () {
            this.constructor = c
        };
        e.prototype = d.prototype;
        c.prototype = new e;
        a && h.extend(c.prototype, a);
        c.__super__ = d.prototype;
        return c
    };
    m.extend = n.extend = q.extend = A.extend = v.extend = E;
    var F = function () {
        throw new Error('A "url" property or function must be specified')
    }
}).call(this);
!function () {
    "use strict";
    var a = [];
    Backbone.NestedModel = Backbone.Model.extend({
        get: function (a) {
            var b, c = Backbone.NestedModel.attrPath(a);
            Backbone.NestedModel.walkPath(this.attributes, c, function (a, d) {
                var e = _.last(d);
                d.length === c.length && (b = a[e])
            });
            return b
        }, has: function (a) {
            var b = this.get(a);
            return !(null === b || _.isUndefined(b))
        }, set: function (a, b, c) {
            var d, e = Backbone.NestedModel.deepClone(this.attributes);
            _.isString(a) ? d = Backbone.NestedModel.attrPath(a) : _.isArray(a) && (d = a);
            if (d) {
                c = c || {};
                this._setAttr(e, d, b, c)
            } else {
                c = b || {};
                var f = a;
                for (var g in f)f.hasOwnProperty(g) && this._setAttr(e, Backbone.NestedModel.attrPath(g), c.unset ? null : f[g], c)
            }
            if (!this._validate(e, c)) {
                this.changed = {};
                return !1
            }
            if (c.unset && d && 1 === d.length) {
                var h = {};
                h[a] = null;
                Backbone.NestedModel.__super__.set.call(this, h, c)
            } else {
                if (c.unset && d) {
                    c = _.extend({}, c);
                    delete c.unset
                }
                Backbone.NestedModel.__super__.set.call(this, e, c)
            }
            this._runDelayedTriggers();
            return this
        }, clear: function (a) {
            a = a || {};
            if (!a.silent && this.validate && !this.validate({}, a))return !1;
            var b = this.changed = {}, c = this, d = function (e, f) {
                _.each(e, function (g, h) {
                    var i = f;
                    _.isArray(e) ? i += "[" + h + "]" : f ? i += "." + h : i = h;
                    g = e[h];
                    _.isObject(g) && d(g, i);
                    a.silent || c._delayedChange(i, null);
                    b[i] = null
                })
            };
            d(this.attributes, "");
            this.attributes = {};
            this._escapedAttributes = {};
            a.silent || this._delayedTrigger("change");
            this._runDelayedTriggers();
            return this
        }, add: function (a, b, c) {
            var d = this.get(a);
            if (!_.isArray(d))throw new Error("current value is not an array");
            return this.set(a + "[" + d.length + "]", b, c)
        }, remove: function (a, b) {
            b = b || {};
            var c = Backbone.NestedModel.attrPath(a), d = _.initial(c), e = this.get(d), f = _.last(c);
            if (!_.isArray(e))throw new Error("remove() must be called on a nested array");
            var g = !b.silent && e.length >= f + 1, h = e[f];
            e.splice(f, 1);
            b.silent = !0;
            this.set(d, e, b);
            if (g) {
                a = Backbone.NestedModel.createAttrStr(d);
                this.trigger("remove:" + a, this, h);
                for (var i = d.length; i >= 1; i--) {
                    a = Backbone.NestedModel.createAttrStr(_.first(d, i));
                    this.trigger("change:" + a, this, h)
                }
                this.trigger("change", this, h)
            }
            return this
        }, toJSON: function () {
            return Backbone.NestedModel.deepClone(this.attributes)
        }, _delayedTrigger: function () {
            a.push(arguments)
        }, _delayedChange: function (a, b) {
            this._delayedTrigger("change:" + a, this, b);
            this.changed[a] = b
        }, _runDelayedTriggers: function () {
            for (; a.length > 0;)this.trigger.apply(this, a.shift())
        }, _setAttr: function (a, b, c, d) {
            d = d || {};
            var e = b.length, f = this;
            Backbone.NestedModel.walkPath(a, b, function (a, g) {
                var h = _.last(g), i = Backbone.NestedModel.createAttrStr(g), j = !_.isEqual(a[h], c);
                if (g.length === e) {
                    if (d.unset) {
                        delete a[h];
                        delete f._escapedAttributes[i]
                    } else a[h] = c;
                    if (!d.silent && _.isObject(c) && j) {
                        var k = function (a, b) {
                            var c, d;
                            for (var e in a)if (a.hasOwnProperty(e)) {
                                c = b + "." + e;
                                d = a[e];
                                _.isEqual(f.get(c), d) || f._delayedChange(c, d);
                                _.isObject(d) && k(d, c)
                            }
                        };
                        k(c, i)
                    }
                    if (null === c) {
                        var l = Backbone.NestedModel.createAttrStr(_.initial(b));
                        f._delayedTrigger("remove:" + l, f, a[h])
                    }
                } else a[h] || (a[h] = _.isNumber(h) ? [] : {});
                if (!d.silent) {
                    g.length > 1 && j && f._delayedChange(i, a[h]);
                    _.isArray(a[h]) && f._delayedTrigger("add:" + i, f, a[h])
                }
            })
        }
    }, {
        attrPath: function (a) {
            var b;
            if (_.isString(a)) {
                b = "" === a ? [""] : a.match(/[^\.\[\]]+/g);
                b = _.map(b, function (a) {
                    return a.match(/^\d+$/) ? parseInt(a, 10) : a
                })
            } else b = a;
            return b
        }, createAttrStr: function (a) {
            var b = a[0];
            _.each(_.rest(a), function (a) {
                b += _.isNumber(a) ? "[" + a + "]" : "." + a
            });
            return b
        }, deepClone: function (a) {
            return $.extend(!0, {}, a)
        }, walkPath: function (a, b, c, d) {
            for (var e, f = a, g = 0; g < b.length; g++) {
                c.call(d || this, f, b.slice(0, g + 1));
                e = b[g];
                f = f[e];
                if (!f)break
            }
        }
    })
}();
!function (a) {
    {
        var b = [].slice, c = {};
        a.amplify = {
            publish: function (a) {
                var d, e, f, g, h = b.call(arguments, 1), i = 0;
                if (!c[a])return !0;
                d = c[a].slice();
                for (f = d.length; f > i; i++) {
                    e = d[i], g = e.callback.apply(e.context, h);
                    if (g === !1)break
                }
                return g !== !1
            }, subscribe: function (a, b, d, e) {
                3 === arguments.length && "number" == typeof d && (e = d, d = b, b = null), 2 === arguments.length && (d = b, b = null), e = e || 10;
                for (var f, g = 0, h = a.split(/\s/), i = h.length; i > g; g++) {
                    a = h[g], f = !1, c[a] || (c[a] = []);
                    for (var j = c[a].length - 1, k = {
                        callback: d,
                        context: b,
                        priority: e
                    }; j >= 0; j--)if (c[a][j].priority <= e) {
                        c[a].splice(j + 1, 0, k), f = !0;
                        break
                    }
                    f || c[a].unshift(k)
                }
                return d
            }, unsubscribe: function (a, b) {
                if (c[a])for (var d = c[a].length, e = 0; d > e; e++)if (c[a][e].callback === b) {
                    c[a].splice(e, 1);
                    break
                }
            }
        }
    }
}(this), function (a, b) {
    function c(a, c) {
        d.addType(a, function (f, g, h) {
            var i, j, k, l, m = g, n = (new Date).getTime();
            if (!f) {
                m = {}, l = [], k = 0;
                try {
                    f = c.length;
                    for (; f = c.key(k++);)e.test(f) && (j = JSON.parse(c.getItem(f)), j.expires && j.expires <= n ? l.push(f) : m[f.replace(e, "")] = j.data);
                    for (; f = l.pop();)c.removeItem(f)
                } catch (o) {
                }
                return m
            }
            f = "__amplify__" + f;
            if (g === b) {
                i = c.getItem(f), j = i ? JSON.parse(i) : {expires: -1};
                if (!(j.expires && j.expires <= n))return j.data;
                c.removeItem(f)
            } else if (null === g)c.removeItem(f); else {
                j = JSON.stringify({data: g, expires: h.expires ? n + h.expires : null});
                try {
                    c.setItem(f, j)
                } catch (o) {
                    d[a]();
                    try {
                        c.setItem(f, j)
                    } catch (o) {
                        throw d.error()
                    }
                }
            }
            return m
        })
    }

    var d = a.store = function (a, b, c, e) {
        var e = d.type;
        c && c.type && c.type in d.types && (e = c.type);
        return d.types[e](a, b, c || {})
    };
    d.types = {}, d.type = null, d.addType = function (a, b) {
        d.type || (d.type = a), d.types[a] = b, d[a] = function (b, c, e) {
            e = e || {}, e.type = a;
            return d(b, c, e)
        }
    }, d.error = function () {
        return "amplify.store quota exceeded"
    };
    var e = /^__amplify__/;
    for (var f in{localStorage: 1, sessionStorage: 1})try {
        window[f].getItem && c(f, window[f])
    } catch (g) {
    }
    if (window.globalStorage)try {
        c("globalStorage", window.globalStorage[window.location.hostname]), "sessionStorage" === d.type && (d.type = "globalStorage")
    } catch (g) {
    }
    !function () {
        if (!d.types.localStorage) {
            var a = document.createElement("div"), c = "amplify";
            a.style.display = "none", document.getElementsByTagName("head")[0].appendChild(a);
            try {
                a.addBehavior("#default#userdata"), a.load(c)
            } catch (e) {
                a.parentNode.removeChild(a);
                return
            }
            d.addType("userData", function (e, f, g) {
                a.load(c);
                var h, i, j, k, l, m = f, n = (new Date).getTime();
                if (!e) {
                    m = {}, l = [], k = 0;
                    for (; h = a.XMLDocument.documentElement.attributes[k++];)i = JSON.parse(h.value), i.expires && i.expires <= n ? l.push(h.name) : m[h.name] = i.data;
                    for (; e = l.pop();)a.removeAttribute(e);
                    a.save(c);
                    return m
                }
                e = e.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-");
                if (f === b) {
                    h = a.getAttribute(e), i = h ? JSON.parse(h) : {expires: -1};
                    if (!(i.expires && i.expires <= n))return i.data;
                    a.removeAttribute(e)
                } else null === f ? a.removeAttribute(e) : (j = a.getAttribute(e), i = JSON.stringify({
                    data: f,
                    expires: g.expires ? n + g.expires : null
                }), a.setAttribute(e, i));
                try {
                    a.save(c)
                } catch (o) {
                    null === j ? a.removeAttribute(e) : a.setAttribute(e, j), d.userData();
                    try {
                        a.setAttribute(e, i), a.save(c)
                    } catch (o) {
                        null === j ? a.removeAttribute(e) : a.setAttribute(e, j);
                        throw d.error()
                    }
                }
                return m
            })
        }
    }(), function () {
        function a(a) {
            return a === b ? b : JSON.parse(JSON.stringify(a))
        }

        var c = {}, e = {};
        d.addType("memory", function (d, f, g) {
            if (!d)return a(c);
            if (f === b)return a(c[d]);
            e[d] && (clearTimeout(e[d]), delete e[d]);
            if (null === f) {
                delete c[d];
                return null
            }
            c[d] = f, g.expires && (e[d] = setTimeout(function () {
                delete c[d], delete e[d]
            }, g.expires));
            return f
        })
    }()
}(this.amplify = this.amplify || {}), function (a) {
    function b(a) {
        var b = !1;
        setTimeout(function () {
            b = !0
        }, 1);
        return function () {
            var c = this, d = arguments;
            b ? a.apply(c, d) : setTimeout(function () {
                a.apply(c, d)
            }, 1)
        }
    }

    function c(a) {
        return "[object Function]" === {}.toString.call(a)
    }

    function d() {
    }

    a.request = function (e, f, g) {
        var h = e || {};
        "string" == typeof h && (c(f) && (g = f, f = {}), h = {resourceId: e, data: f || {}, success: g});
        var i = {abort: d}, j = a.request.resources[h.resourceId], k = h.success || d, l = h.error || d;
        h.success = b(function (b, c) {
            c = c || "success", a.publish("request.success", h, b, c), a.publish("request.complete", h, b, c), k(b, c)
        }), h.error = b(function (b, c) {
            c = c || "error", a.publish("request.error", h, b, c), a.publish("request.complete", h, b, c), l(b, c)
        });
        if (!j) {
            if (!h.resourceId)throw"amplify.request: no resourceId provided";
            throw"amplify.request: unknown resourceId: " + h.resourceId
        }
        if (a.publish("request.before", h)) {
            a.request.resources[h.resourceId](h, i);
            return i
        }
        h.error(null, "abort")
    }, a.request.types = {}, a.request.resources = {}, a.request.define = function (b, c, d) {
        if ("string" == typeof c) {
            if (!(c in a.request.types))throw"amplify.request.define: unknown type: " + c;
            d.resourceId = b, a.request.resources[b] = a.request.types[c](d)
        } else a.request.resources[b] = c
    }
}(amplify), function (a, b, c) {
    var d = ["status", "statusText", "responseText", "responseXML", "readyState"], e = /\{([^\}]+)\}/g;
    a.request.types.ajax = function (e) {
        e = b.extend({type: "GET"}, e);
        return function (f, g) {
            function h(a, e) {
                b.each(d, function (a, b) {
                    try {
                        m[b] = i[b]
                    } catch (c) {
                    }
                }), /OK$/.test(m.statusText) && (m.statusText = "success"), a === c && (a = null), l && (e = "abort"), /timeout|error|abort/.test(e) ? m.error(a, e) : m.success(a, e), h = b.noop
            }

            var i, j = (e.url, g.abort), k = b.extend(!0, {}, e, {data: f.data}), l = !1, m = {
                readyState: 0,
                setRequestHeader: function (a, b) {
                    return i.setRequestHeader(a, b)
                },
                getAllResponseHeaders: function () {
                    return i.getAllResponseHeaders()
                },
                getResponseHeader: function (a) {
                    return i.getResponseHeader(a)
                },
                overrideMimeType: function (a) {
                    return i.overrideMideType(a)
                },
                abort: function () {
                    l = !0;
                    try {
                        i.abort()
                    } catch (a) {
                    }
                    h(null, "abort")
                },
                success: function (a, b) {
                    f.success(a, b)
                },
                error: function (a, b) {
                    f.error(a, b)
                }
            };
            a.publish("request.ajax.preprocess", e, f, k, m), b.extend(k, {
                success: function (a, b) {
                    h(a, b)
                }, error: function (a, b) {
                    h(null, b)
                }, beforeSend: function (b, c) {
                    i = b, k = c;
                    var d = e.beforeSend ? e.beforeSend.call(this, m, k) : !0;
                    return d && a.publish("request.before.ajax", e, f, k, m)
                }
            }), b.ajax(k), g.abort = function () {
                m.abort(), j.call(this)
            }
        }
    }, a.subscribe("request.ajax.preprocess", function (a, c, d) {
        var f = [], g = d.data;
        "string" != typeof g && (g = b.extend(!0, {}, a.data, g), d.url = d.url.replace(e, function (a, b) {
            if (b in g) {
                f.push(b);
                return g[b]
            }
        }), b.each(f, function (a, b) {
            delete g[b]
        }), d.data = g)
    }), a.subscribe("request.ajax.preprocess", function (a, c, d) {
        var e = d.data, f = a.dataMap;
        !!f && "string" != typeof e && (b.isFunction(f) ? d.data = f(e) : (b.each(a.dataMap, function (a, b) {
            a in e && (e[b] = e[a], delete e[a])
        }), d.data = e))
    });
    var f = a.request.cache = {
        _key: function (a, b, c) {
            function d() {
                return c.charCodeAt(f++) << 24 | c.charCodeAt(f++) << 16 | c.charCodeAt(f++) << 8 | c.charCodeAt(f++) << 0
            }

            c = b + c;
            for (var e = c.length, f = 0, g = d(); e > f;)g ^= d();
            return "request-" + a + "-" + g
        }, _default: function () {
            var a = {};
            return function (b, c, d, e) {
                var g = f._key(c.resourceId, d.url, d.data), h = b.cache;
                if (g in a) {
                    e.success(a[g]);
                    return !1
                }
                var i = e.success;
                e.success = function (b) {
                    a[g] = b, "number" == typeof h && setTimeout(function () {
                        delete a[g]
                    }, h), i.apply(this, arguments)
                }
            }
        }()
    };
    a.store && (b.each(a.store.types, function (b) {
        f[b] = function (c, d, e, g) {
            var h = f._key(d.resourceId, e.url, e.data), i = a.store[b](h);
            if (i) {
                e.success(i);
                return !1
            }
            var j = g.success;
            g.success = function (d) {
                a.store[b](h, d, {expires: c.cache.expires}), j.apply(this, arguments)
            }
        }
    }), f.persist = f[a.store.type]), a.subscribe("request.before.ajax", function (a) {
        var b = a.cache;
        if (b) {
            b = b.type || b;
            return f[b in f ? b : "_default"].apply(this, arguments)
        }
    }), a.request.decoders = {
        jsend: function (a, b, c, d, e) {
            "success" === a.status ? d(a.data) : "fail" === a.status ? e(a.data, "fail") : "error" === a.status && (delete a.status, e(a, "error"))
        }
    }, a.subscribe("request.before.ajax", function (c, d, e, f) {
        function g(a, b) {
            j(a, b)
        }

        function h(a, b) {
            i(a, b)
        }

        var i = f.success, j = f.error, k = b.isFunction(c.decoder) ? c.decoder : c.decoder in a.request.decoders ? a.request.decoders[c.decoder] : a.request.decoders._default;
        !k || (f.success = function (a, b) {
            k(a, b, f, h, g)
        }, f.error = function (a, b) {
            k(a, b, f, h, g)
        })
    })
}(amplify, jQuery);
!function (a, b) {
    a.widget("ui.sliderInput", {
        widgetEventPrefix: "sli",
        options: {width: 200, lov: !1, range: "min", slider: !1},
        _create: function () {
            var c = this, d = this.options;
            this._id = this.element.attr("id");
            this.defaultSlider = d.slider;
            d.slider = a(d.slider) || a("#" + this._id + "_slider").length ? a("#" + this._id + "_slider") : a('<div id="' + this._id + '_slider"></div>').prependTo(this.element);
            if (d.lov) {
                d.min = d.lov[0];
                d.max = d.lov.slice(-1);
                this.element.attr({min: d.min, max: d.max})
            } else {
                d.min = d.min || parseInt(this.element.attr("min"), 10) || 0;
                d.max = d.max || parseInt(this.element.attr("max"), 10) || 100
            }
            d.value = d.value || parseInt(this.element.val(), 10) || d.min;
            d.step = d.step || parseInt(this.element.attr("step"), 10) || 1;
            d.labels = (this.element.attr("labels") || d.min + "," + d.max).split(",");
            d.labelsuffix = this.element.attr("labelsuffix") || !1;
            this.element.val(d.value);
            d.lov ? d.slider.slider({
                range: d.range,
                min: 0,
                max: d.lov.length - 1,
                value: this._findInLov(d.value),
                step: 1,
                width: d.width
            }) : d.slider.slider({
                range: d.range,
                min: d.min,
                max: d.max,
                value: d.value,
                step: d.step,
                width: d.width
            });
            d.labels && d.labels.length > 1 && a.each(d.labels, function (b, e) {
                var f, g, h = !1, i = "";
                if (e.match(/^\*/)) {
                    h = !0;
                    e = e.replace("^*", "")
                }
                if (e.split("|").length > 1) {
                    i = e.split("|").slice(1).join("|");
                    e = e.split("|")[0]
                } else i = e;
                f = i + (d.labelsuffix || "");
                g = d.lov ? d.width - Math.round(d.width / (d.lov.length - 1)) * (d.lov.length - 1 - c._findInLov(e)) : d.width - Math.round(d.width / (d.max - d.min) * (d.max - e));
                d.labels[b] = a('<label for="' + c._id + '">' + f + "</label>").css({marginLeft: g - 4 + "px"}).prependTo(d.slider);
                h && d.labels[b].addClass("label_highlight");
                0 == b && d.labels[b].addClass("label_first");
                b == d.labels.length - 1 && d.labels[b].addClass("label_last")
            });
            d.slider.bind("slide", function (a, e) {
                var f, g = e.value;
                if (d.lov) {
                    if (!d.lov.hasOwnProperty(g) || d.lov[g] === b) {
                        f = c._alignToLov(g);
                        g = d.lov[f];
                        allowed = c._trigger("change", a, {source: "slider", value: g});
                        if (allowed !== !1) {
                            d.slider.slider("value", f);
                            c.element.val(g)
                        }
                        return !1
                    }
                    g = d.lov[g];
                    allowed = c._trigger("change", a, {source: "slider", value: g});
                    allowed !== !1 && c.element.val(g)
                } else {
                    allowed = c._trigger("change", a, {source: "slider", value: g});
                    allowed !== !1 && c.element.val(g)
                }
            });
            this.element.bind("change", function (b) {
                var e, f = parseInt(a(b.target).val().replace(/^[^\d]+/, ""), 10) || d.min;
                f > d.max ? f = d.max : f < d.min && (f = d.min);
                e = d.lov ? c._findInLov(f) : f;
                allowed = c._trigger("change", b, {source: "input", value: f});
                if (allowed !== !1) {
                    a(b.target).val(f);
                    d.slider.slider("value", e)
                } else {
                    f = d.lov ? d.lov[d.slider.slider("value")] : d.slider.slider("value");
                    a(b.target).val(f)
                }
            }).bind("keydown", function (b) {
                switch (b.keyCode) {
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.PAGE_DOWN:
                    case a.ui.keyCode.PAGE_UP:
                    case a.ui.keyCode.HOME:
                    case a.ui.keyCode.END:
                        a("a", d.slider).trigger(b);
                        break;
                    case a.ui.keyCode.ENTER:
                        a(this).trigger("blur")
                }
            }).bind("keypress", function (a) {
                return a.charCode && a.charCode >= 48 && a.charCode <= 57
            })
        },
        _alignToLov: function (c) {
            var d = this.options, e = d.min;
            a.each(d.lov, function (a, d) {
                if (a > c)return !1;
                d !== b && (e = a);
                return void 0
            });
            return e
        },
        _findInLov: function (c) {
            var d = this.options, e = 0;
            a.each(d.lov, function (a, d) {
                if (d > c)return !1;
                d !== b && (e = a);
                return void 0
            });
            return e
        }
    })
}(jQuery);
var TCS = TCS || {};
TCS.utils = TCS.utils || {};
!function (a, b, c) {
    "use strict";
    function d(a, b) {
        var e = a.shift(), f = b || c;
        return e ? d(a, f[e]) : b
    }

    function e(a, b) {
        var c = a && a.length > 0 ? a.split(".") : [];
        return c.length > 0 ? d(c, b) : null
    }

    a.utils.getParameterByName = function (a, b) {
        var d = b || c.location.search, e = new RegExp("[?&]" + a + "=([^&]*)").exec(d);
        return e && decodeURIComponent(e[1].replace(/\+/g, " "))
    };
    a.utils.filterGoogleValue = function (a) {
        var c = ["(direct)", "(not set)", "(organic)", "(referral)"];
        return -1 === b.inArray(a, c) ? a : ""
    };
    a.utils.addTracker = function (a, c, d) {
        var e, f, g, h = ["img", "script", "iframe"], i = -1 !== b.inArray(c, h) ? c : "img", j = "tcs-wrapper-trackers";
        if (!a)return !1;
        e = document.createElement(i);
        if ("iframe" === i) {
            e.setAttribute("frameborder", "0");
            e.setAttribute("scrolling", "no")
        } else if ("script" === i) {
            e.setAttribute("type", "text/javascript");
            e.setAttribute("async", "true")
        }
        e.setAttribute("border", "0");
        e.setAttribute("width", "1");
        e.setAttribute("height", "1");
        e.setAttribute("src", a);
        if (d && document.getElementById(d))g = document.getElementById(d); else if (document.getElementById(j))g = document.getElementById(j); else {
            f = document.createElement("div");
            f.setAttribute("id", j);
            f.setAttribute("class", "tcs-trackers-container");
            document.body.appendChild(f);
            g = document.getElementById(j)
        }
        g.appendChild(e);
        return !0
    };
    a.utils.checkEmailRFC = function (a) {
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/.test(a)
    };
    a.utils.singleOutMasterId = function (a) {
        var c, d, e, f, g, h = ["NORM", "CLBL", "DNBL", "TUNL", "OVDU"], i = null;
        if (b.isArray(a)) {
            e = a.length;
            for (c = 0; e > c; c++)if ("Дебетовые карты" === a[c].name) {
                f = a[c].accounts;
                g = f.length;
                if (f && g)for (d = 0; g > d; d++)if (-1 !== b.inArray(f[d].status, h) && "RUB" === f[d].moneyAmount.currency.name)return f[d].id
            }
            for (c = 0; e > c; c++)if ("Кредитные карты" === a[c].name) {
                f = a[c].accounts;
                g = f.length;
                if (f && g)for (d = 0; g > d; d++)-1 !== b.inArray(f[d].status, h) && (i = f[d].id)
            }
        }
        return i
    };
    a.utils.paramsToObject = function (a) {
        var b, d, e, f, g, h = a || c.location.search, i = {};
        if (!h)return null;
        b = h.slice(1).split("&");
        for (g = 0; g < b.length; g++) {
            f = b[g].indexOf("=");
            if (-1 === f) {
                d = b[g];
                e = null
            } else {
                d = b[g].substr(0, f);
                e = decodeURIComponent(b[g].substr(f + 1))
            }
            i[d] = e
        }
        return i
    };
    a.utils.newGoogleAnalyticsPush = function (a) {
        try {
            "function" == typeof ga && ga.apply(null, a)
        } catch (b) {
            c.console && c.console.log && c.console.log(b)
        }
    };
    a.utils._gaqPush = function (a) {
        try {
            "undefined" != typeof c._gaq && c._gaq.push(a)
        } catch (b) {
            c.console && c.console.log && c.console.log(b)
        }
    };
    a.utils.getUniqueIDByGA = function () {
        var a, c = b.cookie("__utma");
        if (c && "string" == typeof c) {
            a = c.split(".");
            if (a.length > 2)return a[1]
        }
        return null
    };
    a.utils.yandexMetricaHit = function (a) {
        try {
            "object" == typeof yaCounter10655317 && yaCounter10655317.hit(a)
        } catch (b) {
        }
    };
    a.utils.decodeResponse = function (a, b, c, d) {
        "OK" === b.resultCode ? a.resolve(b.payload, c, d) : a.reject(b.errorMessage || b.resultCode)
    };
    a.cacheTemplates = {};
    a.utils.getCompileTemplate = function (c) {
        if (a.cacheTemplates[c])return a.cacheTemplates[c];
        var d = b("[data-template-name=" + c + "]");
        if (!d.length)throw new Error("Not found template: '" + c + "'");
        a.cacheTemplates[c] = Handlebars.compile(d.html());
        return a.cacheTemplates[c]
    };
    a.utils.lpad = function (a, b, c) {
        for (; a.length < b;)a = c + a;
        return a
    };
    var f = /\s+/, g = {
        on: function (a, b, c) {
            var d, e, g;
            if (!b)return this;
            a = a.split(f);
            d = this._callbacks || (this._callbacks = {});
            for (; e = a.shift();) {
                g = d[e] || (d[e] = []);
                g.push(b, c)
            }
            return this
        }, off: function (a, b, c) {
            var d, e, g, h;
            if (!(e = this._callbacks))return this;
            if (!(a || b || c)) {
                delete this._callbacks;
                return this
            }
            a = a ? a.split(f) : _.keys(e);
            for (; d = a.shift();)if ((g = e[d]) && (b || c))for (h = g.length - 2; h >= 0; h -= 2)b && g[h] !== b || c && g[h + 1] !== c || g.splice(h, 2); else delete e[d];
            return this
        }, trigger: function (a) {
            var b, c, d, e, g, h, i, j;
            if (!(c = this._callbacks))return this;
            j = [];
            a = a.split(f);
            for (e = 1, g = arguments.length; g > e; e++)j[e - 1] = arguments[e];
            for (; b = a.shift();) {
                (i = c.all) && (i = i.slice());
                (d = c[b]) && (d = d.slice());
                if (d)for (e = 0, g = d.length; g > e; e += 2)d[e].apply(d[e + 1] || this, j);
                if (i) {
                    h = [b].concat(j);
                    for (e = 0, g = i.length; g > e; e += 2)i[e].apply(i[e + 1] || this, h)
                }
            }
            return this
        }
    }, h = _.clone(g);
    _.extend(h, {
        getSessionID: function () {
            return b.cookie("sessionid") || null
        }, setSessionId: function (a) {
            b.cookie("sessionid", a, {path: "/"});
            TCS.Auth.Cfg.isAuthenticated = !0
        }, isAuthenticate: function () {
            return !!this.getSessionID()
        }, trashSession: function () {
            b.cookie("sessionid", null, {path: "/"});
            TCS.Auth.Cfg.isAuthenticated = !1
        }, logout: function () {
            this.trashSession();
            this.trigger("session:end")
        }, _prevTime: (new Date).getTime(), pingTimeout: 6e4, _pingTimer: null, _ping: function () {
            if (this._needPing && (new Date).getTime() - this._prevTime >= this.pingTimeout) {
                b.getJSON(TCS.getServiceURL("ping"), this.parsePing.bind(this));
                this._needPing = !1;
                this._prevTime = (new Date).getTime()
            }
        }, _needPing: !1, start: function () {
            b(document).on("click", function (a) {
                this._needPing = !0;
                if (a.target && ("input" === a.target.tagName.toLowerCase() || "textarea" === a.target.tagName.toLocaleLowerCase()) && !b(a.target).data("isPinging")) {
                    b(a.target).data("isPinging", !0);
                    b(a.target).on("keypress", function () {
                        this._needPing = !0
                    }.bind(this))
                }
            }.bind(this));
            this._pingTimer = setInterval(this._ping.bind(this), 300)
        }, parsePing: function (a) {
            var b = a.payload && a.payload.accessLevel;
            if (("ANONYMOUS" === b || "INSUFFICIENT_PRIVILEGES" === b || "NOT_AUTHENTICATED" === b) && c.location.pathname.indexOf("/bank/") >= 0) {
                clearInterval(this._pingTimer);
                this.trashSession();
                if (!TCS.windowExpiredMessage) {
                    TCS.Session.trashSession();
                    TCS.showExpiredMessage ? TCS.showExpiredMessage() : document.location.reload()
                }
            }
        }
    });
    b(function () {
        c.location.pathname.indexOf("/bank/") >= 0 && h.start()
    });
    a.utils.resolvePath = e;
    a.Events = g;
    a.Session = h
}(TCS, jQuery, window);
TCS.stripSlashes = function (a) {
    "use strict";
    return a.replace(/^\//, "").replace(/\/$/, "")
};
TCS.getStaticURL = function (a) {
    var b = TCS.staticServer ? TCS.staticServer : "https://static.tcsbank.ru", c = TCS.stripSlashes(a || "");
    "/" !== c[0] && (c = "/" + c);
    return b + c
};
TCS.getServiceURL = function (a) {
    "use strict";
    if (!a)throw new Error("Specify URL");
    var b = TCS.apiServer && /\w+/.test(TCS.apiServer) ? TCS.apiServer : "https://www.tcsbank.ru/api/v1/", c = TCS.Session.getSessionID(), d = TCS.stripSlashes(a), e = -1 === d.indexOf("?") ? "?" : "&", f = "";
    if ("/" !== d.substr(d.length - 1)) {
        -1 === d.indexOf("?") ? d += "/" : d = TCS.stripSlashes(d.substring(0, d.indexOf("?"))) + "/" + d.substring(d.indexOf("?"));
        -1 !== d.indexOf("http:") && (d += "/")
    }
    f = c ? b + d + e + "sessionid=" + c : b + d;
    return f
};
TCS.getSocketURL = function (a) {
    "use strict";
    return TCS.getServiceURL(a).replace("https", "wss")
};
TCS.animateNumber = function (a, b, c, d) {
    "use strict";
    var e, f = a, g = Math.abs(a - b), h = +(Math.ceil(g / 200) + (.1 * Math.random() + .1).toFixed(d || 0));
    a > b && (h = -h);
    e = setInterval(function () {
        f += h;
        if (f >= b && h > 0 || b >= f && 0 > h) {
            clearInterval(e);
            f = b
        }
        return c(f.toFixed(d || 0))
    }, 15)
};
TCS.utils.checkResponse = function (a, b) {
    "use strict";
    if (a && a.resultCode && "ok" === a.resultCode.toLowerCase() && a.payload) {
        if (b && b.length > 0) {
            for (var c = 0; b[c]in a.payload;)c++;
            return c === b.length
        }
        return !0
    }
    return !1
};
TCS.utils.toFixed = function (a, b) {
    function c(a, b) {
        var c = Math.pow(10, b);
        return Math.round(a * c) / c
    }

    if (0 > b)throw new Error("toFixed() digits argument must be between 0 and 20");
    if (-1 === a.toString().indexOf("."))return parseFloat(a);
    for (var d = a.toString().split(".")[1], e = a, f = 1; f <= d.length - b; f++)e = c(parseFloat(e), d.length - f);
    return parseFloat(e)
};
TCS.utils.getQueryDate = function (a, b) {
    "use strict";
    if (0 > a) {
        a = 11;
        b--
    }
    if (a > 11) {
        a = 0;
        b++
    }
    var c = new Date(b, a, 1, 0, 0, 0, 0);
    return c.getTime()
};
TCS.utils.getShortMonthYear = function (a) {
    "use strict";
    a = new Date(a);
    return a.toString("MM'yy")
};
TCS.utils.getCardInfoById = function (a) {
    "use strict";
    var b = TCS.getAccounts(), c = {name: null, icon: null, value: null, id: null};
    _.each(b, function (b) {
        b.accounts && _.each(b.accounts, function (b) {
            b.cardNumbers && _.each(b.cardNumbers, function (d) {
                if (d.id === a) {
                    c.name = d.name;
                    c.icon = b.accountIconType;
                    c.value = d.value;
                    c.id = a
                }
            })
        })
    });
    return c
};
TCS.utils.getFullMonthYear = function (a) {
    "use strict";
    a = new Date(a);
    return Date.CultureInfo.monthNames[a.getMonth()] + " " + a.getFullYear().toString()
};
TCS.utils.getWhenDate = function (a) {
    "use strict";
    a = new Date(a);
    var b = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    return a.getDate() + " " + b[a.getMonth()] + " " + a.getFullYear().toString()
};
TCS.utils.dateToAccusativeMonth = function (a, b) {
    Date.CultureInfo.monthNamesDefault = Date.CultureInfo.monthNames;
    Date.CultureInfo.monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    var c = a.toString(b);
    Date.CultureInfo.monthNames = Date.CultureInfo.monthNamesDefault;
    return c
};
TCS.utils.getMoneyWeight = function (a) {
    "use strict";
    var b = "";
    a = parseInt(a, 10);
    if (Math.abs(a) >= 1e3) {
        a /= 1e3;
        b = "K"
    }
    if (Math.abs(a) >= 1e3) {
        a /= 1e3;
        b = "M"
    }
    return Math.round(a).toString() + b
};
TCS.utils.getMoneyWeightWithCurrency = function (a) {
    "use strict";
    var b = "", c = accounting.settings.locale.ru.RUB;
    a = parseInt(a, 10);
    if (Math.abs(a) >= 1e3) {
        a /= 1e3;
        b = c.shortThousand
    }
    if (Math.abs(a) >= 1e3) {
        a /= 1e3;
        b = c.shortMillion
    }
    parseInt(a) !== a && (a = a.toFixed(1));
    return a + " " + b
};
TCS.utils.getCrossCurrencyRate = function (a, b, c, d, e) {
    $.getJSON(TCS.getServiceURL("currency_rates"), function (f) {
        var g, h, i;
        if (f.payload && "OK" === f.resultCode) {
            g = _.filter(f.payload.rates, function (b) {
                return b.category === a
            });
            h = _.find(g, function (a) {
                return a.fromCurrency.name === b && a.toCurrency.name === c
            });
            i = _.find(g, function (a) {
                return a.fromCurrency.name === c && a.toCurrency.name === b
            })
        }
        g.length && (h || i) ? d(h ? h[e || "buy"] : 1 / i[e || "buy"], i ? i[e || "buy"] : 1 / h[e || "buy"]) : d(0, 0)
    })
};
TCS.utils.getOperationType = function (a, b) {
    var c = {RUB: {USD: "sell", EUR: "sell"}, USD: {RUB: "buy", EUR: "sell"}, EUR: {RUB: "buy", USD: "sell"}};
    return c[a][b]
};
TCS.utils.parseFloat = function (a) {
    var b = parseFloat(("" + a).replace(/\s/g, "").replace(/ /g, "").replace(/-/g, "").replace(/,+/g, "."));
    return isNaN(b) ? 0 : b
};
TCS.utils.convertMoney = function (a, b, c, d, e, f) {
    var g = TCS.utils.getOperationType(b, c);
    TCS.utils.getCrossCurrencyRate(a, b, c, function (a, b) {
        var c;
        c = TCS.utils.toFixed(d * b, f || 2);
        e(c, a, b)
    }, g)
};
TCS.utils.getSocialAppId = function (a, b) {
    "use strict";
    b = b || window.location.hostname;
    var c = {
        fb: {
            localhost: 355767164492039,
            "www-qa.tcsbank.ru": 0xeab199a1ef29,
            "www-qa2.tcsbank.ru": 0xeab199a1ef29,
            "uat.tcsbank.ru": 0xeab199a1ef29,
            "www.uat.tcsbank.ru": 0xeab199a1ef29,
            "www.tcsbank.ru": 0x77c048183139,
            "tcsbank.ru": 0x77c048183139
        },
        vk: {
            localhost: 3013656,
            "testtcsbank.ru": 3488857,
            "www-qa.tcsbank.ru": 3012772,
            "www-qa2.tcsbank.ru": 3012772,
            "uat.tcsbank.ru": 3012772,
            "www.uat.tcsbank.ru": 3012772,
            "www.tcsbank.ru": 3013666,
            "tcsbank.ru": 3013666
        },
        ok: {
            localhost: 91066368,
            "uat.tcsbank.ru": 91066368,
            "www.uat.tcsbank.ru": 91066368,
            "www.tcsbank.ru": 91066368,
            "tcsbank.ru": 91066368,
            "192.168.1.232": 91066368,
            "192.168.16.32": 91066368
        },
        google: {localhost: "705012429335-hvsvbkghon72k10cln792irksmslenni.apps.googleusercontent.com"}
    };
    return c[a] && c[a][b]
};
TCS.utils.convertTimeZone = function (a) {
    "use strict";
    return a.addMinutes(a.getTimezoneOffset()).addMinutes(240)
};
TCS.utils.getGMTTime = function (a) {
    "use strict";
    return a + -6e4 * (new Date).getTimezoneOffset()
};
TCS.utils.withoutTimezoneOffset = function (a) {
    "use strict";
    return new Date(a).addMinutes(new Date(a).getTimezoneOffset())
};
TCS.utils.getStartDayTimestamp = function (a) {
    "use strict";
    try {
        var b = a.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
        return new Date([b[2], b[1], b[3]].join("/") + " 00:00 UTC+0").getTime()
    } catch (c) {
        return 0
    }
};
TCS.utils.getStartDay = function (a) {
    "use strict";
    try {
        var b = a.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
        return new Date([b[2], b[1], b[3]].join("/") + " 00:00 UTC+0")
    } catch (c) {
        return 0
    }
};
String.prototype.isJSON = function () {
    "use strict";
    var a = this;
    if (/^\s*$/.test(a))return !1;
    a = a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@");
    a = a.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]");
    a = a.replace(/(?:^|:|,)(?:\s*\[)+/g, "");
    return /^[\],:{}\s]*$/.test(a)
};
TCS.utils.caret = function (a, b) {
    if (0 != this.length) {
        if ("number" == typeof a) {
            b = "number" == typeof b ? b : a;
            return this.each(function () {
                if (this.setSelectionRange)this.setSelectionRange(a, b); else if (this.createTextRange) {
                    var c = this.createTextRange();
                    c.collapse(!0);
                    c.moveEnd("character", b);
                    c.moveStart("character", a);
                    c.select()
                }
            })
        }
        if (this[0].setSelectionRange) {
            a = this[0].selectionStart;
            b = this[0].selectionEnd
        } else if (document.selection && document.selection.createRange) {
            var c = document.selection.createRange();
            a = 0 - c.duplicate().moveStart("character", -1e5);
            b = a + c.text.length
        }
        return {begin: a, end: b}
    }
};
TCS.utils.waiting = function (a, b) {
    "use strict";
    var c = $(a), d = c.find(".tcs-view-waiting");
    if (!d.length) {
        d = $('<span class="tcs-view tcs-view-waiting"></span>').hide();
        c.append(d)
    }
    return d[b ? "show" : "hide"]()
};
TCS.utils.checkAddress = function (a) {
    "use strict";
    return null === a || "" === a || void 0 === a ? !1 : null === a.zipCode || "" === a.zipCode || void 0 === a.zipCode ? !1 : !0
};
TCS.utils.formatAddress = function (a) {
    "use strict";
    return TCS.utils.checkAddress(a) ? (a.zipCode.value + " " + (a.state ? " " + a.state : "") + (a.district ? " " + a.district : "") + (a.city ? " " + a.city : "") + (a.settlement ? " " + a.settlement : "") + (a.streetAddress ? " " + a.streetAddress : "") + (a.houseNumber ? " " + a.houseNumber : "") + (a.buildingNumber ? " К. " + a.buildingNumber : "") + (a.constructionNumber ? " СТР. " + a.constructionNumber : "") + (a.apartmentNumber ? " КВ. " + a.apartmentNumber : "")).toUpperCase() : "<Не указан>"
};
TCS.utils.clearEmberMeta = function (a, b) {
    "use strict";
    a[b] = a[b + "_meta"] = void 0;
    return a
};
Function.prototype.bind || (Function.prototype.bind = function (a) {
    "use strict";
    if ("function" != typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var b = Array.prototype.slice.call(arguments, 1), c = this, d = function () {
    }, e = function () {
        return c.apply(this instanceof d ? this : a || window, b.concat(Array.prototype.slice.call(arguments)))
    };
    d.prototype = this.prototype;
    e.prototype = new d;
    e.prototype.toString = function () {
        return "Bound: " + d.toString()
    };
    return e
});
TCS.utils.declOfNum = function (a, b) {
    "use strict";
    var c = [2, 0, 1, 1, 1, 2];
    return b[a % 100 > 4 && 20 > a % 100 ? 2 : c[5 > a % 10 ? a % 10 : 5]]
};
String.prototype.trim || (String.prototype.trim = function () {
    "use strict";
    return this.replace(/^\s+|\s+$/g, "")
});
jQuery.cachedScript = function (a, b) {
    "use strict";
    b = $.extend(b || {}, {dataType: "script", cache: !0, url: a});
    return jQuery.ajax(b)
};
!function () {
    "use strict";
    function a() {
        var a = _.map(e.anotherCurrenciesName, function (a) {
            return {operation: "currency_rate_history", key: a, params: {currency: a}}
        });
        $.post(TCS.getServiceURL("grouped_requests"), {requestsData: JSON.stringify(a)}).done(function (a) {
            b(a) ? c(a.payload) : f.rejectWith(this, [a])
        });
        return f
    }

    function b(a) {
        return a && a.payload && "OK" === a.resultCode && _.every(a.payload, function (a) {
            return a && "OK" === a.resultCode
        })
    }

    function c(a) {
        _.each(e.anotherCurrenciesName, function (b) {
            var c = a[b];
            c && c.payload && _.each(c.payload, function (a) {
                var c = new Date(a[0].milliseconds).toString("yyMMdd"), d = this.anotherCurrenciesRates[c] || {};
                d[b] = a[1].value;
                this.anotherCurrenciesRates[c] = d
            }, this)
        }, e);
        f.resolve(e.anotherCurrenciesRates)
    }

    function d(a, b, c, d) {
        var e, f, g, h = d ? new Date(d) : (new Date).add(-1).days(), i = 0;
        g = TCS.utils.getCurrencyRatesObj(h);
        e = g.USD;
        f = g.EUR;
        var j = {
            RUB: {to: {RUB: 1, USD: 1 / e, EUR: 1 / f}},
            EUR: {to: {RUB: f, USD: f / e, EUR: 1}},
            USD: {to: {RUB: e, USD: 1, EUR: e / f}}
        };
        j[a] && j[a].to[b] && (i = parseFloat((j[a].to[b] * parseFloat(c)).toFixed(2)));
        return i
    }

    var e = {
        anotherCurrenciesName: ["USD", "EUR"],
        anotherCurrenciesRates: {},
        dataCurrency: "RUB"
    }, f = new $.Deferred;
    TCS.utils.getCurrencyRatesObj = function (a) {
        var b, c = a.toString("yyMMdd"), d = _.keys(e.anotherCurrenciesRates).sort();
        b = _.find(d, function (a) {
            return a >= c
        });
        b = b || d[0];
        return e.anotherCurrenciesRates[b]
    };
    TCS.utils.convertToCurrency = function (b, c, e, g, h) {
        if (b && c && b === c)return e;
        var i = new $.Deferred;
        if ("resolved" !== f.state()) {
            a();
            f.done(function () {
                i.resolveWith(TCS.utils, [d(b, c, e, g)])
            });
            return h ? 0 / 0 : i.promise()
        }
        i.resolveWith(TCS.utils, [d(b, c, e, g)]);
        if (h)return d(b, c, e, g);
        i.resolveWith(TCS.utils, [d(b, c, e, g)]);
        return i.promise()
    };
    TCS.utils.getPluralForm = function (a) {
        return a % 10 === 1 && a % 100 !== 11 ? 0 : a % 10 >= 2 && 4 >= a % 10 && (10 > a % 100 || a % 100 >= 20) ? 1 : 2
    };
    $(function () {
        var a = TCS.Session.isAuthenticate(), b = $(".Mob-App-Link");
        a && b.length && b.attr("href", "/mob-app/")
    });
    TCS.utils.convertNotRuSymbols = function () {
        var a = {
            q: "й",
            w: "ц",
            e: "у",
            r: "к",
            t: "е",
            y: "н",
            u: "г",
            i: "ш",
            o: "щ",
            p: "з",
            "[": "х",
            "]": "ъ",
            a: "ф",
            s: "ы",
            d: "в",
            f: "а",
            g: "п",
            h: "р",
            j: "о",
            k: "л",
            l: "д",
            ";": "ж",
            "'": "э",
            z: "я",
            x: "ч",
            c: "с",
            v: "м",
            b: "и",
            n: "т",
            m: "ь",
            "`": "ё",
            Q: "Й",
            W: "Ц",
            E: "У",
            R: "К",
            T: "Е",
            Y: "Н",
            U: "Г",
            I: "Ш",
            O: "Щ",
            P: "З",
            "{": "Х",
            "}": "Ъ",
            A: "Ф",
            S: "Ы",
            D: "В",
            F: "А",
            G: "П",
            H: "Р",
            J: "О",
            K: "Л",
            L: "Д",
            ":": "Ж",
            '"': "Э",
            Z: "Я",
            X: "Ч",
            C: "С",
            V: "М",
            B: "И",
            N: "Т",
            M: "Ь",
            "<": "Б",
            ">": "Ю",
            "~": "Ё"
        }, b = {",": "б", ".": "ю"}, c = {"/": ".", "?": ","};
        return function (d, e) {
            var f, g, h = (d || "").toString(), i = "", j = h.length;
            for (g = 0; j > g; g++) {
                f = h.charAt(g);
                i += a[f] || 191 === e && c[f] || e && 191 !== e && b[f] || f
            }
            return i
        }
    }();
    !function () {
        var a = !1;
        TCS.utils.convertNotRuSymbolsInput = function (b) {
            if ("keydown" !== b.type) {
                var c = a || !1, d = $(b.currentTarget), e = b.keyCode >= 37 && b.keyCode <= 40 || 16 === b.keyCode, f = TCS.utils.caret.call(d), g = f.begin - 1 > 0 ? f.begin - 1 : 0, h = d.val(), i = TCS.utils.convertNotRuSymbols(h.slice(g, f.end), c);
                if (!e) {
                    a = !1;
                    i = h.slice(0, g) + i + h.slice(f.end);
                    d.val(i);
                    TCS.utils.caret.call(d, f.begin, f.end)
                }
                return i
            }
            var j = 188 === b.keyCode || 190 === b.keyCode || 191 === b.keyCode || b.keyCode < 48 && b.keyCode > 57 || !1;
            a = j ? b.keyCode : !1
        }
    }()
}();
var JSON;
JSON || (JSON = {});
!function () {
    function k(a) {
        return 10 > a ? "0" + a : a
    }

    function o(a) {
        p.lastIndex = 0;
        return p.test(a) ? '"' + a.replace(p, function (a) {
            var b = r[a];
            return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function l(a, b) {
        var c, d, f, g, h, j = e, k = b[a];
        k && "object" == typeof k && "function" == typeof k.toJSON && (k = k.toJSON(a));
        "function" == typeof i && (k = i.call(b, a, k));
        switch (typeof k) {
            case"string":
                return o(k);
            case"number":
                return isFinite(k) ? String(k) : "null";
            case"boolean":
            case"null":
                return String(k);
            case"object":
                if (!k)return "null";
                e += n;
                h = [];
                if ("[object Array]" === Object.prototype.toString.apply(k)) {
                    g = k.length;
                    for (c = 0; g > c; c += 1)h[c] = l(c, k) || "null";
                    f = 0 === h.length ? "[]" : e ? "[\n" + e + h.join(",\n" + e) + "\n" + j + "]" : "[" + h.join(",") + "]";
                    e = j;
                    return f
                }
                if (i && "object" == typeof i) {
                    g = i.length;
                    for (c = 0; g > c; c += 1)"string" == typeof i[c] && (d = i[c], (f = l(d, k)) && h.push(o(d) + (e ? ": " : ":") + f))
                } else for (d in k)Object.prototype.hasOwnProperty.call(k, d) && (f = l(d, k)) && h.push(o(d) + (e ? ": " : ":") + f);
                f = 0 === h.length ? "{}" : e ? "{\n" + e + h.join(",\n" + e) + "\n" + j + "}" : "{" + h.join(",") + "}";
                e = j;
                return f
        }
    }

    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + k(this.getUTCMonth() + 1) + "-" + k(this.getUTCDate()) + "T" + k(this.getUTCHours()) + ":" + k(this.getUTCMinutes()) + ":" + k(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf()
    });
    var q = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, p = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e, n, r = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, i;
    "function" != typeof JSON.stringify && (JSON.stringify = function (a, b, c) {
        var d;
        n = e = "";
        if ("number" == typeof c)for (d = 0; c > d; d += 1)n += " "; else"string" == typeof c && (n = c);
        if ((i = b) && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length))throw Error("JSON.stringify");
        return l("", {"": a})
    });
    "function" != typeof JSON.parse && (JSON.parse = function (a, e) {
        function c(a, b) {
            var d, f, g = a[b];
            if (g && "object" == typeof g)for (d in g)Object.prototype.hasOwnProperty.call(g, d) && (f = c(g, d), void 0 !== f ? g[d] = f : delete g[d]);
            return e.call(a, b, g)
        }

        var d, a = String(a);
        q.lastIndex = 0;
        q.test(a) && (a = a.replace(q, function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return d = eval("(" + a + ")"), "function" == typeof e ? c({"": d}, "") : d;
        throw new SyntaxError("JSON.parse")
    })
}();
$(function () {
    function a(a) {
        $("#choose-location").attr("disabled", !1).hide();
        $("#switcher-location").show();
        $(".tcs-current-location").html(a.name)
    }

    function b(b) {
        if (27 === b.keyCode) {
            var c = $("#choose-location").data("lastValue");
            $("#choose-location").val(c);
            a({name: c})
        }
    }

    $("#choose-location").bind("keydown", b);
    $("#choose-location").autocomplete(TCS.getServiceURL("regions"), {
        resultsClass: "location-result",
        extraParams: {
            query: function () {
                return $("#choose-location").val().toLowerCase()
            }, feature: "selectable"
        },
        formatItem: function (a) {
            var b = "<span>" + a.name + "</span>";
            a.parent && (b += '<span class="display-small">(' + a.parent.name + ")</span>");
            return b
        },
        parse: function (a) {
            "string" == typeof a && (a = $.parseJSON(a));
            if (a && a.payload) {
                a = a.payload;
                var b = [];
                if (a.length)for (var c = 0; c < a.length; c++) {
                    var d = a[c];
                    b[b.length] = {data: d, value: d.name, result: d.name}
                }
                return b
            }
            return a
        }
    }).result(function (a, b) {
        $("#choose-location").attr("disabled", !1).hide();
        $("#switcher-location").show();
        $(".tcs-current-location").html(b.name);
        $(".tcs-switcher-location").show();
        $.cookie("client-region-id-kladr", b.id, {path: "/", expires: 365});
        $.cookie("client-region-name-kladr", b.name, {path: "/", expires: 365});
        $.cookie("client-region-deliverable", null, {path: "/"});
        $("#choose-location").trigger("regionchanged")
    });
    $("#switcher-location").bind("click.location", function () {
        $("#choose-location").data("lastValue", $(".tcs-current-location").text());
        $("#choose-location").show().focus();
        $(this).hide()
    });
    $(".tcs-benefits #switcher-location").on("click.location", function (a) {
        $(a.currentTarget).show()
    })
});
$(function () {
    function a() {
        var a = [];
        $("#formatted-dmr").find(".dynamically-modifiable-region").length > 0 && a.push("formatted-dmr");
        $(".tcs-creditform-promoblock .dynamically-modifiable-region").length > 0 && a.push("creditform-promoblock");
        $(".creditform-orderedlist .dynamically-modifiable-region").length > 0 && a.push("creditform-orderedlist");
        $(".depositform-orderedlist .dynamically-modifiable-region").length > 0 && a.push("depositform-orderedlist");
        $(".tcs-deposit-open-post .dynamically-modifiable-region").length > 0 && a.push("deposit-open-post");
        $(".creditcard-receiptcard .dynamically-modifiable-region").length > 0 && a.push("creditcard-receiptcard");
        $(".deposit-main-how-open-deposits").length > 0 && a.push("deposit-main-how-open-deposits");
        $(".tcs-balance-transfer-how-to-close-credit-another-bank").length > 0 && a.push("tcs-balance-transfer-how-to-close-credit-another-bank");
        $("#tcs_apartament_form_orderedlist").find(".dynamically-modifiable-region").length > 0 && a.push("apartament-creditform-orderlist");
        return a
    }

    function b() {
        a();
        if ($.cookie("client-region-name-kladr") && $.cookie("client-region-id-kladr")) {
            $(".tcs-current-location").html($.cookie("client-region-name-kladr"));
            $("#choose-location").trigger("regionchanged")
        } else $.getJSON(TCS.getServiceURL("nearest_region"), {feature: "selectable", required: !0}, function (a) {
            $.cookie("client-region-deliverable", null, {path: "/"});
            if (a && "ok" === a.resultCode.toLowerCase() && a.payload && !$.isEmptyObject(a.payload)) {
                $(".tcs-current-location").html(a.payload.name);
                $.cookie("client-region-id-kladr", a.payload.id, {path: "/", expires: 365});
                $.cookie("client-region-name-kladr", a.payload.name, {path: "/", expires: 365});
                $("#choose-location").trigger("regionchanged")
            } else $(".tcs-current-location").html("укажите ваш город")
        })
    }

    function c(a, b) {
        var c = $.Deferred();
        $.getJSON(TCS.getServiceURL("nearest_region"), {
            regionId: a,
            feature: "deliverable",
            required: "false"
        }, function (a) {
            if ("undefined" != typeof a.payload) {
                $.cookie("client-region-deliverable", "true", {path: "/", expires: 365});
                c.resolve(b)
            } else {
                $.cookie("client-region-deliverable", "false", {path: "/", expires: 365});
                c.reject(b)
            }
        });
        return c
    }

    function d(a, b, c) {
        var d;
        if (c.length > 0)for (var e = 0; e < c.length; e++) {
            var f = c[e];
            d = b ? b : "ваш город";
            var g = "";
            switch (f) {
                case"formatted-dmr":
                    g = 'Банк бесплатно доставит вам карту в&nbsp;<span style="white-space:nowrap;">' + d + "</span>";
                    a === !0 && null !== b ? $("#formatted-dmr .dynamically-modifiable-region:first").html("Представитель банка бесплатно доставит вам карту в&nbsp;<span style='white-space:nowrap;'>" + b + "</span>") : $("#formatted-dmr .dynamically-modifiable-region:first").html(g);
                    break;
                case"apartament-creditform-orderlist":
                    g = "Банк бесплатно<br> доставит вам карту<br> в&nbsp;" + d;
                    a === !0 && null !== b ? $("#tcs_apartament_form_orderedlist .dynamically-modifiable-region:first").html("Представитель банка<br> бесплатно доставит вам<br> карту в&nbsp;" + b) : $("#tcs_apartament_form_orderedlist .dynamically-modifiable-region:first").html(g);
                    break;
                case"creditform-promoblock":
                    g = "«Тинькофф Платинум»";
                    a === !0 && null !== b ? $(".tcs-creditform-promoblock .dynamically-modifiable-region:first").html('в <span class="mark"> ' + b + "</span>") : $(".tcs-creditform-promoblock .dynamically-modifiable-region:first").html(g);
                    break;
                case"creditform-orderedlist":
                    g = "Банк бесплатно доставит вам карту в " + d;
                    if (a === !0 && null !== b) {
                        $(".tcs-step-list .dynamically-modifiable-region:first").html("Представитель банка бесплатно доставит вам карту в " + b);
                        $(".tcs-creditform-header-orderedlist .dynamically-modifiable-region:first").html("Представитель банка бесплатно доставит вам карту в " + b)
                    } else {
                        $(".tcs-step-list .dynamically-modifiable-region:first").html(g);
                        $(".tcs-creditform-header-orderedlist .dynamically-modifiable-region:first").html(g)
                    }
                    break;
                case"depositform-orderedlist":
                    if (a === !0 && null !== b) {
                        $(".depositform-orderedlist .tcs-step-list-item2 .dynamically-modifiable-region:first").html("Представитель банка привезет вам документы на вклад и карту в течение 1-2 рабочих дней");
                        $(".depositform-orderedlist .tcs-step-list-item3 .dynamically-modifiable-region:first").html('Пополните вклад любым удобным для вас <a target="_blank" href="/deposit/opening-deposit/">способом</a>');
                        $(".depositform-orderedlist .tcs-creditform-header-orderedlist-item2 .dynamically-modifiable-region:first").html("Представитель банка привезет вам документы на вклад и карту в течение 1-2 рабочих дней");
                        $(".depositform-orderedlist .tcs-creditform-header-orderedlist-item3 .dynamically-modifiable-region:first").html('Пополните вклад любым удобным для вас <a target="_blank" href="/deposit/opening-deposit/">способом</a>')
                    } else {
                        $(".depositform-orderedlist .tcs-step-list-item2 .dynamically-modifiable-region:first").html("Получите от банка специальный код и адрес отделения <br>Почты России");
                        $(".depositform-orderedlist .tcs-step-list-item3 .dynamically-modifiable-region:first").html("Подпишите договор и внесите средства в рекомендованном банком отделении Почты России");
                        $(".depositform-orderedlist .tcs-creditform-header-orderedlist-item2 .dynamically-modifiable-region:first").html("Получите от банка специальный код и адрес отделения <br>Почты России");
                        $(".depositform-orderedlist .tcs-creditform-header-orderedlist-item3 .dynamically-modifiable-region:first").html("Подпишите договор и внесите средства в рекомендованном банком отделении Почты России")
                    }
                    break;
                case"deposit-open-post":
                    if (a === !0 && null !== b) {
                        $(".tcs-deposit-open-post .dynamically-modifiable-region-origin:first").hide();
                        $(".tcs-deposit-open-post .dynamically-modifiable-region:first").show()
                    } else {
                        $(".tcs-deposit-open-post .dynamically-modifiable-region:first").hide();
                        $(".tcs-deposit-open-post .dynamically-modifiable-region-origin:first").show()
                    }
                    break;
                case"creditcard-receiptcard":
                    null !== b ? $(".creditcard-receiptcard .dynamically-modifiable-region:first").html("Как получить кредитную карту в " + b) : $(".creditcard-receiptcard .dynamically-modifiable-region:first").html("Как получить кредитную карту");
                    a === !0 && null !== b ? $(".creditcard-receiptcard .dynamically-modifiable-region:last").html("Представитель банка бесплатно доставит вам карту в " + b) : $(".creditcard-receiptcard .dynamically-modifiable-region:last").html("Банк бесплатно доставит вам карту в " + d);
                    break;
                case"deposit-main-how-open-deposits":
                    null !== b ? $(".deposit-main-how-open-deposits h1:first").html("Как открыть вклад в " + b) : $(".deposit-main-how-open-deposits h1:first").html("Как открыть вклад");
                    if (a === !0 && null !== b) {
                        $(".deposit-main-how-open-deposits #deposit_3images_2_img img").attr("src", "/static/media/deposit/deposit_curier.jpg").css({margin: 0});
                        $(".deposit-main-how-open-deposits #deposit_3images_2_txt").html("Представитель банка бесплатно доставит вам документы на вклад и карту в " + b);
                        $(".deposit-main-how-open-deposits #deposit_3images_3_img img").attr("src", "/static/media/deposit/deposit_gold.jpg").css({margin: 0});
                        $(".deposit-main-how-open-deposits #deposit_3images_3_txt").html('Пополните вклад любым<br />удобным для вас <a href="/deposit/opening-deposit/">способом</a>')
                    } else {
                        $(".deposit-main-how-open-deposits #deposit_3images_2_img img").attr("src", "/static/media/deposit/post-deposit/postal_know_post_office.jpg").css("margin", "15px 0 0 35px");
                        $(".deposit-main-how-open-deposits #deposit_3images_2_txt").html("Сотрудник банка сообщит вам специальный код и адрес отделения Почты России");
                        $(".deposit-main-how-open-deposits #deposit_3images_3_img img").attr("src", "/static/media/deposit/post-deposit/postal_move_post_office.jpg").css("margin", "30px 0 0 5px");
                        $(".deposit-main-how-open-deposits #deposit_3images_3_txt").html("Подпишите договор и внесите средства в рекомендованном банком отделении Почты России")
                    }
                    break;
                case"tcs-balance-transfer-how-to-close-credit-another-bank":
                    a === !0 && null !== b ? $(".tcs-balance-transfer-how-to-close-credit-another-bank_delivery").html("Представитель банка бесплатно доставит карту в <nobr>" + b + "</nobr>") : $(".tcs-balance-transfer-how-to-close-credit-another-bank_delivery").html("Представитель банка бесплатно доставит карту")
            }
        }
    }

    $("#choose-location").bind("regionchanged", function () {
        $(".tcs-current-location").text() === $.cookie("client-region-name-kladr") && $.cookie("client-region-deliverable") ? "true" === $.cookie("client-region-deliverable") ? d(!0, $.cookie("client-region-name-kladr"), a()) : d(!1, $.cookie("client-region-name-kladr"), a()) : c($.cookie("client-region-id-kladr"), $.cookie("client-region-name-kladr")).then(function (b) {
            d(!0, b, a())
        }, function (b) {
            d(!1, b, a())
        })
    });
    $("#choose-location").length && b()
});
$(function () {
    $("#tcs-switch-lang-runner a").click(function () {
        if (!$(this).is(".tcs-switch-lang-current")) {
            var a = $(this);
            "tcs-switch-lang-rus" === a.attr("id") ? a.siblings("span").animate({backgroundPosition: "-2px -2px"}, 300, function () {
                document.location = a.attr("href")
            }) : a.siblings("span").animate({backgroundPosition: "26px -2px"}, 300, function () {
                document.location = a.attr("href")
            });
            return !1
        }
    })
});
$(function () {
    "use strict";
    docinit()
});
$(function () {
    function a(a, b) {
        if (!a.next(".icon_help").length) {
            var c = a.attr("tooltip_text"), d = 360, e = 20;
            a.attr("tooltip_width") && (d = a.attr("tooltip_width"));
            var f = -1 * d - e;
            f -= Math.round(a.width() / 2);
            var g = $('<div class="icon_help" style="z-index:1010;"><div class="description_text hover" style="left:' + f + "px; width:" + d + 'px;"><div class="arrow"></div>' + c + "</div></div>");
            g.insertAfter(a[0]);
            g.find(".description_text").fadeTo(b, 1)
        }
    }

    function b(a, b) {
        var c = a.next(".icon_help");
        c.fadeOut(b, function () {
            c.remove()
        })
    }

    $(".TCS-Tooltip-Click").on("click", function (b) {
        b.preventDefault();
        a($(b.target), 500)
    }).on("mouseleave", function (a) {
        b($(a.target), 0)
    });
    $(".tooltip_tcs").hover(function (b) {
        a($(b.target), 500)
    }, function (a) {
        b($(a.target), 0)
    });
    $("a.tooltip, a.tooltip_tcs").on("click", function (a) {
        a.preventDefault()
    });
    $(".tooltip_tcs_cash").on("click", function (a) {
        var c = $(a.target);
        if (!c.next(".icon_help").length) {
            var d = c.parent(), e = c.attr("tooltip_text"), f = $('<div class="icon_help" style="z-index: 1010; cursor: default;"><div class="description_text tooltip_description_text hover" style="left: -326px; width: 366px;"><div class="arrow"></div><div class="tooltip_cont">' + e + "</div></div></div>");
            f.insertAfter(c[0]);
            d.find(".description_text").fadeTo(500, 1).on("mouseleave", function () {
                b(c, 0)
            })
        }
    })
});
$(function () {
    "use strict";
    function a(b, c) {
        var d = b.shift(), e = c || window;
        return d ? a(b, e[d]) : c
    }

    function b(b, c) {
        var d = b && b.length > 0 ? b.split(".") : [];
        return d.length > 0 ? a(d, c) : null
    }

    function c(a) {
        var c = $(a).attr("data-gadget-onload"), d = null;
        d = b(c);
        "function" == typeof d && d({body: a})
    }

    setTimeout(function () {
        $("div[data-gadget-onload]").each(function (a, b) {
            setTimeout(c.bind(this, b), 1)
        })
    }, 100)
});
var TCS = TCS || {};
!function (a, b, c) {
    "use strict";
    var d = function (a, d) {
        if (a && a.name && d) {
            this.name = a.name;
            this.timeout = a.timeout || 1e4;
            this.PERIOD = 100;
            this.time = 0;
            this.callback = d;
            this.old_value = c.cookie(a.name);
            this._init()
        } else b.console && b.console.log && b.console.log("Need required parameters")
    };
    d.prototype._init = function () {
        if (c.cookie(this.name) === this.old_value) {
            this.time += this.PERIOD;
            this.time < this.timeout ? setTimeout(function () {
                this._init()
            }.bind(this), this.PERIOD) : this.callback(!1)
        } else this.callback(!0)
    };
    a.CookieWatcher = d
}(TCS, window, jQuery);
var TCS = TCS || {};
!function (a, b, c) {
    "use strict";
    a.socialDetector = a.socialDetector || {
        config: {
            socials: ["fb", "vk"],
            fb: {
                url: "//connect.facebook.net/ru_ru/all.js",
                init: {appId: a.utils.getSocialAppId("fb"), xfbml: !1, version: "v2.0", status: !0}
            },
            vk: {url: "//vk.com/js/api/openapi.js", init: {apiId: a.utils.getSocialAppId("vk")}},
            ok: {url: "//www.odnoklassniki.ru/browserToolbarGetData?v=3"}
        }, params: {fb: {init: !1}, vk: {init: !1}}, getStatus: function (a, b) {
            if (b)switch (a) {
                case"vk":
                    return this._getCommonStatus("vk", b);
                case"fb":
                    return this._getCommonStatus("fb", b);
                case"ok":
                    return this._getOKStatus(b);
                default:
                    return !1
            }
        }, _getCommonStatus: function (a, b) {
            c.ajax({
                url: this.config[a].url, dataType: "script", cache: !0, success: function () {
                    this._getCommonStatusAsyncInit(a, b)
                }.bind(this)
            })
        }, _getCommonStatusAsyncInit: function (a, b) {
            var c, d;
            switch (a) {
                case"vk":
                    c = VK;
                    break;
                case"fb":
                    c = FB
            }
            d = this.config[a].init;
            if (d.appId || d.apiId) {
                if (c) {
                    if (this.params[a].init === !1) {
                        c.init(d);
                        this.params[a].init = !0
                    }
                    "vk" === a ? c.Auth.getLoginStatus(function (a) {
                        var c = "connected" === a.status || "logined" === a.status;
                        b(c)
                    }.bind(this)) : "fb" === a && c.getLoginStatus(function (a) {
                        var c = "connected" === a.status || "not_authorized" === a.status;
                        b(c)
                    }.bind(this))
                }
            } else b(!1)
        }, _getOKStatus: function (a) {
            c.getJSON(this.config.ok.url, function (b) {
                a(b && b.authorized)
            })
        }, getAllStatuses: function (a) {
            async.map(this.config.socials, function (a, b) {
                this.getStatus(a, function (c) {
                    b(null, {name: a, status: c})
                }.bind(this))
            }.bind(this), a)
        }
    }
}(TCS, window, jQuery);
var TCS = TCS || {};
!function (a, b, c) {
    "use strict";
    var d = function (a) {
        this.name = a.name;
        this.value = a.value;
        this.status = a.status;
        this.method = a.method;
        a.update && a.update()
    };
    d.prototype.toObject = function () {
        return {name: this.name, value: this.value, method: this.method}
    };
    d.prototype.onReady = function (a) {
        var c = this;
        "ready" === this.status ? a(c.toObject()) : b.setTimeout(function () {
            c.onReady(a)
        }, 100)
    };
    a.properties = a.properties || {
        _init: !1,
        PRIMARY_PARAMS: ["utm_source", "utm_content", "utm_campaign", "utm_term", "utm_medium", "sid", "wm"],
        params: {},
        _fillParamsFromGet: function () {
            var b, d = a.utils.paramsToObject();
            if (d)for (b in d)d.hasOwnProperty(b) && this.setParam({
                name: b,
                value: d[b],
                method: "get",
                status: -1 !== c.inArray(b, this.PRIMARY_PARAMS) ? "processed" : "ready"
            })
        },
        _processPrimaryParamsLaw: function (b) {
            return a.utils.getParameterByName("utm_source") ? a.utils.getParameterByName(b) || "" : null
        },
        _processPrimaryParamsUtmTerm: function () {
            var d, e, f, g, h, i = "";
            if (c.cookie("__utmz") && -1 !== c.cookie("__utmz").indexOf("utmctr=")) {
                d = c.cookie("__utmz");
                e = d.indexOf("utmctr=") + "utmctr=".length;
                f = -1 === d.indexOf("|", e) ? d.length : d.indexOf("|", e);
                i = d.substring(e, f);
                h = "parsing __utmz"
            } else {
                g = a.utils.getParameterByName("text", b.document.referrer) || a.utils.getParameterByName("oq", b.document.referrer) || a.utils.getParameterByName("q", b.document.referrer) || a.utils.getParameterByName("query", b.document.referrer);
                if (g) {
                    i = g;
                    h = "search inside referrer"
                }
            }
            a.utils.filterGoogleValue(i) ? this.setParam({
                name: "utm_term",
                status: "ready",
                value: i,
                method: h
            }) : this.setParam({name: "utm_term", status: "ready", value: "", method: "no_info"})
        },
        _processPrimaryParamsUtmCampaign: function () {
            var b, d, e, f = "";
            if (c.cookie("__utmz") && -1 !== c.cookie("__utmz").indexOf("utmccn=")) {
                b = c.cookie("__utmz");
                d = b.indexOf("utmccn=") + "utmccn=".length;
                e = -1 === b.indexOf("|", d) ? b.length : b.indexOf("|", d);
                f = b.substring(d, e)
            }
            a.utils.filterGoogleValue(f) ? this.setParam({
                name: "utm_campaign",
                status: "ready",
                value: f,
                method: "parsing __utmz"
            }) : this.setParam({name: "utm_campaign", status: "ready", value: "", method: "no_info"})
        },
        _processPrimaryParamsHandler: function (b) {
            var d, e = {}, f = this._processPrimaryParamsLaw, g = document.referrer.split("/")[2];
            g = g && -1 === g.indexOf("tcsbank.ru") ? g : "";
            e.name = b;
            e.status = "ready";
            if (null !== f(b)) {
                e.method = "get";
                e.value = f(b)
            } else if (null !== c.cookie(b)) {
                e.method = "cookie";
                e.value = c.cookie(b)
            } else if ("utm_source" === b && g) {
                e.method = "referer";
                e.value = g
            } else if ("utm_campaign" === b || "utm_term" === b) {
                e.status = "processed";
                d = new TCS.CookieWatcher({name: "__utmz", timeout: 5e3}, function () {
                    "utm_campaign" === b && a.properties._processPrimaryParamsUtmCampaign();
                    "utm_term" === b && a.properties._processPrimaryParamsUtmTerm()
                })
            } else {
                e.method = "no_info";
                e.value = ""
            }
            return e
        },
        _processPrimaryParams: function () {
            function a(a, b, c) {
                var d = new Date;
                d.setDate(d.getDate() + c);
                var e = _.map(b.split("|"), function (a) {
                    return encodeURIComponent(a)
                }).join("|");
                document.cookie = a + "=" + e + ";expires=" + d.toUTCString() + ";path=/"
            }

            var b;
            for (b = 0; b < this.PRIMARY_PARAMS.length; b++)this.setParam(this._processPrimaryParamsHandler(this.PRIMARY_PARAMS[b]), function (b) {
                var d = b.name, e = b.value, f = c.cookie(d), g = d + "_history", h = "|", i = c.cookie(g) || "", j = i ? i.split(h) : null, k = 10;
                if (f && f !== e) {
                    j && j.length >= k - 1 && (i = j.slice(0, k - 1).join(h));
                    i = i ? f + h + i : f;
                    a(g, i, 365)
                }
                a(d, e, 60)
            })
        },
        init: function () {
            this._fillParamsFromGet();
            this._processPrimaryParams();
            this._init = !0
        },
        setParam: function (a, b) {
            this.params[a.name] = this.params[a.name] ? c.extend(!0, this.params[a.name], a) : new d(a);
            b && this.params[a.name].onReady(b)
        },
        getParam: function (a) {
            return this.params[a] ? this.params[a] : {}
        },
        isReady: function () {
            var a, b = this.params, c = !0;
            for (a in b)b.hasOwnProperty(a) && "function" != typeof b[a] && (c &= "ready" === this.params[a].status);
            return this._init && c
        },
        onReady: function (a) {
            var c = this;
            this.isReady() ? a(this.params) : b.setTimeout(function () {
                c.onReady(a)
            }, 100)
        }
    };
    a.properties.init()
}(TCS, window, jQuery);
var TCS = TCS || {};
!function (a, b, c) {
    "use strict";
    a.identify = a.identify || {
        dataIsTooOld: function (a) {
            return !a || (new Date).getTime() - a > 864e5
        }, getUTMA: function () {
            return a.utils.getUniqueIDByGA()
        }, sendData: function (b) {
            var d = a.getServiceURL("webuser");
            return b ? c.getJSON(d, b) : c.getJSON(d)
        }, set: function (a, b) {
            c.permaCookie("wuid", a);
            c.permaCookie("wuid_last_call_time", (new Date).getTime());
            c.permaCookie("wuid_auth", b)
        }, callTracker: function (a) {
            var b = document.createElement("img"), c = document.getElementById("datamind_container");
            if (c) {
                b.setAttribute("border", "0");
                b.setAttribute("width", "1");
                b.setAttribute("height", "1");
                b.setAttribute("src", "https://sync.pool.datamind.ru/image?source=tcs&id=" + a);
                c.appendChild(b)
            }
        }, init: function (b) {
            var d = this.getUTMA(), e = c.permaCookie("wuid"), f = {};
            if (!e || this.dataIsTooOld(c.permaCookie("wuid_last_call_time")) || b && "true" != c.permaCookie("wuid_auth")) {
                d && (f.ga_utma = d);
                e && (f.wuid = e);
                this.sendData(f).done(function (d) {
                    if (a.utils.checkResponse(d, ["wuid"])) {
                        this.set(d.payload.wuid, b);
                        this.callTracker(d.payload.wuid);
                        c(document).trigger("start-catalyst-lib")
                    } else c(document).trigger("start-catalyst-lib", [!1])
                }.bind(this)).fail(function () {
                    c(document).trigger("start-catalyst-lib", [!1])
                })
            }
        }
    }
}(TCS, window, jQuery);
TCS.dynamicRedirectUrls = TCS.dynamicRedirectUrls || {};
!function (a, b, c, d) {
    "use strict";
    var e, f = null;
    a.utils.getRedirectUrl = function (c, d, g) {
        var h = b.extend({}, d);
        if (f)g(f[c.toLowerCase()]); else {
            if (!e) {
                e = b.Deferred();
                b.getJSON(a.getServiceURL("social_networks"), h).done(function (b) {
                    if (a.utils.checkResponse(b)) {
                        f = b.payload;
                        e.resolve(f[c.toLowerCase()])
                    } else e.reject()
                }).fail(function () {
                    e.reject()
                })
            }
            e.always(g)
        }
    };
    a.socialApi = a.socialApi || {
        getInstance: function (b, c) {
            c || (c = a.utils.getSocialAppId(b.toString().toLowerCase()));
            if (void 0 === a.socialApi[b])throw new ReferenceError("Class TCS.socialApi." + b + " not Found.");
            void 0 === a.socialApi[b + "Obj"] && (a.socialApi[b + "Obj"] = new a.socialApi[b](c));
            return a.socialApi[b + "Obj"]
        }, getSocialNetworks: function (c) {
            b.get(a.getServiceURL("pointers"), {}, function (a) {
                c(a)
            }).fail(function () {
                c({resultCode: "CONNECT_ERROR", errorMessage: "Can't connect to server", status: "error"})
            })
        }, removeSocialNetwork: function (c, d) {
            b.get(a.getServiceURL("remove_pointer"), {social_network_id: c}, function (b) {
                a.socialApi.getInstance(c.toString().toUpperCase()).clearKeys();
                d(b)
            }).fail(function () {
                d({resultCode: "CONNECT_ERROR", errorMessage: "Can't connect to server", status: "error"})
            })
        }
    };
    a.socialApi.defaultApi = b.inherit({
        __constructor: function (b) {
            this.name = void 0 !== b ? b : null;
            if (null === this.name)throw new TypeError("Error create Social API: name is null");
            if (void 0 !== this.instance)return this.instance;
            this.instance = a.socialApi[this.name + "Obj"] = this;
            this.keys = {};
            this.defer = null;
            this.window = null;
            this.requestData = null;
            this.keyPrefix = "__social__" + this.name + "__";
            this.readKeys()
        }, renderAuthUrl: function (a) {
            return a.replace(/\{(\w+)\}/g, function (a, b) {
                return this[b] || a
            }.bind(this))
        }, getUserInfo: function (a, c) {
            if (!this.getKey("networkAccountId")) {
                c({
                    resultCode: "REQUEST_ERROR",
                    errorMessage: "network user id not found",
                    status: "error",
                    error_code: 301
                });
                return !1
            }
            this.send("social_get_user_info", b.extend({
                uid: this.getKey.bind(this, "networkAccountId"),
                fields: this.getUserInfoFields()
            }, a), c)
        }, getFriends: function (a, c) {
            if (!this.getKey("networkAccountId")) {
                c({
                    resultCode: "REQUEST_ERROR",
                    errorMessage: "network user id not found",
                    status: "error",
                    error_code: 302
                });
                return !1
            }
            this.send("social_get_friends", b.extend({
                uid: this.getKey.bind(this, "networkAccountId"),
                fields: this.getUserInfoFields()
            }, a), c)
        }, shareOnWall: function (a, c) {
            if (!this.getKey("networkAccountId")) {
                c({
                    resultCode: "REQUEST_ERROR",
                    errorMessage: "network user id not found",
                    status: "error",
                    error_code: 303
                });
                return !1
            }
            this.send("share", b.extend({uid: this.getKey("networkAccountId"), message: "hello world!"}, a), c)
        }, send: function (a, b, c) {
            this.requestData = {method: a, params: b, callback: c};
            this.authenticate().done(this.sendAfterAuthenticateSuccess.bind(this)).fail(this.sendAfterAuthenticateFail.bind(this))
        }, sendAfterAuthenticateSuccess: function () {
            var a, b = this.requestData.method, c = this.requestData.params, d = this.requestData.callback;
            try {
                a = this.renderParams(c)
            } catch (e) {
                d({
                    errorMessage: "AccessToken not found",
                    resultCode: "AUTHENTICATE_ERROR",
                    status: "error",
                    error_code: 102
                });
                return
            }
            this.doSend(this.getRestUrl(b), a, d)
        }, sendAfterAuthenticateFail: function (a) {
            var b = this.requestData.callback;
            b(a)
        }, doSend: function (a, c, d) {
            c.social_user_id = this.getKey("networkAccountId");
            b.get(a, c, function (a) {
                if (!0 === this.checkResponseData(a)) {
                    this.requestData = null;
                    d(a)
                }
            }.bind(this), this.getRequestType()).fail(function () {
                d({
                    errorMessage: "server is not available",
                    resultCode: "API_RESPONSE_ERROR",
                    status: "error",
                    error_code: 201
                })
            }.bind(this))
        }, getRequestType: function () {
            return "json"
        }, renderParams: function (a) {
            var c = a || {};
            if (!this.getKey("networkAccountId"))throw new Error("Network account id not found");
            return b.extend(c, {social_network_id: this.name.toLocaleLowerCase(), uid: this.getKey("networkAccountId")})
        }, getRestUrl: function (b) {
            return a.getServiceURL(b)
        }, checkResponseData: function (a) {
            if ("[object Object]" === Object.prototype.toString.call(a)) {
                if (void 0 !== a.resultCode && "WRONG_CONFIRMATION_CODE" === a.resultCode) {
                    this.clearKeys();
                    this.authenticate().done(this.sendAfterAuthenticateSuccess.bind(this)).fail(this.sendAfterAuthenticateFail.bind(this));
                    return !1
                }
                return !0
            }
            return !1
        }, authenticate: function (a) {
            this.defer = b.Deferred();
            this.authOptions = a;
            this.getKey("networkAccountId") ? this.defer.resolve() : this.openWindow();
            return this.defer.promise()
        }, insertSessionId: function (b) {
            return b.replace(/SESSION_ID/, a.Session.getSessionID())
        }, openWindow: function (c) {
            if (c)this._openWindow(c); else {
                this._openWindow("");
                this.window && b(this.window.document.body).css("background", "url(https://www.tcsbank.ru/static/media/indicator.gif) no-repeat 50% 50%");
                a.utils.getRedirectUrl(this.name, this.authOptions, function (a) {
                    a ? this.window && (this.window.location = this.insertSessionId(this.renderAuthUrl(a))) : this.window && b(this.window.document.body).css("background", "").html('<div style="position: absolute;top:45%;width:98%; text-align: center;">Произошла ошибка</div>')
                }.bind(this))
            }
        }, _openWindow: function (a) {
            this.window = c.open(this.insertSessionId(a), this.name, "left=500,top=200,width=850,height=480,resizable=yes,scrollbars=yes,status=yes");
            this.window && this.window.focus();
            this.windowCloseInterval = window.setInterval(function () {
                if (!this.window || this.window.closed) {
                    window.clearInterval(this.windowCloseInterval);
                    this.window = null;
                    this.onWindowClose();
                    this.authenticationCancel()
                }
            }.bind(this), 500)
        }, closeWindow: function () {
            this.window = null
        }, onWindowClose: function () {
        }, authenticationSuccess: function (a) {
            if (this.defer) {
                try {
                    this.setKeys(a)
                } catch (c) {
                    this.defer.reject(b.extend({
                        errorMessage: "Data from server is incorrect",
                        resultCode: "AUTHENTICATE_ERROR"
                    }, {status: "error", errorCode: 100}));
                    this.defer = null;
                    return
                }
                this.defer.resolve({status: "success"});
                this.defer = null
            }
        }, authenticationCancel: function () {
            if (this.defer) {
                this.defer.reject({status: "authCancel", error: !1});
                this.defer = null
            }
        }, authenticationError: function (a) {
            if (this.defer) {
                this.defer.reject(b.extend(a, {status: "error"}));
                this.defer = null
            }
            this.closeWindow()
        }, requestAccessToken: function () {
            this.doSend(a.getServiceURL("social_get_access_token"), {
                code: "234234etergaergaerg",
                social_network_id: this.name
            }, function (a) {
                console.log(a)
            })
        }, keys: {}, setKeys: function (a) {
            var b;
            if (!_.isObject(a))throw new TypeError("type of data parameter must be a Object");
            if (!a.socialNetworkUser || !a.socialNetworkUser.networkId)throw new Error("missing fields");
            for (b in a)a.hasOwnProperty(b) && this.setKey(b, a[b])
        }, clearKeys: function () {
            _.each(this.keys, this.clearKey, this);
            return this
        }, clearKey: function (a, b) {
            this.keys[b] = d.store(b, null);
            return this
        }, getKey: function (a) {
            a = this.keyPrefix + a;
            this.keys[a] = d.store(a);
            return this.keys[a]
        }, setKey: function (a, b) {
            if (!_.isObject(b)) {
                a = this.keyPrefix + a;
                this.keys[a] = d.store(a, b);
                return this.keys[a]
            }
            _.each(b, function (a, b) {
                this.setKey(b, a)
            }, this)
        }, readKeys: function () {
            _.each(d.store(), this.readKey, this);
            return this
        }, readKey: function (a, b) {
            0 === b.indexOf(this.keyPrefix) && (this.keys[b] = a);
            return this
        }
    }, {})
}(TCS, jQuery, window, amplify);
TCS.socialApi.FB = $.inherit(TCS.socialApi.defaultApi, {
    __constructor: function () {
        this.__base("FB")
    }, checkResponseData: function (a) {
        if (!1 === this.__base(a))return !1;
        if (void 0 !== a.error && 190 === +a.error.code) {
            this.clearKeys();
            this.authenticate().done(this.sendAfterAuthenticateSuccess.bind(this)).fail(this.sendAfterAuthenticateFail.bind(this));
            return !1
        }
        return !0
    }, getUserInfoFields: function () {
        return "name,first_name,last_name,gender"
    }
}, {});
TCS.socialApi.FQ = $.inherit(TCS.socialApi.defaultApi, {
    __constructor: function () {
        this.__base("FQ")
    }
}, {});
TCS.socialApi.GL = TCS.socialApi.GPLUS = $.inherit(TCS.socialApi.defaultApi, {
    __constructor: function () {
        this.__base("GL")
    }
}, {});
TCS.socialApi.IN = $.inherit(TCS.socialApi.defaultApi, {
    __constructor: function () {
        this.__base("IN")
    }, checkResponseData: function (a) {
        return !1 === this.__base(a) ? !1 : !0
    }, getUserInfoFields: function () {
        return "name,first_name,last_name,gender"
    }
}, {});
TCS.socialApi.OK = $.inherit(TCS.socialApi.defaultApi, {
    __constructor: function () {
        this.__base("OK")
    }, getRequestType: function () {
        return "json"
    }, checkResponseData: function (a) {
        if (!1 === this.__base(a))return !1;
        if (void 0 !== a.error && 5 === +a.error.error_code) {
            this.clearKeys();
            this.authenticate().done(this.sendAfterAuthenticateSuccess.bind(this)).fail(this.sendAfterAuthenticateFail.bind(this));
            return !1
        }
        return !0
    }, getUserInfoFields: function () {
        return "uid,first_name,last_name,pic_1"
    }
}, {});
TCS.socialApi.TW = $.inherit(TCS.socialApi.defaultApi, {
    __constructor: function () {
        this.name = "TW";
        this.url = $.getJSON(TCS.getServiceURL("socialcallback/redirecturl"), {
            social_network_id: "tw",
            origin: "web",
            portal: 1
        }).pipe(function (a) {
            var b = $.Deferred();
            "OK" === a.resultCode && a.payload && a.payload.tw ? b.resolve(a.payload.tw) : b.reject();
            return b
        })
    }, openWindow: function () {
        this.url.then(function (a) {
            TCS.socialApi.defaultApi.prototype.openWindow(a)
        }.bind(this))
    }, shareOnWall: function (a) {
        window.open("http://twitter.com/home?status=" + encodeURI(a.message), "Loading", "width=700,height=400,toolbar=0,scrollbars=0,status=0,resizable=0,location=0,menuBar=0")
    }
}, {});
TCS.socialApi.VK = $.inherit(TCS.socialApi.defaultApi, {
    __constructor: function () {
        this.__base("VK")
    }, checkResponseData: function (a) {
        if (!1 === this.__base(a))return !1;
        if (void 0 !== a.error && 5 === +a.error.error_code) {
            this.clearKeys();
            this.authenticate().done(this.sendAfterAuthenticateSuccess.bind(this)).fail(this.sendAfterAuthenticateFail.bind(this));
            return !1
        }
        return !0
    }, getUserInfoFields: function () {
        return "name,first_name,last_name,sex,gender,photo"
    }, shareOnWall: function (a, b) {
        TCS.loadVk().done(function () {
            VK.Auth.login(function (c) {
                c.session && VK.Api.call("wall.post", a, function (a) {
                    a.error || b()
                })
            }.bind(this), 2048)
        }.bind(this))
    }
}, {});
var TCS = "undefined" == typeof TCS ? {} : TCS;
!function (a, b) {
    "use strict";
    var c = a.inherit({
        tagName: "div", className: "tcs-view", __constructor: function (b) {
            this.freeDimensions = !1;
            a.extend(this, b);
            this.parentView = null;
            this.container || (this.container = a(document.createElement(this.tagName)));
            !this.container instanceof jQuery && (this.container = a(this.container));
            this.container.addClass(this.className);
            this.children = [];
            this.width = 0;
            this.height = 0;
            this.rendered = !1;
            return this
        }, setWidth: function (a) {
            this.width = a;
            return this.render()
        }, setHeight: function (a) {
            this.height = a;
            return this.render()
        }, render: function () {
            this.freeDimensions || this.container.css({width: this.width, height: this.height});
            this.rendered = !0;
            this.onRender();
            return this
        }, onRender: function () {
        }, show: function () {
            if (!this.rendered)return this;
            a(this.container).show();
            this.onShow();
            return this
        }, onShow: function () {
        }, hide: function () {
            a(this.container).hide();
            this.onHide();
            return this
        }, onHide: function () {
        }, makeAbsoluteIfNeeded: function () {
            "absolute" !== this.container.css("position") && this.container.css("position", "absolute")
        }, position: function (a) {
            this.makeAbsoluteIfNeeded();
            this.container.css({left: a.left, top: a.top});
            return this
        }, positionCenter: function () {
            this.makeAbsoluteIfNeeded();
            this.position({
                left: this.container.parent().width() / 2 - this.container.width() / 2,
                top: this.container.parent().height() / 2 - this.container.height() / 2
            });
            return this
        }, setAlwaysCentered: function () {
            this.makeAbsoluteIfNeeded();
            this.container.css({
                left: "50%",
                top: "50%",
                "margin-left": -this.container.width() / 2,
                "margin-top": -this.container.height() / 2 + a(window).scrollTop()
            });
            return this
        }
    }, {
        toString: function () {
            return "View"
        }
    });
    b.View = c
}(jQuery, TCS);
var TCS = "undefined" == typeof TCS ? {} : TCS;
!function (a, b) {
    "use strict";
    var c = a.inherit(b.View, {
        className: "tcs-window-view tcs-view", __constructor: function (b) {
            this.__base(b);
            this.contentContainer = null;
            this.contentContainerClass = "tcs-window-content-view";
            this.closeButton = null;
            this.closeButtonClass = "tcs-window-button tcs-window-button-close";
            this.closeButton = a(document.createElement("div"));
            this.closeButton.addClass(this.closeButtonClass);
            this.contentContainer = a(document.createElement("div"));
            this.contentContainer.addClass(this.contentContainerClass);
            this.isStatic || this.container.append(this.closeButton);
            this.container.append(this.contentContainer);
            this.closeButton.click(this.onCloseButtonClick.bind(this));
            return this
        }, onCloseButtonClick: function () {
            this.hide()
        }, setContent: function (a) {
            this.contentContainer.html(a);
            return this
        }
    }, {
        toString: function () {
            return "Window"
        }
    });
    b.Window = c
}(jQuery, TCS);
var TCS = "undefined" == typeof TCS ? {} : TCS;
!function (a, b) {
    "use strict";
    var c = a.inherit(b.Window, {
        className: "tcs-modal-window-view tcs-window-view tcs-view",
        __constructor: function (b) {
            this.__base(b);
            this.fader = document.createElement("div");
            this.fader.className = "tcs-modal-window-fader";
            this.fader = a(this.fader);
            this.isStatic || this.fader.bind("click", this.onFaderClick.bind(this));
            this.open = this.show;
            this.close = this.hide;
            return this
        },
        onKeyDown: function (a) {
            27 === a.keyCode && this.hide()
        },
        onFaderClick: function () {
            this.hide()
        },
        show: function () {
            a(document.body).bind("keydown.modalwindow", this.onKeyDown.bind(this));
            this.fader.show();
            return this.__base()
        },
        onClose: function () {
        },
        hide: function () {
            a(document.body).unbind("keydown.modalwindow");
            this.fader.hide();
            this.onClose();
            return this.__base()
        },
        render: function () {
            if (!this.rendered) {
                this.container.css({position: "fixed"});
                a(document.body).append(this.fader);
                a(document.body).append(this.container)
            }
            this.__base();
            return this
        },
        centering: function () {
            return this.setAlwaysCentered()
        }
    }, {
        toString: function () {
            return "ModalWindow"
        }
    });
    b.ModalWindow = c
}(jQuery, TCS);
var TCS = TCS || {};
!function (a) {
    "use strict";
    a.badEmails = ["yndex.ru", "gmail.ru", "mail.ry", "mai.ru", "meil.ru", "email.ru", "jandex.ru", "e-mail.ru", "yandex.ry", "yandeks.ru", "vail.ru", "mal.ru", "mail.com", "mfil.ru", "mil.ru", "indox.ru", "yahdex.ru", "dk.ru", "maii.ru", "ramler.ru", "yadex.ru", "eandex.ru", "ayndex.ru", "yanex.ru", "ramdler.ru", "yndeks.ru", "yandx.ru", "uandex.ru", "maul.ru", "mail.ri", "majl.ru", "yandtx.ru", "vfil.ru", "il.ru", "andex.ru", "yande.ru", "bk.ry", "maij.ru", "yandexs.ru", "jmail.com", "mail.pu", "net.ru", "ail.ru", "mali.ru", "yandekx.ru", "mall.ru", "ramber.ru", "rambler.ry", "abn-mail.ru", "br.ru", "chmail.ru", "el.ru", "ramble.ru", "yanbex.ru", "rumbler.ru", "imail.ru", "rambier.ru", "example.com", "inboks.ru", "com.ru", "mayl.ru", "ranbler.ru", "yanlex.ru", "list.ry", "odnoklassniki.ru", "gip.ru", "jndex.ru", "ihbox.ru", "mail.tu", "yangex.ru"]
}(TCS);
!function (a, b) {
    "use strict";
    _.extend(a.validator.messages, {
        required: "Это поле обязательно для заполнения",
        email: "Введите корректный адрес эл. почты",
        max: a.validator.format("Введите значение, меньшее или равное {0}")
    });
    a.validator.addMethod("checkTargetBankAccount", function (a) {
        return !a || a && 20 === a.length
    }, "Введите 20 цифр номера счета в банке-получателе (если счет состоит из 22-х цифр, укажите первые 20 цифр)");
    a.validator.addMethod("pattern", function (a, b, c) {
        if (this.optional(b))return !0;
        "string" == typeof c && (c = new RegExp("^(?:" + c + ")$"));
        return c.test(a)
    }, "Invalid format.");
    a.validator.addMethod("checkMalinaActualCardNumber", function (a, b) {
        var c = new RegExp("^(?:63930000)");
        return this.optional(b) || c.test(a)
    }, "Первые 8&nbsp;цифр должны быть &laquo;63930000&raquo;");
    a.validator.addMethod("patternBarCode", function (a, b, c) {
        if (!a || !a.length)return !1;
        if (this.optional(b))return !0;
        "string" == typeof c && (c = new RegExp("^(?:" + c + ")$"));
        return c.test(a.toUpperCase())
    }, "Invalid format.");
    a.validator.addMethod("checkFio", function (a, b) {
        if (!a || !a.length)return !1;
        a = a.trim().replace(/\s{1,}/g, " ");
        return this.optional(b) || /\s/.test(a)
    }, "Недостаточно информации. Введите фамилию, имя и отчество через пробел (Например: Иванов Иван Алексеевич)");
    a.validator.addMethod("incomeIndividual", function (a, b) {
        return this.optional(b) || 1000001 > a && a > 100
    }, "Проверьте уровень вашего дохода");
    a.validator.addMethod("notWorkSelect", function (b, c, d) {
        var e = !1;
        a('[name="not_work"]', TCS.form.container).each(function () {
            e = e || a(this).is(":checked")
        });
        return !d || e
    }, "Выберите один из вариантов, предложенных ниже");
    a.validator.addMethod("notCreditHistorySelect", function (b, c, d) {
        var e = !1;
        a('[name="client_declared_credit_history"]', TCS.form.container).each(function () {
            e = e || a(this).is(":checked")
        });
        return !d || e
    }, "Выберите один из вариантов, предложенных ниже");
    a.validator.addMethod("notCurrentDelaySelect", function (b, c, d) {
        var e = !1;
        a('[name="client_declared_current_delay"]', TCS.form.container).each(function () {
            e = e || a(this).is(":checked")
        });
        return !d || e
    }, "Выберите один из вариантов, предложенных ниже");
    a.validator.addMethod("phoneRU", function (a, b) {
        return this.optional(b) || /^\+7\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(a)
    });
    a.validator.addMethod("phoneRU1", function (a, b) {
        return this.optional(b) || /^8\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(a)
    }, "Номер телефона должен состоять из 10 цифр, начиная с кода города/населенного пункта");
    a.validator.addMethod("phoneRU2", function (a, b) {
        return this.optional(b) || /^8[0-9]{10}/.test(a)
    }, "Номер телефона должен состоять из 10 цифр, начиная с кода города/населенного пункта");
    a.validator.addMethod("emailSalary", function (a, b) {
        return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
    }, "Введите корректный адрес эл. почты");
    a.validator.addMethod("ruPhonePrefix", function (a, b) {
        return this.optional(b) || /^[78][345689]/.test(a.replace(/[^\d]+/g, ""))
    }, "Код города/оператора должен начинаться с цифры 3, 4, 5, 6, 8, 9");
    a.validator.addMethod("dateParse", function (a, c) {
        return this.optional(c) || null !== b.parse(a) && /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(18|19|20)\d\d$/i.test(a)
    }, "Укажите верную дату");
    a.validator.addMethod("dateParseLong", function (a, c) {
        return this.optional(c) || null !== b.parse(a) && /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.([0-9][0-9])\d\d$/i.test(a)
    }, "Укажите верную дату");
    a.validator.addMethod("latin", function (a, b) {
        return this.optional(b) || /^[a-z\s\-]+$/i.test(a)
    }, "Допустимо использовать только буквы английского алфавита и дефис");
    a.validator.addMethod("cyrillic", function (a, b, c) {
        return this.depend(c, b) ? this.optional(b) || /^[а-яА-ЯЁё\s\-]+$/i.test(a) : "dependency-mismatch"
    }, "Допустимо использовать только буквы русского алфавита и дефис");
    a.validator.addMethod("cyrillic2", function () {
        return !0
    }, "");
    a.validator.addMethod("cyrillicAndLatin", function (a, b, c) {
        return this.depend(c, b) ? this.optional(b) || /^[a-zа-яА-ЯЁё\s\-]+$/i.test(a) : "dependency-mismatch"
    }, "Допустимо использовать только буквы русского алфавита или латинского алфавита и дефис");
    a.validator.addMethod("dateLess", function (a, c, d) {
        return this.optional(c) || b.parse(a).compareTo(b.parse(d)) <= 0
    }, a.validator.format("Дата должна быть не позднее {0}"));
    a.validator.addMethod("dateGr", function (a, c, d) {
        return this.optional(c) || b.parse(a).compareTo(b.parse(d)) >= 0
    }, a.validator.format("Дата должна быть не ранее {0}"));
    a.validator.addMethod("parseInteger", function (a, b) {
        return this.optional(b) || a.toString() === parseInt(a, 10).toString()
    }, "Число введено некорректно");
    a.validator.addMethod("integer", function (a, b) {
        return this.optional(b) || /^-?\d+$/.test(a)
    }, "Допустимо использовать только целые числа");
    a.validator.addMethod("nonNegativeInteger", function (a, b) {
        return (this.optional(b) || /^-?\d+$/.test(a)) && ("" === a || parseInt(a, 10) >= 0)
    }, "Допустимы неотрицательные целые числа");
    a.validator.addMethod("passportNumber", function (a, b) {
        return this.optional(b) || /^[0-9]{4}-[0-9]{6}$/.test(a)
    }, "Неверный формат номера паспорта");
    a.validator.addMethod("passportIssueOrganization", function (a, b) {
        return this.optional(b) || /^[0-9а-яё№"#/,()\.\-\r\n ]*$/i.test(a)
    }, 'Допустимо использовать только буквы русского алфавита, знаки № " # / . ,  - ( ) и цифры');
    a.validator.addMethod("passportIssueDivision", function (a, b) {
        return this.optional(b) || /^[0-9]{3}-[0-9]{3}$/.test(a)
    }, "Неверный формат кода");
    a.validator.addMethod("promoCode", function (a, b) {
        return this.optional(b) || /^[0-9a-z\s]+$/i.test(a)
    }, "Неверный формат промо-кода");
    a.validator.addMethod("promoCodeAADM", function (a, b) {
        return this.optional(b) || /^\d{3}\-\d{3}-\d{3}-\d{3}$/.test(a)
    }, "Промо-код должен состоять из 12 цифр");
    a.validator.addMethod("birthCertificateSeries", function (a, b) {
        return this.optional(b) || /^[IXMLV]{1,5}[ \-]+[А-Я]{2}$/.test(a)
    }, "Неверный формат серии свидетельства о рождении");
    a.validator.addMethod("nameCatalog", function (a, b, c) {
        return !a || c
    }, "Проверьте заполнение по буквам");
    var c = function (a, c, d) {
        var e, f = b.parse(a);
        f && (e = b.today() >= f.clone().addYears(d[0]) && b.today() <= f.clone().addYears(d[1]));
        return this.optional(c) || e
    };
    a.validator.addMethod("ageBetween", c, a.validator.format("Вам должно быть от {0} до {1} лет"));
    a.validator.addMethod("ageBetween2", function (a, c, d) {
        var e = b.parse(a), f = !1, g = new b;
        g.clearTime();
        e && (f = g.clone().addYears(-d[0]) >= e && g.clone().addYears(-(d[1] + 1)) < e);
        return this.optional(c) || f
    }, a.validator.format("Вам должно быть от {0} до {1} лет"));
    a.validator.addMethod("childAgeBetween", c, a.validator.format("Ребёнку должно быть от {0} до {1} лет"));
    a.validator.addMethod("addressNum", function (a, b) {
        return this.optional(b) || /^[0-9а-яА-ЯёЁ\-\/]+$/i.test(a)
    }, "Номер может состоять из цифр и русских букв");
    a.validator.addMethod("carNumberRU", function (a, b) {
        return this.optional(b) || /^([АВЕКМНОРСТУХ]{1}[0-9]{3}[АВЕКМНОРСТУХ]{2}[0-9]{2,3})*$/i.test(a)
    }, "Введите номер в формате A123BC77. Номер должен содержать только следующие буквы:А, В, Е, К, М, Н, О, Р, С, Т, У, Х.");
    a.validator.addMethod("equallength", function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c), f = d;
        if (a.isArray(d)) {
            b = b.replace(d[1], "");
            f = this.getLength(b, c)
        }
        return this.optional(c) || e === f
    }, a.validator.format("Проверьте правильность ввода"));
    a.validator.addMethod("notEqualPhone", function (a, b, c) {
        var d;
        a = +a.replace(/[^\d]/g, "");
        for (d = 0; d < c.length; d++)if (+this.findByName(c[d]).val().replace(/[^\d]/g, "") === a)return !1;
        return !0
    });
    a.validator.addMethod("closedValues", function (b, c, d) {
        return !("string" == typeof d && d === b || a.isArray(d) && -1 !== a.inArray(b, d))
    }, "Данное значение недопустимо");
    a.validator.addMethod("phoneNotEqual", function (b, c, d) {
        var e, f = this, g = a(d, c.form).filter(function () {
            if (this === c || !this.value)return !1;
            if (c.value.replace(/[^\d]/g, "") === f.elementValue(this).replace(/[^\d]/g, "")) {
                switch (a(this).attr("id")) {
                    case"phone_mobile":
                        e = "мобильного телефона";
                        break;
                    case"phone_home":
                    case"phone_home_field":
                        e = "домашнего телефона";
                        break;
                    case"phone_work":
                        e = "рабочего телефона";
                        break;
                    case"additional_phone_home":
                        e = "телефона родственников";
                        break;
                    case"additional_work_phone":
                        e = "телефона начальника"
                }
                a.validator.messages.phoneNotEqual = "Введите телефон, отличный от " + e;
                return !0
            }
        }).length;
        return !g
    }, "Телефон совпадает с ранее введенными");
    a.validator.addMethod("validityOfPassport", function (c, d, e) {
        {
            var f, g, h, i, j, k, l;
            b.parse(c)
        }
        if (a.isFunction(e[1]))g = b.parse(e[1]()); else {
            f = this.findByName(e[1]);
            if (!f.length)return !1;
            g = b.parse(f.val())
        }
        if (!g)return !0;
        if ("passport" === e[0]) {
            k = b.parse(d.value);
            l = g
        }
        if ("birthday" === e[0]) {
            l = b.parse(d.value);
            k = g
        }
        if (null === l || null === k)return !0;
        h = k < l.clone().addYears(14) && b.now() >= l.clone().addYears(14) && b.now() < l.clone().addYears(20);
        i = k < l.clone().addYears(20) && b.now() >= l.clone().addYears(20) && b.now() < l.clone().addYears(45);
        j = k < l.clone().addYears(45) && b.now() >= l.clone().addYears(45);
        return !h && !i && !j
    }, "Проверьте дату выдачи паспорта и дату рождения. Возможно, у вас закончился срок действия паспорта");
    a.validator.addMethod("postalCode", function (a, b) {
        return this.optional(b) || /^\d{6}$/.test(a)
    }, "Введите корректный индекс");
    a.validator.addMethod("correctPostalCode", function (b, c) {
        var d = a(c).val();
        return a(c).is(".error") && d.length ? !1 : !0
    }, "Несуществующий индекс");
    a.validator.addMethod("address", function (a, b) {
        return this.optional(b) || new RegExp("^[А-Яа-я0-9\\s-\\.,'\\\\/№\\)\\(:_|\"\\#Ёё]*$").test(a)
    }, "Допустимо использовать только буквы русского алфавита");
    a.validator.addMethod("placeOfBirth", function (a, b) {
        return this.optional(b) || /^[0-9а-яА-ЯёЁ\-\\.\,\s\()/]+$/i.test(a)
    }, "Допустимо использовать только буквы русского алфавита, знаки \\ - . / ( ) и цифры");
    a.validator.addMethod("minlength", function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d
    }, "Пожалуйста, введите не менее {0} символов");
    a.validator.addMethod("maxlength", function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || d >= e
    }, "Пожалуйста, введите не более {0} символов");
    a.validator.addMethod("rangelength", function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d[0] && e <= d[1]
    }, "Пожалуйста, введите не менее {0} и не более {1} символов");
    a.validator.addMethod("invoke", function (a, b, c) {
        return c
    });
    a.validator.addMethod("checkCorrectPromoCode", function () {
        return !!TCS.form.validateRules.isCorrectPromoCode
    }, "Промо-код не найден. Попробуйте еще раз или заполните заявку без промо-кода");
    a.validator.addMethod("approvedAddress", function (b, c) {
        return a(c).data("approved") === !0
    }, "Пожалуйста, выберите адрес из выпадающего списка");
    a.validator.addMethod("addressHouseNumber", function (b, c) {
        return a(c).data("addressHouseNumber") !== !1
    }, "Пожалуйста, укажите номер дома");
    a.validator.addMethod("integerStep", function (a) {
        return a && a % 1e3 === 0
    }, "Сумма должна быть кратной {0} руб.")
}(jQuery, Date);
var TCS = TCS || {};
!function (a, b, c) {
    "use strict";
    a.Log = b.inherit({
        __constructor: function () {
            this.level = void 0;
            this.component = void 0;
            this.rows = [];
            this.messageSeparate = "; "
        }, setLevel: function (a) {
            this.level = a;
            return this.level
        }, setComponent: function (a) {
            this.component = a;
            return this.component
        }, addRow: function (a) {
            return this.rows.push(a)
        }, send: function () {
            (new c).src = this.__self.config.url + "&" + b.param({
                message: this._getSendMessage(),
                component: this.component,
                level: this.level
            })
        }, _getSendMessage: function () {
            return this.rows.join(this.messageSeparate)
        }
    }, {config: {url: TCS.getServiceURL("log?")}})
}(TCS, jQuery, Image);
var TCS = TCS || {};
!function (a, b) {
    "use strict";
    b.onerror = function (c, d, e) {
        var f = new a;
        f.setLevel("error");
        f.setComponent("js");
        f.addRow("Error message: " + c);
        f.addRow("URL: " + d);
        f.addRow("Line number: " + e);
        f.addRow("User-agent: " + b.navigator.userAgent);
        f.addRow("Href: " + b.location.href);
        f.send()
    }
}(TCS.Log, this);
var TCS = TCS || {};
!function (a, b) {
    "use strict";
    var c = b.performance, d = new a;
    c && c.timing && setTimeout(function () {
        d.setLevel("info");
        d.setComponent("browser_performance_timing");
        d.addRow("Timing: " + JSON.stringify(c.timing));
        d.addRow("User-agent: " + b.navigator.userAgent);
        d.addRow("Href: " + b.location.href);
        d.send();
        d = null
    }, 1e4)
}(TCS.Log, this);
var initMobileBankGadget = function (a) {
    "use strict";
    var b = "tcs-slide_mob-bank", c = "tcs-mob-bank__slideshow", d = {
        transition_name: "fade",
        transition_ease: "Power1.easeInOut",
        transition_speed: 700
    };
    return function (e) {
        var f = a(e.body), g = f.find("." + b);
        g.slideshow(a.extend({}, d, {
            css_pagination: b + "__device-switcher",
            css_page: "tcs-mob-devices",
            css_page_active: "tcs-mob-devices_active",
            css_slides: b,
            css_slide: c
        })).on("slideshow.init", function (a, b) {
            initGetAppLink(b.$slideshow)
        }).find("." + c).slideshow(d)
    }
}(jQuery);
!function (a) {
    "use strict";
    a.fn.shareButtons = function (b) {
        var c = a.extend(!0, {
            text: "",
            link: document.location.pathname,
            social: {fb: !0, tw: !0, gp: !0, vk: !0}
        }, b), d = a(this), e = /^\/eng\//.test(document.location.pathname) ? "en" : "ru", f = document.location.hostname, g = TCS.utils.getSocialAppId("vk", f), h = ("https:" === document.location.protocol, {
            fb: '<div id="fb-root"></div><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";fjs.parentNode.insertBefore(js, fjs);}(document, \'script\', \'facebook-jssdk\'));</script><div class="fb-like" data-send="false" data-layout="button_count" data-width="90" data-show-faces="true"></div>',
            tw: '<a href="//twitter.com/share" class="twitter-share-button" data-via="tcsbank" data-lang="' + e + '" data-url="http://www.tcsbank.ru' + c.link + '" data-text="' + c.text + '">Твитнуть</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>',
            gp: '<div class="g-plusone" data-size="medium" data-prefilltext="' + c.text + '"></div><script type="text/javascript">window.___gcfg = {lang: \'' + e + "'};(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;po.src = 'https://apis.google.com/js/plusone.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();</script>",
            vk: '<script type="text/javascript">VK.init({apiId: ' + g + ', onlyWidgets: true});</script><div id="vk_like"></div><script type="text/javascript">VK.Widgets.Like("vk_like", {type: "mini", height: 20, pageUrl : "http://www.tcsbank.ru' + c.link + '", pageDescription : "' + c.text + '"});</script>'
        }), i = {fb: 71, tw: 105, gp: 59, vk: 79}, j = "";
        a.each(c.social, function (a, b) {
            b && (j += '<li style="width:' + i[a] + 'px; display: inline-block; margin-right: 10px">' + h[a] + "</li>")
        });
        a.when(TCS.loadVk(), TCS.loadFacebook()).done(function () {
            d.html('<ul style="display: inline-block">' + j + "</ul>")
        })
    }
}(jQuery);
!function (a, b) {
    "use strict";
    a.AjaxSocialSharing = {
        createObject: function (a) {
            if (!(a && a.header && a.body && a.uri))throw new Error("Wrong options");
            return b.get(TCS.getServiceURL("create_shared_object"), a)
        }, getObject: function (a) {
            return b.get(TCS.getServiceURL("shared_object/" + a))
        }, getURLRating: function (a) {
            var c = b.Deferred();
            b.get(TCS.getServiceURL("social_get_likes"), a).done(function (a) {
                TCS.utils.checkResponse(a, ["likes_count"]) ? c.resolve(a.payload.likes_count) : c.reject()
            });
            return c.promise()
        }, getShareURL: function (a) {
            var c = b.Deferred(), d = TCS.apiServer && /\w+/.test(TCS.apiServer) ? TCS.apiServer : "https://www.tcsbank.ru/api/v1/";
            this.createObject(a).done(function (a) {
                TCS.utils.checkResponse(a, ["id"]) ? c.resolve(d + "shared_object/" + a.payload.id) : c.reject()
            }.bind(this));
            return c.promise()
        }, getShareURLForFriends: function (a) {
            var c = b.Deferred(), d = a || {};
            TCS.Session.getSessionID() ? b.get(TCS.getServiceURL("generate_invite_link"), {
                utmCampaign: "directlink",
                utmContent: "directlink"
            }).done(function (a) {
                if (TCS.utils.checkResponse(a, ["directlink"])) {
                    var e = a.payload.directlink;
                    if (d.header) {
                        var f = {
                            header: d.header,
                            body: d.body || "После активации новой карты — Вы получаете в подарок от банка 500 рублей! Ваш друг также получит на свой счет 500 рублей!",
                            uri: e
                        };
                        d && d.image && (f.image = d.image);
                        this.getShareURL(f).done(function (a) {
                            c.resolve(a)
                        }).fail(function () {
                            c.reject()
                        })
                    } else b.get(TCS.getServiceURL("personal_info")).done(function (a) {
                        if (TCS.utils.checkResponse(a, ["personalInfo"])) {
                            var b = {
                                header: a.payload.personalInfo.fullName.firstName + " " + a.payload.personalInfo.fullName.lastName + ", клиент банка «Тинькофф Кредитные Системы», рекомендует Вам оформить нашу карту!",
                                body: d.body || "После активации новой карты — Вы получаете в подарок от банка 500 рублей! Ваш друг также получит на свой счет 500 рублей!",
                                uri: e
                            };
                            d && d.image && (b.image = d.image);
                            this.getShareURL(b).done(function (a) {
                                c.resolve(a)
                            }).fail(function () {
                                c.reject()
                            })
                        }
                    }.bind(this))
                }
            }.bind(this)) : c.reject();
            return c.promise()
        }
    };
    var c = {
        shareLinks: {
            fb: "http://www.facebook.com/sharer.php?u={{link}}",
            tw: "http://twitter.com/intent/tweet?status={{link}}",
            vk: "http://vk.com/share.php?url={{link}}",
            od: "",
            gplus: "https://plus.google.com/share?url={{link}}"
        }, toggle: function (a) {
            a.preventDefault();
            a.stopPropagation();
            b(a.target).toggleClass("tcs-social-popup-box_drop")
        }, share: function (a) {
            var c = b(a.target).attr("data-type"), d = b(a.target).attr("data-url");
            this.openSocialWindow(this.getSocialWindowLink(d, c))
        }, openSocialWindow: function (a) {
            var b = (window.screen.width - 700) / 2, c = (window.screen.height - 500) / 2;
            try {
                window.open(a, "TCS", "width=700,height=500,left=" + b + ",top=" + c + ",status=no,toolbar=no,menubar=no")
            } catch (d) {
            }
            return !1
        }, getSocialWindowLink: function (a, b) {
            return this.shareLinks[b].replace("{{link}}", a)
        }
    };
    a.SocialPopup = c;
    b.fn.socialPopup = function (a) {
        var d = {
            types: ["fb", "tw", "gp", "od", "vk"],
            css: "tcs-social-popup",
            url: "https://www.tcsbank.ru/"
        }, e = b.extend(!0, d, a || {}), f = '<div class="tcs-social-popup {{css}}"><ul class="tcs-social-popup__list">{{list}}</ul></div>', g = '<li class="tcs-social-popup__list-item tcs-social-popup__list-item_{{type}}" data-type="{{type}}" data-url="{{url}}"></li>';
        return this.each(function (a, d) {
            for (var h = b(d), i = "", j = "", k = {
                types: h.attr("data-social") || e.types,
                css: h.attr("data-social-css") || e.css,
                url: h.attr("data-social-url") || e.url
            }, l = 0; l < e.types.length; l++)j += g.replace(/\{\{type\}\}/gi, k.types[l]).replace("{{url}}", k.url);
            i += f.replace("{{list}}", j);
            h.append(i.replace("{{css}}", k.css));
            h.data("socialPopup", {options: k});
            h.on("click.socialpopup", c.toggle.bind(c));
            b(".tcs-social-popup__list-item").get(0).onclick = c.share.bind(c);
            h.addClass("tcs-social-popup-box");
            /absolute|relative/.test(h.css("position")) || h.css("position", "relative")
        })
    };
    b(function () {
        b(document).on("click.socialpopup", function (a) {
            var c = b(a.target);
            c.data("socialPopup") || "social" !== c.attr("data-action") || c.socialPopup();
            b("body").find(".tcs-social-popup-box_drop").each(function (a, c) {
                b(c).removeClass("tcs-social-popup-box_drop")
            })
        })
    })
}(TCS || {}, jQuery);
var TCS = TCS || {};
!function (a, b) {
    "use strict";
    function c(a, c) {
        this.$appendTo = b(a);
        this.$element = b("<i/>", {"class": c || "tcs-spinner"});
        this.append();
        return this
    }

    c.prototype.append = function () {
        b.contains(this.$appendTo[0], this.$element[0]) || this.$appendTo.append(this.$element);
        return this
    };
    c.prototype.show = function () {
        this.append();
        this.$element.addClass("tcs-spinner-show");
        return this
    };
    c.prototype.hide = function () {
        this.append();
        this.$element.removeClass("tcs-spinner-show");
        return this
    };
    a.Spinner = c
}(TCS, jQuery);
!function (a) {
    function b(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0], d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null);
            a.target.dispatchEvent(d)
        }
    }

    a.support.touch = "ontouchend"in document;
    if (a.support.touch) {
        var c, d = a.ui.mouse.prototype, e = d._mouseInit;
        d._touchStart = function (a) {
            var d = this;
            if (!c && d._mouseCapture(a.originalEvent.changedTouches[0])) {
                c = !0;
                d._touchMoved = !1;
                b(a, "mouseover");
                b(a, "mousemove");
                b(a, "mousedown")
            }
        };
        d._touchMove = function (a) {
            if (c) {
                this._touchMoved = !0;
                b(a, "mousemove")
            }
        };
        d._touchEnd = function (a) {
            if (c) {
                b(a, "mouseup");
                b(a, "mouseout");
                this._touchMoved || b(a, "click");
                c = !1
            }
        };
        d._mouseInit = function () {
            var b = this;
            b.element.bind("touchstart", a.proxy(b, "_touchStart")).bind("touchmove", a.proxy(b, "_touchMove")).bind("touchend", a.proxy(b, "_touchEnd"));
            e.call(b)
        }
    }
}(jQuery);
var TCS = TCS || {};
!function ($, global) {
    function getPersonalInfo(a) {
        if (personalInfo) {
            $.isFunction(a) && a(null, personalInfo);
            return $.extend(!0, {}, personalInfo)
        }
        $.getJSON(TCS.getServiceURL("personal_info")).success(didGetPersonalInfo.bind(this, a)).fail(didFailToGetPersonalInfo.bind(this, a));
        return $.extend(!0, {}, personalInfo)
    }

    function didGetPersonalInfo(a, b, c, d) {
        if (b && b.payload && b.payload.personalInfo) {
            personalInfo = b.payload;
            $.isFunction(a) && a(null, personalInfo)
        } else didFailToGetPersonalInfo(a, d, c)
    }

    function didFailToGetPersonalInfo(a) {
        personalInfo = null;
        $.isFunction(a) && a(!0)
    }

    function getMobilePhoneFormatting() {
        return personalInfo ? "+" + personalInfo.personalInfo.mobilePhoneNumber.countryCode + " (" + personalInfo.personalInfo.mobilePhoneNumber.innerCode + ") " + personalInfo.personalInfo.mobilePhoneNumber.number : "not load"
    }

    function getFullName() {
        if (!personalInfo)return "not load";
        with (personalInfo.personalInfo.fullName)return [lastName, firstName, patronymic].join(" ")
    }

    function getAddrNode(a) {
        if (!personalInfo)return !1;
        switch (a) {
            case"REGISTRATION":
                addrNode = personalInfo.passport.registrationAddress;
                break;
            case"HOME":
                addrNode = personalInfo.personalInfo.homeAddress;
                break;
            case"WORK":
                addrNode = personalInfo.employer.address;
                break;
            default:
                addrNode = !1
        }
        return addrNode
    }

    function formatAddress(a, b) {
        return (b ? "" : a.state + ", ") + (a.city ? a.city + ", " : "") + a.streetAddress + ", " + a.houseNumber + (a.buildingNumber ? "/" + a.buildingNumber : "") + (a.constructionNumber ? ", ст." + a.constructionNumber : "") + (a.apartmentNumber ? ", кв." + a.apartmentNumber : "")
    }

    function getAddress(a) {
        if (!personalInfo)return "not load";
        var b = getAddrNode(a);
        return b ? formatAddress(b) : "not load"
    }

    function getShipmentAddress() {
        var a = getAddrNode(personalInfo.subscriptionDestination);
        return personalInfo && a ? formatAddress(a) : "not load"
    }

    var personalInfo = null;
    global.getPersonalInfo = getPersonalInfo;
    global.getMobilePhoneFormatting = getMobilePhoneFormatting;
    global.getFullName = getFullName;
    global.getShipmentAddress = getShipmentAddress;
    global.getAddress = getAddress;
    global.getAddressNode = getAddrNode;
    global.formatAddress = formatAddress
}(jQuery, TCS);
var TCS = TCS || {};
!function (a, b) {
    "use strict";
    var c;
    a.Auth = a.Auth || {};
    a.Auth.LoginIndicationManager = function () {
    };
    a.Auth.LoginIndicationManager.prototype = {
        hideLoginIndication: function () {
            b(".tcs-auth-authentication-status").each(function (a, c) {
                b(c).hide().removeClass("tcs-auth-status-authenticated")
            })
        }, isRendered: function () {
            return b("#header_panel .tcs-auth-authentication-status").length > 0
        }, render: function () {
            var c, d, e = b("#logoutPanel");
            if (e.length > 0) {
                d = a.Auth.Cfg && a.Auth.Cfg.userFullName || "";
                c = (e.text() || e.html() || "").replace("{{username}}", d);
                b("#header_panel").prepend(c)
            }
            b("#tcs-ib-logout").on("click", function () {
                window.Backbone && "function" == typeof window.Backbone.trigger && Backbone.trigger("session:end")
            })
        }, requestAuthStatus: function () {
            b.getJSON(a.getServiceURL("ping")).success(this.onStatusReceived.bind(this))
        }, onStatusReceived: function (c) {
            var d = this;
            b(function () {
                !d.isRendered() && d.render();
                if (c.payload && "ANONYMOUS" !== c.payload.accessLevel && "OK" === c.resultCode) {
                    a.identify.init(!0);
                    b.getJSON(a.getServiceURL("personal_info")).success(function (c) {
                        if (!b.isEmptyObject(c.payload) && !b.isEmptyObject(c.payload.personalInfo)) {
                            a.Auth.personalInfo = c.payload.personalInfo;
                            if (!b.isEmptyObject(c.payload.personalInfo.fullName)) {
                                var d = c.payload.personalInfo.fullName;
                                a.Auth.Cfg.userFullName = d.firstName + " " + d.lastName;
                                b("#tcs-user-fullname").html(a.Auth.Cfg.userFullName)
                            }
                        }
                    });
                    setTimeout(d.showLoginIndication, 500)
                } else {
                    a.identify.init(!1);
                    d.hideLoginIndication()
                }
            })
        }, showLoginIndication: function () {
            b(".tcs-auth-authentication-status").each(function (a, c) {
                b(c).show().addClass("tcs-auth-status-authenticated")
            })
        }
    };
    c = new a.Auth.LoginIndicationManager;
    c.requestAuthStatus()
}(TCS, $);