import React from 'react';

export const ShoppingCartContext = React.createContext();

export const withShoppingCart = OriginalComponent => {
  return wrapperProps => (
    <ShoppingCartContext.Consumer>
      {contextValue => (
        <OriginalComponent {...wrapperProps} shoppingCart={contextValue} />
      )}
    </ShoppingCartContext.Consumer>
  );
};

const connect = (OriginalComponent, mapStateToProps) => {
  return (props) => {
    <ReduxContext.Consumer>
      {(store) => {
        const extraProps = mapStateToProps(store.getState());

        return (
          <OriginalComponent {...props} {...extraProps} />
        );
      }}
    </ReduxContext.Consumer>
  }
};

export class ShoppingCartProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      addItem: this.addItem,
      removeItem: this.removeItem,
    };
  }

  addItem = item => {
    this.setState(({ items }) => {
      return {
        items: [...items, item],
      };
    });
  };

  removeItem = itemToDelete => {
    this.setState(({ items }) => {
      return {
        items: items.filter(item => item.id !== itemToDelete.id),
      };
    });
  };

  render() {
    return (
      <ShoppingCartContext.Provider value={this.state}>
        {this.props.children}
      </ShoppingCartContext.Provider>
    );
  }
}
