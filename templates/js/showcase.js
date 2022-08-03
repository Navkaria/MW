$(document).ready(function() {
   $("#showcase").awShowcase({
       content_width: 645,
       content_height: 236,
       fit_to_parent: false,
       auto: true,
       interval: 4000,
       continuous: true,
       loading: true,
       tooltip_width: 200,
       tooltip_icon_width: 32,
       tooltip_icon_height: 32,
       tooltip_offsetx: 18,
       tooltip_offsety: 0,
       arrows: true,
       buttons: true,
       btn_numbers: false,
       keybord_keys: true,
       mousetrace: false,
       pauseonover: true,
       stoponclick: true,
       transition: 'hslide',
       transition_delay: 300,
       transition_speed: 500,
       show_caption: 'onload',
       thumbnails: false,
       thumbnails_position: 'outside-last',
       thumbnails_direction: 'horizontal',
       thumbnails_slidex: 0,
       dynamic_height: false,
       speed_change: false,
       viewline: false
   });
});
(function(jQuery) {
   jQuery.fn.awShowcase = function(options) {
       var defaults = {
           content_width: 700,
           content_height: 470,
           fit_to_parent: false,
           auto: false,
           interval: 3000,
           continuous: false,
           loading: true,
           tooltip_width: 200,
           tooltip_icon_width: 32,
           tooltip_icon_height: 32,
           tooltip_offsetx: 18,
           tooltip_offsety: 0,
           arrows: true,
           buttons: true,
           btn_numbers: false,
           keybord_keys: false,
           mousetrace: false,
           pauseonover: true,
           stoponclick: true,
           transition: 'hslide',
           transition_delay: 300,
           transition_speed: 500,
           show_caption: 'onload',
           thumbnails: false,
           thumbnails_position: 'outside-last',
           thumbnails_direction: 'vertical',
           thumbnails_slidex: 0,
           dynamic_height: false,
           speed_change: false,
           viewline: false,
           fullscreen_width_x: 15,
           custom_function: null
       };
       options = jQuery.extend(defaults, options);
       var current_id = 0;
       var previous_id = 0;
       var break_loop = false;
       var pause_loop = false;
       var myInterval = null;
       var showcase = jQuery(this);
       var showcase_width = options.content_width;
       var animating = false;
       var content_viewline_width = 10000;
       var animation_distance = 0;
       var old_animation_distance = 0;
       var remaining_width = 0;
       var content_container = jQuery(document.createElement('div')).css('overflow', 'hidden').css('position', 'relative').addClass('showcase-content-container').prependTo(showcase);
       if (options.fit_to_parent) {
           showcase_width = jQuery(showcase).width() + options.fullscreen_width_x
       }
       if (options.viewline) {
           options.thumbnails = false;
           options.dynamic_height = false;
           content_container.css('width', content_viewline_width);
           showcase.css('overflow', 'hidden');
           $('.showcase-arrow-previous').hide()
       }
       var contentArray = [];
       var thumbnailArray = [];
       var content_count = 0;
       showcase.children('.showcase-slide').each(function() {
           var object = jQuery(this);
           content_count++;
           if (options.thumbnails) {
               var thumb = object.find('.showcase-thumbnail');
               thumbnailArray.push(thumb);
               thumb.remove()
           }
           var object_width = object.find('.showcase-content').children().width();
           var object_height = object.find('.showcase-content').children().height();
           contentArray.push(object.html());
           object.remove();
           var new_object = getContent(content_count - 1);
           if (options.viewline || content_count === 1) {
               content_container.append(new_object)
           }
           if (options.viewline) {
               new_object.css('position', 'relative');
               new_object.css('float', 'left');
               new_object.css('width', object_width)
           }
           if (options.dynamic_height) {
               new_object.css('height', object_height);
               if (content_count === 1) {
                   content_container.css('height', object_height)
               }
           } else {
               new_object.css('height', options.content_height);
               if (content_count === 1) {
                   content_container.css('height', options.content_height)
               }
           }
           if (options.viewline || content_count === 1) {
               displayAnchors(new_object);
               displayCaption(new_object);
               if (options.show_caption === 'show') {
                   jQuery(new_object).find('.showcase-caption').show()
               }
           }
       });
       var thumb_wrapper;
       var thumbnailStretch = 0;
       var thumbnailsPerPage = 0;
       if (options.thumbnails) {
           thumb_container = jQuery('<div />');
           thumb_restriction = jQuery('<div />');
           thumb_wrapper = jQuery('<div />');
           for (i = thumbnailArray.length - 1; i >= 0; --i) {
               var thumbnail = jQuery(thumbnailArray[i]).css({
                   'overflow': 'hidden'
               });
               thumbnail.attr('id', 'showcase-thumbnail-' + i);
               thumbnail.addClass((i === 0) ? 'active' : '');
               thumbnail.click(function(a, b) {
                   return function() {
                       if (myInterval) {
                           pause_loop = true;
                           clearInterval(myInterval)
                       }
                       changeContent(a, b)
                   }
               }(i, ''));
               thumb_wrapper.prepend(thumbnail)
           }
           if (options.thumbnails_position === 'outside-first' || options.thumbnails_position === 'outside-last') {
               if (options.thumbnails_direction !== 'horizontal') {
                   content_container.css('float', 'left');
                   content_container.css('width', options.content_width);
                   thumb_container.css('float', 'left');
                   thumb_container.css('height', options.content_height)
               } else {
                   jQuery(thumb_wrapper).find('.showcase-thumbnail').css('float', 'left')
               }
               if (options.thumbnails_position === 'outside-last') {
                   showcase.append(thumb_container);
                   if (options.thumbnails_direction !== 'horizontal') {
                       showcase.append(jQuery('<div />').addClass('clear'))
                   }
               } else {
                   showcase.prepend(thumb_container);
                   if (options.thumbnails_direction !== 'horizontal') {
                       showcase.append(jQuery('<div />').addClass('clear'))
                   }
               }
           } else {
               thumb_container.css({
                   'position': 'absolute',
                   'z-index': 20
               });
               if (options.thumbnails_direction === 'horizontal') {
                   thumb_container.css({
                       'left': 0,
                       'right': 0
                   });
                   jQuery(thumb_wrapper).find('.showcase-thumbnail').css('float', 'left');
                   jQuery(thumb_wrapper).append(jQuery('<div />').addClass('clear'));
                   if (options.thumbnails_position === 'inside-first') {
                       thumb_container.css('top', 0)
                   } else {
                       thumb_container.css('bottom', 0)
                   }
               } else {
                   thumb_container.css({
                       'top': 0,
                       'bottom': 0
                   });
                   if (options.thumbnails_position === 'inside-first') {
                       thumb_container.css('left', 0)
                   } else {
                       thumb_container.css('right', 0)
                   }
               }
               content_container.prepend(thumb_container)
           }
           thumb_container.addClass('showcase-thumbnail-container');
           thumb_container.css('overflow', 'hidden');
           thumb_restriction.addClass('showcase-thumbnail-restriction');
           thumb_restriction.css({
               'overflow': 'hidden',
               'position': 'relative'
           });
           if (options.thumbnails_direction === 'horizontal') {
               thumb_restriction.css({
                   'float': 'left'
               })
           }
           thumb_wrapper.addClass('showcase-thumbnail-wrapper');
           if (options.thumbnails_direction === 'horizontal') {
               thumb_wrapper.addClass('showcase-thumbnail-wrapper-horizontal')
           } else {
               thumb_wrapper.addClass('showcase-thumbnail-wrapper-vertical')
           }
           thumb_wrapper.css('position', 'relative');
           thumb_restriction.append(thumb_wrapper);
           thumb_container.append(thumb_restriction);
           var buttonBackward = jQuery('<div class="showcase-thumbnail-button-backward" />');
           if (options.thumbnails_direction !== 'horizontal') {
               buttonBackward.html('<span class="showcase-thumbnail-vertical"><span>Up</span></span>')
           } else {
               buttonBackward.css({
                   'float': 'left'
               });
               buttonBackward.html('<span class="showcase-thumbnail-horizontal"><span>Left</span></span>')
           }
           buttonBackward.click(function() {
               slideThumbnailWrapper('backward', false, true)
           });
           thumb_container.prepend(buttonBackward);
           var buttonForward = jQuery('<div class="showcase-thumbnail-button-forward" />');
           if (options.thumbnails_direction !== 'horizontal') {
               buttonForward.html('<span class="showcase-thumbnail-vertical"><span>Down</span></span>')
           } else {
               buttonForward.css({
                   'float': 'left'
               });
               buttonForward.html('<span class="showcase-thumbnail-horizontal"><span>Right</span></span>')
           }
           buttonForward.click(function() {
               slideThumbnailWrapper('forward', false, true)
           });
           thumb_container.append(buttonForward);
           var thumbnailVisibleStretch = 0;
           if (options.thumbnails_direction !== 'horizontal') {
               thumbnailVisibleStretch = getElementHeight(thumb_wrapper, false);
               thumbnailVisibleStretch += (getElementHeight(buttonBackward)) + (getElementHeight(buttonForward));
               while (thumbnailVisibleStretch < options.content_height) {
                   thumbnailVisibleStretch += getElementHeight(jQuery(thumbnailArray[0]));
                   thumbnailsPerPage++
               }
           } else {
               thumbnailVisibleStretch = getElementWidth(thumb_wrapper, false);
               thumbnailVisibleStretch += (getElementWidth(buttonBackward)) + (getElementWidth(buttonForward));
               while (thumbnailVisibleStretch < showcase_width) {
                   thumbnailVisibleStretch += getElementWidth(jQuery(thumbnailArray[0]));
                   thumbnailsPerPage++
               }
           }
           if (thumbnailsPerPage + 1 > thumbnailArray.length) {
               if (options.thumbnails_direction !== 'horizontal') {
                   thumb_restriction.css('margin-top', getElementHeight(buttonBackward))
               } else {
                   thumb_restriction.css('margin-left', getElementWidth(buttonBackward))
               }
               buttonBackward.hide();
               buttonForward.hide()
           }
           if (options.thumbnails_direction !== 'horizontal') {
               var buttonsHeight = (getElementHeight(buttonBackward)) + (getElementHeight(buttonForward));
               thumb_restriction.css('height', options.content_height - buttonsHeight)
           } else {
               var buttonsWidth = (getElementWidth(buttonBackward)) + (getElementWidth(buttonForward));
               thumb_restriction.css('width', showcase_width - buttonsWidth)
           }
           if (options.thumbnails_direction === 'horizontal') {
               jQuery('.showcase-thumbnail').each(function() {
                   thumbnailStretch += getElementWidth(jQuery(this))
               });
               thumb_wrapper.css('width', thumbnailStretch)
           } else {
               jQuery('.showcase-thumbnail').each(function() {
                   thumbnailStretch += getElementHeight(jQuery(this))
               })
           }
       }
       if (options.thumbnails && options.thumbnails_position.indexOf("outside") !== -1 && options.thumbnails_direction !== 'horizontal' && !options.viewline) {
           showcase.css('width', showcase_width + getElementWidth(thumb_wrapper, true, false))
       } else if (!options.fit_to_parent) {
           showcase.css('width', showcase_width)
       }
       if (content_count > 1 && options.auto) {
           myInterval = window.setInterval(autoChange, options.interval)
       }
       if (options.auto && options.pauseonover) {
           showcase.mouseenter(function() {
               break_loop = true;
               clearInterval(myInterval)
           });
           showcase.mouseleave(function() {
               if (!pause_loop) {
                   break_loop = false;
                   myInterval = window.setInterval(autoChange, options.interval)
               }
           })
       }
       if (options.arrows && content_count > 1) {
           jQuery(document.createElement('div')).addClass('showcase-arrow-previous').prependTo(showcase).click(function() {
               if (myInterval) {
                   if (options.stoponclick) {
                       pause_loop = true
                   }
                   clearInterval(myInterval)
               }
               changeContent((current_id === 0) ? content_count - 1 : parseInt(current_id) - 1, 'previous')
           });
           jQuery(document.createElement('div')).addClass('showcase-arrow-next').prependTo(showcase).click(function() {
               if (myInterval) {
                   if (options.stoponclick) {
                       pause_loop = true
                   }
                   clearInterval(myInterval)
               }
               changeContent(current_id + 1, 'next')
           });
           if (options.viewline) {
               $('.showcase-arrow-previous').hide()
           }
       }
       if (options.buttons && content_count > 1) {
           jQuery(document.createElement('div')).css('clear', 'both').addClass('showcase-button-wrapper').appendTo(showcase);
           i = 0;
           while (i < content_count) {
               jQuery(document.createElement('span')).attr('id', 'showcase-navigation-button-' + i).addClass((i === 0) ? 'active' : '').html((options.btn_numbers) ? parseInt(i) + 1 : '&#9679;').click(function(a, b) {
                   return function() {
                       if (myInterval) {
                           if (options.stoponclick) {
                               pause_loop = true
                           }
                           clearInterval(myInterval)
                       }
                       changeContent(a, b)
                   }
               }(i, '')).appendTo(jQuery(showcase).find('.showcase-button-wrapper'));
               i++
           }
       }
       if (options.keybord_keys) {
           jQuery(document).keydown(function(e) {
               if (options.stoponclick) {
                   pause_loop = true
               }
               if (myInterval)
                   clearInterval(myInterval);
               if (e.keyCode === 37) {
                   changeContent((current_id === 0) ? content_count - 1 : parseInt(current_id) - 1, 'previous')
               }
               if (e.keyCode === 39) {
                   changeContent((current_id === content_count - 1) ? 0 : parseInt(current_id) + 1, 'next')
               }
           })
       }
       function getContent(id) {
           var new_content = jQuery(document.createElement('div')).attr('id', 'showcase-content-' + id).css('overflow', 'hidden').css('position', 'absolute').addClass('showcase-content').html(contentArray[id]);
           if (!options.viewline) {
               new_content.css('width', options.content_width)
           }
           if (options.fit_to_parent && !options.viewline) {
               new_content.css('left', (showcase_width / 2) - options.content_width / 2)
           }
           return new_content
       }
       function autoChange() {
           var nextID = parseInt(current_id) + 1;
           if (nextID === content_count && options.continuous) {
               nextID = 0
           } else if (nextID === content_count && !options.continuous) {
               break_loop = true;
               clearInterval(myInterval)
           }
           if (!break_loop) {
               changeContent(nextID, 'next')
           }
       }
       function changeContent(id, direction) {
           if (current_id !== id && !animating) {
               var obj;
               var obj2;
               var delay = 0;
               var i;
               var lrpos = (options.fit_to_parent) ? (showcase_width / 2) - (options.content_width / 2) : 0;
               if ((id > current_id && direction !== 'previous') || direction === 'next') {
                   if (options.viewline) {
                       if (current_id < content_count - 1) {
                           if (!options.speed_change) {
                               animating = true
                           }
                           updateContentViewlineWidth();
                           if (options.pauseonover) {
                               window.clearInterval(myInterval)
                           }
                           remaining_width = 0;
                           for (i = current_id + 1,
                           len = content_count; i < len; ++i) {
                               obj = addedContentArray[i];
                               remaining_width += obj.find('.showcase-content').children().width()
                           }
                           if (remaining_width > showcase_width) {
                               old_animation_distance = animation_distance;
                               animation_distance -= addedContentArray[current_id].find('.showcase-content').children().width()
                           } else if ($('.showcase-arrow-next').is(':visible')) {
                               old_animation_distance = animation_distance;
                               animation_distance = -(content_viewline_width - (remaining_width + (showcase_width - remaining_width)));
                               $('.showcase-arrow-next').fadeOut(300)
                           }
                           content_container.animate({
                               left: animation_distance + 'px'
                           }, options.transition_speed, function() {
                               animating = false
                           });
                           if ($('.showcase-arrow-next').is(':visible')) {
                               current_id++
                           }
                           $('.showcase-arrow-previous').fadeIn(300)
                       }
                   } else {
                       if (!options.speed_change) {
                           animating = true
                       }
                       obj = jQuery(showcase).find('#showcase-content-' + parseInt(current_id));
                       obj2 = getContent(id);
                       content_container.append(obj2);
                       if (options.dynamic_height) {
                           obj2.css('height', obj2.find('.showcase-content').children().height())
                       } else {
                           obj2.css('height', options.content_height)
                       }
                       if (obj.find('.showcase-content').children().height() > obj2.find('.showcase-content').children().height() && options.dynamic_height) {
                           content_container.stop(true, true).animate({
                               height: obj2.find('.showcase-content').children().height()
                           }, 200);
                           delay = 100
                       }
                       if (options.transition === 'hslide') {
                           jQuery(obj).delay(delay).animate({
                               left: -(options.content_width)
                           }, options.transition_speed + options.transition_delay, function() {
                               obj.remove()
                           })
                       } else if (options.transition === 'vslide') {
                           jQuery(obj).delay(delay).animate({
                               top: -(options.content_height)
                           }, options.transition_speed + options.transition_delay, function() {
                               obj.remove()
                           })
                       } else {
                           jQuery(obj).delay(delay).fadeOut(options.transition_speed, function() {
                               obj.remove()
                           })
                       }
                       displayAnchors(obj, true);
                       displayCaption(obj, true);
                       if (options.transition === 'hslide') {
                           obj2.css('left', showcase_width);
                           jQuery(obj2).delay(delay).animate({
                               left: lrpos
                           }, options.transition_speed, function() {
                               displayAnchors(obj2);
                               displayCaption(obj2);
                               afterAnimation(obj2)
                           })
                       } else if (options.transition === 'vslide') {
                           obj2.css('top', showcase.height());
                           jQuery(obj2).delay(delay).animate({
                               top: '0px'
                           }, options.transition_speed, function() {
                               displayAnchors(obj2);
                               displayCaption(obj2);
                               afterAnimation(obj2)
                           })
                       } else {
                           obj2.css('left', lrpos);
                           obj2.css('display', 'none');
                           jQuery(obj2).delay(delay).fadeIn(options.transition_speed, function() {
                               displayAnchors(obj2);
                               displayCaption(obj2);
                               afterAnimation(obj2)
                           })
                       }
                   }
               } else if (id < current_id || direction === 'previous') {
                   if (options.viewline) {
                       if (current_id !== 0) {
                           if (!options.speed_change) {
                               animating = true
                           }
                           updateContentViewlineWidth();
                           if (options.pauseonover) {
                               window.clearInterval(myInterval)
                           }
                           content_container.animate({
                               left: old_animation_distance + 'px'
                           }, options.transition_speed, function() {
                               animating = false
                           });
                           animation_distance = old_animation_distance;
                           current_id--;
                           if (current_id === 0) {
                               $('.showcase-arrow-previous').fadeOut(300)
                           }
                           old_id = current_id - 1;
                           sub_width = jQuery(addedContentArray[old_id]).width();
                           old_animation_distance = old_animation_distance + sub_width
                       }
                       $('.showcase-arrow-next').fadeIn(300)
                   } else {
                       if (!options.speed_change) {
                           animating = true
                       }
                       obj = jQuery(showcase).find('#showcase-content-' + parseInt(current_id));
                       obj2 = getContent(id);
                       content_container.append(obj2);
                       if (options.dynamic_height) {
                           obj2.css('height', obj2.find('.showcase-content').children().height())
                       } else {
                           obj2.css('height', options.content_height)
                       }
                       if (obj.find('.showcase-content').children().height() > obj2.find('.showcase-content').children().height() && options.dynamic_height) {
                           content_container.stop(true, true).animate({
                               height: obj2.find('.showcase-content').children().height()
                           }, 200);
                           delay = 100
                       }
                       if (options.transition === 'hslide') {
                           jQuery(obj).delay(delay).animate({
                               left: (showcase_width) + 'px'
                           }, options.transition_speed + options.transition_delay, function() {
                               displayAnchors(obj, true);
                               displayCaption(obj, true);
                               obj.remove()
                           })
                       } else if (options.transition === 'vslide') {
                           jQuery(obj).delay(delay).animate({
                               top: (options.content_height) + 'px'
                           }, options.transition_speed + options.transition_delay, function() {
                               displayAnchors(obj, true);
                               displayCaption(obj, true);
                               obj.remove()
                           })
                       } else {
                           jQuery(obj).delay(delay).fadeOut(options.transition_speed, function() {
                               displayAnchors(obj, true);
                               displayCaption(obj, true);
                               obj.remove()
                           })
                       }
                       if (options.transition === 'hslide') {
                           obj2.css('left', '-' + options.content_width + 'px');
                           jQuery(obj2).delay(delay).animate({
                               left: lrpos
                           }, options.transition_speed, function() {
                               displayAnchors(obj2);
                               displayCaption(obj2);
                               afterAnimation(obj2)
                           })
                       } else if (options.transition === 'vslide') {
                           obj2.css('top', '-' + showcase.height() + 'px');
                           jQuery(obj2).delay(delay).animate({
                               top: '0px'
                           }, options.transition_speed, function() {
                               displayAnchors(obj2);
                               displayCaption(obj2);
                               afterAnimation(obj2)
                           })
                       } else {
                           obj2.css('left', lrpos);
                           obj2.css('display', 'none');
                           jQuery(obj2).delay(delay).fadeIn(options.transition_speed, function() {
                               displayAnchors(obj2);
                               displayCaption(obj2);
                               afterAnimation(obj2)
                           })
                       }
                       content_container.append(obj2)
                   }
               }
               if (!options.viewline) {
                   previous_id = current_id;
                   current_id = id;
                   if (options.thumbnails) {
                       if ((current_id > previous_id && direction !== 'previous') || direction === 'next') {
                           slideThumbnailWrapper('forward', true)
                       } else if (current_id < previous_id || direction === 'previous') {
                           slideThumbnailWrapper('backward', true)
                       }
                   }
                   if (options.arrows) {
                       jQuery(showcase).find('.showcase-arrow-previous').unbind('click').click(function() {
                           if (myInterval) {
                               if (options.stoponclick) {
                                   pause_loop = true
                               }
                               clearInterval(myInterval)
                           }
                           changeContent((current_id === 0) ? content_count - 1 : parseInt(current_id) - 1, 'previous')
                       });
                       jQuery(showcase).find('.showcase-arrow-next').unbind('click').click(function() {
                           if (myInterval) {
                               if (options.stoponclick) {
                                   pause_loop = true
                               }
                               clearInterval(myInterval)
                           }
                           changeContent((current_id === content_count - 1) ? 0 : parseInt(current_id) + 1, 'next')
                       })
                   }
                   if (options.thumbnails) {
                       i = 0;
                       showcase.find('.showcase-thumbnail').each(function() {
                           var object = jQuery(this);
                           object.removeClass('active');
                           if (i === current_id) {
                               object.addClass('active')
                           }
                           i++
                       })
                   }
                   if (options.show_caption === 'show') {
                       jQuery(obj2).find('.showcase-caption').show()
                   }
               }
               if (options.buttons) {
                   i = 0;
                   showcase.find('.showcase-button-wrapper span').each(function() {
                       var object = jQuery(this);
                       object.removeClass('active');
                       if (i === current_id) {
                           object.addClass('active')
                       }
                       i++
                   })
               }
               if (typeof options.custom_function == 'function') {
                   options.custom_function()
               }
           }
       }
       function afterAnimation(obj) {
           if (options.dynamic_height) {
               content_container.stop(true, true).animate({
                   height: obj.find('.showcase-content').children().height()
               }, 200)
           }
           animating = false
       }
       var thumbnailSlidePosition = 0;
       function slideThumbnailWrapper(direction, check, backwardforward) {
           var doTheSlide = true;
           var thumbnailHeightOrWidth = getElementHeight(jQuery(thumb_wrapper).find('.showcase-thumbnail'));
           if (options.thumbnails_direction === 'horizontal') {
               thumbnailHeightOrWidth = getElementWidth(jQuery(thumb_wrapper).find('.showcase-thumbnail'))
           }
           var multiplySlidePosition = 1;
           if (options.thumbnails_slidex === 0) {
               options.thumbnails_slidex = thumbnailsPerPage
           }
           if (check) {
               var thumbnailSlidePositionCopy = thumbnailSlidePosition;
               var thumbnailsScrolled = 0;
               while (thumbnailSlidePositionCopy < 0) {
                   if (options.thumbnails_direction === 'horizontal') {
                       thumbnailSlidePositionCopy += getElementWidth(jQuery(thumbnailArray[0]))
                   } else {
                       thumbnailSlidePositionCopy += getElementHeight(jQuery(thumbnailArray[0]))
                   }
                   thumbnailsScrolled++
               }
               var firstVisible = thumbnailsScrolled;
               var lastVisible = thumbnailsPerPage + thumbnailsScrolled - 1;
               if (current_id >= firstVisible && current_id <= lastVisible) {
                   doTheSlide = false
               }
               var distance;
               if ((current_id - lastVisible) > options.thumbnails_slidex) {
                   distance = current_id - lastVisible;
                   while (distance > options.thumbnails_slidex) {
                       distance -= options.thumbnails_slidex;
                       multiplySlidePosition++
                   }
               } else if ((firstVisible - current_id) > options.thumbnails_slidex) {
                   distance = firstVisible - current_id;
                   while (distance > options.thumbnails_slidex) {
                       distance -= options.thumbnails_slidex;
                       multiplySlidePosition++
                   }
               } else {
                   multiplySlidePosition = 1
               }
           }
           if (direction === 'forward' && doTheSlide) {
               if (options.thumbnails_direction === 'vertical' && options.content_height < (thumbnailStretch + thumbnailSlidePosition)) {
                   thumbnailSlidePosition -= thumbnailHeightOrWidth * (options.thumbnails_slidex * multiplySlidePosition)
               } else if (options.thumbnails_direction === 'horizontal' && options.content_width < (thumbnailStretch + thumbnailSlidePosition)) {
                   thumbnailSlidePosition -= thumbnailHeightOrWidth * (options.thumbnails_slidex * multiplySlidePosition)
               } else if (current_id === 0) {
                   if (!backwardforward) {
                       thumbnailSlidePosition = 0
                   }
               }
               if (options.thumbnails_direction === 'horizontal') {
                   thumb_wrapper.animate({
                       left: thumbnailSlidePosition
                   }, 300)
               } else {
                   thumb_wrapper.animate({
                       top: thumbnailSlidePosition
                   }, 300)
               }
           } else if (doTheSlide) {
               if (thumbnailSlidePosition < 0) {
                   thumbnailSlidePosition += thumbnailHeightOrWidth * (options.thumbnails_slidex * multiplySlidePosition)
               } else if (current_id === content_count - 1) {
                   if (!backwardforward) {
                       thumbnailSlidePosition -= thumbnailHeightOrWidth * (options.thumbnails_slidex * multiplySlidePosition)
                   }
               } else {
                   thumbnailSlidePosition = 0
               }
               if (options.thumbnails_direction === 'horizontal') {
                   thumb_wrapper.animate({
                       left: thumbnailSlidePosition
                   }, 300)
               } else {
                   thumb_wrapper.animate({
                       top: thumbnailSlidePosition
                   }, 300)
               }
           }
       }
       function displayCaption(container, fadeOut) {
           var caption = container.find('.showcase-caption');
           if (!fadeOut) {
               if (options.show_caption === 'onload') {
                   caption.fadeIn(300)
               } else if (options.show_caption === 'onhover') {
                   jQuery(container).mouseenter(function() {
                       caption.fadeIn(300)
                   });
                   jQuery(container).mouseleave(function() {
                       caption.stop(true, true).fadeOut(100)
                   })
               }
           } else {
               caption.stop(true, true).fadeOut(300)
           }
       }
       function displayAnchors(container, fadeOut) {
           container.find('.showcase-tooltips a').each(function() {
               if (!fadeOut) {
                   var coords = jQuery(this).attr('coords');
                   coords = coords.split(',');
                   jQuery(this).addClass('showcase-plus-anchor');
                   jQuery(this).css('position', 'absolute');
                   jQuery(this).css('display', 'none');
                   jQuery(this).css('width', options.tooltip_icon_width);
                   jQuery(this).css('height', options.tooltip_icon_height);
                   jQuery(this).css('left', parseInt(coords[0]) - (parseInt(options.tooltip_icon_width) / 2));
                   jQuery(this).css('top', parseInt(coords[1]) - (parseInt(options.tooltip_icon_height) / 2));
                   var content = jQuery(this).html();
                   jQuery(this).mouseenter(function() {
                       animateTooltip(container, coords[0], coords[1], content)
                   });
                   jQuery(this).mouseleave(function() {
                       animateTooltip(container, coords[0], coords[1], content)
                   });
                   jQuery(this).html('');
                   jQuery(this).fadeIn(300)
               } else {
                   jQuery(this).stop(true, true).fadeOut(300)
               }
           })
       }
       var tooltip = null;
       function animateTooltip(container, x, y, content) {
           if (tooltip === null) {
               tooltip = jQuery(document.createElement('div')).addClass('showcase-tooltip').css('display', 'none').css('position', 'absolute').css('max-width', options.tooltip_width).html(content);
               container.append(tooltip);
               var tooltip_paddingx = parseInt(tooltip.css('padding-right')) * 2 + parseInt(tooltip.css('border-right-width')) * 2;
               var tooltip_paddingy = parseInt(tooltip.css('padding-bottom')) * 2 + parseInt(tooltip.css('border-bottom-width')) * 2;
               lastx = parseInt(x) + tooltip.width() + tooltip_paddingx;
               lasty = parseInt(y) + tooltip.height() + tooltip_paddingy;
               if (lastx < options.content_width) {
                   tooltip.css('left', parseInt(x) + parseInt(options.tooltip_offsetx))
               } else {
                   tooltip.css('left', (parseInt(x) - parseInt(options.tooltip_offsetx)) - (parseInt(tooltip.width()) + parseInt(options.tooltip_offsetx)))
               }
               if (lasty < options.content_height) {
                   tooltip.css('top', parseInt(y) + parseInt(options.tooltip_offsety))
               } else {
                   tooltip.css('top', (parseInt(y) - parseInt(options.tooltip_offsety)) - (parseInt(tooltip.height()) + parseInt(tooltip_paddingy)))
               }
               tooltip.fadeIn(400)
           } else {
               tooltip.fadeOut(400);
               tooltip.remove();
               tooltip = null
           }
       }
       function getElementHeight(el, incHeight, incMargin, incPadding, incBorders) {
           incHeight = typeof (incHeight) !== 'undefined' ? incHeight : true;
           incMargin = typeof (incMargin) !== 'undefined' ? incMargin : true;
           incPadding = typeof (incPadding) !== 'undefined' ? incPadding : true;
           incBorders = typeof (incBorders) !== 'undefined' ? incBorders : true;
           var elHeight = (incHeight) ? jQuery((el)).height() : 0;
           var elMargin = (incMargin) ? parseFloat(jQuery((el)).css('margin-top')) + parseFloat(jQuery(el).css('margin-bottom')) : 0;
           var elPadding = (incPadding) ? parseFloat(jQuery((el)).css('padding-top')) + parseFloat(jQuery(el).css('padding-bottom')) : 0;
           var elBorder = (incBorders) ? parseFloat(jQuery((el)).css('border-top-width')) + parseFloat(jQuery((el)).css('border-bottom-width')) : 0;
           elHeight += elMargin + elPadding + elBorder;
           return elHeight
       }
       function getElementWidth(el, incWidth, incMargin, incPadding, incBorders) {
           incWidth = typeof (incWidth) !== 'undefined' ? incWidth : true;
           incMargin = typeof (incMargin) !== 'undefined' ? incMargin : true;
           incPadding = typeof (incPadding) !== 'undefined' ? incPadding : true;
           incBorders = typeof (incBorders) !== 'undefined' ? incBorders : true;
           var elWidth = (incWidth) ? jQuery((el)).width() : 0;
           var elMargin = (incMargin) ? parseFloat(jQuery((el)).css('margin-left')) + parseFloat(jQuery(el).css('margin-right')) : 0;
           var elPadding = (incPadding) ? parseFloat(jQuery((el)).css('padding-left')) + parseFloat(jQuery((el)).css('padding-right')) : 0;
           var elBorder = (incBorders) ? parseFloat(jQuery((el)).css('border-left-width')) + parseFloat(jQuery((el)).css('border-right-width')) : 0;
           elWidth += elMargin + elPadding + elBorder;
           return elWidth
       }
       if (options.mousetrace) {
           var mousetrace = jQuery(document.createElement('div')).css('position', 'absolute').css('top', '0').css('background-color', '#fff').css('color', '#000').css('padding', '3px 5px').css('x-index', '30').html('X: 0 Y: 0');
           showcase.append(mousetrace);
           var offset = showcase.offset();
           content_container.mousemove(function(e) {
               mousetrace.html('X: ' + (e.pageX - offset.left) + ' Y: ' + (e.pageY - offset.top))
           })
       }
       $('#awOnePageButton').click(function showInOnePage() {
           if ($('.view-page').is(':visible')) {
               var temp_container = jQuery(document.createElement('div'));
               temp_container.addClass('showcase-onepage');
               showcase.before(temp_container);
               if (myInterval) {
                   pause_loop = true;
                   clearInterval(myInterval)
               }
               $(this).find('.view-page').hide();
               $(this).find('.view-slide').show();
               showcase.hide();
               $.each(contentArray, function(index, value) {
                   obj = getContent(index);
                   obj.css('position', 'relative');
                   temp_container.append(obj);
                   displayAnchors(obj);
                   displayCaption(obj);
                   if (options.dynamic_height) {
                       obj.css('height', obj.find('.showcase-content').children().height())
                   } else {
                       obj.css('height', options.content_height)
                   }
               });
               var clear = jQuery(document.createElement('div'));
               clear.addClass('clear');
               temp_container.append(clear)
           } else {
               $('.showcase-onepage').remove();
               $(this).find('.view-page').show();
               $(this).find('.view-slide').hide();
               showcase.show()
           }
           return false
       });
       var addedContentArray = [];
       function updateContentViewlineWidth() {
           content_viewline_width = 0;
           content_container.children('div').each(function() {
               content_viewline_width += $(this).find('.showcase-content').children().width();
               addedContentArray.push($(this))
           })
       }
       showcase.removeClass('showcase-load')
   }
}
)(jQuery);
