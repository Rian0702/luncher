import { Router, ActivatedRoute, Params } from '@angular/router';
import { FirebaseAuthState } from 'angularfire2';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OrderService } from './../shared/order.service';
import { Order } from './../models/order';
import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { AngularFire } from 'angularfire2';
import { OrderUser } from 'app/order/models/user';
export class IAddOrderComponent {
  order: Order;
  form: FormGroup;
  currentUser: firebase.User;
  constructor(private orderService: OrderService, private af: AngularFire, private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      when: ['', [Validators.required]],
      where: ['', [Validators.required]],
      url: ['', [Validators.required]],
      description: [''],
    });

    this.af.auth.subscribe((auth) => {
      this.currentUser = auth.auth;
    });

    if (this.route) {
      this.route.params.switchMap((params: Params) => this.orderService.getByKey(params['orderid']))
        .subscribe((order: Order) => this.order = order);
    }
  }


  /**
   * returns a Order object from the form model
   */
  prepareSaveOrder(): Order {
    const formModel = this.form.value;
    const saveOrder: Order = {
      when: formModel.when as string,
      where: formModel.where as string,
      url: formModel.url as string,
      description: formModel.description as string,
      createdAt: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime(), // saves the date without time as string
      createdFrom: new OrderUser(this.currentUser)
    };
    return saveOrder;
  }
}
