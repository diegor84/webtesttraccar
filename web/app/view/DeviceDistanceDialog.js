/*
 * Copyright 2016 Anton Tananaev (anton.tananaev@gmail.com)
 * Copyright 2016 Andrey Kunitsyn (abyss@fox5.ru)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Traccar.view.DeviceDistanceDialog', {
    extend: 'Traccar.view.BaseDialog',

    requires: [
        'Traccar.view.DeviceDistanceController'
    ],

    controller: 'deviceDistanceDialog',
    title: Strings.sharedDeviceDistance,

    items: [{
        xtype: 'combobox',
        reference: 'deviceId',
        fieldLabel: Strings.sharedDevice,
        store: 'AllDevices',
        displayField: 'name',
        valueField: 'id',
        listeners: {
            change: 'onDeviceChange'
        }
    }, {
        xtype: 'numberfield',
        reference: 'totalDistance',
        fieldLabel: Strings.deviceTotalDistance,
        value: 0
    }],

    buttons: [{
        text: Strings.sharedSet,
        disabled: true,
        reference: 'setButton',
        handler: 'onSetClick'
    }, {
        text: Strings.sharedCancel,
        handler: 'closeView'
    }]
});
