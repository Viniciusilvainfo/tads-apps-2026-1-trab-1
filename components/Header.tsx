import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

interface HeaderProps {
  title: string;
  rightAction?: () => void;
  rightText?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  rightAction,
  rightText,
}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {rightText && rightAction && (
        <TouchableOpacity onPress={rightAction}>
          <Text style={styles.rightText}>{rightText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FF6B6B',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  rightText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
});
