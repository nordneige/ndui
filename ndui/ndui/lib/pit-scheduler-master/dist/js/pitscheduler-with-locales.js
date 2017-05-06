/*
 * jQuery pit-Scheduler Plugin v2.0
 * https://github.com/chuck-durst/pit-scheduler
 *
 * Copyright 2016 Charles Durst
 * Released under the MIT license
 */

var i18n = {
    allowed: [
        'en',
        'fr'
    ],
    fr: {
        day: 'Jour',
        days: 'Jours',
        months: 'Mois',
        list: 'Liste',
        tasks: 'Tâches',
        task: 'Tâche',
        hour: 'Heure',
        hours: 'Heures',
        users: 'Utilisateurs',
        unlisted: 'Non répertorié',
        settings: 'Options',
        hideEmptyLine: 'Masquer les lignes sans tâche',
        description: 'Description',
        assignedUsers: 'utilisateurs assignés',
        assignedUser: 'utilisateur assigné',
        from: 'Du',
        to: 'au',
        notSpecified: 'Non spécifiée',
        disableLabelsMovement: 'Désactiver le mouvement des labels',
        today: 'Aujourd\'hui',
        thisWeek: 'Cette semaine',
        thisMonth: 'Ce mois-ci',
        thisYear: 'Cette année',
        personalized: 'Personnalisé',
        selectAll: 'Tout sélectionner',
        always: 'toujours',
        total: 'Total',
        usersWhose: 'utilisateur(s) dont',
        cycleWhose: 'cycle(s) dont',
        inSelectedPeriod: 'dans la période sélectionnée',
        all: 'Tout',
        search: 'Recherche',
        addNewTask: 'Créer une tâche',
        addNewUser: 'Créer un utilisateur',
        editUser: 'Modifier un utilisateur',
        name: 'Nom',
        required: 'Obligatoire',
        color: 'Couleur',
        cancel: 'Annuler',
        create: 'Créer',
        createAndAssign: 'Créer et assigner',
        nameAlreadyTaken: 'Ce nom est déjà utilisé',
        idAlreadyTaken: 'Cet ID est déjà utilisé',
        remove: 'Supprimer',
        assign: 'Assigner',
        edit: 'Modifier',
        confirm: 'Confirmer',
        assignTaskTitle: 'Assigner des utilisateurs',
        assignUserTitle: 'Assigner à une tâche',
        allInputRequired: 'Tous les champs sont obligatoires',
        requiredField: 'Ce champ est obligatoire',
        userIsAlreadyAssigned: 'est déjà assigné à cette tâche pour cette période',
        selectUsersToAssign: 'Sélectionnez les utilisateurs à assigner',
        selectTasksToAssign: 'Sélectionnez les tâches à assigner',
        editTask: 'Modifier la tâche',
        group: 'Groupe',
        selectGroup: 'Sélectionnez un groupe existant',
        createNewGroup: 'Créez un nouveau groupe',
        or: 'ou',
        seeAll: 'Tout voir',
        allocations: 'assignations',
        allocation: 'assignation',
        tag: 'Etiquette',
        tags: 'Etiquettes',
        groups: 'Groupes',
        tagColor: 'Couleur de l\'étiquette',
        filters: 'Filtres',
        deleteAll: 'Tout supprimer',
        addFilter: 'Créer un filtre',
        contains: 'Contient',
        notContains: 'Ne contient pas',
        active: 'Actif',
        inactive: 'Inactif',
        notif: {
            taskCreated: 'La tâche a été créée avec succès',
            userCreated: 'L\'utilisateur a été créé avec succès',
            taskRemoved: 'La tâche a correctement été supprimée',
            userRemoved: 'L\'utilisateur a correctement été supprimé',
            usersAssigned: 'utilisateurs ont été assignés à la tâche',
            userAssigned: 'utilisateur a été assigné à la tâche',
            userUnassigned: 'a correctement été désassigné',
            noUser: '<b>Attention : </b>Aucun utilisateur n\'a été défini',
            noTask: '<b>Attention : </b>Aucune tâche n\'a été définie',
            taskNotExist: 'est assigné à une tâche qui n\'existe pas',
            taskInformationsUpdated: 'La tâche a été modifiée',
            userHasNoTask: 'n\'est assigned à aucune tâche',
            userEdited: 'L\'utilisateur a correctement été modifié',
            userAssignedTo: 'a été assigné à',
            userTaskModified: 'La tâche prendra maintenant fin le',
            filterAdded: 'Le filtre a correctement été ajouté',
            filterEdited: 'Le filtre a correctement été modifié',
            filterRemoved: 'Le filtre a correctement été supprimé',
            allFiltersRemoved: 'Tous les filtres ont été supprimés'
        }

    },
    en: {
        day: 'Day',
        days: 'Days',
        months: 'Months',
        list: 'List',
        tasks: 'Tasks',
        task: 'Task',
        hour: 'Hour',
        hours: 'Hours',
        users: 'Users',
        unlisted: 'Unlisted',
        settings: 'Settings',
        hideEmptyLine: 'Hide lines with no task',
        description: 'Description',
        assignedUsers: 'assigned users',
        assignedUser: 'assigned user',
        from: 'From',
        to: 'to',
        notSpecified: 'Not specified',
        disableLabelsMovement: 'Disable labels mouvement',
        today: 'Today',
        thisWeek: 'This week',
        thisMonth: 'This month',
        thisYear: 'This year',
        personalized: 'Personalized',
        selectAll: 'Select all',
        always: 'always',
        total: 'Total',
        usersWhose: 'user(s) with',
        cycleWhose: 'cycle(s) with',
        inSelectedPeriod: 'in the selected period',
        all: 'All',
        search: 'Search',
        addNewTask: 'Create a new task',
        addNewUser: 'Create a new user',
        editUser: 'Edit the user',
        name: 'Name',
        required: 'Required',
        color: 'Color',
        cancel: 'Cancel',
        create: 'Create',
        createAndAssign: 'Create and assign',
        idAlreadyTaken: 'This ID is already taken',
        remove: 'Remove',
        assign: 'Assign',
        edit: 'Edit',
        confirm: 'Confirm',
        assignTaskTitle: 'Assign users',
        assignUserTitle: 'Assign to a task',
        allInputRequired: 'All fields are required',
        requiredField: 'That field is required',
        userIsAlreadyAssigned: 'is already assigned to this task for this period',
        selectUsersToAssign: 'Select the users to assign',
        selectTasksToAssign: 'Select the tasks to assign',
        editTask: 'Edit a task',
        group: 'Group',
        groups: 'Groups',
        selectGroup: 'Select an existing group',
        createNewGroup: 'Create a new group',
        or: 'or',
        seeAll: 'See all',
        allocations: 'allocations',
        allocation: 'allocation',
        tag: 'Tag',
        tags: 'Tags',
        tagColor: 'Tag color',
        filters: 'Filters',
        deleteAll: 'Delete all',
        addFilter: 'Create filter',
        contains: 'Contains',
        notContains: 'Does not contains',
        added: 'Added',
        active: 'Active',
        inactive: 'Inactive',
        notif: {
            taskCreated: 'The task has been successfully created',
            userCreated: 'The user has been successfully created',
            taskRemoved: 'The task has been successfully removed',
            userRemoved: 'The user has been successfully removed',
            usersAssigned: 'users has been assigned to the task',
            userAssigned: 'user has been assigned to the task',
            userUnassigned: 'has correctly been unassigned',
            noUser: '<b>Warning : </b>No user has been set',
            noTask: '<b>Warning : </b>No task has been set',
            taskNotExist: 'is assigned to an inexistent task',
            taskInformationsUpdated: 'The task has been edited',
            userHasNoTask: 'is not assigned to any task',
            userEdited: 'The user has been successfully edited',
            userAssignedTo: 'has been assigned to',
            userTaskModified: 'The task will now end the',
            filterAdded: 'The filter has been added',
            filterEdited: 'The filter has been edited',
            filterRemoved: 'The filter has been removed',
            allFiltersRemoved: 'All fiters has been removed'
        }
    }
};

