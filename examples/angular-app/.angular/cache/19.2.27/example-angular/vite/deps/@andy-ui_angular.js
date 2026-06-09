import {
  NG_VALUE_ACCESSOR
} from "./chunk-7QWT57ZJ.js";
import "./chunk-3XBFF5F4.js";
import {
  Directive,
  ElementRef,
  HostListener,
  Injectable,
  NgModule,
  __async,
  __spreadProps,
  __spreadValues,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵlistener
} from "./chunk-FQOYYDER.js";

// ../../node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/development/css-tag.js
var NODE_MODE = false;
var global = globalThis;
var supportsAdoptingStyleSheets = global.ShadowRoot && (global.ShadyCSS === void 0 || global.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var cssTagCache = /* @__PURE__ */ new WeakMap();
var CSSResult = class {
  constructor(cssText, strings, safeToken) {
    this["_$cssResult$"] = true;
    if (safeToken !== constructionToken) {
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    }
    this.cssText = cssText;
    this._strings = strings;
  }
  // This is a getter so that it's lazy. In practice, this means stylesheets
  // are not created until the first element instance is made.
  get styleSheet() {
    let styleSheet = this._styleSheet;
    const strings = this._strings;
    if (supportsAdoptingStyleSheets && styleSheet === void 0) {
      const cacheable = strings !== void 0 && strings.length === 1;
      if (cacheable) {
        styleSheet = cssTagCache.get(strings);
      }
      if (styleSheet === void 0) {
        (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
        if (cacheable) {
          cssTagCache.set(strings, styleSheet);
        }
      }
    }
    return styleSheet;
  }
  toString() {
    return this.cssText;
  }
};
var unsafeCSS = (value) => new CSSResult(typeof value === "string" ? value : String(value), void 0, constructionToken);
var adoptStyles = (renderRoot, styles) => {
  if (supportsAdoptingStyleSheets) {
    renderRoot.adoptedStyleSheets = styles.map((s10) => s10 instanceof CSSStyleSheet ? s10 : s10.styleSheet);
  } else {
    for (const s10 of styles) {
      const style = document.createElement("style");
      const nonce = global["litNonce"];
      if (nonce !== void 0) {
        style.setAttribute("nonce", nonce);
      }
      style.textContent = s10.cssText;
      renderRoot.appendChild(style);
    }
  }
};
var cssResultFromStyleSheet = (sheet) => {
  let cssText = "";
  for (const rule of sheet.cssRules) {
    cssText += rule.cssText;
  }
  return unsafeCSS(cssText);
};
var getCompatibleStyle = supportsAdoptingStyleSheets || NODE_MODE && global.CSSStyleSheet === void 0 ? (s10) => s10 : (s10) => s10 instanceof CSSStyleSheet ? cssResultFromStyleSheet(s10) : s10;

// ../../node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/development/reactive-element.js
var {
  is,
  defineProperty,
  getOwnPropertyDescriptor,
  getOwnPropertyNames,
  getOwnPropertySymbols,
  getPrototypeOf
} = Object;
var NODE_MODE2 = false;
var global2 = globalThis;
if (NODE_MODE2) {
  global2.customElements ??= customElements;
}
var DEV_MODE = true;
var issueWarning;
var trustedTypes = global2.trustedTypes;
var emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : "";
var polyfillSupport = DEV_MODE ? global2.reactiveElementPolyfillSupportDevMode : global2.reactiveElementPolyfillSupport;
if (DEV_MODE) {
  global2.litIssuedWarnings ??= /* @__PURE__ */ new Set();
  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!global2.litIssuedWarnings.has(warning) && !global2.litIssuedWarnings.has(code)) {
      console.warn(warning);
      global2.litIssuedWarnings.add(warning);
    }
  };
  queueMicrotask(() => {
    issueWarning("dev-mode", `Lit is in dev mode. Not recommended for production!`);
    if (global2.ShadyDOM?.inUse && polyfillSupport === void 0) {
      issueWarning("polyfill-support-missing", `Shadow DOM is being polyfilled via \`ShadyDOM\` but the \`polyfill-support\` module has not been loaded.`);
    }
  });
}
var debugLogEvent = DEV_MODE ? (event) => {
  const shouldEmit = global2.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global2.dispatchEvent(new CustomEvent("lit-debug", {
    detail: event
  }));
} : void 0;
var JSCompiler_renameProperty = (prop, _obj) => prop;
var defaultConverter = {
  toAttribute(value, type) {
    switch (type) {
      case Boolean:
        value = value ? emptyStringForBooleanAttribute : null;
        break;
      case Object:
      case Array:
        value = value == null ? value : JSON.stringify(value);
        break;
    }
    return value;
  },
  fromAttribute(value, type) {
    let fromValue = value;
    switch (type) {
      case Boolean:
        fromValue = value !== null;
        break;
      case Number:
        fromValue = value === null ? null : Number(value);
        break;
      case Object:
      case Array:
        try {
          fromValue = JSON.parse(value);
        } catch (e6) {
          fromValue = null;
        }
        break;
    }
    return fromValue;
  }
};
var notEqual = (value, old) => !is(value, old);
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  useDefault: false,
  hasChanged: notEqual
};
Symbol.metadata ??= Symbol("metadata");
global2.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var ReactiveElement = class extends HTMLElement {
  /**
   * Adds an initializer function to the class that is called during instance
   * construction.
   *
   * This is useful for code that runs against a `ReactiveElement`
   * subclass, such as a decorator, that needs to do work for each
   * instance, such as setting up a `ReactiveController`.
   *
   * ```ts
   * const myDecorator = (target: typeof ReactiveElement, key: string) => {
   *   target.addInitializer((instance: ReactiveElement) => {
   *     // This is run during construction of the element
   *     new MyController(instance);
   *   });
   * }
   * ```
   *
   * Decorating a field will then cause each instance to run an initializer
   * that adds a controller:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   @myDecorator foo;
   * }
   * ```
   *
   * Initializers are stored per-constructor. Adding an initializer to a
   * subclass does not add it to a superclass. Since initializers are run in
   * constructors, initializers will run in order of the class hierarchy,
   * starting with superclasses and progressing to the instance's class.
   *
   * @nocollapse
   */
  static addInitializer(initializer) {
    this.__prepare();
    (this._initializers ??= []).push(initializer);
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   * @category attributes
   */
  static get observedAttributes() {
    this.finalize();
    return this.__attributeToPropertyMap && [...this.__attributeToPropertyMap.keys()];
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a {@linkcode PropertyDeclaration} for the property with the
   * given options. The property setter calls the property's `hasChanged`
   * property option or uses a strict identity check to determine whether or not
   * to request an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * ```ts
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */
  static createProperty(name, options = defaultPropertyDeclaration) {
    if (options.state) {
      options.attribute = false;
    }
    this.__prepare();
    if (this.prototype.hasOwnProperty(name)) {
      options = Object.create(options);
      options.wrapped = true;
    }
    this.elementProperties.set(name, options);
    if (!options.noAccessor) {
      const key = DEV_MODE ? (
        // Use Symbol.for in dev mode to make it easier to maintain state
        // when doing HMR.
        Symbol.for(`${String(name)} (@property() cache)`)
      ) : Symbol();
      const descriptor = this.getPropertyDescriptor(name, key, options);
      if (descriptor !== void 0) {
        defineProperty(this.prototype, name, descriptor);
      }
    }
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   * ```ts
   * class MyElement extends LitElement {
   *   static getPropertyDescriptor(name, key, options) {
   *     const defaultDescriptor =
   *         super.getPropertyDescriptor(name, key, options);
   *     const setter = defaultDescriptor.set;
   *     return {
   *       get: defaultDescriptor.get,
   *       set(value) {
   *         setter.call(this, value);
   *         // custom action.
   *       },
   *       configurable: true,
   *       enumerable: true
   *     }
   *   }
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */
  static getPropertyDescriptor(name, key, options) {
    const {
      get,
      set
    } = getOwnPropertyDescriptor(this.prototype, name) ?? {
      get() {
        return this[key];
      },
      set(v7) {
        this[key] = v7;
      }
    };
    if (DEV_MODE && get == null) {
      if ("value" in (getOwnPropertyDescriptor(this.prototype, name) ?? {})) {
        throw new Error(`Field ${JSON.stringify(String(name))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);
      }
      issueWarning("reactive-property-without-getter", `Field ${JSON.stringify(String(name))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`);
    }
    return {
      get,
      set(value) {
        const oldValue = get?.call(this);
        set?.call(this, value);
        this.requestUpdate(name, oldValue, options);
      },
      configurable: true,
      enumerable: true
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a `PropertyDeclaration` via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override
   * {@linkcode createProperty}.
   *
   * @nocollapse
   * @final
   * @category properties
   */
  static getPropertyOptions(name) {
    return this.elementProperties.get(name) ?? defaultPropertyDeclaration;
  }
  /**
   * Initializes static own properties of the class used in bookkeeping
   * for element properties, initializers, etc.
   *
   * Can be called multiple times by code that needs to ensure these
   * properties exist before using them.
   *
   * This method ensures the superclass is finalized so that inherited
   * property metadata can be copied down.
   * @nocollapse
   */
  static __prepare() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("elementProperties", this))) {
      return;
    }
    const superCtor = getPrototypeOf(this);
    superCtor.finalize();
    if (superCtor._initializers !== void 0) {
      this._initializers = [...superCtor._initializers];
    }
    this.elementProperties = new Map(superCtor.elementProperties);
  }
  /**
   * Finishes setting up the class so that it's ready to be registered
   * as a custom element and instantiated.
   *
   * This method is called by the ReactiveElement.observedAttributes getter.
   * If you override the observedAttributes getter, you must either call
   * super.observedAttributes to trigger finalization, or call finalize()
   * yourself.
   *
   * @nocollapse
   */
  static finalize() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("finalized", this))) {
      return;
    }
    this.finalized = true;
    this.__prepare();
    if (this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const props = this.properties;
      const propKeys = [...getOwnPropertyNames(props), ...getOwnPropertySymbols(props)];
      for (const p6 of propKeys) {
        this.createProperty(p6, props[p6]);
      }
    }
    const metadata = this[Symbol.metadata];
    if (metadata !== null) {
      const properties = litPropertyMetadata.get(metadata);
      if (properties !== void 0) {
        for (const [p6, options] of properties) {
          this.elementProperties.set(p6, options);
        }
      }
    }
    this.__attributeToPropertyMap = /* @__PURE__ */ new Map();
    for (const [p6, options] of this.elementProperties) {
      const attr = this.__attributeNameForProperty(p6, options);
      if (attr !== void 0) {
        this.__attributeToPropertyMap.set(attr, p6);
      }
    }
    this.elementStyles = this.finalizeStyles(this.styles);
    if (DEV_MODE) {
      if (this.hasOwnProperty("createProperty")) {
        issueWarning("no-override-create-property", "Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");
      }
      if (this.hasOwnProperty("getPropertyDescriptor")) {
        issueWarning("no-override-get-property-descriptor", "Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators");
      }
    }
  }
  /**
   * Takes the styles the user supplied via the `static styles` property and
   * returns the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * Styles are deduplicated preserving the _last_ instance in the list. This
   * is a performance optimization to avoid duplicated styles that can occur
   * especially when composing via subclassing. The last item is kept to try
   * to preserve the cascade order with the assumption that it's most important
   * that last added styles override previous styles.
   *
   * @nocollapse
   * @category styles
   */
  static finalizeStyles(styles) {
    const elementStyles = [];
    if (Array.isArray(styles)) {
      const set = new Set(styles.flat(Infinity).reverse());
      for (const s10 of set) {
        elementStyles.unshift(getCompatibleStyle(s10));
      }
    } else if (styles !== void 0) {
      elementStyles.push(getCompatibleStyle(styles));
    }
    return elementStyles;
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static __attributeNameForProperty(name, options) {
    const attribute = options.attribute;
    return attribute === false ? void 0 : typeof attribute === "string" ? attribute : typeof name === "string" ? name.toLowerCase() : void 0;
  }
  constructor() {
    super();
    this.__instanceProperties = void 0;
    this.isUpdatePending = false;
    this.hasUpdated = false;
    this.__reflectingProperty = null;
    this.__initialize();
  }
  /**
   * Internal only override point for customizing work done when elements
   * are constructed.
   */
  __initialize() {
    this.__updatePromise = new Promise((res) => this.enableUpdating = res);
    this._$changedProperties = /* @__PURE__ */ new Map();
    this.__saveInstanceProperties();
    this.requestUpdate();
    this.constructor._initializers?.forEach((i7) => i7(this));
  }
  /**
   * Registers a `ReactiveController` to participate in the element's reactive
   * update cycle. The element automatically calls into any registered
   * controllers during its lifecycle callbacks.
   *
   * If the element is connected when `addController()` is called, the
   * controller's `hostConnected()` callback will be immediately called.
   * @category controllers
   */
  addController(controller) {
    (this.__controllers ??= /* @__PURE__ */ new Set()).add(controller);
    if (this.renderRoot !== void 0 && this.isConnected) {
      controller.hostConnected?.();
    }
  }
  /**
   * Removes a `ReactiveController` from the element.
   * @category controllers
   */
  removeController(controller) {
    this.__controllers?.delete(controller);
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs.
   */
  __saveInstanceProperties() {
    const instanceProperties = /* @__PURE__ */ new Map();
    const elementProperties = this.constructor.elementProperties;
    for (const p6 of elementProperties.keys()) {
      if (this.hasOwnProperty(p6)) {
        instanceProperties.set(p6, this[p6]);
        delete this[p6];
      }
    }
    if (instanceProperties.size > 0) {
      this.__instanceProperties = instanceProperties;
    }
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   *
   * @return Returns a node into which to render.
   * @category rendering
   */
  createRenderRoot() {
    const renderRoot = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    adoptStyles(renderRoot, this.constructor.elementStyles);
    return renderRoot;
  }
  /**
   * On first connection, creates the element's renderRoot, sets up
   * element styling, and enables updating.
   * @category lifecycle
   */
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot();
    this.enableUpdating(true);
    this.__controllers?.forEach((c9) => c9.hostConnected?.());
  }
  /**
   * Note, this method should be considered final and not overridden. It is
   * overridden on the element instance with a function that triggers the first
   * update.
   * @category updates
   */
  enableUpdating(_requestedUpdate) {
  }
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   * @category lifecycle
   */
  disconnectedCallback() {
    this.__controllers?.forEach((c9) => c9.hostDisconnected?.());
  }
  /**
   * Synchronizes property values when attributes change.
   *
   * Specifically, when an attribute is set, the corresponding property is set.
   * You should rarely need to implement this callback. If this method is
   * overridden, `super.attributeChangedCallback(name, _old, value)` must be
   * called.
   *
   * See [responding to attribute changes](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes)
   * on MDN for more information about the `attributeChangedCallback`.
   * @category attributes
   */
  attributeChangedCallback(name, _old, value) {
    this._$attributeToProperty(name, value);
  }
  __propertyToAttribute(name, value) {
    const elemProperties = this.constructor.elementProperties;
    const options = elemProperties.get(name);
    const attr = this.constructor.__attributeNameForProperty(name, options);
    if (attr !== void 0 && options.reflect === true) {
      const converter = options.converter?.toAttribute !== void 0 ? options.converter : defaultConverter;
      const attrValue = converter.toAttribute(value, options.type);
      if (DEV_MODE && this.constructor.enabledWarnings.includes("migration") && attrValue === void 0) {
        issueWarning("undefined-attribute-value", `The attribute value for the ${name} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);
      }
      this.__reflectingProperty = name;
      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      }
      this.__reflectingProperty = null;
    }
  }
  /** @internal */
  _$attributeToProperty(name, value) {
    const ctor = this.constructor;
    const propName = ctor.__attributeToPropertyMap.get(name);
    if (propName !== void 0 && this.__reflectingProperty !== propName) {
      const options = ctor.getPropertyOptions(propName);
      const converter = typeof options.converter === "function" ? {
        fromAttribute: options.converter
      } : options.converter?.fromAttribute !== void 0 ? options.converter : defaultConverter;
      this.__reflectingProperty = propName;
      const convertedValue = converter.fromAttribute(value, options.type);
      this[propName] = convertedValue ?? this.__defaultValues?.get(propName) ?? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      convertedValue;
      this.__reflectingProperty = null;
    }
  }
  /**
   * Requests an update which is processed asynchronously. This should be called
   * when an element should update based on some state not triggered by setting
   * a reactive property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored.
   *
   * @param name name of requesting property
   * @param oldValue old value of requesting property
   * @param options property options to use instead of the previously
   *     configured options
   * @param useNewValue if true, the newValue argument is used instead of
   *     reading the property value. This is important to use if the reactive
   *     property is a standard private accessor, as opposed to a plain
   *     property, since private members can't be dynamically read by name.
   * @param newValue the new value of the property. This is only used if
   *     `useNewValue` is true.
   * @category updates
   */
  requestUpdate(name, oldValue, options, useNewValue = false, newValue) {
    if (name !== void 0) {
      if (DEV_MODE && name instanceof Event) {
        issueWarning(``, `The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()`);
      }
      const ctor = this.constructor;
      if (useNewValue === false) {
        newValue = this[name];
      }
      options ??= ctor.getPropertyOptions(name);
      const changed = (options.hasChanged ?? notEqual)(newValue, oldValue) || // When there is no change, check a corner case that can occur when
      // 1. there's a initial value which was not reflected
      // 2. the property is subsequently set to this value.
      // For example, `prop: {useDefault: true, reflect: true}`
      // and el.prop = 'foo'. This should be considered a change if the
      // attribute is not set because we will now reflect the property to the attribute.
      options.useDefault && options.reflect && newValue === this.__defaultValues?.get(name) && !this.hasAttribute(ctor.__attributeNameForProperty(name, options));
      if (changed) {
        this._$changeProperty(name, oldValue, options);
      } else {
        return;
      }
    }
    if (this.isUpdatePending === false) {
      this.__updatePromise = this.__enqueueUpdate();
    }
  }
  /**
   * @internal
   */
  _$changeProperty(name, oldValue, {
    useDefault,
    reflect,
    wrapped
  }, initializeValue) {
    if (useDefault && !(this.__defaultValues ??= /* @__PURE__ */ new Map()).has(name)) {
      this.__defaultValues.set(name, initializeValue ?? oldValue ?? this[name]);
      if (wrapped !== true || initializeValue !== void 0) {
        return;
      }
    }
    if (!this._$changedProperties.has(name)) {
      if (!this.hasUpdated && !useDefault) {
        oldValue = void 0;
      }
      this._$changedProperties.set(name, oldValue);
    }
    if (reflect === true && this.__reflectingProperty !== name) {
      (this.__reflectingProperties ??= /* @__PURE__ */ new Set()).add(name);
    }
  }
  /**
   * Sets up the element to asynchronously update.
   */
  __enqueueUpdate() {
    return __async(this, null, function* () {
      this.isUpdatePending = true;
      try {
        yield this.__updatePromise;
      } catch (e6) {
        Promise.reject(e6);
      }
      const result = this.scheduleUpdate();
      if (result != null) {
        yield result;
      }
      return !this.isUpdatePending;
    });
  }
  /**
   * Schedules an element update. You can override this method to change the
   * timing of updates by returning a Promise. The update will await the
   * returned Promise, and you should resolve the Promise to allow the update
   * to proceed. If this method is overridden, `super.scheduleUpdate()`
   * must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```ts
   * override protected async scheduleUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.scheduleUpdate();
   * }
   * ```
   * @category updates
   */
  scheduleUpdate() {
    const result = this.performUpdate();
    if (DEV_MODE && this.constructor.enabledWarnings.includes("async-perform-update") && typeof result?.then === "function") {
      issueWarning("async-perform-update", `Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);
    }
    return result;
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * Call `performUpdate()` to immediately process a pending update. This should
   * generally not be needed, but it can be done in rare cases when you need to
   * update synchronously.
   *
   * @category updates
   */
  performUpdate() {
    if (!this.isUpdatePending) {
      return;
    }
    debugLogEvent?.({
      kind: "update"
    });
    if (!this.hasUpdated) {
      this.renderRoot ??= this.createRenderRoot();
      if (DEV_MODE) {
        const ctor = this.constructor;
        const shadowedProperties = [...ctor.elementProperties.keys()].filter((p6) => this.hasOwnProperty(p6) && p6 in getPrototypeOf(this));
        if (shadowedProperties.length) {
          throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${shadowedProperties.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`);
        }
      }
      if (this.__instanceProperties) {
        for (const [p6, value] of this.__instanceProperties) {
          this[p6] = value;
        }
        this.__instanceProperties = void 0;
      }
      const elementProperties = this.constructor.elementProperties;
      if (elementProperties.size > 0) {
        for (const [p6, options] of elementProperties) {
          const {
            wrapped
          } = options;
          const value = this[p6];
          if (wrapped === true && !this._$changedProperties.has(p6) && value !== void 0) {
            this._$changeProperty(p6, void 0, options, value);
          }
        }
      }
    }
    let shouldUpdate = false;
    const changedProperties = this._$changedProperties;
    try {
      shouldUpdate = this.shouldUpdate(changedProperties);
      if (shouldUpdate) {
        this.willUpdate(changedProperties);
        this.__controllers?.forEach((c9) => c9.hostUpdate?.());
        this.update(changedProperties);
      } else {
        this.__markUpdated();
      }
    } catch (e6) {
      shouldUpdate = false;
      this.__markUpdated();
      throw e6;
    }
    if (shouldUpdate) {
      this._$didUpdate(changedProperties);
    }
  }
  /**
   * Invoked before `update()` to compute values needed during the update.
   *
   * Implement `willUpdate` to compute property values that depend on other
   * properties and are used in the rest of the update process.
   *
   * ```ts
   * willUpdate(changedProperties) {
   *   // only need to check changed properties for an expensive computation.
   *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
   *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
   *   }
   * }
   *
   * render() {
   *   return html`SHA: ${this.sha}`;
   * }
   * ```
   *
   * @category updates
   */
  willUpdate(_changedProperties) {
  }
  // Note, this is an override point for polyfill-support.
  // @internal
  _$didUpdate(changedProperties) {
    this.__controllers?.forEach((c9) => c9.hostUpdated?.());
    if (!this.hasUpdated) {
      this.hasUpdated = true;
      this.firstUpdated(changedProperties);
    }
    this.updated(changedProperties);
    if (DEV_MODE && this.isUpdatePending && this.constructor.enabledWarnings.includes("change-in-update")) {
      issueWarning("change-in-update", `Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`);
    }
  }
  __markUpdated() {
    this._$changedProperties = /* @__PURE__ */ new Map();
    this.isUpdatePending = false;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super.getUpdateComplete()`, then any subsequent state.
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */
  get updateComplete() {
    return this.getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   override async getUpdateComplete() {
   *     const result = await super.getUpdateComplete();
   *     await this._myChild.updateComplete;
   *     return result;
   *   }
   * }
   * ```
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */
  getUpdateComplete() {
    return this.__updatePromise;
  }
  /**
   * Controls whether or not `update()` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  shouldUpdate(_changedProperties) {
    return true;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  update(_changedProperties) {
    this.__reflectingProperties &&= this.__reflectingProperties.forEach((p6) => this.__propertyToAttribute(p6, this[p6]));
    this.__markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  updated(_changedProperties) {
  }
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * ```ts
   * firstUpdated() {
   *   this.renderRoot.getElementById('my-text-area').focus();
   * }
   * ```
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  firstUpdated(_changedProperties) {
  }
};
ReactiveElement.elementStyles = [];
ReactiveElement.shadowRootOptions = {
  mode: "open"
};
ReactiveElement[JSCompiler_renameProperty("elementProperties", ReactiveElement)] = /* @__PURE__ */ new Map();
ReactiveElement[JSCompiler_renameProperty("finalized", ReactiveElement)] = /* @__PURE__ */ new Map();
polyfillSupport?.({
  ReactiveElement
});
if (DEV_MODE) {
  ReactiveElement.enabledWarnings = ["change-in-update", "async-perform-update"];
  const ensureOwnWarnings = function(ctor) {
    if (!ctor.hasOwnProperty(JSCompiler_renameProperty("enabledWarnings", ctor))) {
      ctor.enabledWarnings = ctor.enabledWarnings.slice();
    }
  };
  ReactiveElement.enableWarning = function(warning) {
    ensureOwnWarnings(this);
    if (!this.enabledWarnings.includes(warning)) {
      this.enabledWarnings.push(warning);
    }
  };
  ReactiveElement.disableWarning = function(warning) {
    ensureOwnWarnings(this);
    const i7 = this.enabledWarnings.indexOf(warning);
    if (i7 >= 0) {
      this.enabledWarnings.splice(i7, 1);
    }
  };
}
(global2.reactiveElementVersions ??= []).push("2.1.2");
if (DEV_MODE && global2.reactiveElementVersions.length > 1) {
  queueMicrotask(() => {
    issueWarning("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
  });
}

// ../../node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/development/lit-html.js
var DEV_MODE2 = true;
var ENABLE_EXTRA_SECURITY_HOOKS = true;
var ENABLE_SHADYDOM_NOPATCH = true;
var NODE_MODE3 = false;
var global3 = globalThis;
var debugLogEvent2 = DEV_MODE2 ? (event) => {
  const shouldEmit = global3.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global3.dispatchEvent(new CustomEvent("lit-debug", {
    detail: event
  }));
} : void 0;
var debugLogRenderId = 0;
var issueWarning2;
if (DEV_MODE2) {
  global3.litIssuedWarnings ??= /* @__PURE__ */ new Set();
  issueWarning2 = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "";
    if (!global3.litIssuedWarnings.has(warning) && !global3.litIssuedWarnings.has(code)) {
      console.warn(warning);
      global3.litIssuedWarnings.add(warning);
    }
  };
  queueMicrotask(() => {
    issueWarning2("dev-mode", `Lit is in dev mode. Not recommended for production!`);
  });
}
var wrap = ENABLE_SHADYDOM_NOPATCH && global3.ShadyDOM?.inUse && global3.ShadyDOM?.noPatch === true ? global3.ShadyDOM.wrap : (node) => node;
var trustedTypes2 = global3.trustedTypes;
var policy = trustedTypes2 ? trustedTypes2.createPolicy("lit-html", {
  createHTML: (s10) => s10
}) : void 0;
var identityFunction = (value) => value;
var noopSanitizer = (_node, _name, _type) => identityFunction;
var setSanitizer = (newSanitizer) => {
  if (!ENABLE_EXTRA_SECURITY_HOOKS) {
    return;
  }
  if (sanitizerFactoryInternal !== noopSanitizer) {
    throw new Error(`Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.`);
  }
  sanitizerFactoryInternal = newSanitizer;
};
var _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
  sanitizerFactoryInternal = noopSanitizer;
};
var createSanitizer = (node, name, type) => {
  return sanitizerFactoryInternal(node, name, type);
};
var boundAttributeSuffix = "$lit$";
var marker = `lit$${Math.random().toFixed(9).slice(2)}$`;
var markerMatch = "?" + marker;
var nodeMarker = `<${markerMatch}>`;
var d = NODE_MODE3 && global3.document === void 0 ? {
  createTreeWalker() {
    return {};
  }
} : document;
var createMarker = () => d.createComment("");
var isPrimitive = (value) => value === null || typeof value != "object" && typeof value != "function";
var isArray = Array.isArray;
var isIterable = (value) => isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
typeof value?.[Symbol.iterator] === "function";
var SPACE_CHAR = `[ 	
\f\r]`;
var ATTR_VALUE_CHAR = `[^ 	
\f\r"'\`<>=]`;
var NAME_CHAR = `[^\\s"'>=/]`;
var textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var COMMENT_START = 1;
var TAG_NAME = 2;
var DYNAMIC_TAG_NAME = 3;
var commentEndRegex = /-->/g;
var comment2EndRegex = />/g;
var tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, "g");
var ENTIRE_MATCH = 0;
var ATTRIBUTE_NAME = 1;
var SPACES_AND_EQUALS = 2;
var QUOTE_CHAR = 3;
var singleQuoteAttrEndRegex = /'/g;
var doubleQuoteAttrEndRegex = /"/g;
var rawTextElement = /^(?:script|style|textarea|title)$/i;
var HTML_RESULT = 1;
var SVG_RESULT = 2;
var MATHML_RESULT = 3;
var ATTRIBUTE_PART = 1;
var CHILD_PART = 2;
var PROPERTY_PART = 3;
var BOOLEAN_ATTRIBUTE_PART = 4;
var EVENT_PART = 5;
var ELEMENT_PART = 6;
var COMMENT_PART = 7;
var tag = (type) => (strings, ...values) => {
  if (DEV_MODE2 && strings.some((s10) => s10 === void 0)) {
    console.warn("Some template strings are undefined.\nThis is probably caused by illegal octal escape sequences.");
  }
  if (DEV_MODE2) {
    if (values.some((val) => val?.["_$litStatic$"])) {
      issueWarning2("", `Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);
    }
  }
  return {
    // This property needs to remain unminified.
    ["_$litType$"]: type,
    strings,
    values
  };
};
var html = tag(HTML_RESULT);
var svg = tag(SVG_RESULT);
var mathml = tag(MATHML_RESULT);
var noChange = Symbol.for("lit-noChange");
var nothing = Symbol.for("lit-nothing");
var templateCache = /* @__PURE__ */ new WeakMap();
var walker = d.createTreeWalker(
  d,
  129
  /* NodeFilter.SHOW_{ELEMENT|COMMENT} */
);
var sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
  if (!isArray(tsa) || !tsa.hasOwnProperty("raw")) {
    let message = "invalid template strings array";
    if (DEV_MODE2) {
      message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g, "\n");
    }
    throw new Error(message);
  }
  return policy !== void 0 ? policy.createHTML(stringFromTSA) : stringFromTSA;
}
var getTemplateHtml = (strings, type) => {
  const l6 = strings.length - 1;
  const attrNames = [];
  let html2 = type === SVG_RESULT ? "<svg>" : type === MATHML_RESULT ? "<math>" : "";
  let rawTextEndRegex;
  let regex = textEndRegex;
  for (let i7 = 0; i7 < l6; i7++) {
    const s10 = strings[i7];
    let attrNameEndIndex = -1;
    let attrName;
    let lastIndex = 0;
    let match;
    while (lastIndex < s10.length) {
      regex.lastIndex = lastIndex;
      match = regex.exec(s10);
      if (match === null) {
        break;
      }
      lastIndex = regex.lastIndex;
      if (regex === textEndRegex) {
        if (match[COMMENT_START] === "!--") {
          regex = commentEndRegex;
        } else if (match[COMMENT_START] !== void 0) {
          regex = comment2EndRegex;
        } else if (match[TAG_NAME] !== void 0) {
          if (rawTextElement.test(match[TAG_NAME])) {
            rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, "g");
          }
          regex = tagEndRegex;
        } else if (match[DYNAMIC_TAG_NAME] !== void 0) {
          if (DEV_MODE2) {
            throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions");
          }
          regex = tagEndRegex;
        }
      } else if (regex === tagEndRegex) {
        if (match[ENTIRE_MATCH] === ">") {
          regex = rawTextEndRegex ?? textEndRegex;
          attrNameEndIndex = -1;
        } else if (match[ATTRIBUTE_NAME] === void 0) {
          attrNameEndIndex = -2;
        } else {
          attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
          attrName = match[ATTRIBUTE_NAME];
          regex = match[QUOTE_CHAR] === void 0 ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex;
        }
      } else if (regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex) {
        regex = tagEndRegex;
      } else if (regex === commentEndRegex || regex === comment2EndRegex) {
        regex = textEndRegex;
      } else {
        regex = tagEndRegex;
        rawTextEndRegex = void 0;
      }
    }
    if (DEV_MODE2) {
      console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, "unexpected parse state B");
    }
    const end = regex === tagEndRegex && strings[i7 + 1].startsWith("/>") ? " " : "";
    html2 += regex === textEndRegex ? s10 + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s10.slice(0, attrNameEndIndex) + boundAttributeSuffix + s10.slice(attrNameEndIndex)) + marker + end : s10 + marker + (attrNameEndIndex === -2 ? i7 : end);
  }
  const htmlResult = html2 + (strings[l6] || "<?>") + (type === SVG_RESULT ? "</svg>" : type === MATHML_RESULT ? "</math>" : "");
  return [trustFromTemplateString(strings, htmlResult), attrNames];
};
var Template = class _Template {
  constructor({
    strings,
    ["_$litType$"]: type
  }, options) {
    this.parts = [];
    let node;
    let nodeIndex = 0;
    let attrNameIndex = 0;
    const partCount = strings.length - 1;
    const parts = this.parts;
    const [html2, attrNames] = getTemplateHtml(strings, type);
    this.el = _Template.createElement(html2, options);
    walker.currentNode = this.el.content;
    if (type === SVG_RESULT || type === MATHML_RESULT) {
      const wrapper = this.el.content.firstChild;
      wrapper.replaceWith(...wrapper.childNodes);
    }
    while ((node = walker.nextNode()) !== null && parts.length < partCount) {
      if (node.nodeType === 1) {
        if (DEV_MODE2) {
          const tag2 = node.localName;
          if (/^(?:textarea|template)$/i.test(tag2) && node.innerHTML.includes(marker)) {
            const m11 = `Expressions are not supported inside \`${tag2}\` elements. See https://lit.dev/msg/expression-in-${tag2} for more information.`;
            if (tag2 === "template") {
              throw new Error(m11);
            } else issueWarning2("", m11);
          }
        }
        if (node.hasAttributes()) {
          for (const name of node.getAttributeNames()) {
            if (name.endsWith(boundAttributeSuffix)) {
              const realName = attrNames[attrNameIndex++];
              const value = node.getAttribute(name);
              const statics = value.split(marker);
              const m11 = /([.?@])?(.*)/.exec(realName);
              parts.push({
                type: ATTRIBUTE_PART,
                index: nodeIndex,
                name: m11[2],
                strings: statics,
                ctor: m11[1] === "." ? PropertyPart : m11[1] === "?" ? BooleanAttributePart : m11[1] === "@" ? EventPart : AttributePart
              });
              node.removeAttribute(name);
            } else if (name.startsWith(marker)) {
              parts.push({
                type: ELEMENT_PART,
                index: nodeIndex
              });
              node.removeAttribute(name);
            }
          }
        }
        if (rawTextElement.test(node.tagName)) {
          const strings2 = node.textContent.split(marker);
          const lastIndex = strings2.length - 1;
          if (lastIndex > 0) {
            node.textContent = trustedTypes2 ? trustedTypes2.emptyScript : "";
            for (let i7 = 0; i7 < lastIndex; i7++) {
              node.append(strings2[i7], createMarker());
              walker.nextNode();
              parts.push({
                type: CHILD_PART,
                index: ++nodeIndex
              });
            }
            node.append(strings2[lastIndex], createMarker());
          }
        }
      } else if (node.nodeType === 8) {
        const data = node.data;
        if (data === markerMatch) {
          parts.push({
            type: CHILD_PART,
            index: nodeIndex
          });
        } else {
          let i7 = -1;
          while ((i7 = node.data.indexOf(marker, i7 + 1)) !== -1) {
            parts.push({
              type: COMMENT_PART,
              index: nodeIndex
            });
            i7 += marker.length - 1;
          }
        }
      }
      nodeIndex++;
    }
    if (DEV_MODE2) {
      if (attrNames.length !== attrNameIndex) {
        throw new Error(`Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=\${true} ?disabled=\${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: 
\`` + strings.join("${...}") + "`");
      }
    }
    debugLogEvent2 && debugLogEvent2({
      kind: "template prep",
      template: this,
      clonableTemplate: this.el,
      parts: this.parts,
      strings
    });
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @nocollapse */
  static createElement(html2, _options) {
    const el = d.createElement("template");
    el.innerHTML = html2;
    return el;
  }
};
function resolveDirective(part, value, parent = part, attributeIndex) {
  if (value === noChange) {
    return value;
  }
  let currentDirective = attributeIndex !== void 0 ? parent.__directives?.[attributeIndex] : parent.__directive;
  const nextDirectiveConstructor = isPrimitive(value) ? void 0 : (
    // This property needs to remain unminified.
    value["_$litDirective$"]
  );
  if (currentDirective?.constructor !== nextDirectiveConstructor) {
    currentDirective?.["_$notifyDirectiveConnectionChanged"]?.(false);
    if (nextDirectiveConstructor === void 0) {
      currentDirective = void 0;
    } else {
      currentDirective = new nextDirectiveConstructor(part);
      currentDirective._$initialize(part, parent, attributeIndex);
    }
    if (attributeIndex !== void 0) {
      (parent.__directives ??= [])[attributeIndex] = currentDirective;
    } else {
      parent.__directive = currentDirective;
    }
  }
  if (currentDirective !== void 0) {
    value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
  }
  return value;
}
var TemplateInstance = class {
  constructor(template, parent) {
    this._$parts = [];
    this._$disconnectableChildren = void 0;
    this._$template = template;
    this._$parent = parent;
  }
  // Called by ChildPart parentNode getter
  get parentNode() {
    return this._$parent.parentNode;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  // This method is separate from the constructor because we need to return a
  // DocumentFragment and we don't want to hold onto it with an instance field.
  _clone(options) {
    const {
      el: {
        content
      },
      parts
    } = this._$template;
    const fragment = (options?.creationScope ?? d).importNode(content, true);
    walker.currentNode = fragment;
    let node = walker.nextNode();
    let nodeIndex = 0;
    let partIndex = 0;
    let templatePart = parts[0];
    while (templatePart !== void 0) {
      if (nodeIndex === templatePart.index) {
        let part;
        if (templatePart.type === CHILD_PART) {
          part = new ChildPart(node, node.nextSibling, this, options);
        } else if (templatePart.type === ATTRIBUTE_PART) {
          part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
        } else if (templatePart.type === ELEMENT_PART) {
          part = new ElementPart(node, this, options);
        }
        this._$parts.push(part);
        templatePart = parts[++partIndex];
      }
      if (nodeIndex !== templatePart?.index) {
        node = walker.nextNode();
        nodeIndex++;
      }
    }
    walker.currentNode = d;
    return fragment;
  }
  _update(values) {
    let i7 = 0;
    for (const part of this._$parts) {
      if (part !== void 0) {
        debugLogEvent2 && debugLogEvent2({
          kind: "set part",
          part,
          value: values[i7],
          valueIndex: i7,
          values,
          templateInstance: this
        });
        if (part.strings !== void 0) {
          part._$setValue(values, part, i7);
          i7 += part.strings.length - 2;
        } else {
          part._$setValue(values[i7]);
        }
      }
      i7++;
    }
  }
};
var ChildPart = class _ChildPart {
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent?._$isConnected ?? this.__isConnected;
  }
  constructor(startNode, endNode, parent, options) {
    this.type = CHILD_PART;
    this._$committedValue = nothing;
    this._$disconnectableChildren = void 0;
    this._$startNode = startNode;
    this._$endNode = endNode;
    this._$parent = parent;
    this.options = options;
    this.__isConnected = options?.isConnected ?? true;
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._textSanitizer = void 0;
    }
  }
  /**
   * The parent node into which the part renders its content.
   *
   * A ChildPart's content consists of a range of adjacent child nodes of
   * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
   * `.endNode`).
   *
   * - If both `.startNode` and `.endNode` are non-null, then the part's content
   * consists of all siblings between `.startNode` and `.endNode`, exclusively.
   *
   * - If `.startNode` is non-null but `.endNode` is null, then the part's
   * content consists of all siblings following `.startNode`, up to and
   * including the last child of `.parentNode`. If `.endNode` is non-null, then
   * `.startNode` will always be non-null.
   *
   * - If both `.endNode` and `.startNode` are null, then the part's content
   * consists of all child nodes of `.parentNode`.
   */
  get parentNode() {
    let parentNode = wrap(this._$startNode).parentNode;
    const parent = this._$parent;
    if (parent !== void 0 && parentNode?.nodeType === 11) {
      parentNode = parent.parentNode;
    }
    return parentNode;
  }
  /**
   * The part's leading marker node, if any. See `.parentNode` for more
   * information.
   */
  get startNode() {
    return this._$startNode;
  }
  /**
   * The part's trailing marker node, if any. See `.parentNode` for more
   * information.
   */
  get endNode() {
    return this._$endNode;
  }
  _$setValue(value, directiveParent = this) {
    if (DEV_MODE2 && this.parentNode === null) {
      throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
    }
    value = resolveDirective(this, value, directiveParent);
    if (isPrimitive(value)) {
      if (value === nothing || value == null || value === "") {
        if (this._$committedValue !== nothing) {
          debugLogEvent2 && debugLogEvent2({
            kind: "commit nothing to child",
            start: this._$startNode,
            end: this._$endNode,
            parent: this._$parent,
            options: this.options
          });
          this._$clear();
        }
        this._$committedValue = nothing;
      } else if (value !== this._$committedValue && value !== noChange) {
        this._commitText(value);
      }
    } else if (value["_$litType$"] !== void 0) {
      this._commitTemplateResult(value);
    } else if (value.nodeType !== void 0) {
      if (DEV_MODE2 && this.options?.host === value) {
        this._commitText(`[probable mistake: rendered a template's host in itself (commonly caused by writing \${this} in a template]`);
        console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
        return;
      }
      this._commitNode(value);
    } else if (isIterable(value)) {
      this._commitIterable(value);
    } else {
      this._commitText(value);
    }
  }
  _insert(node) {
    return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
  }
  _commitNode(value) {
    if (this._$committedValue !== value) {
      this._$clear();
      if (ENABLE_EXTRA_SECURITY_HOOKS && sanitizerFactoryInternal !== noopSanitizer) {
        const parentNodeName = this._$startNode.parentNode?.nodeName;
        if (parentNodeName === "STYLE" || parentNodeName === "SCRIPT") {
          let message = "Forbidden";
          if (DEV_MODE2) {
            if (parentNodeName === "STYLE") {
              message = `Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css\`...\` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.`;
            } else {
              message = `Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.`;
            }
          }
          throw new Error(message);
        }
      }
      debugLogEvent2 && debugLogEvent2({
        kind: "commit node",
        start: this._$startNode,
        parent: this._$parent,
        value,
        options: this.options
      });
      this._$committedValue = this._insert(value);
    }
  }
  _commitText(value) {
    if (this._$committedValue !== nothing && isPrimitive(this._$committedValue)) {
      const node = wrap(this._$startNode).nextSibling;
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._textSanitizer === void 0) {
          this._textSanitizer = createSanitizer(node, "data", "property");
        }
        value = this._textSanitizer(value);
      }
      debugLogEvent2 && debugLogEvent2({
        kind: "commit text",
        node,
        value,
        options: this.options
      });
      node.data = value;
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        const textNode = d.createTextNode("");
        this._commitNode(textNode);
        if (this._textSanitizer === void 0) {
          this._textSanitizer = createSanitizer(textNode, "data", "property");
        }
        value = this._textSanitizer(value);
        debugLogEvent2 && debugLogEvent2({
          kind: "commit text",
          node: textNode,
          value,
          options: this.options
        });
        textNode.data = value;
      } else {
        this._commitNode(d.createTextNode(value));
        debugLogEvent2 && debugLogEvent2({
          kind: "commit text",
          node: wrap(this._$startNode).nextSibling,
          value,
          options: this.options
        });
      }
    }
    this._$committedValue = value;
  }
  _commitTemplateResult(result) {
    const {
      values,
      ["_$litType$"]: type
    } = result;
    const template = typeof type === "number" ? this._$getTemplate(result) : (type.el === void 0 && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
    if (this._$committedValue?._$template === template) {
      debugLogEvent2 && debugLogEvent2({
        kind: "template updating",
        template,
        instance: this._$committedValue,
        parts: this._$committedValue._$parts,
        options: this.options,
        values
      });
      this._$committedValue._update(values);
    } else {
      const instance = new TemplateInstance(template, this);
      const fragment = instance._clone(this.options);
      debugLogEvent2 && debugLogEvent2({
        kind: "template instantiated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      instance._update(values);
      debugLogEvent2 && debugLogEvent2({
        kind: "template instantiated and updated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      this._commitNode(fragment);
      this._$committedValue = instance;
    }
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @internal */
  _$getTemplate(result) {
    let template = templateCache.get(result.strings);
    if (template === void 0) {
      templateCache.set(result.strings, template = new Template(result));
    }
    return template;
  }
  _commitIterable(value) {
    if (!isArray(this._$committedValue)) {
      this._$committedValue = [];
      this._$clear();
    }
    const itemParts = this._$committedValue;
    let partIndex = 0;
    let itemPart;
    for (const item of value) {
      if (partIndex === itemParts.length) {
        itemParts.push(itemPart = new _ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options));
      } else {
        itemPart = itemParts[partIndex];
      }
      itemPart._$setValue(item);
      partIndex++;
    }
    if (partIndex < itemParts.length) {
      this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
      itemParts.length = partIndex;
    }
  }
  /**
   * Removes the nodes contained within this Part from the DOM.
   *
   * @param start Start node to clear from, for clearing a subset of the part's
   *     DOM (used when truncating iterables)
   * @param from  When `start` is specified, the index within the iterable from
   *     which ChildParts are being removed, used for disconnecting directives
   *     in those Parts.
   *
   * @internal
   */
  _$clear(start = wrap(this._$startNode).nextSibling, from) {
    this._$notifyConnectionChanged?.(false, true, from);
    while (start !== this._$endNode) {
      const n7 = wrap(start).nextSibling;
      wrap(start).remove();
      start = n7;
    }
  }
  /**
   * Implementation of RootPart's `isConnected`. Note that this method
   * should only be called on `RootPart`s (the `ChildPart` returned from a
   * top-level `render()` call). It has no effect on non-root ChildParts.
   * @param isConnected Whether to set
   * @internal
   */
  setConnected(isConnected) {
    if (this._$parent === void 0) {
      this.__isConnected = isConnected;
      this._$notifyConnectionChanged?.(isConnected);
    } else if (DEV_MODE2) {
      throw new Error("part.setConnected() may only be called on a RootPart returned from render().");
    }
  }
};
var AttributePart = class {
  get tagName() {
    return this.element.tagName;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  constructor(element, name, strings, parent, options) {
    this.type = ATTRIBUTE_PART;
    this._$committedValue = nothing;
    this._$disconnectableChildren = void 0;
    this.element = element;
    this.name = name;
    this._$parent = parent;
    this.options = options;
    if (strings.length > 2 || strings[0] !== "" || strings[1] !== "") {
      this._$committedValue = new Array(strings.length - 1).fill(new String());
      this.strings = strings;
    } else {
      this._$committedValue = nothing;
    }
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._sanitizer = void 0;
    }
  }
  /**
   * Sets the value of this part by resolving the value from possibly multiple
   * values and static strings and committing it to the DOM.
   * If this part is single-valued, `this._strings` will be undefined, and the
   * method will be called with a single value argument. If this part is
   * multi-value, `this._strings` will be defined, and the method is called
   * with the value array of the part's owning TemplateInstance, and an offset
   * into the value array from which the values should be read.
   * This method is overloaded this way to eliminate short-lived array slices
   * of the template instance values, and allow a fast-path for single-valued
   * parts.
   *
   * @param value The part value, or an array of values for multi-valued parts
   * @param valueIndex the index to start reading values from. `undefined` for
   *   single-valued parts
   * @param noCommit causes the part to not commit its value to the DOM. Used
   *   in hydration to prime attribute parts with their first-rendered value,
   *   but not set the attribute, and in SSR to no-op the DOM operation and
   *   capture the value for serialization.
   *
   * @internal
   */
  _$setValue(value, directiveParent = this, valueIndex, noCommit) {
    const strings = this.strings;
    let change = false;
    if (strings === void 0) {
      value = resolveDirective(this, value, directiveParent, 0);
      change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange;
      if (change) {
        this._$committedValue = value;
      }
    } else {
      const values = value;
      value = strings[0];
      let i7, v7;
      for (i7 = 0; i7 < strings.length - 1; i7++) {
        v7 = resolveDirective(this, values[valueIndex + i7], directiveParent, i7);
        if (v7 === noChange) {
          v7 = this._$committedValue[i7];
        }
        change ||= !isPrimitive(v7) || v7 !== this._$committedValue[i7];
        if (v7 === nothing) {
          value = nothing;
        } else if (value !== nothing) {
          value += (v7 ?? "") + strings[i7 + 1];
        }
        this._$committedValue[i7] = v7;
      }
    }
    if (change && !noCommit) {
      this._commitValue(value);
    }
  }
  /** @internal */
  _commitValue(value) {
    if (value === nothing) {
      wrap(this.element).removeAttribute(this.name);
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._sanitizer === void 0) {
          this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "attribute");
        }
        value = this._sanitizer(value ?? "");
      }
      debugLogEvent2 && debugLogEvent2({
        kind: "commit attribute",
        element: this.element,
        name: this.name,
        value,
        options: this.options
      });
      wrap(this.element).setAttribute(this.name, value ?? "");
    }
  }
};
var PropertyPart = class extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = PROPERTY_PART;
  }
  /** @internal */
  _commitValue(value) {
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      if (this._sanitizer === void 0) {
        this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "property");
      }
      value = this._sanitizer(value);
    }
    debugLogEvent2 && debugLogEvent2({
      kind: "commit property",
      element: this.element,
      name: this.name,
      value,
      options: this.options
    });
    this.element[this.name] = value === nothing ? void 0 : value;
  }
};
var BooleanAttributePart = class extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = BOOLEAN_ATTRIBUTE_PART;
  }
  /** @internal */
  _commitValue(value) {
    debugLogEvent2 && debugLogEvent2({
      kind: "commit boolean attribute",
      element: this.element,
      name: this.name,
      value: !!(value && value !== nothing),
      options: this.options
    });
    wrap(this.element).toggleAttribute(this.name, !!value && value !== nothing);
  }
};
var EventPart = class extends AttributePart {
  constructor(element, name, strings, parent, options) {
    super(element, name, strings, parent, options);
    this.type = EVENT_PART;
    if (DEV_MODE2 && this.strings !== void 0) {
      throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`);
    }
  }
  // EventPart does not use the base _$setValue/_resolveValue implementation
  // since the dirty checking is more complex
  /** @internal */
  _$setValue(newListener, directiveParent = this) {
    newListener = resolveDirective(this, newListener, directiveParent, 0) ?? nothing;
    if (newListener === noChange) {
      return;
    }
    const oldListener = this._$committedValue;
    const shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive;
    const shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
    debugLogEvent2 && debugLogEvent2({
      kind: "commit event listener",
      element: this.element,
      name: this.name,
      value: newListener,
      options: this.options,
      removeListener: shouldRemoveListener,
      addListener: shouldAddListener,
      oldListener
    });
    if (shouldRemoveListener) {
      this.element.removeEventListener(this.name, this, oldListener);
    }
    if (shouldAddListener) {
      this.element.addEventListener(this.name, this, newListener);
    }
    this._$committedValue = newListener;
  }
  handleEvent(event) {
    if (typeof this._$committedValue === "function") {
      this._$committedValue.call(this.options?.host ?? this.element, event);
    } else {
      this._$committedValue.handleEvent(event);
    }
  }
};
var ElementPart = class {
  constructor(element, parent, options) {
    this.element = element;
    this.type = ELEMENT_PART;
    this._$disconnectableChildren = void 0;
    this._$parent = parent;
    this.options = options;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value) {
    debugLogEvent2 && debugLogEvent2({
      kind: "commit to element binding",
      element: this.element,
      value,
      options: this.options
    });
    resolveDirective(this, value);
  }
};
var polyfillSupport2 = DEV_MODE2 ? global3.litHtmlPolyfillSupportDevMode : global3.litHtmlPolyfillSupport;
polyfillSupport2?.(Template, ChildPart);
(global3.litHtmlVersions ??= []).push("3.3.3");
if (DEV_MODE2 && global3.litHtmlVersions.length > 1) {
  queueMicrotask(() => {
    issueWarning2("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
  });
}
var render = (value, container, options) => {
  if (DEV_MODE2 && container == null) {
    throw new TypeError(`The container to render into may not be ${container}`);
  }
  const renderId = DEV_MODE2 ? debugLogRenderId++ : 0;
  const partOwnerNode = options?.renderBefore ?? container;
  let part = partOwnerNode["_$litPart$"];
  debugLogEvent2 && debugLogEvent2({
    kind: "begin render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  if (part === void 0) {
    const endNode = options?.renderBefore ?? null;
    partOwnerNode["_$litPart$"] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, void 0, options ?? {});
  }
  part._$setValue(value);
  debugLogEvent2 && debugLogEvent2({
    kind: "end render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
  render.setSanitizer = setSanitizer;
  render.createSanitizer = createSanitizer;
  if (DEV_MODE2) {
    render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
  }
}

// ../../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/development/lit-element.js
var JSCompiler_renameProperty2 = (prop, _obj) => prop;
var DEV_MODE3 = true;
var global4 = globalThis;
var issueWarning3;
if (DEV_MODE3) {
  global4.litIssuedWarnings ??= /* @__PURE__ */ new Set();
  issueWarning3 = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!global4.litIssuedWarnings.has(warning) && !global4.litIssuedWarnings.has(code)) {
      console.warn(warning);
      global4.litIssuedWarnings.add(warning);
    }
  };
}
var LitElement = class extends ReactiveElement {
  constructor() {
    super(...arguments);
    this.renderOptions = {
      host: this
    };
    this.__childPart = void 0;
  }
  /**
   * @category rendering
   */
  createRenderRoot() {
    const renderRoot = super.createRenderRoot();
    this.renderOptions.renderBefore ??= renderRoot.firstChild;
    return renderRoot;
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param changedProperties Map of changed properties with old values
   * @category updates
   */
  update(changedProperties) {
    const value = this.render();
    if (!this.hasUpdated) {
      this.renderOptions.isConnected = this.isConnected;
    }
    super.update(changedProperties);
    this.__childPart = render(value, this.renderRoot, this.renderOptions);
  }
  /**
   * Invoked when the component is added to the document's DOM.
   *
   * In `connectedCallback()` you should setup tasks that should only occur when
   * the element is connected to the document. The most common of these is
   * adding event listeners to nodes external to the element, like a keydown
   * event handler added to the window.
   *
   * ```ts
   * connectedCallback() {
   *   super.connectedCallback();
   *   addEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * Typically, anything done in `connectedCallback()` should be undone when the
   * element is disconnected, in `disconnectedCallback()`.
   *
   * @category lifecycle
   */
  connectedCallback() {
    super.connectedCallback();
    this.__childPart?.setConnected(true);
  }
  /**
   * Invoked when the component is removed from the document's DOM.
   *
   * This callback is the main signal to the element that it may no longer be
   * used. `disconnectedCallback()` should ensure that nothing is holding a
   * reference to the element (such as event listeners added to nodes external
   * to the element), so that it is free to be garbage collected.
   *
   * ```ts
   * disconnectedCallback() {
   *   super.disconnectedCallback();
   *   window.removeEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * An element may be re-connected after being disconnected.
   *
   * @category lifecycle
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.__childPart?.setConnected(false);
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `ChildPart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   * @category rendering
   */
  render() {
    return noChange;
  }
};
LitElement["_$litElement$"] = true;
LitElement[JSCompiler_renameProperty2("finalized", LitElement)] = true;
global4.litElementHydrateSupport?.({
  LitElement
});
var polyfillSupport3 = DEV_MODE3 ? global4.litElementPolyfillSupportDevMode : global4.litElementPolyfillSupport;
polyfillSupport3?.({
  LitElement
});
(global4.litElementVersions ??= []).push("4.2.2");
if (DEV_MODE3 && global4.litElementVersions.length > 1) {
  queueMicrotask(() => {
    issueWarning3("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
  });
}

// ../../node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/development/decorators/custom-element.js
var customElement = (tagName) => (classOrTarget, context) => {
  if (context !== void 0) {
    context.addInitializer(() => {
      customElements.define(tagName, classOrTarget);
    });
  } else {
    customElements.define(tagName, classOrTarget);
  }
};

// ../../node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/development/decorators/property.js
var DEV_MODE4 = true;
var issueWarning4;
if (DEV_MODE4) {
  globalThis.litIssuedWarnings ??= /* @__PURE__ */ new Set();
  issueWarning4 = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!globalThis.litIssuedWarnings.has(warning) && !globalThis.litIssuedWarnings.has(code)) {
      console.warn(warning);
      globalThis.litIssuedWarnings.add(warning);
    }
  };
}
var legacyProperty = (options, proto, name) => {
  const hasOwnProperty = proto.hasOwnProperty(name);
  proto.constructor.createProperty(name, options);
  return hasOwnProperty ? Object.getOwnPropertyDescriptor(proto, name) : void 0;
};
var defaultPropertyDeclaration2 = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var standardProperty = (options = defaultPropertyDeclaration2, target, context) => {
  const {
    kind,
    metadata
  } = context;
  if (DEV_MODE4 && metadata == null) {
    issueWarning4("missing-class-metadata", `The class ${target} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);
  }
  let properties = globalThis.litPropertyMetadata.get(metadata);
  if (properties === void 0) {
    globalThis.litPropertyMetadata.set(metadata, properties = /* @__PURE__ */ new Map());
  }
  if (kind === "setter") {
    options = Object.create(options);
    options.wrapped = true;
  }
  properties.set(context.name, options);
  if (kind === "accessor") {
    const {
      name
    } = context;
    return {
      set(v7) {
        const oldValue = target.get.call(this);
        target.set.call(this, v7);
        this.requestUpdate(name, oldValue, options, true, v7);
      },
      init(v7) {
        if (v7 !== void 0) {
          this._$changeProperty(name, void 0, options, v7);
        }
        return v7;
      }
    };
  } else if (kind === "setter") {
    const {
      name
    } = context;
    return function(value) {
      const oldValue = this[name];
      target.call(this, value);
      this.requestUpdate(name, oldValue, options, true, value);
    };
  }
  throw new Error(`Unsupported decorator location: ${kind}`);
};
function property(options) {
  return (protoOrTarget, nameOrContext) => {
    return typeof nameOrContext === "object" ? standardProperty(options, protoOrTarget, nameOrContext) : legacyProperty(options, protoOrTarget, nameOrContext);
  };
}

// ../../node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/development/decorators/state.js
function state(options) {
  return property(__spreadProps(__spreadValues({}, options), {
    // Add both `state` and `attribute` because we found a third party
    // controller that is keying off of PropertyOptions.state to determine
    // whether a field is a private internal property or not.
    state: true,
    attribute: false
  }));
}

// ../../node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/development/decorators/query.js
var DEV_MODE5 = true;
var issueWarning5;
if (DEV_MODE5) {
  globalThis.litIssuedWarnings ??= /* @__PURE__ */ new Set();
  issueWarning5 = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "";
    if (!globalThis.litIssuedWarnings.has(warning) && !globalThis.litIssuedWarnings.has(code)) {
      console.warn(warning);
      globalThis.litIssuedWarnings.add(warning);
    }
  };
}

// ../../packages/core/dist/chunks/base-DL2INsnR.js
var d2 = class extends LitElement {
  constructor() {
    super(...arguments), this._targets = /* @__PURE__ */ new Map(), this._seenSlots = /* @__PURE__ */ new Set();
  }
  createRenderRoot() {
    const t7 = document.createElement("span");
    return t7.setAttribute("data-andy-chrome", ""), t7.style.display = "contents", this.appendChild(t7), this._chrome = t7, t7;
  }
  connectedCallback() {
    super.connectedCallback(), this._observer || (this._observer = new MutationObserver(() => this.projectAuthorNodes()), this._observer.observe(this, {
      childList: true
    })), this.projectAuthorNodes();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._observer?.disconnect(), this._observer = void 0;
  }
  /**
   * A persistent, transparent projection target for the given slot name (`""`
   * is the default slot). Render it in your template, e.g.
   * `html`<button class="btn">${this.slotTarget()}</button>``.
   */
  slotTarget(t7 = "") {
    let e6 = this._targets.get(t7);
    return e6 || (e6 = document.createElement("span"), e6.setAttribute("data-andy-slot", t7), e6.style.display = "contents", this._targets.set(t7, e6)), e6;
  }
  /** Whether any author child targets the given slot (`""` = default). */
  hasSlot(t7 = "") {
    return this._seenSlots.has(t7);
  }
  /** Move author children (every direct child except the chrome) into targets. */
  projectAuthorNodes() {
    const t7 = Array.from(this.childNodes).filter((s10) => s10 !== this._chrome);
    if (!t7.length) return;
    let e6 = false;
    for (const s10 of t7) {
      const r4 = n(s10);
      this._seenSlots.has(r4) || (this._seenSlots.add(r4), e6 = true);
    }
    e6 && this.requestUpdate();
    for (const s10 of t7) {
      const r4 = this._targets.get(n(s10)) ?? this._targets.get("");
      r4 && s10.parentNode !== r4 && r4.appendChild(s10);
    }
  }
  updated(t7) {
    super.updated(t7), this.projectAuthorNodes();
  }
};
function n(o8) {
  return o8.nodeType === Node.ELEMENT_NODE && o8.getAttribute("slot") || "";
}
function c(o8, t7) {
  typeof customElements > "u" || customElements.get(o8) || customElements.define(o8, t7);
}

// ../../packages/core/dist/components/button.js
var y = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var r = (s10, o8, a7, i7) => {
  for (var e6 = i7 > 1 ? void 0 : i7 ? f(o8, a7) : o8, p6 = s10.length - 1, l6; p6 >= 0; p6--) (l6 = s10[p6]) && (e6 = (i7 ? l6(o8, a7, e6) : l6(e6)) || e6);
  return i7 && e6 && y(o8, a7, e6), e6;
};
var t = class extends d2 {
  constructor() {
    super(...arguments), this.variant = "primary", this.size = "md", this.disabled = false, this.loading = false, this.type = "button";
  }
  onClick(s10) {
    if (this.disabled || this.loading) {
      s10.stopImmediatePropagation(), s10.preventDefault();
      return;
    }
    this.dispatchEvent(new CustomEvent("andy-click", {
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return html`
      <button
        class="btn btn-${this.size} btn-${this.variant}"
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        @click=${this.onClick}
      >
        ${this.loading ? html`<span class="btn-spinner"></span>` : nothing}
        ${this.slotTarget()}
      </button>
    `;
  }
};
r([property({
  reflect: true
})], t.prototype, "variant", 2);
r([property({
  reflect: true
})], t.prototype, "size", 2);
r([property({
  type: Boolean,
  reflect: true
})], t.prototype, "disabled", 2);
r([property({
  type: Boolean,
  reflect: true
})], t.prototype, "loading", 2);
r([property()], t.prototype, "type", 2);
t = r([customElement("andy-button")], t);
c("andy-button", t);

// ../../packages/core/dist/components/badge.js
var c2 = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var m = (o8, e6, s10, t7) => {
  for (var r4 = t7 > 1 ? void 0 : t7 ? u(e6, s10) : e6, n7 = o8.length - 1, p6; n7 >= 0; n7--) (p6 = o8[n7]) && (r4 = (t7 ? p6(e6, s10, r4) : p6(r4)) || r4);
  return t7 && r4 && c2(e6, s10, r4), r4;
};
var a = class extends d2 {
  constructor() {
    super(...arguments), this.variant = "primary";
  }
  render() {
    return html`<span class="dp-badge ${this.variant}">${this.slotTarget()}</span>`;
  }
};
m([property({
  reflect: true
})], a.prototype, "variant", 2);
a = m([customElement("andy-badge")], a);
c("andy-badge", a);

// ../../packages/core/dist/components/status.js
var v = Object.defineProperty;
var y2 = Object.getOwnPropertyDescriptor;
var o = (u4, t7, n7, e6) => {
  for (var s10 = e6 > 1 ? void 0 : e6 ? y2(t7, n7) : t7, a7 = u4.length - 1, l6; a7 >= 0; a7--) (l6 = u4[a7]) && (s10 = (e6 ? l6(t7, n7, s10) : l6(s10)) || s10);
  return e6 && s10 && v(t7, n7, s10), s10;
};
var r2 = class extends d2 {
  constructor() {
    super(...arguments), this.status = "unknown";
  }
  render() {
    return html`<span class="ds-status ${this.status}"><span class="dot"></span>${this.slotTarget()}</span>`;
  }
};
o([property({
  reflect: true
})], r2.prototype, "status", 2);
r2 = o([customElement("andy-status")], r2);
c("andy-status", r2);
var p = class extends d2 {
  render() {
    return html`<span class="ds-ver-pill">${this.slotTarget()}</span>`;
  }
};
p = o([customElement("andy-version-pill")], p);
c("andy-version-pill", p);

// ../../packages/core/dist/components/input.js
var y3 = Object.defineProperty;
var b = Object.getOwnPropertyDescriptor;
var t2 = (l6, p6, o8, a7) => {
  for (var r4 = a7 > 1 ? void 0 : a7 ? b(p6, o8) : p6, n7 = l6.length - 1, u4; n7 >= 0; n7--) (u4 = l6[n7]) && (r4 = (a7 ? u4(p6, o8, r4) : u4(r4)) || r4);
  return a7 && r4 && y3(p6, o8, r4), r4;
};
var e = class extends d2 {
  constructor() {
    super(...arguments), this.label = "", this.value = "", this.placeholder = "", this.type = "text", this.required = false, this.disabled = false, this.error = "";
  }
  onInput(l6) {
    this.value = l6.target.value, this.dispatchEvent(new CustomEvent("andy-input", {
      detail: this.value,
      bubbles: true,
      composed: true
    }));
  }
  onChange() {
    this.dispatchEvent(new CustomEvent("andy-change", {
      detail: this.value,
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return html`
      <div class="dp-field">
        ${this.label ? html`<label class="label">${this.label}${this.required ? html` <span class="req">*</span>` : nothing}</label>` : nothing}
        <input
          class="dp-input ${this.error ? "is-error" : ""}"
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @input=${this.onInput}
          @change=${this.onChange}
        />
        ${this.error ? html`<span class="error-msg">${this.error}</span>` : nothing}
      </div>
    `;
  }
};
t2([property()], e.prototype, "label", 2);
t2([property()], e.prototype, "value", 2);
t2([property()], e.prototype, "placeholder", 2);
t2([property()], e.prototype, "type", 2);
t2([property({
  type: Boolean,
  reflect: true
})], e.prototype, "required", 2);
t2([property({
  type: Boolean,
  reflect: true
})], e.prototype, "disabled", 2);
t2([property()], e.prototype, "error", 2);
e = t2([customElement("andy-input")], e);
c("andy-input", e);

// ../../packages/core/dist/components/select.js
var d3 = Object.defineProperty;
var b2 = Object.getOwnPropertyDescriptor;
var o2 = (t7, e6, r4, a7) => {
  for (var l6 = a7 > 1 ? void 0 : a7 ? b2(e6, r4) : e6, n7 = t7.length - 1, i7; n7 >= 0; n7--) (i7 = t7[n7]) && (l6 = (a7 ? i7(e6, r4, l6) : i7(l6)) || l6);
  return a7 && l6 && d3(e6, r4, l6), l6;
};
var s = class extends d2 {
  constructor() {
    super(...arguments), this.label = "", this.value = "", this.options = [];
  }
  onChange(t7) {
    this.value = t7.target.value, this.dispatchEvent(new CustomEvent("andy-change", {
      detail: this.value,
      bubbles: true,
      composed: true
    }));
  }
  render() {
    const t7 = html`
      <select class="ds-select" .value=${this.value} @change=${this.onChange}>
        ${this.options.map((e6) => html`<option value=${e6.value}>${e6.label}</option>`)}
      </select>
    `;
    return this.label ? html`<div class="dp-field"><label class="label">${this.label}</label>${t7}</div>` : t7;
  }
  updated(t7) {
    super.updated(t7);
    const e6 = this.querySelector("select");
    e6 && e6.value !== this.value && (e6.value = this.value);
  }
};
o2([property()], s.prototype, "label", 2);
o2([property()], s.prototype, "value", 2);
o2([property({
  attribute: false
})], s.prototype, "options", 2);
s = o2([customElement("andy-select")], s);
c("andy-select", s);

// ../../packages/core/dist/chunks/icons-Dyl0601F.js
var y4 = (x) => svg`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${x}</svg>`;
var n2 = {
  check: () => y4(svg`<polyline points="20 6 9 17 4 12"/>`),
  info: () => y4(svg`<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>`),
  warning: () => y4(svg`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`),
  error: () => y4(svg`<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>`),
  close: () => y4(svg`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`),
  eye: () => y4(svg`<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`),
  copy: () => y4(svg`<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>`),
  search: () => y4(svg`<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`),
  sun: () => y4(svg`<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`),
  moon: () => y4(svg`<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`),
  chevron: () => y4(svg`<polyline points="6 9 12 15 18 9"/>`)
};

// ../../packages/core/dist/components/search-input.js
var m2 = Object.defineProperty;
var f2 = Object.getOwnPropertyDescriptor;
var l = (r4, s10, p6, a7) => {
  for (var e6 = a7 > 1 ? void 0 : a7 ? f2(s10, p6) : s10, n7 = r4.length - 1, o8; n7 >= 0; n7--) (o8 = r4[n7]) && (e6 = (a7 ? o8(s10, p6, e6) : o8(e6)) || e6);
  return a7 && e6 && m2(s10, p6, e6), e6;
};
var t3 = class extends d2 {
  constructor() {
    super(...arguments), this.value = "", this.placeholder = "Search…";
  }
  onInput(r4) {
    this.value = r4.target.value, this.dispatchEvent(new CustomEvent("andy-input", {
      detail: this.value,
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return html`
      <div class="search-input-wrapper">
        <span class="search-icon">${n2.search()}</span>
        <input
          class="search-input"
          type="search"
          .value=${this.value}
          placeholder=${this.placeholder}
          @input=${this.onInput}
        />
      </div>
    `;
  }
};
l([property()], t3.prototype, "value", 2);
l([property()], t3.prototype, "placeholder", 2);
t3 = l([customElement("andy-search-input")], t3);
c("andy-search-input", t3);

// ../../packages/core/dist/components/switch.js
var f3 = Object.defineProperty;
var m3 = Object.getOwnPropertyDescriptor;
var o3 = (s10, r4, c9, a7) => {
  for (var e6 = a7 > 1 ? void 0 : a7 ? m3(r4, c9) : r4, n7 = s10.length - 1, l6; n7 >= 0; n7--) (l6 = s10[n7]) && (e6 = (a7 ? l6(r4, c9, e6) : l6(e6)) || e6);
  return a7 && e6 && f3(r4, c9, e6), e6;
};
var t4 = class extends d2 {
  constructor() {
    super(...arguments), this.checked = false, this.disabled = false;
  }
  onChange(s10) {
    this.checked = s10.target.checked, this.dispatchEvent(new CustomEvent("andy-change", {
      detail: this.checked,
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return html`
      <label class="ds-row ds-row--tight" style="cursor:${this.disabled ? "not-allowed" : "pointer"}">
        <span class="ds-switch">
          <input type="checkbox" .checked=${this.checked} ?disabled=${this.disabled} @change=${this.onChange} />
          <span class="track"></span>
        </span>
        ${this.hasSlot() ? html`<span class="t-label">${this.slotTarget()}</span>` : nothing}
      </label>
    `;
  }
};
o3([property({
  type: Boolean,
  reflect: true
})], t4.prototype, "checked", 2);
o3([property({
  type: Boolean,
  reflect: true
})], t4.prototype, "disabled", 2);
t4 = o3([customElement("andy-switch")], t4);
c("andy-switch", t4);

// ../../packages/core/dist/components/card.js
var m4 = Object.defineProperty;
var v2 = Object.getOwnPropertyDescriptor;
var l2 = (t7, o8, a7, s10) => {
  for (var e6 = s10 > 1 ? void 0 : s10 ? v2(o8, a7) : o8, p6 = t7.length - 1, d8; p6 >= 0; p6--) (d8 = t7[p6]) && (e6 = (s10 ? d8(o8, a7, e6) : d8(e6)) || e6);
  return s10 && e6 && m4(o8, a7, e6), e6;
};
var r3 = class extends d2 {
  constructor() {
    super(...arguments), this.hoverable = false, this.pad = "md";
  }
  render() {
    const t7 = this.pad === "none" ? "" : `p-${this.pad}`;
    return html`<div class="dp-card ${this.hoverable ? "hoverable" : ""} ${t7}">${this.slotTarget()}</div>`;
  }
};
l2([property({
  type: Boolean,
  reflect: true
})], r3.prototype, "hoverable", 2);
l2([property({
  reflect: true
})], r3.prototype, "pad", 2);
r3 = l2([customElement("andy-card")], r3);
c("andy-card", r3);

// ../../packages/core/dist/components/skill-card.js
var f4 = Object.defineProperty;
var u2 = Object.getOwnPropertyDescriptor;
var i = (e6, d8, a7, o8) => {
  for (var r4 = o8 > 1 ? void 0 : o8 ? u2(d8, a7) : d8, n7 = e6.length - 1, p6; n7 >= 0; n7--) (p6 = e6[n7]) && (r4 = (o8 ? p6(d8, a7, r4) : p6(r4)) || r4);
  return o8 && r4 && f4(d8, a7, r4), r4;
};
var s2 = class extends d2 {
  constructor() {
    super(...arguments), this.heading = "", this.description = "", this.slug = "", this.version = "", this.href = "";
  }
  render() {
    const e6 = html`
      <div class="ds-skill-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
      <div>
        <h3 class="ds-skill-card__title">${this.heading}</h3>
        <p class="ds-skill-card__desc">${this.description}</p>
      </div>
      <div class="ds-skill-card__meta">
        ${this.slug ? html`<code class="ds-skill-card__slug">${this.slug}</code>` : nothing}
        ${this.version ? html`<span class="ds-ver-pill">${this.version}</span>` : nothing}
      </div>
    `;
    return this.href ? html`<a class="ds-skill-card" href=${this.href}>${e6}</a>` : html`<div class="ds-skill-card">${e6}</div>`;
  }
};
i([property()], s2.prototype, "heading", 2);
i([property()], s2.prototype, "description", 2);
i([property()], s2.prototype, "slug", 2);
i([property()], s2.prototype, "version", 2);
i([property()], s2.prototype, "href", 2);
s2 = i([customElement("andy-skill-card")], s2);
c("andy-skill-card", s2);

// ../../packages/core/dist/components/stat.js
var _ = Object.defineProperty;
var c3 = Object.getOwnPropertyDescriptor;
var n3 = (o8, e6, r4, a7) => {
  for (var t7 = a7 > 1 ? void 0 : a7 ? c3(e6, r4) : e6, l6 = o8.length - 1, p6; l6 >= 0; l6--) (p6 = o8[l6]) && (t7 = (a7 ? p6(e6, r4, t7) : p6(t7)) || t7);
  return a7 && t7 && _(e6, r4, t7), t7;
};
var s3 = class extends d2 {
  constructor() {
    super(...arguments), this.value = "", this.label = "";
  }
  render() {
    return html`<div class="ds-stat"><span class="ds-stat__value">${this.value}</span><span class="ds-stat__label">${this.label}</span></div>`;
  }
};
n3([property()], s3.prototype, "value", 2);
n3([property()], s3.prototype, "label", 2);
s3 = n3([customElement("andy-stat")], s3);
c("andy-stat", s3);

// ../../packages/core/dist/components/callout.js
var d4 = Object.defineProperty;
var h = Object.getOwnPropertyDescriptor;
var l3 = (i7, t7, n7, e6) => {
  for (var r4 = e6 > 1 ? void 0 : e6 ? h(t7, n7) : t7, s10 = i7.length - 1, a7; s10 >= 0; s10--) (a7 = i7[s10]) && (r4 = (e6 ? a7(t7, n7, r4) : a7(r4)) || r4);
  return e6 && r4 && d4(t7, n7, r4), r4;
};
var _2 = {
  info: "info",
  warning: "warning",
  success: "check",
  error: "error"
};
var o4 = class extends d2 {
  constructor() {
    super(...arguments), this.variant = "info";
  }
  render() {
    return html`<div class="ds-callout ${this.variant}">${n2[_2[this.variant]]()}<div>${this.slotTarget()}</div></div>`;
  }
};
l3([property({
  reflect: true
})], o4.prototype, "variant", 2);
o4 = l3([customElement("andy-callout")], o4);
c("andy-callout", o4);

// ../../packages/core/dist/components/avatar.js
var v3 = Object.defineProperty;
var c4 = Object.getOwnPropertyDescriptor;
var p2 = (d8, t7, o8, s10) => {
  for (var r4 = s10 > 1 ? void 0 : s10 ? c4(t7, o8) : t7, a7 = d8.length - 1, n7; a7 >= 0; a7--) (n7 = d8[a7]) && (r4 = (s10 ? n7(t7, o8, r4) : n7(r4)) || r4);
  return s10 && r4 && v3(t7, o8, r4), r4;
};
var e2 = class extends d2 {
  constructor() {
    super(...arguments), this.size = "md", this.round = false;
  }
  render() {
    return html`<div class="ds-avatar ${this.size} ${this.round ? "round" : ""}">${this.slotTarget()}</div>`;
  }
};
p2([property({
  reflect: true
})], e2.prototype, "size", 2);
p2([property({
  type: Boolean,
  reflect: true
})], e2.prototype, "round", 2);
e2 = p2([customElement("andy-avatar")], e2);
c("andy-avatar", e2);

// ../../packages/core/dist/components/progress.js
var c5 = Object.defineProperty;
var f5 = Object.getOwnPropertyDescriptor;
var l4 = (e6, s10, o8, t7) => {
  for (var r4 = t7 > 1 ? void 0 : t7 ? f5(s10, o8) : s10, p6 = e6.length - 1, n7; p6 >= 0; p6--) (n7 = e6[p6]) && (r4 = (t7 ? n7(s10, o8, r4) : n7(r4)) || r4);
  return t7 && r4 && c5(s10, o8, r4), r4;
};
var a2 = class extends d2 {
  constructor() {
    super(...arguments), this.value = 0;
  }
  render() {
    const e6 = Math.max(0, Math.min(100, this.value));
    return html`<div class="ds-progress" role="progressbar" aria-valuenow=${e6} aria-valuemin="0" aria-valuemax="100"><span style="width:${e6}%"></span></div>`;
  }
};
l4([property({
  type: Number
})], a2.prototype, "value", 2);
a2 = l4([customElement("andy-progress")], a2);
c("andy-progress", a2);

// ../../packages/core/dist/components/icon-chip.js
var m5 = Object.defineProperty;
var f6 = Object.getOwnPropertyDescriptor;
var p3 = (r4, i7, n7, o8) => {
  for (var t7 = o8 > 1 ? void 0 : o8 ? f6(i7, n7) : i7, s10 = r4.length - 1, c9; s10 >= 0; s10--) (c9 = r4[s10]) && (t7 = (o8 ? c9(i7, n7, t7) : c9(t7)) || t7);
  return o8 && t7 && m5(i7, n7, t7), t7;
};
var e3 = class extends d2 {
  constructor() {
    super(...arguments), this.variant = "tinted", this.size = "md";
  }
  render() {
    const r4 = ["au-icon-chip", this.size === "lg" ? "au-icon-chip--lg" : "", this.variant === "solid" ? "au-icon-chip--solid" : "", this.variant === "muted" ? "au-icon-chip--muted" : ""].filter(Boolean).join(" ");
    return html`<div class=${r4}>${this.slotTarget()}</div>`;
  }
};
p3([property({
  reflect: true
})], e3.prototype, "variant", 2);
p3([property({
  reflect: true
})], e3.prototype, "size", 2);
e3 = p3([customElement("andy-icon-chip")], e3);
c("andy-icon-chip", e3);

// ../../packages/core/dist/components/empty-state.js
var v4 = Object.defineProperty;
var _3 = Object.getOwnPropertyDescriptor;
var a3 = (d8, s10, p6, r4) => {
  for (var t7 = r4 > 1 ? void 0 : r4 ? _3(s10, p6) : s10, o8 = d8.length - 1, i7; o8 >= 0; o8--) (i7 = d8[o8]) && (t7 = (r4 ? i7(s10, p6, t7) : i7(t7)) || t7);
  return r4 && t7 && v4(s10, p6, t7), t7;
};
var e4 = class extends d2 {
  constructor() {
    super(...arguments), this.heading = "", this.copy = "";
  }
  render() {
    return html`
      <div class="ds-empty">
        <div class="ds-empty__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
          </svg>
        </div>
        ${this.heading ? html`<p class="ds-empty__title">${this.heading}</p>` : nothing}
        ${this.copy ? html`<p class="ds-empty__copy">${this.copy}</p>` : nothing}
        ${this.slotTarget()}
      </div>
    `;
  }
};
a3([property()], e4.prototype, "heading", 2);
a3([property()], e4.prototype, "copy", 2);
e4 = a3([customElement("andy-empty-state")], e4);
c("andy-empty-state", e4);

// ../../packages/core/dist/components/breadcrumb.js
var d5 = Object.defineProperty;
var i2 = Object.getOwnPropertyDescriptor;
var c6 = (r4, e6, a7, t7) => {
  for (var s10 = t7 > 1 ? void 0 : t7 ? i2(e6, a7) : e6, p6 = r4.length - 1, l6; p6 >= 0; p6--) (l6 = r4[p6]) && (s10 = (t7 ? l6(e6, a7, s10) : l6(s10)) || s10);
  return t7 && s10 && d5(e6, a7, s10), s10;
};
var n4 = class extends d2 {
  constructor() {
    super(...arguments), this.items = [];
  }
  go(r4, e6) {
    r4.href || e6.preventDefault(), this.dispatchEvent(new CustomEvent("andy-navigate", {
      detail: r4,
      bubbles: true,
      composed: true
    }));
  }
  render() {
    const r4 = this.items.length - 1;
    return html`
      <nav class="dp-breadcrumb">
        ${this.items.map((e6, a7) => a7 === r4 ? html`<span class="leaf">${e6.label}</span>` : html`<a href=${e6.href ?? "#"} @click=${(t7) => this.go(e6, t7)}>${e6.label}</a><span class="sep">/</span>`)}
      </nav>
    `;
  }
};
c6([property({
  attribute: false
})], n4.prototype, "items", 2);
n4 = c6([customElement("andy-breadcrumb")], n4);
c("andy-breadcrumb", n4);

// ../../packages/core/dist/components/nav.js
var y5 = Object.defineProperty;
var d6 = Object.getOwnPropertyDescriptor;
var s4 = (r4, a7, i7, n7) => {
  for (var e6 = n7 > 1 ? void 0 : n7 ? d6(a7, i7) : a7, l6 = r4.length - 1, o8; l6 >= 0; l6--) (o8 = r4[l6]) && (e6 = (n7 ? o8(a7, i7, e6) : o8(e6)) || e6);
  return n7 && e6 && y5(a7, i7, e6), e6;
};
var p4 = class extends d2 {
  render() {
    return html`<ul class="nav-list">${this.slotTarget()}</ul>`;
  }
};
p4 = s4([customElement("andy-nav-list")], p4);
c("andy-nav-list", p4);
var t5 = class extends d2 {
  constructor() {
    super(...arguments), this.active = false, this.href = "", this.key = "";
  }
  onClick(r4) {
    this.href || r4.preventDefault(), this.dispatchEvent(new CustomEvent("andy-select", {
      detail: this.key,
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return html`
      <li>
        <a class="nav-item ${this.active ? "active" : ""}" href=${this.href || "#"} @click=${this.onClick}>
          ${this.hasSlot("icon") ? html`<span class="nav-item__icon">${this.slotTarget("icon")}</span>` : nothing}
          <span class="nav-label">${this.slotTarget()}</span>
        </a>
      </li>
    `;
  }
};
s4([property({
  type: Boolean,
  reflect: true
})], t5.prototype, "active", 2);
s4([property()], t5.prototype, "href", 2);
s4([property()], t5.prototype, "key", 2);
t5 = s4([customElement("andy-nav-item")], t5);
c("andy-nav-item", t5);

// ../../packages/core/dist/components/layout.js
var f7 = Object.defineProperty;
var m6 = Object.getOwnPropertyDescriptor;
var e5 = (l6, o8, v7, r4) => {
  for (var s10 = r4 > 1 ? void 0 : r4 ? m6(o8, v7) : o8, g2 = l6.length - 1, u4; g2 >= 0; g2--) (u4 = l6[g2]) && (s10 = (r4 ? u4(o8, v7, s10) : u4(s10)) || s10);
  return r4 && s10 && f7(o8, v7, s10), s10;
};
var d7 = class extends d2 {
  constructor() {
    super(...arguments), this.collapsed = false, this._onToggle = (l6) => {
      this.collapsed = l6.detail;
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("andy-collapse-toggle", this._onToggle);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("andy-collapse-toggle", this._onToggle);
  }
  render() {
    return html`
      ${this.slotTarget("sidebar")}
      <div class="app-col">
        ${this.slotTarget("header")}
        <div class="app-scroll">${this.slotTarget()}</div>
      </div>
    `;
  }
};
e5([property({
  type: Boolean,
  reflect: true
})], d7.prototype, "collapsed", 2);
d7 = e5([customElement("andy-app-shell")], d7);
c("andy-app-shell", d7);
var a4 = class extends d2 {
  constructor() {
    super(...arguments), this.collapsed = false, this.collapsible = true;
  }
  toggle() {
    this.collapsed = !this.collapsed, this.dispatchEvent(new CustomEvent("andy-collapse-toggle", {
      detail: this.collapsed,
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return html`
      <aside class="sidebar ${this.collapsed ? "collapsed" : ""}">
        <div class="sidebar-header">
          <div class="sidebar-header__top">
            <div class="sidebar-brand">${this.slotTarget("brand")}</div>
            ${this.collapsible ? html`<button class="sidebar-collapse-toggle" title="Collapse" aria-label="Collapse sidebar" @click=${this.toggle}>
                  <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 19l-7-7 7-7M19 19l-7-7 7-7" /></svg>
                </button>` : nothing}
          </div>
        </div>
        <nav class="sidebar-nav">${this.slotTarget()}</nav>
        ${this.hasSlot("footer") ? html`<div class="sidebar-footer">${this.slotTarget("footer")}</div>` : nothing}
      </aside>
    `;
  }
};
e5([property({
  type: Boolean,
  reflect: true
})], a4.prototype, "collapsed", 2);
e5([property({
  type: Boolean
})], a4.prototype, "collapsible", 2);
a4 = e5([customElement("andy-sidebar")], a4);
c("andy-sidebar", a4);
var i3 = class extends d2 {
  constructor() {
    super(...arguments), this.heading = "";
  }
  render() {
    return html`
      <div class="nav-section">
        ${this.heading ? html`<p class="nav-section-title collapsed-hide">${this.heading}</p>` : nothing}
        <ul class="nav-list">${this.slotTarget()}</ul>
      </div>
    `;
  }
};
e5([property()], i3.prototype, "heading", 2);
i3 = e5([customElement("andy-nav-section")], i3);
c("andy-nav-section", i3);
var y6 = class extends d2 {
  render() {
    return html`
      <header class="header">
        <div class="header-content">
          <div class="header-title">${this.slotTarget()}</div>
          <div class="header-actions">${this.slotTarget("actions")}</div>
        </div>
      </header>
    `;
  }
};
y6 = e5([customElement("andy-header")], y6);
c("andy-header", y6);

// ../../packages/core/dist/components/modal.js
var v5 = Object.defineProperty;
var f8 = Object.getOwnPropertyDescriptor;
var i4 = (e6, s10, a7, n7) => {
  for (var t7 = n7 > 1 ? void 0 : n7 ? f8(s10, a7) : s10, r4 = e6.length - 1, l6; r4 >= 0; r4--) (l6 = e6[r4]) && (t7 = (n7 ? l6(s10, a7, t7) : l6(t7)) || t7);
  return n7 && t7 && v5(s10, a7, t7), t7;
};
var o5 = class extends d2 {
  constructor() {
    super(...arguments), this.open = false, this.heading = "", this.persistent = false;
  }
  connectedCallback() {
    super.connectedCallback(), this._onKey = this._onKey.bind(this), document.addEventListener("keydown", this._onKey);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("keydown", this._onKey);
  }
  _onKey(e6) {
    e6.key === "Escape" && this.open && !this.persistent && this.close();
  }
  close() {
    this.open = false, this.dispatchEvent(new CustomEvent("andy-close", {
      bubbles: true,
      composed: true
    }));
  }
  onBackdrop(e6) {
    e6.target === e6.currentTarget && !this.persistent && this.close();
  }
  render() {
    return this.open ? html`
      <div class="modal-overlay" style="position:fixed" @click=${this.onBackdrop}>
        <div class="modal-content" role="dialog" aria-modal="true" aria-label=${this.heading || "Dialog"}>
          <div class="modal-header">
            <h3>${this.heading}</h3>
            <button class="modal-close" aria-label="Close" @click=${this.close}>${n2.close()}</button>
          </div>
          <div class="modal-body">${this.slotTarget()}</div>
        </div>
      </div>
    ` : nothing;
  }
};
i4([property({
  type: Boolean,
  reflect: true
})], o5.prototype, "open", 2);
i4([property()], o5.prototype, "heading", 2);
i4([property({
  type: Boolean
})], o5.prototype, "persistent", 2);
o5 = i4([customElement("andy-modal")], o5);
c("andy-modal", o5);

// ../../packages/core/dist/components/tabs.js
var h2 = Object.defineProperty;
var m7 = Object.getOwnPropertyDescriptor;
var n5 = (e6, t7, c9, i7) => {
  for (var s10 = i7 > 1 ? void 0 : i7 ? m7(t7, c9) : t7, o8 = e6.length - 1, l6; o8 >= 0; o8--) (l6 = e6[o8]) && (s10 = (i7 ? l6(t7, c9, s10) : l6(s10)) || s10);
  return i7 && s10 && h2(t7, c9, s10), s10;
};
var a5 = class extends d2 {
  constructor() {
    super(...arguments), this.tabs = [], this.active = "", this.variant = "segment";
  }
  select(e6) {
    e6 !== this.active && (this.active = e6, this.dispatchEvent(new CustomEvent("andy-change", {
      detail: e6,
      bubbles: true,
      composed: true
    })));
  }
  render() {
    const e6 = this.active || this.tabs[0]?.id;
    return this.variant === "provider" ? html`
        <div class="provider-tabs">
          ${this.tabs.map((t7) => html`<button
              class="provider-tab ${t7.id === e6 ? "active" : ""}"
              @click=${() => this.select(t7.id)}
            >
              ${t7.label}${t7.count != null ? html` <span class="tab-count">${t7.count}</span>` : nothing}
            </button>`)}
        </div>
      ` : html`
      <div class="ds-segment">
        ${this.tabs.map((t7) => html`<button
            class="ds-segment-btn ${t7.id === e6 ? "active" : ""}"
            @click=${() => this.select(t7.id)}
          >
            ${t7.label}
          </button>`)}
      </div>
    `;
  }
};
n5([property({
  attribute: false
})], a5.prototype, "tabs", 2);
n5([property()], a5.prototype, "active", 2);
n5([property({
  reflect: true
})], a5.prototype, "variant", 2);
a5 = n5([customElement("andy-tabs")], a5);
c("andy-tabs", a5);

// ../../packages/core/dist/components/accordion.js
var f9 = Object.defineProperty;
var _4 = Object.getOwnPropertyDescriptor;
var a6 = (p6, t7, s10, n7) => {
  for (var e6 = n7 > 1 ? void 0 : n7 ? _4(t7, s10) : t7, r4 = p6.length - 1, i7; r4 >= 0; r4--) (i7 = p6[r4]) && (e6 = (n7 ? i7(t7, s10, e6) : i7(e6)) || e6);
  return n7 && e6 && f9(t7, s10, e6), e6;
};
var o6 = class extends d2 {
  constructor() {
    super(...arguments), this.heading = "", this.open = false;
  }
  toggle() {
    this.open = !this.open, this.dispatchEvent(new CustomEvent("andy-toggle", {
      detail: this.open,
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return html`
      <button class="ds-accordion__head ${this.open ? "open" : ""}" @click=${this.toggle} aria-expanded=${this.open}>
        <span class="ds-accordion__icon">${n2.chevron()}</span>
        <span class="label">${this.heading}</span>
      </button>
      <div class="ds-accordion__body" ?hidden=${!this.open}>${this.slotTarget()}</div>
    `;
  }
};
a6([property()], o6.prototype, "heading", 2);
a6([property({
  type: Boolean,
  reflect: true
})], o6.prototype, "open", 2);
o6 = a6([customElement("andy-accordion")], o6);
c("andy-accordion", o6);

// ../../packages/core/dist/chunks/theme-toggle-CkuJSTBE.js
var c7 = "andy-ui-theme";
function i5() {
  return typeof document > "u" ? "light" : document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}
function y7(e6) {
  if (!(typeof document > "u")) {
    document.documentElement.dataset.theme = e6;
    try {
      localStorage.setItem(c7, e6);
    } catch {
    }
  }
}
function v6() {
  const e6 = i5() === "dark" ? "light" : "dark";
  return y7(e6), e6;
}
function P(e6 = "light") {
  if (typeof document > "u") return e6;
  let n7 = null;
  try {
    const t7 = localStorage.getItem(c7);
    (t7 === "light" || t7 === "dark") && (n7 = t7);
  } catch {
  }
  const r4 = n7 ?? e6;
  return document.documentElement.dataset.theme = r4, r4;
}
var E = Object.defineProperty;
var T = Object.getOwnPropertyDescriptor;
var l5 = (e6, n7, r4, t7) => {
  for (var o8 = t7 > 1 ? void 0 : t7 ? T(n7, r4) : n7, m11 = e6.length - 1, a7; m11 >= 0; m11--) (a7 = e6[m11]) && (o8 = (t7 ? a7(n7, r4, o8) : a7(o8)) || o8);
  return t7 && o8 && E(n7, r4, o8), o8;
};
var s5 = class extends d2 {
  constructor() {
    super(...arguments), this.theme = i5();
  }
  flip() {
    this.theme = v6(), this.dispatchEvent(new CustomEvent("andy-theme-change", {
      detail: this.theme,
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return html`
      <button class="ds-theme-toggle" aria-label="Toggle theme" @click=${this.flip}>
        <span class="sun">${n2.sun()}</span>
        <span class="moon">${n2.moon()}</span>
      </button>
    `;
  }
};
l5([state()], s5.prototype, "theme", 2);
s5 = l5([customElement("andy-theme-toggle")], s5);
c("andy-theme-toggle", s5);

// ../../packages/core/dist/components/key-box.js
var m8 = Object.defineProperty;
var b3 = Object.getOwnPropertyDescriptor;
var s6 = (o8, i7, a7, r4) => {
  for (var e6 = r4 > 1 ? void 0 : r4 ? b3(i7, a7) : i7, p6 = o8.length - 1, c9; p6 >= 0; p6--) (c9 = o8[p6]) && (e6 = (r4 ? c9(i7, a7, e6) : c9(e6)) || e6);
  return r4 && e6 && m8(i7, a7, e6), e6;
};
var t6 = class extends d2 {
  constructor() {
    super(...arguments), this.value = "", this.masked = "", this.revealed = false, this.copied = false;
  }
  get maskedText() {
    if (this.masked) return this.masked;
    const o8 = this.value.slice(-4);
    return `${this.value.slice(0, 9)}${"•".repeat(20)}${o8}`;
  }
  toggle() {
    this.revealed = !this.revealed;
  }
  copy() {
    return __async(this, null, function* () {
      try {
        yield navigator.clipboard?.writeText(this.value);
      } catch {
      }
      this.copied = true, this.dispatchEvent(new CustomEvent("andy-copy", {
        bubbles: true,
        composed: true
      })), setTimeout(() => this.copied = false, 1400);
    });
  }
  render() {
    return html`
      <div class="ds-key-box">
        <code>${this.revealed ? this.value : this.maskedText}</code>
        <button class="ds-icon-btn" title="Reveal / hide" @click=${this.toggle}>${n2.eye()}</button>
        <button class="ds-key-copy ${this.copied ? "is-copied" : ""}" @click=${this.copy}>
          ${n2.copy()}<span>${this.copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
    `;
  }
};
s6([property()], t6.prototype, "value", 2);
s6([property()], t6.prototype, "masked", 2);
s6([state()], t6.prototype, "revealed", 2);
s6([state()], t6.prototype, "copied", 2);
t6 = s6([customElement("andy-key-box")], t6);
c("andy-key-box", t6);

// ../../packages/core/dist/components/table.js
var b4 = Object.defineProperty;
var c8 = Object.getOwnPropertyDescriptor;
var m9 = (t7, e6, o8, l6) => {
  for (var r4 = l6 > 1 ? void 0 : l6 ? c8(e6, o8) : e6, n7 = t7.length - 1, i7; n7 >= 0; n7--) (i7 = t7[n7]) && (r4 = (l6 ? i7(e6, o8, r4) : i7(r4)) || r4);
  return l6 && r4 && b4(e6, o8, r4), r4;
};
var s7 = class extends d2 {
  constructor() {
    super(...arguments), this.columns = [], this.rows = [];
  }
  cellClass(t7) {
    return [t7.mono ? "cell-mono" : "", t7.strong ? "cell-strong" : ""].filter(Boolean).join(" ");
  }
  render() {
    return html`
      <div class="ds-table-panel">
        <table class="ds-table">
          <thead>
            <tr>
              ${this.columns.map((t7) => html`<th style=${t7.align === "right" ? "text-align:right" : ""}>${t7.header}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.rows.map((t7) => html`<tr>
                ${this.columns.map((e6) => html`<td class=${this.cellClass(e6)} style=${e6.align === "right" ? "text-align:right" : ""}>${String(t7[e6.key] ?? "")}</td>`)}
              </tr>`)}
          </tbody>
        </table>
      </div>
    `;
  }
};
m9([property({
  attribute: false
})], s7.prototype, "columns", 2);
m9([property({
  attribute: false
})], s7.prototype, "rows", 2);
s7 = m9([customElement("andy-table")], s7);
c("andy-table", s7);

// ../../packages/core/dist/components/chat.js
var g = Object.defineProperty;
var $ = Object.getOwnPropertyDescriptor;
var s8 = (_5, r4, l6, d8) => {
  for (var a7 = d8 > 1 ? void 0 : d8 ? $(r4, l6) : r4, m11 = _5.length - 1, h4; m11 >= 0; m11--) (h4 = _5[m11]) && (a7 = (d8 ? h4(r4, l6, a7) : h4(a7)) || a7);
  return d8 && a7 && g(r4, l6, a7), a7;
};
var y8 = class extends d2 {
  render() {
    return html`<div class="ds-chat">${this.slotTarget()}</div>`;
  }
};
y8 = s8([customElement("andy-chat")], y8);
c("andy-chat", y8);
var i6 = class extends d2 {
  constructor() {
    super(...arguments), this.kind = "user", this.author = "", this.avatar = "", this.time = "";
  }
  render() {
    return html`
      <div class="ds-msg ${this.kind}">
        <div class="ds-avatar sm round">${this.avatar}</div>
        <div class="ds-msg__bubble">
          ${this.author ? html`<p class="ds-msg__name">${this.author}</p>` : nothing}
          <div class="ds-msg__text">${this.slotTarget()}</div>
          ${this.time ? html`<div class="ds-msg__time">${this.time}</div>` : nothing}
        </div>
      </div>
    `;
  }
};
s8([property({
  reflect: true
})], i6.prototype, "kind", 2);
s8([property()], i6.prototype, "author", 2);
s8([property()], i6.prototype, "avatar", 2);
s8([property()], i6.prototype, "time", 2);
i6 = s8([customElement("andy-message")], i6);
c("andy-message", i6);
var u3 = class extends d2 {
  render() {
    return html`<span class="ds-typing"><span></span><span></span><span></span></span>`;
  }
};
u3 = s8([customElement("andy-typing")], u3);
c("andy-typing", u3);
var n6 = class extends d2 {
  constructor() {
    super(...arguments), this.name = "", this.description = "", this.meta = "", this.active = false;
  }
  render() {
    return html`
      <div class="ds-session ${this.active ? "active" : ""}">
        <span class="live"></span>
        <div>
          <div class="ds-session__name">${this.name}</div>
          ${this.description ? html`<div class="ds-session__desc">${this.description}</div>` : nothing}
          ${this.meta ? html`<div class="ds-session__meta">${this.meta}</div>` : nothing}
        </div>
      </div>
    `;
  }
};
s8([property()], n6.prototype, "name", 2);
s8([property()], n6.prototype, "description", 2);
s8([property()], n6.prototype, "meta", 2);
s8([property({
  type: Boolean,
  reflect: true
})], n6.prototype, "active", 2);
n6 = s8([customElement("andy-session")], n6);
c("andy-session", n6);

// ../../packages/core/dist/components/toast.js
var m10 = {
  success: "Success",
  info: "Notice",
  warning: "Warning",
  error: "Error"
};
var f10 = {
  success: "check",
  info: "info",
  warning: "warning",
  error: "error"
};
var s9 = null;
function p5() {
  return s9 && s9.isConnected || (s9 = document.getElementById("toast-host"), s9 || (s9 = document.createElement("div"), s9.id = "toast-host", document.body.appendChild(s9))), s9;
}
function y9(t7) {
  t7.style.animation = "ds-toast-out 0.25s ease forwards", setTimeout(() => t7.remove(), 260);
}
function o7(t7 = {}) {
  if (typeof document > "u") return () => {
  };
  const e6 = t7.type ?? "info", l6 = t7.title ?? m10[e6], r4 = t7.message ?? "", c9 = t7.duration ?? 4200, n7 = document.createElement("div");
  n7.className = `dp-toast ${e6}`, n7.style.animation = "ds-toast-in 0.3s cubic-bezier(0.34,1.56,0.64,1)";
  const i7 = () => y9(n7);
  return render(html`
      <div class="icon-box" style="--ts-w:18px">${n2[f10[e6]]()}</div>
      <div class="body">
        <div class="title">${l6}</div>
        ${r4 ? html`<div class="msg">${r4}</div>` : null}
      </div>
      <button class="close" aria-label="Dismiss" @click=${i7}>${n2.close()}</button>
    `, n7), p5().appendChild(n7), c9 > 0 && setTimeout(i7, c9), i7;
}
var h3 = {
  show: o7,
  success: (t7, e6) => o7(__spreadProps(__spreadValues({}, e6), {
    type: "success",
    message: t7
  })),
  info: (t7, e6) => o7(__spreadProps(__spreadValues({}, e6), {
    type: "info",
    message: t7
  })),
  warning: (t7, e6) => o7(__spreadProps(__spreadValues({}, e6), {
    type: "warning",
    message: t7
  })),
  error: (t7, e6) => o7(__spreadProps(__spreadValues({}, e6), {
    type: "error",
    message: t7
  }))
};

// ../../packages/angular/dist/fesm2022/andy-ui-angular.mjs
var ValueAccessorBase = class {
  el = inject(ElementRef);
  onChange = () => {
  };
  onTouched = () => {
  };
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.el.nativeElement["disabled"] = isDisabled;
  }
};
var AndyTextValueAccessor = class _AndyTextValueAccessor extends ValueAccessorBase {
  writeValue(value) {
    this.el.nativeElement["value"] = value ?? "";
  }
  handleInput(e6) {
    this.onChange(e6.detail);
  }
  handleBlur() {
    this.onTouched();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAndyTextValueAccessor_BaseFactory;
    return function AndyTextValueAccessor_Factory(__ngFactoryType__) {
      return (ɵAndyTextValueAccessor_BaseFactory || (ɵAndyTextValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_AndyTextValueAccessor)))(__ngFactoryType__ || _AndyTextValueAccessor);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _AndyTextValueAccessor,
    selectors: [["andy-input"], ["andy-search-input"]],
    hostBindings: function AndyTextValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("andy-input", function AndyTextValueAccessor_andy_input_HostBindingHandler($event) {
          return ctx.handleInput($event);
        })("blur", function AndyTextValueAccessor_blur_HostBindingHandler() {
          return ctx.handleBlur();
        });
      }
    },
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _AndyTextValueAccessor),
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AndyTextValueAccessor, [{
    type: Directive,
    args: [{
      selector: "andy-input, andy-search-input",
      standalone: true,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AndyTextValueAccessor),
        multi: true
      }]
    }]
  }], null, {
    handleInput: [{
      type: HostListener,
      args: ["andy-input", ["$event"]]
    }],
    handleBlur: [{
      type: HostListener,
      args: ["blur"]
    }]
  });
})();
var AndySelectValueAccessor = class _AndySelectValueAccessor extends ValueAccessorBase {
  writeValue(value) {
    this.el.nativeElement["value"] = value ?? "";
  }
  handleChange(e6) {
    this.onChange(e6.detail);
    this.onTouched();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAndySelectValueAccessor_BaseFactory;
    return function AndySelectValueAccessor_Factory(__ngFactoryType__) {
      return (ɵAndySelectValueAccessor_BaseFactory || (ɵAndySelectValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_AndySelectValueAccessor)))(__ngFactoryType__ || _AndySelectValueAccessor);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _AndySelectValueAccessor,
    selectors: [["andy-select"]],
    hostBindings: function AndySelectValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("andy-change", function AndySelectValueAccessor_andy_change_HostBindingHandler($event) {
          return ctx.handleChange($event);
        });
      }
    },
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _AndySelectValueAccessor),
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AndySelectValueAccessor, [{
    type: Directive,
    args: [{
      selector: "andy-select",
      standalone: true,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AndySelectValueAccessor),
        multi: true
      }]
    }]
  }], null, {
    handleChange: [{
      type: HostListener,
      args: ["andy-change", ["$event"]]
    }]
  });
})();
var AndySwitchValueAccessor = class _AndySwitchValueAccessor extends ValueAccessorBase {
  writeValue(value) {
    this.el.nativeElement["checked"] = !!value;
  }
  handleChange(e6) {
    this.onChange(e6.detail);
    this.onTouched();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAndySwitchValueAccessor_BaseFactory;
    return function AndySwitchValueAccessor_Factory(__ngFactoryType__) {
      return (ɵAndySwitchValueAccessor_BaseFactory || (ɵAndySwitchValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_AndySwitchValueAccessor)))(__ngFactoryType__ || _AndySwitchValueAccessor);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _AndySwitchValueAccessor,
    selectors: [["andy-switch"]],
    hostBindings: function AndySwitchValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("andy-change", function AndySwitchValueAccessor_andy_change_HostBindingHandler($event) {
          return ctx.handleChange($event);
        });
      }
    },
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _AndySwitchValueAccessor),
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AndySwitchValueAccessor, [{
    type: Directive,
    args: [{
      selector: "andy-switch",
      standalone: true,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AndySwitchValueAccessor),
        multi: true
      }]
    }]
  }], null, {
    handleChange: [{
      type: HostListener,
      args: ["andy-change", ["$event"]]
    }]
  });
})();
var ANDY_FORM_ACCESSORS = [AndyTextValueAccessor, AndySelectValueAccessor, AndySwitchValueAccessor];
var AndyUiModule = class _AndyUiModule {
  static ɵfac = function AndyUiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AndyUiModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AndyUiModule,
    imports: [AndyTextValueAccessor, AndySelectValueAccessor, AndySwitchValueAccessor],
    exports: [AndyTextValueAccessor, AndySelectValueAccessor, AndySwitchValueAccessor]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AndyUiModule, [{
    type: NgModule,
    args: [{
      imports: [...ANDY_FORM_ACCESSORS],
      exports: [...ANDY_FORM_ACCESSORS]
    }]
  }], null, null);
})();
var ToastService = class _ToastService {
  show(opts) {
    return o7(opts);
  }
  success(message) {
    return h3.success(message);
  }
  info(message) {
    return h3.info(message);
  }
  warning(message) {
    return h3.warning(message);
  }
  error(message) {
    return h3.error(message);
  }
  static ɵfac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ToastService,
    factory: _ToastService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
export {
  ANDY_FORM_ACCESSORS,
  AndySelectValueAccessor,
  AndySwitchValueAccessor,
  AndyTextValueAccessor,
  AndyUiModule,
  ToastService,
  i5 as getTheme,
  P as initTheme,
  y7 as setTheme,
  o7 as showToast,
  h3 as toast,
  v6 as toggleTheme
};
/*! Bundled license information:

@lit/reactive-element/development/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/reactive-element.js:
lit-html/development/lit-html.js:
lit-element/development/lit-element.js:
@lit/reactive-element/development/decorators/custom-element.js:
@lit/reactive-element/development/decorators/property.js:
@lit/reactive-element/development/decorators/state.js:
@lit/reactive-element/development/decorators/event-options.js:
@lit/reactive-element/development/decorators/base.js:
@lit/reactive-element/development/decorators/query.js:
@lit/reactive-element/development/decorators/query-all.js:
@lit/reactive-element/development/decorators/query-async.js:
@lit/reactive-element/development/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=@andy-ui_angular.js.map
