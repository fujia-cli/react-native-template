import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, SectionList, TextInput, Pressable} from 'react-native';
import IconSearch from '@/assets/icons/IconSearch';
import IconDelete from '@/assets/icons/IconDelete';
import IconRightArrow from '@/assets/icons/IconRightArrow';
import {useNavigation} from '@react-navigation/native';
import {trim} from '@fujia/hammer';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RootStackScreenProps} from '@/navigator/types';
import {getHistory, storeHistory, History, genHistoryItem, MAX_HISTORIES} from './utils';
import {asyncSearch, SearchResItem} from './search.service';
import {ArticleItem} from '../Article/types';
import {Empty} from '@/components/Empty';

export const SearchScreen = () => {
  const navigation = useNavigation<RootStackScreenProps<'Search'>['navigation']>();
  const [searchVal, setSearchVal] = useState('');
  const [isInputting, setIsInputting] = useState(false);
  const [histories, setHistories] = useState<History[]>([]);
  const [searchRes, setSearchRes] = useState<SearchResItem<ArticleItem>[]>([]);

  const handleChangeText = (val: string) => {
    setSearchVal(val);
  };

  const handleSetHistories = (val: string) => {
    // clone and remove duplicate item
    const cloneHistories = [...histories].filter(h => h.value.toLowerCase() !== val.toLowerCase());

    if (cloneHistories.length >= MAX_HISTORIES) {
      cloneHistories.pop();
    }

    cloneHistories.unshift(genHistoryItem(val));
    setHistories(cloneHistories);
  };

  const asyncStartSearch = async (val: string) => {
    try {
      const res = await asyncSearch(val);
      if (res.every(item => item.data.length <= 0)) {
        setSearchRes([]);
      } else {
        setSearchRes(res);
      }

      handleSetHistories(val);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = () => {
    if (trim(searchVal, true)) {
      asyncStartSearch(searchVal);
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleQuickSearch = (item: History) => {
    return () => {
      setSearchVal(item.value);
      asyncStartSearch(item.value);
    };
  };

  const handleResetSearch = () => {
    setSearchVal('');
    setSearchRes([]);
  };

  const handlePressItem = (id: string) => {
    return () => {
      navigation.navigate('ArticleDetail', {
        id,
      });
    };
  };

  useEffect(() => {
    getHistory(6).then(data => {
      if (data?.length) {
        setHistories(data);
      }
    });

    return () => {
      setSearchRes([]);
      setSearchVal('');
    };
  }, []);

  useEffect(() => {
    return () => {
      storeHistory(histories);
    };
  }, [histories]);

  const renderSectionHeader = (title: string) => {
    return <Text style={styles.listHeader}>{title}</Text>;
  };

  const renderListItem = (item: ArticleItem) => {
    return (
      <Pressable style={styles.listItem} onPress={handlePressItem(item._id)}>
        <View style={styles.itemInfo}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
          <Text numberOfLines={2} style={styles.summary}>
            {item.summary}
          </Text>
        </View>
        <View style={styles.icon}>
          <IconRightArrow color="#999" size={14} />
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchWrap}>
          <IconSearch />
          <TextInput
            value={searchVal}
            style={styles.searchIpt}
            onSubmitEditing={handleSearch}
            selectionColor="#333"
            autoFocus
            maxLength={72}
            onFocus={() => setIsInputting(true)}
            onBlur={() => setIsInputting(false)}
            returnKeyType="search"
            autoCapitalize="none"
            onChangeText={text => handleChangeText(text)}
          />
          {!!searchVal && (
            <Pressable hitSlop={12} onPress={handleResetSearch}>
              <IconDelete color="#666" />
            </Pressable>
          )}
        </View>
        <Pressable hitSlop={12} onPress={handleCancel} style={styles.searchCancel}>
          <Text style={styles.cancelText}>取消</Text>
        </Pressable>
      </View>

      {searchVal.length ? (
        <View style={styles.searchList}>
          <SectionList
            sections={searchRes}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => renderListItem(item)}
            ListEmptyComponent={isInputting ? null : <Empty title="什么也没有搜到，换个关键字试试呢~" />}
            renderSectionHeader={({section: {title}}) => renderSectionHeader(title)}
          />
        </View>
      ) : (
        <View style={styles.searchHistory}>
          <Text style={styles.historyHeader}>搜索历史</Text>
          <View style={styles.historyList}>
            {histories.map((h, index) => (
              <Pressable
                key={h.id}
                onPress={handleQuickSearch(h)}
                style={[styles.historyItem, index === 0 ? styles.itemAdjust : {}]}>
                <Text style={styles.historyItemText}>{h.value}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 6,
  },
  searchWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 18,
    paddingHorizontal: 12,
  },
  searchIpt: {
    flex: 1,
    height: 36,
    marginLeft: 8,
  },
  searchCancel: {
    marginLeft: 12,
  },
  cancelText: {
    color: '#007fff',
  },

  searchHistory: {
    alignItems: 'center',
    marginTop: 36,
  },
  historyHeader: {
    color: '#666',
  },
  historyList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    width: '80%',
  },
  historyItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    marginRight: 12,
    marginTop: 12,
    borderRadius: 4,
    overflow: 'hidden',
  },
  itemAdjust: {
    marginLeft: 0,
  },
  historyItemText: {
    color: '#666',
  },
  searchList: {
    flex: 1,
    marginTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 24,
    // marginHorizontal: 12,
  },
  listHeader: {
    marginTop: 12,
    fontSize: 14,
    color: '#666',
    paddingBottom: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    borderRadius: 8,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemInfo: {
    flex: 1,
  },
  title: {
    color: '#333',
    fontSize: 16,
  },
  summary: {
    marginTop: 6,
    color: '#666',
  },
  icon: {
    marginLeft: 12,
    padding: 6,
    borderRadius: 13,
    backgroundColor: '#f6f9f9',
  },
});
