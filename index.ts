declare namespace GOOGLE_STANDARDS_EVENTS {
  /** This event signifies a user has submitted their payment information. */
  export interface ADD_PAYMENT_INFO {
    /** Currency of the items associated with the event, in 3-letter ISO 4217 format.
     * If you set value then currency is required for revenue metrics to be computed accurately.
     * @example USD */
    currency: string;

    /** The monetary value of the event.
     * value is typically required for meaningful reporting. If you mark the event as a conversion then it's recommended you set value.
     * currency is required if you set value.
     * @example 7.77 */
    value: number;

    /** The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The chosen method of payment.
     * @example Credit Card */
    payment_type?: string;

    /** The items for the event. */
    items: Array<ADD_PAYMENT_INFO_ITEM>;
  }

  /** The items for the event. */
  export interface ADD_PAYMENT_INFO_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface ADD_SHIPPING_INFO {
    /** Currency of the items associated with the event, in 3-letter ISO 4217 format.
     * If you set value then currency is required for revenue metrics to be computed accurately.
     * @example USD */
    currency: string;

    /** The monetary value of the event.
     * value is typically required for meaningful reporting. If you mark the event as a conversion then it's recommended you set value.
     * currency is required if you set value.
     * @example 7.77 */
    value: number;

    /** The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The shipping tier (e.g. Ground, Air, Next-day) selected for delivery of the purchased item.
     * @example Ground */
    shipping_tier?: string;

    /** The items for the event. */
    items: Array<ADD_SHIPPING_INFO_ITEM>;
  }

  /** The items for the event. */
  export interface ADD_SHIPPING_INFO_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface ADD_TO_CART {
    /** Currency of the items associated with the event, in 3-letter ISO 4217 format.
     * If you set value then currency is required for revenue metrics to be computed accurately.
     * @example USD */
    currency: string;

    /** The monetary value of the event.
     * value is typically required for meaningful reporting. If you mark the event as a conversion then it's recommended you set value.
     * currency is required if you set value.
     * @example 7.77 */
    value: number;

    /** The items for the event. */
    items: Array<ADD_TO_CART_ITEM>;
  }

  /** The items for the event. */
  export interface ADD_TO_CART_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface ADD_TO_WISHLIST {
    /** Currency of the items associated with the event, in 3-letter ISO 4217 format.
     * If you set value then currency is required for revenue metrics to be computed accurately.
     * @example USD */
    currency: string;

    /** The monetary value of the event.
     * value is typically required for meaningful reporting. If you mark the event as a conversion then it's recommended you set value.
     * currency is required if you set value.
     * @example 7.77 */
    value: number;

    /** The items for the event. */
    items: Array<ADD_TO_WISHLIST_ITEM>;
  }

  /** The items for the event. */
  export interface ADD_TO_WISHLIST_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface BEGIN_CHECKOUT {
    /** Currency of the items associated with the event, in 3-letter ISO 4217 format.
     * If you set value then currency is required for revenue metrics to be computed accurately.
     * @example USD */
    currency: string;

    /** The monetary value of the event.
     * value is typically required for meaningful reporting. If you mark the event as a conversion then it's recommended you set value.
     * currency is required if you set value.
     * @example 7.77 */
    value: number;

    /** The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The items for the event. */
    items: Array<BEGIN_CHECKOUT_ITEM>;
  }

  /** The items for the event. */
  export interface BEGIN_CHECKOUT_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface EARN_VIRTUAL_CURRENCY {
    /** The name of the virtual currency.
     * @example Gems */
    virtual_currency_name?: string;

    /** The value of the virtual currency.
     * @example 5 */
    value?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface GENERATE_LEAD {
    /** Currency of the items associated with the event, in 3-letter ISO 4217 format.
     * If you set value then currency is required for revenue metrics to be computed accurately.
     * @example USD */
    currency: string;

    /** The monetary value of the event.
     * value is typically required for meaningful reporting. If you mark the event as a conversion then it's recommended you set value.
     * currency is required if you set value.
     * @example 7.77 */
    value: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface JOIN_GROUP {
    /** The ID of the group.
     * @example G_12345 */
    group_id?: string;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface LEVEL_END {
    /** The name of the level.
     * @example The journey begins... */
    level_name?: string;

    /** Set to true if the level was completed successfully.
     * @example true */
    success?: boolean;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface LEVEL_START {
    /** The name of the level.
     * @example The journey begins... */
    level_name?: string;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface LEVEL_UP {
    /** The level of the character.
     * @example 5 */
    level?: number;

    /** The character that leveled up.
     * @example Player 1 */
    character?: string;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface LOGIN {
    /** The method used to login.
     * @example Google */
    method?: string;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface POST_SCORE {
    /** The score to post.
     * @example 10000 */
    score: number;

    /** The level for the score.
     * @example 5 */
    level?: number;

    /** The character that achieved the score.
     * @example Player 1 */
    character?: string;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface PURCHASE {
    /** Currency of the items associated with the event, in 3-letter ISO 4217 format.
     * If you set value then currency is required for revenue metrics to be computed accurately.
     * @example USD */
    currency: string;

    /** The unique identifier of a transaction. The transaction_id parameter helps you avoid getting duplicate events for a purchase.
     * @example T_12345 */
    transaction_id: string;

    /** The monetary value of the event.
     * value is required for meaningful reporting and to populate the purchasers predictive audience.
     * currency is required if you set value.
     * @example 12.21 */
    value: number;

    /** The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** Shipping cost associated with a transaction.
     * @example 3.33 */
    shipping?: number;

    /** Tax cost associated with a transaction.
     * @example 1.11 */
    tax?: number;

    /** The items for the event. */
    items: Array<PURCHASE_ITEM>;
  }

  /** The items for the event. */
  export interface PURCHASE_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface REFUND {
    /** Currency of the items associated with the event, in 3-letter ISO 4217 format.
     * If you set value then currency is required for revenue metrics to be computed accurately.
     * @example USD */
    currency: string;

    /** The unique identifier of a transaction.
     * @example T_12345 */
    transaction_id: string;

    /** The monetary value of the event.
     * value is typically required for meaningful reporting. If you mark the event as a conversion then it's recommended you set value.
     * currency is required if you set value.
     * @example 7.77 */
    value: number;

    /** The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** Shipping cost associated with a transaction.
     * @example 3.33 */
    shipping?: number;

    /** Tax cost associated with a transaction.
     * @example 1.11 */
    tax?: number;

    /** The items for the event. */
    items?: Array<REFUND_ITEM>;
  }

  /** The items for the event. */
  export interface REFUND_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface REMOVE_FROM_CART {
    /** Currency of the items associated with the event, in 3-letter ISO 4217 format.
     * If you set value then currency is required for revenue metrics to be computed accurately.
     * @example USD */
    currency: string;

    /** The monetary value of the event.
     * value is typically required for meaningful reporting. If you mark the event as a conversion then it's recommended you set value.
     * currency is required if you set value.
     * @example 7.77 */
    value: number;

    /** The items for the event. */
    items: Array<REMOVE_FROM_CART_ITEM>;
  }

  /** The items for the event. */
  export interface REMOVE_FROM_CART_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface SEARCH {
    /** The term that was searched for.
     * @example t-shirts */
    search_term: string;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface SELECT_CONTENT {
    /** The type of selected content.
     * @example product */
    content_type?: string;

    /** An identifier for the item that was selected.
     * @example I_12345 */
    item_id?: string;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface SELECT_ITEM {
    /** The ID of the list in which the item was presented to the user. Ignored if set at the item-level.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. Ignored if set at the item-level.
     * @example Related products */
    item_list_name?: string;

    /** The items for the event.
     * The items array is expected to have a single element, representing the selected item. If multiple elements are provided, only the first element in items will be used. */
    items: Array<SELECT_ITEM_ITEM>;
  }

  /** The items for the event.
   * The items array is expected to have a single element, representing the selected item. If multiple elements are provided, only the first element in items will be used. */
  export interface SELECT_ITEM_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface SELECT_PROMOTION {
    /** The name of the promotional creative. Ignored if set at the item-level.
     * @example summer_banner2 */
    creative_name?: string;

    /** The name of the promotional creative slot associated with the event. Ignored if set at the item-level.
     * @example featured_app_1 */
    creative_slot?: string;

    /** The ID of the promotion associated with the event. Ignored if set at the item-level.
     * @example P_12345 */
    promotion_id?: string;

    /** The name of the promotion associated with the event. Ignored if set at the item-level.
     * @example Summer Sale */
    promotion_name?: string;

    /** The items for the event. */
    items?: Array<SELECT_PROMOTION_ITEM>;
  }

  /** The items for the event. */
  export interface SELECT_PROMOTION_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The name of the promotional creative. If set, event-level creative_name is ignored. If not set, event-level creative_name is used, if present.
     * @example summer_banner2 */
    creative_name?: string;

    /** The name of the promotional creative slot associated with the item. If set, event-level creative_slot is ignored. If not set, event-level creative_slot is used, if present.
     * @example featured_app_1 */
    creative_slot?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** The ID of the promotion associated with the item. If set, event-level promotion_id is ignored. If not set, event-level promotion_id is used, if present.
     * @example P_12345 */
    promotion_id?: string;

    /** The name of the promotion associated with the item. If set, event-level promotion_name is ignored. If not set, event-level promotion_name is used, if present.
     * @example Summer Sale */
    promotion_name?: string;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface SHARE {
    /** The method in which the content is shared.
     * @example Twitter */
    method?: string;

    /** The type of shared content.
     * @example image */
    content_type?: string;

    /** The ID of the shared content.
     * @example C_12345 */
    item_id?: string;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface SIGN_UP {
    /** The method used for sign up.
     * @example Google */
    method?: string;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface SPEND_VIRTUAL_CURRENCY {
    /** The value of the virtual currency.
     * @example 5 */
    value: number;

    /** The name of the virtual currency.
     * @example Gems */
    virtual_currency_name: string;

    /** The name of the item the virtual currency is being used for.
     * @example Starter Boost */
    item_name?: string;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface TUTORIAL_BEGIN {}

  /** This event signifies a user has submitted their payment information. */
  export interface TUTORIAL_COMPLETE {}

  /** This event signifies a user has submitted their payment information. */
  export interface UNLOCK_ACHIEVEMENT {
    /** The id of the achievement that was unlocked.
     * @example A_12345 */
    achievement_id: string;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface VIEW_CART {
    /** Currency of the items associated with the event, in 3-letter ISO 4217 format.
     * If you set value then currency is required for revenue metrics to be computed accurately.
     * @example USD */
    currency: string;

    /** The monetary value of the event.
     * value is typically required for meaningful reporting. If you mark the event as a conversion then it's recommended you set value.
     * currency is required if you set value.
     * @example 7.77 */
    value: number;

    /** The items for the event. */
    items: Array<VIEW_CART_ITEM>;
  }

  /** The items for the event. */
  export interface VIEW_CART_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface VIEW_ITEM {
    /** Currency of the items associated with the event, in 3-letter ISO 4217 format.
     * If you set value then currency is required for revenue metrics to be computed accurately.
     * @example USD */
    currency: string;

    /** The monetary value of the event.
     * value is typically required for meaningful reporting. If you mark the event as a conversion then it's recommended you set value.
     * currency is required if you set value.
     * @example 7.77 */
    value: number;

    /** The items for the event. */
    items: Array<VIEW_ITEM_ITEM>;
  }

  /** The items for the event. */
  export interface VIEW_ITEM_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface VIEW_ITEM_LIST {
    /** The ID of the list in which the item was presented to the user. Ignored if set at the item-level.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. Ignored if set at the item-level.
     * @example Related products */
    item_list_name?: string;

    /** The items for the event. */
    items: Array<VIEW_ITEM_LIST_ITEM>;
  }

  /** The items for the event. */
  export interface VIEW_ITEM_LIST_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  /** This event signifies a user has submitted their payment information. */
  export interface VIEW_PROMOTION {
    /** The name of the promotional creative. Ignored if set at the item-level.
     * @example summer_banner2 */
    creative_name?: string;

    /** The name of the promotional creative slot associated with the event. Ignored if set at the item-level.
     * @example featured_app_1 */
    creative_slot?: string;

    /** The ID of the promotion associated with the event. Ignored if set at the item-level.
     * @example P_12345 */
    promotion_id?: string;

    /** The name of the promotion associated with the event. Ignored if set at the item-level.
     * @example Summer Sale */
    promotion_name?: string;

    /** The items for the event.
     * The items array is expected to have a single element, representing the item associated with the promotion. If multiple elements are provided, only the first element in items will be used. */
    items: Array<VIEW_PROMOTION_ITEM>;
  }

  /** The items for the event.
   * The items array is expected to have a single element, representing the item associated with the promotion. If multiple elements are provided, only the first element in items will be used. */
  export interface VIEW_PROMOTION_ITEM {
    /** The ID of the item.
     * One of item_id or item_name is required.
     * @example SKU_12345 */
    item_id: string;

    /** The name of the item.
     * One of item_id or item_name is required.
     * @example Stan and Friends Tee */
    item_name: string;

    /** A product affiliation to designate a supplying company or brick and mortar store location. Note: `affiliation` is only available at the item-scope.
     * @example Google Store */
    affiliation?: string;

    /** The coupon name/code associated with the item. Event-level and item-level coupon parameters are independent.
     * @example SUMMER_FUN */
    coupon?: string;

    /** The name of the promotional creative. If set, event-level creative_name is ignored. If not set, event-level creative_name is used, if present.
     * @example summer_banner2 */
    creative_name?: string;

    /** The name of the promotional creative slot associated with the item. If set, event-level creative_slot is ignored. If not set, event-level creative_slot is used, if present.
     * @example featured_app_1 */
    creative_slot?: string;

    /** The monetary discount value associated with the item.
     * @example 2.22 */
    discount?: number;

    /** The index/position of the item in a list.
     * @example 5 */
    index?: number;

    /** The brand of the item.
     * @example Google */
    item_brand?: string;

    /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
     * @example Apparel */
    item_category?: string;

    /** The second category hierarchy or additional taxonomy for the item.
     * @example Adult */
    item_category2?: string;

    /** The third category hierarchy or additional taxonomy for the item.
     * @example Shirts */
    item_category3?: string;

    /** The fourth category hierarchy or additional taxonomy for the item.
     * @example Crew */
    item_category4?: string;

    /** The fifth category hierarchy or additional taxonomy for the item.
     * @example Short sleeve */
    item_category5?: string;

    /** The ID of the list in which the item was presented to the user. If set, event-level item_list_id is ignored. If not set, event-level item_list_id is used, if present.
     * @example related_products */
    item_list_id?: string;

    /** The name of the list in which the item was presented to the user. If set, event-level item_list_name is ignored. If not set, event-level item_list_name is used, if present.
     * @example Related products */
    item_list_name?: string;

    /** The item variant or unique code or description for additional item details/options.
     * @example green */
    item_variant?: string;

    /** The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. Note: `location id` is only available at the item-scope.
     * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco) */
    location_id?: string;

    /** The monetary price of the item, in units of the specified currency parameter.
     * @example 9.99 */
    price?: number;

    /** The ID of the promotion associated with the item. If set, event-level promotion_id is ignored. If not set, event-level promotion_id is used, if present.
     * @example P_12345 */
    promotion_id?: string;

    /** The name of the promotion associated with the item. If set, event-level promotion_name is ignored. If not set, event-level promotion_name is used, if present.
     * @example Summer Sale */
    promotion_name?: string;

    /** Item quantity. If not set, quantity is set to 1.
     * @example 1 */
    quantity?: number;
  }

  export interface EVENTS_MAP {
    add_payment_info: ADD_PAYMENT_INFO;
    add_shipping_info: ADD_SHIPPING_INFO;
    add_to_cart: ADD_TO_CART;
    add_to_wishlist: ADD_TO_WISHLIST;
    begin_checkout: BEGIN_CHECKOUT;
    earn_virtual_currency: EARN_VIRTUAL_CURRENCY;
    generate_lead: GENERATE_LEAD;
    join_group: JOIN_GROUP;
    level_end: LEVEL_END;
    level_start: LEVEL_START;
    level_up: LEVEL_UP;
    login: LOGIN;
    post_score: POST_SCORE;
    purchase: PURCHASE;
    refund: REFUND;
    remove_from_cart: REMOVE_FROM_CART;
    search: SEARCH;
    select_content: SELECT_CONTENT;
    select_item: SELECT_ITEM;
    select_promotion: SELECT_PROMOTION;
    share: SHARE;
    sign_up: SIGN_UP;
    spend_virtual_currency: SPEND_VIRTUAL_CURRENCY;
    tutorial_begin: TUTORIAL_BEGIN;
    tutorial_complete: TUTORIAL_COMPLETE;
    unlock_achievement: UNLOCK_ACHIEVEMENT;
    view_cart: VIEW_CART;
    view_item: VIEW_ITEM;
    view_item_list: VIEW_ITEM_LIST;
    view_promotion: VIEW_PROMOTION;
  }
  export type EVENTS = keyof EVENTS_MAP;

  export type PARAMS<E extends EVENTS> = EVENTS_MAP[E];
}