(function ($) {
    'use strict';
    
    $.fn.pitScheduler = function (options) {

        var $scheduler = $(this);
        
        /********* Settings initialization *********/

        options = options || {};

        var settings = $.extend({
            date: {
                current: moment(),
                selected: (options.defaultDate && moment(options.defaultDate).isValid() ? moment(options.defaultDate) : moment())
            },
            locale: (options.locale && i18n.allowed.indexOf(options.locale) != -1 ? options.locale : i18n.allowed[0]), //if no locale is defined, it takes the first allowed one
            currentDisplay: (options.defaultDisplay && 'days;months;list'.indexOf(options.defaultDisplay) != -1 ? options.defaultDisplay : 'months'),
            projectState : 'production', //debug will log all function calls, development will only log the important ones
            tasks: options.tasks || [],
            users: options.users || [],
            defaultColor: options.defaultColor ||'#00BCD4',
            notificationDuration: options.notificationDuration || 4000,
            hideEmptyLines: options.hideEmptyLines || true,
            undo: [],
            resize: {},
            filters: []
        }, options);

        moment.locale(settings.locale);
        settings.i18n = (i18n.allowed.indexOf(settings.locale) == -1 ? i18n.en : i18n[settings.locale]);

        /* Debug tool */
        var log =  {
            log : function (data) {
                if (settings.projectState == 'debug') {
                    console.log(data);
                }
            },
            warn: function (data) {
                if (settings.projectState == 'development') {
                    console.warn(data);
                }
            },
            info: function (data) {
                if (settings.projectState == 'development') {
                    console.info(data);
                }
            }
        };

        /********* Main functions *********/

        /**
         * Update display view
         * @param {String} viewMode: can be 'days', 'months' or 'list'
         */
        var updateDisplay = function (viewMode) {
            log.info('CALL FUNCTION: updateDisplay: viewMode:' + viewMode);

            var scrollTop = $('.pts-scheduler-container').scrollTop();
            updateDisplayReset();
            switch (viewMode) {
                case 'days':
                    setButtonViewFocus('day');
                    settings.currentDisplay = 'days';
                    initMainContent();
                    updateHeaderDates();
                    $('.pts-line-title-container div').scrollTop(scrollTop);
                    break;
                case 'months':
                    setButtonViewFocus('month');
                    settings.currentDisplay = 'months';
                    initMainContent();
                    updateHeaderDates();
                    $('.pts-line-title-container div').scrollTop(scrollTop);
                    break;
                case 'list':
                    setButtonViewFocus('list');
                    settings.currentDisplay = 'list';
                    $('.pts-btn-next').attr('disabled', 'disabled');
                    $('.pts-btn-previous').attr('disabled', 'disabled');
                    $('.pts-header-date-display').css('display', 'none');
                    $('.pts-column-title-container').css('overflow', 'visible');
                    $('#header-datetimepicker').data("DateTimePicker").disable();
                    generateListBaseView();
                    switchListRange('today');
                    break;
            }
        };

        /**
         * Reset elements content that have been modified
         */
        var updateDisplayReset = function () {
            log.info('CALL FUNCTION: updateDisplayReset');
            closeToolbox();
            $('.pts-main-content').empty();
            $('.pts-column-title-container > div').empty();
            $('.pts-line-title-container').empty();
            $('.pts-line-title-container').append($('<div></div>'));
            $('.pts-corner-mask').empty();
            $('.pts-btn-next').removeAttr('disabled');
            $('.pts-btn-previous').removeAttr('disabled');
            $('.pts-header-date-display').css('display', 'block');
            $('.pts-column-title-container').css('overflow', 'hidden');
        };

        /**
         * Function used to update the header datetimepicker
         */
        var updateHeaderDates = function () {
            log.log('CALL FUNCTION: updateHeaderDates');

            $('#header-datetimepicker').data("DateTimePicker").enable();
            $('.pts-header-date-display').empty();
            switch (settings.currentDisplay) {
                case 'days':
                    $('.pts-header-date-display').append(moment(settings.date.selected).locale(settings.locale).format('LL'));
                    break;
                case 'months':
                    $('.pts-header-date-display').append(moment(settings.date.selected).locale(settings.locale).format('MMMM YYYY'));
                    break;
                case 'list':
                    $('.pts-header-date-display').append(moment(settings.date.selected).locale(settings.locale).format('LL'));
                    break;
            }
        };

        /**
         * Launch all the main generations
         */
        var initMainContent = function () {
            log.info('CALL FUNCTION: initMainContent');
            generateBaseView();
            generateTableLines();
            initGroup();
            generateGroupMainContent();
            generateUsersList();
            updateDatePicker();
        };

        /**
         * Set the focus on the right view mode button
         * @param {String} viewMode: can be 'days', 'months' or 'list'
         */
        var setButtonViewFocus = function (viewMode) {
            $('.pts-header-right-container  button').removeClass('pts-active');
            $('.pts-header-right-container  .pts-btn-' + viewMode + '-view').addClass('pts-active');
        };

        /**
         * Init function that saves users index into associated tasks
         */
        var getUsersTasksInTasks = function () {
            log.info('CALL FUNCTION: getUsersTasksInTasks');

            if (!settings.tasks || settings.tasks.length == 0) return generateNotification('danger', settings.i18n.notif.noTask);
            settings.tasks.forEach(function (task) {
                task = generateTaskInTask(task);
            });
        };

        /**
         * Add an index list of the assigned users of the task
         * @param {Object} task
         * @returns {Object} task
         */
        var generateTaskInTask = function (task) {
            log.log('CALL FUNCTION: generateTaskInTask: task: ' + task.name);

            task.users = {};
            if (! settings.users) return generateNotification('danger', settings.i18n.notif.noUser );
            if (!task.color) task.color = (settings.defaultColor ? settings.defaultColor : '#00bdd6');
            settings.users.forEach(function (user, userIndex) {
                user.index = userIndex;
                if (user.tasks) {
                    user.tasks.forEach(function (userTask, taskIndex) {
                        if (userTask.id === task.id) {
                            if (!task.users[userIndex]) {
                                task.users[userIndex] = [];
                            }
                            task.users[userIndex].push(taskIndex);
                        }
                    });
                }
            });
            return task;
        };

        /**
         * Generates the groups panels
         */
        var initGroup = function () {
            log.info('CALL FUNCTION: initGroup');

            if ($('.pts-line-group-container').length || !settings.users) return;
            settings.defaultGroupName = (settings.defaultGroupName ? settings.defaultGroupName : settings.i18n.unlisted);
            settings.groups = [settings.defaultGroupName];
            settings.users.forEach(function (user, i) {
                if (user.group === undefined || user.group === '') {
                    user.group = settings.defaultGroupName;
                }
                else if (settings.groups.indexOf(user.group) == -1) {
                    settings.groups.push(user.group);
                }
            });
            settings.groups.unlisted = 0; //stores the id of the unlisted group
            settings.groups.added = [];
            settings.groups.forEach(function (e, i) {
                var usersInGroup =  getUsersInGroup(e);
                if (usersInGroup.length > 0) {
                    var mustBeShowed = false;
                    usersInGroup.forEach(function (userIndex) {
                        if (settings.users[userIndex] && settings.users[userIndex].isShowed == true) {
                            mustBeShowed = true;
                        }
                    });
                    if (mustBeShowed) {
                        generateGroupTab(e, i);
                    }
                }
            });
        };

        /**
         * Returns the real length of an array
         * @param {Object | Array} arr
         * @returns {Number} The real object length
         */
        var getLength = function (arr) {
            return Object.keys(arr).length;
        };

        /**
         * Init all the users
         */
        var initUsers = function () {
            log.info('CALL FUNCTION: initUsers');

            if (!settings.users) return;
            settings.users.forEach(function (user, i) {
                initUser(user, i);
            });
        };

        /**
         * Used to clone an array and all the data it contains
         * @param {Array | Object} origin
         * @returns {Array | Object} cloned
         */
        var clone = function (origin) {
            var cloned = (origin instanceof Array) ? [] : {};
            for (var i in origin) {
                if (i == 'clone') continue;
                if (origin[i] && typeof origin[i] == "object") {
                    cloned[i] = clone(origin[i]);
                } else {
                    cloned[i] = origin[i]
                }
            }
            return cloned;
        };

        /**
         * Returns a temporary object that contains the data required to make an undo
         * @returns {Object} contains the saved data
         */
        var getUndo = function () {
            if (settings.disableUndo == true) return null;
            return {
                tasks: clone(settings.tasks),
                users: clone(settings.users),
                groups: clone(settings.groups)

            };
        };

        /**
         * Add some useful data to an user
         * @param {Object} user
         * @param {Number} index of the user
         */
        var initUser = function (user, index) {
            user.isShowed = userLineIsShowed(user);
            user.lineHeight = getUserLineHeight(user);
            user.index = index;
        };

        /**
         * Update the content of the datepicker
         */
        var updateDatePicker = function () {
            log.log('CALL FUNCTION: updateDatePicker');

            $('#header-datetimepicker').datetimepicker()
                .data('DateTimePicker').locale(settings.locale)
                .defaultDate(settings.date.selected)
                .date(settings.date.selected)
                .viewDate(settings.date.selected)
                .enabledHours(false)
                .format((settings.currentDisplay === 'months' ? 'MM/YYYY' : 'L'))
                .viewMode((settings.currentDisplay === 'months' ? 'months' : 'days'));

        };

        /**
         * Go to the next month/day
         */
        var goForward = function () {
            log.info('CALL FUNCTION: goForward');

            closeToolbox();
            if (settings.currentDisplay == 'months') {
                settings.date.selected = moment(settings.date.selected).add(1, 'months');
            } else {
                settings.date.selected = moment(settings.date.selected).add(1, 'day');
            }
            generateTableLines();
            generateGroupMainContent();
            generateUsersList();
            updateHeaderDates();
            updateDatePicker();
        };

        /**
         * Go to the previous month/day
         */
        var goBackward = function () {
            log.info('CALL FUNCTION: goBackward');

            closeToolbox();
            if (settings.currentDisplay == 'months') {
                settings.date.selected = moment(settings.date.selected).add(-1, 'months');
            } else {
                settings.date.selected = moment(settings.date.selected).add(-1, 'day');
            }
            generateTableLines();
            generateGroupMainContent();
            generateUsersList();
            updateHeaderDates();
            updateDatePicker();
        };

        /**
         * Shows or hides the  pre-loader spinner
         * @returns {{show: show, hide: hide}}
         */
        var spinner = function () {
            var $spinner = $('#pts-spinner-container');

            return {
                show: function () {
                    if (settings.hideSpinner) return;
                    $spinner.css('display', 'block');
                },
                hide: function () {
                    if (settings.hideSpinner) return;
                    $spinner.css('display', 'none');
                }
            }
        };

        /**
         * Returns true if the first date contains the second one
         * @param {Object} origin
         * @param {Object} date
         * @returns {Boolean}
         */
        var isDateInDate = function (origin, date) {
            log.log('CALL FUNCTION: isDateInDate');
            if ((moment(date.start_date) <= moment(origin.start_date) && moment(date.end_date) >= moment(origin.end_date))
                || (moment(date.start_date) >= moment(origin.start_date) && moment(date.start_date) <= moment(origin.end_date))
                || (moment(date.end_date) <= moment(origin.end_date) && moment(date.end_date) >= moment(origin.start_date))) {
                return true;
            }
            return false;
        };

        /**
         * Returns a task from its Id
         * @param {String] taskId
         * @returns {Object} the task
         */
        var getTaskById = function (taskId) {
            log.log('CALL FUNCTION: getTaskById: taskId: ' + taskId);

            if (!settings.tasks) return;

            var task;
            settings.tasks.forEach(function (_task) {
                if (_task.id === taskId) {
                    task = _task;
                }
            });
            return task;
        };

        /**
         * Return true if the user has tasks in the selected month/day
         * @param {Object} user
         * @returns {Boolean}
         */
        var userHasTask = function (user) {
            log.log('CALL FUNCTION: userHasTask: user: ' + user.name);

            var response = false;
            var originDates = {
                start_date: (settings.currentDisplay == 'days' ? moment(settings.date.selected).startOf('day') : moment(settings.date.selected).startOf('month')),
                end_date: (settings.currentDisplay == 'days' ? moment(settings.date.selected).endOf('day') : moment(settings.date.selected).endOf('month'))
            };
            user.tasks.forEach(function (task) {
                if (isDateInDate(originDates, task) == true) {
                    response = true;
                }
            });
            return response;
        };

        /**
         *  Get the height of an user line
         * @param {Object} user
         * @returns {Number}
         */
        var getUserLineHeight = function (user) {
            log.log('CALL FUNCTION: getUserLineHeight: user: ' + user.name);

            var tasks = [];
            var lineIsHidden = user.isShowed;
            var originDates = {
                start_date: (settings.currentDisplay == 'days' ? moment(settings.date.selected).startOf('day') : moment(settings.date.selected).startOf('month')),
                end_date: (settings.currentDisplay == 'days' ? moment(settings.date.selected).endOf('day') : moment(settings.date.selected).endOf('month'))
            };
            user.tasks.forEach(function (task) {
                var original = getTaskById(task.id);
                if (getFiltersResponse('task', original.name) == false && getFiltersResponse('tag', original.tag) == false) {
                    if (settings.hideEmptyLines && tasks.indexOf(task.id) < 0 && isDateInDate(originDates, task) == true) {
                        tasks.push(task.id);
                    } else if (!settings.hideEmptyLines && tasks.indexOf(task.id) < 0 && lineIsHidden == true) {
                        tasks.push(task.id);
                    }
                }
            });
            return tasks.length * 40;
        };

        /**
         * Return true if the user line must be showed
         * @param {Object} user
         * @returns {Boolean}
         */
        var userLineIsShowed = function (user) {
            log.log('CALL FUNCTION: userLineIsShowed: user: ' + user.name);
            if (getFiltersResponse('group', user.group)) return false;
            if (getFiltersResponse('user', user.name)) return false;
            var response = 0,
                originDates = {
                    start_date: (settings.currentDisplay == 'days' ? moment(settings.date.selected).startOf('day') : moment(settings.date.selected).startOf('month')),
                    end_date: (settings.currentDisplay == 'days' ? moment(settings.date.selected).endOf('day') : moment(settings.date.selected).endOf('month'))
                };
            if (!user.tasks) return generateNotification('warning', '<b>' + user.name + '</b> ' + settings.i18n.notif.userHasNoTask);
            user.tasks.forEach(function (task) {
                var original = getTaskById(task.id)
                if (isDateInDate(originDates, task) && getFiltersResponse('task', original.name) == false && getFiltersResponse('tag', original.tag) == false) response++;
            });
            return ((response > 0) || settings.hideEmptyLines === false);
        };

        /**
         *  Moves the tasks labels on horizontal scroll
         */
        var setTaskLabelPosition = function () {
            log.log('CALL FUNCTION: setTaskLabelPosition');

            if (settings.disableLabelsMovement) return;
            var $elements = $('.pts-line-marker:has(> .pts-line-marker-label)'),
                limit = parseInt($('.pts-line-title-container').offset().left + $('.pts-line-title-container').width());
            $.each($elements, function() {
                var $label = $(this).children('p'),
                    right = parseInt($(this).offset().left) + parseInt($(this).width()) - parseInt($label.width()),
                    left = parseInt($(this).offset().left);
                if (left < limit && right > limit + 20) {
                    $label.css('left', $('.pts-scheduler-container').scrollLeft() - parseInt($(this).css('left')) + 10);
                } else {
                    $label.css('left', '10px');
                }

            });
        };

        /**
         * Returns an array of the users index that are in the specified group
         * @param {String} groupName
         * @returns {Array}
         */
        var getUsersInGroup = function (groupName) {
            log.log('CALL FUNCTION: getUsersInGroup: groupName' + groupName);

            var inGroup  =[];

            settings.users.forEach(function (user) {
                if (user.group == groupName) {
                    inGroup.push(user.index);
                }
            });
            return inGroup;
        };

        /**
         * Opens the toolbox panel
         * @param {String} taskId
         * @param {Number} userIndex
         * @param {String} viewType
         */
        var openToolbox = function (taskId, userIndex, viewType) {
            log.info('CALL FUNCTION: openToolbox: taskId: ' + taskId + ': userIndex: ' + userIndex + ': viewType: ' + viewType);

            var $toolbox = $('#pts-toolbox-container');
            $toolbox.empty();
            $toolbox.scrollTop();

            switch (viewType) {
                case 'task':
                    var task = getTaskById(taskId),
                        $markers = $('.pts-line-marker');
                    generateToolboxContentTask(task, settings.users[userIndex]);
                    $.each($markers, function () {
                        $(this).css('background-color', getTaskById($(this).attr('data-task')).color);
                        if ($(this).attr('data-task') !== taskId) {
                            $(this).css('background-color', '#8e8e8e');
                        }
                    });
                    $('.pts-main-group-column').css('background-color', '#eee');
                    $toolbox.attr('data-toggle', 'opened');
                    break;
                case 'user':
                    var user = settings.users[userIndex];
                    generateToolboxContentUser(user);
                    $toolbox.attr('data-toggle', 'opened');
                    break;
                case 'createTask':
                    generateToolboxContentCreateTask();
                    $toolbox.attr('data-toggle', 'opened');
                    break;
                case 'assignTask':
                    generateToolboxContentAssignTask(taskId);
                    $toolbox.attr('data-toggle', 'opened');
                    break;
                case 'editTask':
                    generateToolboxContentEditTask(taskId);
                    $toolbox.attr('data-toggle', 'opened');
                    break;
                case 'createUser':
                    generateToolboxContentCreateUser();
                    $toolbox.attr('data-toggle', 'opened');
                    break;
                case 'editUser':
                    var user = settings.users[userIndex];
                    generateToolboxContentEditUser(user);
                    $toolbox.attr('data-toggle', 'opened');
                    break;
                case 'assignUser':
                    var user = settings.users[userIndex];
                    generateToolboxContentAssignUser(user);
                    $toolbox.attr('data-toggle', 'opened');
                    break;
                case 'seeAll':
                    generateToolboxContentSeeAll();
                    $toolbox.attr('data-toggle', 'opened');
                    break;
                case 'filters':
                    generateToolboxContentFilters();
                    $toolbox.attr('data-toggle', 'opened');
                    break;
                default:
                    return;
            }

            $toolbox.animate({
                width: '460px'
            }, 300);
            getContrastedColor();
        };

        /**
         * Closes the toolbox panel
         */
        var closeToolbox = function () {
            log.info('CALL FUNCTION: closeToolbox');

            var $toolbox = $('#pts-toolbox-container'),
                $markers = $('.pts-line-marker');
            if ($toolbox.attr('data-toggle') === 'closed') return;
            $.each($markers, function () {
                var task = getTaskById($(this).attr('data-task'));
                $(this).css('background-color', (task ? task.color : settings.defaultColor));
            });

            $('.pts-main-group-column').css('background-color', '#fff');
            $toolbox.animate({
                width: '0%'
            }, 300);
            $toolbox.attr('data-toggle', 'closed');
            $toolbox.empty();
            getContrastedColor();
        };

        /**
         * Mixes the overlaid tasks
         * @param {String} originIndex: The index of the task
         * @param {Object} task: the task to check from
         * @param {Object} user: the owner of the task
         * @returns {Object} the mixed (or not) task
         */
        var hideTaskSuperposition = function (originIndex, task, user) {
            log.log('CALL FUNCTION: hideTaskSuperposition: originIndex: ' + originIndex + ':task: ' + task.name + ': user: ' + user.name);

            user.tasks.forEach(function (userTask, index) {
                if (userTask.id === task.id && index !== originIndex) {
                    if (moment(task.start_date).format('YYMMDD') == moment(userTask.end_date).format('YYMMDD')&&
                        ((moment(task.start_date).format('H') <= 12 && moment(userTask.end_date).format('H') <= 12 && moment(userTask.end_date).format('H') > 0) ||
                        (moment(task.start_date).format('H') > 12 && moment(userTask.end_date).format('H') > 12))) {
                        task.superposed = 'border-left: 2px dotted #000';
                    }
                }
            });
            return task;
        };

        /**
         * Replaces all elements with the class pts-check-color color
         * depending on their background color and their contrast
         */
        var getContrastedColor = function () {
            log.log('CALL FUNCTION: getContrastedColor');

            $('.pts-check-color').each(function () {
                var rgb = $(this).css('background-color').match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                if (rgb && rgb.length == 4) {
                    var L = (rgb[1] * 0.299 + rgb[2] * 0.587 + rgb[3] * 0.114) / 255;
                    if (L > 0.60) {
                        $(this).children().css('color', '#000');
                        $(this).css('color', '#000');
                        $(this).css('border-color', '#000');
                    }
                    else {
                        $(this).children().css('color', '#fff');
                        $(this).css('color', '#fff');
                        $(this).css('border-color', '#fff');
                    }
                }
            });
        };

        /**
         * Changes the selected list view date range
         * @param {String} range: the range to display
         */
        var switchListRange = function (range) {
            log.log('CALL FUNCTION: switchListRange: range: ' + range);

            $('.pts-list-tasks-container').empty();
            switch (range) {
                case 'all':
                    settings.list.start_date = moment();
                    settings.list.end_date = moment();
                    var $content =  '<h4 style="margin:0 0 15px 15px"><b>' + settings.i18n.all + ' :</b></h4>';
                    $('.pts-list-tasks-container').append($content);
                    break;
                case 'today':
                    settings.list.start_date = moment().startOf('day');
                    settings.list.end_date = moment().endOf('day');
                    var $content =  '<h4 style="margin:0 0 15px 15px"><b>' + settings.i18n.from + '</b> ' + settings.list.start_date.locale(settings.locale).format('lll') +
                        ' <b>' + settings.i18n.to + '</b> ' + settings.list.end_date.locale(settings.locale).format('lll') + ' :</h4>';
                    $('.pts-list-tasks-container').append($content);
                    break;
                case 'week':
                    settings.list.start_date = moment().startOf('week');
                    settings.list.end_date = moment().endOf('week');
                    var $content =  '<h4 style="margin:0 0 15px 15px"><b>' + settings.i18n.from + '</b> ' + settings.list.start_date.locale(settings.locale).format('lll') +
                        ' <b>' + settings.i18n.to + '</b> ' + settings.list.end_date.locale(settings.locale).format('lll') + ' :</h4>';
                    $('.pts-list-tasks-container').append($content);
                    break;
                case 'month':
                    settings.list.start_date = moment().startOf('month');
                    settings.list.end_date = moment().endOf('month');
                    var $content =  '<h4 style="margin:0 0 15px 15px"><b>' + settings.i18n.from + '</b> ' + settings.list.start_date.locale(settings.locale).format('lll') +
                        ' <b>' + settings.i18n.to + '</b> ' + settings.list.end_date.locale(settings.locale).format('lll') + ' :</h4>';
                    $('.pts-list-tasks-container').append($content);
                    break;
                case 'year':
                    settings.list.start_date = moment().startOf('year');
                    settings.list.end_date = moment().endOf('year');
                    var $content =  '<h4 style="margin:0 0 15px 15px"><b>' + settings.i18n.from + '</b> ' + settings.list.start_date.locale(settings.locale).format('lll') +
                        ' <b>' + settings.i18n.to + '</b> ' + settings.list.end_date.locale(settings.locale).format('lll') + ' :</h4>';
                    $('.pts-list-tasks-container').append($content);
                    break;
                case 'personalized':
                    var $content =  '<h4 style="margin:0 0 15px 15px"><b>' + settings.i18n.from + '</b> ' + settings.list.start_date.locale(settings.locale).format('lll') +
                        ' <b>' + settings.i18n.to + '</b> ' + settings.list.end_date.locale(settings.locale).format('lll') + ' :</h4>';
                    $('.pts-list-tasks-container').append($content);
                    break;
            }
            settings.tasks.forEach(function (task) {
                if ($('.pts-list-task-enabler-input[data-task=' + task.id + ']').is(':checked')) {
                    generateListTaskContent(task);
                }
            });
        };

        /**
         * Creates a new task
         * @param {String} name
         * @param {String} id
         * @param {String} description
         * @param {String} color
         * @param {Object} tag: contains the tag informations (name and color)
         * @param {Boolean} assign: true if the task must be assigned after being created
         */
        var createNewTask = function (name, id, description, color, tag, assign) {
            log.info('CALL FUNCTION: createNewTask');

            var undo = getUndo();

            var newTask = {
                id: (id.length > 0 ? id : generateRandomId()),
                name: name,
                description: (description.length > 0 ? description : ''),
                color: (color.length > 0 ? color : settings.defaultColor),
                tag: tag.name,
                tagColor: tag.color
            };
            newTask = generateTaskInTask(newTask);
            settings.tasks.push(newTask);
            updateDisplay(settings.currentDisplay);
            generateNotification('success', settings.i18n.notif.taskCreated + ' : <b>' + newTask.name + '</b>', undo, settings.onTaskCreation);
            if (assign == true) return openToolbox(newTask.id, null, 'assignTask');
        };

        /**
         * Generates a random Id
         * @returns {String}
         */
        var generateRandomId = function () {
            log.log('CALL FUNCTION: generateRandomId');

            var S4 = function() {
                return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            };
            return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        };

        /**
         * Removes a task
         * @param {String} taskId
         */
        var removeTask = function (taskId) {
            log.info('CALL FUNCTION: removeTask');

            var undo = getUndo();

            $.each(settings.tasks, function (i, task) {
                if (task && task.id === taskId) {
                    delete settings.tasks[i];
                }
            });
            $.each(settings.users, function (userIndex, user) {
                if (user) {
                    $.each(user.tasks, function (taskIndex, task) {
                        if (task && task.id === taskId) {
                            delete settings.users[userIndex].tasks[taskIndex];
                        }
                    });
                }
            });
            updateDisplay(settings.currentDisplay);
            generateNotification('success', settings.i18n.notif.taskRemoved, undo, settings.onTaskRemoval);
        };

        /**
         * Assigns users to a specific task
         * @param {Array} users: the users index
         * @param {Object} task: the task to assign too
         * @param {Date} start_date
         * @param {Date} end_date
         */
        var assignUsersToTask = function (users, task, start_date, end_date) {
            log.info('CALL FUNCTION: assignUsersToTask');

            var undo = getUndo();

            var taskDates = {
                start_date: start_date,
                end_date: end_date
            };

            $('#pts-assign-task-err').empty();
            if (!users || !task || !start_date || ! end_date) return;

            users.forEach(function (userIndex) {
                var user = settings.users[userIndex],
                    taskExist = false;
                user.tasks.forEach(function (_task) {
                    if (_task.id === task.id && (isDateInDate(_task, taskDates) || isDateInDate(taskDates, _task))) {
                        taskExist = true;
                    }
                });
                if (taskExist) {
                    return $('#pts-assign-task-err').append('<b>' + user.name + '</b> ' + settings.i18n.userIsAlreadyAssigned + '<br>');
                }
                user.tasks.push({
                    id: task.id,
                    start_date: moment(start_date).format('YYYY-MM-DD HH:mm'),
                    end_date: moment(end_date).format('YYYY-MM-DD HH:mm')
                });
                generateTaskInTask(task);
                if ($('.pts-toolbox-user[data-user=' + user.index + ']').length == 0) {
                    var $head = '<hr><div class="pts-toolbox-user animated fadeIn" data-user="' + user.index + '"><h4 class=" text-semibold heading-divided">' + user.name + '</h4>' +
                        '<table><tbody class="pts-toolbox-user-list" data-head="' + user.index + '"></tbody></table></div>';
                    $('#pts-toolbox-container > .panel-body').append($head);
                }
                var $userTasks =    ['<tr class="animated fadeIn"><td>',
                    '<i class="glyphicon glyphicon-trash pts-task-assign-delete-user" data-user="' + user.index + '" data-task="' + task.id + '" data-task-index="' + (user.tasks.length - 1) + '"></i>',
                    '<b>' + settings.i18n.from + '</b> ' + moment(start_date).locale(settings.locale).format('llll'),
                    ' <b>' + settings.i18n.to + '</b> ' + moment(end_date).locale(settings.locale).format('llll') + '</td></tr>'].join('\n');
                $('.pts-toolbox-user-list[data-head=' + user.index + ']').append($userTasks);
                $('#pts-toolbox-container').scrollTop($('#pts-toolbox-container')[0].scrollHeight);
            });
            generateNotification('success', '<b>' + users.length + '</b> ' + ( users.length > 1 ? settings.i18n.notif.usersAssigned: settings.i18n.notif.userAssigned) + ' <b>' + task.name + '</b>',
                undo, settings.onTaskAssignation);
        };

        /**
         * Assigns tasks to a specific user
         * @param {Object} user
         * @param {Array} tasks
         * @param {Date} start_date
         * @param {Date} end_date
         */
        var assignTasksToUser = function (user, tasks, start_date, end_date) {
            log.info('CALL FUNCTION: assignTasksToUser');

            var undo = getUndo();

            if (!user || !tasks || !start_date || ! end_date) return;
            $('#pts-assign-user-err').empty();

            var taskDates = {
                start_date: start_date,
                end_date: end_date
            };
            tasks.forEach(function (taskId) {
                var task = getTaskById(taskId),
                    taskExist = false;
                user.tasks.forEach(function (_task) {
                    if (_task.id === task.id && (isDateInDate(_task, taskDates) || isDateInDate(taskDates, _task))) {
                        taskExist = true;
                    }
                });
                if (taskExist) {
                    return $('#pts-assign-user-err').append('<b>' + user.name + '</b> ' + settings.i18n.userIsAlreadyAssigned + '<br>');
                }
                user.tasks.push({
                    id: task.id,
                    start_date: moment(start_date).format('YYYY-MM-DD HH:mm'),
                    end_date: moment(end_date).format('YYYY-MM-DD HH:mm')
                });
                generateTaskInTask(task);
                if ($('.pts-toolbox-task-header[data-task=' + task.id + ']').length == 0) {
                    var $head = ['<p class="animated fadeIn pts-check-color progress-bar-striped pts-toolbox-task-header" style="background-color:' + task.color + ';margin-top:10px" data-task="' + task.id + '" data-user="' + user.index + '"><b>',
                        task.name + '</b></p><table style="position: relative;left:30px;"><tbody class="pts-user-sorted-task" data-task="' + task.id + '" class="pts-toolbox-user-list" data-head="' + user.index + '">',
                        '</tbody></table>'].join('\n');
                    $('.pts-toolbox-user-list').append($head);
                }
                var $line = '<tr><td><i class="animated fadeIn glyphicon glyphicon-trash pts-task-assign-delete-user" data-user="' + user.index + '" data-task="' + task.id + '" data-task-index="' + task.index + '"></i>' +
                    '<b>' + settings.i18n.from + '</b> ' + moment(start_date).locale(settings.locale).format('lll') + '  <b>' + settings.i18n.to + '</b> ' + moment(end_date).locale(settings.locale).format('lll') + '</td></tr>';
                $('.pts-user-sorted-task[data-task=' + task.id + ']').append($line);
                $('#pts-toolbox-container').scrollTop($('#pts-toolbox-container')[0].scrollHeight);
            });

            generateNotification('success', '<b>' + user.name + '</b> ' + settings.i18n.notif.userAssignedTo + ' <b>' + tasks.length + '</b> ' + (tasks.length > 1 ? settings.i18n.tasks : settings.i18n.task),
                undo, settings.onTaskAssignation);
        };

        /**
         * Removes a task line from a user
         * @param {Object} user
         * @param {Object} task
         * @param {Number} taskIndex
         * @param {Object} undo
         */
        var deleteTaskFromUser = function (user, task, taskIndex, undo) {
            log.info('CALL FUNCTION: deleteTaskFromUser');

            var undo = undo || getUndo();

            if (!user.tasks[taskIndex]) return;

            delete user.tasks[taskIndex];
            generateTaskInTask(task);
            initUsers();
            initGroup();
            generateNotification('success', '<b>' + user.name + '</b> ' + settings.i18n.notif.userUnassigned, undo, settings.onUserTaskDeletion);
        };

        /**
         * Edited the information of an existing task
         * @param {Object} task
         * @param {Array} newData
         */
        var editTask = function (task, newData) {
            log.info('CALL FUNCTION: editTask');

            var undo = getUndo();

            task.name = (newData.name || task.name);
            task.color = (newData.color || task.color);
            task.description = (newData.description || '');
            task.tag = (newData.tag || '');
            task.tagColor = (newData.tagColor || '');
            updateDisplay(settings.currentDisplay);
            generateNotification('success', settings.i18n.notif.taskInformationsUpdated, undo, settings.onTaskEdition);
        };

        /**
         * Creates a new user
         * @param {String} name
         * @param {String} group
         * @param {Boolean} assign: true if the user must be assigned after being created
         */
        var createNewUser = function (name, group, assign) {
            log.info('CALL FUNCTION: createNewUser');

            var undo = getUndo();

            settings.users.push({
                name: name,
                group: (group ? group : ''),
                tasks: []
            });

            var userIndex = settings.users.length - 1;

            initUser(settings.users[userIndex], settings.users.length - 1);
            generateNotification('success', settings.i18n.notif.userCreated + ' : <b>' + name + '</b>', undo, settings.onUserCreation);
            if (assign == true) return openToolbox(null, userIndex, 'assignUser');
            updateDisplay(settings.currentDisplay);
        };

        /**
         * Removes a user
         * @param {Object} user
         */
        var removeUser = function (user) {

            var undo = getUndo();

            delete settings.users[user.index];
            updateDisplay(settings.currentDisplay);
            getUsersTasksInTasks();

            generateNotification('success', settings.i18n.notif.userRemoved, undo, settings.onUserRemoval);
        };

        /**
         * Edited a user
         * @param {Number} userIndex
         * @param {Array} newData
         */
        var editUser = function (userIndex, newData) {
            if (!settings.users[userIndex]) return;

            var undo = getUndo();

            settings.users[userIndex].name = newData.name;
            settings.users[userIndex].group = (newData.group ? newData.group : '');

            initUsers();
            updateDisplay(settings.currentDisplay);
            generateNotification('success', settings.i18n.notif.userEdited, undo, settings.onUserEdition);
        };

        /**
         * update a task when it has been resized
         */
        var resizeTask = function () {
            clearInterval(settings.resize.timeout);

            settings.users[settings.resize.user].tasks.forEach(function (task, taskIndex) {

                if (task.id == settings.resize.task && moment(task.end_date).format('YYYYMMDD') == moment(settings.resize.end_date).format('YYYYMMDD')) {
                    var undo = getUndo();
                    var count = settings.resize.count;
                    var splitted = (settings.currentDisplay == 'months' ?
                        (moment(task.end_date).format('H') <= 12 && parseInt(moment(task.end_date).format('Hmm')) > 0? true : false) :
                        (moment(task.end_date).format('mm') <= 30 && parseInt(moment(task.end_date).format('mm')) > 0 ? true : false));
                    task.end_date = moment(task.end_date).add((count * (settings.currentDisplay == 'months' ? 1440 : 60)) , 'minute');
                    if ((splitted && count % 1 !== 0) || (!splitted && count % 1 == 0)) { //On main border
                        if (moment(task.end_date).format('HHmm') != '0000') {
                            task.end_date = (settings.currentDisplay == 'months' ? moment(task.end_date).endOf('day') : moment(task.end_date));
                        } else {
                            task.end_date = (settings.currentDisplay == 'months' ? moment(task.end_date).add(-1, 'minute') : moment(task.end_date));
                        }
                    } else {
                        task.end_date = (settings.currentDisplay == 'months' ? moment(task.end_date).hours(12).minutes(0) : moment(task.end_date).minutes(30));
                    }
                    task.end_date = moment(task.end_date).format('YYYY-MM-DD HH:mm');
                    if (parseInt(moment(task.start_date).format('YYYYMMDDHHmm')) >= parseInt(moment(task.end_date).format('YYYYMMDDHHmm'))) {
                        deleteTaskFromUser(settings.users[settings.resize.user], task, taskIndex, undo);
                    } else {
                        generateNotification('success', settings.i18n.notif.userTaskModified + ': <b>' + moment(task.end_date).locale(settings.locale).format('LLLL') + '</b>', undo, settings.onUserEdition);
                    }
                    updateDisplay(settings.currentDisplay);
                }
            });
            settings.resize = {};
        };

        /**
         *  apply the task resizing
         * @param e: the action event
         */
        var moveTaskResize = function (e) {
            var $taskMarker = settings.resize.element;
            $('.pts-task-tooltip').remove();
            var overlapse = false;
            $('.pts-line-marker[data-task=' + settings.resize.task + '][data-user=' + settings.resize.user + ']').each(function () {
                if ($(this).offset().left !== $taskMarker.offset().left) {
                    var markerLeft = parseInt($taskMarker.offset().left),
                        markerRight = parseInt(markerLeft + $taskMarker.width()),
                        elemLeft = parseInt($(this).offset().left);
                    if (elemLeft <= markerRight && markerLeft < elemLeft) overlapse = true;
                }
            });
            var move = (settings.resize.origin > e.pageX ? 60 : -60),
                $element = settings.resize.element,
                original_width = parseInt($element.css('width'));
            if (e.pageX > settings.resize.origin + 60 && !overlapse) {
                var newDate = (settings.resize.count + 0.5) + ' ' + (settings.currentDisplay == 'months' ? settings.i18n.day : settings.i18n.hour) + (settings.resize.count + 0.5 > 1 || settings.resize.count - 0.5 < -1 ? 's' : '');
                $taskMarker.before('<div class="pts-task-tooltip" style="left:' + ($taskMarker.width() + $taskMarker.position().left) + 'px;top:' + ($taskMarker.position().top - 30) + 'px"><div>' + (settings.resize.count + 0.5 > 0 ? '+' : '') + newDate + '</div></div>');
                settings.resize.count = settings.resize.count + 0.5;
                $element.css('width', original_width - move + 'px');
                settings.resize.origin = e.pageX;
            } else if (e.pageX < settings.resize.origin - 60) {
                var newDate = (settings.resize.count - 0.5) + ' ' + (settings.currentDisplay == 'months' ? settings.i18n.day : settings.i18n.hour) + (settings.resize.count - 0.5 > 1 || settings.resize.count - 0.5 < -1 ? 's' : '');
                $taskMarker.before('<div class="pts-task-tooltip" style="left:' + ($taskMarker.width() + $taskMarker.position().left - 120) + 'px;top:' + ($taskMarker.position().top - 30) + 'px""><div>' + (settings.resize.count - 0.5 > 0 ? '+' : '') + newDate + '</div></div>');
                settings.resize.count = settings.resize.count - 0.5;
                $element.css('width', original_width - move + 'px');
                settings.resize.origin = e.pageX;
            }
        };

        /**
         * Apply the task assignation edition
         * @param {Object} user
         * @param {Object} task
         * @param {String} taskIndex
         */
        var editTaskAssignation = function (user, task, taskIndex) {
            var overflow = false,
                new_dates = {
                    start_date: moment($('#pts-list-datetimepicker-start').data('DateTimePicker').date()),
                    end_date: moment($('#pts-list-datetimepicker-end').data('DateTimePicker').date())
                };
            if (!task) return;

            user.tasks.forEach(function (_task, i) {
                if (taskIndex != i && _task.id == task.id && (isDateInDate(new_dates, _task) || isDateInDate(_task, new_dates))) {
                    overflow = true;
                    $('.pts-edit-assignation-err').html(user.name + ' ' + settings.i18n.userIsAlreadyAssigned);
                }
            });
            if (overflow == false) {
                var undo = getUndo();
                settings.users[user.index].tasks[taskIndex].start_date = new_dates.start_date;
                settings.users[user.index].tasks[taskIndex].end_date = new_dates.end_date;
                updateDisplay(settings.currentDisplay);
                generateNotification('success', settings.i18n.notif.userEdited, undo, settings.onUserEdition);
            }
        };

        /**
         * Create or edit a filter
         * @param {Object} filter
         */
        var addNewFilter = function (filter) {
            var exist = false;
            settings.filters.forEach(function (_filter, i) {
                if (_filter.id == filter.id) {
                    exist = i;
                }
            });
            if (exist === false) {
                settings.filters.push(filter);
                generateNotification('success', settings.i18n.notif.filterAdded);
            } else {
                settings.filters[exist] = filter;
                generateNotification('success', settings.i18n.notif.filterEdited);
            }
        };

        /**
         * Delete a defined filter
         * @param {String} filterId
         */
        var removeFilter = function (filterId) {
            var toRemove = null;
            settings.filters.forEach(function (filter, i) {
                if (filter.id == filterId) {
                    toRemove = i;
                }
            });
            if (toRemove !== null) {
                settings.filters.splice(toRemove, 1);
                generateNotification('success', settings.i18n.notif.filterRemoved);
                $('.pts-filter-container[data-filter=' + filterId + ']').remove();
            }
        };

        /**
         * Return true if the filters allow the defined element
         * @param {String} type
         * @param  {String} value
         * @returns {boolean}
         */
        var getFiltersResponse = function(type, value) {
            var response = false;
            settings.filters.forEach(function (filter) {
                if (filter.target == type) {
                    if (value === undefined ) {
                        if (filter.type == 'in')
                        response = true;
                    }
                    else if (filter.type == 'out' && value.indexOf(filter.value) != -1 || (filter.type == 'in' && value && value.indexOf(filter.value) == -1)) {
                        response = true;
                    }
                }
            });
            return response;
        };


        /********* Generation *********/

        /**
         * Generates the header content
         */
        var generateHeader = function () {
            log.info('CALL FUNCTION: generateHeader');

            var $header =   ['<div id="pts-notification-container"></div>',
                '<div class="pts-header row">',
                '<div class="pts-header-left-container pull-left">',
                '<div class="form-group">',
                '<div class="input-group date hidden-xs" id="header-datetimepicker">',
                '<input type="text" class="form-control"/>',
                '<span class="input-group-addon">',
                '<span class="glyphicon glyphicon-calendar"></span>',
                '</span></div></div>',
                '<div class="pts-nav-buttons">',
                '<button class="btn pts-btn-previous"><i class="glyphicon glyphicon-chevron-left"></i></button>',
                '<button class="btn pts-btn-next"><i class="glyphicon glyphicon-chevron-right"></i></button>',
                '</div>',
                '<span class="pts-header-date-display">',
                (settings.currentDisplay === "months" ? moment(settings.date.selected).locale(settings.locale).format('MMMM YYYY') : moment(settings.date.selected).locale(settings.locale).format('LL')),
                '</span></div>',
                '<div class="pts-header-right-container pull-right">',
                '<button class="btn btn-sm pts-btn-day-view ' + (settings.currentDisplay === "days" ? "pts-active" : "") + '">' + settings.i18n.days + '</button>',
                '<button class="btn btn-sm pts-btn-month-view ' + (settings.currentDisplay === "months" ? "pts-active" : "") + '">' + settings.i18n.months + '</button>',
                '<button class="btn btn-sm pts-btn-list-view" ' + (settings.currentDisplay === "list" ? "pts-active" : "") + '>' + settings.i18n.list + '</button></div></div>'].join('\n');

            $scheduler.append($header);
            updateDatePicker();
        };

        /**
         * Generates the empty base structure
         */
        var generateBaseView = function () {
            log.info('CALL FUNCTION: generateBaseView');

            if ($('.pts-main-container').length) return;
            var $mainContainer =    ['<div class="pts-main-container row">',
                '<div id="pts-spinner-container">',
                '<ul class="pts-spinner"><li></li><li></li><li></li><li></li></ul></div>',
                '<div id="pts-toolbox-container" data-toggle="closed"></div>',
                '<div class="pts-corner-mask"></div>',
                '<div class="pts-column-title-container">',
                '<div></div></div>',
                '<div class="pts-line-title-container"><div>',
                '</div></div>',
                '<div class="pts-scheduler-container">',
                '<div class="pts-main-content">',
                '</div></div></div>'].join('\n');

            $scheduler.append($mainContainer);
        };

        /**
         * Generates the columns lines
         */
        var generateTableLines = function () {
            log.info('CALL FUNCTION: generateTableLines');

            initUsers();
            $('.pts-column-title-container > div').empty();
            $('.pts-main-content').empty();
            $('.pts-corner-mask').empty();
            if (settings.currentDisplay == 'days') {
                var lineInterval = 0;
                for (var i=0; i < 25; i++) {
                    $('.pts-column-title-container > div').append('<div class="pts-column-element">' + (i < 24 ? "<p>"+i+":00</p>" : "") + '</div>');
                    if (i < 24) {
                        $('.pts-main-content').append('<div class="pts-main-group-column" style="left:' + lineInterval + 'px"><div></div></div>');
                    }
                    lineInterval += 120;
                }
            } else if (settings.currentDisplay == 'months') {
                var dayDate = moment(settings.date.selected).add(-1 * (moment(settings.date.selected).format('D') - 1), 'day'),
                    lineInterval = 0,
                    daysInMonth = parseInt(moment(settings.date.selected).daysInMonth()) + 1;
                for (var i=1; i <= daysInMonth; i++) {
                    $('.pts-column-title-container > div').append(
                        '<div class="pts-column-element" data-date="' + moment(dayDate).format('YYYY-MM-DD') + '">' +
                        (i < daysInMonth  ? "<p>"+ dayDate.locale(settings.locale).format('ddd') + ' ' + i +"</p>" : "") + '</div>'
                    );
                    if (i < daysInMonth) {
                        $('.pts-main-content').append('<div class="pts-main-group-column" style="left:' + lineInterval + 'px"><div></div></div>');
                    }
                    lineInterval += 120;
                    dayDate.add(1, 'day');
                }
            }
            var $settingsMenu = ['<div style="display:inline-flex"><div class="dropdown" style="top:2px"><button id="addDropdown" class="btn btn-sm pts-btn-add-elem dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
                '<i class="glyphicon glyphicon-plus"></i></button>',
                '<ul class="dropdown-menu" aria-labelledby="addDropdown">',
                '<li><a href="#" class="pts-add-new-task">' + settings.i18n.addNewTask + '</a></li>',
                '<li><a href="#" class="pts-add-new-user">' + settings.i18n.addNewUser + '</a></li>',
                '</ul></div><div class="dropdown">',
                '<button class="btn ' + (settings.filters.length > 0 ? 'btn-success' : 'btn-default') + ' pts-open-filters-menu dropdown-toggle" type="button">',
                '<i class="glyphicon glyphicon-filter"></i></button>',
                '<button class="btn btn-default dropdown-toggle" type="button" id="settingsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
                '<i class="glyphicon glyphicon-cog"></i> <span class="caret"></span></button>',
                '<ul class="dropdown-menu" aria-labelledby="settingsDropdown">',
                '<li><label class="checkbox-inline"><input id="hide-user-btn" type="checkbox" value="" ' + (settings.hideEmptyLines ? 'checked' : '') + '>'+ settings.i18n.hideEmptyLine +'</label></li>',
                '<li><label class="checkbox-inline"><input id="disable-labels-mov" type="checkbox" value="" ' + (settings.disableLabelsMovement ? 'checked' : '') + '>'+ settings.i18n.disableLabelsMovement +'</label></li>',
                '</div></div>'].join('\n');
            $('.pts-corner-mask').append($settingsMenu);
        };

        /**
         * Adds one group to the scheduler
         * @param {String} group: The group name
         * @param index: The index of the group
         */
        var generateGroupTab = function (group, index) {
            log.log('CALL FUNCTION: generateGroupTab: group: ' + group);
            settings.groups.added.push({
                name: group,
                id: 'user-group-' + settings.groups.added.length
            });

            var index = settings.groups.added.length - 1;
            var $groupHeaderContent =   ['<div id="user-group-' + index + '" class="pts-line-group-container">',
                '<div class="pts-group-header">',
                '<i class="glyphicon glyphicon-remove pull-left close-group-panel" data-group="' + index + '" data-toggle="opened"></i>',
                '<span>' + group + '</span></div>',
                '<div class="pts-group-content"></div></div>'].join('\n');
            $('.pts-line-title-container > div').append($groupHeaderContent);
        };

        /**
         * Generates the main group content and header
         */
        var generateGroupMainContent = function () {
            log.log('CALL FUNCTION: generateGroupMainContent');

            if (!settings.groups) return;
            settings.groups.added.forEach(function (group, groupIndex) {
                var $groupMainContent = [
                    '<div id="group-container-' + groupIndex + '" class="pts-main-group-container">',
                    '<div class="pts-main-group-header"></div></div>'].join('\n');
                $('.pts-main-content').append($groupMainContent);
                settings.users.forEach(function (user, userIndex) {
                    var userLineHeight = user.lineHeight;
                    if (user.group === group.name && user.isShowed == true && userLineHeight > 0) {
                        $('#group-container-' + groupIndex).append('<div id="content-user-' + userIndex + '" class="pts-main-group-user" style="height:' + userLineHeight + 'px"></div>');
                    }
                });
                if ($('.close-group-panel[data-group='+groupIndex+']').attr('data-toggle') === 'closed') {
                    $('#group-container-' + groupIndex).children('.pts-main-group-user').css('display', 'none');
                }
            });
            if (settings.currentDisplay == 'days') {
                $('.pts-main-group-header').css('width', '2880px');
                $('.pts-main-group-user').css('width', '2880px');
            } else {
                $('.pts-main-group-header').css('width', (120 * moment(settings.date.selected).daysInMonth()) + 'px');
                $('.pts-main-group-user').css('width', (120 * moment(settings.date.selected).daysInMonth()) + 'px');
            }
            settings.users.forEach(function (user, userIndex) {
                generateTaskLines(user, userIndex);
            });
        };

        /**
         * Generates the left users list
         */
        var generateUsersList = function () {
            log.info('CALL FUNCTION: generateUsersList');
            if (!settings.users || settings.users.length <= 0) return generateNotification('warning', settings.i18n.notif.noUser );

            $('.pts-group-content').empty();
            settings.users.forEach(function (user) {
                var group = '';
                settings.groups.added.forEach(function (_group) {
                    if (_group.name == user.group || (user.id && _group.users && _group.users.indexOf(user.id) >= 0)) {
                        group = _group.id;
                    }
                });
                if (!group) {
                    var unlisted = settings.groups.added[settings.groups.unlisted];
                    group = (unlisted ? unlisted.id : '');
                }
                generateUserLine(user, group)
            });
        };

        /**
         * Adds one user line
         * @param {Object} user
         * @param {String} group
         */
        var generateUserLine = function (user, group) {
            log.log('CALL FUNCTION: generateUserLine: user: ' + user.name);

            if (!user.tasks) return log.warn('Warning: user ' + user.name + ' is assigned to any task');
            if (!user.isShowed || user.lineHeight <= 0 || !group) return;

            var $userNameUI = '<div class="pts-group-user pts-show-user" style="height:' + user.lineHeight + 'px" data-user="' + user.index + '"><p>' + user.name + '</p></div>';

            $('#' + group + ' > .pts-group-content').append($userNameUI);

        };

        /**
         * Generates the tasks lines
         * @param {Object} user: the owner of the tasks
         * @param {String} userIndex
         */
        var generateTaskLines = function (user, userIndex) {
            log.info('CALL FUNCTION: generateTaskLines: user: ' + user.name);

            if (!userHasTask(user)) return log.log('No task for this user in that period');
            user.index = userIndex;
            var topDistance = 5;
            if (!user.tasks) return;
            user.tasks.forEach(function (e, i) {
                var task = $.extend(getTaskById(e.id), e);
                if (task === undefined || getTaskById(e.id) == undefined) return generateNotification('warning', '<b>' + user.name + '</b> ' + settings.i18n.notif.taskNotExist);
                else if (getFiltersResponse('task', task.name) == false && getFiltersResponse('tag', task.tag) == false) {
                    task.index = i;
                    task.superposed = '';
                    if (task === undefined) return log.warn('CALL FUNCTION: Warning: Task ' + e.id + ' has not be found in tasks array for user ' + user.name);
                    if (task.start_date > task.end_date) return log.warn('CALL FUNCTION: Warning: end_date must be later than start_date for user ' + user.name + 'in task ' + e.id);
                    if (settings.currentDisplay === 'months') {
                        task = hideTaskSuperposition(i, task, user);
                        if (task.end_date) {
                            if (moment(settings.date.selected).format('YYYYMM') >= moment(task.start_date).format('YYYYMM')
                                && moment(settings.date.selected).format('YYYYMM') <= moment(task.end_date).format('YYYYMM')) {
                                topDistance += generateTaskLineMonth(user, task, topDistance);
                            }
                        }
                    }
                    else if (settings.currentDisplay === 'days') {
                        if (task.end_date) {
                            if (moment(settings.date.selected).format('YYYYMMDD') >= moment(task.start_date).format('YYYYMMDD')
                                && moment(settings.date.selected).format('YYYYMMDD') <= moment(task.end_date).format('YYYYMMDD')) {
                                topDistance += generateTaskLineDay(user, task, topDistance);
                            }
                        }
                    }
                    delete task.superposed;
                    delete task.index;
                    delete task.start_date;
                    delete task.end_date;
                }
            });
        };

        /**
         * Generates one task into the month view
         * @param {Object} user
         * @param {Object} task
         * @param {Number} topDistance
         * @returns {Number} topDistance
         */
        var generateTaskLineMonth = function (user, task, topDistance) {
            log.info('CALL FUNCTION: generateTaskLineMonth: user: ' + user.name + ':task: ' + task.name);

            var userIndex = user.index;
            var existingTaskLine = $('div[data-task=' + task.id + '][data-user=' + userIndex + '] > .pts-line-marker');
            var $tag = (task.tag  ? ' <span class="label label-default pts-check-color" style="background-color:' + task.tagColor  + '">' + task.tag + '</span>' : '');
            var $resizer = (settings.resizeTask ? '<i class="pts-task-resizer glyphicon glyphicon-option-vertical" data-task="' + task.id + '" data-user="' + userIndex + '" data-end="' + task.end_date + '"></i>' : '');

            if (existingTaskLine.length > 0) {
                topDistance = existingTaskLine.css('top');
            }

            $('#content-user-' + userIndex).append('<div class="pts-line-marker-group-' + task.index + '" data-task="' + task.id + '" data-user="' + userIndex + '"></div>');

            // If the task start date is in the current month
            if (moment(settings.date.selected).format('YYYYMM') == moment(task.start_date).format('YYYYMM')) {
                var splitted = (moment(task.start_date).format('H') >= 12 ? 60 : 0),
                    leftDistance = (120 * (moment(task.start_date).format('D') - 1)) + splitted - 6,
                    label_end = false;

                if (moment(task.end_date).format('YYYYMM') > moment(settings.date.selected).format('YYYYMM')) {
                    var labelWidth = 120 * (parseInt(moment(settings.date.selected).daysInMonth()) - parseInt(moment(task.start_date).format('D'))) + (splitted == 0 ? 120 : 60);
                } else {
                    var labelWidth = 120 * (moment(task.end_date).format('D') - moment(task.start_date).format('D') ) + (splitted == 0 ? 120 : 60) - (moment(task.end_date).format('H') <= 12 ? (moment(task.end_date).format('H') == 0 ? 120 : 60) : 0);
                    label_end = true;
                }
                topDistance = parseInt(topDistance);
                leftDistance = parseInt(leftDistance);
                var $task = ['<div class="pts-check-color progress-bar-striped pts-line-marker '+ (label_end ? 'complete' : 'start') +
                            '" style="top:'+topDistance+'px;left:'+ leftDistance +'px;background-color:' + task.color + ';width:'+labelWidth+'px;' + task.superposed + '" data-task="' + task.id + '" data-user="' + userIndex + '">',
                            '<p class="pts-line-marker-label text-no-select" data-toggle="tooltip" title="' + task.name + ' - ' + (task.tag || '') + '">' + task.name + $tag + '</p>',
                            $resizer + '</div>'].join('\n');
                $('#content-user-' + userIndex + ' > .pts-line-marker-group-' + task.index).append($task);
            }

            // If the task end date is in the current month but not the start date
            if (moment(settings.date.selected).format('YYYYMM') == moment(task.end_date).format('YYYYMM')) {
                if (moment(task.start_date).format('YYYYMM') < moment(settings.date.selected).format('YYYYMM')) {

                    var splitted = (moment(task.end_date).format('H') <= 12 ? 60 : 0);
                    var labelWidth = 120 * (moment(task.end_date).format('D')) - splitted - (moment(task.end_date).format('H') == 0 ? 60 : 0);

                    topDistance = parseInt(topDistance);
                    var $task = ['<div class="pts-check-color progress-bar-striped pts-line-marker end" style="top:' + topDistance + 'px;left:0px;background-color:' + task.color + ';width:'+labelWidth+'px" data-task="' + task.id + '" data-user="' + userIndex + '">',
                                '<p class="pts-line-marker-label text-no-select" data-toggle="tooltip" title="' + task.name + '">' + task.name + $tag + '</p>',
                                $resizer + '</div>'].join('\n');
                    $('#content-user-' + userIndex + ' > .pts-line-marker-group-' + task.index).append($task);
                }
            }

            // If the task start and end dates are not in the current month but the task is
            if (moment(settings.date.selected).format('YYYYMM') != moment(task.end_date).format('YYYYMM') && moment(settings.date.selected).format('YYYYMM') != moment(task.start_date).format('YYYYMM')) {
                topDistance = parseInt(topDistance);
                var $task = '<div class="pts-check-color progress-bar-striped pts-line-marker middle" style="top:' + topDistance + 'px;left:0px;background-color:' + task.color + ';" data-task="' + task.id + '" data-user="' + userIndex + '">' +
                    '<p class="pts-line-marker-label text-no-select" data-toggle="tooltip" title="' + task.name + '">' + task.name + $tag + '</p></div>';
                $('#content-user-' + userIndex + ' > .pts-line-marker-group-' + task.index).append($task);
            }
            setTaskLabelPosition();
            getContrastedColor();
            return (existingTaskLine.length > 0 ? 0 : 40);
        };

        /**
         * Generates one task into the month view
         * @param {Object} user
         * @param {Object} task
         * @param {String} topDistance
         * @returns {Number} topDistance
         */
        var generateTaskLineDay = function (user, task, topDistance) {
            log.info('CALL FUNCTION: generateTaskLineDay: user: ' + user.name + ': task: ' + task.name);

            var userIndex = user.index;
            var existingTaskLine = $('div[data-task=' + task.id + '][data-user=' + userIndex + '] > .pts-line-marker');
            var $tag = (task.tag? ' <span class="label label-default pts-check-color" style="background-color:' + task.tagColor  + '">' + task.tag + '</span>' : '');
            var $resizer = (settings.resizeTask ? '<i class="pts-task-resizer glyphicon glyphicon-option-vertical" data-task="' + task.id + '" data-user="' + userIndex + '" data-end="' + task.end_date + '"></i>' : '');

            if (existingTaskLine.length > 0) {
                topDistance = existingTaskLine.css('top');
            }

            $('#content-user-' + userIndex).append('<div class="pts-line-marker-group-' + task.index + '" data-task="' + task.id + '" data-user="' + userIndex + '"></div>');

            // If the task start date is in the current month
            if (moment(settings.date.selected).format('YYYYMMDD') == moment(task.start_date).format('YYYYMMDD')) {
                var splitted = (moment(task.start_date).format('mm') >= 30 ? 60 : 0),
                    leftDistance = (120 * (moment(task.start_date).format('H') )) + splitted - 6,
                    label_end = false;

                if (moment(task.end_date).format('YYYYMMDD') > moment(settings.date.selected).format('YYYYMMDD')) {
                    var taskWidth = 120 * (24 - parseInt(moment(task.start_date).format('H')) - 1) + (splitted == 0 ? 120 : 60);
                } else {
                    var taskWidth = 120 * (moment(task.end_date).format('H') - moment(task.start_date).format('H')) + (splitted == 0 ? 120 : 60)  - (moment(task.end_date).format('mm') < 30 ? 120 : 60);
                    label_end = true;
                }
                topDistance = parseInt(topDistance);
                leftDistance = parseInt(leftDistance);
                var $task = '<div class="pts-check-color progress-bar-striped pts-line-marker '+ (label_end ? 'complete' : 'start') +
                    '" style="top:'+topDistance+'px;left:'+ leftDistance +'px;background-color:' + task.color + ';width:'+taskWidth+'px" data-task="' + task.id + '" data-user="' + userIndex + '">' +
                    '<p class="pts-line-marker-label text-no-select" data-toggle="tooltip" title="' + task.name + '">' + task.name + $tag + '</p>' + $resizer + '</div>';
                $('#content-user-' + userIndex + ' > .pts-line-marker-group-' + task.index).append($task);
            }

            // If the task end date is in the current month but not the start date
            if (moment(settings.date.selected).format('YYYYMMDD') == moment(task.end_date).format('YYYYMMDD')) {
                if (moment(task.start_date).format('YYMMDD') < moment(settings.date.selected).format('YYMMDD')) {
                    var splitted = (moment(task.end_date).format('mm') < 30 ? 120 : 60);
                    var taskWidth = 120 * (moment(task.end_date).format('H')) - splitted + 120;

                    topDistance = parseInt(topDistance);
                    var $task = '<div class="pts-check-color progress-bar-striped pts-line-marker end" style="top:' + topDistance + 'px;left:0px;background-color:' + task.color + ';width:'+taskWidth+'px" data-task="' + task.id + '" data-user="' + userIndex + '">' +
                        '<p class="pts-line-marker-label text-no-select" data-toggle="tooltip" title="' + task.name + '">' + task.name + $tag + '</p>' + $resizer + '</div>';
                    $('#content-user-' + userIndex + ' > .pts-line-marker-group-' + task.index).append($task);
                }
            }

            // If the task start and end dates are not in the current month but the task is
            if (moment(settings.date.selected).format('YYYYMMDD') != moment(task.end_date).format('YYYYMMDD') && moment(settings.date.selected).format('YYYYMMDD') != moment(task.start_date).format('YYYYMMDD')) {
                topDistance = parseInt(topDistance);
                var $task = '<div class="pts-check-color progress-bar-striped pts-line-marker middle" style="top:' + topDistance + 'px;left:0px;background-color:' + task.color + ';" data-task="' + task.id + '" data-user="' + userIndex + '">' +
                    '<p class="pts-line-marker-label text-no-select" data-toggle="tooltip" title="' + task.name + '">' + task.name + $tag + '</p></div>';
                $('#content-user-' + userIndex + ' > .pts-line-marker-group-' + task.index).append($task);
            };
            setTaskLabelPosition();
            getContrastedColor();
            return (existingTaskLine.length > 0 ? 0 : 40);
        };

        /**
         * Generates the task structure of the info box
         * @param {Object} task
         */
        var generateToolboxContentTask = function (task) {
            log.info('CALL FUNCTION: generateToolboxContentTask: task: ' + task.name);

            var $tag = (task.tag ? '<span class="label label-default pts-check-color" style="background-color:' + task.tagColor  + '">' + task.tag + '</span><br>' : '');
            var $content =  ['<div class="panel-body">',
                '<h4 class="pts-check-color text-semibold pts-toolbox-title progress-bar-striped pts-close-toolbox" style="background-color:' + task.color + '">' + task.name,
                '<button class="btn btn-xs pts-button-see-all">' + settings.i18n.seeAll + '</button>',
                '<i class="glyphicon glyphicon-remove pull-right"></i></h4>' + $tag,
                '<p><b>' + settings.i18n.description + ' : </b><br>' + (task.description ? task.description : settings.i18n.notSpecified) + '</p>',
                '<div class="btn-group">',
                '<button type="button" class="pts-delete-task-btn btn btn-danger" data-task="' + task.id + '" data-confirm="false">' + settings.i18n.remove + '</button>',
                '<button type="button" class="btn pts-assign-task-btn" style="background-color:#00BCD4;color:#fff" data-task="' + task.id + '">' + settings.i18n.assign + '</button>',
                '<button type="button" class="btn pts-edit-task-btn" style="background-color:#0097A7;color:#fff" data-task="' + task.id + '">' + settings.i18n.edit + '</button></div><br>',
                '<br><div class="divider"></div></div>'].join('\n');
            $('#pts-toolbox-container').append($content);

            $.each(task.users, function (i) {
                var user = settings.users[i];
                var $head = ['<div class="pts-toolbox-user"><h4 class=" text-semibold heading-divided pts-show-user" data-user="' + user.index + '">' + user.name + '</h4>',
                            '<table><tbody class="pts-toolbox-user-list" data-head="' + i + '"></tbody></table></div>'].join('\n');
                $('#pts-toolbox-container > .panel-body').append($head);
                user.tasks.forEach(function (_task, taskIndex) {
                    if (_task.id === task.id) {
                        var $userLine = [
                            '<tr><td><i class="glyphicon glyphicon-trash pts-task-assign-delete-user" data-user="' + user.index + '" data-task="' + task.id + '" data-task-index="' + taskIndex + '"></i>',
                            '<i class="glyphicon glyphicon-pencil pts-user-edit-task" data-user="' + user.index + '" data-task="' + task.id + '" data-task-index="' + taskIndex + '"></i>',
                            '<b>' + settings.i18n.from + '</b> ' + moment(_task.start_date).locale(settings.locale).format('llll'),
                                        ' <b>' + settings.i18n.to + '</b> ' + moment(_task.end_date).locale(settings.locale).format('llll') + '</td></tr>'].join('\n');
                        $('.pts-toolbox-user-list[data-head=' + i + ']').append($userLine);
                    }
                });
            });
            getContrastedColor();
        };

        /**
         * Generates the users structure of the info box
         * @param {Object} user
         */
        var generateToolboxContentUser = function (user) {
            log.info('CALL FUNCTION: generateToolboxContentUser: user: ' + user.name);

            var sortedTasks = {};
            user.tasks.forEach(function (e, i) {
                if (!sortedTasks[e.id]) {
                    sortedTasks[e.id] = [];
                }
                sortedTasks[e.id].push('<i class="glyphicon glyphicon-trash pts-task-assign-delete-user" data-user="' + user.index + '" data-task="' + e.id + '" data-task-index="' + i + '"></i>' +
                    '<i class="glyphicon glyphicon-pencil pts-user-edit-task" data-user="' + user.index + '" data-task="' + e.id + '" data-task-index="' + i + '"></i>' +
                    '<b>' + settings.i18n.from + '</b> ' + moment(e.start_date).locale(settings.locale).format('lll') + '  <b>' + settings.i18n.to + '</b> ' + moment(e.end_date).locale(settings.locale).format('lll'));
            });
            var $content =  ['<div class="panel-body">',
                '<h4 class="text-semibold pts-toolbox-title pts-close-toolbox pts-check-color" style="background-color:' + settings.defaultColor + '" data-update="true">',
                user.name + ' - <small style="color:#fff">' + user.group + '</small>',
                '<button class="btn btn-xs pts-button-see-all">' + settings.i18n.seeAll + '</button>',
                '<i class="glyphicon glyphicon-remove pull-right"></i></h4>',
                '<div class="btn-group">',
                '<button type="button" class="pts-delete-user-btn btn btn-danger" data-user="' + user.index + '" data-confirm="false">' + settings.i18n.remove + '</button>',
                '<button type="button" class="btn pts-assign-user-btn" style="background-color:#00BCD4;color:#fff" data-user="' + user.index + '">' + settings.i18n.assign + '</button>',
                '<button type="button" class="btn pts-edit-user-btn" style="background-color:#0097A7;color:#fff" data-user="' + user.index + '">' + settings.i18n.edit + '</button></div><br>',
                '<div class="pts-toolbox-user-list"></div></div>'].join('\n');

            $('#pts-toolbox-container').append($content);
            $.each(sortedTasks, function (i, _task) {
                var originalTask = getTaskById(i);
                var $line = ['<p class="pts-check-color progress-bar-striped pts-toolbox-task-header" style="background-color:' +originalTask.color + ';margin-top:10px" data-task="' + i + '" data-user="' + user.index + '"><b>',
                    originalTask.name + '</b></p><table style="position: relative;left:30px;"><tbody class="pts-user-sorted-task" data-task="' + i + '" class="pts-toolbox-user-list" data-head="' + user.index + '">',
                    '</tbody></table>'].join('\n');
                $('.pts-toolbox-user-list').append($line);
                _task.forEach(function (_line) {
                    $('.pts-user-sorted-task[data-task=' + i + ']').append('<tr><td>' + _line + '</td></tr>');
                });
            });
            getContrastedColor();
        };

        /**
         * Generates the task creation structure of the info box
         */
        var generateToolboxContentCreateTask = function () {
            log.info('CALL FUNCTION: generateToolboxContentCreateTask');

            var $content = ['<div class="panel-body">',
                '<h4 class="text-semibold pts-toolbox-title pts-close-toolbox pts-check-color" style="background-color:' + settings.defaultColor + '">' + settings.i18n.addNewTask,
                '<i class="glyphicon glyphicon-remove pull-right"></i></h4>',
                '<fieldset>',
                '<div class="form-group"><label>' + settings.i18n.name + ' <small>(' + settings.i18n.required + ')</small> :</label><input id="pts-add-task-input-name" type="text" class="form-control" maxlength="50">',
                '<div id="pts-add-task-err-name" style="color:red"></div></div>',
                '<div class="form-group"><label>Id :</label><input id="pts-add-task-input-id" type="text" class="form-control" maxlength="80"><div id="pts-add-task-err-id" style="color:red"></div></div>',
                '<div class="form-group"><label>' + settings.i18n.color + ' :</label><input id="pts-add-task-input-color" type="color" class="form-control" value="' + settings.defaultColor + '"></div>',
                '<div class="form-group"><label>' + settings.i18n.description + ' :</label><textarea id="pts-add-task-input-description" type="text" class="form-control"  maxlength="255"></textarea></div>',
                '<div class="form-group"><label>' + settings.i18n.tag + ' :</label><input id="pts-add-task-input-tag" type="text" class="form-control" maxlength="15"></div>',
                '<div class="form-group"><label>' + settings.i18n.tagColor + ' :</label><input id="pts-add-task-input-tagColor" type="color" class="form-control" value="#777777"></div>',
                '<div class="btn-group">',
                '<button type="button" class="pts-close-toolbox btn btn-danger">' + settings.i18n.cancel + '</button>',
                '<button type="button" class="btn pts-create-task-btn" style="background-color:#00BCD4;color:#fff" data-assign="true">' + settings.i18n.createAndAssign + '</button>',
                '<button type="button" class="btn pts-create-task-btn" style="background-color:#0097A7;color:#fff" data-assign="false">' + settings.i18n.create + '</button></div>',
                '</fieldset>',
                '</div>'].join('\n');
            $('#pts-toolbox-container').append($content);
        };

        /**
         * Generates the task edition structure of the info box
         * @param {String} taskId
         */
        var generateToolboxContentEditTask = function (taskId) {
            log.info('CALL FUNCTION: generateToolboxContentEditTask');

            var task = getTaskById(taskId);
            if (!task) return;

            var $content = ['<div class="panel-body">',
                '<h4 class="text-semibold pts-toolbox-title pts-close-toolbox pts-check-color progress-bar-striped" style="background-color:' + task.color + '">' + task.name,
                '<i class="glyphicon glyphicon-remove pull-right"></i></h4>',
                '<h4><i class="glyphicon glyphicon-chevron-left pull-left pts-toolbox-back-btn" data-target="task" data-task="' + task.id + '"></i>' + settings.i18n.editTask + '</h4>',
                '<fieldset>',
                '<div class="form-group"><label>' + settings.i18n.name + ' <small>(' + settings.i18n.required + ')</small> :',
                '</label><input id="pts-edit-task-input-name" type="text" class="form-control" maxlength="50" value="' + task.name + '">',
                '<div id="pts-edit-task-err-name" style="color:red"></div></div>',
                '<div class="form-group"><label>Id :</label><input id="pts-edit-task-input-id" type="text" class="form-control" maxlength="80" value="' + task.id + '" disabled="disabled"></div>',
                '<div class="form-group"><label>' + settings.i18n.color + ' :</label><input id="pts-edit-task-input-color" type="color" class="form-control" value="' + task.color + '"></div>',
                '<div class="form-group"><label>' + settings.i18n.description + ' :</label>',
                '<textarea id="pts-edit-task-input-description" type="text" class="form-control"  maxlength="255">' + (task.description || '') + '</textarea></div>',
                '<div class="form-group"><label>' + settings.i18n.tag + ' :</label><input id="pts-edit-task-input-tag" type="text" class="form-control" maxlength="15" value="' + (task.tag || '') + '"></div>',
                '<div class="form-group"><label>' + settings.i18n.tagColor + ' :</label><input id="pts-edit-task-input-tagColor" type="color" class="form-control" value="' + (task.tagColor || '#777777') + '"></div>',
                '<div class="btn-group">',
                '<button type="button" class="pts-close-toolbox btn btn-danger">' + settings.i18n.cancel + '</button>',
                '<button type="button" class="btn pts-edit-task-confirm-btn" style="background-color:#0097A7;color:#fff" data-task="' + task.id + '">' + settings.i18n.edit + '</button></div>',
                '</fieldset>',
                '</div>'].join('\n');
            $('#pts-toolbox-container').append($content);
        };

        /**
         * Generates the task assignation structure of the info box
         * @param {String} taskId
         */
        var generateToolboxContentAssignTask = function (taskId) {
            log.info('CALL FUNCTION: generateToolboxContentAssignTask');
            var task = getTaskById(taskId);

            var $content = ['<div class="panel-body">',
                '<h4 class="pts-check-color text-semibold pts-toolbox-title progress-bar-striped pts-close-toolbox" style="background-color:' + task.color + '" data-update="true">' + task.name,
                '<i class="glyphicon glyphicon-remove pull-right"></i></h4>',
                '<h4><i class="glyphicon glyphicon-chevron-left pull-left pts-toolbox-back-btn" data-target="task" data-task="' + task.id + '"></i>' + settings.i18n.assignTaskTitle + '</h4>',
                '<div class="form-group"><label for="sel42">' + settings.i18n.selectUsersToAssign + ' : </label>',
                '<select multiple="" class="form-control pts-task-assign-users-list" id="sel42"></select></div>',
                '<b>' + settings.i18n.from + '</b><div class="input-group date pts-datetimepicker-start" id="pts-task-assign-datepicker-start">',
                '<input type="text" class="form-control"/>',
                '<span class="input-group-addon">',
                '<span class="glyphicon glyphicon-calendar"></span>',
                '</span></div>',
                '<b>' + settings.i18n.to + '</b><div class="input-group date pts-datetimepicker-end" id="pts-task-assign-datepicker-end">',
                '<input type="text" class="form-control"/>',
                '<span class="input-group-addon">',
                '<span class="glyphicon glyphicon-calendar"></span>',
                '</span></div><div id="pts-assign-task-err" style="color:red"></div><br><div class="pull-right">',
                '<button id="pts-task-assign-btn" class="btn pts-check-color" style="background-color:#00BCD4" data-task="' + taskId + '">' + settings.i18n.assign + '</button></div>',
                '<br></div>'].join('\n');

            $('#pts-toolbox-container').append($content);
            $('#pts-task-assign-datepicker-start').datetimepicker().data('DateTimePicker').locale(settings.locale).widgetPositioning({horizontal: 'left', vertical: 'bottom'}).keepOpen(false);
            $('#pts-task-assign-datepicker-end').datetimepicker().data('DateTimePicker').locale(settings.locale).widgetPositioning({horizontal: 'left', vertical: 'bottom'}).keepOpen(false);

            settings.users.forEach(function (user, i) {
                $('.pts-task-assign-users-list').append('<option class="pts-task-assign-user-option" value="' + i + '" data-user="' + user.name + '">' + user.name + '</option>');
            });

            $.each(task.users, function (i) {
                var user = settings.users[i];
                var $head = ['<hr><div class="pts-toolbox-user" data-user="' + user.index + '">',
                    '<h4 class=" text-semibold heading-divided">' + user.name + '</h4>',
                    '<table><tbody class="pts-toolbox-user-list" data-head="' + user.index + '"></tbody></table></div>'].join('\n');
                $('#pts-toolbox-container > .panel-body').append($head);
                user.tasks.forEach(function (_task, taskIndex) {
                    if (_task.id === task.id) {
                        var $userTasks =    ['<tr><td><i class="glyphicon glyphicon-trash pts-task-assign-delete-user" data-user="' + user.index + '" data-task="' + _task.id + '" data-task-index="' + taskIndex + '"></i>',
                            '<b>' + settings.i18n.from + '</b> ' + moment(_task.start_date).locale(settings.locale).format('llll'),
                            ' <b>' + settings.i18n.to + '</b> ' + moment(_task.end_date).locale(settings.locale).format('llll') + '</td></tr>'].join('\n');
                        $('.pts-toolbox-user-list[data-head=' + user.index + ']').append($userTasks);
                    }
                });
            });
            getContrastedColor();
        };

        /**
         * Generates the user creation structure of the info box
         */
        var generateToolboxContentCreateUser = function () {
            log.info('CALL FUNCTION: generateToolboxContentCreateUser');

            var $content = ['<div class="panel-body">',
                '<h4 class="text-semibold pts-toolbox-title pts-close-toolbox pts-check-color" style="background-color:' + settings.defaultColor + '">' + settings.i18n.addNewUser,
                '<i class="glyphicon glyphicon-remove pull-right"></i></h4>',
                '<fieldset>',
                '<div class="form-group"><label>' + settings.i18n.name + ' <small>(' + settings.i18n.required + ')</small> :</label>',
                '<input id="pts-add-user-input-name" type="text" class="form-control" maxlength="40">',
                '<div id="pts-add-user-err-name" style="color:red"></div></div>',
                '<div class="form-group"><label>' + settings.i18n.group + ' :</label>',
                '<input id="pts-add-user-input-group" type="text" class="form-control" maxlength="60" placeholder="' + settings.i18n.createNewGroup + '">',
                '<span>' + settings.i18n.or + '</span><select id="pts-add-user-select-group" type="select" class="form-control" maxlength="60">',
                '<option disabled selected>' + settings.i18n.selectGroup + '</option></select></div>',
                '<div class="btn-group">',
                '<button type="button" class="pts-close-toolbox btn btn-danger">' + settings.i18n.cancel + '</button>',
                '<button type="button" class="btn pts-create-user-btn" style="background-color:#00BCD4;color:#fff" data-assign="true">' + settings.i18n.createAndAssign + '</button>',
                '<button type="button" class="btn pts-create-user-btn" style="background-color:#0097A7;color:#fff" data-assign="false">' + settings.i18n.create + '</button></div>',
                '</fieldset>',
                '</div>'].join('\n');
            $('#pts-toolbox-container').append($content);
            settings.groups.forEach(function (e) {
                $('#pts-add-user-select-group').append('<option value="' + e + '">' + e + '</option>');
            });
        };

        /**
         * Generates the user edition structure of the info box
         * @param {Object} user
         */
        var generateToolboxContentEditUser = function (user) {
            log.info('CALL FUNCTION: generateToolboxContentEditUser');

            if (!user) return;
            var $content = ['<div class="panel-body">',
                '<h4 class="text-semibold pts-toolbox-title pts-close-toolbox pts-check-color" style="background-color:' + settings.defaultColor + '">' + user.name + ' - <small style="color:#fff">' + user.group + '</small>',
                '<i class="glyphicon glyphicon-remove pull-right"></i></h4>',
                '<h4><i class="glyphicon glyphicon-chevron-left pull-left pts-toolbox-back-btn" data-target="user" data-user="' + user.index + '"></i>' + settings.i18n.editUser + '</h4><fieldset>',
                '<div class="form-group"><label>' + settings.i18n.name + ' <small>(' + settings.i18n.required + ')</small> :</label>',
                '<input id="pts-edit-user-input-name" type="text" class="form-control" maxlength="40" value="' + user.name + '">',
                '<div id="pts-edit-user-err-name" style="color:red"></div></div>',
                '<div class="form-group"><label>' + settings.i18n.group + ' :</label>',
                '<input id="pts-edit-user-input-group" type="text" class="form-control" maxlength="60" placeholder="' + settings.i18n.createNewGroup + '" value="' + user.group + '">',
                '<span>' + settings.i18n.or + '</span><select id="pts-edit-user-select-group" type="select" class="form-control" maxlength="60">',
                '<option disabled selected>' + settings.i18n.selectGroup + '</option></select></div>',
                '<div class="btn-group">',
                '<button type="button" class="pts-close-toolbox btn btn-danger">' + settings.i18n.cancel + '</button>',
                '<button type="button" class="btn pts-edit-user-confirm-btn" style="background-color:#00BCD4;color:#fff" data-user="' + user.index + '">' + settings.i18n.edit + '</button>',
                '</fieldset>',
                '</div>'].join('\n');
            $('#pts-toolbox-container').append($content);
            settings.groups.forEach(function (e) {
                $('#pts-edit-user-select-group').append('<option value="' + e + '">' + e + '</option>');
            });
        };

        /**
         * Generates the user assignation structure of the info box
         * @param {Object} user
         */
        var generateToolboxContentAssignUser = function (user) {
            log.info('CALL FUNCTION: generateToolboxContentAssignUser');

            var $content = ['<div class="panel-body">',
                '<h4 class="pts-check-color text-semibold pts-toolbox-title pts-close-toolbox" style="background-color:' + settings.defaultColor + '" data-update="true">',
                user.name + ' - <small style="color:#fff">' + user.group + '</small>',
                '<i class="glyphicon glyphicon-remove pull-right"></i></h4>',
                '<h4><i class="glyphicon glyphicon-chevron-left pull-left pts-toolbox-back-btn" data-target="user" data-user="' + user.index + '"></i>' + settings.i18n.assignUserTitle + '</h4>',
                '<div class="form-group"><label for="sel42">' + settings.i18n.selectTasksToAssign + ' : </label>',
                '<select multiple="" class="form-control pts-user-assign-tasks-list" id="sel42"></select></div>',
                '<b>' + settings.i18n.from + '</b><div class="input-group date pts-datetimepicker-start" id="pts-user-assign-datepicker-start">',
                '<input type="text" class="form-control"/>',
                '<span class="input-group-addon">',
                '<span class="glyphicon glyphicon-calendar"></span>',
                '</span></div>',
                '<b>' + settings.i18n.to + '</b><div class="input-group date pts-datetimepicker-end" id="pts-user-assign-datepicker-end">',
                '<input type="text" class="form-control"/>',
                '<span class="input-group-addon">',
                '<span class="glyphicon glyphicon-calendar"></span>',
                '</span></div><div id="pts-assign-user-err" style="color:red"></div><br><div class="pull-right">',
                '<button id="pts-user-assign-btn" class="btn pts-check-color" style="background-color:#00BCD4" data-user="' + user.index + '">' + settings.i18n.assign + '</button></div>',
                '<br><br><div class="pts-toolbox-user-list"></div></div>'].join('\n');

            $('#pts-toolbox-container').append($content);
            $('#pts-user-assign-datepicker-start').datetimepicker().data('DateTimePicker').locale(settings.locale).widgetPositioning({horizontal: 'left', vertical: 'bottom'}).keepOpen(false);
            $('#pts-user-assign-datepicker-end').datetimepicker().data('DateTimePicker').locale(settings.locale).widgetPositioning({horizontal: 'left', vertical: 'bottom'}).keepOpen(false);

            settings.tasks.forEach(function (task, i) {
                $('.pts-user-assign-tasks-list').append('<option class="pts-user-assign-task-option" value="' + task.id + '" data-task="' + task.id + '">' + task.name + '</option>');
            });

            var sortedTasks = {};
            user.tasks.forEach(function (e, i) {
                if (!sortedTasks[e.id]) {
                    sortedTasks[e.id] = [];
                }
                sortedTasks[e.id].push('<i class="glyphicon glyphicon-trash pts-task-assign-delete-user" data-user="' + user.index + '" data-task="' + e.id + '" data-task-index="' + i + '"></i>' +
                    '<b>' + settings.i18n.from + '</b> ' + moment(e.start_date).locale(settings.locale).format('lll') + '  <b>' + settings.i18n.to + '</b> ' + moment(e.end_date).locale(settings.locale).format('lll'));
            });

            $.each(sortedTasks, function (i, _task) {
                var originalTask = getTaskById(i);
                var $line = ['<p class="pts-check-color progress-bar-striped pts-toolbox-task-header" style="background-color:' +originalTask.color + ';margin-top:10px" data-task="' + i + '" data-user="' + user.index + '"><b>',
                    originalTask.name + '</b></p><table style="position: relative;left:30px;"><tbody class="pts-user-sorted-task" data-task="' + i + '" class="pts-toolbox-user-list" data-head="' + user.index + '">',
                    '</tbody></table>'].join('\n');
                $('.pts-toolbox-user-list').append($line);
                _task.forEach(function (_line) {
                    $('.pts-user-sorted-task[data-task=' + i + ']').append('<tr><td>' + _line + '</td></tr>');
                });
            });


            getContrastedColor();
        };

        /**
         * Generates the see all structure of the info box
         */
        var generateToolboxContentSeeAll = function () {
            log.info('CALL FUNCTION: generateToolboxContentSeeAll');

            var $content =  ['<div class="panel-body">',
                '<h4 class="text-semibold pts-toolbox-title pts-close-toolbox pts-check-color" style="background-color:' + settings.defaultColor + '" data-update="true">' + settings.i18n.seeAll,
                '<i class="glyphicon glyphicon-remove pull-right"></i></h4>',
                '<h4>' + settings.i18n.users + ' (' + settings.users.length + ')</h4><div class="pts-toolbox-user-list"></div>',
                '<h4>' + settings.i18n.tasks  + ' (' + settings.tasks.length + ')</h4><div class="pts-toolbox-task-list"></div></div>'].join('\n');

            $('#pts-toolbox-container').append($content);

            settings.tasks.forEach(function (task) {
                var length = getLength(task.users);
                var $taskLine = ['<p class="pts-check-color progress-bar-striped pts-toolbox-task-header" style="background-color:' + task.color + ';margin-top:10px" data-task="' + task.id + '"><b>',
                    task.name + '</b> - ' + length + ' ' + (length> 1 ? settings.i18n.assignedUsers : settings.i18n.assignedUser) + '</p>'].join('\n');
                $('.pts-toolbox-task-list').append($taskLine);
            });

            settings.users.forEach(function (user) {
                var length = user.tasks.length;
                var $taskLine = ['<p class="pts-check-color pts-toolbox-user-header" style="background-color:' + settings.defaultColor + ';margin-top:10px" data-user="' + user.index + '"><b>',
                    user.name + '</b> - ' + user.tasks.length + ' ' + (length > 1 ? settings.i18n.allocations : settings.i18n.allocation) + '</p>'].join('\n');
                $('.pts-toolbox-user-list').append($taskLine);
            });

            getContrastedColor();
        };

        /**
         * Generates the list view main structure
         */
        var generateListBaseView = function () {
            log.info('CALL FUNCTION: generateListBaseView');

            if (!settings.list) settings.list = {};
            settings.list.display = 'today';
            var $columnContainer =  ['<button class="btn btn-sm pts-list-range-btn" data-value="all">' + settings.i18n.all + '</button>',
                '<button class="btn btn-sm pts-list-range-btn selected" data-value="today">' + settings.i18n.today + '</button>',
                '<button class="btn btn-sm pts-list-range-btn" data-value="week">' + settings.i18n.thisWeek + '</button>',
                '<button class="btn btn-sm pts-list-range-btn" data-value="month">' + settings.i18n.thisMonth + '</button>',
                '<button class="btn btn-sm pts-list-range-btn" data-value="year">' + settings.i18n.thisYear + '</button>',
                '<button class="btn btn-sm pts-list-range-btn" data-value="personalized">' + settings.i18n.personalized + '</button>',
                '<div class="pts-list-personalized-inputs-container row"></div>'].join('\n');

            var $dropdownMenu =     ['<div class="dropdown" style="top:2px"><button id="addDropdown" class="btn btn-sm pts-btn-add-elem dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
                '<i class="glyphicon glyphicon-plus"></i></button>',
                '<ul class="dropdown-menu" aria-labelledby="addDropdown">',
                '<li><a href="#" class="pts-add-new-task">' + settings.i18n.addNewTask + '</a></li>',
                '<li><a href="#" class="pts-add-new-user">' + settings.i18n.addNewUser + '</a></li></ul></div>'].join('\n');
            $('.pts-column-title-container > div').append($columnContainer);
            $('.pts-corner-mask').append($dropdownMenu);
            var $headerInputs = ['<input class="pts-list-search-task" placeholder="' + settings.i18n.search + '">',
                '<label class="checkbox-inline text-no-select" style="margin-left:5px;"><input id="pts-list-task-select-all" type="checkbox" checked="checked">' + settings.i18n.selectAll + '</label>'].join('\n');
            $('.pts-line-title-container').append($headerInputs);
            settings.tasks.forEach(function (_task) {
                var $taskLabel =    ['<div class="pts-list-row-task progress-bar-striped pts-check-color" style="background-color:' + _task.color + '">',
                    '<label class="checkbox-inline"><input class="pts-list-task-enabler-input" type="checkbox" checked="checked" data-task="' + _task.id + '">' + _task.name + '</label></div>'].join('\n');
                $('.pts-line-title-container').append($taskLabel);
            });

            $('.pts-main-content').empty().append('<div class="pts-list-tasks-container row"></div>');
            getContrastedColor();
        };

        /**
         * Generates the date range picker of the list view
         */
        var generateRangePicker = function () {
            log.log('CALL FUNCTION: generateRangePicker');

            $('.pts-list-range-btn').css('display', 'none');
            var $rangeSelector =    ['<div class="col-sm-5"><span>' + settings.i18n.from + '</span><div class="input-group date pts-datetimepicker-start" id="pts-list-datetimepicker-start">',
                '<input type="text" class="form-control"/>',
                '<span class="input-group-addon">',
                '<span class="glyphicon glyphicon-calendar"></span>',
                '</span></div></div>',
                '<div class="col-sm-5"><span>' + settings.i18n.to + '</span><div class="input-group date pts-datetimepicker-end" id="pts-list-datetimepicker-end">',
                '<input type="text" class="form-control"/>',
                '<span class="input-group-addon">',
                '<span class="glyphicon glyphicon-calendar"></span>',
                '</span></div></div>',
                '<div class="col-sm-2"><button class="btn pts-list-range-submit btn-icon"><i class="glyphicon glyphicon-ok"></i></button>',
                '<button class="btn pts-list-range-dismiss btn-danger btn-icon"><i class="glyphicon glyphicon-remove"></i></button></div>'].join('\n');
            $('.pts-list-personalized-inputs-container').append($rangeSelector);
            $('#pts-list-datetimepicker-start').datetimepicker().data('DateTimePicker').locale(settings.locale);
            $('#pts-list-datetimepicker-end').datetimepicker().data('DateTimePicker').locale(settings.locale);
        };

        /**
         * Generates a task box in the list view
         * @param {Object} task
         */
        var generateListTaskContent = function (task) {
            log.log('CALL FUNCTION: generateListTaskContent');

            var totalCycle = 0,
                thisCycle = 0,
                totalUsers = 0,
                thisUsers = 0;

            var $tag = (task.tag ? ' <span class="label label-default pts-check-color" style="background-color:' + task.tagColor  + '">' + task.tag + '</span><br>' : '');
            var $container =    ['<div class="col-lg-12 pts-list-task-container" data-task="' + task.id + '">',
                '<div class="panel panel-primary" style="border-color:' + task.color + '">',
                '<div class="panel-heading progress-bar-striped pts-check-color pts-list-task-header" style="background-color:' + task.color + ';border-color:' + task.color + '"',
                'data-task="' + task.id + '">',
                '<h6 class="panel-title">' + task.name + $tag + '</h6>',
                '<a class="heading-elements-toggle"><i class="icon-menu"></i></a></div>',
                '<div class="panel-body">' + (task.description ? task.description : '') + '</div>',
                '<div class="panel-body"><div class="table-responsive">',
                '<table class="table table-bordered"><tbody class="pts-list-date-list" data-task="' + task.id + '"></tbody></table>',
                '</div></div><div class="panel-footer pts-list-task-footer"></div></div></div>'].join('\n');
            $('.pts-list-tasks-container').append($container);

            $.each(task.users, function (i, user) {
                totalCycle += user.length;
                totalUsers++;
                var $elem = $(document.createElement('tr'));
                $elem.append('<td class="pts-list-user-name" data-user="' + i + '">' + settings.users[i].name + '</td><td class="pts-dt-list"></td>');
                var isInCycle = false;
                user.forEach(function (iTask) {
                    if (isDateInDate(settings.list, settings.users[i].tasks[iTask]) || settings.list.display === 'all') {
                        $elem.children('.pts-dt-list').append('- <b>' + settings.i18n.from + '</b> ' + moment(settings.users[i].tasks[iTask].start_date).locale(settings.locale).format('lll') +
                            '<b> ' + settings.i18n.to + '</b> ' + moment(settings.users[i].tasks[iTask].end_date).locale(settings.locale).format('lll') + '<br>');
                        if (isInCycle == false) thisUsers++;
                        isInCycle = true;
                        thisCycle++;
                    }
                });
                if (isInCycle) {
                    $('.pts-list-date-list[data-task=' + task.id + ']').append($elem);
                }
            });
            if (thisUsers === 0 || thisCycle === 0) {
                $('.pts-list-task-container[data-task=' + task.id + ']').remove();
            }

            var $footer =   ['<p><b>' + totalUsers + '</b> ' + settings.i18n.usersWhose + ' <b>' + thisUsers + '</b> ' + settings.i18n.inSelectedPeriod + '</p>',
                '<p><b>' + totalCycle + '</b> ' + settings.i18n.cycleWhose + ' <b>' + thisCycle + '</b> ' + settings.i18n.inSelectedPeriod + '</p>'].join('\n');
            $('.pts-list-task-container[data-task=' + task.id + '] .pts-list-task-footer').append($footer);

            getContrastedColor();
        };

        /**
         * Generates the filters structure of the info box
         */
        var generateToolboxContentFilters = function () {
            var $content =  [
                '<div class="panel-body">',
                '<h4 class="text-semibold pts-toolbox-title pts-close-toolbox pts-check-color" style="background-color:' + settings.defaultColor + '" data-update="true">' + settings.i18n.filters,
                '<button class="btn btn-danger btn-xs pts-filters-delete-all">' + settings.i18n.deleteAll + '</button>',
                '<i class="glyphicon glyphicon-remove pull-right"></i></h4>',
                '<button class="btn pts-check-color pts-create-filter" style="background-color:' + settings.defaultColor + ';margin-bottom:20px">',
                '<i class="glyphicon glyphicon-plus"></i> ' + settings.i18n.addFilter + '</button>',
                '<div class="pts-toolbox-filters-list"></div></div>'].join('\n');

            $('#pts-toolbox-container').append($content);
            settings.filters.forEach(function (filter) {
                generateNewFilter(filter);
            });
        };

        /**
         * Generate a new filter container
         * @param {Object} filter: optional object to create a filter from an existing model
         */
        var generateNewFilter = function (filter) {
            var filterId = (filter ? filter.id : generateRandomId()),
                $active = (filter ? '<b style="color:green"><i class="glyphicon glyphicon-ok"></i> ' + settings.i18n.active + '</b>' :
                '<b style="color:red"><i class="glyphicon glyphicon-remove"></i> ' + settings.i18n.inactive + '</b>'),
                $content = [
                '<div class="pts-filter-container row" data-filter="' + filterId + '"><p>' + $active + '</p>',
                '<div class="col-lg-12" style="margin-bottom: 10px"><select class="form-control pts-filter-target" data-filter="' + filterId + '">',
                '<option value="task" ' + (filter && filter.target == 'task' ? 'selected="selected"' : '') + '>' + settings.i18n.tasks + '</option>',
                '<option value="user" ' + (filter && filter.target == 'user' ? 'selected="selected"' : '') + '>' + settings.i18n.users + '</option>',
                '<option value="tag" ' + (filter && filter.target == 'tag' ? 'selected="selected"' : '') + '>' + settings.i18n.tags + '</option>',
                '</select></div><div class="col-lg-12">',
                '<div class="input-group" data-filter="' + filterId + '"><div class="input-group-btn">',
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="position:relative;bottom:2px;">',
                (filter && filter.type == 'out' ? settings.i18n.notContains : settings.i18n.contains) + ' <span class="caret"></span></button>',
                '<ul class="dropdown-menu"><li><a class="pts-filter-switch" data-target="in" href="#">' + settings.i18n.contains + '</a></li>',
                '<li><a class="pts-filter-switch" data-target="out" href="#">' + settings.i18n.notContains + '</a></li></ul></div>',
                '<input type="text" class="form-control pts-filter-value" data-contains="' + (filter && filter.type == 'out' ? 'out' : 'in') + '" value="' + (filter ? filter.value : '') + '"></div>',
                '<div class="pts-filter-err" style="color:red"></div></div>',
                '<div class="btn-group">',
                '<button type="button" class="pts-delete-filter-btn btn btn-danger" data-filter="' + filterId + '">' + settings.i18n.remove + '</button>',
                '<button type="button" class="btn pts-submit-filter-btn pts-check-color" style="background-color:' + settings.defaultColor + '" data-filter="' + filterId + '">',
                settings.i18n.confirm + '</button></div></div>'
            ].join('\n');
            $('.pts-toolbox-filters-list').prepend($content);
            getContrastedColor();
        };

        /**
         * Generates a notification and call a callback function if the process is not broken
         * @param {String} origin: The notification type (danger, success, info, warning)
         * @param [String} message: The content of the notification
         * @param {Object} undo: Contains the backup data in case of interruption from the user
         * @param {Function} callback: A function to be called after the notification if there was no interruption
         */
        var generateNotification = function (origin, message, undo, callback) {
            log.info('CALL FUNCTION: generateNotification');

            if (settings.disableNotifications) return;
            var uniqueId = generateRandomId();
            var $undoLink = '';

            if (undo && undo.groups && undo.tasks && undo.users) {
                $undoLink = '<a href="#" data-notification="' + uniqueId + '" class="pts-notif-undo-btn">' + settings.i18n.cancel + '</a>';
                settings.undo[uniqueId] = undo;
            }

            var $notification = ['<div class="animated fadeIn alert alert-' + origin + ' alert-dismissible" role="alert" data-id="' + uniqueId + '">',
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>',
                message + ' ' + '</div>'].join('\n');
            $('#pts-notification-container').html($notification);
            $('.alert[data-id=' + uniqueId + ']').append($undoLink);

            setTimeout(function(){
                $('.alert[data-id=' + uniqueId + ']').remove();
                if (settings.undo[uniqueId]) {
                    if (callback && typeof callback === 'function') {
                        callback(settings);
                    }
                    if (settings.onChange && typeof settings.onChange === 'function') {
                        settings.onChange(settings);
                    }
                }
                settings.undo = [];
            },settings.notificationDuration);
        };

        /**
         * Generate the box that allows to edit a task assignation
         * @param $elem: the element from where the event is called
         * @param user
         * @param task
         * @param taskIndex
         */
        var generateTaskAssignationEdition = function ($elem, user, task, taskIndex) {
            var $inputBox = [
                '<div class="col-sm-10 row"><div class="col-sm-12" style="display:inline-flex"><label for="pts-list-datetimepicker-start" style="right:10px;position: relative;">' + settings.i18n.from + '</label>',
                '<div class="input-group date pts-datetimepicker-start" id="pts-list-datetimepicker-start" data-update="no" style="margin-bottom:6px">',
                '<input type="text" class="form-control"/>',
                '<span class="input-group-addon">',
                '<span class="glyphicon glyphicon-calendar"></span>',
                '</span></div></div>',
                '<div class="col-sm-12" style="display:inline-flex"><label for="pts-list-datetimepicker-end" style="right:10px;position: relative;">' + settings.i18n.to + '</label>',
                '<div class="input-group date pts-datetimepicker-end" id="pts-list-datetimepicker-end">',
                '<input type="text" class="form-control" />',
                '<span class="input-group-addon">',
                '<span class="glyphicon glyphicon-calendar"></span>',
                '</span></div></div>' +
                '<div class="pts-edit-assignation-err" style="color:red"></div></div>',
                '<div class="col-sm-2"><button class="btn btn-success pts-edit-assignation-submit btn-icon" ' +
                'data-task="' + task.id + '" data-user="' + user.index + '" data-task-index="' + taskIndex + '">',
                '<i class="glyphicon glyphicon-ok"></i></button>',
                '<button class="btn pts-edit-assignation-dismiss btn-danger btn-icon"><i class="glyphicon glyphicon-remove"></i></button></div>'].join('\n');

            $elem.parent().parent().after('<tr><td><div class="pts-edit-assignation-box row">' + $inputBox + '</div></td></tr>');
            $('.pts-datetimepicker-end').datetimepicker().data('DateTimePicker')
                .locale(settings.locale)
                .widgetPositioning({horizontal: 'right', vertical: 'bottom'})
                .date(moment(task.end_date))
                .viewDate(moment(task.end_date))
                .defaultDate(moment(task.end_date))
                .minDate(moment(task.start_date))
                .keepOpen(false);
            $('.pts-datetimepicker-start').datetimepicker().data('DateTimePicker')
                .locale(settings.locale)
                .widgetPositioning({horizontal: 'left', vertical: 'bottom'})
                .date(moment(task.start_date))
                .viewDate(moment(task.start_date))
                .defaultDate(moment(task.start_date))
                .keepOpen(false);
        };


        /********* Initialization *********/

        getUsersTasksInTasks();
        generateHeader();
        updateDisplay(settings.currentDisplay);

        /********* Events *********/

        $(document).on('mouseup', function(){
            if (settings.resize.count) {
                $('.pts-task-tooltip').remove();
                resizeTask();
            }
        });
        $(document).on('mousemove', function (e) {
            if (settings.resize.timeout > 0 && (e.pageX > settings.resize.origin + 60 || e.pageX < settings.resize.origin - 60)) {
                moveTaskResize(e);
            }
        });
        $(window).bind('beforeunload', function(){
            if ($('.alert').length > 0)
                return 'Ongoing process, please wait a few seconds and retry';
        });

        $('.pts-btn-day-view').click( function () {
            updateDisplay('days');
        });
        $('.pts-btn-month-view').click( function () {
            updateDisplay('months');
        });
        $('.pts-btn-list-view').click( function () {
            updateDisplay('list');
        });
        $('.pts-btn-next').click(function () {

            spinner().show();
            setTimeout(function () {
                $('.pts-scheduler-container').scrollTop(0);
                goForward();
                spinner().hide();
            }, 0);
        });
        $('.pts-btn-previous').click(function () {
            spinner().show();
            setTimeout(function () {
                $('.pts-scheduler-container').scrollTop(0);
                goBackward();
                spinner().hide();
            }, 0);
        });
        $('#header-datetimepicker').on('dp.change', function (e) {
            if (e.date === settings.date.selected) return;
            settings.date.selected = e.date;
            updateDisplay(settings.currentDisplay);
            generateTableLines();
            generateGroupMainContent();
            generateUsersList();
        });
        $('.pts-scheduler-container').scroll(function () {
            $('.pts-line-title-container div').scrollTop($(this).scrollTop());
            $('.pts-column-title-container ').scrollLeft($(this).scrollLeft());
            setTaskLabelPosition();
        });

        $scheduler
            .on('click', '.close-group-panel', function () {
            var $usersPanel = $('#group-container-' + $(this).attr('data-group'));
            var $groupPanel = $('#user-group-' + $(this).attr('data-group'));
            if ($(this).attr('data-toggle') === 'opened') {
                $usersPanel.children('.pts-main-group-user').css('display', 'none');
                $groupPanel.children('.pts-group-content').css('display', 'none');
                $(this).attr('data-toggle', 'closed');
                $(this).addClass('closed-btn');
            } else {
                $usersPanel.children('.pts-main-group-user').css('display', 'block');
                $groupPanel.children('.pts-group-content').css('display', 'block');
                $(this).attr('data-toggle', 'opened');
                $(this).removeClass('closed-btn');
            }
        })
            .on('click', '.pts-column-element[data-date]', function () {
            settings.date.selected = moment($(this).attr('data-date'));
            updateDisplay('days');
            generateTableLines();
            generateGroupMainContent();
        })
            .on('click', '.pts-close-toolbox', function () {
            if ($(this).data('update') == true) {
                updateDisplay(settings.currentDisplay);
            } else {
                closeToolbox();
            }
        })
            .on('click', ' .pts-show-user[data-user]', function () {
                openToolbox(null, $(this).data('user'), 'user');
            })
            .on('click', '.pts-toolbox-task-header[data-task]', function () {
                openToolbox($(this).data('task'), null, 'task');
            })
            .on('click', '.pts-toolbox-user-header[data-user]', function () {
                openToolbox(null, $(this).data('user'), 'user');
            })
            .on('click', '#pts-list-task-select-all', function () {
                $('.pts-list-task-enabler-input').prop('checked', $(this).context.checked);
                switchListRange(settings.list.display);
            })
            .on('click', '.pts-list-task-enabler-input',  function () {
                var checked = true;
                $('.pts-list-task-enabler-input').each(function () {
                    if ($(this).prop('checked') == false) {
                        checked = false;
                    }
                });
                if (checked == false) {
                    $('#pts-list-task-select-all').prop('checked', false);
                } else  {
                    $('#pts-list-task-select-all').prop('checked', true);
                }
                switchListRange(settings.list.display);
            })
            .on('click', '.pts-list-range-btn[data-value]', function () {
                var range = $(this).data('value');
                settings.list.display = range;
                $('.pts-list-personalized-inputs-container').empty();
                $('.pts-list-range-btn').removeClass('selected');
                $(this).addClass('selected');
                if (range !== 'personalized') {
                    switchListRange(range);
                } else {
                    generateRangePicker();
                }
            })
            .on('click', '.pts-list-range-submit', function () {
            settings.list.start_date = $('#pts-list-datetimepicker-start').data('DateTimePicker').date();
            settings.list.end_date = $('#pts-list-datetimepicker-end').data('DateTimePicker').date();
            $('.pts-list-personalized-inputs-container').empty();
            $('.pts-list-range-btn').css('display', 'block');
            if (!settings.list.start_date || ! settings.list.end_date) return $('.pts-list-range-btn').removeClass('selected');
            switchListRange('personalized');
        })
            .on('click', '.pts-list-range-dismiss', function () {
            $('.pts-list-personalized-inputs-container').empty();
            $('.pts-list-range-btn').css('display', 'block');
            $('.pts-list-range-btn').removeClass('selected');
        })
            .on('click', '.pts-list-user-name[data-user]', function () {
            openToolbox(null, $(this).data('user'), 'user');
        })
            .on('click', '.pts-add-new-task', function () {
            openToolbox(null, null, "createTask");
        })
            .on('click', '.pts-add-new-user', function () {
            openToolbox(null, null, "createUser");
        })
            .on('click', '.pts-create-task-btn', function () {
            var name = $('#pts-add-task-input-name').val(),
                id = $('#pts-add-task-input-id').val(),
                description = $('#pts-add-task-input-description').val(),
                color = $('#pts-add-task-input-color').val(),
                tag = {
                    name: $('#pts-add-task-input-tag').val(),
                    color: $('#pts-add-task-input-tagColor').val()
                };

            $('#pts-add-task-err-name').html('');
            $('#pts-add-task-err-id').html('');
            $.each(settings.tasks, function (i, e) {
                if (e.name == name) {
                    $('#pts-add-task-err-name').html(settings.i18n.nameAlreadyTaken);
                    name = '';
                }
                if (e.id == id) {
                    $('#pts-add-task-err-id').html(settings.i18n.idAlreadyTaken);
                    name = '';
                }
            });
            if (name.length < 1) return;
            closeToolbox();
            createNewTask(name, id, description, color, tag, $(this).data('assign'));
        })
            .on('click', '.pts-create-user-btn', function () {
            var name = $('#pts-add-user-input-name').val(),
                group = $('#pts-add-user-input-group').val();
            $('#pts-add-user-err-name').html('');
            if (name.length < 1) return $('#pts-add-user-err-name').html(settings.i18n.requiredField);
            closeToolbox();
            createNewUser(name, group, $(this).data('assign'));
        })
            .on('click', '.pts-delete-task-btn[data-task]', function () {
            var $button = $(this);

            if ($button.attr('data-confirm') == 'false') {
                $button.text(settings.i18n.confirm);
                $button.attr('data-confirm', true);
                setTimeout(function () {
                    $button.text(settings.i18n.remove);
                    $button.attr('data-confirm', false);
                }, 2000);
                return;
            }
            removeTask($button.data('task'));
        })
            .on('click', '.pts-assign-task-btn', function () {
            openToolbox($(this).data('task'), null, 'assignTask');
        })
            .on('click', '#pts-task-assign-btn[data-task]', function () {
            var start_date = $('.pts-datetimepicker-start').data('DateTimePicker').date(),
                end_date = $('.pts-datetimepicker-end').data('DateTimePicker').date(),
                users = $('.pts-task-assign-users-list').val(),
                task = getTaskById($(this).data('task'));
            if (users && start_date && end_date) {
                assignUsersToTask(users, task, start_date, end_date);
            } else {
                $('#pts-assign-task-err').text(settings.i18n.allInputRequired);
            }
        })
            .on('click', '#pts-user-assign-btn[data-user]', function () {
            var start_date = $('.pts-datetimepicker-start').data('DateTimePicker').date(),
                end_date = $('.pts-datetimepicker-end').data('DateTimePicker').date(),
                tasks = $('.pts-user-assign-tasks-list').val(),
                user = settings.users[$(this).data('user')];

            if (user && tasks && start_date && end_date) {
                assignTasksToUser(user, tasks, start_date, end_date);
            } else {
                $('#pts-assign-user-err').text(settings.i18n.allInputRequired);
            }
        })
            .on('click', '.pts-main-group-user, .pts-scheduler-container', function (e) {
            if (e.target !== this || $('#pts-toolbox-container[data-toggle=opened]').length <= 0) return;
            if ($('.pts-close-toolbox').data('update') == true) {
                updateDisplay(settings.currentDisplay);
            } else {
                closeToolbox();
            }
        })
            .on('click', '.pts-task-assign-delete-user[data-user][data-task][data-task-index]', function () {
            var userIndex = $(this).data('user'),
                task = getTaskById($(this).data('task')),
                taskIndex = $(this).data('task-index');

            if (settings.users[userIndex].tasks[taskIndex].id == task.id) {
                deleteTaskFromUser(settings.users[userIndex], task, taskIndex);
                $(this).parent('td').remove();
            }

        })
            .on('click', '.pts-edit-task-btn[data-task]', function () {
            openToolbox($(this).data('task'), null, 'editTask');
        })
            .on('click', '.pts-edit-task-confirm-btn[data-task]', function () {
            var task = getTaskById($(this).data('task')),
                newData = {};

            newData.name = $('#pts-edit-task-input-name').val();
            newData.color = $('#pts-edit-task-input-color').val();
            newData.description = $('#pts-edit-task-input-description').val();
            newData.tag = $('#pts-edit-task-input-tag').val();
            newData.tagColor = $('#pts-edit-task-input-tagColor').val();
            editTask(task, newData);
        })
            .on('click', '.pts-toolbox-back-btn[data-target]', function () {
            openToolbox($(this).data('task'), $(this).data('user'), $(this).data('target'));
        })
            .on('click', '.pts-delete-user-btn[data-user]', function () {
            var $button = $(this),
                user = settings.users[$button.data('user')];

            if ($button.attr('data-confirm') == 'false') {
                $button.text(settings.i18n.confirm);
                $button.attr('data-confirm', true);
                setTimeout(function () {
                    $button.text(settings.i18n.remove);
                    $button.attr('data-confirm', false);
                }, 2000);
                return;
            }
            if (user) {
                removeUser(user);
            }
        })
            .on('click', '.pts-edit-user-btn[data-user]', function () {
            openToolbox(null, $(this).data('user'), 'editUser');
        })
            .on('click', '.pts-assign-user-btn[data-user]', function () {
            openToolbox(null, $(this).data('user'), 'assignUser');
        })
            .on('click', '.pts-edit-user-confirm-btn[data-user]', function () {
            var newData = {};

            newData.name = $('#pts-edit-user-input-name').val();
            newData.group = $('#pts-edit-user-input-group').val();
            if (newData.name.length <= 1) return $('#pts-edit-user-err-name').html(settings.i18n.requiredField);
            editUser($(this).data('user'), newData);
        })
            .on('click', '.pts-button-see-all', function (e) {
            e.stopPropagation();
            openToolbox(null, null, 'seeAll');
        })
            .on('click', '.pts-notif-undo-btn[data-notification]', function (e) {
            e.stopPropagation();
            var notifId = $(this).data('notification'),
                undo = settings.undo[notifId];
            if (undo) {
                settings.tasks = undo.tasks;
                settings.users = undo.users;
                settings.groups = undo.groups;
                getUsersTasksInTasks();
                initUsers();
                initGroup();
                updateDisplay(settings.currentDisplay);
                $('.alert[data-id=' + notifId + ']').remove();
            }
        })
            .on('click', '.pts-user-edit-task[data-task][data-user]', function (e) {
                $('td').css('display', 'table-cell');
                $(this).parent().css('display', 'none');
                $('.pts-edit-assignation-box').remove();

                var user = settings.users[$(this).data('user')],
                    task = user.tasks[$(this).data('task-index')];
                if (!task || task.id !== $(this).data('task')) return;
                generateTaskAssignationEdition($(this), user, task, $(this).data('task-index'));
            })
            .on('click', '.pts-edit-assignation-submit[data-task][data-user][data-task-index]', function (e) {
                var user = settings.users[$(this).data('user')],
                    task = user.tasks[$(this).data('task-index')],
                    taskIndex = $(this).data('task-index');
                editTaskAssignation(user, task, taskIndex);
            })
            .on('click', '.pts-edit-assignation-dismiss', function (e) {
                $('td').css('display', 'table-cell');
                $('.pts-edit-assignation-box').remove();
            })
            .on('click', '.pts-open-filters-menu', function (e) {
                openToolbox(null, null, 'filters');
            })
            .on('click', '.pts-create-filter', function (e) {
               generateNewFilter();
            })
            .on('click', '.pts-filter-switch[data-target]', function (e) {
               var target = $(this).data('target'),
                   $parent = $(this).closest('.input-group-btn'),
                   $input = $parent.parent().children('input.pts-filter-value'),
                   $button = $parent.children('button.dropdown-toggle');
                $button.html((target == 'in' ? settings.i18n.contains : settings.i18n.notContains) + ' <span class="caret"></span>');
                $input.data('contains', target);

            })
            .on('click', '.pts-submit-filter-btn[data-filter]', function () {
                var $parent = $('.input-group[data-filter=' + $(this).data('filter') + ']'),
                    filter = {
                        id: $(this).data('filter'),
                        target: $('.pts-filter-target[data-filter=' + $(this).data('filter') + ']').val(),
                        value: $parent.children('input.pts-filter-value').val(),
                        type: $parent.children('input.pts-filter-value').data('contains')
                };
                if (!filter.value) {
                    return $parent.parent().children('.pts-filter-err').html(settings.i18n.allInputRequired);
                } else {
                    $parent.parent().children('.pts-filter-err').html('');
                    $('.pts-filter-container[data-filter=' + filter.id + ']').children('p').html('<b style="color:green"><i class="glyphicon glyphicon-ok"></i> ' + settings.i18n.active + '</b>');
                    addNewFilter(filter);
                }
            })
            .on('click', '.pts-delete-filter-btn[data-filter]', function () {
                removeFilter($(this).data('filter'));
            })
            .on('click', '.pts-filters-delete-all', function () {
                settings.filters = [];
                $('.pts-filter-container').remove();
                generateNotification('success', settings.i18n.notif.allFiltersRemoved);

            })
            .on('change', '#hide-user-btn', function () {
                settings.hideEmptyLines = $(this).is(':checked');
                generateTableLines();
                generateGroupMainContent();
                generateUsersList();
            })
            .on('change', '#disable-labels-mov', function () {
                settings.disableLabelsMovement = $(this).is(':checked');
                generateTableLines();
                generateGroupMainContent();
                generateUsersList();
            })
            .on('change', '#pts-add-user-select-group', function () {
                $('#pts-add-user-input-group').val($(this).val());
            })
            .on('change', '#pts-edit-user-select-group', function () {
                $('#pts-edit-user-input-group').val($(this).val());
            })
            .on('dp.change', '.pts-datetimepicker-start', function (e) {
                if ($(this).data('update') == 'no') return;
                $('.pts-datetimepicker-end').data('DateTimePicker').date(e.date).minDate(e.date);
            })
            .on('dp.change', '.pts-datetimepicker-start, .pts-datetimepicker-end', function (e) {
                var $start = $('.pts-datetimepicker-start'),
                    $end = $('.pts-datetimepicker-end');
                if ($start.data('DateTimePicker') && $end.data('DateTimePicker')) {
                    $start.data('DateTimePicker').hide();
                    $end.data('DateTimePicker').hide();
                }
            })
            .on('mousedown', '.pts-line-marker[data-task], .pts-list-task-header[data-task]', function () {
                openToolbox($(this).attr('data-task'), null, 'task');
            })
            .on('keyup', '.pts-list-search-task', function () {
                var searchString = $(this).val().toLowerCase();
                $('.pts-list-row-task').each(function () {
                    if ($(this).children('label').text().toLowerCase().indexOf(searchString) >= 0) {
                        $(this).css('display', 'block');
                    } else {
                        $(this).css('display', 'none');
                    }
                });
            })
            .on('mousedown', '.pts-task-resizer[data-task][data-user][data-end]', function (e) {
            e.stopPropagation();
            settings.resize = {
                origin:  $(this).offset().left,
                element: $(this).parent(),
                count: 0,
                task: $(this).data('task'),
                user: $(this).data('user'),
                end_date: $(this).data('end'),
                timeout: setInterval(function () {
                    $(document).css('cursor', 'e-resize');
                }, 200)
            };
        });
        
        /********* callback functions *********/

        $.fn.pitScheduler.default = function () {
            return {
                options: function (data) {
                    switch (data) {
                        case 'users':
                            return settings.users;
                        case 'tasks':
                            return settings.tasks;
                        default:
                            return settings;
                    }
                },

                show : function () {
                    return $scheduler.show();
                },

                hide: function () {
                    return $scheduler.hide();
                },

                date: function (date) {
                    if (date && moment(date).isValid()) {
                        settings.date.selected = date;
                        updateDisplay(settings.currentDisplay);
                    }
                    return settings.date.selected;
                },

                locale: function (locale) {
                    if (settings.i18n.allowed.indexOf(locale) !== -1) {
                        settings.locale = locale;
                    } else {
                        console.error('Error: the specified locale is not allowed for the current settings');
                    }
                    return settings.locale;
                },

                viewMode: function (viewMode) {
                    if ('days;months;list'.indexOf(viewMode) !== -1) {
                        settings.currentDisplay = viewMode;
                        updateDisplay(settings.currentDisplay);
                    } else {
                        console.error('Error: the specified view mode do not exist');
                    }
                    return settings.currentDisplay;
                },

                go: function (direction) {
                    switch (direction) {
                        case 'backward':
                            goBackward();
                            break;
                        default:
                            goForward();
                            break;
                    }
                }
            };
        };

                return $scheduler;
    };
}(jQuery));
